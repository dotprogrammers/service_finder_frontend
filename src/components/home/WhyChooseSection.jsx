// WhyChooseSection.jsx
import React from "react";
import {
    TeamOutlined,
    BarChartOutlined,
    StarOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

/**
 * Dummy JSON, replace later with API data
 */
const whyChooseData = {
    eyebrow: "CHOOSE",
    title: "Why Choose DSY.dk",
    subtitle:
        "We connect customers with verified service providers across Denmark. Our platform makes it easy to find, compare, and hire the best professionals for your needs.",
    points: [
        {
            id: 1,
            icon: <TeamOutlined className="text-[22px] text-amber-500" />,
            title: "Verified Service Providers",
            desc:
                "All our service providers are thoroughly vetted and verified. We check credentials, licenses, and insurance to ensure you're working with qualified professionals.",
        },
        {
            id: 2,
            icon: <BarChartOutlined className="text-[22px] text-amber-500" />,
            title: "Competitive Pricing",
            desc:
                "Our bidding system ensures you get competitive quotes. Compare multiple offers and choose the best price-to-quality ratio that fits your budget.",
        },
        {
            id: 3,
            icon: <StarOutlined className="text-[22px] text-amber-500" />,
            title: "Trusted Reviews & Ratings",
            desc:
                "Make informed decisions based on real customer reviews and ratings. Our transparent feedback system helps you choose providers with proven track records.",
        },
        {
            id: 4,
            icon: <ThunderboltOutlined className="text-[22px] text-amber-500" />,
            title: "Simple & Fast Process",
            desc:
                "Post your project in minutes, receive bids within hours, and hire the perfect provider in days. Our streamlined process saves you time and effort.",
        },
    ],
    ctas: [
        { id: "learn", label: "Learn More", onClick: () => { } },
        { id: "start", label: "Get Started", onClick: () => { } },
    ],
};

function PointRow({ icon, title, desc }) {
    return (
        <div className="flex gap-4">
            <div className="shrink-0">
                <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center ring-1 ring-white/10">
                    <div className="h-10 w-10 rounded-xl bg-white grid place-items-center">
                        {icon}
                    </div>
                </div>
            </div>

            <div className="min-w-0">
                <h4 className="text-[15px] font-semibold text-white">{title}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-white/80 max-w-[520px]">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default function WhyChooseSection({
    data = whyChooseData,
    imageUrl,
}) {
    return (
        <section className="py-14">
            <div className="mx-auto max-w-7xl px-4">
                <div className="rounded-[28px] bg-[#06246B] px-6 py-10 md:px-10 md:py-12">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        {/* Left */}
                        <div>
                            <div className="text-[12px] font-semibold tracking-[0.28em] text-white">
                                {data.eyebrow}
                            </div>

                            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold !text-white">
                                {data.title}
                            </h2>

                            <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-white/80 max-w-[640px]">
                                {data.subtitle}
                            </p>

                            <div className="mt-8 space-y-6">
                                {data.points.map((p) => (
                                    <PointRow
                                        key={p.id}
                                        icon={p.icon}
                                        title={p.title}
                                        desc={p.desc}
                                    />
                                ))}
                            </div>

                            <div className="mt-9 flex flex-wrap gap-4">
                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={data.ctas?.[0]?.onClick}
                                >
                                    {data.ctas?.[0]?.label || "Learn More"}
                                </Button>

                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={data.ctas?.[1]?.onClick}

                                >
                                    {data.ctas?.[1]?.label || "Get Started"}
                                </Button>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative">
                            {/* Accent outline behind image */}
                            <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 h-[520px] w-[360px] rounded-[26px] border-2 border-amber-500/95" />

                            {/* Image card */}
                            <div className="relative mx-auto lg:ml-auto lg:mr-14 w-full max-w-[520px] rounded-[24px] bg-white/10 ring-1 ring-white/10 p-3">
                                <div className="overflow-hidden rounded-[20px] bg-slate-200">
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="Why choose"
                                            className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-[320px] sm:h-[420px] md:h-[480px] grid place-items-center text-slate-600">
                                            <div className="text-5xl font-extrabold opacity-70">
                                                600 x 665
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Optional small corner accent */}
                            <div className="hidden lg:block absolute right-0 top-10 h-20 w-20 rounded-[18px] border-2 border-amber-500/95" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}