import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage({ onSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(
      {
        id: 10,
        name: name || 'Client AquaWash',
        email,
        role: 'client',
        city: 'Versailles'
      },
      'token_' + Date.now()
    );
    if (onSuccess) onSuccess();
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-brand-600 to-aqua-400 text-white flex items-center justify-center font-black text-xl mb-3">
            W
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isRegister ? 'Créer un compte client' : 'Connexion à votre espace'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Gérez vos rendez-vous de lavage à domicile en toute simplicité
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Nom complet</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Camille Laurent"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Adresse email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-brand-500/20"
          >
            {isRegister ? "S'inscrire" : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-brand-600 hover:underline font-semibold"
          >
            {isRegister ? 'Déjà un compte ? Se connecter' : "Pas encore de compte ? S'inscrire"}
          </button>
        </div>
      </div>
    </div>
  );
}
