<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookingStatusRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->isAdmin() || $this->user()->isTechnician();
    }

    public function rules(): array
    {
        return [
            'status' => 'required|string|in:pending,confirmed,in_progress,completed,cancelled',
            'technician_id' => 'nullable|exists:users,id',
            'payment_status' => 'nullable|string|in:unpaid,paid_online,paid_on_site',
        ];
    }
}
