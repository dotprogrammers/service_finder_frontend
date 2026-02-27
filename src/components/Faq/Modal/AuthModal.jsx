import { Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AuthModal({ open, onClose, initialTab }) {
  const [activeTab, setActiveTab] = useState("Sign In");

  // 👇 যখন modal open হবে তখন dropdown থেকে আসা tab সেট হবে
  useEffect(() => {
    if (open && initialTab) {
      setActiveTab(initialTab === "signup" ? "signup" : "Sign In");
    }
  }, [open, initialTab]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className=" bg-white rounded-xl w-full max-w-[400px] mx-4 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ×
        </button>

        {/* Tabs */}
        <div className="flex mb-6 ">
          <button
            onClick={() => setActiveTab("Sign In")}
            className={`flex-1 py-2 text-center font-medium  ${
              activeTab === "Sign In"
                ? "border-b-2 border-yellow-500 text-gray-900"
                : "border-b-2 border-transparent text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 text-center font-medium    ${
              activeTab === "signup"
                ? "border-b-2 border-yellow-500 text-gray-900"
                : "border-b-2 border-transparent text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        {activeTab === "Sign In" ? (
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2"
            />
            {/* Switch to signup */}
            <p className="text-center text-sm pt-4">
              Don't have an account?
              <span
                onClick={() => setActiveTab("signup")}
                className="text-yellow-500 pl-2 cursor-pointer"
              >
                Sign up here
              </span>
            </p>
            <button className="w-full bg-yellow-500 text-white pb-2 rounded">
              Sign In
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2"
            />

            {/* Switch to Sign In */}
            <p className="text-center text-sm pt-4">
              Already have an account?
              <span
                onClick={() => setActiveTab("Sign In")}
                className="text-yellow-500 pl-2 cursor-pointer"
              >
                Sign In here
              </span>
            </p>
            <button className="w-full bg-yellow-500 text-white pb-2 rounded">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
