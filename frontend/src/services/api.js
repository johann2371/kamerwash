// Service de communication avec l'API Laravel AquaWash

const API_BASE_URL = '/api';

const MOCK_SERVICES = [
  {
    id: 1,
    name: 'Lavage Extérieur Express',
    slug: 'lavage-exterieur-express',
    category: 'auto_exterieur',
    description: 'Lavage carrosserie sans eau haute brillance, nettoyage des jantes et vitres extérieures à domicile.',
    base_price: 39.00,
    duration_minutes: 45,
    icon: 'Sparkles',
    included_features: [
      'Nettoyage carrosserie éco-responsable',
      'Dégraissage et brillant pneus / jantes',
      'Finition vitres sans traces',
      'Démoustiquage face avant'
    ]
  },
  {
    id: 2,
    name: 'Pressing Intérieur Vapeur',
    slug: 'pressing-interieur-vapeur',
    category: 'auto_interieur',
    description: 'Aspiration habitacle & coffre, désinfection vapeur haute température des textiles et plastiques.',
    base_price: 59.00,
    duration_minutes: 75,
    icon: 'Wind',
    included_features: [
      'Aspiration intégrale habitacle & coffre',
      'Nettoyage vapeur antibactérien 140°C',
      'Dépoussiérage et protection plastiques',
      'Parfum d’ambiance assainissant'
    ]
  },
  {
    id: 3,
    name: 'Formule Intégrale Prestige',
    slug: 'formule-integrale-prestige',
    category: 'auto_integral',
    description: 'Le soin total intérieur + extérieur avec cire déperlante et shampouinage complet des sièges.',
    base_price: 89.00,
    duration_minutes: 120,
    icon: 'ShieldCheck',
    included_features: [
      'Lavage carrosserie + cire hydrophobe',
      'Rénovation jantes et passages de roues',
      'Shampouinage injection-extraction sièges',
      'Pressing des tapis de sol'
    ]
  },
  {
    id: 4,
    name: 'Nettoyage Canapé & Fauteuils',
    slug: 'nettoyage-canape-fauteuils',
    category: 'canape_textile',
    description: 'Détachage et désinfection en profondeur de canapés en tissu ou cuir directement chez vous.',
    base_price: 69.00,
    duration_minutes: 90,
    icon: 'Armchair',
    included_features: [
      'Diagnostic fibre & pré-détachage ciblé',
      'Injection-extraction professionnelle',
      'Élimination des acariens et odeurs',
      'Séchage accéléré ventilé'
    ]
  }
];

export async function fetchServices(category = '') {
  try {
    const url = category ? `${API_BASE_URL}/services?category=${category}` : `${API_BASE_URL}/services`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('API non disponible');
    const json = await res.json();
    return json.data || json;
  } catch (err) {
    return category 
      ? MOCK_SERVICES.filter(s => s.category === category)
      : MOCK_SERVICES;
  }
}

export async function fetchAvailableSlots(date) {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings/available-slots?date=${date}`);
    if (!res.ok) throw new Error('Erreur slots');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return [
      { slot: '08:00 - 10:00', available: true, remaining: 2 },
      { slot: '10:00 - 12:00', available: true, remaining: 1 },
      { slot: '14:00 - 16:00', available: true, remaining: 3 },
      { slot: '16:00 - 18:00', available: false, remaining: 0 },
    ];
  }
}

export async function createBooking(payload) {
  try {
    const token = localStorage.getItem('aquawash_token');
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err) {
    // Mode démo de secours
    return {
      success: true,
      data: {
        booking_reference: 'AQW-DEMO-' + Math.floor(1000 + Math.random() * 9000),
        status: 'pending',
        ...payload
      }
    };
  }
}
