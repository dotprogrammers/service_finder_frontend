import React from "react";
import {
  Pencil,
  Mail,
  CheckCircle,
  Star,
  UserPlus,
  User,
  Shield,
  Search,
  LineChart,
  Briefcase,
  ShieldCheck,
  DollarSign,
  Clock,
  Users,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq/Faq";
import HowServiceFinderWork from "../components/about/HowServiceFinderWork";
import HowItWorksBaneer from "../components/HowItWorks/HowItWorksBaneer";
import ServiceSeekers from "../components/HowItWorks/ServiceSeekers";
import ServiceProviders from "../components/HowItWorks/ServiceProviders";
import WhyChooseDSY from "../components/HowItWorks/WhyChooseDSY";
const HowItWorks = () => {
  return (
    <>
      <HowItWorksBaneer />
      {/* <div className="page-content">
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
                <div className="sf-banner-heading-large">How It Works</div>
                <div className="sf-banner-breadcrumbs-nav">
                  <ul className="list-inline">
                    <li>
                      <Link to="/" /> Home{" "}
                    </li>
                    <li>How It Works</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <HowServiceFinderWork />
      {/* <section className="bg-[#f8f9fa] aon-why-choose2-area">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[4px] aon-sub-title  mb-3">
            CUSTOMERS
          </p>

          <h2 className="text-4xl font-bold text-[#0f2b6c] mb-4">
            For Service Seekers
          </h2>

          <p className="text-gray-500 pb-[50px]">
            Find and hire trusted professionals for all your service needs
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {service.map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300"
              >
                
                <div className="absolute -top-5 right-6 w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                  {i + 1}
                </div>

                <div className="mb-5 flex justify-center">{item.icon}</div>

                <h3 className="text-lg font-semibold text-[#0f2b6c] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <button className=" inline-flex items-center gap-2 bg-[#667eea] hover:bg-[#667eea] text-white px-6 py-3 rounded-lg shadow-md transition">
            <UserPlus size={18} />
            Get Started as Customer
          </button>
        </div>
      </section> */}
      <ServiceSeekers />
      {/* <section className="bg-[#f8f9fa] ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[4px] aon-sub-title  mb-3">
            Providers
          </p>

          <h2 className="text-4xl font-bold text-[#0f2b6c] mb-4">
            For Service Providers
          </h2>

          <p className="text-gray-500 pb-[50px]">
            Grow your business and reach more customers
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {provider.map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300"
              >
                
                <div className="absolute -top-5 right-6 w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                  {i + 1}
                </div>

                <div className="mb-5 flex justify-center">{item.icon}</div>

                <h3 className="text-lg font-semibold text-[#0f2b6c] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <button className=" inline-flex items-center gap-2 bg-[#667eea] hover:bg-[#667eea] text-white px-6 py-3 rounded-lg shadow-md transition">
            <Briefcase size={18} />
            Join as Service Provider
          </button>
        </div>
      </section> */}
      <ServiceProviders />
      <WhyChooseDSY />
      {/* <section className="bg-[#667eea]  py-12 mt-[50px]">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-xs tracking-[4px] aon-sub-title text-white mb-3">
            BENEFITS
          </p>

          <h2 className="text-4xl font-bold aon-title text-white pb-8">
            Why Choose DSY.dk
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {choose.map((item, i) => (
              <div
                key={i}
                className="bg-[#764ba2] rounded-xl p-8 border border-blue-500/30 hover:bg-[#244a9a] transition duration-300 text-white"
              >
                <div className="mb-6 flex justify-center text-white">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                <p className=" text-sm leading-relaxed text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Faq />;
    </>
  );
};

export default HowItWorks;
