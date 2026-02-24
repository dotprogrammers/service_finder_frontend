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
} from "lucide-react";
import { Link } from "react-router-dom";
const HowItWorks = () => {
  const service = [
    {
      icon: <Pencil size={32} className="text-blue-600" />,
      title: "Post Your Project",
      desc: "Create a free account and describe what you need. Be specific about your requirements, timeline, and budget.",
    },
    {
      icon: <Mail size={32} className="text-green-600" />,
      title: "Receive Quotes",
      desc: "Get quotes from qualified providers interested in your project. Compare prices and services offered.",
    },
    {
      icon: <CheckCircle size={32} className="text-yellow-500" />,
      title: "Choose Provider",
      desc: "Review profiles, ratings, and reviews. Select the provider that best fits your needs and budget.",
    },
    {
      icon: <Star size={32} className="text-cyan-500" />,
      title: "Rate & Review",
      desc: "After completion, rate your experience and leave a review to help others in the community.",
    },
  ];
  const provider = [
    {
      icon: <UserPlus size={32} className="text-blue-600" />,
      title: "Create Profile",
      desc: "Sign up and create your professional profile. Add your services, experience, and portfolio.",
    },
    {
      icon: <Shield size={32} className="text-green-600" />,
      title: "Get Verified",
      desc: "Submit required documents for verification. Build trust with the verified badge on your profile.",
    },
    {
      icon: <Search size={32} className="text-yellow-500" />,
      title: "Find Projects",
      desc: "Browse available projects or receive direct inquiries from potential customers in your area.",
    },
    {
      icon: <LineChart size={32} className="text-cyan-500" />,
      title: "Grow Business",
      desc: "Complete projects, earn reviews, and grow your reputation. Build a thriving business with DSY.dk.",
    },
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
      </div>
      <section className="bg-[#f8f9fa] aon-why-choose2-area">
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
                {/* Number Badge */}
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
      </section>
      <section className="bg-[#f8f9fa] ">
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
                {/* Number Badge */}
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
      </section>
      ;
    </>
  );
};

export default HowItWorks;
