<?php

return [
    'name' => env('APP_NAME', 'AquaWash'),
    'env' => env('APP_ENV', 'production'),
    'debug' => (bool) env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => env('APP_TIMEZONE', 'Europe/Paris'),
    'locale' => 'fr',
    'fallback_locale' => 'en',
    'faker_locale' => 'fr_FR',
];
