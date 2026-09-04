import React, { useState } from 'react';
import StatusBadge from '../components/StatusBadge';

const DEMO_BOOKINGS = [
  {
    id: 1,
    booking_reference: 'AQW-20260920-5512',
    service: { name: 'Lavage Extérieur Express', category: 'auto_exterieur' },
    vehicle: { type: 'berline', brand: 'Peugeot 308', license_plate: 'AA-123-BB' },
    technician: { name: 'Marc Dubois', phone: '06 98 76 54 32' },
    scheduled_date: '2026-09-20',
    time_slot: '09:00 - 11:00',
    address: '24 Rue Victor Hugo, Versailles',
    total_amount: '39.00',
    status: 'confirmed',
    payment_status: 'paid_online',
  },
  {
    id: 2,
    booking_reference: 'AQW-20260814-3209',
    service: { name: 'Pressing Intérieur Vapeur', category: 'auto_interieur' },
    vehicle: { type: 'berline', brand: 'Peugeot 308', license_plate: 'AA-123-BB' },
    technician: { name: 'Samir Benali', phone: '07 11 22 33 44' },
    scheduled_date: '2026-08-14',
    time_slot: '14:00 - 16:00',
    address: '24 Rue Victor Hugo, Versailles',
    total_amount: '59.00',
    status: 'completed',
    payment_status: 'paid_on_site',
  },
  {
    id: 3,
    booking_reference: 'AQW-20260710-8841',
    service: { name: 'Formule Intégrale Prestige', category: 'auto_integral' },
    vehicle: { type: 'berline', brand: 'Peugeot 308', license_plate: 'AA-123-BB' },
    technician: { name: 'Marc Dubois', phone: '06 98 76 54 32' },
    scheduled_date: '2026-07-10',
    time_slot: '10:00 - 12:00',
    address: '24 Rue Victor Hugo, Versailles',
    total_amount: '89.00',
    status: 'completed',
    payment_status: 'paid_online',
  }
];

export default function DashboardPage({ onNewBooking }) {
  const [bookings] = useState(DEMO_BOOKINGS);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Espace Client</h1>
            <p className="text-sm text-slate-600 mt-1">Suivez l'état d'avancement de vos lavages à domicile.</p>
          </div>
          <button
            onClick={onNewBooking}
            className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-md transition-all self-start sm:self-auto"
          >
            + Nouvelle réservation
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase text-slate-500">Rendez-vous à venir</span>
            <div className="text-3xl font-black text-brand-600 mt-2">1</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase text-slate-500">Prestations terminées</span>
            <div className="text-3xl font-black text-slate-900 mt-2">2</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase text-slate-500">Total fidélité</span>
            <div className="text-3xl font-black text-emerald-600 mt-2">187.00 €</div>
          </div>
        </div>

        {/* Bookings Table / Cards */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Historique des interventions à domicile</h3>
          </div>

          <div className="divide-y divide-slate-100">
            {bookings.map((b) => (
              <div key={b.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-brand-600">{b.booking_reference}</span>
                    <StatusBadge status={b.status} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{b.service.name}</h4>
                  <p className="text-xs text-slate-500">
                    📍 {b.address} • 🚗 {b.vehicle.brand} ({b.vehicle.license_plate})
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="text-left sm:text-right">
                    <div className="text-xs font-semibold text-slate-500">Date & Heure</div>
                    <div className="text-sm font-bold text-slate-900">{b.scheduled_date}</div>
                    <div className="text-xs text-brand-600">{b.time_slot}</div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs font-semibold text-slate-500">Technicien assigné</div>
                    <div className="text-sm font-bold text-slate-900">{b.technician.name}</div>
                    <div className="text-xs text-slate-500">{b.technician.phone}</div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs font-semibold text-slate-500">Montant</div>
                    <div className="text-lg font-black text-slate-900">{b.total_amount} €</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
