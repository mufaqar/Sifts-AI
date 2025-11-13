"use client";
import React from "react";

const StatsSection = () => {
  const stats = [
    { value: ">3,000", label: "Users across Eezee group" },
    { value: "40%", label: "Typical efficiency gain target" },
    { value: "<30 days", label: "Pilot‑to‑value timeline" },
    { value: ">10", label: "Prebuilt workflows & agents" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 text-center shadow-sm card bg-white transition hover:shadow-md"
          >
            <div className="text-3xl font-semibold" style={{ color: "var(--brand-text)" }}>
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-[var(--brand-subtext)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
