// components/Features.tsx
'use client';

import Link from "next/link";
import { BiBot, BiLineChart, BiMessageSquare } from "react-icons/bi";
import { BsPlugin, BsRainbow } from "react-icons/bs";
import { CgLayoutGrid } from "react-icons/cg";
import { FaChartBar, FaHeadphonesAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import Animation from "./animation";
import { fadeUp } from "@/lib/animations/variants";


export default function Features() {
  const products = [
    {
      icon: <FaChartBar className="text-xl w-8 h-8 text-(--brand-from)" />,
      link: "#",
      title: "AI Business Advisor",
      desc: `<p>Analyzes performance, builds dynamic dashboards, and recommends improvements based on trends and industry benchmarks.</p>
      <ul>
      <li>Auto-generated dashboards from any module</li>
      <li>Instant insight on revenue drivers & KPIs</li>
      <li>Smart recommendations for business improvement</li>
      </ul>
        `,
    },
    {
      icon: <BiBot className="text-xl w-8 h-8 text-(--brand-from)" />,
      link: "#",
      title: "AI Workforce Agent",
      desc: `<p>Performs day-to-day tasks across Sales, HR, Purchase, and Warehouse — all from a simple prompt.</p>
      <ul>
      <li>Creates customers, orders, POs, and HR requests</li>
      <li>Executes real actions inside your ERP</li>
      <li>Understands workflows & business context</li>
      </ul>`,
    },
    {
      icon: <FaHeadphonesAlt className="text-xl w-8 h-8 text-(--brand-from)" />,
      link: "#",
      title: "AI Service Agent",
      desc: `<p>Manages CRM, POS, Helpdesk, and call/chat support for inbound and outbound interactions.</p>
      <ul>
      <li>Handles tickets & customer queries</li>
      <li>Auto-responds to common issues</li>
      <li>Supports phone, chat & POS operations</li>
      </ul>`,
    },
    {
      icon: <FiSettings className="text-xl w-8 h-8 text-(--brand-from)" />,
      title: "Optra — Industry AI Agent",
      desc: `<p>Custom operational AI agent tailored to your business operations — whether you run logistics, retail, distribution, field services, or multi-branch operations.</p>
      <ul>
      <li>Detects operational anomalies across your workflows</li>
      <li>Automates supplier and partner follow-ups</li>
      <li>Sends critical operations alerts to managers</li>
      </ul>`,
    },
  ];
  return (
    <section id="ai-agents" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <Animation variants={fadeUp}>
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
        </Animation>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <Animation key={i} variants={fadeUp}>
            <div className="group rounded-2xl p-6 shadow-sm card transition hover:shadow-md h-full"
            >
              <div className="mb-4 inline-flex rounded-xl p-2.5 bg-[#F8FAFC] border border-(--brand-border)">
                {product.icon}
              </div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--brand-text)" }}
              >
                {product.title}
              </h3>
              <div className="feature_content"
                dangerouslySetInnerHTML={{ __html: product?.desc || "" }} />
              <Link href={`${product?.link}`} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white brand-gradient mt-5 inline-flex">
                View Demo flow
              </Link>
            </div>
          </Animation>
        ))}
      </div>
    </section>
  );
}