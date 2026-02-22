import React, { useMemo, useState } from "react";
import { Button, Typography } from "antd";
import {
    FileTextOutlined,
    UserOutlined,
    BulbOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const GREEN = "#6AB33E";

export default function HowItWorksSteps() {
    const steps = useMemo(
        () => [
            {
                id: 1,
                title: "Describe Your Task",
                desc:
                    "Tell us what you need done and we'll match you with the right professionals in your area.",
                icon: <FileTextOutlined style={{ fontSize: 26, color: "#fff" }} />,
                cta: "Post a Task",
                onClick: () => console.log("Step 1 action"),
            },
            {
                id: 2,
                title: "Choose a Provider",
                desc:
                    "Review bids and select the best provider based on ratings, reviews, and price quotes.",
                icon: <UserOutlined style={{ fontSize: 26, color: "#fff" }} />,
                cta: "View Providers",
                onClick: () => console.log("Step 2 action"),
            },
            {
                id: 3,
                title: "Get It Done",
                desc:
                    "Sit back and relax while your task is completed professionally and on time.",
                icon: <BulbOutlined style={{ fontSize: 26, color: "#fff" }} />,
                cta: "Track Progress",
                onClick: () => console.log("Step 3 action"),
            },
        ],
        []
    );

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                <div className="rounded-[28px] bg-[#041E68] px-6 py-10 md:px-12 md:py-12 md:max-h-[560px] relative overflow-hidden">
                    {/* subtle pattern */}
                    <div className="pointer-events-none absolute inset-0 opacity-20">
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-black/10 blur-2xl" />
                        <div
                            className="absolute right-0 top-0 h-full w-2/3"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 60%)",
                            }}
                        />
                        <div
                            className="absolute right-10 top-10 h-56 w-56"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                                backgroundSize: "18px 18px",
                                transform: "rotate(18deg)",
                                opacity: 0.35,
                            }}
                        />
                    </div>

                    {/* header */}
                    <div className="relative text-center">
                        <div className="text-[12px] font-semibold tracking-[0.35em] text-[#F7B500]">
                            STEPS
                        </div>
                        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                            How It Works
                        </h2>
                    </div>

                    {/* cards */}
                    <div className="relative mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                        {/* arrows (desktop) */}
                        <DesktopArrows />

                        {steps.map((s) => (
                            <StepCard
                                key={s.id}
                                step={s}
                                hovered={hoveredId === s.id}
                                onEnter={() => setHoveredId(s.id)}
                                onLeave={() => setHoveredId(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, hovered, onEnter, onLeave }) {
    return (
        <div
            className="relative rounded-2xl px-4 py-8 md:px-6 md:py-10 text-center"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={{
                minHeight: 300,
            }}
        >
            {/* big number behind */}
            <div
                className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none font-extrabold"
                style={{
                    fontSize: 120,
                    lineHeight: "1",
                    color: "rgba(255,255,255,0.06)",
                }}
            >
                {String(step.id).padStart(2, "0")}
            </div>

            {/* icon circle */}
            <div className="relative mx-auto mt-6 flex h-72 flex-col items-center justify-start">
                <div
                    className={[
                        "relative grid h-20 w-20 place-items-center rounded-full transition-all duration-300",
                        hovered ? "scale-[1.06]" : "scale-100",
                    ].join(" ")}
                    style={{
                        background: GREEN,
                        boxShadow: hovered
                            ? "0 18px 30px rgba(106,179,62,0.35)"
                            : "0 14px 26px rgba(0,0,0,0.20)",
                    }}
                >
                    <div
                        className={[
                            "transition-transform duration-300",
                            hovered ? "rotate-[8deg] scale-[1.06]" : "rotate-0 scale-100",
                        ].join(" ")}
                    >
                        {step.icon}
                    </div>

                    {/* pulse ring on hover */}
                    <div
                        className={[
                            "pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300",
                            hovered ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                        style={{
                            boxShadow: `0 0 0 10px rgba(106,179,62,0.18)`,
                            animation: hovered ? "sfPulse 1.2s ease-in-out infinite" : "none",
                        }}
                    />
                </div>

                {/* title + desc */}
                <div className="mt-6 px-2">
                    <div className="text-[16px] font-semibold text-white md:text-[17px]">
                        {step.title}
                    </div>
                    <div className="mx-auto mt-3 max-w-[320px] text-[13px] leading-6 text-white/75">
                        {step.desc}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes sfPulse {
          0% { transform: scale(1); opacity: 0.9; }
          60% { transform: scale(1.08); opacity: 0.45; }
          100% { transform: scale(1); opacity: 0.9; }
        }
      `}</style>
        </div>
    );
}

function DesktopArrows() {
    return (
        <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Arrow 1 (between card 1 and 2) */}
            <svg
                className="absolute left-1/3 top-[140px] -translate-x-1/2"
                width="220"
                height="120"
                viewBox="0 0 220 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.9 }}
            >
                <path
                    d="M20 30 C 80 0, 140 0, 200 40"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                />
                <path
                    d="M198 40 L188 35"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M198 40 L191 49"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>

            {/* Arrow 2 (between card 2 and 3) */}
            <svg
                className="absolute left-2/3 top-[150px] -translate-x-1/2"
                width="220"
                height="120"
                viewBox="0 0 220 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.9 }}
            >
                <path
                    d="M20 50 C 80 90, 140 90, 200 50"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                />
                <path
                    d="M198 50 L188 45"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M198 50 L191 59"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}