import React from "react";

export default function StatsBar() {
    const stats = [
        { value: "17", label: "Virksomheder" },
        { value: "131", label: "Branche Kategorier" },
        { value: "1151", label: "Byer i Danmark" },
        { value: "34", label: "Udførte Opgaver" },
    ];

    return (
        <section className="w-full bg-[#1f1f1f]">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                <div className="grid grid-cols-2 items-center gap-y-8 py-6 md:grid-cols-4">
                    {stats.map((s, idx) => (
                        <div key={s.label} className="relative text-center">
                            {idx !== 0 && (
                                <span className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/15 md:block" />
                            )}
                            <div className="text-4xl font-extrabold tracking-wide text-white md:text-4xl">
                                {s.value}
                            </div>
                            <div className="mt-2 text-sm text-white/75">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}