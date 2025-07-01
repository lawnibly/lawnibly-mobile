// @ts-nocheck
export const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://lawnibly.example.com';

export async function apiRequest(path, options = {}) {
  const token = await getToken();
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

export async function getToken() {
  const SecureStore = require('expo-secure-store');
  return SecureStore.getItemAsync('token');
}
