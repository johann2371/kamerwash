import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage({ services, onSelectService }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les prestations' },
    { id: 'auto_exterieur', label: 'Extérieur Auto' },
    { id: 'auto_interieur', label: 'Intérieur Auto' },
    { id: 'auto_integral', label: 'Formules Complètes' },
    { id: 'canape_textile', label: 'Canapés & Tapis' },
  ];

  const filtered = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Catalogue de nos prestations à domicile</h1>
          <p className="text-slate-600 text-sm mt-3">
            Des soins haut de gamme adaptés à vos véhicules et mobiliers textiles, sans vous déplacer.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === cat.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
