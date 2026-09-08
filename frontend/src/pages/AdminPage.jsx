import React, { useState } from 'react';
import StatusBadge from '../components/StatusBadge';

export default function AdminPage() {
  const [interventions, setInterventions] = useState([
    {
      id: 101,
      client: 'Camille Laurent',
      phone: '06 55 44 33 22',
      service: 'Formule Intégrale Prestige',
      address: '24 Rue Victor Hugo, Versailles',
      slot: '09:00 - 11:00',
      technician: 'Marc Dubois',
      status: 'confirmed',
      amount: '89.00 €'
    },
    {
      id: 102,
      client: 'Alexandre Mercier',
      phone: '06 12 78 90 34',
      service: 'Nettoyage Canapé 3 places',
      address: '8 Boulevard de la Reine, Versailles',
      slot: '11:30 - 13:00',
      technician: 'Samir Benali',
      status: 'in_progress',
      amount: '69.00 €'
    },
    {
      id: 103,
      client: 'Sophie Guérin',
      phone: '07 89 01 23 45',
      service: 'Lavage Extérieur Express',
      address: '14 Rue Carnot, Saint-Cloud',
      slot: '14:30 - 15:30',
      technician: 'Marc Dubois',
      status: 'pending',
      amount: '39.00 €'
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setInterventions(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold text-brand-600 tracking-wider uppercase">Console d'administration</span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Planning & Interventions du jour</h1>
        </div>

        {/* Dispatch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase">Techniciens en tournée</span>
            <div className="text-2xl font-black text-slate-900 mt-2">2 actifs</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Marc D. & Samir B.</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase">Chiffre d'affaires estimé du jour</span>
            <div className="text-2xl font-black text-brand-600 mt-2">197.00 €</div>
            <div className="text-xs text-slate-500 mt-1">3 interventions prévues</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase">Taux de satisfaction</span>
            <div className="text-2xl font-black text-emerald-600 mt-2">98.5%</div>
            <div className="text-xs text-slate-500 mt-1">Basé sur 1 240 avis vérifiés</div>
          </div>
        </div>

        {/* Interventions table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Interventions programmées</h3>
            <span className="text-xs bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-bold">Aujourd'hui</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase border-b border-slate-100">
                <tr>
                  <th className="p-4">Client</th>
                  <th className="p-4">Prestation</th>
                  <th className="p-4">Adresse & Horaires</th>
                  <th className="p-4">Technicien</th>
                  <th className="p-4">Statut</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {interventions.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50">
                    <td className="p-4">
                      <div className="font-bold text-slate-900">{item.client}</div>
                      <div className="text-xs text-slate-400">{item.phone}</div>
                    </td>
                    <td className="p-4 font-semibold text-slate-800">{item.service}</td>
                    <td className="p-4">
                      <div>{item.address}</div>
                      <div className="text-xs font-bold text-brand-600">{item.slot}</div>
                    </td>
                    <td className="p-4 font-medium text-slate-700">{item.technician}</td>
                    <td className="p-4"><StatusBadge status={item.status} /></td>
                    <td className="p-4">
                      <select
                        value={item.status}
                        onChange={(e) => updateStatus(item.id, e.target.value)}
                        className="text-xs border border-slate-300 rounded-lg p-1.5 bg-white font-medium focus:ring-1 focus:ring-brand-500"
                      >
                        <option value="pending">En attente</option>
                        <option value="confirmed">Confirmé</option>
                        <option value="in_progress">Lavage en cours</option>
                        <option value="completed">Terminé</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
