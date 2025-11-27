"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Odoo", symbol: "O" },
    { name: "Salesforce", symbol: "S" },
    { name: "Oracle", symbol: "O" },
    { name: "MS Dynamics", symbol: "M" },
    { name: "Excel", symbol: "E" },
    { name: "Power BI", symbol: "P" },
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
          Works with your stack — where it lives
        </h2>
        <p className="mt-3 leading-relaxed text-(--brand-subtext)">
          Sifts connects natively to your ERP, CRM, BI, and databases.
        </p>
      </div>

      {/* Integration Grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 relative overflow-hidden rounded-3xl p-8 md:p-12"
        style={{
          border: "1px solid var(--brand-border)",
          background:
            "linear-gradient(135deg, rgba(0,148,163,0.04), rgba(0,110,124,0.02))",
        }}>
        {integrations.map((item, i) => (
          <div
            key={i}
            className=" flex flex-col gap-5 items-center justify-center rounded-xl px-4 py-8 font-bold bg-white text-(--brand-subtext) card hover:shadow-sm transition"
          >
            <div className="text-sm font-bold w-10 h-10 flex items-center justify-center rounded-xl p-4 bg-white text-(--brand-subtext) card">
              {item?.symbol}
            </div>
            <p>
              {item?.name}
            </p>
          </div>
        ))}
        <p className="text-sm font-medium text-(--brand-subtext) text-center col-span-6 mt-8">
          ...and many more!
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
