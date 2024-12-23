import React from 'react';
import Navigation from './layout/Navigation';
import Hero from './layout/Hero';

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <Navigation />
      <Hero />
    </header>
  );
}