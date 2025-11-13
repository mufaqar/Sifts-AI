"use client";

import React from "react";
import {
  FiActivity,
  FiBarChart2,
  FiPieChart,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

export default function DashboardsSection() {
  return (
    <section id="dashboards" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
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
          <FiStar className="w-3.5 h-3.5" /> Dashboards
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--brand-text)" }}
        >
          Dashboards leaders actually use
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--brand-subtext)]">
          Crystal-clear KPIs with drilldowns for Finance, Sales, Ops — secure and governed.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {/* Card 1 */}
        <div className="md:col-span-4 card rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FiTrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                  Revenue (MTD)
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--brand-text)" }}>
                SAR 1.92M
              </div>
              <div className="mt-1 text-xs text-[#0A7A59]">+8.4% vs last period</div>
            </div>
            <div className="opacity-80 text-[var(--brand-to)]">
              <svg viewBox="0 0 100 40" className="w-28 h-16">
                <polyline
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  points="0,30 15,28 30,26 45,20 60,22 75,15 90,18 100,12"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-4 card rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FiBarChart2 className="w-4 h-4" />
                <span className="text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                  A/R Aging &gt;30d
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--brand-text)" }}>
                SAR 312k
              </div>
              <div className="mt-1 text-xs text-[#B91C1C]">-5.2% vs last period</div>
            </div>
            <div className="opacity-80 text-[var(--brand-to)]">
              <svg viewBox="0 0 100 40" className="w-28 h-16">
                {[0, 12, 24, 36, 48, 60, 72, 84].map((x, i) => (
                  <rect
                    key={i}
                    x={x}
                    y={[30, 22, 15, 26, 10, 18, 8, 12][i]}
                    width="8"
                    height={[10, 18, 25, 14, 30, 22, 32, 28][i]}
                    fill="currentColor"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:col-span-4 card rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FiPieChart className="w-4 h-4" />
                <span className="text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                  Sales by Region
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--brand-text)" }}>
                KSA 54%
              </div>
              <div className="mt-1 text-xs text-[#0A7A59]">+1.1% vs last period</div>
            </div>
            <div className="opacity-80">
              <svg viewBox="0 0 32 32" className="w-16 h-16">
                <circle r="16" cx="16" cy="16" fill="#E5F6F8" />
                <path d="M16 16 L16 0 A16 16 0 0 1 30 22 Z" fill="#0094A3" />
                <path d="M16 16 L30 22 A16 16 0 0 1 4 24 Z" fill="#49B6C1" />
                <path d="M16 16 L4 24 A16 16 0 0 1 16 0 Z" fill="#8FD7DE" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:col-span-6 card rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FiActivity className="w-4 h-4" />
                <span className="text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                  Inventory Turnover
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--brand-text)" }}>
                7.2x
              </div>
              <div className="mt-1 text-xs text-[#0A7A59]">+0.3x vs last period</div>
            </div>
            <div className="opacity-80 text-[var(--brand-to)]">
              <svg viewBox="0 0 100 40" className="w-28 h-16">
                {[26, 31, 18, 22, 13, 24, 9, 20].map((y, i) => (
                  <rect
                    key={i}
                    x={i * 12}
                    y={y}
                    width="8"
                    height={40 - y - 0}
                    fill="currentColor"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="md:col-span-6 card rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FiPieChart className="w-4 h-4" />
                <span className="text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                  Cashflow Forecast
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--brand-text)" }}>
                SAR 3.1M
              </div>
              <div className="mt-1 text-xs text-[#0A7A59]">+4.0% vs last period</div>
            </div>
            <div className="opacity-80 text-[var(--brand-to)]">
              <svg viewBox="0 0 100 40" className="w-28 h-16">
                <polyline
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  points="0,28 15,30 30,26 45,18 60,22 75,20 90,16 100,14"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
