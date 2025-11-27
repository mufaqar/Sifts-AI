// components/HomePage.tsx
'use client';

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import DashboardsSection from './DashboardsSection';
import AutomationSection from './AutomationSection';
import IntegrationsSection from './IntegrationsSection';
import SecuritySection from './SecuritySection';
import StatsSection from './StatsSection';
import BookSection from './BookSection';
import VideoSection from './VideoSection';

export default function HomePage() {


  return (
    <div className="min-h-screen" style={{ background: 'var(--brand-page)' }}>
      <Header />
      <Hero />
      <Features />
      <VideoSection />
      <DashboardsSection />
      <AutomationSection />
      <IntegrationsSection />
      <SecuritySection />
      <BookSection />
      <Footer />

    </div>
  );
}