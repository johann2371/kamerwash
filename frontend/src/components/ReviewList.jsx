import React from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Thomas R.',
    city: 'Boulogne-Billancourt',
    rating: 5,
    date: 'Il y a 3 jours',
    service: 'Formule Intégrale Prestige',
    comment: 'Technicien ponctuel et très professionnel. La voiture n\'avait jamais été aussi propre depuis sa sortie de concession. Je recommande les yeux fermés !'
  },
  {
    id: 2,
    name: 'Élodie M.',
    city: 'Versailles',
    rating: 5,
    date: 'Il y a 1 semaine',
    service: 'Nettoyage Canapé Tissu',
    comment: 'Les taches de chocolat faites par mes enfants ont complètement disparu ! Canapé comme neuf en moins de deux heures sans bouger de mon salon.'
  },
  {
    id: 3,
    name: 'Karim B.',
    city: 'Paris 16e',
    rating: 5,
    date: 'Il y a 2 semaines',
    service: 'Pressing Intérieur Vapeur',
    comment: 'Lavage vapeur impressionnant. Les odeurs de tabac et la poussière incrustée dans les buses d\'aération sont totalement parties.'
  }
];

export default function ReviewList() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Témoignages vérifiés</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Ce que pensent nos clients de nos lavages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 text-sm mb-3">
                  {'★'.repeat(rev.rating)}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex justify-between items-end">
                <div>
                  <div className="font-bold text-sm text-slate-900">{rev.name}</div>
                  <div className="text-xs text-slate-500">{rev.city} • {rev.service}</div>
                </div>
                <span className="text-[11px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
