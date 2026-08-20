import React from 'react';

const SLOTS = [
  { time: '08:00 - 10:00', label: 'Matin 1', spots: 2 },
  { time: '10:00 - 12:00', label: 'Matin 2', spots: 1 },
  { time: '14:00 - 16:00', label: 'Après-midi 1', spots: 3 },
  { time: '16:00 - 18:00', label: 'Fin de journée', spots: 2 },
];

export default function StepDateTime({ scheduledDate, setScheduledDate, timeSlot, setTimeSlot, onPrev, onNext }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Sélectionnez la date d'intervention</label>
        <input
          type="date"
          value={scheduledDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setScheduledDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Sélectionnez le créneau horaire</label>
        <div className="grid grid-cols-2 gap-3">
          {SLOTS.map((s) => (
            <button
              key={s.time}
              type="button"
              onClick={() => setTimeSlot(s.time)}
              className={`p-4 rounded-xl border text-center transition-all ${
                timeSlot === s.time
                  ? 'border-brand-600 bg-brand-50/80 text-brand-900 font-bold ring-2 ring-brand-500/20'
                  : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
              }`}
            >
              <div className="text-sm font-semibold">{s.time}</div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">✓ {s.spots} techniciens dispos</div>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl"
        >
          ← Retour
        </button>
        <button
          type="button"
          disabled={!scheduledDate || !timeSlot}
          onClick={onNext}
          className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-bold text-sm rounded-xl"
        >
          Continuer vers l'adresse →
        </button>
      </div>
    </div>
  );
}
