<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Service;
use App\Models\Booking;

class BookingTest extends TestCase
{
    public function test_user_can_view_cleaning_services_list(): void
    {
        $response = $this->getJson('/api/services');
        $response->assertStatus(200)
                 ->assertJsonStructure(['success', 'data']);
    }

    public function test_authenticated_client_can_create_a_home_washing_booking(): void
    {
        $client = User::factory()->create(['role' => 'client']);
        $service = Service::first() ?? Service::create([
            'name' => 'Lavage Test',
            'slug' => 'lavage-test',
            'category' => 'auto_exterieur',
            'description' => 'Test',
            'base_price' => 40.00,
            'duration_minutes' => 60,
        ]);

        $payload = [
            'service_id' => $service->id,
            'vehicle_type' => 'berline',
            'scheduled_date' => now()->addDays(2)->format('Y-m-d'),
            'time_slot' => '10:00 - 12:00',
            'address' => '15 Avenue Foch',
            'city' => 'Paris',
            'postal_code' => '75016',
        ];

        $response = $this->actingAs($client)->postJson('/api/bookings', $payload);

        $response->assertStatus(201)
                 ->assertJsonPath('success', true);
    }
}
