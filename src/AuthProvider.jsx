// src/AuthProvider.js
import React, { useEffect, useState, createContext, useContext } from 'react';
import { auth } from './firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}


