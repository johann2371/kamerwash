import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-aqua-400 flex items-center justify-center text-white font-black text-xl shadow-md shadow-brand-500/20">
              W
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Aqua<span className="text-brand-600">Wash</span></span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">À domicile</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActivePage('home')}
              className={`text-sm font-medium transition-colors ${activePage === 'home' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Accueil
            </button>
            <button
              onClick={() => setActivePage('services')}
              className={`text-sm font-medium transition-colors ${activePage === 'services' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Nos Formules
            </button>
            <button
              onClick={() => setActivePage('dashboard')}
              className={`text-sm font-medium transition-colors ${activePage === 'dashboard' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Mes Réservations
            </button>
            <button
              onClick={() => setActivePage('admin')}
              className={`text-sm font-medium transition-colors ${activePage === 'admin' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Espace Pro
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-brand-600/25 transition-all transform hover:-translate-y-0.5"
            >
              Réserver un lavage
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-slate-700"
          >
            Accueil
          </button>
          <button
            onClick={() => { setActivePage('services'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-slate-700"
          >
            Nos Formules
          </button>
          <button
            onClick={() => { setActivePage('dashboard'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-slate-700"
          >
            Mes Réservations
          </button>
          <button
            onClick={() => { setActivePage('admin'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-slate-700"
          >
            Espace Pro
          </button>
          <button
            onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
            className="w-full mt-2 py-3 bg-brand-600 text-white rounded-xl font-semibold text-center"
          >
            Réserver maintenant
          </button>
        </div>
      )}
    </nav>
  );
}
