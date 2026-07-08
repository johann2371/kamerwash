<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Service;
use App\Models\Vehicle;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingStatusRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $query = Booking::with(['service', 'vehicle', 'technician:id,name,phone']);

        if ($user->role === 'client') {
            $query->where('user_id', $user->id);
        } elseif ($user->isTechnician()) {
            $query->where(function ($q) use ($user) {
                $q->where('technician_id', $user->id)
                  ->orWhereNull('technician_id');
            });
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        $bookings = $query->orderBy('scheduled_date', 'desc')->get();
        return $this->successResponse($bookings);
    }

    public function store(StoreBookingRequest $request)
    {
        $user = $request->user();
        $service = Service::findOrFail($request->service_id);

        $existing = Booking::where('scheduled_date', $request->scheduled_date)
            ->where('time_slot', $request->time_slot)
            ->where('status', '!=', 'cancelled')
            ->count();

        if ($existing >= 3) {
            return $this->errorResponse('Ce créneau horaire est complet pour cette date.', 422);
        }

        return DB::transaction(function () use ($request, $user, $service) {
            $vehicleId = null;
            if ($request->filled('vehicle_type')) {
                $vehicle = Vehicle::create([
                    'user_id' => $user->id,
                    'type' => $request->vehicle_type,
                    'brand' => $request->vehicle_brand,
                    'model' => $request->vehicle_model,
                    'license_plate' => $request->license_plate,
                ]);
                $vehicleId = $vehicle->id;
            }

            $totalAmount = $request->filled('vehicle_type')
                ? $service->calculatePriceForVehicle($request->vehicle_type)
                : $service->base_price;

            $booking = Booking::create([
                'booking_reference' => Booking::generateReference(),
                'user_id' => $user->id,
                'service_id' => $service->id,
                'vehicle_id' => $vehicleId,
                'scheduled_date' => $request->scheduled_date,
                'time_slot' => $request->time_slot,
                'address' => $request->address,
                'city' => $request->city,
                'postal_code' => $request->postal_code,
                'notes' => $request->notes,
                'total_amount' => $totalAmount,
                'status' => 'pending',
                'payment_status' => $request->payment_method === 'online' ? 'paid_online' : 'unpaid',
            ]);

            return $this->successResponse($booking->load(['service', 'vehicle']), 'Réservation enregistrée avec succès !', 201);
        });
    }

    public function show(Booking $booking)
    {
        return $this->successResponse($booking->load(['service', 'vehicle', 'technician', 'review']));
    }

    public function cancel(Request $request, Booking $booking)
    {
        $user = $request->user();
        if ($user->role === 'client' && $booking->user_id !== $user->id) {
            return $this->errorResponse('Non autorisé.', 403);
        }

        if (in_array($booking->status, ['completed', 'cancelled'])) {
            return $this->errorResponse('Cette réservation ne peut plus être annulée.', 422);
        }

        $booking->update(['status' => 'cancelled']);
        return $this->successResponse($booking, 'Réservation annulée avec succès');
    }

    public function updateStatus(UpdateBookingStatusRequest $request, Booking $booking)
    {
        $booking->update($request->validated());
        return $this->successResponse($booking->fresh(['service', 'technician']), 'Statut mis à jour');
    }

    public function availableSlots(Request $request)
    {
        $date = $request->query('date', now()->format('Y-m-d'));
        $allSlots = [
            '08:00 - 10:00',
            '10:00 - 12:00',
            '14:00 - 16:00',
            '16:00 - 18:00',
        ];

        $counts = Booking::where('scheduled_date', $date)
            ->where('status', '!=', 'cancelled')
            ->select('time_slot', DB::raw('count(*) as total'))
            ->groupBy('time_slot')
            ->pluck('total', 'time_slot');

        $result = [];
        foreach ($allSlots as $slot) {
            $booked = $counts[$slot] ?? 0;
            $result[] = [
                'slot' => $slot,
                'available' => $booked < 3,
                'remaining' => max(0, 3 - $booked),
            ];
        }

        return $this->successResponse($result);
    }
}
