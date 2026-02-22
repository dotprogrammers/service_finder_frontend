// LatestNewsSection.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

/**
 * Dummy JSON, replace later with API data
 */
const dummyPosts = [
    {
        id: 1,
        category: "Home Improvement",
        date: "January 11, 2026",
        author: "Nina Brown",
        title: "Top 10 Home Renovation Tips for 2026",
        slug: "/blog-detail/1",
        imageUrl: "", // add later
    },
    {
        id: 2,
        category: "Business",
        date: "January 10, 2026",
        author: "Peter Jensen",
        title: "How to Choose the Right Service Provider",
        slug: "/blog-detail/2",
        imageUrl: "", // add later
    },
    {
        id: 3,
        category: "Tips & Tricks",
        date: "January 9, 2026",
        author: "Maria Hansen",
        title: "Essential Maintenance Checklist for Homeowners",
        slug: "/blog-detail/3",
        imageUrl: "", // add later
    },
];

function classNames(...arr) {
    return arr.filter(Boolean).join(" ");
}

function BlogCard({ post }) {
    const category = useMemo(() => (post.category || "").toUpperCase(), [post.category]);

    return (
        <div className="media-bg-animate">
            <Link
                to={post.slug || "/blog-detail"}
                className={classNames(
                    "group block",
                    "rounded-2xl bg-white !max-h-[390px] !h-full",
                    "shadow-[0_14px_40px_rgba(15,23,42,0.10)]",
                    "border border-slate-100",
                    "overflow-hidden",
                    "transition hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] !border-b-3 !border-b-[#0B2A6B]"
                )}
            >
                {/* Image */}
                <div className="relative">
                    {post.imageUrl ? (
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="h-[220px] w-full object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <div className="h-[220px] w-full bg-slate-200 grid place-items-center">
                            <div className="text-5xl font-bold text-slate-500/70">406 x 305</div>
                        </div>
                    )}

                    {/* Category pill */}
                    <div className="absolute -bottom-4 left-5">
                        <span
                            className={classNames(
                                "inline-flex items-center",
                                "h-8 px-4 rounded-lg",
                                "bg-green-500 text-white",
                                "text-[11px] font-semibold tracking-wide",
                                "shadow-sm"
                            )}
                        >
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="px-5 pt-7 pb-6">
                    <div className="text-[12px] text-slate-500">
                        {post.date} <span className="mx-1">|</span> By {post.author}
                    </div>

                    <h3
                        className={classNames(
                            "mt-3",
                            "text-[18px] leading-snug font-extrabold",
                            "text-[#0B2A6B]",
                            "group-hover:opacity-90"
                        )}
                    >
                        {post.title}
                    </h3>
                </div>

                {/* Bottom accent line */}
                {/* <div className="h-[3px] w-full bg-[#0B2A6B]" /> */}
            </Link>
        </div>
    );
}

export default function LatestNewsSection({
    eyebrow = "BLOG",
    title = "Latest News & Articles",
    description = "Stay updated with the latest tips, trends, and news about home services and professional contractors.",
    posts = dummyPosts,
}) {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-6">
                        <div className="text-[12px] font-semibold tracking-[0.28em] text-green-500">
                            {eyebrow}
                        </div>
                        <h2 className="mt-2 text-4xl font-extrabold text-[#0B2A6B]">
                            {title}
                        </h2>
                    </div>

                    <div className="lg:col-span-6 lg:flex lg:justify-end">
                        <p className="max-w-xl text-[13px] leading-relaxed text-slate-500">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0, 3).map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}