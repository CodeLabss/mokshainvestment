(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mokshainvestment/app/services/bonds/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
// upgrade of the above
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
__turbopack_context__.s([
    "default",
    ()=>BondsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BondsPage() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("NCD");
    const ncdDetails = {
        title: "Non-Convertible Debentures (NCDs)",
        description: "NCDs offer fixed returns over a specified period. They are issued by companies to raise capital and typically provide higher interest rates than traditional fixed deposits. They are suitable for investors seeking stable and predictable income.",
        charts: [
            "/images/bond/ncd1.j[g",
            "/images/bond/ncd2.png",
            "/images/bond/ncd3.png",
            "/images/bond/ncd4.png"
        ]
    };
    const fdDetails = {
        title: "Fixed Deposits (FDs)",
        description: "Fixed Deposits are a secure investment option where you deposit a lump sum for a fixed tenure at a fixed interest rate. They offer guaranteed returns and are ideal for risk-averse investors looking for stable growth.",
        charts: [
            "/images/bond/fd1.png",
            "/images/bond/fd2.png",
            "/images/bond/fd3.png",
            "/images/bond/fd4.png"
        ]
    };
    const data = activeCategory === "NCD" ? ncdDetails : fdDetails;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#fafafa] text-[#222] px-6 md:px-16 py-12 transition-all duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-2 text-[#1a1a1a]",
                        children: "Bonds & Investment Opportunities"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Compare different fixed-income instruments to plan your financial goals better."
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-10 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory("NCD"),
                        className: "px-6 py-2 rounded-full font-medium border transition-all duration-300 ".concat(activeCategory === "NCD" ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#1a1a1a] border-gray-300 hover:bg-gray-100"),
                        children: "NCD"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory("FD"),
                        className: "px-6 py-2 rounded-full font-medium border transition-all duration-300 ".concat(activeCategory === "FD" ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#1a1a1a] border-gray-300 hover:bg-gray-100"),
                        children: "FD"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold mb-3 text-[#1a1a1a]",
                        children: data.title
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 leading-relaxed",
                        children: data.description
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto flex gap-6 snap-x snap-mandatory pb-4 px-2",
                children: data.charts.map((chart, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[400px] md:min-w-[500px] lg:min-w-[600px] snap-center bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[320px] relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: chart,
                                alt: "".concat(data.title, " Chart ").concat(index + 1),
                                layout: "fill",
                                className: "object-contain rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                                lineNumber: 587,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                            lineNumber: 586,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 582,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-medium mb-3 text-[#1a1a1a]",
                        children: "Want to explore more investment opportunities?"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-8 py-3 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-all duration-300",
                        children: "Get Personalized Advice"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mokshainvestment/app/services/bonds/page.tsx",
        lineNumber: 535,
        columnNumber: 5
    }, this);
}
_s(BondsPage, "fLU52JLRHDHpVoDzzgg7jeIeTak=");
_c = BondsPage;
var _c;
__turbopack_context__.k.register(_c, "BondsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_app_services_bonds_page_tsx_8e7490f8._.js.map