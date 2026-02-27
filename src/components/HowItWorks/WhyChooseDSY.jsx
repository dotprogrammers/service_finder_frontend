import React from "react";
import {
  Pencil,
  Mail,
  CheckCircle,
  Star,
  ShieldCheck,
  DollarSign,
  Clock,
  Users,
  Heart,
} from "lucide-react";

const WhyChooseDSY = () => {
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
  const choose = [
    {
      icon: <ShieldCheck size={34} className="text-green-400" />,
      title: "Verified Providers",
      desc: "All service providers are verified through our rigorous screening process. Work with professionals you can trust.",
    },
    {
      icon: <DollarSign size={34} className="text-green-400" />,
      title: "Competitive Prices",
      desc: "Compare multiple quotes and choose the best price for your budget. No hidden fees or surprises.",
    },
    {
      icon: <Star size={34} className="text-yellow-400" />,
      title: "Trusted Reviews",
      desc: "Read genuine reviews from real customers. Make informed decisions based on others' experiences.",
    },
    {
      icon: <Clock size={34} className="text-cyan-400" />,
      title: "Quick Response",
      desc: "Get responses from providers quickly. Most projects receive quotes within 24 hours.",
    },
    {
      icon: <Users size={34} className="text-blue-400" />,
      title: "Large Network",
      desc: "Access thousands of qualified providers across Denmark in hundreds of service categories.",
    },
    {
      icon: <Heart size={34} className="text-red-400" />,
      title: "Customer Support",
      desc: "Our dedicated support team is here to help you every step of the way. Contact us anytime.",
    },
  ];
  return (
    <div>
      <section className="bg-[#667eea]  py-12 mt-[50px]">
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
      </section>
    </div>
  );
};

export default WhyChooseDSY;
