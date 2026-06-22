<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'name' => 'Lavage Extérieur Express',
                'slug' => 'lavage-exterieur-express',
                'category' => 'auto_exterieur',
                'description' => 'Lavage carrosserie sans eau haute brillance, nettoyage des jantes et vitres extérieures à domicile.',
                'base_price' => 39.00,
                'duration_minutes' => 45,
                'icon' => 'Sparkles',
                'included_features' => [
                    'Nettoyage carrosserie éco-responsable',
                    'Dégraissage et brillant pneus / jantes',
                    'Finition vitres extérieures sans traces',
                    'Démoustiquage face avant'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Pressing Intérieur Vapeur',
                'slug' => 'pressing-interieur-vapeur',
                'category' => 'auto_interieur',
                'description' => 'Aspiration en profondeur habitacle et coffre, désinfection vapeur des textiles, plastiques et tableau de bord.',
                'base_price' => 59.00,
                'duration_minutes' => 75,
                'icon' => 'Wind',
                'included_features' => [
                    'Aspiration complète habitacle et coffre',
                    'Nettoyage et désinfection à la vapeur sèche',
                    'Dépoussiérage et protection des plastiques',
                    'Traitement anti-bactérien et parfum d’ambiance'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Formule Intégrale Prestige',
                'slug' => 'formule-integrale-prestige',
                'category' => 'auto_integral',
                'description' => 'Le soin complet intérieur + extérieur avec cire de protection déperlante et shampouinage sièges.',
                'base_price' => 89.00,
                'duration_minutes' => 120,
                'icon' => 'ShieldCheck',
                'included_features' => [
                    'Lavage extérieur complet + cire hydrophobe',
                    'Rénovation jantes et passages de roues',
                    'Shampouinage injection-extraction des sièges',
                    'Pressing tapis et moquettes'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Nettoyage Canapé & Fauteuils',
                'slug' => 'nettoyage-canape-fauteuils',
                'category' => 'canape_textile',
                'description' => 'Détachage et désinfection en profondeur de canapés en tissu ou cuir à votre domicile.',
                'base_price' => 69.00,
                'duration_minutes' => 90,
                'icon' => 'Armchair',
                'included_features' => [
                    'Inspection des fibres et pré-traitement des taches',
                    'Injection-extraction professionnelle eau chaude',
                    'Élimination des acariens et mauvaises odeurs',
                    'Séchage rapide ventilé'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Shampouinage Tapis & Moquettes',
                'slug' => 'shampouinage-tapis-moquettes',
                'category' => 'canape_textile',
                'description' => 'Ravivage des couleurs et désodorisation complète de vos tapis et surfaces moquettées.',
                'base_price' => 45.00,
                'duration_minutes' => 60,
                'icon' => 'Layers',
                'included_features' => [
                    'Aspiration rotative des fibres',
                    'Détachage ciblé (café, graisse, traces d’animaux)',
                    'Désodorisation assainissante',
                    'Adapté aux tapis délicats et laine'
                ],
                'is_active' => true,
            ]
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(['slug' => $service['slug']], $service);
        }
    }
}
