
"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Milestone Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
            {/* <Image
              src="/milestone.jpg"
              alt="Prudent SIP Milestone"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            /> */}
            <CldImage src="milestone_q78ein" alt="Prudent SIP Milestone" width={500} height={500} className="w-full h-auto object-cover rounded-2xl" />

          </div>
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight 
  bg-clip-text text-transparent 
  bg-gradient-to-r from-[#E5F0FF] via-[#C9A8FF] to-[#F5C2E7] 
  drop-shadow-[0_0_20px_rgba(230,230,255,0.8)]">
          {/* <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow-lg"> */}
            Celebrating a Landmark Achievement
          </h1>

          <p className="text-lg md:text-xl text-white drop-shadow-md leading-relaxed">
            We’re proud to be part of Prudent’s{" "}
            <span className="font-semibold text-pink-200">₹1,000 Cr SIP Book</span>{" "}
            milestone, with{" "}
            <span className="font-semibold text-indigo-200">33.5 Lakh</span> live SIPs.
          </p>

          <p className="text-lg text-white drop-shadow-md">
            Personally contributing{" "}
            <span className="font-semibold text-purple-200">520 SIPs</span> to this
            achievement.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <a
              href="/services"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
