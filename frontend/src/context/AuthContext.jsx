import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('aquawash_user');
    return saved ? JSON.parse(saved) : {
      id: 1,
      name: 'Johann Gouaffo',
      email: 'jgouaffo@gmail.com',
      role: 'admin',
      city: 'Paris',
      postal_code: '75008'
    };
  });

  const [token, setToken] = useState(() => localStorage.getItem('aquawash_token') || 'demo_token_123');

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('aquawash_user', JSON.stringify(userData));
    localStorage.setItem('aquawash_token', userToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('aquawash_user');
    localStorage.removeItem('aquawash_token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
