module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/services/financial-planning/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/services/financial-planning/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// looks almost good just a little change needed
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { motion } from "framer-motion";
// import {
//   Heart,
//   Stethoscope,
//   TrendingUp,
//   Shield,
//   ExternalLink,
//   Phone,
// } from "lucide-react";
// /* ---------------------------
//   Pillars with color styles
//   - TIP (base) : rose
//   - HIP (mid)  : emerald
//   - SIP (top)  : sky
// --------------------------- */
// const pillars = [
//   {
//     id: "tip",
//     name: "T.I.P. - Term Insurance Plan",
//     subTitle: "Protecting Your Family's Future",
//     icon: <Heart className="w-7 h-7 text-rose-500" />,
//     description:
//       "Term Insurance ensures your family’s financial future in case of untimely demise.",
//     benefits: [
//       "Maximum coverage at minimum cost.",
//       "Ensures income replacement for dependents.",
//       "Simple, clear structure (no maturity benefits).",
//       "Essential protection for loans and long-term liabilities.",
//     ],
//     info: "LIC Term Plans offer coverage up to 40× your annual income. Premiums start as low as ₹500/month. Ideal for young professionals.",
//     styles: {
//       accent: "rose-500",
//       mutedBg: "bg-rose-500/10",
//       border: "border-rose-500/30",
//       iconBg: "bg-rose-500/20",
//       btnSoft: "bg-rose-500/20",
//       btnSolid: "bg-rose-500",
//       textColor: "text-rose-50",
//     },
//   },
//   {
//     id: "hip",
//     name: "H.I.P. - Health Insurance Plan",
//     subTitle: "Shielding Your Savings from Medical Crises",
//     icon: <Stethoscope className="w-7 h-7 text-emerald-400" />,
//     description:
//       "Health Insurance covers hospitalization and treatment so your savings stay safe.",
//     benefits: [
//       "Cashless hospitalization across network hospitals.",
//       "Covers pre & post-hospitalization expenses.",
//       "Annual health checkups included.",
//       "Prevents financial drain during medical crises.",
//     ],
//     info: "LIC Health Plans cover up to ₹10 lakhs. Includes OPD & critical illness riders. Family floater options available.",
//     styles: {
//       accent: "emerald-400",
//       mutedBg: "bg-emerald-400/10",
//       border: "border-emerald-400/30",
//       iconBg: "bg-emerald-400/20",
//       btnSoft: "bg-emerald-400/20",
//       btnSolid: "bg-emerald-400",
//       textColor: "text-emerald-50",
//     },
//   },
//   {
//     id: "sip",
//     name: "S.I.P. - Systematic Investment Plan",
//     subTitle: "Building Wealth with Discipline",
//     icon: <TrendingUp className="w-7 h-7 text-sky-400" />,
//     description:
//       "Invest fixed amounts regularly into mutual funds to grow wealth through compounding.",
//     benefits: [
//       "Disciplined, automated investing.",
//       "Takes advantage of Rupee Cost Averaging.",
//       "Helps achieve long-term goals like education or retirement.",
//       "Flexible to pause or modify anytime.",
//     ],
//     info: "Start SIPs with as little as ₹500/month. Historical returns average 12–15% over 10+ years.",
//     styles: {
//       accent: "sky-400",
//       mutedBg: "bg-sky-400/10",
//       border: "border-sky-400/30",
//       iconBg: "bg-sky-400/20",
//       btnSoft: "bg-sky-400/20",
//       btnSolid: "bg-sky-400",
//       textColor: "text-sky-50",
//     },
//   },
// ];
// /* ---------------------------
//   Intersection hook to reveal content when pyramid comes into view
// --------------------------- */
// function useSectionInView(ref: React.RefObject<HTMLElement>, threshold = 0.2) {
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;
//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setInView(true);
//             obs.disconnect();
//           }
//         });
//       },
//       { threshold }
//     );
//     obs.observe(node);
//     return () => obs.disconnect();
//   }, [ref, threshold]);
//   return inView;
// }
// /* ---------------------------
//   PillarCard component
//   - Reduced height
//   - Wider card
//   - Color-coded glassmorphic background
//   - Bolder text
// --------------------------- */
// function PillarCard({
//   pillar,
//   index,
//   inView,
//   widthClass,
//   zClass,
// }: {
//   pillar: (typeof pillars)[0];
//   index: number;
//   inView: boolean;
//   widthClass: string;
//   zClass: string;
// }) {
//   const { styles } = pillar;
//   return (
//     <motion.article
//       initial={{ y: 18, opacity: 0, scale: 0.995 }}
//       animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
//       transition={{ duration: 0.5, delay: index * 0.08 }}
//       tabIndex={0}
//       aria-labelledby={`${pillar.id}-title`}
//       className={`${widthClass} ${zClass} mx-auto rounded-3xl p-6 md:p-8 ${styles.mutedBg} backdrop-blur-lg ${styles.border} border shadow-lg focus:outline-none focus:ring-4 focus:ring-${styles.accent}/20`}
//     >
//       <div className={`flex items-center gap-4 mb-3`}>
//         <div className={`flex items-center justify-center ${styles.iconBg} rounded-md w-12 h-12`}>
//           {pillar.icon}
//         </div>
//         <div>
//           <h4
//             id={`${pillar.id}-title`}
//             className={`text-xl md:text-2xl font-extrabold ${styles.textColor}`}
//           >
//             {pillar.name}
//           </h4>
//           <p className={`text-sm md:text-base font-semibold text-slate-200 mt-1`}>
//             {pillar.subTitle}
//           </p>
//         </div>
//       </div>
//       <p className={`text-sm md:text-base font-semibold text-slate-200 mb-3`}>
//         {pillar.description}
//       </p>
//       {/* Expandable content */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={inView ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="overflow-hidden"
//       >
//         <ul className="list-disc pl-5 space-y-1 mb-3 text-slate-100 text-sm md:text-sm font-semibold">
//           {pillar.benefits.map((b, i) => (
//             <li key={i}>{b}</li>
//           ))}
//         </ul>
//         <div className={`p-3 rounded-lg mb-3 text-sm ${styles.btnSoft} border ${styles.border} font-semibold`}>
//           {pillar.info}
//         </div>
//         <div className="flex gap-3">
//           <button
//             onClick={() => alert(`Get Personalized Quote for ${pillar.name}`)}
//             className={`flex-1 px-4 py-2 rounded-lg font-semibold text-${styles.accent} ${styles.btnSoft} hover:brightness-105 transition`}
//           >
//             Get Quote <ExternalLink className="w-4 h-4 inline-block ml-1" />
//           </button>
//           <button
//             onClick={() => alert(`Contact expert about ${pillar.name}`)}
//             className={`${styles.btnSolid} text-slate-900 px-4 py-2 rounded-lg font-semibold hover:brightness-95 transition`}
//           >
//             <Phone className="w-4 h-4 inline-block mr-1" /> Contact
//           </button>
//         </div>
//       </motion.div>
//     </motion.article>
//   );
// }
// /* ---------------------------
//   Main Page
// --------------------------- */
// export default function FinancialPlanningPage() {
//   const [showContact, setShowContact] = useState(false);
//   const pyramidRef = useRef<HTMLElement | null>(null);
//   const inView = useSectionInView(pyramidRef, 0.18);
//   const ordered = [pillars[2], pillars[1], pillars[0]]; // SIP top -> HIP -> TIP base
//   return (
//     <main className="relative min-h-screen flex flex-col text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero */}
//         <section className="py-36 md:py-44 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-4"
//           >
//             Your Financial Freedom Plan
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.12 }}
//             className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8"
//           >
//             Secure your life, health, and wealth with our 3-pillar strategy designed to give you financial peace of mind.
//           </motion.p>
//           <motion.button
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.24 }}
//             onClick={() =>
//               document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-8 py-3 bg-transparent border border-amber-400 text-amber-400 rounded-full font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
//           >
//             Explore the 3 Pillars
//           </motion.button>
//         </section>
//         {/* Pyramid Section */}
//         <section
//           id="pillars"
//           ref={pyramidRef}
//           className="py-16 md:py-20"
//           aria-label="Pyramid of Financial Security"
//         >
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-8">
//               <h3 className="text-2xl md:text-3xl font-bold text-amber-400">Pyramid of Financial Security</h3>
//               <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
//                 Start with a strong foundation (T.I.P.), secure health (H.I.P.), and reach your financial goals (S.I.P.).
//               </p>
//             </div>
//             {/* Pyramid layers */}
//             <div className="flex flex-col items-center gap-5 md:gap-7">
//               <PillarCard pillar={ordered[0]} index={0} inView={inView} widthClass="w-[88%] md:w-[66%] lg:w-[50%]" zClass="z-30" />
//               <PillarCard pillar={ordered[1]} index={1} inView={inView} widthClass="w-[92%] md:w-[76%] lg:w-[60%]" zClass="z-20" />
//               <PillarCard pillar={ordered[2]} index={2} inView={inView} widthClass="w-full md:w-[88%] lg:w-[72%]" zClass="z-10" />
//             </div>
//           </div>
//         </section>
//         {/* CTA */}
//         <section className="py-20 text-center">
//           <div className="max-w-4xl mx-auto px-6 bg-white/6 backdrop-blur-sm border border-white/8 rounded-2xl p-10 shadow-xl">
//             <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400 animate-pulse" />
//             <h2 className="text-3xl font-bold text-amber-400 mb-4">Ready to Build Your Secure Future?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               As your trusted LIC advisor, we help you integrate protection, health, and investments into a seamless life plan.
//             </p>
//             <button
//               onClick={() => setShowContact(true)}
//               className="flex items-center justify-center mx-auto px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-full hover:bg-amber-500 transition-transform hover:scale-105"
//             >
//               <Phone className="w-5 h-5 mr-2" />
//               Contact an Expert
//             </button>
//           </div>
//           {showContact && (
//             <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowContact(false)}>
//               <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto text-slate-900" onClick={(e) => e.stopPropagation()}>
//                 <h3 className="text-xl font-bold mb-4 text-center">Quick Contact</h3>
//                 <form className="space-y-4">
//                   <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-400" />
//                   <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-400" />
//                   <input type="tel" placeholder="Your Phone" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-400" />
//                   <button type="submit" onClick={(e) => { e.preventDefault(); alert("Form submitted! Our expert will contact you soon."); setShowContact(false); }} className="w-full bg-amber-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// }
}),
"[project]/mokshainvestment/app/services/financial-planning/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/services/financial-planning/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6303c792._.js.map