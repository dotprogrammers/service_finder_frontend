import { Check, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      title: "Free Company profile",
      price: 0,
      button: "Get Started",
      highlighted: false,
    },
    {
      title: "Company with info",
      price: 75,
      button: "Choose Plan",
      highlighted: true,
    },
    {
      title: "Company With Cvr and Bids",
      price: 500,
      button: "Contact Sales",
      highlighted: false,
    },
    {
      title: "Freelancer / Handyman / Altundigand",
      price: 400,
      button: "Choose Plan",
      highlighted: false,
    },
  ];

  const features = [
    "Show on our website",
    "Show on map",
    "Company profile",
    "Contact details shown",
    "Custom Branding",
    "Bids included",
    "Featured Listing",
    "Priority Support",
    "Profile Badge",
    "Advanced Analytics",
    "Portfolio Showcase",
    "Email Notifications",
    "API Access",
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is adjusted accordingly.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 7-day free trial for new users so you can explore all premium features.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, PayPal, and major credit/debit cards.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your subscription anytime from your dashboard.",
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer: "Yes! We provide discounted pricing for annual subscriptions.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <div className="page-content">
        <div className="aon-page-benner-area">
          <div
            className="aon-page-banner-row"
            style={{ backgroundImage: "url(/images/banner/job-banner.jpg)" }}
          >
            <div
              className="sf-overlay-main"
              style={{ opacity: "0.8", backgroundColor: "#022279" }}
            ></div>
            <div className="sf-banner-heading-wrap">
              <div className="sf-banner-heading-area">
                <div className="sf-banner-heading-large">Pricing</div>
                <div className="sf-banner-breadcrumbs-nav">
                  <ul className="list-inline">
                    <li>
                      <Link to="/" /> Home{" "}
                    </li>
                    <li>pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card */}

        <div className="bg-gray-50 aon-why-choose2-area">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-orange-500 uppercase">
              Plans
            </p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">
              Choose Your Plan
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Select the perfect plan for your business needs. All plans include
              access to our platform and support.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md bg-white flex flex-col justify-between transition-all duration-500 ease-out
    hover:-translate-y-3 hover:shadow-2xl
    ${
      plan.highlighted
        ? "border-2 border-blue-600 scale-105 hover:scale-110"
        : "border border-gray-200 hover:border-blue-400"
    }
  `}
              >
                {/* Top Section */}
                <div
                  className={`p-6 text-center rounded-t-xl 
                ${plan.highlighted ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white" : ""}`}
                >
                  <h3 className="text-sm font-semibold mb-4">{plan.title}</h3>
                  <p className="text-3xl font-bold">
                    kr {plan.price}
                    <span className="text-sm font-normal"> /month</span>
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 space-y-3 flex-1">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {i < 9 ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <X size={16} className="text-gray-300" />
                      )}
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="p-6">
                  <button
                    className={`w-full py-2 rounded-lg text-sm font-medium transition 
                ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* faq */}

        <div>
          {/* FAQ Section */}
          <section className="aon-why-choose2-area bg-gray-50 ">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-orange-500 text-sm tracking-widest uppercase">
                FAQ
              </p>
              <h2 className="text-3xl font-bold text-blue-900 mt-2">
                Pricing Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg bg-white overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-lg"
                  >
                    <span
                      className={`${
                        openIndex === index ? "text-blue-600" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-4 text-sm text-gray-500">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold">
                  Ready to Grow Your Business?
                </h3>
                <p className="text-sm mt-2 opacity-90">
                  Join thousands of service providers already growing their
                  business with us.
                </p>
              </div>

              <button className="mt-6 md:mt-0 bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                ⭐ Start Free Trial
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Pricing;
