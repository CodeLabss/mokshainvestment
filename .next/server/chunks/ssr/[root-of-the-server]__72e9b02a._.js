module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/services/mutual-funds/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/services/mutual-funds/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import React, { useState, ReactNode, useRef, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { ChartLine, TrendingUp, BarChart3, Shield, X, Phone, Mail, Clock, CheckCircle, ArrowRight, Building2, Users, Target, Star } from "lucide-react";
// import Link from "next/link";
// interface Company {
//   id: string;
//   name: string;
//   logo_url: string;
//   category?: string;
// }
// interface SubCategory {
//   id: string;
//   name: string;
//   description: string;
//   icon: ReactNode;
//   companies?: Company[];
// }
// interface CategoryWithSubcategories {
//   id: string;
//   name: string;
//   description: string;
//   subcategories: SubCategory[];
// }
// // Enhanced Infinite Logo Marquee Component
// const InfiniteLogoMarquee = ({ companies, direction = "left" }: { companies: Company[]; direction?: "left" | "right" }) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   // Duplicate the companies array to create seamless loop
//   const duplicatedCompanies = [...companies, ...companies];
//   // Auto-scroll animation
//   useEffect(() => {
//     const content = contentRef.current;
//     if (!content) return;
//     let animationId: number;
//     const speed = direction === "left" ? -0.5 : 0.5; // Adjust speed and direction
//     let position = 0;
//     const animate = () => {
//       if (!isHovered && content) {
//         position += speed;
//         const firstItemWidth = 160 + 48; // logo width + gap
//         const totalWidth = duplicatedCompanies.length * firstItemWidth;
//         // Reset position when scrolled beyond content
//         if (Math.abs(position) >= totalWidth / 2) {
//           position = 0;
//         }
//         content.style.transform = `translateX(${position}px)`;
//       }
//       animationId = requestAnimationFrame(animate);
//     };
//     animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, [isHovered, duplicatedCompanies.length, direction]);
//   return (
//     <div 
//       className="relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Marquee Content */}
//       <div 
//         ref={marqueeRef}
//         className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
//       >
//         <div 
//           ref={contentRef}
//           className="flex gap-12 md:gap-16 items-center"
//           style={{ willChange: 'transform' }}
//         >
//           {duplicatedCompanies.map((company, index) => (
//             <div
//               key={`${company.id}-${index}`}
//               className="flex-shrink-0 group relative"
//             >
//               {/* Clean Logo Container - No Box, No Border */}
//               <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
//                 <img
//                   src={company.logo_url || "/dummy-logo.png"}
//                   alt={company.name}
//                   className="w-full h-full object-contain opacity-100 brightness-100 contrast-100"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// // Dual Marquee Section Component
// const DualMarqueeSection = () => {
//   // First set of companies for top marquee (right to left)
//   const topMarqueeCompanies: Company[] = [
//     { id: "1", name: "HDFC Mutual Fund", logo_url: "/images/mutual-funds/aditya-brila.jpg" },
//     { id: "2", name: "ICICI Prudential", logo_url: "/images/mutual-funds/bajaj.jpg" },
//     { id: "3", name: "SBI Mutual Fund", logo_url: "/images/mutual-funds/bandhan.jpg" },
//     { id: "4", name: "Axis Mutual Fund", logo_url: "/images/mutual-funds/canara.jpg" },
//     { id: "5", name: "Kotak Mutual Fund", logo_url: "/images/mutual-funds/dsp.jpg" },
//     { id: "6", name: "Aditya Birla Sun Life", logo_url: "//images/mutual-funds/franklin.jpg" },
//   ];
//   // Second set of companies for bottom marquee (left to right)
//   const bottomMarqueeCompanies: Company[] = [
//     { id: "7", name: "Nippon India", logo_url: "/images/mutual-funds/hdfc.jpg" },
//     { id: "8", name: "UTI Mutual Fund", logo_url: "/images/mutual-funds/icici.jpg" },
//     { id: "9", name: "Franklin Templeton", logo_url: "/images/mutual-funds/motilal.jpg" },
//     { id: "10", name: "DSP Mutual Fund", logo_url: "/images/mutual-funds/nippon.jpg" },
//     { id: "11", name: "Mirae Asset", logo_url: "/images/mutual-funds/parag.jpg" },
//     { id: "12", name: "Canara Robeco", logo_url: "/images/mutual-funds/quant.jpg" },
//   ];
//   return (
//     <section className="py-12 md:py-16 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 shadow-sm mb-4 md:mb-6">
//             <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
//             <span className="text-sm md:text-base font-semibold text-white">Trusted Investment Partners</span>
//             <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
//           </div>
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
//             Our Trusted Partners
//           </h3>
//           <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//             Partnered with India's leading mutual fund companies to bring you the best investment opportunities
//           </p>
//         </div>
//         {/* Top Marquee - Right to Left */}
//         <div className="mb-6 md:mb-8">
//           <InfiniteLogoMarquee companies={topMarqueeCompanies} direction="left" />
//         </div>
//         {/* Bottom Marquee - Left to Right */}
//         <div>
//           <InfiniteLogoMarquee companies={bottomMarqueeCompanies} direction="right" />
//         </div>
//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-16 pt-8 md:pt-12 border-t border-white/20 max-w-2xl mx-auto">
//           <div className="text-center">
//             <div className="text-xl md:text-3xl font-bold text-amber-400 mb-2 md:mb-3">12+</div>
//             <div className="text-xs md:text-base text-gray-200 font-medium">Fund Houses</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xl md:text-3xl font-bold text-amber-400 mb-2 md:mb-3">50+</div>
//             <div className="text-xs md:text-base text-gray-200 font-medium">Fund Schemes</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xl md:text-3xl font-bold text-amber-400 mb-2 md:mb-3">24/7</div>
//             <div className="text-xs md:text-base text-gray-200 font-medium">Support</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xl md:text-3xl font-bold text-amber-400 mb-2 md:mb-3">100%</div>
//             <div className="text-xs md:text-base text-gray-200 font-medium">Secure</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// // Information component for mutual fund categories
// const MutualFundInformationBox = ({ 
//   subCategory, 
//   onClose 
// }: { 
//   subCategory: SubCategory; 
//   onClose: () => void; 
// }) => {
//   if (!subCategory) return null;
//   const handleEmailClick = () => {
//     window.location.href = "mailto:info@yourcompany.com?subject=Mutual Fund Inquiry&body=Hello, I would like more information about your mutual fund services.";
//   };
//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 mr-4">
//               {React.cloneElement(subCategory.icon as React.ReactElement, { className: "w-8 h-8 text-indigo-600" })}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">{subCategory.name}</h2>
//               <p className="text-gray-500 text-sm mt-1">Professional investment management</p>
//             </div>
//           </div>
//           <button 
//             onClick={onClose}
//             className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
//             aria-label="Close modal"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         {/* Content */}
//         <div className="p-6">
//           <div className="grid grid-cols-1 gap-8">
//             {/* Full Width Information */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">About This Investment</h3>
//               <p className="text-gray-700 mb-6 leading-relaxed">{subCategory.description}</p>
//               <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6">
//                 <h4 className="font-semibold text-blue-800 mb-3">Investment Benefits</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Professional fund management</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Diversification across multiple assets</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Affordable investment options</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Tax benefits under applicable laws</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Partner Companies */}
//             {subCategory.companies && subCategory.companies.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-6">Available Fund Houses</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {subCategory.companies.map((company) => (
//                     <div
//                       key={company.id}
//                       className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all group"
//                     >
//                       <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-xl p-2 border border-gray-200 group-hover:bg-indigo-50 transition-colors">
//                         <img
//                           src={company.logo_url || "/dummy_logo.png"}
//                           alt={company.name}
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                       <span className="text-xs font-medium text-gray-700 text-center leading-tight">
//                         {company.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {/* Full Width CTA Container */}
//             <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div>
//                   <h4 className="font-semibold text-indigo-800 mb-4 text-xl">Start Your Investment Journey</h4>
//                   <p className="text-indigo-700 mb-5 text-lg">
//                     Our investment specialists will help you choose the right mutual funds based on your financial goals and risk appetite.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="space-y-4">
//                     <Link href="/contact" className="block w-full">
//                       <button className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
//                         <Phone className="w-6 h-6 mr-3" />
//                         Consult an Expert
//                       </button>
//                     </Link>
//                     <button 
//                       onClick={handleEmailClick}
//                       className="w-full py-4 border-2 border-indigo-300 text-indigo-600 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors flex items-center justify-center"
//                     >
//                       <Mail className="w-6 h-6 mr-3" />
//                       Email Inquiry
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Why Choose Our Services Section */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Invest Through Us?</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start">
//                   <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                     <Users className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Expert Guidance</h4>
//                     <p className="text-gray-600">Professional advice tailored to your goals</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                     <Shield className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Secure Platform</h4>
//                     <p className="text-gray-600">Safe and regulated investment environment</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                     <Target className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Goal-Based Investing</h4>
//                     <p className="text-gray-600">Customized plans for your financial objectives</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// // Main MutualFundsPage Component
// const MutualFundsPage = () => {
//   const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
//   // Sample mutual fund companies
//   const allCompanies: Company[] = [
//     { id: "1", name: "HDFC Mutual Fund", logo_url: "/images/mutual-funds/hdfc.jpg", category: "large-cap" },
//     { id: "2", name: "ICICI Prudential", logo_url: "/images/mutual-funds/icici.jpg", category: "large-cap" },
//     { id: "3", name: "SBI Mutual Fund", logo_url: "/images/mutual-funds/sbi.jpg", category: "large-cap" },
//     { id: "4", name: "Tata Mutual Fund", logo_url: "/images/mutual-funds/tata.jpg", category: "large-cap" },
//     { id: "5", name: "Kotak Mutual Fund", logo_url: "/images/mutual-funds/kotak.jpg", category: "mid-cap" },
//     { id: "6", name: "Aditya Birla Sun Life", logo_url: "/images/mutual-funds/aditya-birla.jpg", category: "mid-cap" },
//     { id: "7", name: "Nippon India", logo_url: "/images/mutual-funds/nippon.jpg", category: "mid-cap" },
//     { id: "8", name: "Bajaj Mutual Fund", logo_url: "/images/mutual-funds/bajaj.jpg", category: "mid-cap" },
//     { id: "9", name: "Franklin Templeton", logo_url: "/images/mutual-funds/franklin.jpg", category: "debt" },
//     { id: "10", name: "DSP Mutual Fund", logo_url: "/images/mutual-funds/dsp.jpg", category: "hybrid" },
//     { id: "11", name: "Canara Robeco", logo_url: "/images/mutual-funds/canara.jpg", category: "debt" },
//   ];
//   // Mutual fund categories with enhanced data
//   const mutualFundCategories: CategoryWithSubcategories[] = [
//     {
//       id: "equity-funds",
//       name: "Equity Funds",
//       description: "Growth-oriented investments in stocks",
//       subcategories: [
//         { 
//           id: "large-cap", 
//           name: "Large Cap Funds", 
//           description: "Invest in established companies with large market capitalization. These funds offer stability and consistent returns by investing in well-established, financially sound companies.",
//           icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "large-cap")
//         },
//         { 
//           id: "mid-cap", 
//           name: "Mid Cap Funds", 
//           description: "Focus on medium-sized companies with high growth potential. These funds aim for higher returns by investing in companies that are beyond the startup phase and experiencing rapid growth.",
//           icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "mid-cap")
//         },
//       ],
//     },
//     {
//       id: "debt-funds",
//       name: "Debt Funds",
//       description: "Stable returns through fixed income instruments",
//       subcategories: [
//         { 
//           id: "liquid-funds", 
//           name: "Liquid Funds", 
//           description: "Short-term investments with high liquidity and stability. Ideal for parking surplus funds with minimal risk and easy withdrawal options.",
//           icon: <ChartLine className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "debt")
//         },
//         { 
//           id: "income-funds", 
//           name: "Income Funds", 
//           description: "Long-term debt investments for regular income generation. These funds invest in government securities, bonds, and other fixed income instruments.",
//           icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "debt")
//         },
//       ],
//     }
//   ];
//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />
//       <section className="flex-1 pt-28 md:pt-32 pb-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Enhanced Header with Better Color Contrast */}
//           <div className="text-center mb-12 md:mb-16">
//             <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-600/10 px-6 md:px-8 py-4 md:py-6 rounded-2xl border border-blue-300/30 mb-6 md:mb-8 backdrop-blur-sm">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3 md:mb-4">
//                 Mutual Fund Services
//               </h1>
//             </div>
//             <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
//               Partnering with India's leading fund houses to bring you the best investment opportunities
//             </p>
//           </div>
//           {/* Investment Categories - Moved directly below title */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
//             {mutualFundCategories.map((category) => (
//               <div key={category.id} className="bg-black/20 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="flex items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/30">
//                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4">
//                     {category.id === "equity-funds" ? (
//                       <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                     ) : (
//                       <ChartLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                     )}
//                   </div>
//                   <div>
//                     <h2 className="text-xl md:text-2xl font-bold text-white">{category.name}</h2>
//                     <p className="text-gray-300 text-xs md:text-sm">{category.description}</p>
//                   </div>
//                 </div>
//                 <div className="space-y-4 md:space-y-6">
//                   {category.subcategories.map((sub) => (
//                     <div
//                       key={sub.id}
//                       onClick={() => setSelectedSubCategory(sub)}
//                       className="cursor-pointer group rounded-xl p-4 md:p-5 bg-white/20 backdrop-blur border border-white/30 hover:border-blue-400/50 hover:shadow-md transition-all duration-300"
//                     >
//                       <div className="flex items-center">
//                         <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/30 group-hover:bg-blue-500/40 transition-colors mr-3 md:mr-4">
//                           {React.cloneElement(sub.icon as React.ReactElement, { 
//                             className: "w-4 h-4 md:w-6 md:h-6 text-blue-300" 
//                           })}
//                         </div>
//                         <div className="flex-grow">
//                           <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors text-sm md:text-base">
//                             {sub.name}
//                           </h4>
//                           <p className="text-gray-300 text-xs md:text-sm mt-1 line-clamp-2">
//                             {sub.description}
//                           </p>
//                         </div>
//                         <div className="text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Dual Marquee Section */}
//           <DualMarqueeSection />
//           {/* CTA Section */}
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-md mt-12 md:mt-16">
//             <ChartLine className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
//             <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Start Your Investment Journey</h2>
//             <p className="text-indigo-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
//               Our investment experts will help you build a portfolio that matches your financial goals and risk tolerance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
//               <Link href="/contact" className="block">
//                 <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors text-base md:text-lg flex items-center justify-center w-full sm:w-auto">
//                   <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
//                   Consult an Expert
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Modal for mutual fund details */}
//       {selectedSubCategory && (
//         <MutualFundInformationBox 
//           subCategory={selectedSubCategory} 
//           onClose={() => setSelectedSubCategory(null)} 
//         />
//       )}
//     </main>
//   );
// };
// export default MutualFundsPage;
// new theme
}),
"[project]/mokshainvestment/app/services/mutual-funds/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/services/mutual-funds/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__72e9b02a._.js.map