// // looks mid

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
//             <button  onClick={() => window.location.href = '/contact'} className="cursor-pointer px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-base md:text-lg">
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














"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { TrendingUp, PieChart, Shield, Calendar, Clock, Building, Landmark, Percent } from "lucide-react";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type BondsNCD = {
  id: string;
  company_name: string;
  issue_size: string | null;
  interest_rate: number | null;
  tenure: string | null;
  image_url: string | null;
  created_at: string;
};

type BondsFD = {
  id: string;
  bank_name: string;
  interest_rate: number | null;
  tenure: string | null;
  image_url: string | null;
  created_at: string;
};

const BondsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
  const [activeIndex, setActiveIndex] = useState(0);
  const [bondsNCD, setBondsNCD] = useState<BondsNCD[]>([]);
  const [bondsFD, setBondsFD] = useState<BondsFD[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Fetch bonds data from Supabase
  useEffect(() => {
    fetchBondsData();
  }, []);

  const fetchBondsData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log("🟡 Fetching bonds data from Supabase...");
      
      // Fetch NCD data
      const { data: ncdData, error: ncdError } = await supabase
        .from('bonds_ncd')
        .select('*')
        .order('created_at', { ascending: false });

      if (ncdError) {
        console.error('❌ Error fetching NCD data:', ncdError);
        setError('Failed to load NCD data');
      } else {
        console.log("✅ NCD data loaded:", ncdData);
        setBondsNCD(ncdData || []);
      }

      // Fetch FD data
      const { data: fdData, error: fdError } = await supabase
        .from('bonds_fd')
        .select('*')
        .order('created_at', { ascending: false });

      if (fdError) {
        console.error('❌ Error fetching FD data:', fdError);
        setError('Failed to load FD data');
      } else {
        console.log("✅ FD data loaded:", fdData);
        setBondsFD(fdData || []);
      }
      
    } catch (error) {
      console.error('❌ Error in fetchBondsData:', error);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Get current bonds data based on active tab
  const getCurrentBondsData = () => {
    return activeTab === "ncd" ? bondsNCD : bondsFD;
  };

  // Get image URL - simplified version
  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) {
      return '/images/bond/fallback.jpg';
    }

    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // For local images, just return the path
    return imagePath;
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
    console.error("❌ Image failed to load:", imageUrl);
    
    if (imageUrl) {
      setImageErrors(prev => new Set(prev).add(imageUrl));
    }
    
    e.currentTarget.src = '/images/bond/fallback.jpg';
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const currentData = getCurrentBondsData();
    if (currentData.length === 0 || currentData.length === 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currentData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeTab, bondsNCD, bondsFD]);

  // Reset index when tab changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  // Manual navigation
  const goToNext = () => {
    const currentData = getCurrentBondsData();
    setActiveIndex((prev) => (prev + 1) % currentData.length);
  };

  const goToPrev = () => {
    const currentData = getCurrentBondsData();
    setActiveIndex((prev) => (prev === 0 ? currentData.length - 1 : prev - 1));
  };

  // Helper function to get bond name safely
  const getBondName = (bond: BondsNCD | BondsFD, tab: "ncd" | "fd"): string => {
    if (tab === "ncd") {
      return (bond as BondsNCD).company_name;
    } else {
      return (bond as BondsFD).bank_name;
    }
  };

  // Helper function to get issue size safely
  const getIssueSize = (bond: BondsNCD | BondsFD, tab: "ncd" | "fd"): string | null => {
    if (tab === "ncd") {
      return (bond as BondsNCD).issue_size;
    }
    return null;
  };

  const currentData = getCurrentBondsData();
  const currentBond = currentData[activeIndex];

  return (
    <main className="flex flex-col min-h-screen text-white">
      <BgComponent />
      <Navbar />

      <section className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5"
            >
              Fixed Income Investments
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover <strong>NCDs</strong> and <strong>Fixed Deposits</strong> that offer 
              predictable returns and safeguard your capital. Ideal for investors seeking 
              steady income with low to moderate risk exposure.
            </motion.p>
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <TrendingUp className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white text-lg mb-3">Stable Growth</h4>
              <p className="text-sm text-slate-200">
                Enjoy predictable, risk-adjusted returns over time with fixed income instruments.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <PieChart className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white text-lg mb-3">Secure Returns</h4>
              <p className="text-sm text-slate-200">
                Both NCDs and FDs prioritize capital safety while providing steady income streams.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Shield className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white text-lg mb-3">Capital Protection</h4>
              <p className="text-sm text-slate-200">
                Lower risk profile compared to equities with focus on principal protection.
              </p>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 gap-6">
            <button
              onClick={() => setActiveTab("ncd")}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === "ncd"
                  ? "bg-amber-400 text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Non-Convertible Debentures ({bondsNCD.length})
            </button>
            <button
              onClick={() => setActiveTab("fd")}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === "fd"
                  ? "bg-amber-400 text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Fixed Deposits ({bondsFD.length})
            </button>
          </div>

          {/* Carousel Section */}
          <div className="relative max-w-6xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center text-amber-400 mb-10"
            >
              {activeTab === "ncd" 
                ? "Non-Convertible Debentures (NCD)" 
                : "Fixed Deposits (FD)"
              }
            </motion.h2>

            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mb-4"></div>
                <p className="text-slate-300 text-lg">Loading investment options...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                <p className="text-rose-400 text-lg">{error}</p>
                <button 
                  onClick={fetchBondsData}
                  className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            ) : currentData.length > 0 ? (
              <>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBond.id}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Background Image Container */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={getImageUrl(currentBond.image_url)}
                          alt={getBondName(currentBond, activeTab)}
                          className="w-full h-full object-contain md:object-cover"
                          onError={(e) => handleImageError(e, currentBond.image_url)}
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      
                      {/* Bond Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="max-w-2xl">
                          {/* Status Badge */}
                          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            <Clock className="w-4 h-4 mr-2" />
                            Currently Accepting Investments
                          </div>

                          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                            {getBondName(currentBond, activeTab)}
                          </h3>

                          {/* Bond Details */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm text-white/80 mb-4">
                            {currentBond.interest_rate && (
                              <div className="flex items-center">
                                <Percent className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
                                <span>
                                  <strong>Interest Rate:</strong> {currentBond.interest_rate}% p.a.
                                </span>
                              </div>
                            )}
                            {currentBond.tenure && (
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
                                <span>
                                  <strong>Tenure:</strong> {currentBond.tenure}
                                </span>
                              </div>
                            )}
                            {activeTab === "ncd" && getIssueSize(currentBond, activeTab) && (
                              <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
                                <span>
                                  <strong>Issue Size:</strong> {getIssueSize(currentBond, activeTab)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Type Indicator */}
                          <div className="text-slate-200 text-sm">
                            {activeTab === "ncd" ? "Non-Convertible Debenture" : "Fixed Deposit"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation buttons */}
                  {currentData.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm cursor-pointer"
                      >
                        ‹
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm cursor-pointer"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Dots indicator */}
                  {currentData.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {currentData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all cursor-pointer ${
                            index === activeIndex 
                              ? 'bg-amber-400 scale-125' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto"
                >
                  {activeTab === "ncd"
                    ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
                    : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
                </motion.p>
              </>
            ) : (
              <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === "ncd" ? (
                    <Building className="w-12 h-12 text-amber-400" />
                  ) : (
                    <Landmark className="w-12 h-12 text-amber-400" />
                  )}
                </div>
                <p className="text-slate-400 text-lg mb-2">
                  No {activeTab === "ncd" ? "NCDs" : "FDs"} available
                </p>
                <p className="text-slate-500 text-sm">
                  Check back later for new investment opportunities
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl max-w-5xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Our experts will help you choose between NCDs and Fixed Deposits based on your
              financial goals, risk appetite, and investment horizon.
            </p>
            <button onClick={() => window.location.href = '/contact'} className="cursor-pointer px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-base md:text-lg">
              Consult an Investment Advisor
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BondsPage;