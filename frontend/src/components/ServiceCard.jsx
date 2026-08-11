import React from 'react';

export default function ServiceCard({ service, onSelect }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-brand-50 text-brand-700 rounded-full">
            {service.category.replace('_', ' ')}
          </span>
          <span className="text-xs text-slate-500 font-medium flex items-center">
            ⏱️ {service.duration_minutes} min
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-slate-600 text-sm mt-2 mb-4 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-2 mt-auto mb-6">
          {service.included_features && service.included_features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs text-slate-700">
              <span className="w-4 h-4 mr-2 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[10px]">
                ✓
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-500">À partir de</span>
            <div className="text-2xl font-black text-slate-900">
              {Number(service.base_price).toFixed(2)} €
            </div>
          </div>
          <button
            onClick={() => onSelect(service)}
            className="px-4 py-2 bg-slate-900 group-hover:bg-brand-600 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors"
          >
            Choisir cette formule
          </button>
        </div>
      </div>
    </div>
  );
}
