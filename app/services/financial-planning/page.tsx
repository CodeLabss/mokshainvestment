
"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { motion } from "framer-motion";
import { Heart, Stethoscope, TrendingUp, Shield, Phone } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "tip",
    name: "T.I.P. - Term Insurance Plan",
    subTitle: "Protecting Your Family's Future",
    icon: <Heart className="w-8 h-8 text-emerald-400" />,
    description:
      "Term Insurance ensures your family's financial future in case of untimely demise.",
    benefits: [
      "Maximum coverage at minimum cost.",
      "Ensures income replacement for dependents.",
      "Simple, clear structure (no maturity benefits).",
      "Essential protection for loans and long-term liabilities.",
    ],
    info: "LIC Term Plans offer coverage up to 40× your annual income. Premiums start as low as ₹500/month. Ideal for young professionals.",
    styles: {
      accent: "emerald-400",
      mutedBg: "bg-emerald-400/10",
      border: "border-emerald-400/30",
      iconBg: "bg-emerald-400/20",
      btnSolid: "bg-emerald-400",
      textColor: "text-emerald-50",
    },
  },
  {
    id: "hip",
    name: "H.I.P. - Health Insurance Plan",
    subTitle: "Shielding Your Savings from Medical Crises",
    icon: <Stethoscope className="w-8 h-8 text-emerald-400" />,
    description:
      "Health Insurance covers hospitalization and treatment so your savings stay safe.",
    benefits: [
      "Cashless hospitalization across network hospitals.",
      "Covers pre & post-hospitalization expenses.",
      "Annual health checkups included.",
      "Prevents financial drain during medical crises.",
    ],
    info: "LIC Health Plans cover up to ₹10 lakhs. Includes OPD & critical illness riders. Family floater options available.",
    styles: {
      accent: "emerald-400",
      mutedBg: "bg-emerald-400/10",
      border: "border-emerald-400/30",
      iconBg: "bg-emerald-400/20",
      btnSolid: "bg-emerald-400",
      textColor: "text-emerald-50",
    },
  },
  {
    id: "sip",
    name: "S.I.P. - Systematic Investment Plan",
    subTitle: "Building Wealth with Discipline",
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    description:
      "Invest fixed amounts regularly into mutual funds to grow wealth through compounding.",
    benefits: [
      "Disciplined, automated investing.",
      "Takes advantage of Rupee Cost Averaging.",
      "Helps achieve long-term goals like education or retirement.",
      "Flexible to pause or modify anytime.",
    ],
    info: "Start SIPs with as little as ₹500/month. Historical returns average 12–15% over 10+ years.",
    styles: {
      accent: "emerald-400",
      mutedBg: "bg-emerald-400/10",
      border: "border-emerald-400/30",
      iconBg: "bg-emerald-400/20",
      btnSolid: "bg-emerald-400",
      textColor: "text-emerald-50",
    },
  },
];

