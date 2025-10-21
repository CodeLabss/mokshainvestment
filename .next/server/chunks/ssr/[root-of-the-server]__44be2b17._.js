module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/services/bonds/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/services/bonds/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import React, { useState, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { BarChart3, PieChart, Shield, TrendingUp, FileText, X } from "lucide-react";
// interface BondCategory {
//   id: string;
//   name: string;
//   description: string;
//   features: string[];
//   image: string;
// }
// const bonds: BondCategory[] = [
//   {
//     id: "ncd",
//     name: "Non-Convertible Debentures (NCD)",
//     description:
//       "NCDs offer fixed returns over a specific period with relatively higher interest rates compared to traditional savings options.",
//     features: [
//       "Higher fixed returns",
//       "Credit rating backed safety",
//       "Tradable on stock exchanges",
//       "Fixed maturity period",
//     ],
//     image: "/images/ncd-chart.png",
//   },
//   {
//     id: "fd",
//     name: "Fixed Deposits (FD)",
//     description:
//       "FDs are one of the safest investment options, offering guaranteed returns with flexible tenures and easy renewal options.",
//     features: [
//       "Guaranteed returns",
//       "Flexible tenure options",
//       "Tax-saving schemes available",
//       "Easy premature withdrawal",
//     ],
//     image: "/images/fd-chart.png",
//   },
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mb-4">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-amber-400" })}
//     </div>
//     <h4 className="font-semibold text-white mb-2">{title}</h4>
//     <p className="text-sm text-slate-200">{description}</p>
//   </div>
// );
// const BondsPage = () => {
//   const [selectedBond, setSelectedBond] = useState<BondCategory | null>(null);
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <section className="flex-1 py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4">
//               Explore Bonds
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
//               Bonds provide safe and steady returns. Choose from{" "}
//               <strong>NCDs</strong> or <strong>FDs</strong> to secure your
//               investments with predictable earnings.
//             </p>
//           </div>
//           {/* Features */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <FeatureCard
//               icon={<TrendingUp />}
//               title="Stable Growth"
//               description="Bonds are less volatile and ensure steady returns."
//             />
//             <FeatureCard
//               icon={<BarChart3 />}
//               title="Predictable Returns"
//               description="Know your returns in advance and plan your finances better."
//             />
//             <FeatureCard
//               icon={<Shield />}
//               title="Safe Choice"
//               description="FDs and rated NCDs are some of the safest instruments."
//             />
//           </div>
//           {/* Categories with Images */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
//             {bonds.map((bond) => (
//               <div
//                 key={bond.id}
//                 onClick={() => setSelectedBond(bond)}
//                 className="cursor-pointer group relative rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300"
//               >
//                 {/* Responsive Image Background */}
//                 <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6">
//                   <img
//                     src={bond.image}
//                     alt={`${bond.name} chart`}
//                     className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
//                 </div>
//                 <div className="relative z-10 flex flex-col items-start">
//                   {/* Icon */}
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400/20 mb-4 transition-colors">
//                     {bond.id === "ncd" ? (
//                       <FileText className="w-6 h-6 text-amber-400" />
//                     ) : (
//                       <PieChart className="w-6 h-6 text-amber-400" />
//                     )}
//                   </div>
//                   <h3 className="relative text-2xl font-semibold text-white mb-2">
//                     {bond.name}
//                   </h3>
//                   <p className="relative text-slate-200">{bond.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* CTA */}
//           <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-8 text-center text-white shadow-xl">
//             <Shield className="w-12 h-12 mx-auto mb-4" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-3">Looking to Invest?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our specialists can guide you towards the best bond investments
//               for your financial goals.
//             </p>
//             <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Modal - Aligned and styled to match */}
//       {selectedBond && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
//           <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden animate-slide-up">
//             {/* Header */}
//             <div className="flex justify-between items-start p-6 border-b border-gray-200">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">{selectedBond.name}</h2>
//                 <p className="text-gray-500 text-sm mt-1">{selectedBond.description}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedBond(null)}
//                 className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             {/* Content */}
//             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Left - Chart Image */}
//               <div className="flex items-center justify-center">
//                 <img
//                   src={selectedBond.image}
//                   alt={`${selectedBond.name} chart`}
//                   className="rounded-xl border border-gray-200 max-h-64 w-full object-contain"
//                 />
//               </div>
//               {/* Right - Features */}
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
//                 <ul className="space-y-2">
//                   {selectedBond.features.map((f, i) => (
//                     <li key={i} className="flex items-start text-gray-700">
//                       <FileText className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
//                       <span>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             {/* CTA */}
//             <div className="p-6 bg-gray-50 text-center">
//               <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
//                 Invest Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };
// export default BondsPage;
// okish
// "use client";
// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { Shield, BarChart3, TrendingUp, PieChart } from "lucide-react";
// const BondsPage = () => {
//   const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4">
//               Fixed Income Investments
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
//               Compare <strong>NCDs</strong> and <strong>FDs</strong> — stable options
//               designed for consistent returns and peace of mind.
//             </p>
//           </div>
//           {/* Feature Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Stable Growth</h4>
//               <p className="text-sm text-slate-200">
//                 Enjoy predictable, risk-adjusted returns over time.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Performance Insights</h4>
//               <p className="text-sm text-slate-200">
//                 Visualize how NCDs and FDs perform through charts.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <Shield className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Secure Returns</h4>
//               <p className="text-sm text-slate-200">
//                 Both options prioritize capital safety and steady income.
//               </p>
//             </div>
//           </div>
//           {/* Chart Tabs */}
//           <div className="flex justify-center mb-8 gap-4">
//             <button
//               onClick={() => setActiveTab("ncd")}
//               className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View NCD
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "fd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View FD
//             </button>
//           </div>
//           {/* Chart Display */}
//           <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl max-w-5xl mx-auto mb-16">
//             <div className="w-full h-full flex items-center justify-center p-6">
//               {activeTab === "ncd" ? (
//                 <img
//                   src="/images/ncd-charts.jpg"
//                   alt="NCD Chart"
//                   className="rounded-xl object-contain max-h-[450px] w-full transition-opacity duration-700"
//                 />
//               ) : (
//                 <img
//                   src="/images/fd-chart.png"
//                   alt="FD Chart"
//                   className="rounded-xl object-contain max-h-[450px] w-full transition-opacity duration-700"
//                 />
//               )}
//             </div>
//           </div>
//           {/* Descriptions */}
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             {activeTab === "ncd" ? (
//               <>
//                 <h2 className="text-3xl font-bold text-amber-400 mb-4">
//                   Non-Convertible Debentures (NCD)
//                 </h2>
//                 <p className="text-slate-300 text-lg leading-relaxed">
//                   NCDs provide higher fixed returns than traditional deposits and are
//                   often rated for safety. Suitable for investors seeking better yield
//                   without equity volatility.
//                 </p>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-3xl font-bold text-amber-400 mb-4">
//                   Fixed Deposits (FD)
//                 </h2>
//                 <p className="text-slate-300 text-lg leading-relaxed">
//                   FDs are the most secure and trusted investment option for
//                   guaranteed returns, capital protection, and flexible tenure options.
//                 </p>
//               </>
//             )}
//           </div>
//           {/* CTA */}
//           <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-8 text-center text-white shadow-xl">
//             <PieChart className="w-12 h-12 mx-auto mb-4" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-3">
//               Ready to Start Your Investment Journey?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and FDs based on your
//               goals and risk appetite.
//             </p>
//             <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// upgrade of the above code
// "use client";
// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { Shield, BarChart3, TrendingUp, PieChart } from "lucide-react";
// const BondsPage = () => {
//   const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
//   const ncdCharts = [
//     "/images/bond/ncd1.jpg",
//     "/images/bond/ncd2.png",
//     "/images/bond/ncd3.png",
//   ];
//   const fdCharts = [
//     "/images/bond/fd1.png",
//     "/images/bond/fd2.png",
//     "/images/bond/fd3.png",
//   ];
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-5">
//               Fixed Income Investments
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//               Fixed-income investments such as <strong>NCDs</strong> and <strong>FDs</strong> 
//               offer predictable returns and safeguard your capital. They’re ideal for investors 
//               seeking steady income with low to moderate risk exposure.
//             </p>
//           </div>
//           {/* Feature Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Stable Growth</h4>
//               <p className="text-sm text-slate-200">
//                 Enjoy predictable, risk-adjusted returns over time.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Performance Insights</h4>
//               <p className="text-sm text-slate-200">
//                 Visualize how NCDs and FDs perform through market trends.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <Shield className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Secure Returns</h4>
//               <p className="text-sm text-slate-200">
//                 Both options prioritize capital safety and steady income.
//               </p>
//             </div>
//           </div>
//           {/* Tabs */}
//           <div className="flex justify-center mb-12 gap-6">
//             <button
//               onClick={() => setActiveTab("ncd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View NCDs
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "fd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View FDs
//             </button>
//           </div>
//           {/* Charts Section */}
//           <div className="max-w-6xl mx-auto mb-20">
//             <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
//               {activeTab === "ncd" ? "Non-Convertible Debentures (NCD)" : "Fixed Deposits (FD)"}
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {(activeTab === "ncd" ? ncdCharts : fdCharts).map((src, index) => (
//                 <div
//                   key={index}
//                   className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 shadow-lg hover:shadow-amber-500/20 transition-all"
//                 >
//                   <img
//                     src={src}
//                     alt={`${activeTab} chart ${index + 1}`}
//                     className="rounded-xl w-full h-64 object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//             <p className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
//               {activeTab === "ncd"
//                 ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
//                 : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
//             </p>
//           </div>
//           {/* CTA */}
//           <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto">
//             <PieChart className="w-12 h-12 mx-auto mb-4" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-3">
//               Ready to Start Your Investment Journey?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and FDs based on your
//               goals and risk appetite.
//             </p>
//             <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// carousel not good
// "use client";
// import React, { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { Shield, BarChart3, TrendingUp, PieChart, ChevronLeft, ChevronRight } from "lucide-react";
// const BondsPage = () => {
//   const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const ncdCharts = [
//     "/images/bond/ncd1.jpg",
//     "/images/bond/ncd1.jpg",
//     "/images/bond/ncd1.jpg",
//     // "/images/bond/ncd2.png",
//     // "/images/bond/ncd3.png",
//   ];
//   const fdCharts = [
//     "/images/bond/fd1.png",
//     "/images/bond/fd2.png",
//     "/images/bond/fd3.png",
//   ];
//   const charts = activeTab === "ncd" ? ncdCharts : fdCharts;
//   // Auto-slide every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % charts.length);
//     }, 8000); // slower for better readability
//     return () => clearInterval(interval);
//   }, [charts.length]);
//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + charts.length) % charts.length);
//   };
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % charts.length);
//   };
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-5">
//               Fixed Income Investments
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//               Fixed-income investments such as <strong>NCDs</strong> and <strong>FDs</strong> 
//               offer predictable returns and safeguard your capital. They’re ideal for investors 
//               seeking steady income with low to moderate risk exposure.
//             </p>
//           </div>
//           {/* Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//             {[
//               {
//                 icon: TrendingUp,
//                 title: "Stable Growth",
//                 desc: "Enjoy predictable, risk-adjusted returns over time.",
//               },
//               {
//                 icon: BarChart3,
//                 title: "Performance Insights",
//                 desc: "Visualize how NCDs and FDs perform through market trends.",
//               },
//               {
//                 icon: Shield,
//                 title: "Secure Returns",
//                 desc: "Both options prioritize capital safety and steady income.",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400"
//               >
//                 <feature.icon className="w-8 h-8 text-amber-400 mb-4" />
//                 <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
//                 <p className="text-sm text-slate-200">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//           {/* Tabs */}
//           <div className="flex justify-center mb-12 gap-6">
//             {["ncd", "fd"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setActiveTab(tab as "ncd" | "fd");
//                   setCurrentIndex(0);
//                 }}
//                 className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                   activeTab === tab
//                     ? "bg-amber-400 text-gray-900 shadow-lg"
//                     : "bg-white/10 text-white hover:bg-white/20"
//                 }`}
//               >
//                 View {tab.toUpperCase()}s
//               </button>
//             ))}
//           </div>
//           {/* Chart Carousel */}
//           <div className="relative max-w-6xl mx-auto mb-20">
//             <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
//               {activeTab === "ncd"
//                 ? "Non-Convertible Debentures (NCD)"
//                 : "Fixed Deposits (FD)"}
//             </h2>
//             <div className="overflow-hidden relative">
//               <div
//                 className="flex transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: `translateX(-${currentIndex * 100}%)`,
//                   width: `${charts.length * 100}%`,
//                 }}
//               >
//                 {charts.map((src, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
//                   >
//                     <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 shadow-lg hover:shadow-amber-500/20 transition-all">
//                       <img
//                         src={src}
//                         alt={`${activeTab} chart ${index + 1}`}
//                         className="rounded-xl w-full h-[400px] object-contain"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {/* Prev / Next Buttons */}
//               <button
//                 onClick={handlePrev}
//                 className="absolute top-1/2 left-0 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-2 hover:bg-amber-300 transition-all"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="absolute top-1/2 right-0 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-2 hover:bg-amber-300 transition-all"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//             {/* Description */}
//             <p className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
//               {activeTab === "ncd"
//                 ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
//                 : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
//             </p>
//           </div>
//           {/* CTA */}
//           <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto">
//             <PieChart className="w-12 h-12 mx-auto mb-4" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-3">
//               Ready to Start Your Investment Journey?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and FDs based on your
//               goals and risk appetite.
//             </p>
//             <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import {
//   Shield,
//   BarChart3,
//   TrendingUp,
//   PieChart,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// const BondsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(1);
//   const carouselRef = useRef<HTMLDivElement | null>(null);
//   const slideWidthRef = useRef<number>(0);
//   const autoSlideRef = useRef<number | null>(null);
//   const ncdCharts = [
//     "/images/bond/ncd1.jpg",
//     "/images/bond/ncd1.jpg",
//     "/images/bond/ncd1.jpg",
//     // "/images/bond/ncd2.png",
//     // "/images/bond/ncd3.png",
//   ];
//   const fdCharts = [
//     "/images/bond/fd1.png",
//     "/images/bond/fd2.png",
//     "/images/bond/fd3.png",
//   ];
//   const charts = activeTab === "ncd" ? ncdCharts : fdCharts;
//   // determine visible slides based on window width (matches tailwind breakpoints)
//   useEffect(() => {
//     const getVisible = (w: number) => {
//       if (w >= 1024) return 3; // lg and up -> 3
//       if (w >= 640) return 2; // sm..md -> 2
//       return 1; // mobile -> 1
//     };
//     const updateVisible = () => setVisibleSlides(getVisible(window.innerWidth));
//     updateVisible();
//     window.addEventListener("resize", updateVisible);
//     return () => window.removeEventListener("resize", updateVisible);
//   }, []);
//   // compute slide width (including margin-right) so scrollTo positions are correct
//   const computeSlideWidth = () => {
//     const container = carouselRef.current;
//     if (!container) return 0;
//     const firstSlide = container.querySelector<HTMLElement>("[data-slide]");
//     if (!firstSlide) return container.clientWidth;
//     const style = window.getComputedStyle(firstSlide);
//     const marginRight = parseFloat(style.marginRight || "0");
//     return firstSlide.clientWidth + marginRight;
//   };
//   useEffect(() => {
//     // compute width after render
//     const resizeObserver = new ResizeObserver(() => {
//       slideWidthRef.current = computeSlideWidth();
//       // after width changes, re-scroll to current index so layout stays consistent
//       if (carouselRef.current) {
//         carouselRef.current.scrollTo({
//           left: currentIndex * slideWidthRef.current,
//           behavior: "instant" as ScrollBehavior, // immediate adjust
//         });
//       }
//     });
//     if (carouselRef.current) resizeObserver.observe(carouselRef.current);
//     // initial compute
//     slideWidthRef.current = computeSlideWidth();
//     return () => resizeObserver.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [visibleSlides, charts.length]);
//   // update currentIndex on user scroll
//   useEffect(() => {
//     const el = carouselRef.current;
//     if (!el) return;
//     let raf = 0;
//     const onScroll = () => {
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(() => {
//         const w = slideWidthRef.current || 1;
//         const idx = Math.round(el.scrollLeft / w);
//         setCurrentIndex(idx);
//       });
//     };
//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       el.removeEventListener("scroll", onScroll);
//       cancelAnimationFrame(raf);
//     };
//   }, []);
//   // auto-slide (slow) - every 8s
//   useEffect(() => {
//     const startAuto = () => {
//       if (autoSlideRef.current) window.clearInterval(autoSlideRef.current);
//       autoSlideRef.current = window.setInterval(() => {
//         handleNext();
//       }, 8000);
//     };
//     startAuto();
//     // restart when charts/activeTab changes
//     return () => {
//       if (autoSlideRef.current) window.clearInterval(autoSlideRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [charts, visibleSlides, currentIndex]);
//   // when user switches tab, reset index and scroll to start
//   useEffect(() => {
//     setCurrentIndex(0);
//     setTimeout(() => {
//       if (carouselRef.current) {
//         slideWidthRef.current = computeSlideWidth();
//         carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
//       }
//     }, 80);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [activeTab]);
//   const maxIndex = Math.max(0, charts.length - visibleSlides);
//   const scrollToIndex = (index: number) => {
//     const el = carouselRef.current;
//     if (!el) return;
//     const width = slideWidthRef.current || computeSlideWidth();
//     el.scrollTo({ left: index * width, behavior: "smooth" });
//   };
//   const handleNext = () => {
//     if (charts.length <= visibleSlides) {
//       // nothing to scroll
//       setCurrentIndex(0);
//       scrollToIndex(0);
//       return;
//     }
//     let next = currentIndex + 1;
//     if (next > maxIndex) next = 0; // wrap
//     setCurrentIndex(next);
//     scrollToIndex(next);
//   };
//   const handlePrev = () => {
//     if (charts.length <= visibleSlides) {
//       setCurrentIndex(0);
//       scrollToIndex(0);
//       return;
//     }
//     let prev = currentIndex - 1;
//     if (prev < 0) prev = maxIndex; // wrap to last group
//     setCurrentIndex(prev);
//     scrollToIndex(prev);
//   };
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-5">
//               Fixed Income Investments
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//               Fixed-income investments such as <strong>NCDs</strong> and{" "}
//               <strong>FDs</strong> offer predictable returns and safeguard your
//               capital. They’re ideal for investors seeking steady income with low
//               to moderate risk exposure.
//             </p>
//           </div>
//           {/* Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//             {[ /* features */ ].map((_, i) => null)}
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Stable Growth</h4>
//               <p className="text-sm text-slate-200">
//                 Enjoy predictable, risk-adjusted returns over time.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Performance Insights</h4>
//               <p className="text-sm text-slate-200">
//                 Visualize how NCDs and FDs perform through market trends.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//               <Shield className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Secure Returns</h4>
//               <p className="text-sm text-slate-200">
//                 Both options prioritize capital safety and steady income.
//               </p>
//             </div>
//           </div>
//           {/* Tabs */}
//           <div className="flex justify-center mb-12 gap-6">
//             <button
//               onClick={() => {
//                 setActiveTab("ncd");
//               }}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View NCDs
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("fd");
//               }}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "fd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View FDs
//             </button>
//           </div>
//           {/* Chart Carousel */}
//           <div className="relative max-w-6xl mx-auto mb-20">
//             <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
//               {activeTab === "ncd"
//                 ? "Non-Convertible Debentures (NCD)"
//                 : "Fixed Deposits (FD)"}
//             </h2>
//             <div className="relative">
//               {/* carousel container */}
//               <div
//                 ref={carouselRef}
//                 className="flex overflow-x-auto scrollbar-hide px-4 py-2"
//                 style={{ scrollSnapType: "x mandatory" }}
//               >
//                 {charts.map((src, idx) => (
//                   <div
//                     key={idx}
//                     data-slide
//                     style={{
//                       minWidth: `${100 / visibleSlides}%`,
//                       marginRight: idx === charts.length - 1 ? 0 : 16,
//                       scrollSnapAlign: "center",
//                       boxSizing: "border-box",
//                     }}
//                     className="flex-shrink-0 px-1"
//                   >
//                     <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 shadow-lg hover:shadow-amber-500/20 transition-all h-full flex flex-col">
//                       <img
//                         src={src}
//                         alt={`${activeTab} chart ${idx + 1}`}
//                         className="rounded-xl w-full h-[420px] object-contain mx-auto"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {/* Prev / Next */}
//               <button
//                 onClick={handlePrev}
//                 aria-label="Previous"
//                 className="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-2 hover:bg-amber-300 transition-all"
//                 style={{ transform: "translate(-50%, -50%)" }}
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 aria-label="Next"
//                 className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-2 hover:bg-amber-300 transition-all"
//                 style={{ transform: "translate(50%, -50%)" }}
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//             {/* short description */}
//             <p className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
//               {activeTab === "ncd"
//                 ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
//                 : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
//             </p>
//           </div>
//           {/* CTA */}
//           <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto">
//             <PieChart className="w-12 h-12 mx-auto mb-4" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-3">
//               Ready to Start Your Investment Journey?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and FDs based on your
//               goals and risk appetite.
//             </p>
//             <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
}),
"[project]/mokshainvestment/app/services/bonds/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/services/bonds/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__44be2b17._.js.map