"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";

const IntegrationsSection = () => {
  const integrations = [
    "Odoo RPC",
    "Salesforce",
    "Excel",
    "Power BI",
    "PostgreSQL",
    "MySQL",
  ];

  return (
    <section
      id="integrations"
      className="mx-auto max-w-7xl px-4 py-16 md:py-20"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm"
          style={{
            borderColor: "var(--brand-border)",
            background: "#F8FAFC",
            color: "var(--brand-subtext)",
          }}
        >
          <PiSparkleFill className="w-3.5 h-3.5" /> Integrations
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--brand-text)" }}
        >
          Works with your stack, where it lives
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--brand-subtext)]">
          Secure connectors for ERPs, CRMs, BI, and databases.
        </p>
      </div>

      {/* Integration Grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {integrations.map((name, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-xl p-4 text-sm bg-[#F8FAFC] text-[var(--brand-subtext)] card hover:shadow-sm transition"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
