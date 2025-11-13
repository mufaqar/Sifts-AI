// components/HomePage.tsx
'use client';

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

export default function HomePage() {
  

  return (
    <div className="min-h-screen" style={{ background: 'var(--brand-page)' }}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}