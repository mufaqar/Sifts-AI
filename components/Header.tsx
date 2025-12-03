"use client";
import React, { useState } from "react";

import Image from "next/image";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#ai-agents", label: "AI Agents" },
    { href: "#integrations", label: "Integrations" },
    { href: "#security", label: "Security" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b"
      style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.9)" }}>
      <div
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/images/logo.png" alt="sifts.ai logo" width={120} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-(--brand-subtext) hover:text-(--brand-from) opacity-80 hover:opacity-100 hover:scale-105 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Link href="/contact">
            <button className="hidden md:inline-flex brand-gradient text-white text-base font-semibold rounded-xl px-3 py-1.5 items-center gap-2">
              Book a Demo <BsArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <button
            className="md:hidden p-2 rounded-md text-(--brand-text)"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiX className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-(--brand-border)">
          <div className="flex flex-col px-4 py-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold py-2 px-3 rounded-md text-(--brand-text) hover:text-(--brand-from)"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <Link href="/contact">
              <button className="text-sm brand-gradient text-white font-semibold rounded-xl px-3 py-2 flex items-center justify-center gap-2 mt-2">
                Book a Demo <BsArrowRightCircle className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
