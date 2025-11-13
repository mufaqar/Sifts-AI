// components/Header.tsx
"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl">
      <div
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 border-b"
        style={{
          borderColor: "var(--brand-border)",
          background: "rgba(255,255,255,0.9)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Replace with your actual logo image */}
          <img src="/images/logo.png" alt="Sifts.ai" className="h-8 w-auto" />
          <span
            className="text-xl font-semibold"
            style={{ color: "var(--brand-text)" }}
          >
            Sifts.ai
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--brand-text)" }}
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--brand-text)" }}
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--brand-text)" }}
          >
            Pricing
          </a>
          <button className="px-4 py-2 text-sm font-medium rounded-md text-white brand-gradient hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <i
            data-lucide="menu"
            className="h-6 w-6"
            style={{ color: "var(--brand-text)" }}
          ></i>
        </button>
      </div>
    </header>
  );
}
