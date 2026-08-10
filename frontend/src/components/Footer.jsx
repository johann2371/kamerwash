import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-brand-500 text-white flex items-center justify-center font-black">
                W
              </div>
              <span className="text-xl font-bold text-white tracking-tight">AquaWash</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Le service n°1 de lavage auto & pressing textile à domicile. Des techniciens équipés et autonomes chez vous 7j/7.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100% autonome en eau & électricité</span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Prestations</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-white cursor-pointer transition-colors">Lavage Extérieur Bio</li>
              <li className="hover:text-white cursor-pointer transition-colors">Désinfection Vapeur Habitacle</li>
              <li className="hover:text-white cursor-pointer transition-colors">Formule Prestige Intégrale</li>
              <li className="hover:text-white cursor-pointer transition-colors">Nettoyage Canapé & Tapis</li>
              <li className="hover:text-white cursor-pointer transition-colors">Rénovation Optiques & Cuirs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Zones Couvertes</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Paris (75) - Tous arrondissements</li>
              <li>Hauts-de-Seine (92)</li>
              <li>Yvelines (78)</li>
              <li>Val-de-Marne (94)</li>
              <li>Seine-Saint-Denis (93)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Contact & Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📞 01 89 45 67 00 (7j/7 - 8h/20h)</li>
              <li>✉️ contact@aquawash.fr</li>
              <li>📍 Siège : 12 Avenue des Champs-Élysées, Paris</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 AquaWash SAS. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-slate-400 cursor-pointer">CGV & CGU</span>
            <span className="hover:text-slate-400 cursor-pointer">Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
