// "use client";

// import React, { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { TrendingUp, PieChart, Shield } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const UpcomingNFOPage: React.FC = () => {
//   const [nfoData, setNfoData] = useState<any[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // 🔹 Fetch data (mock for now)
//   useEffect(() => {
//     setNfoData([
//       {
//         id: 1,
//         fund_name: "ABC Bluechip Fund",
//         category: "Large Cap Equity",
//         launch_date: "2025-10-15",
//         close_date: "2025-10-30",
//         min_investment: "₹5,000",
//         image_url: "/images/nfo/nfo1.jpg",
//       },
//       {
//         id: 2,
//         fund_name: "XYZ Balanced Advantage Fund",
//         category: "Hybrid",
//         launch_date: "2025-10-20",
//         close_date: "2025-11-05",
//         min_investment: "₹1,000",
//         image_url: "/images/nfo/nfo2.jpg",
//       },
//       {
//         id: 3,
//         fund_name: "PQR Flexi Cap Fund",
//         category: "Multi Cap",
//         launch_date: "2025-11-01",
//         close_date: "2025-11-15",
//         min_investment: "₹500",
//         image_url: "/images/nfo/nfo3.jpg",
//       },
//     ]);
//   }, []);

//   // 🔄 Auto-scroll every 4 seconds
//   useEffect(() => {
//     if (nfoData.length === 0) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % nfoData.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [nfoData]);

//   return (
//     <main className="flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <Navbar />

//       {/* 🟡 Hero Section */}
//       <section className="flex-1 pt-28 pb-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5">
//               Upcoming Mutual Fund NFOs
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//               Discover <strong>New Fund Offers (NFOs)</strong> that give you early
//               access to innovative investment ideas across sectors and strategies.
//               Stay informed and invest smartly as new opportunities open up.
//             </p>
//           </div>

//           {/* 🟡 Highlights Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Early Opportunity</h4>
//               <p className="text-sm text-slate-200">
//                 Invest at the ground level of a fund before it opens to the public.
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <PieChart className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Diversified Potential</h4>
//               <p className="text-sm text-slate-200">
//                 Access new sectors, asset classes, and market themes.
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <Shield className="w-8 h-8 text-amber-400 mb-4" />
//               <h4 className="font-semibold text-white mb-2">Expert Management</h4>
//               <p className="text-sm text-slate-200">
//                 Managed by trusted AMC professionals to maximize your portfolio’s growth.
//               </p>
//             </div>
//           </div>

//           {/* 🟡 Carousel Section */}
//           <div className="relative max-w-4xl mx-auto mb-24">
//             <h2 className="text-3xl font-bold text-center text-amber-400 mb-10">
//               Currently Open for Subscription
//             </h2>

//             {nfoData.length > 0 ? (
//               <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-white/20 shadow-xl">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={nfoData[activeIndex].id}
//                     src={nfoData[activeIndex].image_url}
//                     alt={nfoData[activeIndex].fund_name}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 1.2, ease: "easeInOut" }}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//                   />
//                 </AnimatePresence>

//                 {/* Lighter transparent overlay */}
//                 <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

//                 {/* Navigation buttons */}
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-4">
//                   <button
//                     onClick={() =>
//                       setActiveIndex((prev) =>
//                         prev === 0 ? nfoData.length - 1 : prev - 1
//                       )
//                     }
//                     className="p-2 bg-black/20 rounded-full hover:bg-black/40 transition"
//                   >
//                     ‹
//                   </button>
//                 </div>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//                   <button
//                     onClick={() =>
//                       setActiveIndex((prev) => (prev + 1) % nfoData.length)
//                     }
//                     className="p-2 bg-black/20 rounded-full hover:bg-black/40 transition"
//                   >
//                     ›
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-center text-slate-400">
//                 No upcoming NFOs available at the moment.
//               </p>
//             )}
//           </div>

