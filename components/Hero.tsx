"use client";

import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiStar } from "react-icons/fi";
import Animation from "./animation";
import { fadeUp } from "@/lib/animations/variants";

export default function AiEngineHero() {
  return (
    <section
      className="overflow-hidden"
      style={{
        background:
          "radial-gradient(600px circle at 50% 10%, rgba(0, 148, 163, 0.12), transparent)",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-24">
        {/* Left Content */}
        <Animation variants={fadeUp}>
          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm"
              style={{
                borderColor: "var(--brand-border)",
                background: "#F8FAFC",
                color: "var(--brand-subtext)",
              }}
            >
              <FiStar className="w-3.5 h-3.5" /> The AI Engine for Your ERP
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight"
              style={{ color: "var(--brand-text)" }}
            >
              AI Agents Working Across Your Business
              <span style={{ color: "var(--brand-from)" }}>
                {" "}
                — From Insight to Execution
              </span>
            </h1>

            <p className="mt-4 md:text-lg text-(--brand-subtext)">
              Sifts.ai built a unified <strong>AI Engine</strong> that automates
              and optimizes every module — HR, Finance, Procurement, Sales,
              Support — with chat &amp; voice actions, predictions, and safe,
              auditable execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="cursor-pointer brand-gradient text-white font-semibold rounded-xl px-5 py-2 inline-flex items-center gap-2">
                  Book a Demo <FiArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link
                href="/contact"
                className="rounded-xl px-5 py-2 font-medium cursor-pointer"
                style={{
                  border: "1px solid var(--brand-border)",
                  color: "var(--brand-text)",
                }}
              >
                Learn More
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-(--brand-subtext)">
              {[
                "AI engine powering all modules",
                "Fully conversational (chat & voice)",
                "Real-time automation & alerts",
                "Works with your existing ERP stack",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4" /> {item}
                </div>
              ))}
            </div>
          </div>
        </Animation>
        <Animation variants={fadeUp}>
          {/* Right Side (Mock Interaction Card) */}
          <div className="relative w-full md:aspect-video aspect-square rounded-xl overflow-hidden border border-(--brand-border)">
            <iframe
              src="https://www.youtube.com/embed/BBJ68lCA3LY?start=0&autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=BBJ68lCA3LY"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </Animation>
      </div>
    </section>
  );
}
