<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $reviews = Review::where('is_published', true)
            ->with(['user:id,name', 'service:id,name'])
            ->latest()
            ->paginate(10);

        return $this->successResponse($reviews);
    }

    public function store(Request $request, Booking $booking)
    {
        $user = $request->user();

        if ($booking->user_id !== $user->id) {
            return $this->errorResponse('Vous ne pouvez noter que vos propres réservations.', 403);
        }

        if ($booking->status !== 'completed') {
            return $this->errorResponse('La prestation doit être terminée avant de laisser un avis.', 422);
        }

        if ($booking->review()->exists()) {
            return $this->errorResponse('Vous avez déjà noté cette prestation.', 422);
        }

        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        $review = Review::create([
            'booking_id' => $booking->id,
            'user_id' => $user->id,
            'service_id' => $booking->service_id,
            'rating' => $validated['rating'],
            'comment' => $validated['comment'] ?? null,
            'is_published' => true,
        ]);

        return $this->successResponse($review, 'Merci pour votre avis !', 201);
    }
}
