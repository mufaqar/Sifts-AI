"use client";
import React from "react";
import { HiShieldCheck, HiDatabase, HiSparkles, HiLockClosed } from "react-icons/hi";
import Animation from "./animation";
import { fadeUp } from "@/lib/animations/variants";

const SecuritySection = () => {
    const features = [
        {
            icon: <HiLockClosed className="w-5 h-5 text-(--brand-text)" />,
            title: "RBAC & SSO",
            description:
                "Granular roles, SSO/SAML, per-object permissions mapped to ERP users.",
        },
        {
            icon: <HiShieldCheck className="w-5 h-5 text-(--brand-text)" />,
            title: "Audit & logging",
            description:
                "Every action is logged with who/when/what. Exportable trails for auditors.",
        },
        {
            icon: <HiDatabase className="w-5 h-5 text-(--brand-text)" />,
            title: "Data residency",
            description:
                "EU hosting options and PDPL/GDPR alignment with encryption in-transit/at-rest.",
        },
    ];

    return (
        <section id="security" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
            <Animation variants={fadeUp}>
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
                        <HiSparkles className="w-3.5 h-3.5" /> Trust by design
                    </div>
                    <h2
                        className="text-3xl md:text-4xl font-semibold tracking-tight"
                        style={{ color: "var(--brand-text)" }}
                    >
                        Security &amp; compliance
                    </h2>
                    <p className="mt-3 leading-relaxed text-(--brand-subtext)">
                        Designed for regulated environments across KSA, EU, and beyond.
                    </p>
                </div>
            </Animation>
            {/* Feature Grid */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {features.map((feature, i) => (
                    <Animation key={i} variants={fadeUp}>
                        <div className="h-full group rounded-2xl p-6 shadow-sm bg-white card transition hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex rounded-xl p-3 bg-[#F8FAFC]">
                                {feature.icon}
                            </div>
                            <h3
                                className="text-lg font-semibold"
                                style={{ color: "var(--brand-text)" }}
                            >
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-(--brand-subtext)">
                                {feature.description}
                            </p>
                        </div>
                    </Animation>
                ))}
            </div>
            <Animation variants={fadeUp}>
                <p className="mt-6 text-center text-xs text-(--brand-subtext)">
                    Need a DPA or VAPT? We can provide on request.
                </p>
            </Animation>
        </section>
    );
};

export default SecuritySection;
