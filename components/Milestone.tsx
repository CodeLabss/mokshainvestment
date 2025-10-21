// components/Milestone.tsx
"use client";

import Image from "next/image";

export default function Milestone() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Our Proud Milestone
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          A recognition of trust and teamwork — building brighter financial futures together.
        </p>
        

        {/* Image card */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
          <div className="relative bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-indigo-100 overflow-hidden">
          <Image
  src="/milestone.jpg"
  alt="Prudent SIP Milestone"
  width={800}
  height={600}
  className="w-full h-auto max-w-3xl mx-auto rounded-2xl shadow-lg"
/>


          </div>
        </div>
      </div>
    </section>
  );
}