function useSectionInView(ref: React.RefObject<HTMLElement>, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function PillarCard({
  pillar,
  index,
  inView,
  widthClass,
  zClass,
}: {
  pillar: (typeof pillars)[0];
  index: number;
  inView: boolean;
  widthClass: string;
  zClass: string;
}) {
  const { styles } = pillar;

  return (
    <motion.article
      initial={{ y: 18, opacity: 0, scale: 0.995 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`${widthClass} ${zClass} mx-auto rounded-3xl p-8 md:p-10 ${styles.mutedBg} backdrop-blur-lg ${styles.border} border shadow-lg`}
    >
      <div className={`flex items-center gap-4 mb-4`}>
        <div className={`flex items-center justify-center ${styles.iconBg} rounded-xl w-14 h-14`}>
          {pillar.icon}
        </div>
        <div>
          <h4 className={`text-2xl md:text-3xl font-extrabold ${styles.textColor}`}>
            {pillar.name}
          </h4>
          <p className={`text-lg md:text-xl font-semibold text-slate-200 mt-2`}>
            {pillar.subTitle}
          </p>
        </div>
      </div>

      <p className={`text-lg md:text-xl font-semibold text-slate-200 mb-6`}>
        {pillar.description}
      </p>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={inView ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-100 text-lg md:text-lg font-semibold">
          {pillar.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className={`p-4 rounded-xl mb-6 text-lg bg-emerald-400/20 border border-emerald-400/30 font-semibold`}>
          {pillar.info}
        </div>

        <div className="flex justify-center">
          <Link href="/contact" className="w-full max-w-sm">
            <button className={`w-full ${styles.btnSolid} text-slate-900 px-8 py-4 rounded-xl font-bold hover:brightness-95 transition transform hover:scale-105 shadow-lg text-lg`}>
              <Phone className="w-6 h-6 inline-block mr-3" /> 
              Start Your Secure Future Today!
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function FinancialPlanningPage() {
  const [showContact, setShowContact] = useState(false);
  const pyramidRef = useRef<HTMLElement>(null);
  const inView = useSectionInView(pyramidRef as React.RefObject<HTMLElement>, 0.18);
  const ordered = [pillars[2], pillars[1], pillars[0]]; // SIP -> HIP -> TIP

  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <BgComponent />
      <div className="relative z-10">
        <Navbar />

        {/* Updated Hero Section with Matching Title Design */}
        <section className="flex-1 pt-32 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Enhanced Header matching other pages theme */}
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                  Financial Freedom Plan
                </h1>
              </div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
                Secure your <span className="font-bold text-rose-400">life</span>, <span className="font-bold text-emerald-400">health</span>, and <span className="font-bold text-sky-400">wealth</span> with our comprehensive 3-pillar strategy for complete financial security.
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              onClick={() =>
                document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center mx-auto px-10 py-4 bg-transparent border border-amber-400 text-amber-400 rounded-full font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 text-lg"
            >
              Explore the 3 Pillars
            </motion.button>
          </div>
        </section>

        {/* Features Section - Original Colors */}
        <section className="py-20 from-slate-900/80 to-slate-900/50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-8">
              Key Features of Our Plans
            </h3>
            <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto">
              Everything you need for <span className="font-bold text-amber-400">peace of mind</span> and <span className="font-bold text-sky-400">financial growth</span> in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[ 
                {
                  icon: <Heart className="w-12 h-12 text-rose-500" />,
                  title: "Life Protection (T.I.P)",
                  desc: "Secure your family's future with comprehensive term insurance.",
                  color: "rose-500",
                },
                {
                  icon: <Stethoscope className="w-12 h-12 text-emerald-400" />,
                  title: "Health Security (H.I.P)",
                  desc: "Cashless hospitalization and medical coverages without financial drain.",
                  color: "emerald-400",
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-sky-400" />,
                  title: "Wealth Growth (S.I.P)",
                  desc: "Systematic investing to achieve long-term goals with compounding returns.",
                  color: "sky-400",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-left hover:scale-105 transition-transform`}
                >
                  <div className="flex items-center mb-6">{f.icon}</div>
                  <h4 className={`text-2xl font-bold text-${f.color} mb-4`}>{f.title}</h4>
                  <p className="text-slate-200 font-semibold text-lg">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pyramid Section - Green Cards with Larger Font */}
        <section id="pillars" ref={pyramidRef} className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-400">Pyramid of Financial Security</h3>
              <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
                Start with a strong foundation (<span className="text-emerald-400 font-bold">T.I.P.</span>), secure health (<span className="text-emerald-400 font-bold">H.I.P.</span>), and reach your financial goals (<span className="text-emerald-400 font-bold">S.I.P.</span>).
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <PillarCard pillar={ordered[0]} index={0} inView={inView} widthClass="w-[88%] md:w-[66%] lg:w-[50%]" zClass="z-30" />
              <PillarCard pillar={ordered[1]} index={1} inView={inView} widthClass="w-[92%] md:w-[76%] lg:w-[60%]" zClass="z-20" />
              <PillarCard pillar={ordered[2]} index={2} inView={inView} widthClass="w-full md:w-[88%] lg:w-[72%]" zClass="z-10" />
            </div>
          </div>
        </section>

        {/* Updated CTA Section - Matching Insurance Page Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Secure Financial Future?
              </h2>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our financial experts will analyze your goals and create a comprehensive plan 
                integrating protection, health security, and wealth growth for complete financial freedom.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="block w-full max-w-md">
                  <button className="w-full px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer">
                    Get Free Financial Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowContact(false)}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto text-slate-900" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4 text-center">Quick Contact</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-400" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-400" />
                <input type="tel" placeholder="Your Phone" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-400" />
                <button type="submit" onClick={(e) => { e.preventDefault(); alert("Form submitted! Our expert will contact you soon."); setShowContact(false); }} className="w-full bg-amber-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}