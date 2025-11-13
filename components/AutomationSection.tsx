"use client";
import React from "react";
import {
  FaMagic,
  FaBrain,
  FaComments,
  FaThLarge,
  FaCheckCircle,
} from "react-icons/fa";

const AutomationSection = () => {
  return (
    <section id="automation" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
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
          <FaMagic className="w-3.5 h-3.5" /> Automation
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--brand-text)" }}
        >
          From insight to action — automatically
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--brand-subtext)]">
          Each Sifts model executes real tasks in your tools, with full
          auditability.
        </p>
      </div>

      {/* Top 3 Cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: <FaBrain className="w-5 h-5" />,
            title: "SIFTS People (HR)",
            desc: "Approve leave, generate offers, update payroll components, and notify stakeholders.",
          },
          {
            icon: <FaComments className="w-5 h-5" />,
            title: "Business Care (CRM)",
            desc: "Auto-reply to leads, qualify, schedule meetings, and update opportunities.",
          },
          {
            icon: <FaThLarge className="w-5 h-5" />,
            title: "Optra (Ops)",
            desc: "Reorder suggestions, supplier follow-ups, delivery promises, and exception handling.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="group rounded-2xl p-6 shadow-sm border border-[var(--brand-border)] bg-white hover:shadow-md transition"
          >
            <div className="mb-4 inline-flex rounded-xl p-3 bg-[#F8FAFC]">
              {card.icon}
            </div>
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--brand-text)" }}
            >
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-subtext)]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Playbooks */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[ 
          {
            title: "Playbook: A/R Dunning",
            items: [
              "Find invoices overdue >30d and group by customer",
              "Generate polite reminders with statement attachment",
              "Post notes to ERP & schedule follow-ups",
              "Escalate to finance if no response in 7 days",
            ],
          },
          {
            title: "Playbook: Inventory Anomalies",
            items: [
              "Detect negative stock or slow-moving items",
              "Recommend transfers or write-downs",
              "Create tasks for warehouse leads",
              "Alert purchasing on critical SKUs",
            ],
          },
        ].map((playbook, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 shadow-sm border border-[var(--brand-border)] bg-white"
          >
            <div
              className="mb-2 text-sm font-medium"
              style={{ color: "var(--brand-text)" }}
            >
              {playbook.title}
            </div>
            <ul className="space-y-2 text-sm text-[var(--brand-subtext)]">
              {playbook.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 mt-0.5 " />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomationSection;
