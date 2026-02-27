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
const ServiceProviders = () => {
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
    <div>
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
    </div>
  );
};

export default ServiceProviders;
