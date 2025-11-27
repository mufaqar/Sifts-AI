"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const BookSection = () => {
  return (
    <section id="book" className="mx-auto max-w-7xl px-4 pb-20">
      <div
        className="relative overflow-hidden rounded-3xl p-8 md:p-12 shadow-sm"
        style={{
          border: "1px solid var(--brand-border)",
          background:
            "linear-gradient(135deg, rgba(0,148,163,0.04), rgba(0,110,124,0.02))",
        }}
      >
        <div className="relative">
          <h3
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: "var(--brand-text)" }}
          >
            See Sifts on your data
          </h3>
          <p className="mt-2 text-(--brand-subtext)">
            We’ll plug into a safe subset of your data and walk you through KPIs, insights, and actions live.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="brand-gradient text-white cursor-pointer font-semibold rounded-xl px-4 py-2 inline-flex items-center gap-2">
              Book a Demo <FiArrowRight className="w-4 h-4" />
            </button>
            <button
              className="rounded-xl px-4 py-2 cursor-pointer hover:scale-105 transition"
              style={{
                border: "1px solid var(--brand-border)",
                color: "var(--brand-text)",
              }}
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
