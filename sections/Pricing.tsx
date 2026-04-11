"use client";

import { useState } from "react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-[#F9FAFB] py-[80px]">
      <div className="container-custom text-center">
        {/* Heading */}
        <h2 className="text-[32px] font-bold text-gray-900">
          Airbnb Assistant <span className="text-[#FF385C]">pricing</span>
        </h2>

        <p className="mt-[10px] text-gray-600 text-[14px]">
          Choose a plan that’s right for you
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-[12px] mt-[24px]">
          <span className="text-sm text-gray-600">Pay Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-[44px] h-[24px] flex items-center rounded-full p-1 transition ${
              yearly ? "bg-[#FF385C]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-[18px] h-[18px] rounded-full shadow transform transition ${
                yearly ? "translate-x-[20px]" : ""
              }`}
            />
          </button>

          <span className="text-sm text-gray-600">Pay Yearly</span>
          <span className="text-[#FF385C] text-sm">Save 25%</span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-[24px] mt-[50px]">
          {/* Free */}
          <div className="bg-white p-[28px] rounded-[16px] border border-gray-200 text-left">
            <h3 className="font-semibold text-gray-900">Freebie</h3>
            <p className="text-gray-500 text-[13px] mt-[6px]">
              Ideal for individuals who need quick access to basic features.
            </p>

            <div className="mt-[20px] text-[36px] font-bold">
              $0{" "}
              <span className="text-[14px] font-normal text-gray-500">
                /Month
              </span>
            </div>

            <button className="mt-[20px] w-full border border-[#FF385C] text-[#FF385C] py-[10px] rounded-md hover:bg-[#FF385C] hover:text-white transition">
              Get Started Now
            </button>
          </div>

          {/* Professional (Highlighted) */}
          <div className="bg-[#FF385C] text-white p-[28px] rounded-[16px] text-left shadow-lg scale-105">
            <h3 className="font-semibold">Professional</h3>
            <p className="text-white/80 text-[13px] mt-[6px]">
              Ideal for individuals who need advanced features.
            </p>

            <div className="mt-[20px] text-[36px] font-bold">
              ${yearly ? "20" : "25"}{" "}
              <span className="text-[14px] font-normal text-white/80">
                /Month
              </span>
            </div>

            <button className="mt-[20px] w-full bg-white text-[#FF385C] py-[10px] rounded-md font-medium hover:opacity-90">
              Get Started Now
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-[28px] rounded-[16px] border border-gray-200 text-left">
            <h3 className="font-semibold text-gray-900">Enterprise</h3>
            <p className="text-gray-500 text-[13px] mt-[6px]">
              Ideal for businesses who need personalized services.
            </p>

            <div className="mt-[20px] text-[36px] font-bold">
              $100{" "}
              <span className="text-[14px] font-normal text-gray-500">
                /Month
              </span>
            </div>

            <button className="mt-[20px] w-full border border-[#FF385C] text-[#FF385C] py-[10px] rounded-md hover:bg-[#FF385C] hover:text-white transition">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
