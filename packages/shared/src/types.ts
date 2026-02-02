// Common types used across the application

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
