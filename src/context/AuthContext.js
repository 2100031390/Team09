// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (details) => {
    // Add your registration logic here (API call)
    console.log('Registered:', details);
    // Simulate a successful registration by setting the user
    setUser(details);
  };

  const login = async (email, password) => {
    // Add your login logic here (API call)
    console.log('Logged in with:', email, password);
    // Simulate successful login
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
