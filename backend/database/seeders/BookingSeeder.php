<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Booking;
use App\Models\User;
use App\Models\Service;
use App\Models\Vehicle;

class BookingSeeder extends Seeder
{
    public function run(): void
    {
        $client = User::where('role', 'client')->first();
        $washer = User::where('role', 'washer')->first();
        $services = Service::all();

        if (!$client || $services->isEmpty()) {
            return;
        }

        $vehicle = Vehicle::firstOrCreate(
            ['user_id' => $client->id, 'license_plate' => 'AA-123-BB'],
            [
                'type' => 'berline',
                'brand' => 'Peugeot',
                'model' => '308',
                'color' => 'Gris métallisé',
            ]
        );

        $bookingsData = [
            [
                'booking_reference' => 'AQW-20260710-8841',
                'user_id' => $client->id,
                'service_id' => $services[2]->id ?? 1, // Formule intégrale
                'vehicle_id' => $vehicle->id,
                'technician_id' => $washer?->id,
                'scheduled_date' => '2026-07-10',
                'time_slot' => '10:00 - 12:00',
                'address' => '24 Rue Victor Hugo',
                'city' => 'Versailles',
                'postal_code' => '78000',
                'notes' => 'Place de parking dans cour intérieure privée accessible.',
                'total_amount' => 89.00,
                'status' => 'completed',
                'payment_status' => 'paid_online',
            ],
            [
                'booking_reference' => 'AQW-20260814-3209',
                'user_id' => $client->id,
                'service_id' => $services[1]->id ?? 1, // Pressing vapeur
                'vehicle_id' => $vehicle->id,
                'technician_id' => $washer?->id,
                'scheduled_date' => '2026-08-14',
                'time_slot' => '14:00 - 16:00',
                'address' => '24 Rue Victor Hugo',
                'city' => 'Versailles',
                'postal_code' => '78000',
                'notes' => 'Attention aux sièges bébé à démonter.',
                'total_amount' => 59.00,
                'status' => 'completed',
                'payment_status' => 'paid_on_site',
            ],
            [
                'booking_reference' => 'AQW-20260920-5512',
                'user_id' => $client->id,
                'service_id' => $services[0]->id ?? 1, // Extérieur
                'vehicle_id' => $vehicle->id,
                'technician_id' => $washer?->id,
                'scheduled_date' => '2026-09-20',
                'time_slot' => '09:00 - 11:00',
                'address' => '24 Rue Victor Hugo',
                'city' => 'Versailles',
                'postal_code' => '78000',
                'notes' => 'Arrivée d’eau à disposition au besoin.',
                'total_amount' => 39.00,
                'status' => 'confirmed',
                'payment_status' => 'paid_online',
            ],
        ];

        foreach ($bookingsData as $item) {
            Booking::updateOrCreate(['booking_reference' => $item['booking_reference']], $item);
        }
    }
}