//           {/* 🟡 CTA Section */}
//           <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-3">
//               Don’t Miss the Next Big Opportunity
//             </h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Stay ahead by tracking upcoming fund launches and learning how NFOs
//               can diversify your investment strategy. Our experts are here to guide you.
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

// export default UpcomingNFOPage;

"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { TrendingUp, PieChart, Shield, Calendar, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface NFOData {
  id: string;
  title: string;
  description: string | null;
  start_date: string | null;
  end_date: string | null;
  image_url: string | null;
  created_at: string;
}

const UpcomingNFOPage: React.FC = () => {
  const [nfoData, setNfoData] = useState<NFOData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // 🔹 Fetch NFO data from database
  useEffect(() => {
    const fetchNFOData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("🟡 Fetching NFO data from Supabase...");
        
        const { data, error } = await supabase
          .from('upcoming_nfo')
          .select('*')
          .order('start_date', { ascending: true });

        if (error) {
          console.error('❌ Error fetching NFO data:', error);
          setError('Failed to load NFO data');
          return;
        }

        console.log("✅ NFO data fetched:", data);
        
        if (data) {
          // Filter out NFOs that have ended
          const currentDate = new Date().toISOString().split('T')[0];
          const activeNFOs = data.filter(nfo => 
            !nfo.end_date || nfo.end_date >= currentDate
          );
          console.log("🟢 Active NFOs:", activeNFOs);
          setNfoData(activeNFOs);
        }
      } catch (error) {
        console.error('❌ Error in fetchNFOData:', error);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNFOData();
  }, []);

  // Function to get full image URL from Supabase Storage
  const getImageUrl = (imagePath: string | null) => {
    console.log("🖼️ Getting image URL for:", imagePath);
    
    if (!imagePath) {
      console.log("🟡 No image path, using fallback");
      return '/images/nfo/fallback.jpg';
    }

    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) {
      console.log("🔗 Already full URL:", imagePath);
      return imagePath;
    }
    
    // Extract just the filename
    let filename = imagePath;
    
    // Remove any folder prefixes and duplicate bucket names
    if (filename.includes('/')) {
      filename = filename.split('/').pop() || filename;
    }
    
    // Remove any duplicate bucket names that might still be there
    filename = filename.replace('nfo-images/', '');
    
    // Get public URL from Supabase
    const { data } = supabase.storage
      .from('nfo-images')
      .getPublicUrl(filename);
    
    console.log("📦 Final image URL:", data.publicUrl);
    return data.publicUrl;
  };

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'TBA';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Check if NFO is currently open
  const isCurrentlyOpen = (nfo: NFOData) => {
    const currentDate = new Date().toISOString().split('T')[0];
    if (!nfo.start_date) return false;
    if (!nfo.end_date) return nfo.start_date <= currentDate;
    return nfo.start_date <= currentDate && nfo.end_date >= currentDate;
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
    console.error("❌ Image failed to load:", imageUrl);
    
    // Add to error set to prevent retries
    if (imageUrl) {
      setImageErrors(prev => new Set(prev).add(imageUrl));
    }
    
    // Use fallback
    e.currentTarget.src = '/images/nfo/fallback.jpg';
  };

  // 🔄 Auto-scroll every 5 seconds
  useEffect(() => {
    if (nfoData.length === 0 || nfoData.length === 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nfoData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nfoData]);

  // Manual navigation
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % nfoData.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? nfoData.length - 1 : prev - 1));
  };

  // Test with your specific image
  useEffect(() => {
    if (nfoData.length > 0) {
      console.log("🧪 Testing image URL generation for first NFO:");
      const testUrl = getImageUrl(nfoData[0]?.image_url);
      console.log("🧪 Final image URL:", testUrl);
      
      // Test known working image
      const knownImageUrl = supabase.storage.from('nfo-images').getPublicUrl('digigold15.jpg').data.publicUrl;
      console.log("🧪 Known working image URL:", knownImageUrl);
    }
  }, [nfoData]);

  return (
    <main className="flex flex-col min-h-screen text-white">
      <BgComponent />
      <Navbar />

      {/* 🟡 Hero Section */}
      <section className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5"
            >
              Upcoming Mutual Fund NFOs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover <strong>New Fund Offers (NFOs)</strong> that give you early
              access to innovative investment ideas across sectors and strategies.
              Stay informed and invest smartly as new opportunities open up.
            </motion.p>
          </div>

          {/* 🟡 Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <TrendingUp className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white text-lg mb-3">Early Opportunity</h4>
              <p className="text-sm text-slate-200">
                Invest at the ground level of a fund before it opens to the public at the lowest NAV.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <PieChart className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white text-lg mb-3">Diversified Potential</h4>
              <p className="text-sm text-slate-200">
                Access new sectors, asset classes, and market themes with diversified portfolios.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Shield className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white text-lg mb-3">Expert Management</h4>
              <p className="text-sm text-slate-200">
                Managed by trusted AMC professionals with proven track records in fund management.
              </p>
            </motion.div>
          </div>

          {/* 🟡 Carousel Section */}
          <div className="relative max-w-6xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center text-amber-400 mb-10"
            >
              {nfoData.length > 0 ? "Currently Open for Subscription" : "Upcoming NFOs"}
            </motion.h2>

            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mb-4"></div>
                <p className="text-slate-300 text-lg">Loading NFOs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                <p className="text-rose-400 text-lg">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : nfoData.length > 0 ? (
              <>
                {/* Debug Info - Remove in production */}
                <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm">
                    <strong>Debug Info:</strong> Showing {nfoData.length} NFO(s). 
                    Current image path: {nfoData[activeIndex]?.image_url}
                  </p>
                  <p className="text-blue-400 text-sm">
                    <strong>Generated URL:</strong> {getImageUrl(nfoData[activeIndex]?.image_url)}
                  </p>
                </div>

                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={nfoData[activeIndex].id}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={getImageUrl(nfoData[activeIndex].image_url)}
                        alt={nfoData[activeIndex].title}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, nfoData[activeIndex].image_url)}
                        onLoad={() => console.log("✅ Image loaded successfully:", nfoData[activeIndex].image_url)}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      {/* Fund Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-2xl">
                          {/* Status Badge */}
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                            isCurrentlyOpen(nfoData[activeIndex]) 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}>
                            <Clock className="w-4 h-4 mr-2" />
                            {isCurrentlyOpen(nfoData[activeIndex]) ? 'Open for Subscription' : 'Coming Soon'}
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            {nfoData[activeIndex].title}
                          </h3>
                          
                          {nfoData[activeIndex].description && (
                            <p className="text-lg text-slate-200 mb-4 leading-relaxed">
                              {nfoData[activeIndex].description}
                            </p>
                          )}

                          <div className="flex flex-wrap gap-6 text-sm text-white/80">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-amber-400" />
                              <span>
                                <strong>Starts:</strong> {formatDate(nfoData[activeIndex].start_date)}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-amber-400" />
                              <span>
                                <strong>Ends:</strong> {formatDate(nfoData[activeIndex].end_date)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation buttons */}
                  {nfoData.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
                      >
                        ‹
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Dots indicator */}
                  {nfoData.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {nfoData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === activeIndex 
                              ? 'bg-amber-400 scale-125' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-12 h-12 text-amber-400" />
                </div>
                <p className="text-slate-400 text-lg mb-2">No active NFOs available</p>
                <p className="text-slate-500 text-sm">Check back later for new fund launches</p>
              </div>
            )}
          </div>

          {/* 🟡 CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss the Next Big Opportunity
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Stay ahead by tracking upcoming fund launches and learning how NFOs
              can diversify your investment strategy. Our experts are here to guide you.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-lg">
              Talk to an Investment Advisor
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UpcomingNFOPage;