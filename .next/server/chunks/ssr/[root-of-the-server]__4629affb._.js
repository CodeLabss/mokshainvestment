module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/about/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/about/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // v3
// "use client";
// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { ArrowRight } from "lucide-react";
// /* ---------- Achievement Counter Hook ---------- */
// function useCountUp(end: number, duration = 2000, start = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let current = 0;
//     setCount(0);
//     const stepTime = Math.max(16, Math.floor(duration / end));
//     const timer = setInterval(() => {
//       current += 1;
//       setCount(current);
//       if (current >= end) clearInterval(timer);
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, [end, duration, start]);
//   return count;
// }
// /* ---------- Achievements Section ---------- */
// function Achievements() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [start, setStart] = useState(false);
//   useEffect(() => {
//     const node = sectionRef.current;
//     if (!node) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStart(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);
//   const exp = useCountUp(18, 2000, start);
//   const sips = useCountUp(500, 1500, start);
//   const mediclaims = useCountUp(500, 1500, start);
//   const stats = [
//     { label: "Years of Experience", value: exp },
//     { label: "SIPs Managed", value: sips },
//     { label: "Mediclaims Processed", value: mediclaims },
//   ];
//   return (
//     <section ref={sectionRef} className="relative py-20 text-white">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="mb-12 text-center">
//           <h3 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
//             Our Achievements
//           </h3>
//           <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
//             Trusted by thousands of clients with proven results in finance and insurance.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {stats.map((s) => (
//             <div
//               key={s.label}
//               className="group relative rounded-2xl p-8 bg-white/10 backdrop-blur border border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
//             >
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
//               <p className="relative text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
//                 {s.value}+
//               </p>
//               <p className="relative mt-4 text-lg font-medium text-gray-300">
//                 {s.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// /* ---------- Main About Page ---------- */
// export default function AboutUs() {
//   return (
//     <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
//       {/* Background Component (only background now) */}
//       <BgComponent />
//       {/* Overlay content */}
//       <div className="relative z-10">
//         <Navbar />
//         {/* Intro Section */}
//         <section className="flex flex-col justify-center items-center text-center px-6 py-24 md:py-32">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
//             About{" "}
//             <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
//               Moksha Investment
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
//             Building trust through transparency and financial growth.  
//             We guide our clients toward smarter, secure investments with years of proven expertise.
//           </p>
//         </section>
//         {/* Achievements Section */}
//         <Achievements />
//         {/* Why Choose Us */}
//         <section className="py-20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
//               Why Choose Us
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto mb-12">
//               We combine experience, integrity, and innovation to deliver unmatched financial services.
//             </p>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Expert Guidance",
//                   desc: "Backed by years of expertise in wealth management and financial planning.",
//                 },
//                 {
//                   title: "Transparent Approach",
//                   desc: "We prioritize honesty and clarity in every transaction and recommendation.",
//                 },
//                 {
//                   title: "Client-First Philosophy",
//                   desc: "Your goals define our direction — we grow only when you do.",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
//                 >
//                   <h3 className="text-xl font-semibold mb-3 text-amber-400">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Mini CTA */}
//         <section className="py-20 text-center bg-transparent">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Begin Your Financial Journey?
//           </h2>
//           <p className="text-gray-300 mb-8">
//             Let’s build your secure and successful future together.
//           </p>
//           <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
//             Get in Touch <ArrowRight className="w-5 h-5" />
//           </button>
//         </section>
//         <Footer />
//       </div>
//     </div>
//   );
// }
}),
"[project]/mokshainvestment/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/about/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4629affb._.js.map