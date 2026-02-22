// NewsletterSubscribeSection.jsx
import React, { useState } from "react";
import { Input, Button, message } from "antd";

export default function NewsletterSubscribeSection() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        if (!email) {
            message.warning("Please enter your email address");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            message.error("Please enter a valid email");
            return;
        }

        try {
            setLoading(true);

            // 🔗 Replace with API later
            await new Promise((res) => setTimeout(res, 1000));

            message.success("Subscribed successfully!");
            setEmail("");
        } catch (err) {
            message.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-4xl px-4 text-center">
                {/* Title */}
                <h2 className="!text-2xl !font-extrabold text-[#0B2A6B]">
                    Stay Updated with Latest Opportunities
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
                    Subscribe to our newsletter and get notified about new projects,
                    service providers, and exclusive deals.
                </p>

                {/* Form */}
                <div className="mt-8 flex justify-center">
                    <div className="flex max-w-[600px] w-full">
                        <Input
                            size="large"
                            placeholder="Enter Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="!rounded-tr-[0px] !rounded-br-[0px]"

                        />

                        <Button
                            type="primary"
                            size="large"
                            loading={loading}
                            onClick={handleSubscribe}
                            className="!rounded-tl-[0px] !rounded-bl-[0px]"

                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}