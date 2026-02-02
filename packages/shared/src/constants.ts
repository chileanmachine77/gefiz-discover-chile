// Application constants

export const APP_CONFIG = {
  NAME: 'Equine ERP Landing',
  VERSION: '1.0.0',
  DESCRIPTION: 'Landing page for Equine ERP system',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: process.env.VITE_API_URL || 'http://localhost:3001',
  CONTACT: '/contact',
  TOURS: '/tours',
  USERS: '/users',
} as const;

export const SOCIAL_LINKS = {
  INSTAGRAM: process.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/gefiztravelchile',
  FACEBOOK: process.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/gefiztravelchile',
} as const;

export const CONTACT_INFO = {
  PHONE: process.env.VITE_PHONE || '+56966435647',
  EMAIL: process.env.VITE_EMAIL || 'gefiz.spa@gmail.com',
  ADDRESS: process.env.VITE_ADDRESS || 'Av. Armando Cortínez Ote. 1704, Pudahuel, Región Metropolitana, CL',
} as const;
