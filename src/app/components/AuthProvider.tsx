'use client';

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Tarayıcıda çalıştığını doğrula (SSR hatasını engellemek için)
    if (typeof window !== 'undefined') {
      // Cookie'den token'ı oku
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
      };

      const storedToken = getCookie('token');
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};