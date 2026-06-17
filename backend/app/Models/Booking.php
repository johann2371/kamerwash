<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_reference',
        'user_id',
        'service_id',
        'vehicle_id',
        'technician_id',
        'scheduled_date',
        'time_slot',
        'address',
        'city',
        'postal_code',
        'notes',
        'total_amount',
        'status',
        'payment_status',
    ];

    protected $casts = [
        'scheduled_date' => 'date',
        'total_amount' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function technician()
    {
        return $this->belongsTo(User::class, 'technician_id');
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }

    public static function generateReference(): string
    {
        return 'AQW-' . date('Ymd') . '-' . strtoupper(substr(uniqid(), -4));
    }
}
