// components/Features.tsx
'use client';

import { BiBot, BiLineChart, BiMessageSquare } from "react-icons/bi";
import { BsPlugin, BsRainbow } from "react-icons/bs";
import { CgLayoutGrid } from "react-icons/cg";
import { HiSparkles } from "react-icons/hi";


export default function Features() {
  const products = [
    {
      icon: <BiLineChart className="w-5 h-5 text-[var(--brand-text)]" />,
      title: "AI Business Advisor",
      desc: "Intelligent dashboards with predictive insights, industry benchmarks, and KPI alerts.",
    },
    {
      icon: <BiBot className="w-5 h-5 text-[var(--brand-text)]" />,
      title: "AI Workforce Agent",
      desc: "Your companion that performs tasks, answers, and automates workflows across apps.",
    },
    {
      icon: <BiMessageSquare className="w-5 h-5 text-[var(--brand-text)]" />,
      title: "Business Care",
      desc: "AI CRM agent managing leads, interactions, and support with context.",
    },
    {
      icon: <BsRainbow className="w-5 h-5 text-[var(--brand-text)]" />,
      title: "SIFTS People",
      desc: "Automate HR: leave, onboarding, payroll nudges, resignation handling — via chat or voice.",
    },
    {
      icon: <BsPlugin className="w-5 h-5 text-[var(--brand-text)]" />,
      title: "DeskFlow",
      desc: "Helpdesk automation: categorize, assign, summarize, resolve. SLA‑aware responses.",
    },
    {
      icon: <CgLayoutGrid className="w-5 h-5 text-[var(--brand-text)]" />,
      title: "Optra",
      desc: "Operational AI for procurement, logistics, and supply chain — optimize autonomously.",
    },
  ];
  return (
   <section id="ai-agents" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
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
          <HiSparkles className="w-3.5 h-3.5" /> AI Agents
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--brand-text)" }}
        >
          End to end agents trained to automate and enhance core business areas — safely orchestrated and explainable.
        </h2>
        
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <div
            key={i}
            className="group rounded-2xl p-6 shadow-sm card transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-xl p-3 bg-[#F8FAFC]">
              {product.icon}
            </div>
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--brand-text)" }}
            >
              {product.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-subtext)]">
              {product.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}