// components/Hero.tsx
'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden radial-bg">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: 'var(--brand-text)' }}>
            AI Engine for Your{' '}
            <span className="brand-gradient bg-clip-text text-transparent">
              ERP
            </span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--brand-subtext)' }}>
            Transform your enterprise resource planning with intelligent automation, 
            predictive insights, and seamless integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 text-lg font-medium rounded-lg text-white brand-gradient hover:opacity-90 transition-opacity shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-3 text-lg font-medium rounded-lg border hover:bg-gray-50 transition-colors" style={{ borderColor: 'var(--brand-border)', color: 'var(--brand-text)' }}>
              View Demo
            </button>
          </div>
        </div>
        
        {/* Hero graphic/illustration */}
        <div className="mt-16 flex justify-center">
          <div className="card rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            {/* Replace with your hero illustration */}
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center" style={{ borderColor: 'var(--brand-border)' }}>
              <span className="muted">Hero Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}