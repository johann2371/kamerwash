import React from 'react';

export default function StepAddress({ address, setAddress, city, setCity, postalCode, setPostalCode, notes, setNotes, onPrev, onSubmit, isSubmitting }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Adresse complète de rendez-vous *</label>
        <input
          type="text"
          placeholder="Ex: 24 Rue Victor Hugo"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Ville *</label>
          <input
            type="text"
            placeholder="Ex: Versailles"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Code postal (Île-de-France) *</label>
          <input
            type="text"
            placeholder="Ex: 78000"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Instructions pour le technicien</label>
        <textarea
          rows="3"
          placeholder="Code portail, indications parking, modèle de voiture précis..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
        ></textarea>
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
          disabled={!address || !city || !postalCode || isSubmitting}
          onClick={onSubmit}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm rounded-xl shadow-md transition-all"
        >
          {isSubmitting ? 'Confirmation...' : 'Confirmer la réservation ✓'}
        </button>
      </div>
    </div>
  );
}
