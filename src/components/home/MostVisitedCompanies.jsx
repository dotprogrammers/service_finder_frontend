import React from "react";
import {
    Badge,
    Button,
    Card,
    Carousel,
    Space,
    Typography,
    Avatar,
    Rate,
} from "antd";
import {
    EnvironmentOutlined,
    ArrowRightOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export default function MostVisitedCompanies() {
    const navigate = useNavigate();

    // Dummy data (replace later with API)
    const companies = [
        {
            id: 1,
            name: "Test company without CVR",
            cityLabel: "København NV",
            featured: false,
            rating: 0,
            reviewsCount: 0,
        },
        {
            id: 2,
            name: "Copenhagen Legal Group",
            cityLabel: "København NV",
            featured: false,
            rating: 4.5,
            reviewsCount: 12,
        },
        {
            id: 3,
            name: "Odense Flyt & Lager",
            cityLabel: "Odense",
            featured: true,
            rating: 4.2,
            reviewsCount: 8,
        },
        {
            id: 4,
            name: "Aalborg Køreskole",
            cityLabel: "Aalborg",
            featured: false,
            rating: 3.8,
            reviewsCount: 6,
        },
        {
            id: 5,
            name: "Nielsen El-Service A/S",
            cityLabel: "Aarhus",
            featured: true,
            rating: 5,
            reviewsCount: 22,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 450,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                {/* Title (same as other sections) */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold text-slate-800">
                        Most Visited Companies
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        The most popular companies among our users
                    </p>
                </div>

                {/* Carousel */}
                <Carousel {...settings}>
                    {companies.map((company) => (
                        <div key={company.id} className="px-3">
                            <CompanyCard
                                company={company}
                                onViewProfile={() =>
                                    navigate(`/company/${company.id}`)
                                }
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Arrow Styling */}
            <style>{`
        .ant-carousel .slick-track {
          display: flex;
        }

        .ant-carousel .slick-slide {
          height: auto;
        }

        .ant-carousel .slick-slide > div {
          height: 100%;
        }

        .ant-carousel .slick-prev,
        .ant-carousel .slick-next {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          z-index: 2;
        }

        .ant-carousel .slick-prev:before,
        .ant-carousel .slick-next:before {
          color: rgba(0,0,0,0.7);
        }
      `}</style>
        </section>
    );
}

/* ---------------- CARD ---------------- */

function CompanyCard({ company, onViewProfile }) {
    const initials = company.name
        .split(" ")
        .slice(0, 2)
        .map((s) => s[0])
        .join("")
        .toUpperCase();

    return (
        <Card
            bordered
            className="h-full"
            bodyStyle={{
                padding: 18,
                height: "220px",
                display: "flex",
                flexDirection: "column",
            }}
            style={{
                borderRadius: 14,
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
        >
            {/* Top content */}
            <Space align="start" size={12}>
                <Avatar
                    size={50}
                    style={{
                        background: "#f0f2f5",
                        color: "#6b7280",
                        fontWeight: 700,
                    }}
                    icon={<UserOutlined />}
                >
                    {initials}
                </Avatar>

                <div className="flex-1">
                    <Text strong className="block text-base">
                        {company.name}
                    </Text>

                    <Space size={6} className="mt-1">
                        <EnvironmentOutlined />
                        <Text type="secondary" className="text-sm">
                            {company.cityLabel}
                        </Text>
                    </Space>

                    {/* Rating */}
                    <div className="mt-3">
                        <Space size={8}>
                            <Rate
                                disabled
                                allowHalf
                                value={company.rating}
                                style={{ fontSize: 14 }}
                            />

                            <Text type="secondary" className="text-sm">
                                {company.rating > 0 ? company.rating : "N/A"}
                            </Text>

                            <Text type="secondary" className="text-sm">
                                {company.reviewsCount} reviews
                            </Text>
                        </Space>
                    </div>

                    {/* Featured */}
                    {company.featured && (
                        <div className="mt-3">
                            <Badge color="gold" text="Featured" />
                        </div>
                    )}
                </div>
            </Space>

            {/* Push button to bottom */}
            <div className="mt-auto pt-4">
                <Button
                    type="primary"
                    block
                    onClick={onViewProfile}
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                >
                    View Profile
                </Button>
            </div>
        </Card>
    );
}