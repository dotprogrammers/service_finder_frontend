import { Descriptions } from "antd";
import { Check, ChevronDown, Plane, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq/Faq";

const PricingPage = () => {
  const plans = [
    {
      title: "Free Company profile",
      price: 0,
      button: "Get Started",
      description: "Free Company profile",
      highlighted: false,
    },
    {
      title: "Company with info",
      price: 75,
      button: "Choose Plan",
      description: "Company with info",
      highlighted: true,
    },
    {
      title: "Company With Cvr and Bids",
      price: 500,
      button: "Contact Sales",
      description: "Company With Cvr and Bids",
      highlighted: false,
    },
    {
      title: "Freelancer / Handyman / Altundigand",
      price: 400,
      button: "Choose Plan",
      description: "Freelancer / Handyman / Altmuligmand",
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
    ${plan.highlighted
                    ? "border-2 border-[#667eea]  scale-105 hover:scale-110"
                    : "border border-gray-200 hover:border-[#667eea]/[.7] "
                  }
  `}
              >
                {/* Top Section */}
                <div
                  className={`p-4 text-center rounded-t-xl text-[#667eea] overflow-hidden
                ${plan.highlighted ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] !text-white" : "bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"}`}
                >
                  <h3 className="text-2xl font-bold mb-4 ">{plan.title}</h3>
                  {/* bb button */}

                  <div className="relative   ">
                    {/* bb button */}
                    {plan.highlighted && (
                      <button
                        className="absolute -bottom-0 -right-[28%] 
    rotate-[48deg] 
  px-8 py-2 text-xs font-semibold 
  bg-gradient-to-br from-[#667eea] to-[#764ba2] 
  text-white shadow-x2l"
                      >
                        MOST POPULAR
                      </button>
                    )}
                  </div>

                  <div className=" gap-2 flex items-center justify-center">
                    <div className="relative">
                      <span
                        className={`text-gray-600 text-lg font-medium absolute left-[-55%] top-[-30%]   ${plan.highlighted ? " !text-white" : ""}`}
                      >
                        kr
                      </span>

                      <span className="text-6xl font-bold leading-none">
                        {plan.price}
                      </span>

                      <span
                        className={`text-gray-500/[.8] text-lg absolute top-[90%] ${plan.highlighted ? " !text-white" : ""}`}
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <p
                    className={`text-gray-600/[.8] text-sm pt-[50px] font-normal ${plan.highlighted ? " !text-white" : ""}`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 space-y-3 flex-1">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {i < 9 ? (
                        <Check
                          size={18}
                          strokeWidth={3}
                          className="text-green-500 "
                        />
                      ) : (
                        <X size={16} className="text-gray-600" />
                      )}
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="p-6">
                  <button
                    className={`w-full py-2 rounded-lg text-sm font-medium transition b
                ${plan.highlighted
                        ? "bg-[#667eea] text-white hover:bg-blue-700"
                        : " !text-[#667eea] border-2 border-[#667eea] hover:border-2  hover:border-[#667eea]/[.5] hover:text-white"
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

        <Faq />
      </div>
    </>
  );
};

export default PricingPage;
