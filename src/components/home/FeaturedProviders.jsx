// FeaturedProvidersSection.jsx
import React, { useMemo, useRef, useState } from "react";
import { Carousel, Button, Rate } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  HeartOutlined,
  HeartFilled,
  EnvironmentOutlined,
  CheckOutlined,
} from "@ant-design/icons";

/**
 * Dummy JSON, replace later with API data
 */
const dummyProviders = [
  {
    id: 6,
    name: "Nielsen El-Service A/S",
    location: "Aarhus",
    description: "Autoriseret elinstallatør med over 20 års erfaring.",
    rating: 4,
    reviews: 0,
    verified: true,
  },
  {
    id: 7,
    name: "Grøn Have Service",
    location: "Odense",
    description:
      "Professionel haveservice. Vi klarer alt fra plæneklipning til anlæggelse af nye haver.",
    rating: 4,
    reviews: 0,
    verified: true,
  },
  {
    id: 8,
    name: "Nordic Plumbing Pro",
    location: "Copenhagen",
    description: "Hurtig VVS service, installation, og akut hjælp 24/7.",
    rating: 5,
    reviews: 12,
    verified: true,
  },
  {
    id: 9,
    name: "Skylight Cleaning",
    location: "Aalborg",
    description: "Vinduespudsning og facadevask for private og erhverv.",
    rating: 4,
    reviews: 6,
    verified: false,
  },
  {
    id: 10,
    name: "Bright Home Cleaning",
    location: "Roskilde",
    description: "Grundig rengøring, flytterengøring, og fast serviceaftale.",
    rating: 5,
    reviews: 21,
    verified: true,
  },
];

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] || "";
  const b = parts[1]?.[0] || "";
  return (a + b).toUpperCase() || "SP";
}

function ProviderCard({ provider, isFavorite, onToggleFavorite }) {
  const initials = useMemo(() => getInitials(provider.name), [provider.name]);

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className={[
        "relative block w-full",
        "rounded-2xl bg-white",
        "border border-slate-100",
        "shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
        "px-6 py-6",
        "transition hover:border-2 hover:!border-green-400",
      ].join(" ")}
    >
      {/* Favorite */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleFavorite(provider.id);
        }}
        className={[
          "absolute right-5 top-5",
          "h-8 w-8 !rounded-full",
          "border border-slate-200 bg-white",
          "grid place-items-center",
          "text-slate-700",
          "shadow-sm",
          "hover:bg-slate-50",
        ].join(" ")}
        aria-label="Toggle favorite"
      >
        {isFavorite ? (
          <HeartFilled className="text-rose-500" />
        ) : (
          <HeartOutlined />
        )}
      </button>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-xl bg-slate-100 text-slate-500 font-semibold grid place-items-center">
            {initials}
          </div>

          {provider.verified ? (
            <div className="absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-emerald-500 text-white grid place-items-center border-2 border-white">
              <CheckOutlined className="text-[12px]" />
            </div>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="!text-[12px] text-[16px] font-semibold text-slate-900 leading-snug truncate">
            {provider.name}
          </h3>

          <div className="mt-1 flex items-center gap-2 text-slate-500 text-[13px]">
            <EnvironmentOutlined />
            <span className="truncate">{provider.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-[13px] leading-relaxed text-slate-600 min-h-[44px]">
        {provider.description}
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <Rate disabled value={provider.rating} />
        <span className="text-[13px] text-slate-500">
          ({provider.reviews} reviews)
        </span>
      </div>

      {/* Button */}
      <Button type="primary" className="w-full mt-2">
        View Profile <RightOutlined />
      </Button>
    </a>
  );
}

export default function FeaturedProvidersSection() {
  const carouselRef = useRef(null);
  const [favorites, setFavorites] = useState(() => new Set());
  const providers = dummyProviders;

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const carouselSettings = {
    dots: false,
    infinite: providers.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } }, // lg
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // md
    ],
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center">
          <div className="text-[12px] font-semibold tracking-[0.22em] text-amber-500">
            VENDOR
          </div>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Featured Providers
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Meet our top-rated service providers with verified credentials and
            excellent reviews.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          {/* Arrows */}
          <button
            type="button"
            onClick={() => carouselRef.current?.prev?.()}
            className={[
              "absolute left-0 top-1/2 -translate-y-1/2 z-10",
              "h-10 w-10 !rounded-full",
              "bg-white border border-slate-200",
              "shadow-sm grid place-items-center",
              "hover:bg-slate-50",
              "-translate-x-1/2",
            ].join(" ")}
            aria-label="Previous"
          >
            <LeftOutlined />
          </button>

          <button
            type="button"
            onClick={() => carouselRef.current?.next?.()}
            className={[
              "absolute right-0 top-1/2 -translate-y-1/2 z-10",
              "h-10 w-10 !rounded-full",
              "bg-white border border-slate-200",
              "shadow-sm grid place-items-center",
              "hover:bg-slate-50",
              "translate-x-1/2",
            ].join(" ")}
            aria-label="Next"
          >
            <RightOutlined />
          </button>

          {/* Track */}
          <div className="!px-0 sm:px-6">
            <Carousel ref={carouselRef} {...carouselSettings}>
              {providers.map((p) => (
                <div key={p.id} className="px-1 sm:px-3">
                  <ProviderCard
                    provider={p}
                    isFavorite={favorites.has(p.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
