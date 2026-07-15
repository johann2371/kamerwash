<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\User;
use App\Models\Review;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats(Request $request)
    {
        $user = $request->user();

        if ($user->isAdmin()) {
            $stats = [
                'total_bookings' => Booking::count(),
                'pending_bookings' => Booking::where('status', 'pending')->count(),
                'completed_bookings' => Booking::where('status', 'completed')->count(),
                'total_revenue' => Booking::where('status', 'completed')->sum('total_amount'),
                'active_technicians' => User::where('role', 'washer')->count(),
                'average_rating' => round(Review::avg('rating') ?? 4.9, 1),
            ];
            return $this->successResponse($stats);
        }

        if ($user->isTechnician()) {
            $stats = [
                'assigned_today' => Booking::where('technician_id', $user->id)
                    ->whereDate('scheduled_date', today())
                    ->count(),
                'completed_total' => Booking::where('technician_id', $user->id)
                    ->where('status', 'completed')
                    ->count(),
            ];
            return $this->successResponse($stats);
        }

        // Client
        $stats = [
            'upcoming_bookings' => Booking::where('user_id', $user->id)
                ->whereIn('status', ['pending', 'confirmed', 'in_progress'])
                ->count(),
            'completed_bookings' => Booking::where('user_id', $user->id)
                ->where('status', 'completed')
                ->count(),
            'total_spent' => Booking::where('user_id', $user->id)
                ->where('status', 'completed')
                ->sum('total_amount'),
        ];

        return $this->successResponse($stats);
    }
}
