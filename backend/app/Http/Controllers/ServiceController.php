<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    public function index(Request $request)
    {
        $query = Service::active();

        if ($request->has('category')) {
            $query->category($request->category);
        }

        $services = $query->withAvg('reviews', 'rating')
            ->withCount('reviews')
            ->orderBy('base_price', 'asc')
            ->get();

        return $this->successResponse($services);
    }

    public function show(Service $service)
    {
        $service->load(['reviews' => function ($q) {
            $q->where('is_published', true)->latest()->take(5);
        }, 'reviews.user:id,name']);

        $service->loadAvg('reviews', 'rating');
        $service->loadCount('reviews');

        return $this->successResponse($service);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string',
            'description' => 'required|string',
            'base_price' => 'required|numeric|min:0',
            'duration_minutes' => 'required|integer|min:15',
            'icon' => 'nullable|string',
            'included_features' => 'nullable|array',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        $service = Service::create($validated);

        return $this->successResponse($service, 'Prestation ajoutée avec succès', 201);
    }
}
