module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/services/insurance/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/services/insurance/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import React, { useState, ReactNode, useRef, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Heart, Plus, Car, Store, Plane, Shield, X, Phone, Mail, Clock, CheckCircle, Star } from "lucide-react";
// interface Company {
//   id: string;
//   name: string;
//   logo_url: string;
//   category: string;
// }
// interface SubCategory {
//   id: string;
//   name: string;
//   description: string;
//   icon: ReactNode;
//   features?: string[];
// }
// interface CategoryWithSubcategories {
//   id: string;
//   name: string;
//   description: string;
//   subcategories: SubCategory[];
// }
// // Enhanced dummy companies with mixed categories
// const allCompanies: Company[] = [
//   // Life Insurance Companies
//   { id: "1", name: "LifeSecure", logo_url: "/images/insurance/lic.jpg  ", category: "life" },
//   { id: "2", name: "Guardian Life", logo_url: "/dummy-logo.png", category: "life" },
//   { id: "3", name: "FutureProtect", logo_url: "/dummy-logo.png", category: "life" },
//   { id: "4", name: "FamilyShield", logo_url: "/dummy-logo.png", category: "life" },
//   { id: "5", name: "SecurePlus", logo_url: "/dummy-logo.png", category: "life" },
//   // Health Insurance Companies
//   { id: "6", name: "MediCare Plus", logo_url: "/dummy-logo.png", category: "health" },
//   { id: "7", name: "HealthFirst", logo_url: "/dummy-logo.png", category: "health" },
//   { id: "8", name: "Wellness Pro", logo_url: "/dummy-logo.png", category: "health" },
//   { id: "9", name: "DoctorSafe", logo_url: "/dummy-logo.png", category: "health" },
//   { id: "10", name: "MediGuard", logo_url: "/dummy-logo.png", category: "health" },
//   // General Insurance
//   { id: "11", name: "InsureCorp", logo_url: "/dummy-logo.png", category: "general" },
//   { id: "12", name: "SafeGuard Ltd", logo_url: "/dummy-logo.png", category: "general" },
//   { id: "13", name: "ProtectAll", logo_url: "/dummy-logo.png", category: "general" },
//   { id: "14", name: "TrustShield", logo_url: "/dummy-logo.png", category: "general" },
// ];
// // Enhanced Infinite Logo Marquee Component with Auto-scroll and Hover Pause
// const InfiniteLogoMarquee = () => {
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const animationRef = useRef<number>();
//   // Duplicate the companies array to create seamless loop
//   const duplicatedCompanies = [...allCompanies, ...allCompanies];
//   // Auto-scroll animation
//   useEffect(() => {
//     const content = contentRef.current;
//     if (!content) return;
//     let animationId: number;
//     const speed = 0.5; // Adjust speed here
//     let position = 0;
//     const animate = () => {
//       if (!isHovered && content) {
//         position -= speed;
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
//   }, [isHovered, duplicatedCompanies.length]);
//   return (
//     <section className="py-16 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-sm mb-6">
//             <Star className="w-5 h-5 text-amber-400" />
//             <span className="text-base font-semibold text-white">Trusted by Industry Leaders</span>
//             <Star className="w-5 h-5 text-amber-400" />
//           </div>
//           <h3 className="text-3xl font-bold text-white mb-4">
//             Partnered with 50+ Insurance Providers
//           </h3>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
//             We work with the most reputable insurance companies to bring you the best coverage options
//           </p>
//         </div>
//         {/* Marquee Container */}
//         <div 
//           className="relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Removed gradient overlays */}
//           {/* Marquee Content */}
//           <div 
//             ref={marqueeRef}
//             className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
//           >
//             <div 
//               ref={contentRef}
//               className="flex gap-12 items-center"
//               style={{ willChange: 'transform' }}
//             >
//               {duplicatedCompanies.map((company, index) => (
//                 <div
//                   key={`${company.id}-${index}`}
//                   className="flex-shrink-0 group relative"
//                 >
//                   <div className="w-40 h-24 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-5 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-amber-400/30 group-hover:scale-105 group-hover:bg-white/20">
//                     {/* Glow effect on hover */}
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
//                     <img
//                       src={company.logo_url || "/dummy-logo.png"}
//                       alt={company.name}
//                       className="relative z-10 w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:brightness-110"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Enhanced Stats Section with Bigger Text */}
//         <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 max-w-2xl mx-auto">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-amber-400 mb-3">50+</div>
//             <div className="text-base text-gray-200 font-medium">Insurance Partners</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-amber-400 mb-3">1M+</div>
//             <div className="text-base text-gray-200 font-medium">Policies Sold</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-amber-400 mb-3">24/7</div>
//             <div className="text-base text-gray-200 font-medium">Claims Support</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// // Clean Modal Component without Logos (unchanged)
// const CategoryDetailModal = ({ 
//   subCategory, 
//   onClose 
// }: { 
//   subCategory: SubCategory; 
//   onClose: () => void; 
// }) => {
//   if (!subCategory) return null;
//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 mr-4">
//               {React.cloneElement(subCategory.icon as React.ReactElement, { className: "w-8 h-8 text-indigo-600" })}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">{subCategory.name}</h2>
//               <p className="text-gray-500 text-sm mt-1">Complete protection for your needs</p>
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
//         {/* Content - Clean without logos */}
//         <div className="p-6">
//           <div className="space-y-6">
//             {/* Description */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Coverage</h3>
//               <p className="text-gray-700 leading-relaxed">{subCategory.description}</p>
//             </div>
//             {/* Key Features */}
//             {subCategory.features && (
//               <div>
//                 <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
//                 <ul className="space-y-3">
//                   {subCategory.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* CTA Section */}
//             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
//               <h4 className="font-bold text-lg mb-2">Ready to Get Protected?</h4>
//               <p className="text-indigo-100 mb-4 text-sm">
//                 Our specialists will find the perfect coverage tailored to your needs and budget.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="flex-1 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center">
//                   <Phone className="w-4 h-4 mr-2" />
//                   Get Free Consultation
//                 </button>
//                 <button className="flex-1 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
//                   <Mail className="w-4 h-4 mr-2" />
//                   Get Quote via Email
//                 </button>
//               </div>
//             </div>
//             {/* Additional Benefits */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
//               <div className="text-center p-4 bg-gray-50 rounded-xl">
//                 <Clock className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
//                 <h5 className="font-semibold text-gray-800 text-sm">Quick Process</h5>
//                 <p className="text-gray-600 text-xs">Policy in 24 hours</p>
//               </div>
//               <div className="text-center p-4 bg-gray-50 rounded-xl">
//                 <Shield className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
//                 <h5 className="font-semibold text-gray-800 text-sm">Expert Advice</h5>
//                 <p className="text-gray-600 text-xs">Personalized guidance</p>
//               </div>
//               <div className="text-center p-4 bg-gray-50 rounded-xl">
//                 <CheckCircle className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
//                 <h5 className="font-semibold text-gray-800 text-sm">Claims Support</h5>
//                 <p className="text-gray-600 text-xs">End-to-end assistance</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// // Main InsurancePage Component
// const InsurancePage = () => {
//   const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
//   const insuranceCategories: CategoryWithSubcategories[] = [
//     {
//       id: "personal",
//       name: "Personal Insurance",
//       description: "Protection for you and your family's future",
//       subcategories: [
//         { 
//           id: "life", 
//           name: "Life Insurance", 
//           description: "Secure your family's financial future with comprehensive life insurance plans that provide financial stability and peace of mind. Our plans offer flexible coverage options, tax benefits, and additional riders for complete protection.",
//           icon: <Heart className="w-8 h-8 text-indigo-600" />,
//           features: [
//             "Flexible coverage amounts from ₹10L to ₹5Cr",
//             "Critical illness protection included",
//             "Tax benefits under Section 80C & 10(10D)",
//             "Additional riders for enhanced protection",
//             "Long-term financial security up to 99 years"
//           ]
//         },
//         { 
//           id: "mediclaim", 
//           name: "Health Insurance", 
//           description: "Comprehensive health coverage for you and your family with cashless treatment across 10,000+ hospitals nationwide. Protect your savings from medical emergencies with our extensive health insurance plans.",
//           icon: <Plus className="w-8 h-8 text-indigo-600" />,
//           features: [
//             "Cashless hospitalization at 10,000+ network hospitals",
//             "Pre and post hospitalization cover up to 60 days",
//             "Annual health check-ups included",
//             "No claim bonus up to 100%",
//             "Cover for pre-existing diseases after waiting period"
//           ]
//         },
//         { 
//           id: "travel", 
//           name: "Travel Insurance", 
//           description: "Travel with confidence knowing you're protected against unforeseen circumstances. Our travel insurance covers medical emergencies, trip cancellations, lost baggage, and more for domestic and international travel.",
//           icon: <Plane className="w-8 h-8 text-indigo-600" />,
//           features: [
//             "Emergency medical coverage up to $500,000",
//             "Trip cancellation and interruption protection",
//             "Lost baggage and personal effects compensation",
//             "Personal liability coverage up to $1,000,000",
//             "24/7 emergency assistance worldwide"
//           ]
//         },
//       ],
//     },
//     {
//       id: "property",
//       name: "Property Insurance",
//       description: "Protection for your assets and investments",
//       subcategories: [
//         { 
//           id: "car", 
//           name: "Car Insurance", 
//           description: "Comprehensive protection for your vehicle against accidents, theft, and natural disasters. Our car insurance policies offer cashless repairs, quick claim settlement, and additional coverage options for complete peace of mind.",
//           icon: <Car className="w-8 h-8 text-indigo-600" />,
//           features: [
//             "Own damage and third party liability coverage",
//             "Cashless repairs at 4,000+ network garages",
//             "Quick claim settlement within 7 days",
//             "Add-on covers like zero depreciation, engine protection",
//             "No claim bonus up to 50%"
//           ]
//         },
//         { 
//           id: "business", 
//           name: "Business Insurance", 
//           description: "Safeguard your business against unexpected events with comprehensive coverage solutions. Protect your assets, employees, and operations from various risks that could impact your business continuity and growth.",
//           icon: <Store className="w-8 h-8 text-indigo-600" />,
//           features: [
//             "Property and asset protection against fire & theft",
//             "Business interruption coverage for revenue loss",
//             "Liability protection for third-party injuries",
//             "Equipment breakdown and cyber attack coverage",
//             "Customizable policy options for different industries"
//           ]
//         },
//       ],
//     }
//   ];
//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />
//       <section className="flex-1 pt-32 pb-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Enhanced Header with Better Color Contrast */}
//           <div className="text-center mb-16">
//             <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-8 py-6 rounded-2xl border border-blue-200/30 mb-8 backdrop-blur-sm">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//                 Insurance Services
//               </h1>
//             </div>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
//               Comprehensive protection solutions for every aspect of your life. 
//               Choose from our wide range of insurance products designed to secure your future.
//             </p>
//           </div>
//           {/* Insurance Categories with More Opaque Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             {insuranceCategories.map((category) => (
//               <div key={category.id} className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="flex items-center mb-6 pb-4 border-b border-white/30">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
//                     {category.id === "personal" ? (
//                       <Heart className="w-6 h-6 text-white" />
//                     ) : (
//                       <Shield className="w-6 h-6 text-white" />
//                     )}
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">{category.name}</h2>
//                     <p className="text-gray-200 text-sm">{category.description}</p>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   {category.subcategories.map((sub) => (
//                     <div
//                       key={sub.id}
//                       onClick={() => setSelectedSubCategory(sub)}
//                       className="cursor-pointer group rounded-xl p-5 bg-white/20 backdrop-blur border border-white/30 hover:border-blue-400/50 hover:shadow-md transition-all duration-300"
//                     >
//                       <div className="flex items-center">
//                         <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/30 group-hover:bg-blue-500/40 transition-colors mr-4">
//                           {React.cloneElement(sub.icon as React.ReactElement, { 
//                             className: "w-6 h-6 text-blue-300" 
//                           })}
//                         </div>
//                         <div className="flex-grow">
//                           <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
//                             {sub.name}
//                           </h4>
//                           <p className="text-gray-200 text-sm mt-1 line-clamp-2">
//                             {sub.description}
//                           </p>
//                         </div>
//                         <div className="text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <Plus className="w-5 h-5" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Enhanced Infinite Logo Marquee without Black Sections */}
//         <InfiniteLogoMarquee />
//         {/* Main CTA Section with Original Background */}
//         <div className="max-w-7xl mx-auto px-6 mt-8">
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center text-white shadow-xl">
//             <Shield className="w-16 h-16 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Find Your Perfect Coverage?
//             </h2>
//             <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
//               Our insurance experts will analyze your needs and recommend the best policies 
//               from our 50+ partner companies to ensure you get optimal protection.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg">
//                 Get Free Insurance Analysis
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
//                 Compare Policy Quotes
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Modal for Category Details */}
//       {selectedSubCategory && (
//         <CategoryDetailModal 
//           subCategory={selectedSubCategory} 
//           onClose={() => setSelectedSubCategory(null)} 
//         />
//       )}
//     </main>
//   );
// };
// export default InsurancePage;
}),
"[project]/mokshainvestment/app/services/insurance/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/services/insurance/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f1c6bf3._.js.map