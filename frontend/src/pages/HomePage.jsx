import React from 'react';
import ServiceCard from '../components/ServiceCard';

export default function HomePage({ services, onSelectService, onOpenBooking }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 bg-gradient-to-b from-brand-50/60 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-100/70 text-brand-800 rounded-full text-xs font-semibold">
                <span>✨ Service Premium de Nettoyage à Domicile</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Votre véhicule étincelant <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-aqua-500">sans bouger de chez vous.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Nos techniciens certifiés interviennent chez vous ou sur votre lieu de travail avec tout le matériel autonome. Auto, canapé, tapis : un résultat pressing garanti.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  Réserver en 2 minutes
                </button>
                <a
                  href="#services-section"
                  className="px-7 py-3.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold rounded-2xl transition-colors text-center shadow-sm"
                >
                  Voir nos formules
                </a>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-black text-slate-900">4.9 / 5</div>
                  <div className="text-xs text-slate-500 font-medium">★ +1 200 avis clients</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Autonome eau & énergie</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">7j / 7</div>
                  <div className="text-xs text-slate-500 font-medium">Intervention express</div>
                </div>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-brand-600 to-aqua-400 p-1 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-[22px] p-8 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-56 h-56 bg-brand-500/20 rounded-full blur-3xl"></div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-brand-300 uppercase">AquaWash Express</span>
                    <h3 className="text-2xl font-bold mt-2">Intervention à domicile clé en main</h3>
                    <p className="text-slate-300 text-sm mt-2">Nos camions ateliers sont équipés de nettoyeurs vapeur haute pression, d'injecteurs-extracteurs et de produits écologiques biodégradables.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">Statut en direct</span>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">Disponible aujourd'hui</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Techniciens disponibles sur votre secteur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-600 uppercase">Simplicité maximale</h2>
            <p className="text-3xl font-black text-slate-900 mt-2">Comment se déroule votre lavage ?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-black text-lg mb-6">1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Choisissez votre formule</h3>
              <p className="text-slate-600 text-sm">Sélectionnez le type de lavage ou pressing ainsi que votre véhicule ou mobilier.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-black text-lg mb-6">2</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fixez date & adresse</h3>
              <p className="text-slate-600 text-sm">Indiquez votre créneau favori. Le technicien vient à l'adresse de votre choix avec son équipement autonome.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-black text-lg mb-6">3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Profitez du résultat</h3>
              <p className="text-slate-600 text-sm">Votre voiture ou canapé retrouve son éclat d'origine sans aucun effort de votre part.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-brand-600 uppercase">Prestations populaires</h2>
              <p className="text-3xl font-black text-slate-900 mt-2">Nos formules de lavage à domicile</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={onSelectService}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
