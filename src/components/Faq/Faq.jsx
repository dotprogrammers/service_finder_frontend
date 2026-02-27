import { useState } from "react";
import { Plane } from "lucide-react";

const Faq = () => {
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
    <div>
      {/* FAQ Section */}
      <section className="aon-why-choose2-area bg-gray-50 ">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="aon-sub-title text-sm tracking-widest uppercase">FAQ</p>
          <h2 className="text-3xl font-bold aon-title mt-2">
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center  pb-4 text-left font-medium text-lg"
              >
                <span
                  className={`${
                    openIndex === index
                      ? "text-blue-600 border-2 border-[#022279]  p-2"
                      : "text-gray-800 border-2 border-[#022279]  p-2"
                  }`}
                >
                  {faq.question}
                </span>
                {/* <ChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      size={20}
                    /> */}
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 ">
        <div className="max-w-5xl mx-auto gap-2 flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="!text-xl sm:text-4xl font-bold text-white">
              Ready to Grow Your Business?
            </h3>
            <p className="text-sm mt-2 opacity-90 text-white text-center sm:left">
              Join thousands of service providers already growing their business
              with us.
            </p>
          </div>

          <button className="flex gap-1 mt-6 md:mt-0 bg-white text-black text-blue-700 px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
            <Plane />
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default Faq;
