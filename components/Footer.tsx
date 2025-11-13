// components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--brand-border)' }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Sifts.ai" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold" style={{ color: 'var(--brand-text)' }}>
                Sifts.ai
              </span>
            </div>
            <p className="muted max-w-md">
              Transforming enterprise resource planning with artificial intelligence. 
              Make smarter decisions, automate workflows, and drive growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--brand-text)' }}>Product</h4>
            <ul className="space-y-2">
              {['Features', 'Solutions', 'Pricing', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-blue-600 transition-colors muted">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--brand-text)' }}>Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-blue-600 transition-colors muted">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'var(--brand-border)' }}>
          <p className="text-sm muted">
            © {new Date().getFullYear()} Sifts.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}