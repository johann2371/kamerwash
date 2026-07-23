<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'service_id' => 'required|exists:services,id',
            'vehicle_type' => 'nullable|string|in:citadine,berline,suv_4x4,utilitaire,moto',
            'vehicle_brand' => 'nullable|string|max:100',
            'vehicle_model' => 'nullable|string|max:100',
            'license_plate' => 'nullable|string|max:20',
            'scheduled_date' => 'required|date|after_or_equal:today',
            'time_slot' => 'required|string|in:08:00 - 10:00,10:00 - 12:00,14:00 - 16:00,16:00 - 18:00',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'postal_code' => ['required', 'string', 'regex:/^(75|77|78|91|92|93|94|95)[0-9]{3}$/'],
            'notes' => 'nullable|string|max:500',
            'payment_method' => 'nullable|string|in:online,on_site',
        ];
    }

    public function messages(): array
    {
        return [
            'postal_code.regex' => 'Le service de lavage à domicile est actuellement disponible uniquement en Île-de-France (75, 78, 92, 93, 94, 95, 77, 91).',
            'scheduled_date.after_or_equal' => 'La date d\'intervention ne peut pas être dans le passé.',
            'time_slot.required' => 'Veuillez sélectionner un créneau horaire valide.',
        ];
    }
}
