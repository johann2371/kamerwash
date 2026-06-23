<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Admin
        User::updateOrCreate(
            ['email' => 'admin@aquawash.fr'],
            [
                'name' => 'Johann Gouaffo',
                'password' => Hash::make('password123'),
                'phone' => '06 12 34 56 78',
                'role' => 'admin',
                'address' => '12 Avenue des Champs-Élysées',
                'city' => 'Paris',
                'postal_code' => '75008',
            ]
        );

        // Techniciens
        User::updateOrCreate(
            ['email' => 'marc.technicien@aquawash.fr'],
            [
                'name' => 'Marc Dubois',
                'password' => Hash::make('password123'),
                'phone' => '06 98 76 54 32',
                'role' => 'washer',
                'address' => '45 Rue de la République',
                'city' => 'Boulogne-Billancourt',
                'postal_code' => '92100',
            ]
        );

        User::updateOrCreate(
            ['email' => 'samir.technicien@aquawash.fr'],
            [
                'name' => 'Samir Benali',
                'password' => Hash::make('password123'),
                'phone' => '07 11 22 33 44',
                'role' => 'washer',
                'address' => '8 Boulevard Voltaire',
                'city' => 'Montreuil',
                'postal_code' => '93100',
            ]
        );

        // Client Démo
        User::updateOrCreate(
            ['email' => 'client@aquawash.fr'],
            [
                'name' => 'Camille Laurent',
                'password' => Hash::make('password123'),
                'phone' => '06 55 44 33 22',
                'role' => 'client',
                'address' => '24 Rue Victor Hugo',
                'city' => 'Versailles',
                'postal_code' => '78000',
            ]
        );
    }
}
