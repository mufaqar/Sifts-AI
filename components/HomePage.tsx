'use client';

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import IntegrationsSection from './IntegrationsSection';
import SecuritySection from './SecuritySection';
import BookSection from './BookSection';
import VideoSection from './VideoSection';

export default function HomePage() {


  return (
    <div className="min-h-screen" style={{ background: 'var(--brand-page)' }}>
   
      <Hero />
      <Features />
      <VideoSection />
      <IntegrationsSection />
      <SecuritySection />
      <BookSection />
    

    </div>
  );
}