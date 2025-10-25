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

//  without any supabase connection
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
//   const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
//   // Reset to first slide when tab changes
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeTab]);
//   // Auto slide functionality
//   useEffect(() => {
//     if (charts.length <= 1) return;
//     const startAutoSlide = () => {
//       if (autoSlideRef.current) clearInterval(autoSlideRef.current);
//       autoSlideRef.current = setInterval(() => {
//         handleNext();
//       }, 5000);
//     };
//     startAutoSlide();
//     return () => {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//       }
//     };
//   }, [charts.length, currentIndex]);
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % charts.length);
//   };
//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + charts.length) % charts.length);
//   };
//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
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
//               capital. They're ideal for investors seeking steady income with low
//               to moderate risk exposure.
//             </p>
//           </div>
//           {/* Highlights */}
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
//           {/* New Fixed Carousel */}
//           <div className="relative max-w-6xl mx-auto mb-20">
//             <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
//               {activeTab === "ncd"
//                 ? "Non-Convertible Debentures (NCD)"
//                 : "Fixed Deposits (FD)"}
//             </h2>
//             <div className="relative">
//               {/* Carousel Container */}
//               <div className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6">
//                 <div className="relative h-[500px] flex items-center justify-center">
//                   {charts.map((src, index) => (
//                     <div
//                       key={index}
//                       className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center ${
//                         index === currentIndex ? "opacity-100" : "opacity-0"
//                       }`}
//                     >
//                       <img
//                         src={src}
//                         alt={`${activeTab} chart ${index + 1}`}
//                         className="max-w-full max-h-full object-contain rounded-xl"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 {/* Navigation Arrows */}
//                 {charts.length > 1 && (
//                   <>
//                     <button
//                       onClick={handlePrev}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-3 hover:bg-amber-300 transition-all shadow-lg"
//                     >
//                       <ChevronLeft className="w-6 h-6" />
//                     </button>
//                     <button
//                       onClick={handleNext}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-3 hover:bg-amber-300 transition-all shadow-lg"
//                     >
//                       <ChevronRight className="w-6 h-6" />
//                     </button>
//                   </>
//                 )}
//                 {/* Slide Indicators */}
//                 {charts.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                     {charts.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full transition-all ${
//                           index === currentIndex
//                             ? "bg-amber-400 scale-125"
//                             : "bg-white/50 hover:bg-white/70"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {/* Slide Counter */}
//               {charts.length > 1 && (
//                 <div className="text-center mt-4 text-slate-300">
//                   {currentIndex + 1} / {charts.length}
//                 </div>
//               )}
//               {/* Description */}
//               <p className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
//                 {activeTab === "ncd"
//                   ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
//                   : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
//               </p>
//             </div>
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
// v1 with supabase connection only little carousel issue else supbase connection is done
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion } from "framer-motion";
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
//   Building,
//   Landmark,
//   Percent,
//   Calendar,
// } from "lucide-react";
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
//   chart_data: any | null;
//   created_at: string;
// };
// type BondsFD = {
//   id: string;
//   bank_name: string;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   chart_data: any | null;
//   created_at: string;
// };
// const BondsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [bondsNCD, setBondsNCD] = useState<BondsNCD[]>([]);
//   const [bondsFD, setBondsFD] = useState<BondsFD[]>([]);
//   const [loading, setLoading] = useState(true);
//   const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
//   // Fetch bonds data from Supabase
//   useEffect(() => {
//     fetchBondsData();
//   }, []);
//   const fetchBondsData = async () => {
//     try {
//       setLoading(true);
//       // Fetch NCD data
//       const { data: ncdData, error: ncdError } = await supabase
//         .from('bonds_ncd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (ncdError) {
//         console.error('Error fetching NCD data:', ncdError);
//       } else {
//         setBondsNCD(ncdData || []);
//       }
//       // Fetch FD data
//       const { data: fdData, error: fdError } = await supabase
//         .from('bonds_fd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (fdError) {
//         console.error('Error fetching FD data:', fdError);
//       } else {
//         setBondsFD(fdData || []);
//       }
//     } catch (error) {
//       console.error('Error in fetchBondsData:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Get image URL from Supabase storage
//   const getImageUrl = (imagePath: string | null, bucket: string) => {
//     if (!imagePath) return null;
//     let filename = imagePath;
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     filename = filename.replace(`${bucket}/`, '');
//     const { data } = supabase.storage
//       .from(bucket)
//       .getPublicUrl(filename);
//     return data.publicUrl;
//   };
//   // Get charts for current tab
//   const getCharts = () => {
//     if (activeTab === "ncd") {
//       return bondsNCD
//         .filter(ncd => ncd.image_url)
//         .map(ncd => getImageUrl(ncd.image_url, 'bonds-images') || '');
//     } else {
//       return bondsFD
//         .filter(fd => fd.image_url)
//         .map(fd => getImageUrl(fd.image_url, 'bonds-images') || '');
//     }
//   };
//   const charts = getCharts();
//   // Reset to first slide when tab changes
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeTab]);
//   // Auto slide functionality
//   useEffect(() => {
//     if (charts.length <= 1) return;
//     const startAutoSlide = () => {
//       if (autoSlideRef.current) clearInterval(autoSlideRef.current);
//       autoSlideRef.current = setInterval(() => {
//         handleNext();
//       }, 5000);
//     };
//     startAutoSlide();
//     return () => {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//       }
//     };
//   }, [charts.length, currentIndex]);
//   const handleNext = () => {
//     if (charts.length === 0) return;
//     setCurrentIndex((prev) => (prev + 1) % charts.length);
//   };
//   const handlePrev = () => {
//     if (charts.length === 0) return;
//     setCurrentIndex((prev) => (prev - 1 + charts.length) % charts.length);
//   };
//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
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
//               capital. They're ideal for investors seeking steady income with low
//               to moderate risk exposure.
//             </p>
//           </div>
//           {/* Highlights */}
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
//               View NCDs ({bondsNCD.length})
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "fd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               View FDs ({bondsFD.length})
//             </button>
//           </div>
//           {/* Investment Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {(activeTab === "ncd" ? bondsNCD : bondsFD).map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:border-amber-400/50"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 bg-amber-500/20 rounded-lg">
//                     {activeTab === "ncd" ? (
//                       <Building className="w-6 h-6 text-amber-400" />
//                     ) : (
//                       <Landmark className="w-6 h-6 text-amber-400" />
//                     )}
//                   </div>
//                   <h3 className="font-bold text-white text-lg">
//                     {activeTab === "ncd" 
//                       ? (item as BondsNCD).company_name 
//                       : (item as BondsFD).bank_name
//                     }
//                   </h3>
//                 </div>
//                 <div className="space-y-3">
//                   {'issue_size' in item && item.issue_size && (
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-slate-300">Issue Size</span>
//                       <span className="text-amber-400 font-semibold">{item.issue_size}</span>
//                     </div>
//                   )}
//                   {item.interest_rate && (
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-slate-300">Interest Rate</span>
//                       <span className="text-green-400 font-semibold flex items-center gap-1">
//                         <Percent className="w-3 h-3" />
//                         {item.interest_rate}%
//                       </span>
//                     </div>
//                   )}
//                   {item.tenure && (
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-slate-300">Tenure</span>
//                       <span className="text-blue-400 font-semibold flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         {item.tenure}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 {item.image_url && (
//                   <div className="mt-4 rounded-lg overflow-hidden">
//                     <img
//                       src={getImageUrl(item.image_url, 'bonds-images') || ''}
//                       alt={activeTab === "ncd" 
//                         ? (item as BondsNCD).company_name 
//                         : (item as BondsFD).bank_name
//                       }
//                       className="w-full h-32 object-cover"
//                     />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//           {/* Carousel Section */}
//           {charts.length > 0 && (
//             <div className="relative max-w-6xl mx-auto mb-20">
//               <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
//                 {activeTab === "ncd"
//                   ? "Non-Convertible Debentures (NCD) Charts"
//                   : "Fixed Deposits (FD) Charts"}
//               </h2>
//               <div className="relative">
//                 {/* Carousel Container */}
//                 <div className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6">
//                   <div className="relative h-[500px] flex items-center justify-center">
//                     {charts.map((src, index) => (
//                       <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center ${
//                           index === currentIndex ? "opacity-100" : "opacity-0"
//                         }`}
//                       >
//                         <img
//                           src={src}
//                           alt={`${activeTab} chart ${index + 1}`}
//                           className="max-w-full max-h-full object-contain rounded-xl"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   {/* Navigation Arrows */}
//                   {charts.length > 1 && (
//                     <>
//                       <button
//                         onClick={handlePrev}
//                         className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-3 hover:bg-amber-300 transition-all shadow-lg"
//                       >
//                         <ChevronLeft className="w-6 h-6" />
//                       </button>
//                       <button
//                         onClick={handleNext}
//                         className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-3 hover:bg-amber-300 transition-all shadow-lg"
//                       >
//                         <ChevronRight className="w-6 h-6" />
//                       </button>
//                     </>
//                   )}
//                   {/* Slide Indicators */}
//                   {charts.length > 1 && (
//                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                       {charts.map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => goToSlide(index)}
//                           className={`w-3 h-3 rounded-full transition-all ${
//                             index === currentIndex
//                               ? "bg-amber-400 scale-125"
//                               : "bg-white/50 hover:bg-white/70"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 {/* Slide Counter */}
//                 {charts.length > 1 && (
//                   <div className="text-center mt-4 text-slate-300">
//                     {currentIndex + 1} / {charts.length}
//                   </div>
//                 )}
//                 {/* Description */}
//                 <p className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
//                   {activeTab === "ncd"
//                     ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
//                     : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
//                 </p>
//               </div>
//             </div>
//           )}
//           {/* Loading State */}
//           {loading && (
//             <div className="text-center py-12">
//               <div className="flex items-center justify-center space-x-3">
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
//                 <span className="text-slate-300 text-lg">Loading investment data...</span>
//               </div>
//             </div>
//           )}
//           {/* Empty State */}
//           {!loading && (activeTab === "ncd" ? bondsNCD : bondsFD).length === 0 && (
//             <div className="text-center py-12">
//               <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 max-w-2xl mx-auto">
//                 {activeTab === "ncd" ? (
//                   <Building className="w-16 h-16 text-slate-400 mx-auto mb-4" />
//                 ) : (
//                   <Landmark className="w-16 h-16 text-slate-400 mx-auto mb-4" />
//                 )}
//                 <h3 className="text-xl font-semibold text-slate-300 mb-2">
//                   No {activeTab === "ncd" ? "NCDs" : "FDs"} Available
//                 </h3>
//                 <p className="text-slate-400">
//                   Check back later for new investment opportunities.
//                 </p>
//               </div>
//             </div>
//           )}
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
// v2.1 enhanced carousel UI with supabase connection
//everything's wworking except for image in carousel thats it
// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { TrendingUp, PieChart, Shield, Calendar, Clock, Building, Landmark, Percent } from "lucide-react";
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
//   chart_data: any | null;
//   created_at: string;
// };
// type BondsFD = {
//   id: string;
//   bank_name: string;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   chart_data: any | null;
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
//       } else {
//         setBondsNCD(ncdData || []);
//       }
//       // Fetch FD data
//       const { data: fdData, error: fdError } = await supabase
//         .from('bonds_fd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (fdError) {
//         console.error('❌ Error fetching FD data:', fdError);
//       } else {
//         setBondsFD(fdData || []);
//       }
//       console.log("✅ Bonds data fetched - NCD:", ncdData?.length, "FD:", fdData?.length);
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
//   // Get image URL from Supabase storage
//   const getImageUrl = (imagePath: string | null) => {
//     if (!imagePath) {
//       return '/images/bond/fallback.jpg';
//     }
//     // If it's already a full URL, return as is
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
//     // Extract just the filename
//     let filename = imagePath;
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     // Remove any duplicate bucket names
//     filename = filename.replace('bonds-images/', '');
//     // Get public URL from Supabase
//     const { data } = supabase.storage
//       .from('bonds-images')
//       .getPublicUrl(filename);
//     return data.publicUrl;
//   };
//   // Handle image error
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
//     console.error("❌ Image failed to load:", imageUrl);
//     if (imageUrl) {
//       setImageErrors(prev => new Set(prev).add(imageUrl));
//     }
//     e.currentTarget.src = '/images/bond/fallback.jpg';
//   };
//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     const currentData = getCurrentBondsData();
//     if (currentData.length === 0 || currentData.length === 1) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % currentData.length);
//     }, 5000);
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
//   const currentData = getCurrentBondsData();
//   const currentBond = currentData[activeIndex];
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5"
//             >
//               Fixed Income Investments
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
//             >
//               Discover <strong>NCDs</strong> and <strong>Fixed Deposits</strong> that offer 
//               predictable returns and safeguard your capital. Ideal for investors seeking 
//               steady income with low to moderate risk exposure.
//             </motion.p>
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
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Non-Convertible Debentures ({bondsNCD.length})
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
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
//                   onClick={() => window.location.reload()}
//                   className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             ) : currentData.length > 0 ? (
//               <>
//                 <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentBond.id}
//                       initial={{ opacity: 0, scale: 1.1 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.8, ease: "easeInOut" }}
//                       className="absolute inset-0 w-full h-full"
//                     >
//                       <img
//                         src={getImageUrl(currentBond.image_url)}
//                         alt={activeTab === "ncd" ? currentBond.company_name : currentBond.bank_name}
//                         className="w-full h-full object-cover"
//                         onError={(e) => handleImageError(e, currentBond.image_url)}
//                         onLoad={() => console.log("✅ Image loaded successfully:", currentBond.image_url)}
//                       />
//                       {/* Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
//                       {/* Bond Info Overlay */}
//                       <div className="absolute bottom-0 left-0 right-0 p-8">
//                         <div className="max-w-2xl">
//                           {/* Type Badge */}
//                           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-amber-500/20 text-amber-400 border border-amber-500/30">
//                             {activeTab === "ncd" ? (
//                               <Building className="w-4 h-4 mr-2" />
//                             ) : (
//                               <Landmark className="w-4 h-4 mr-2" />
//                             )}
//                             {activeTab === "ncd" ? "Corporate Bond" : "Bank Deposit"}
//                           </div>
//                           <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
//                             {activeTab === "ncd" ? currentBond.company_name : currentBond.bank_name}
//                           </h3>
//                           {/* Bond Details */}
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                             {currentBond.interest_rate && (
//                               <div className="flex items-center text-lg">
//                                 <Percent className="w-5 h-5 mr-3 text-green-400" />
//                                 <div>
//                                   <span className="text-slate-300">Interest Rate: </span>
//                                   <span className="text-green-400 font-semibold">{currentBond.interest_rate}%</span>
//                                 </div>
//                               </div>
//                             )}
//                             {currentBond.tenure && (
//                               <div className="flex items-center text-lg">
//                                 <Calendar className="w-5 h-5 mr-3 text-blue-400" />
//                                 <div>
//                                   <span className="text-slate-300">Tenure: </span>
//                                   <span className="text-blue-400 font-semibold">{currentBond.tenure}</span>
//                                 </div>
//                               </div>
//                             )}
//                             {activeTab === "ncd" && (currentBond as BondsNCD).issue_size && (
//                               <div className="flex items-center text-lg md:col-span-2">
//                                 <TrendingUp className="w-5 h-5 mr-3 text-amber-400" />
//                                 <div>
//                                   <span className="text-slate-300">Issue Size: </span>
//                                   <span className="text-amber-400 font-semibold">{(currentBond as BondsNCD).issue_size}</span>
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                           {/* Additional Info */}
//                           <div className="flex items-center text-sm text-white/80">
//                             <Clock className="w-4 h-4 mr-2 text-amber-400" />
//                             <span>
//                               <strong>Available:</strong> Currently accepting investments
//                             </span>
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
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={goToNext}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
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
//                           className={`w-3 h-3 rounded-full transition-all ${
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
//           {/* CTA Section */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Secure Your Financial Future?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and Fixed Deposits based on your
//               financial goals, risk appetite, and investment horizon.
//             </p>
//             <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-lg">
//               Consult an Investment Advisor
//             </button>
//           </motion.div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// carousel can be a  bit better 
// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { TrendingUp, PieChart, Shield, Calendar, Clock, Building, Landmark, Percent } from "lucide-react";
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
//   chart_data: any | null;
//   created_at: string;
// };
// type BondsFD = {
//   id: string;
//   bank_name: string;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   chart_data: any | null;
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
//       } else {
//         setBondsNCD(ncdData || []);
//       }
//       // Fetch FD data
//       const { data: fdData, error: fdError } = await supabase
//         .from('bonds_fd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (fdError) {
//         console.error('❌ Error fetching FD data:', fdError);
//       } else {
//         setBondsFD(fdData || []);
//       }
//       console.log("✅ Bonds data fetched - NCD:", ncdData?.length, "FD:", fdData?.length);
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
//   // Get image URL from Supabase storage
//   const getImageUrl = (imagePath: string | null) => {
//     if (!imagePath) {
//       return '/images/bond/fallback.jpg';
//     }
//     // If it's already a full URL, return as is
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
//     // Extract just the filename
//     let filename = imagePath;
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     // Remove any duplicate bucket names
//     filename = filename.replace('bonds-images/', '');
//     // Get public URL from Supabase
//     const { data } = supabase.storage
//       .from('bonds-images')
//       .getPublicUrl(filename);
//     return data.publicUrl;
//   };
//   // Handle image error
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
//     console.error("❌ Image failed to load:", imageUrl);
//     if (imageUrl) {
//       setImageErrors(prev => new Set(prev).add(imageUrl));
//     }
//     e.currentTarget.src = '/images/bond/fallback.jpg';
//   };
//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     const currentData = getCurrentBondsData();
//     if (currentData.length === 0 || currentData.length === 1) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % currentData.length);
//     }, 5000);
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
//   const currentData = getCurrentBondsData();
//   const currentBond = currentData[activeIndex];
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5"
//             >
//               Fixed Income Investments
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
//             >
//               Discover <strong>NCDs</strong> and <strong>Fixed Deposits</strong> that offer 
//               predictable returns and safeguard your capital. Ideal for investors seeking 
//               steady income with low to moderate risk exposure.
//             </motion.p>
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
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Non-Convertible Debentures ({bondsNCD.length})
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
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
//                   onClick={() => window.location.reload()}
//                   className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             ) : currentData.length > 0 ? (
//               <>
//                 <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
//                   <div className="flex flex-col lg:flex-row min-h-[500px]">
//                     {/* Image Section - Left Side */}
//                     <div className="lg:w-1/2 flex items-center justify-center p-8 bg-black/20">
//                       <div className="relative w-full h-64 lg:h-80 flex items-center justify-center">
//                         <AnimatePresence mode="wait">
//                           <motion.div
//                             key={currentBond.id}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 1.1 }}
//                             transition={{ duration: 0.5, ease: "easeInOut" }}
//                             className="w-full h-full flex items-center justify-center"
//                           >
//                             <img
//                               src={getImageUrl(currentBond.image_url)}
//                               alt={activeTab === "ncd" ? currentBond.company_name : currentBond.bank_name}
//                               className="max-w-full max-h-full object-contain rounded-lg"
//                               onError={(e) => handleImageError(e, currentBond.image_url)}
//                               onLoad={() => console.log("✅ Image loaded successfully:", currentBond.image_url)}
//                             />
//                           </motion.div>
//                         </AnimatePresence>
//                       </div>
//                     </div>
//                     {/* Information Section - Right Side */}
//                     <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-slate-900/80 to-purple-900/40">
//                       <AnimatePresence mode="wait">
//                         <motion.div
//                           key={currentBond.id}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           transition={{ duration: 0.5, ease: "easeInOut" }}
//                         >
//                           {/* Type Badge */}
//                           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-amber-500/20 text-amber-400 border border-amber-500/30">
//                             {activeTab === "ncd" ? (
//                               <>
//                                 <Building className="w-4 h-4 mr-2" />
//                                 Corporate Bond
//                               </>
//                             ) : (
//                               <>
//                                 <Landmark className="w-4 h-4 mr-2" />
//                                 Bank Deposit
//                               </>
//                             )}
//                           </div>
//                           {/* Bond Name */}
//                           <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                             {activeTab === "ncd" ? currentBond.company_name : currentBond.bank_name}
//                           </h3>
//                           {/* Bond Details */}
//                           <div className="space-y-4 mb-6">
//                             {currentBond.interest_rate && (
//                               <div className="flex items-center text-lg">
//                                 <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
//                                   <Percent className="w-5 h-5 text-green-400" />
//                                 </div>
//                                 <div>
//                                   <div className="text-slate-300 text-sm">Interest Rate</div>
//                                   <div className="text-green-400 font-semibold text-xl">{currentBond.interest_rate}% p.a.</div>
//                                 </div>
//                               </div>
//                             )}
//                             {currentBond.tenure && (
//                               <div className="flex items-center text-lg">
//                                 <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
//                                   <Calendar className="w-5 h-5 text-blue-400" />
//                                 </div>
//                                 <div>
//                                   <div className="text-slate-300 text-sm">Tenure</div>
//                                   <div className="text-blue-400 font-semibold text-xl">{currentBond.tenure}</div>
//                                 </div>
//                               </div>
//                             )}
//                             {activeTab === "ncd" && (currentBond as BondsNCD).issue_size && (
//                               <div className="flex items-center text-lg">
//                                 <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mr-4">
//                                   <TrendingUp className="w-5 h-5 text-amber-400" />
//                                 </div>
//                                 <div>
//                                   <div className="text-slate-300 text-sm">Issue Size</div>
//                                   <div className="text-amber-400 font-semibold text-xl">{(currentBond as BondsNCD).issue_size}</div>
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                           {/* Status */}
//                           <div className="flex items-center text-sm text-white/80 border-t border-white/10 pt-4">
//                             <Clock className="w-4 h-4 mr-2 text-amber-400" />
//                             <span>
//                               <strong>Available:</strong> Currently accepting investments
//                             </span>
//                           </div>
//                         </motion.div>
//                       </AnimatePresence>
//                     </div>
//                   </div>
//                   {/* Navigation buttons */}
//                   {currentData.length > 1 && (
//                     <>
//                       <button
//                         onClick={goToPrev}
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={goToNext}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
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
//                           className={`w-3 h-3 rounded-full transition-all ${
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
//           {/* CTA Section */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Secure Your Financial Future?
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and Fixed Deposits based on your
//               financial goals, risk appetite, and investment horizon.
//             </p>
//             <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-lg">
//               Consult an Investment Advisor
//             </button>
//           </motion.div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// looks mid
// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { TrendingUp, PieChart, Shield, Calendar, Clock, Building, Landmark, Percent } from "lucide-react";
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
//   chart_data: any | null;
//   created_at: string;
// };
// type BondsFD = {
//   id: string;
//   bank_name: string;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   chart_data: any | null;
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
//       } else {
//         setBondsNCD(ncdData || []);
//       }
//       // Fetch FD data
//       const { data: fdData, error: fdError } = await supabase
//         .from('bonds_fd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (fdError) {
//         console.error('❌ Error fetching FD data:', fdError);
//       } else {
//         setBondsFD(fdData || []);
//       }
//       console.log("✅ Bonds data fetched - NCD:", ncdData?.length, "FD:", fdData?.length);
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
//   // Get image URL from Supabase storage
//   const getImageUrl = (imagePath: string | null) => {
//     if (!imagePath) {
//       return '/images/bond/fallback.jpg';
//     }
//     // If it's already a full URL, return as is
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
//     // Extract just the filename
//     let filename = imagePath;
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     // Remove any duplicate bucket names
//     filename = filename.replace('bonds-images/', '');
//     // Get public URL from Supabase
//     const { data } = supabase.storage
//       .from('bonds-images')
//       .getPublicUrl(filename);
//     return data.publicUrl;
//   };
//   // Handle image error
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
//     console.error("❌ Image failed to load:", imageUrl);
//     if (imageUrl) {
//       setImageErrors(prev => new Set(prev).add(imageUrl));
//     }
//     e.currentTarget.src = '/images/bond/fallback.jpg';
//   };
//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     const currentData = getCurrentBondsData();
//     if (currentData.length === 0 || currentData.length === 1) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % currentData.length);
//     }, 5000);
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
//   const currentData = getCurrentBondsData();
//   const currentBond = currentData[activeIndex];
//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5"
//             >
//               Fixed Income Investments
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
//             >
//               Discover <strong>NCDs</strong> and <strong>Fixed Deposits</strong> that offer 
//               predictable returns and safeguard your capital. Ideal for investors seeking 
//               steady income with low to moderate risk exposure.
//             </motion.p>
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
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "ncd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Non-Convertible Debentures ({bondsNCD.length})
//             </button>
//             <button
//               onClick={() => setActiveTab("fd")}
//               className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeTab === "fd"
//                   ? "bg-amber-400 text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Fixed Deposits ({bondsFD.length})
//             </button>
//           </div>
//           {/* Carousel Section - Fixed image display */}
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
//                   onClick={() => window.location.reload()}
//                   className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             ) : currentData.length > 0 ? (
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
//                       {/* Background Image Container */}
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <img
//                           src={getImageUrl(currentBond.image_url)}
//                           alt={activeTab === "ncd" ? currentBond.company_name : currentBond.bank_name}
//                           className="w-full h-full object-contain md:object-cover"
//                           onError={(e) => handleImageError(e, currentBond.image_url)}
//                           onLoad={() => console.log("✅ Image loaded successfully:", currentBond.image_url)}
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
//                             {activeTab === "ncd" ? currentBond.company_name : currentBond.bank_name}
//                           </h3>
//                           {/* Bond Details */}
//                           <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm text-white/80 mb-4">
//                             {currentBond.interest_rate && (
//                               <div className="flex items-center">
//                                 <Percent className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
//                                 <span>
//                                   <strong>Interest Rate:</strong> {currentBond.interest_rate}% p.a.
//                                 </span>
//                               </div>
//                             )}
//                             {currentBond.tenure && (
//                               <div className="flex items-center">
//                                 <Calendar className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
//                                 <span>
//                                   <strong>Tenure:</strong> {currentBond.tenure}
//                                 </span>
//                               </div>
//                             )}
//                             {activeTab === "ncd" && (currentBond as BondsNCD).issue_size && (
//                               <div className="flex items-center">
//                                 <TrendingUp className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
//                                 <span>
//                                   <strong>Issue Size:</strong> {(currentBond as BondsNCD).issue_size}
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
//                         className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={goToNext}
//                         className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
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
//                           className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
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
//           {/* CTA Section */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl max-w-5xl mx-auto"
//           >
//             <h2 className="text-2xl md:text-4xl font-bold mb-4">
//               Ready to Secure Your Financial Future?
//             </h2>
//             <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
//               Our experts will help you choose between NCDs and Fixed Deposits based on your
//               financial goals, risk appetite, and investment horizon.
//             </p>
//             <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-base md:text-lg">
//               Consult an Investment Advisor
//             </button>
//           </motion.div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// };
// export default BondsPage;
// trying all new carousel section
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