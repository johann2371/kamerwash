import React from 'react';
import BookingModal from '../components/BookingModal';

export default function BookingPage({ services, onOpenModal }) {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl font-black">
            📅
          </div>
          <h1 className="text-3xl font-black text-slate-900">Planifier un lavage à votre domicile</h1>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Sélectionnez votre formule, renseignez votre créneau ainsi que votre adresse en Île-de-France. Nos véhicules ateliers se déplacent chez vous.
          </p>

          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg shadow-brand-600/30 transition-all text-sm"
          >
            Ouvrir le formulaire de réservation
          </button>
        </div>
      </div>
    </div>
  );
}
