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
// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { TrendingUp, PieChart, Shield, Calendar, Clock, Building, Landmark, Percent, ArrowRight } from "lucide-react";
// // Initialize Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// type BondsNCD = {
//   id: string;
//   company_name: string;
//   issue_size: string | null;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   created_at: string;
// };
// type BondsFD = {
//   id: string;
//   bank_name: string;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   created_at: string;
// };
// const BondsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [bondsNCD, setBondsNCD] = useState<BondsNCD[]>([]);
//   const [bondsFD, setBondsFD] = useState<BondsFD[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
//   // Fetch bonds data from Supabase
//   useEffect(() => {
//     fetchBondsData();
//   }, []);
//   const fetchBondsData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       console.log("🟡 Fetching bonds data from Supabase...");
//       // Fetch NCD data
//       const { data: ncdData, error: ncdError } = await supabase
//         .from('bonds_ncd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (ncdError) {
//         console.error('❌ Error fetching NCD data:', ncdError);
//         setError('Failed to load NCD data');
//       } else {
//         console.log("✅ NCD data loaded:", ncdData);
//         setBondsNCD(ncdData || []);
//       }
//       // Fetch FD data
//       const { data: fdData, error: fdError } = await supabase
//         .from('bonds_fd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (fdError) {
//         console.error('❌ Error fetching FD data:', fdError);
//         setError('Failed to load FD data');
//       } else {
//         console.log("✅ FD data loaded:", fdData);
//         setBondsFD(fdData || []);
//       }
//     } catch (error) {
//       console.error('❌ Error in fetchBondsData:', error);
//       setError('An unexpected error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Get current bonds data based on active tab
//   const getCurrentBondsData = () => {
//     return activeTab === "ncd" ? bondsNCD : bondsFD;
//   };
//   // Fixed: Get image URL with proper Supabase storage path
//   const getImageUrl = (imagePath: string | null, bucket: string = 'bonds-images'): string => {
//     if (!imagePath) {
//       return '/images/bond/fallback.jpg';
//     }
//     // If it's already a full URL, return as is
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
//     // If it's just a filename, construct the proper Supabase storage URL
//     let filename = imagePath;
//     // Remove any existing bucket path if present
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     // Remove bucket prefix if present
//     filename = filename.replace(`${bucket}/`, '');
//     // Get public URL from Supabase storage
//     const { data } = supabase.storage
//       .from(bucket)
//       .getPublicUrl(filename);
//     console.log(`🖼️ Generated image URL for ${filename}:`, data.publicUrl);
//     return data.publicUrl;
//   };
//   // Fixed: Handle image error more gracefully
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
//     console.warn("⚠️ Image failed to load:", imageUrl);
//     if (imageUrl) {
//       setImageErrors(prev => new Set(prev).add(imageUrl));
//     }
//     // Use a proper fallback image
//     e.currentTarget.src = '/images/bond/fallback.jpg';
//     e.currentTarget.alt = 'Fallback image';
//     e.currentTarget.classList.add('opacity-50'); // Visual indicator for failed images
//   };
//   // FIXED: Auto-scroll every 8 seconds (increased from 5 seconds)
//   useEffect(() => {
//     const currentData = getCurrentBondsData();
//     if (currentData.length === 0 || currentData.length === 1) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % currentData.length);
//     }, 8000); // Changed from 5000 to 8000 milliseconds
//     return () => clearInterval(interval);
//   }, [activeTab, bondsNCD, bondsFD]);
//   // Reset index when tab changes
//   useEffect(() => {
//     setActiveIndex(0);
//   }, [activeTab]);
//   // Manual navigation
//   const goToNext = () => {
//     const currentData = getCurrentBondsData();
//     setActiveIndex((prev) => (prev + 1) % currentData.length);
//   };
//   const goToPrev = () => {
//     const currentData = getCurrentBondsData();
//     setActiveIndex((prev) => (prev === 0 ? currentData.length - 1 : prev - 1));
//   };
//   // Helper function to get bond name safely
//   const getBondName = (bond: BondsNCD | BondsFD | undefined, tab: "ncd" | "fd"): string => {
//     if (!bond) return "Loading...";
//     if (tab === "ncd") {
//       return (bond as BondsNCD).company_name;
//     } else {
//       return (bond as BondsFD).bank_name;
//     }
//   };
//   // Helper function to get issue size safely
//   const getIssueSize = (bond: BondsNCD | BondsFD | undefined, tab: "ncd" | "fd"): string | null => {
//     if (!bond) return null;
//     if (tab === "ncd") {
//       return (bond as BondsNCD).issue_size;
//     }
//     return null;
//   };
//   // Safe getter for bond properties
//   const getBondInterestRate = (bond: BondsNCD | BondsFD | undefined): number | null => {
//     return bond?.interest_rate || null;
//   };
//   const getBondTenure = (bond: BondsNCD | BondsFD | undefined): string | null => {
//     return bond?.tenure || null;
//   };
//   const getBondImageUrl = (bond: BondsNCD | BondsFD | undefined): string | null => {
//     return bond?.image_url || null;
//   };
//   const currentData = getCurrentBondsData();
//   const currentBond = currentData[activeIndex];
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-32 pb-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Enhanced Header matching Insurance page theme */}
//           <div className="text-center mb-16">
//             <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
//                 Bonds & Fixed Deposits
//               </h1>
//             </div>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
//               Discover secure investment options with predictable returns. 
//               Choose from our curated selection of NCDs and Fixed Deposits designed to grow your wealth safely.
//             </p>
//           </div>
//           {/* Highlights Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
//             >
//               <TrendingUp className="w-12 h-12 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white text-lg mb-3">Stable Growth</h4>
//               <p className="text-sm text-slate-200">
//                 Enjoy predictable, risk-adjusted returns over time with fixed income instruments.
//               </p>
//             </motion.div>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
//             >
//               <PieChart className="w-12 h-12 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white text-lg mb-3">Secure Returns</h4>
//               <p className="text-sm text-slate-200">
//                 Both NCDs and FDs prioritize capital safety while providing steady income streams.
//               </p>
//             </motion.div>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
//             >
//               <Shield className="w-12 h-12 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white text-lg mb-3">Capital Protection</h4>
//               <p className="text-sm text-slate-200">
//                 Lower risk profile compared to equities with focus on principal protection.
//               </p>
//             </motion.div>
//           </div>
//           {/* Tabs */}
//           <div className="flex justify-center mb-12 gap-6">
//             <button
//               onClick={() => setActiveTab("ncd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Non-Convertible Debentures ({bondsNCD.length})
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
//                 activeTab === "fd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Fixed Deposits ({bondsFD.length})
//             </button>
//           </div>
//           {/* Carousel Section */}
//           <div className="relative max-w-6xl mx-auto mb-24">
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-3xl font-bold text-center text-amber-400 mb-10"
//             >
//               {activeTab === "ncd" 
//                 ? "Non-Convertible Debentures (NCD)" 
//                 : "Fixed Deposits (FD)"
//               }
//             </motion.h2>
//             {loading ? (
//               <div className="text-center py-20">
//                 <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mb-4"></div>
//                 <p className="text-slate-300 text-lg">Loading investment options...</p>
//               </div>
//             ) : error ? (
//               <div className="text-center py-20 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
//                 <p className="text-rose-400 text-lg">{error}</p>
//                 <button 
//                   onClick={fetchBondsData}
//                   className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors cursor-pointer"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             ) : currentData.length > 0 && currentBond ? (
//               <>
//                 <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/20">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentBond.id}
//                       initial={{ opacity: 0, scale: 1.1 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.8, ease: "easeInOut" }}
//                       className="absolute inset-0 w-full h-full"
//                     >
//                       {/* FIXED: Background Image Container - Changed to object-contain to prevent stretching */}
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/40">
//                         <img
//                           src={getImageUrl(getBondImageUrl(currentBond))}
//                           alt={getBondName(currentBond, activeTab)}
//                           className="w-full h-full object-contain" // Changed from object-cover to object-contain
//                           onError={(e) => handleImageError(e, getBondImageUrl(currentBond))}
//                         />
//                       </div>
//                       {/* Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
//                       {/* Bond Info Overlay */}
//                       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
//                         <div className="max-w-2xl">
//                           {/* Status Badge */}
//                           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-amber-500/20 text-amber-400 border border-amber-500/30">
//                             <Clock className="w-4 h-4 mr-2" />
//                             Currently Accepting Investments
//                           </div>
//                           <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
//                             {getBondName(currentBond, activeTab)}
//                           </h3>
//                           {/* Bond Details */}
//                           <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm text-white/80 mb-4">
//                             {getBondInterestRate(currentBond) && (
//                               <div className="flex items-center">
//                                 <Percent className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
//                                 <span>
//                                   <strong>Interest Rate:</strong> {getBondInterestRate(currentBond)}% p.a.
//                                 </span>
//                               </div>
//                             )}
//                             {getBondTenure(currentBond) && (
//                               <div className="flex items-center">
//                                 <Calendar className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
//                                 <span>
//                                   <strong>Tenure:</strong> {getBondTenure(currentBond)}
//                                 </span>
//                               </div>
//                             )}
//                             {activeTab === "ncd" && getIssueSize(currentBond, activeTab) && (
//                               <div className="flex items-center">
//                                 <TrendingUp className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
//                                 <span>
//                                   <strong>Issue Size:</strong> {getIssueSize(currentBond, activeTab)}
//                                 </span>
//                               </div>
//                             )}
//                           </div>
//                           {/* Type Indicator */}
//                           <div className="text-slate-200 text-sm">
//                             {activeTab === "ncd" ? "Non-Convertible Debenture" : "Fixed Deposit"}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </AnimatePresence>
//                   {/* Navigation buttons */}
//                   {currentData.length > 1 && (
//                     <>
//                       <button
//                         onClick={goToPrev}
//                         className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm cursor-pointer"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={goToNext}
//                         className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm cursor-pointer"
//                       >
//                         ›
//                       </button>
//                     </>
//                   )}
//                   {/* Dots indicator */}
//                   {currentData.length > 1 && (
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//                       {currentData.map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => setActiveIndex(index)}
//                           className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all cursor-pointer ${
//                             index === activeIndex 
//                               ? 'bg-amber-400 scale-125' 
//                               : 'bg-white/50 hover:bg-white/70'
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 {/* Description */}
//                 <motion.p 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto"
//                 >
//                   {activeTab === "ncd"
//                     ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
//                     : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
//                 </motion.p>
//               </>
//             ) : (
//               <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
//                 <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {activeTab === "ncd" ? (
//                     <Building className="w-12 h-12 text-amber-400" />
//                   ) : (
//                     <Landmark className="w-12 h-12 text-amber-400" />
//                   )}
//                 </div>
//                 <p className="text-slate-400 text-lg mb-2">
//                   No {activeTab === "ncd" ? "NCDs" : "FDs"} available
//                 </p>
//                 <p className="text-slate-500 text-sm">
//                   Check back later for new investment opportunities
//                 </p>
//               </div>
//             )}
//           </div>
//           {/* Main CTA Section */}
//           <section className="py-20 bg-transparent">
//             <div className="max-w-7xl mx-auto px-6">
//               <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
//                 <ArrowRight className="w-16 h-16 mx-auto mb-6" />
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                   Ready to Begin Your Financial Journey?
//                 </h2>
//                 <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
//                   Our experienced team is here to guide you toward smarter, secure investments 
//                   tailored to your financial goals.
//                 </p>
//                 <div className="flex justify-center">
//                   <button
//                     onClick={() => (window.location.href = "/contact")}
//                     className="px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer"
//                   >
//                     Get Free Investment Consultation
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// removing carousel auto scroll
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