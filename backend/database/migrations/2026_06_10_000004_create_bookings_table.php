<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('booking_reference')->unique();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('service_id')->constrained()->cascadeOnDelete();
            $table->foreignId('vehicle_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('technician_id')->nullable()->references('id')->on('users')->nullOnDelete();
            $table->date('scheduled_date');
            $table->string('time_slot'); // ex: 09:00 - 11:00
            $table->string('address');
            $table->string('city');
            $table->string('postal_code');
            $table->text('notes')->nullable();
            $table->decimal('total_amount', 8, 2);
            $table->string('status')->default('pending'); // pending, confirmed, in_progress, completed, cancelled
            $table->string('payment_status')->default('unpaid'); // unpaid, paid_online, paid_on_site
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
