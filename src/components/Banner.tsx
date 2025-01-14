"use client";
import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { Alert } from "antd";

export default function Banner () {
  return (
    <>
       <Alert
          message="Platform fees will decrease by 5% after you complete your first 50 hours of lessons ( limited time offer )."
          type="info" 
          showIcon 
          style={{ marginBottom: 20 }}
        />
    </>
    // <div className="relative isolate flex flex-col items-center justify-center gap-x-6 gap-y-2 overflow-hidden bg-gray-50 px-4 py-2 sm:px-6 sm:before:flex-1 text-center">
    //   {/* Left Blur Gradient */}
    //   <div
    //     className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
    //     aria-hidden="true"
    //   >
    //     <div
    //       className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
    //       style={{
    //         clipPath:
    //           'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
    //       }}
    //     ></div>
    //   </div>

    //   {/* Right Blur Gradient */}
    //   <div
    //     className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
    //     aria-hidden="true"
    //   >
    //     <div
    //       className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
    //       style={{
    //         clipPath:
    //           'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
    //       }}
    //     ></div>
    //   </div>

    //   {/* Text and Button */}
    //   <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
    //     <p className="text-sm sm:text-base text-gray-900">
    //       Join us in Denver from June 7 – 9 to see what’s coming next.
    //     </p>
    //     <button className=" gap-2 text-sm text-blue-600 hover:text-blue-800">
    //       <ArrowUpRight size={20} />
    //     </button>
    //   </div>
    // </div>
  );
}
