"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t bg-white"
      style={{ borderColor: "var(--brand-border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image src="/images/logo.png" alt="sifts.ai logo" width={120} height={50} />
              </Link>
            </div>
            <p className="mt-3 text-sm text-(--brand-subtext)">
              The assistant layer for ERP and business apps.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--brand-text)" }}>
              Product
            </div>
            <ul className="mt-3 space-y-2 text-sm text-(--brand-subtext)">
              <li>
                <a className="opacity-80 hover:opacity-100 transition" href="#ai-agents">
                  AI Agents
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition" href="#dashboards">
                  Dashboards
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition" href="#automation">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--brand-text)" }}>
              Company
            </div>
            <ul className="mt-3 space-y-2 text-sm text-(--brand-subtext)">
              <li>
                <a className="opacity-80 hover:opacity-100 transition" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--brand-text)" }}>
              Contact
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="mailto:hi@sifts.ai" target="_blank" className="text-sm text-(--brand-subtext) hover:text-(--brand-from)">
                  hi@sifts.ai
                </Link>
              </li>
              <li>
                <Link href="tel:+966570786312" className="text-sm text-(--brand-subtext) hover:text-(--brand-from)">
                +966 570 786 312 
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-(--brand-subtext)">
              © 2025 Sifts.ai — data‑driven decisions.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
