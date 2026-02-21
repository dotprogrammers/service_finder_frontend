import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

function CategoryCard({ href = "#", image, count, title }) {
    return (
        <Link
            to={href}
            className="group relative block h-[185px] w-full overflow-hidden bg-slate-200 shadow-sm"
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Count Badge */}
            <div className="absolute left-4 top-4 z-10">
                <span className="inline-block rounded-sm bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Antal virksomheder: {count}
                </span>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-4">
                <p className="text-base font-medium leading-snug text-white drop-shadow">
                    {title}
                </p>
            </div>
        </Link>
    );
}

export default function Categories() {
    const categories = [
        {
            href: "/kategori/advokat",
            count: 4,
            title: "Advokat, Rådgivning & Regnskab",
            image:
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70",
        },
        {
            href: "/kategori/andre-services",
            count: 0,
            title: "Andre services",
            image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=70",
        },
        {
            href: "/kategori/bank-forsikring",
            count: 0,
            title: "Bank, Forsikring, Finansiering, Rådgivning m.v.",
            image:
                "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=1200&q=70",
        },
        {
            href: "/kategori/bilsyn",
            count: 0,
            title: "Bilsyn, syn af køretøjer generelt & andre synshaller",
            image:
                "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=70",
        },
        {
            href: "/kategori/flyttefirma",
            count: 0,
            title: "Flyttefirma, lager og opbevaring",
            image:
                "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=70",
        },
        {
            href: "/kategori/fritidshjem",
            count: 0,
            title: "Fritidshjem, Dagpleje, Institution, SFO",
            image:
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70",
        },
    ];

    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                {/* Title */}
                <h2 className="text-center text-2xl font-semibold text-slate-800">
                    Branche Kategorier
                </h2>

                {/* Grid */}
                <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((c) => (
                        <CategoryCard key={c.title} {...c} />
                    ))}
                </div>

                {/* AntD Button */}
                <div className="mt-10 flex justify-center">
                    <Button
                        type="primary"
                        size="large"
                        icon={<ReloadOutlined />}
                        className="!bg-green-600 hover:!bg-green-700 active:!bg-green-800"
                    >
                        View more
                    </Button>
                </div>
            </div>
        </section>
    );
}