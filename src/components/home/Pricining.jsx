import React, { useMemo, useState } from "react";
import { Switch, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";

function FeatureItem({ text, enabled }) {
    return (
        <li className={`flex items-center gap-3 text-sm ${enabled ? "text-slate-900" : "text-slate-300"}`}>
            <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${enabled ? "text-green-600" : "text-slate-300"
                    }`}
            >
                <CheckOutlined />
            </span>
            <span className={`${enabled ? "" : "line-through"} opacity-${enabled ? "100" : "70"}`}>
                {text}
            </span>
        </li>
    );
}

function PlanCard({
    name,
    discountText,
    price,
    periodText,
    features,
    active,
    ctaText,
    ctaTo,
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl ${active ? "bg-[#061E6F] text-white" : "bg-white text-slate-900"
                }`}
            style={{
                boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
            }}
        >
            <div className="p-10">
                <div className="text-xl font-semibold">{name}</div>
                <div className={`mt-1 text-sm ${active ? "text-white/90" : "text-slate-500"}`}>
                    {discountText}
                </div>

                <ul className="mt-8 space-y-3">
                    {features.map((f) => (
                        <FeatureItem key={f.text} text={f.text} enabled={f.enabled} />
                    ))}
                </ul>

                <div className="mt-10 flex items-baseline gap-1">
                    <div className={`text-3xl font-bold ${active ? "text-white" : "text-[#061E6F]"}`}>
                        ${price}
                    </div>
                    <div className={`text-base font-semibold ${active ? "text-white/95" : "text-[#061E6F]"}`}>
                        {periodText}
                    </div>
                </div>

                <div className="mt-8">
                    {active ? (
                        <Button
                            type="primary"
                            size="large"
                            className="!h-11 !rounded-xl !border-0 !bg-[#FFC44D] !px-8 !font-semibold !text-[#061E6F] hover:!bg-[#ffb833]"
                        >
                            <Link to={ctaTo} className="!text-[#061E6F]">
                                {ctaText}
                            </Link>
                        </Button>
                    ) : (
                        <Button
                            size="large"
                            className="!h-11 !rounded-xl !border-[#061E6F] !px-8 !font-semibold !text-[#061E6F]"
                        >
                            <Link to={ctaTo} className="!text-[#061E6F]">
                                {ctaText}
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function PricingPlans() {
    const [yearly, setYearly] = useState(false);

    const plans = useMemo(() => {
        // monthly base prices from your HTML
        const baseMonthly = [
            { name: "Intro", price: 29, active: false, cta: "Choose Plan" },
            { name: "Base", price: 39, active: false, cta: "Choose Plan" },
            { name: "Pro", price: 49, active: true, cta: "Try 1 Month" },
            { name: "Enterprise", price: 89, active: false, cta: "Choose Plan" },
        ];

        // yearly pricing: simple example, 20% off (matches "Save 20%")
        const mapPrice = (p) => {
            if (!yearly) return { value: p, periodText: "/month" };
            const yearlyTotal = Math.round(p * 12 * 0.8);
            return { value: yearlyTotal, periodText: "/year" };
        };

        return baseMonthly.map((p) => ({
            ...p,
            computed: mapPrice(p.price),
        }));
    }, [yearly]);

    const featuresByPlan = {
        Intro: [
            { text: "Booking", enabled: true },
            { text: "Own Cover Image", enabled: true },
            { text: "Multiple Categories", enabled: false },
            { text: "Apply for Job", enabled: false },
            { text: "Job Alerts", enabled: false },
            { text: "Google Calendar", enabled: false },
            { text: "Crop Profile Image", enabled: false },
        ],
        Base: [
            { text: "Booking", enabled: true },
            { text: "Own Cover Image", enabled: true },
            { text: "Multiple Categories", enabled: true },
            { text: "Apply for Job", enabled: true },
            { text: "Job Alerts", enabled: true },
            { text: "Google Calendar", enabled: false },
            { text: "Crop Profile Image", enabled: false },
        ],
        Pro: [
            { text: "Booking", enabled: true },
            { text: "Own Cover Image", enabled: true },
            { text: "Multiple Categories", enabled: true },
            { text: "Apply for Job", enabled: true },
            { text: "Job Alerts", enabled: true },
            { text: "Google Calendar", enabled: true },
            { text: "Crop Profile Image", enabled: true },
        ],
        Enterprise: [
            { text: "Booking", enabled: true },
            { text: "Own Cover Image", enabled: true },
            { text: "Multiple Categories", enabled: true },
            { text: "Apply for Job", enabled: true },
            { text: "Job Alerts", enabled: true },
            { text: "Google Calendar", enabled: true },
            { text: "Crop Profile Image", enabled: true },
        ],
    };

    return (
        <section className="w-full bg-[#F6F3FF] py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                {/* top header */}
                <div className="grid items-start gap-6 lg:grid-cols-2">
                    <div>
                        <div className="text-xs font-semibold tracking-[0.22em] text-[#F4A300]">
                            PRICING
                        </div>
                        <h2 className="mt-3 text-4xl font-extrabold text-[#061E6F]">
                            Our Pricing Plans
                        </h2>
                    </div>
                    <div className="text-sm leading-7 text-slate-600 lg:pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>

                {/* billing toggle */}
                <div className="mt-10 flex items-center justify-center gap-4">
                    <span className={`text-sm font-semibold ${!yearly ? "text-[#061E6F]" : "text-slate-500"}`}>
                        Bill Monthly
                    </span>

                    <Switch
                        checked={yearly}
                        onChange={setYearly}
                        className="!bg-slate-300"
                    />

                    <span className={`text-sm font-semibold ${yearly ? "text-[#061E6F]" : "text-slate-500"}`}>
                        Bill Yearly
                    </span>
                </div>

                {/* cards wrapper like the image, big rounded container */}
                <div className="mt-12 rounded-[28px] bg-white/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {plans.map((p) => (
                            <PlanCard
                                key={p.name}
                                name={p.name}
                                discountText="Save 20%"
                                price={p.computed.value}
                                periodText={p.computed.periodText}
                                features={featuresByPlan[p.name]}
                                active={p.active}
                                ctaText={p.cta}
                                ctaTo="/contact-us"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}