<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'category',
        'description',
        'base_price',
        'duration_minutes',
        'icon',
        'included_features',
        'is_active',
    ];

    protected $casts = [
        'included_features' => 'array',
        'is_active' => 'boolean',
        'base_price' => 'decimal:2',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    public function calculatePriceForVehicle(string $vehicleType): float
    {
        $multiplier = match ($vehicleType) {
            'suv_4x4' => 1.25,
            'utilitaire' => 1.40,
            'moto' => 0.70,
            default => 1.00, // citadine & berline
        };

        return round((float) $this->base_price * $multiplier, 2);
    }
}
