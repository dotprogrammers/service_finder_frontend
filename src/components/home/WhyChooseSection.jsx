// WhyChooseSection.jsx
import React from "react";
import {
    TeamOutlined,
    BarChartOutlined,
    StarOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

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


export default function WhyChooseSection({
    data = whyChooseData,
    imageUrl,
}) {
    return (
        <section className="aon-why-choose2-area">
            <div className="container">
                <div className="aon-why-choose2-box">
                    <div className="row">

                        <div className="col-lg-6 col-md-12">
                            <div className="aon-why-choose-info">

                                <div className="section-head">
                                    <span className="aon-sub-title">Choose</span>
                                    <h2 className="aon-title">Why Choose us</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <ul className="aon-why-choose-steps list-unstyled">

                                    <li className="d-flex">
                                        <div className="aon-w-choose-left aon-icon-effect">
                                            <div className="aon-w-choose-icon"><i className="aon-icon"><img alt="" src="/images/whychoose/1.png" /></i></div>
                                        </div>
                                        <div className="aon-w-choose-right">
                                            <h4 className="aon-title">Meet new customers</h4>
                                            <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                                        </div>
                                    </li>

                                    <li className="d-flex">
                                        <div className="aon-w-choose-left aon-icon-effect">
                                            <div className="aon-w-choose-icon"><i className="aon-icon"><img alt="" src="/images/whychoose/2.png" /></i></div>
                                        </div>
                                        <div className="aon-w-choose-right">
                                            <h4 className="aon-title">Grow your revenue</h4>
                                            <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                                        </div>
                                    </li>

                                    <li className="d-flex">
                                        <div className="aon-w-choose-left aon-icon-effect">
                                            <div className="aon-w-choose-icon"><i className="aon-icon"><img alt="" src="/images/whychoose/3.png" /></i></div>
                                        </div>
                                        <div className="aon-w-choose-right">
                                            <h4 className="aon-title">Build your online reputation</h4>
                                            <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="aon-why-choose2-line">
                                <div className="aon-why-choose2-pic"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}