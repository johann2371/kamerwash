import React from 'react';

const VEHICLES = [
  { id: 'citadine', name: 'Citadine', desc: 'Clio, 208, Polo, Yaris', multiplier: 1.0 },
  { id: 'berline', name: 'Berline / Break', desc: 'Passat, 508, Série 3, A4', multiplier: 1.0 },
  { id: 'suv_4x4', name: 'SUV / 4x4', desc: '3008, Tiguan, X3, Q5', multiplier: 1.25 },
  { id: 'utilitaire', name: 'Utilitaire / Van', desc: 'Trafic, Transporter, Vito', multiplier: 1.40 },
];

export default function StepFormula({ services, selectedService, setSelectedService, vehicleType, setVehicleType, onNext }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">1. Choisissez votre type de véhicule</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVehicleType(v.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                vehicleType === v.id
                  ? 'border-brand-600 bg-brand-50/50 ring-2 ring-brand-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="font-bold text-xs text-slate-900">{v.name}</div>
              <div className="text-[10px] text-slate-500 mt-0.5 truncate">{v.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">2. Choisissez votre formule de lavage</label>
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedService(s)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center ${
                selectedService?.id === s.id
                  ? 'border-brand-600 bg-brand-50/40 ring-2 ring-brand-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm text-slate-900">{s.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{s.description}</p>
                <span className="text-[11px] text-brand-600 font-semibold mt-1 inline-block">⏱️ {s.duration_minutes} min</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-slate-900">{Number(s.base_price).toFixed(2)} €</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="button"
          disabled={!selectedService}
          onClick={onNext}
          className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-bold text-sm rounded-xl transition-all"
        >
          Continuer vers l'horaire →
        </button>
      </div>
    </div>
  );
}
