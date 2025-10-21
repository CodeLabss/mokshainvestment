(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mokshainvestment/app/services/financial-planning/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// okish
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Target, Shield, TrendingUp, ArrowRight, Gem, Zap, Heart, PiggyBank, Lock, Award } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Pyramid level definitions
// const pyramidLevels = [
//   {
//     level: "TIP",
//     title: "Term Insurance Planning",
//     subtitle: "Secure Your Family's Future",
//     description: "The foundation of financial security. Term insurance provides essential protection for your loved ones, ensuring they're financially secure no matter what happens.",
//     features: [
//       "Life coverage up to ₹5 Crore",
//       "Affordable premium options",
//       "Tax benefits under Section 80C & 10(10D)",
//       "Critical illness riders available"
//     ],
//     icon: <Shield />,
//     color: "from-blue-500 to-cyan-400",
//     bgColor: "bg-blue-500/10",
//     borderColor: "border-blue-400/30",
//     image: "/images/insurance-planning.jpg"
//   },
//   {
//     level: "HIP",
//     title: "Health Insurance Planning",
//     subtitle: "Protect Your Health & Wealth",
//     description: "The middle layer focuses on health protection. Comprehensive health insurance safeguards your savings from medical emergencies and ensures quality healthcare.",
//     features: [
//       "Coverage up to ₹1 Crore",
//       "Cashless hospitalization",
//       "Pre and post hospitalization cover",
//       "No claim bonus benefits"
//     ],
//     icon: <Heart />,
//     color: "from-green-500 to-emerald-400",
//     bgColor: "bg-green-500/10",
//     borderColor: "border-green-400/30",
//     image: "/images/health-planning.jpg"
//   },
//   {
//     level: "SIP",
//     title: "Systematic Investment Planning",
//     subtitle: "Build Wealth Systematically",
//     description: "The peak of financial planning. SIP helps you achieve long-term financial goals through disciplined investing in mutual funds and other wealth-building instruments.",
//     features: [
//       "Start with just ₹500/month",
//       "Power of compounding returns",
//       "Flexible investment options",
//       "Automated disciplined investing"
//     ],
//     icon: <TrendingUp />,
//     color: "from-amber-500 to-yellow-400",
//     bgColor: "bg-amber-500/10",
//     borderColor: "border-amber-400/30",
//     image: "/images/investment-planning.jpg"
//   }
// ];
// const financialPrinciples = [
//   {
//     icon: <PiggyBank />,
//     title: "Start Early",
//     description: "The earlier you start investing, the more time your money has to grow through compounding. Even small amounts can become significant over time."
//   },
//   {
//     icon: <Lock />,
//     title: "Diversify",
//     description: "Spread your investments across different asset classes to minimize risk and maximize returns. Don't put all your eggs in one basket."
//   },
//   {
//     icon: <Target />,
//     title: "Set Clear Goals",
//     description: "Define your financial objectives - retirement, education, home purchase. Clear goals help you create focused investment strategies."
//   },
//   {
//     icon: <Award />,
//     title: "Stay Disciplined",
//     description: "Consistent investing through market ups and downs is key to long-term wealth creation. Avoid emotional decisions based on market fluctuations."
//   }
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-amber-400 hover:shadow-2xl">
//     <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 mb-6">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-amber-400" })}
//     </div>
//     <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
//     <p className="text-slate-200 leading-relaxed">{description}</p>
//   </div>
// );
// const PyramidLevel = ({ level, isActive }: { level: typeof pyramidLevels[0]; isActive: boolean }) => (
//   <div className={`relative p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 ease-in-out transform ${
//     isActive 
//       ? `${level.bgColor} ${level.borderColor} scale-105 shadow-2xl` 
//       : 'bg-white/5 border-white/10 scale-100 shadow-lg'
//   }`}>
//     <div className="flex items-center gap-4 mb-6">
//       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center`}>
//         {React.cloneElement(level.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
//       </div>
//       <div>
//         <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">{level.level}</span>
//         <h3 className="text-2xl font-bold text-white">{level.title}</h3>
//       </div>
//     </div>
//     <p className="text-amber-400 font-semibold mb-4">{level.subtitle}</p>
//     <p className="text-slate-200 mb-6 leading-relaxed">{level.description}</p>
//     <ul className="space-y-3">
//       {level.features.map((feature, index) => (
//         <li key={index} className="flex items-center gap-3 text-slate-200">
//           <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color}`}></div>
//           {feature}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// const FinancialPlanningPage = () => {
//   const [activeLevel, setActiveLevel] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
//             setActiveLevel(index);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.6,
//       }
//     );
//     sectionRefs.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });
//     return () => {
//       sectionRefs.current.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Enhanced Hero Section */}
//         <section className="min-h-screen flex items-center justify-center relative">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             {/* Premium Badge */}
//             <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
//               <Gem className="w-5 h-5 text-amber-400" />
//               <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Smart Financial Planning</span>
//             </div>
//             {/* Main Heading with Gradient */}
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
//               <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
//                 Financial Pyramid
//               </span>
//             </h1>
//             {/* Enhanced Subtitle */}
//             <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
//               Build your financial future step by step. Start with protection, add health security, and 
//               <span className="text-amber-400 font-semibold"> grow your wealth </span>
//               through systematic investing.
//             </p>
//             {/* Enhanced CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative z-10 flex items-center">
//                   Start Your Journey
//                   <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
//               <button className="px-8 py-4 border-2 border-amber-400/50 text-amber-400 font-semibold rounded-xl transition-all duration-300 hover:bg-amber-400/10 hover:border-amber-400">
//                 Watch Tutorial
//               </button>
//             </div>
//             {/* Trust Indicators */}
//             <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-amber-400 mb-2">3-Tier</div>
//                 <div className="text-sm text-slate-400">Approach</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-amber-400 mb-2">Secure</div>
//                 <div className="text-sm text-slate-400">Foundation</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-amber-400 mb-2">Wealth</div>
//                 <div className="text-sm text-slate-400">Growth</div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Financial Principles Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Core <span className="text-amber-400">Financial Principles</span>
//               </h2>
//               <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//                 Master these fundamental principles to build a solid financial foundation
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {financialPrinciples.map((principle, index) => (
//                 <FeatureCard
//                   key={index}
//                   icon={principle.icon}
//                   title={principle.title}
//                   description={principle.description}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Pyramid Scroll Section */}
//         <section className="relative py-20 bg-transparent">
//           {/* Desktop Layout */}
//           <div className="hidden lg:block">
//             {/* Sticky Pyramid Visualization */}
//             <div className="sticky top-32 h-[80vh] flex items-center justify-center z-20">
//               <div className="relative w-full max-w-4xl mx-auto px-6">
//                 {/* Pyramid Visualization */}
//                 <div className="relative w-80 h-80 mx-auto">
//                   {/* SIP - Top */}
//                   <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b ${pyramidLevels[2].color} border-2 border-white/20 rounded-t-xl transition-all duration-500 ${
//                     activeLevel === 2 ? 'scale-110 shadow-2xl' : 'scale-100 opacity-80'
//                   }`}>
//                     <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
//                       SIP
//                     </div>
//                   </div>
//                   {/* HIP - Middle */}
//                   <div className={`absolute top-32 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b ${pyramidLevels[1].color} border-2 border-white/20 transition-all duration-500 ${
//                     activeLevel === 1 ? 'scale-110 shadow-2xl' : 'scale-100 opacity-80'
//                   }`}>
//                     <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
//                       HIP
//                     </div>
//                   </div>
//                   {/* TIP - Base */}
//                   <div className={`absolute top-64 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-b ${pyramidLevels[0].color} border-2 border-white/20 rounded-b-xl transition-all duration-500 ${
//                     activeLevel === 0 ? 'scale-110 shadow-2xl' : 'scale-100 opacity-80'
//                   }`}>
//                     <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
//                       TIP
//                     </div>
//                   </div>
//                 </div>
//                 {/* Active Level Content */}
//                 <div className="absolute top-full left-0 right-0 mt-8">
//                   <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {pyramidLevels[activeLevel].title}
//                     </h3>
//                     <p className="text-amber-400 font-semibold mb-3">
//                       {pyramidLevels[activeLevel].subtitle}
//                     </p>
//                     <p className="text-slate-200 text-sm">
//                       {pyramidLevels[activeLevel].description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Scroll Triggers */}
//             <div className="relative z-10">
//               {pyramidLevels.map((_, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (sectionRefs.current[index] = el)}
//                   className="h-[100vh] flex items-center justify-center"
//                 >
//                   {/* Invisible trigger point */}
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Mobile Layout */}
//           <div className="lg:hidden max-w-4xl mx-auto px-6 space-y-8">
//             {pyramidLevels.map((level, index) => (
//               <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
//                 <PyramidLevel level={level} isActive={activeLevel === index} />
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* Detailed Levels Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Understand Your <span className="text-amber-400">Financial Pyramid</span>
//               </h2>
//               <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//                 Each level builds upon the previous one, creating a comprehensive financial safety net
//               </p>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {pyramidLevels.map((level, index) => (
//                 <div key={index} className="flex flex-col">
//                   <PyramidLevel level={level} isActive={true} />
//                   {/* Level Indicator */}
//                   <div className="mt-6 text-center">
//                     <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-slate-300 text-sm font-semibold">
//                       Level {index + 1} of 3
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Enhanced CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6">
//             <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl rounded-3xl p-12 border border-amber-400/20 shadow-2xl text-center">
//               <Target className="w-16 h-16 text-amber-400 mx-auto mb-6" />
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Ready to Build Your Financial Future?
//               </h2>
//               <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
//                 Join thousands of smart investors who are securing their future with our proven 
//                 3-tier financial pyramid approach. Start your journey today.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Get Started Now
//                 </button>
//                 <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400/10 transition-all duration-300">
//                   Consult an Expert
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default FinancialPlanningPage;
// okish as well
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Target, Shield, TrendingUp, ArrowRight, Gem, Zap, Heart, PiggyBank, Lock, Award, ChevronDown } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Enhanced pyramid level definitions with more detailed content
// const pyramidLevels = [
//   {
//     level: "TIP",
//     title: "Term Insurance Planning",
//     subtitle: "The Foundation of Financial Security",
//     description: "Term Insurance Planning (TIP) forms the essential base of your financial pyramid. It's the safety net that ensures your family's financial stability in your absence, protecting them from life's uncertainties.",
//     detailedDescription: "Think of TIP as the bedrock of your financial house. Without this foundation, the entire structure becomes vulnerable. A robust term insurance plan provides high coverage at affordable premiums, ensuring your family can maintain their lifestyle, pay off debts, and fund future goals even when you're not there to provide.",
//     features: [
//       "High sum assured (up to ₹5 Crore) at low cost",
//       "Tax benefits under Section 80C & 10(10D)",
//       "Critical illness and disability riders",
//       "Income replacement for your family",
//       "Debt protection and loan coverage"
//     ],
//     icon: <Shield />,
//     color: "from-blue-500 to-cyan-400",
//     bgColor: "bg-blue-500/10",
//     borderColor: "border-blue-400/30",
//     stats: ["99%", "Claims Paid", "Foundation Security"],
//     cta: "Secure Your Family's Future"
//   },
//   {
//     level: "HIP",
//     title: "Health Insurance Planning",
//     subtitle: "Protecting Your Health and Wealth",
//     description: "Health Insurance Planning (HIP) forms the crucial middle layer that safeguards your savings from medical emergencies while ensuring access to quality healthcare.",
//     detailedDescription: "HIP acts as the protective walls of your financial structure. Medical emergencies can derail even the best financial plans. Comprehensive health insurance prevents your hard-earned savings from being depleted by healthcare costs, ensuring your wealth-building efforts remain on track.",
//     features: [
//       "Coverage up to ₹1 Crore for family",
//       "Cashless hospitalization across India",
//       "Pre and post hospitalization cover",
//       "No claim bonus up to 100%",
//       "Critical illness cover included"
//     ],
//     icon: <Heart />,
//     color: "from-green-500 to-emerald-400",
//     bgColor: "bg-green-500/10",
//     borderColor: "border-green-400/30",
//     stats: ["₹50L", "Avg. Coverage", "Health Security"],
//     cta: "Protect Your Medical Expenses"
//   },
//   {
//     level: "SIP",
//     title: "Systematic Investment Planning",
//     subtitle: "Building Long-Term Wealth",
//     description: "Systematic Investment Planning (SIP) represents the peak of your financial pyramid, focusing on disciplined wealth creation and achieving your long-term financial goals.",
//     detailedDescription: "SIP is the roof of your financial house - it provides growth, security, and the ability to weather economic storms. Through disciplined monthly investments in mutual funds, you harness the power of compounding to build substantial wealth over time, turning small regular investments into significant financial milestones.",
//     features: [
//       "Start with just ₹500 per month",
//       "Power of compounding returns",
//       "Rupee cost averaging benefits",
//       "Flexible investment options",
//       "Automated disciplined approach"
//     ],
//     icon: <TrendingUp />,
//     color: "from-amber-500 to-yellow-400",
//     bgColor: "bg-amber-500/10",
//     borderColor: "border-amber-400/30",
//     stats: ["15%", "Avg. Returns", "Wealth Growth"],
//     cta: "Start Building Wealth Today"
//   }
// ];
// const FinancialPlanningPage = () => {
//   const [activeLevel, setActiveLevel] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   // Enhanced scroll handler with smooth transitions
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current || isScrolling) return;
//       const container = containerRef.current;
//       const scrollTop = window.scrollY;
//       const containerTop = container.offsetTop;
//       const containerHeight = container.offsetHeight;
//       const windowHeight = window.innerHeight;
//       // Calculate progress through the pyramid section
//       const progress = Math.max(0, Math.min(1, 
//         (scrollTop - containerTop + windowHeight * 0.3) / (containerHeight - windowHeight * 0.4)
//       ));
//       setScrollProgress(progress);
//       // Determine active level based on scroll position
//       const levelHeight = 1 / pyramidLevels.length;
//       const newActiveLevel = Math.min(
//         pyramidLevels.length - 1,
//         Math.floor(progress / levelHeight)
//       );
//       if (newActiveLevel !== activeLevel) {
//         setIsScrolling(true);
//         setActiveLevel(newActiveLevel);
//         setTimeout(() => setIsScrolling(false), 300);
//       }
//     };
//     // Throttled scroll handler
//     let ticking = false;
//     const scrollHandler = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           handleScroll();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener('scroll', scrollHandler, { passive: true });
//     return () => window.removeEventListener('scroll', scrollHandler);
//   }, [activeLevel, isScrolling]);
//   // Enhanced pyramid visualization with smooth animations
//   const PyramidVisualization = () => (
//     <div className="sticky top-20 h-screen flex items-center justify-center z-20 pointer-events-none">
//       <div className="relative w-full max-w-6xl mx-auto px-6">
//         {/* Main Pyramid Container */}
//         <div className="relative mx-auto" style={{ width: '600px', height: '500px' }}>
//           {/* SIP - Top Tier (Wealth Building) */}
//           <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
//             activeLevel === 2 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
//           }`}>
//             <div className={`w-48 h-32 bg-gradient-to-b ${pyramidLevels[2].color} rounded-t-xl border-2 border-white/30 shadow-2xl backdrop-blur-sm transform transition-transform duration-700 ${
//               activeLevel === 2 ? 'translate-y-0' : 'translate-y-4'
//             }`}>
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
//                 <div className="text-lg font-bold mb-1">SIP</div>
//                 <div className="text-xs text-center opacity-90">Wealth Growth</div>
//               </div>
//             </div>
//           </div>
//           {/* HIP - Middle Tier (Health Protection) */}
//           <div className={`absolute top-36 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
//             activeLevel === 1 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
//           }`}>
//             <div className={`w-72 h-32 bg-gradient-to-b ${pyramidLevels[1].color} border-2 border-white/30 shadow-xl backdrop-blur-sm transform transition-transform duration-700 ${
//               activeLevel === 1 ? 'translate-y-0' : activeLevel > 1 ? '-translate-y-4' : 'translate-y-4'
//             }`}>
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
//                 <div className="text-lg font-bold mb-1">HIP</div>
//                 <div className="text-xs text-center opacity-90">Health Security</div>
//               </div>
//             </div>
//           </div>
//           {/* TIP - Base Tier (Foundation) */}
//           <div className={`absolute top-52 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
//             activeLevel === 0 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
//           }`}>
//             <div className={`w-96 h-32 bg-gradient-to-b ${pyramidLevels[0].color} rounded-b-xl border-2 border-white/30 shadow-lg backdrop-blur-sm transform transition-transform duration-700 ${
//               activeLevel === 0 ? 'translate-y-0' : '-translate-y-4'
//             }`}>
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
//                 <div className="text-lg font-bold mb-1">TIP</div>
//                 <div className="text-xs text-center opacity-90">Foundation Security</div>
//               </div>
//             </div>
//           </div>
//           {/* Connection Lines */}
//           <div className="absolute inset-0 pointer-events-none">
//             {/* Lines connecting tiers */}
//             <div className={`absolute left-1/2 top-52 w-1 h-20 bg-gradient-to-b from-blue-400 to-green-400 transform -translate-x-1/2 transition-all duration-500 ${
//               activeLevel >= 1 ? 'opacity-100' : 'opacity-30'
//             }`}></div>
//             <div className={`absolute left-1/2 top-36 w-1 h-16 bg-gradient-to-b from-green-400 to-amber-400 transform -translate-x-1/2 transition-all duration-500 ${
//               activeLevel >= 2 ? 'opacity-100' : 'opacity-30'
//             }`}></div>
//           </div>
//           {/* Active Level Indicator */}
//           <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
//             activeLevel >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
//           }`}>
//             <div className="bg-black/50 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
//               <span className="text-amber-400 font-bold text-lg">
//                 {pyramidLevels[activeLevel]?.level}
//               </span>
//               <span className="text-white ml-2 font-semibold">
//                 {pyramidLevels[activeLevel]?.title}
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-slate-300 text-sm font-semibold">
//               Scroll to explore levels
//             </span>
//             <ChevronDown className="w-6 h-6 text-amber-400 animate-bounce" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   // Enhanced level detail component
//   const LevelDetail = ({ level, index }: { level: typeof pyramidLevels[0]; index: number }) => (
//     <div 
//       ref={(el) => (sectionRefs.current[index] = el)}
//       className="min-h-screen flex items-center justify-center py-20 transition-opacity duration-500"
//     >
//       <div className="max-w-4xl mx-auto px-6">
//         <div className={`backdrop-blur-xl rounded-3xl p-12 border-2 ${level.borderColor} ${level.bgColor} shadow-2xl transform transition-all duration-700 ${
//           activeLevel === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-40'
//         }`}>
//           {/* Level Header */}
//           <div className="flex items-center gap-6 mb-8">
//             <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg`}>
//               {React.cloneElement(level.icon as React.ReactElement, { className: "w-10 h-10 text-white" })}
//             </div>
//             <div>
//               <div className="flex items-center gap-4 mb-2">
//                 <span className="text-3xl font-black text-white">{level.level}</span>
//                 <div className="h-8 w-1 bg-white/30 rounded-full"></div>
//                 <span className="text-xl text-amber-400 font-semibold">Level {index + 1}</span>
//               </div>
//               <h2 className="text-4xl font-bold text-white mb-2">{level.title}</h2>
//               <p className="text-xl text-slate-200 font-semibold">{level.subtitle}</p>
//             </div>
//           </div>
//           {/* Stats Bar */}
//           <div className="flex gap-6 mb-8 p-6 bg-black/30 rounded-2xl border border-white/10">
//             {level.stats.map((stat, statIndex) => (
//               <div key={statIndex} className="text-center flex-1">
//                 <div className="text-2xl font-bold text-amber-400 mb-1">{stat}</div>
//                 <div className="text-sm text-slate-300">{level.stats[statIndex + 1]}</div>
//               </div>
//             ))}
//           </div>
//           {/* Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
//               <p className="text-slate-200 text-lg leading-relaxed mb-6">
//                 {level.description}
//               </p>
//               <p className="text-slate-300 leading-relaxed">
//                 {level.detailedDescription}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
//               <ul className="space-y-4">
//                 {level.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-start gap-3">
//                     <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center flex-shrink-0 mt-1`}>
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                     </div>
//                     <span className="text-slate-200 text-lg">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               {/* CTA Button */}
//               <button className={`mt-8 w-full py-4 bg-gradient-to-r ${level.color} text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
//                 {level.cta}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   return (
//     <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center relative">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
//               <Gem className="w-5 h-5 text-amber-400" />
//               <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
//                 Structured Financial Planning
//               </span>
//             </div>
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
//               <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
//                 Financial Pyramid
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
//               Build your financial future layer by layer. Start with protection, 
//               add security, and grow your wealth through disciplined investing.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative z-10 flex items-center">
//                   Explore the Pyramid
//                   <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </section>
//         {/* Pyramid Scroll Section */}
//         <section ref={containerRef} className="relative">
//           {/* Sticky Pyramid Visualization */}
//           <PyramidVisualization />
//           {/* Scroll-triggered Content Sections */}
//           <div className="relative z-10">
//             {pyramidLevels.map((level, index) => (
//               <LevelDetail key={index} level={level} index={index} />
//             ))}
//           </div>
//         </section>
//         {/* Final CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6">
//             <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl rounded-3xl p-12 border border-amber-400/20 shadow-2xl text-center">
//               <Target className="w-16 h-16 text-amber-400 mx-auto mb-6" />
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Ready to Build Your Financial Pyramid?
//               </h2>
//               <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
//                 Start your journey with a solid foundation and build your way to financial freedom. 
//                 Our proven 3-tier approach has helped thousands achieve their financial goals.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Begin Your Journey
//                 </button>
//                 <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400/10 transition-all duration-300">
//                   Get Personalized Plan
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default FinancialPlanningPage;
// okish 3
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Target, Shield, TrendingUp, ArrowRight, Gem, Heart, ChevronDown } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// const pyramidLevels = [
//   {
//     level: "TIP",
//     title: "Term Insurance Planning",
//     subtitle: "The Foundation of Financial Security",
//     description: "Term Insurance Planning (TIP) forms the essential base of your financial pyramid. It's the safety net that ensures your family's financial stability in your absence.",
//     detailedDescription: "Think of TIP as the bedrock of your financial house. Without this foundation, the entire structure becomes vulnerable. A robust term insurance plan provides high coverage at affordable premiums, ensuring your family can maintain their lifestyle, pay off debts, and fund future goals even when you're not there to provide.",
//     features: [
//       "High sum assured (up to ₹5 Crore) at low cost",
//       "Tax benefits under Section 80C & 10(10D)",
//       "Critical illness and disability riders",
//       "Income replacement for your family",
//       "Debt protection and loan coverage"
//     ],
//     icon: <Shield />,
//     color: "from-blue-500 to-cyan-500",
//     bgColor: "bg-blue-500/20",
//     borderColor: "border-blue-400/50",
//     stats: ["99%", "Claims Paid", "Foundation Security"],
//     cta: "Secure Your Family's Future"
//   },
//   {
//     level: "HIP",
//     title: "Health Insurance Planning",
//     subtitle: "Protecting Your Health and Wealth",
//     description: "Health Insurance Planning (HIP) forms the crucial middle layer that safeguards your savings from medical emergencies while ensuring access to quality healthcare.",
//     detailedDescription: "HIP acts as the protective walls of your financial structure. Medical emergencies can derail even the best financial plans. Comprehensive health insurance prevents your hard-earned savings from being depleted by healthcare costs, ensuring your wealth-building efforts remain on track.",
//     features: [
//       "Coverage up to ₹1 Crore for family",
//       "Cashless hospitalization across India",
//       "Pre and post hospitalization cover",
//       "No claim bonus up to 100%",
//       "Critical illness cover included"
//     ],
//     icon: <Heart />,
//     color: "from-green-500 to-emerald-500",
//     bgColor: "bg-green-500/20",
//     borderColor: "border-green-400/50",
//     stats: ["₹50L", "Avg. Coverage", "Health Security"],
//     cta: "Protect Your Medical Expenses"
//   },
//   {
//     level: "SIP",
//     title: "Systematic Investment Planning",
//     subtitle: "Building Long-Term Wealth",
//     description: "Systematic Investment Planning (SIP) represents the peak of your financial pyramid, focusing on disciplined wealth creation and achieving your long-term financial goals.",
//     detailedDescription: "SIP is the roof of your financial house - it provides growth, security, and the ability to weather economic storms. Through disciplined monthly investments in mutual funds, you harness the power of compounding to build substantial wealth over time.",
//     features: [
//       "Start with just ₹500 per month",
//       "Power of compounding returns",
//       "Rupee cost averaging benefits",
//       "Flexible investment options",
//       "Automated disciplined approach"
//     ],
//     icon: <TrendingUp />,
//     color: "from-amber-500 to-yellow-500",
//     bgColor: "bg-amber-500/20",
//     borderColor: "border-amber-400/50",
//     stats: ["15%", "Avg. Returns", "Wealth Growth"],
//     cta: "Start Building Wealth Today"
//   }
// ];
// const FinancialPlanningPage = () => {
//   const [activeLevel, setActiveLevel] = useState(0);
//   const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const lastScrollY = useRef(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const direction = scrollY > lastScrollY.current ? 'down' : 'up';
//       setScrollDirection(direction);
//       lastScrollY.current = scrollY;
//       if (!containerRef.current) return;
//       const container = containerRef.current;
//       const containerTop = container.offsetTop;
//       const containerHeight = container.offsetHeight;
//       const windowHeight = window.innerHeight;
//       // Calculate which section is in view
//       const sections = sectionRefs.current;
//       let currentActive = activeLevel;
//       sections.forEach((section, index) => {
//         if (!section) return;
//         const rect = section.getBoundingClientRect();
//         const sectionTop = rect.top;
//         const sectionHeight = rect.height;
//         // If section is in the middle of the viewport
//         if (sectionTop <= windowHeight * 0.6 && sectionTop + sectionHeight >= windowHeight * 0.4) {
//           currentActive = index;
//         }
//       });
//       if (currentActive !== activeLevel) {
//         setActiveLevel(currentActive);
//       }
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [activeLevel]);
//   const scrollToNext = () => {
//     const nextSection = sectionRefs.current[activeLevel + 1];
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   const scrollToPrevious = () => {
//     const prevSection = sectionRefs.current[activeLevel - 1];
//     if (prevSection) {
//       prevSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   // Pyramid Component with proper triangle shape
//   const Pyramid = () => (
//     <div className="relative w-80 h-80 mx-auto mb-12">
//       {/* TIP - Base Layer */}
//       <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 transition-all duration-700 ${
//         activeLevel === 0 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
//       }`}>
//         <div className={`w-full h-full bg-gradient-to-b ${pyramidLevels[0].color} clip-triangle-base border-2 border-white/30 shadow-2xl`}>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-lg">TIP</div>
//             <div className="text-xs opacity-90">Foundation</div>
//           </div>
//         </div>
//       </div>
//       {/* HIP - Middle Layer */}
//       <div className={`absolute bottom-32 left-1/2 transform -translate-x-1/2 w-48 h-32 transition-all duration-700 ${
//         activeLevel === 1 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
//       }`}>
//         <div className={`w-full h-full bg-gradient-to-b ${pyramidLevels[1].color} clip-triangle-middle border-2 border-white/30 shadow-2xl`}>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-lg">HIP</div>
//             <div className="text-xs opacity-90">Health</div>
//           </div>
//         </div>
//       </div>
//       {/* SIP - Top Layer */}
//       <div className={`absolute bottom-52 left-1/2 transform -translate-x-1/2 w-32 h-32 transition-all duration-700 ${
//         activeLevel === 2 ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
//       }`}>
//         <div className={`w-full h-full bg-gradient-to-b ${pyramidLevels[2].color} clip-triangle-top border-2 border-white/30 shadow-2xl`}>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-lg">SIP</div>
//             <div className="text-xs opacity-90">Wealth</div>
//           </div>
//         </div>
//       </div>
//       {/* Active Level Glow */}
//       <div className={`absolute inset-0 transition-all duration-700 ${
//         activeLevel === 0 ? 'glow-blue' : 
//         activeLevel === 1 ? 'glow-green' : 
//         'glow-amber'
//       } ${activeLevel >= 0 ? 'opacity-100' : 'opacity-0'}`}></div>
//     </div>
//   );
//   const LevelSection = ({ level, index }: { level: typeof pyramidLevels[0]; index: number }) => (
//     <section 
//       ref={(el) => (sectionRefs.current[index] = el)}
//       className="min-h-screen flex items-center justify-center py-20 px-6"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Content */}
//         <div className={`space-y-6 transition-all duration-700 transform ${
//           activeLevel === index 
//             ? 'translate-x-0 opacity-100' 
//             : scrollDirection === 'down'
//             ? '-translate-x-20 opacity-40'
//             : 'translate-x-20 opacity-40'
//         }`}>
//           <div className="flex items-center gap-4 mb-6">
//             <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-2xl`}>
//               {React.cloneElement(level.icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
//             </div>
//             <div>
//               <div className="text-4xl font-black text-white">{level.level}</div>
//               <div className="text-amber-400 font-semibold">Level {index + 1} of 3</div>
//             </div>
//           </div>
//           <h2 className="text-5xl font-bold text-white leading-tight">
//             {level.title}
//           </h2>
//           <p className="text-amber-400 text-xl font-semibold">
//             {level.subtitle}
//           </p>
//           <p className="text-slate-200 text-lg leading-relaxed">
//             {level.description}
//           </p>
//           <p className="text-slate-300 leading-relaxed">
//             {level.detailedDescription}
//           </p>
//           <div className="grid grid-cols-3 gap-4 my-8">
//             {level.stats.map((stat, statIndex) => (
//               <div key={statIndex} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
//                 <div className="text-2xl font-bold text-amber-400">{stat}</div>
//                 <div className="text-sm text-slate-300 mt-1">{level.stats[statIndex + 1]}</div>
//               </div>
//             ))}
//           </div>
//           <ul className="space-y-3 mb-8">
//             {level.features.map((feature, featureIndex) => (
//               <li key={featureIndex} className="flex items-center gap-3 text-slate-200">
//                 <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${level.color}`}></div>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//           <button className={`px-8 py-4 bg-gradient-to-r ${level.color} text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
//             {level.cta}
//           </button>
//         </div>
//         {/* Right Column - Pyramid */}
//         <div className={`transition-all duration-700 transform ${
//           activeLevel === index 
//             ? 'translate-x-0 opacity-100 scale-100' 
//             : scrollDirection === 'down'
//             ? 'translate-x-20 opacity-40 scale-95'
//             : '-translate-x-20 opacity-40 scale-95'
//         }`}>
//           <Pyramid />
//         </div>
//       </div>
//     </section>
//   );
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
//               <Gem className="w-5 h-5 text-amber-400" />
//               <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
//                 Financial Planning Made Simple
//               </span>
//             </div>
//             <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
//               <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
//                 TIP HIP SIP
//               </span>
//             </h1>
//             <p className="text-2xl md:text-3xl text-slate-300 mb-12 leading-relaxed">
//               Build your financial future with our proven 3-level pyramid approach
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//               <button 
//                 onClick={() => sectionRefs.current[0]?.scrollIntoView({ behavior: 'smooth' })}
//                 className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative z-10 flex items-center">
//                   Explore the Pyramid
//                   <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
//             </div>
//             <div className="animate-bounce">
//               <ChevronDown className="w-8 h-8 text-amber-400 mx-auto" />
//               <p className="text-slate-400 mt-2">Scroll to begin</p>
//             </div>
//           </div>
//         </section>
//         {/* Pyramid Scroll Sections */}
//         <div ref={containerRef}>
//           {pyramidLevels.map((level, index) => (
//             <LevelSection key={index} level={level} index={index} />
//           ))}
//         </div>
//         {/* Navigation Controls */}
//         <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
//           {pyramidLevels.map((level, index) => (
//             <button
//               key={index}
//               onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })}
//               className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                 activeLevel === index 
//                   ? `bg-gradient-to-r ${level.color} scale-125` 
//                   : 'bg-white/30 scale-100'
//               }`}
//             />
//           ))}
//         </div>
//         {/* Final CTA */}
//         <section className="py-20 px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl rounded-3xl p-12 border border-amber-400/20 shadow-2xl">
//               <Target className="w-16 h-16 text-amber-400 mx-auto mb-6" />
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Start Your Financial Journey
//               </h2>
//               <p className="text-xl text-slate-200 mb-8 leading-relaxed">
//                 Build your pyramid from the ground up. Secure your foundation, protect your health, and grow your wealth.
//               </p>
//               <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 Get Your Financial Plan
//               </button>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//       <style jsx>{`
//         .clip-triangle-base {
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }
//         .clip-triangle-middle {
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }
//         .clip-triangle-top {
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }
//         .glow-blue {
//           box-shadow: 0 0 60px 20px rgba(59, 130, 246, 0.4);
//         }
//         .glow-green {
//           box-shadow: 0 0 60px 20px rgba(34, 197, 94, 0.4);
//         }
//         .glow-amber {
//           box-shadow: 0 0 60px 20px rgba(245, 158, 11, 0.4);
//         }
//       `}</style>
//     </main>
//   );
// };
// export default FinancialPlanningPage;
// goooood
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Target, Shield, TrendingUp, ArrowRight, Gem, Heart, ChevronDown } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// const pyramidLevels = [
//   {
//     level: "TIP",
//     title: "Term Insurance Planning",
//     subtitle: "The Foundation of Financial Security",
//     description: "Term Insurance Planning (TIP) forms the essential base of your financial pyramid. It's the safety net that ensures your family's financial stability in your absence.",
//     detailedDescription: "Think of TIP as the bedrock of your financial house. Without this foundation, the entire structure becomes vulnerable. A robust term insurance plan provides high coverage at affordable premiums, ensuring your family can maintain their lifestyle, pay off debts, and fund future goals even when you're not there to provide.",
//     features: [
//       "High sum assured (up to ₹5 Crore) at low cost",
//       "Tax benefits under Section 80C & 10(10D)",
//       "Critical illness and disability riders",
//       "Income replacement for your family",
//       "Debt protection and loan coverage"
//     ],
//     icon: <Shield />,
//     color: "from-blue-500 to-cyan-500",
//     lightColor: "blue",
//     bgColor: "bg-blue-500/20",
//     borderColor: "border-blue-400/50",
//     stats: ["99%", "Claims Paid", "Foundation Security"],
//     cta: "Secure Your Family's Future"
//   },
//   {
//     level: "HIP",
//     title: "Health Insurance Planning",
//     subtitle: "Protecting Your Health and Wealth",
//     description: "Health Insurance Planning (HIP) forms the crucial middle layer that safeguards your savings from medical emergencies while ensuring access to quality healthcare.",
//     detailedDescription: "HIP acts as the protective walls of your financial structure. Medical emergencies can derail even the best financial plans. Comprehensive health insurance prevents your hard-earned savings from being depleted by healthcare costs, ensuring your wealth-building efforts remain on track.",
//     features: [
//       "Coverage up to ₹1 Crore for family",
//       "Cashless hospitalization across India",
//       "Pre and post hospitalization cover",
//       "No claim bonus up to 100%",
//       "Critical illness cover included"
//     ],
//     icon: <Heart />,
//     color: "from-green-500 to-emerald-500",
//     lightColor: "green",
//     bgColor: "bg-green-500/20",
//     borderColor: "border-green-400/50",
//     stats: ["₹50L", "Avg. Coverage", "Health Security"],
//     cta: "Protect Your Medical Expenses"
//   },
//   {
//     level: "SIP",
//     title: "Systematic Investment Planning",
//     subtitle: "Building Long-Term Wealth",
//     description: "Systematic Investment Planning (SIP) represents the peak of your financial pyramid, focusing on disciplined wealth creation and achieving your long-term financial goals.",
//     detailedDescription: "SIP is the roof of your financial house - it provides growth, security, and the ability to weather economic storms. Through disciplined monthly investments in mutual funds, you harness the power of compounding to build substantial wealth over time.",
//     features: [
//       "Start with just ₹500 per month",
//       "Power of compounding returns",
//       "Rupee cost averaging benefits",
//       "Flexible investment options",
//       "Automated disciplined approach"
//     ],
//     icon: <TrendingUp />,
//     color: "from-amber-500 to-yellow-500",
//     lightColor: "amber",
//     bgColor: "bg-amber-500/20",
//     borderColor: "border-amber-400/50",
//     stats: ["15%", "Avg. Returns", "Wealth Growth"],
//     cta: "Start Building Wealth Today"
//   }
// ];
// const FinancialPlanningPage = () => {
//   const [activeLevel, setActiveLevel] = useState(0);
//   const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const lastScrollY = useRef(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const direction = scrollY > lastScrollY.current ? 'down' : 'up';
//       setScrollDirection(direction);
//       lastScrollY.current = scrollY;
//       const sections = sectionRefs.current;
//       let currentActive = activeLevel;
//       sections.forEach((section, index) => {
//         if (!section) return;
//         const rect = section.getBoundingClientRect();
//         const sectionTop = rect.top;
//         const sectionHeight = rect.height;
//         const windowHeight = window.innerHeight;
//         // Check if section is in the middle 60% of viewport
//         if (sectionTop <= windowHeight * 0.7 && sectionTop + sectionHeight >= windowHeight * 0.3) {
//           currentActive = index;
//         }
//       });
//       if (currentActive !== activeLevel) {
//         setActiveLevel(currentActive);
//       }
//     };
//     // Throttle scroll events
//     let ticking = false;
//     const throttledScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           handleScroll();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener('scroll', throttledScroll, { passive: true });
//     return () => window.removeEventListener('scroll', throttledScroll);
//   }, [activeLevel]);
//   // Mobile Pyramid Component with proper separation
//   const MobilePyramid = () => (
//     <div className="relative w-64 h-64 mx-auto mb-8">
//       {/* SIP - Top Layer */}
//       <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         activeLevel === 2 ? 'scale-110 opacity-100 z-30' : 'scale-100 opacity-70 z-10'
//       }`}>
//         <div className={`w-32 h-24 bg-gradient-to-b ${pyramidLevels[2].color} clip-triangle border-2 border-white/40 shadow-2xl`}>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-sm">SIP</div>
//             <div className="text-xs opacity-90">Wealth</div>
//           </div>
//         </div>
//       </div>
//       {/* HIP - Middle Layer */}
//       <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         activeLevel === 1 ? 'scale-110 opacity-100 z-20' : 'scale-100 opacity-70 z-10'
//       }`}>
//         <div className={`w-48 h-24 bg-gradient-to-b ${pyramidLevels[1].color} clip-triangle border-2 border-white/40 shadow-2xl`}>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-sm">HIP</div>
//             <div className="text-xs opacity-90">Health</div>
//           </div>
//         </div>
//       </div>
//       {/* TIP - Base Layer */}
//       <div className={`absolute top-32 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         activeLevel === 0 ? 'scale-110 opacity-100 z-10' : 'scale-100 opacity-70 z-10'
//       }`}>
//         <div className={`w-64 h-24 bg-gradient-to-b ${pyramidLevels[0].color} clip-triangle border-2 border-white/40 shadow-2xl`}>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-sm">TIP</div>
//             <div className="text-xs opacity-90">Foundation</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   // Desktop Pyramid Component
//   const DesktopPyramid = () => (
//     <div className="relative w-80 h-80 mx-auto mb-12">
//       {/* SIP - Top Layer */}
//       <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         activeLevel === 2 ? 'scale-110 opacity-100 z-30' : 'scale-100 opacity-70 z-10'
//       }`}>
//         <div className={`w-40 h-32 bg-gradient-to-b ${pyramidLevels[2].color} clip-triangle border-2 border-white/40 shadow-2xl`}>
//           <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-lg">SIP</div>
//             <div className="text-xs opacity-90">Wealth</div>
//           </div>
//         </div>
//       </div>
//       {/* HIP - Middle Layer */}
//       <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         activeLevel === 1 ? 'scale-110 opacity-100 z-20' : 'scale-100 opacity-70 z-10'
//       }`}>
//         <div className={`w-64 h-32 bg-gradient-to-b ${pyramidLevels[1].color} clip-triangle border-2 border-white/40 shadow-2xl`}>
//           <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-lg">HIP</div>
//             <div className="text-xs opacity-90">Health</div>
//           </div>
//         </div>
//       </div>
//       {/* TIP - Base Layer */}
//       <div className={`absolute top-48 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         activeLevel === 0 ? 'scale-110 opacity-100 z-10' : 'scale-100 opacity-70 z-10'
//       }`}>
//         <div className={`w-80 h-32 bg-gradient-to-b ${pyramidLevels[0].color} clip-triangle border-2 border-white/40 shadow-2xl`}>
//           <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-center">
//             <div className="font-bold text-lg">TIP</div>
//             <div className="text-xs opacity-90">Foundation</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   const LevelSection = ({ level, index }: { level: typeof pyramidLevels[0]; index: number }) => (
//     <section 
//       ref={(el) => (sectionRefs.current[index] = el)}
//       className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6"
//     >
//       <div className="max-w-6xl mx-auto w-full">
//         {/* Mobile Layout - Stacked */}
//         <div className="lg:hidden space-y-8">
//           {/* Pyramid at top for mobile */}
//           <div className="text-center">
//             <MobilePyramid />
//           </div>
//           {/* Content below pyramid */}
//           <div className={`space-y-6 transition-all duration-1000 transform ${
//             activeLevel === index 
//               ? 'translate-y-0 opacity-100' 
//               : scrollDirection === 'down'
//               ? 'translate-y-10 opacity-40'
//               : '-translate-y-10 opacity-40'
//           }`}>
//             <div className="flex items-center gap-4 mb-4">
//               <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-2xl`}>
//                 {React.cloneElement(level.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-white">{level.level}</div>
//                 <div className="text-amber-400 font-semibold text-sm">Level {index + 1} of 3</div>
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-white leading-tight">
//               {level.title}
//             </h2>
//             <p className="text-amber-400 text-lg font-semibold">
//               {level.subtitle}
//             </p>
//             <p className="text-slate-200 text-base leading-relaxed">
//               {level.description}
//             </p>
//             <div className="grid grid-cols-3 gap-3 my-6">
//               {level.stats.map((stat, statIndex) => (
//                 <div key={statIndex} className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
//                   <div className="text-lg font-bold text-amber-400">{stat}</div>
//                   <div className="text-xs text-slate-300 mt-1">{level.stats[statIndex + 1]}</div>
//                 </div>
//               ))}
//             </div>
//             <ul className="space-y-2 mb-6">
//               {level.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-start gap-3 text-slate-200 text-sm">
//                   <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color} mt-2 flex-shrink-0`}></div>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className={`w-full px-6 py-3 bg-gradient-to-r ${level.color} text-white font-bold rounded-xl shadow-xl transition-all duration-300 active:scale-95`}>
//               {level.cta}
//             </button>
//           </div>
//         </div>
//         {/* Desktop Layout - Side by Side */}
//         <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Content */}
//           <div className={`space-y-6 transition-all duration-1000 transform ${
//             activeLevel === index 
//               ? 'translate-x-0 opacity-100' 
//               : scrollDirection === 'down'
//               ? '-translate-x-20 opacity-40'
//               : 'translate-x-20 opacity-40'
//           }`}>
//             <div className="flex items-center gap-4 mb-6">
//               <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-2xl`}>
//                 {React.cloneElement(level.icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
//               </div>
//               <div>
//                 <div className="text-4xl font-black text-white">{level.level}</div>
//                 <div className="text-amber-400 font-semibold">Level {index + 1} of 3</div>
//               </div>
//             </div>
//             <h2 className="text-5xl font-bold text-white leading-tight">
//               {level.title}
//             </h2>
//             <p className="text-amber-400 text-xl font-semibold">
//               {level.subtitle}
//             </p>
//             <p className="text-slate-200 text-lg leading-relaxed">
//               {level.description}
//             </p>
//             <div className="grid grid-cols-3 gap-4 my-8">
//               {level.stats.map((stat, statIndex) => (
//                 <div key={statIndex} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
//                   <div className="text-2xl font-bold text-amber-400">{stat}</div>
//                   <div className="text-sm text-slate-300 mt-1">{level.stats[statIndex + 1]}</div>
//                 </div>
//               ))}
//             </div>
//             <ul className="space-y-3 mb-8">
//               {level.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-center gap-3 text-slate-200">
//                   <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${level.color}`}></div>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className={`px-8 py-4 bg-gradient-to-r ${level.color} text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
//               {level.cta}
//             </button>
//           </div>
//           {/* Right Column - Pyramid */}
//           <div className={`transition-all duration-1000 transform ${
//             activeLevel === index 
//               ? 'translate-x-0 opacity-100 scale-100' 
//               : scrollDirection === 'down'
//               ? 'translate-x-20 opacity-40 scale-95'
//               : '-translate-x-20 opacity-40 scale-95'
//           }`}>
//             <DesktopPyramid />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 backdrop-blur-sm">
//               <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
//               <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
//                 Financial Planning Made Simple
//               </span>
//             </div>
//             <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4 sm:mb-6">
//               <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
//                 TIP HIP SIP
//               </span>
//             </h1>
//             <p className="text-lg sm:text-2xl md:text-3xl text-slate-300 mb-8 sm:mb-12 leading-relaxed px-4">
//               Build your financial future with our proven 3-level pyramid approach
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
//               <button 
//                 onClick={() => sectionRefs.current[0]?.scrollIntoView({ behavior: 'smooth' })}
//                 className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden text-sm sm:text-base"
//               >
//                 <span className="flex items-center justify-center">
//                   Explore the Pyramid
//                   <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
//                 </span>
//               </button>
//             </div>
//             <div className="animate-bounce">
//               <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto" />
//               <p className="text-slate-400 mt-2 text-sm sm:text-base">Scroll to begin</p>
//             </div>
//           </div>
//         </section>
//         {/* Pyramid Scroll Sections */}
//         <div ref={containerRef}>
//           {pyramidLevels.map((level, index) => (
//             <LevelSection key={index} level={level} index={index} />
//           ))}
//         </div>
//         {/* Navigation Controls - Hidden on mobile, shown on desktop */}
//         <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-2 hidden sm:block">
//           {pyramidLevels.map((level, index) => (
//             <button
//               key={index}
//               onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })}
//               className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
//                 activeLevel === index 
//                   ? `bg-gradient-to-r ${level.color} scale-125` 
//                   : 'bg-white/30 scale-100'
//               }`}
//             />
//           ))}
//         </div>
//         {/* Mobile Navigation - Bottom */}
//         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2 sm:hidden bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//           {pyramidLevels.map((level, index) => (
//             <button
//               key={index}
//               onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 activeLevel === index 
//                   ? `bg-gradient-to-r ${level.color} scale-125` 
//                   : 'bg-white/30 scale-100'
//               }`}
//             />
//           ))}
//         </div>
//         {/* Final CTA */}
//         <section className="py-16 sm:py-20 px-4 sm:px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-amber-400/20 shadow-2xl">
//               <Target className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 mx-auto mb-4 sm:mb-6" />
//               <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
//                 Start Your Financial Journey
//               </h2>
//               <p className="text-base sm:text-xl text-slate-200 mb-6 sm:mb-8 leading-relaxed">
//                 Build your pyramid from the ground up. Secure your foundation, protect your health, and grow your wealth.
//               </p>
//               <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base">
//                 Get Your Financial Plan
//               </button>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//       <style jsx>{`
//         .clip-triangle {
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }
//         /* Smooth scrolling for the whole page */
//         html {
//           scroll-behavior: smooth;
//         }
//         /* Better mobile touch experience */
//         @media (max-width: 768px) {
//           section {
//             padding-left: 1rem;
//             padding-right: 1rem;
//           }
//         }
//       `}</style>
//     </main>
//   );
// };
// export default FinancialPlanningPage;
// no animation page
// "use client";
// import React, { useState, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { Heart, Stethoscope, TrendingUp, ArrowRight, Phone, Shield } from "lucide-react";
// // --- Data Structure for TIP HIP SIP ---
// interface FinancialPillar {
//   id: 'tip' | 'hip' | 'sip';
//   name: string;
//   subTitle: string;
//   description: string;
//   icon: ReactNode;
//   color: string;
//   benefits: string[];
// }
// const pillars: FinancialPillar[] = [
//   {
//     id: 'tip',
//     name: "T.I.P. - Term Insurance Plan",
//     subTitle: "Protecting Your Family's Future",
//     description: "This is pure life insurance coverage designed to provide your family with a financial safety net if you pass away unexpectedly during the policy term. It is essential for income replacement.",
//     icon: <Heart />,
//     color: 'text-red-500',
//     benefits: [
//       "Maximum coverage at minimum cost.",
//       "Ensures income replacement for dependents.",
//       "Clear, simple structure (no maturity benefits).",
//       "Crucial security for loans and long-term liabilities.",
//     ]
//   },
//   {
//     id: 'hip',
//     name: "H.I.P. - Health Insurance Plan",
//     subTitle: "Shielding Your Savings from Medical Crises",
//     description: "Health Insurance covers hospitalization and medical expenses, preventing sudden illness or injury from wiping out your hard-earned savings. It’s the foundation of financial peace.",
//     icon: <Stethoscope />,
//     color: 'text-green-500',
//     benefits: [
//       "Cashless hospitalization facility.",
//       "Coverage for pre and post-hospitalization costs.",
//       "Annual health check-ups included.",
//       "Protecting retirement and investment goals.",
//     ]
//   },
//   {
//     id: 'sip',
//     name: "S.I.P. - Systematic Investment Plan",
//     subTitle: "Building Wealth with Discipline",
//     description: "A disciplined method of investing a fixed amount of money at regular intervals, typically into mutual funds, to build substantial wealth over the long term through compounding and Rupee Cost Averaging.",
//     icon: <TrendingUp />,
//     color: 'text-blue-500',
//     benefits: [
//       "Disciplined, automated investing schedule.",
//       "Benefit from Rupee Cost Averaging.",
//       "Achieve long-term goals like retirement or children's education.",
//       "Flexible to stop or pause investments if needed.",
//     ]
//   },
// ];
// // --- Custom Components for Style Consistency ---
// const PillarCard = ({ pillar }: { pillar: FinancialPillar }) => (
//   <div className="relative group p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl transition-all duration-500 hover:scale-[1.03] hover:border-amber-400">
//     <div className="flex items-center mb-6">
//       <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-amber-400/20 mr-4 transition-colors`}>
//         {React.cloneElement(pillar.icon as React.ReactElement, { className: `w-7 h-7 ${pillar.color}` })}
//       </div>
//       <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
//         {pillar.name}
//       </h3>
//     </div>
//     <p className="text-lg font-semibold text-slate-200 mb-4">{pillar.subTitle}</p>
//     <p className="text-sm text-slate-300 mb-6">{pillar.description}</p>
//     <div className="space-y-3">
//       {pillar.benefits.map((benefit, index) => (
//         <div key={index} className="flex items-start text-sm text-yellow-100/90">
//           <Shield className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0 mt-1" />
//           <span>{benefit}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );
// // --- Main Page Component ---
// const FinancialPlanningPage = () => {
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* 1. Hero Section - Aligned with Digital Gold Page */}
//         <section className="py-48 flex flex-col items-center justify-center text-center bg-transparent">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4 animate-fade-in-up">
//             Your Financial Freedom Plan
//           </h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-down mb-8">
//             Secure your life, health, and future wealth with comprehensive planning tailored to your needs.
//           </p>
//           <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400 animate-fade-in-up">
//             <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//             <span className="relative z-10">Schedule a Free Review</span>
//             <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//           </button>
//         </section>
//         {/* --- */}
//         {/* 2. Short Explanation / Transition */}
//         <section className="py-16 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               The Three Pillars of Financial Security
//             </h2>
//             <p className="text-xl text-slate-300 leading-relaxed">
//               True financial planning isn't just about investing; it's about **protecting what you earn and preparing for what's next.** We simplify the process with our foundational approach: **T.I.P., H.I.P., and S.I.P.**
//             </p>
//           </div>
//         </section>
//         {/* --- */}
//         {/* 3. TIP HIP SIP Breakdown (The Core Content) */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-12 lg:grid-cols-3">
//             {pillars.map((pillar) => (
//               <PillarCard key={pillar.id} pillar={pillar} />
//             ))}
//           </div>
//         </section>
//         {/* --- */}
//         {/* 4. Final CTA Section - High contrast for action */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
//             <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400" />
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
//               Ready to Build Your Secure Future?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               As your dedicated LIC partner, we provide tailored advice to fit these three pillars into your unique life plan.
//             </p>
//             <button className="relative px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden flex items-center justify-center mx-auto">
//               <Phone className="w-5 h-5 mr-2" />
//               <span className="relative z-10">Contact an Expert Today</span>
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default FinancialPlanningPage;
__turbopack_context__.s([
    "default",
    ()=>PillarsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const pillars = [
    {
        name: "Protection",
        subTitle: "Build your financial shield",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {}, void 0, false, {
            fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
            lineNumber: 1798,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-amber-400",
        description: "Ensure financial safety for you and your loved ones with strong protection plans that prepare you for the unexpected.",
        benefits: [
            "Comprehensive life and health coverage",
            "Income protection during uncertainties",
            "Peace of mind with tailored insurance",
            "Tax benefits under various sections"
        ]
    },
    {
        name: "Security",
        subTitle: "Keep your future stable",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {}, void 0, false, {
            fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
            lineNumber: 1812,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-green-400",
        description: "Secure your long-term goals through disciplined saving and strategic investments designed for lasting growth.",
        benefits: [
            "Consistent wealth accumulation",
            "Diversified portfolio management",
            "Capital protection with growth",
            "Government-backed saving options"
        ]
    },
    {
        name: "Growth",
        subTitle: "Make your money work for you",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {}, void 0, false, {
            fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
            lineNumber: 1826,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-sky-400",
        description: "Maximize your wealth potential through smart investments, compounding returns, and goal-based financial strategies.",
        benefits: [
            "High-return market opportunities",
            "Goal-based investment strategies",
            "Periodic portfolio tracking",
            "Expert guidance from advisors"
        ]
    }
];
const PillarCard = (param)=>{
    let { pillar } = param;
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        className: "relative group p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.02]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mr-4",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(pillar.icon, {
                            className: "w-6 h-6 ".concat(pillar.color)
                        })
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1851,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white",
                                children: pillar.name
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                                lineNumber: 1857,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-300",
                                children: pillar.subTitle
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                                lineNumber: 1858,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1856,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1850,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-300 mb-4",
                children: pillar.description
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1862,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 mb-4",
                children: pillar.benefits.slice(0, expanded ? pillar.benefits.length : 2).map((benefit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start text-sm text-yellow-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                className: "w-4 h-4 text-amber-400 mr-2 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                                lineNumber: 1869,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            benefit
                        ]
                    }, i, true, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1868,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1864,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            pillar.benefits.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                "aria-expanded": expanded,
                className: "text-amber-400 text-sm hover:underline focus-visible:ring-2 ring-amber-400 rounded",
                children: expanded ? "Show less ↑" : "Learn more ↓"
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1876,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mt-6 w-full flex items-center justify-center px-6 py-3 bg-amber-400/20 text-amber-400 font-semibold rounded-xl border border-amber-400/30 hover:bg-amber-400/30 transition-all duration-300",
                children: [
                    "Get Personalized Quote ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "w-4 h-4 ml-2"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1886,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1885,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
        lineNumber: 1843,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PillarCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = PillarCard;
function PillarsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-20 px-6 md:px-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: "Our 3 Financial Pillars"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1896,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 max-w-2xl mx-auto",
                        children: "Learn the essential foundations of financial planning. Each pillar helps you move closer to long-term stability, security, and growth."
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1899,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: pillars.map((pillar, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PillarCard, {
                        pillar: pillar
                    }, i, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1907,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1905,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 w-full md:hidden bg-slate-800/80 backdrop-blur-md border-t border-white/10 p-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-300",
                        children: "Need expert financial advice?"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1913,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-4 py-2 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-300 transition-all duration-300",
                        children: "Talk to an Expert"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                        lineNumber: 1914,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
                lineNumber: 1912,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mokshainvestment/app/services/financial-planning/page.tsx",
        lineNumber: 1894,
        columnNumber: 5
    }, this);
}
_c1 = PillarsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "PillarCard");
__turbopack_context__.k.register(_c1, "PillarsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_app_services_financial-planning_page_tsx_da23cb44._.js.map