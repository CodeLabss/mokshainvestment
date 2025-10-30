// removing automatic scroll carousel
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { TrendingUp, PieChart, Shield, Calendar, Clock, Star } from "lucide-react";
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

  // Fixed: Get image URL with proper Supabase storage path
  const getImageUrl = (imagePath: string | null, bucket: string = 'nfo-images'): string => {
    if (!imagePath) {
      return '/images/nfo/fallback.jpg';
    }

    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }

    // If it's just a filename, construct the proper Supabase storage URL
    let filename = imagePath;
    
    // Remove any existing bucket path if present
    if (filename.includes('/')) {
      filename = filename.split('/').pop() || filename;
    }
    
    // Remove bucket prefix if present
    filename = filename.replace(`${bucket}/`, '');
    
    // Get public URL from Supabase storage
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filename);
    
    console.log(`🖼️ Generated image URL for ${filename}:`, data.publicUrl);
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

  // Fixed: Handle image error more gracefully
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageUrl: string | null) => {
    console.warn("⚠️ Image failed to load:", imageUrl);
    
    if (imageUrl) {
      setImageErrors(prev => new Set(prev).add(imageUrl));
    }
    
    // Use a proper fallback image
    e.currentTarget.src = '/images/nfo/fallback.jpg';
    e.currentTarget.alt = 'Fallback image';
    e.currentTarget.classList.add('opacity-50'); // Visual indicator for failed images
  };

  // REMOVED: Auto-scroll functionality completely

  // Manual navigation
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % nfoData.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? nfoData.length - 1 : prev - 1));
  };

  return (
    <main className="flex flex-col min-h-screen text-white">
      <BgComponent />
      <Navbar />

      {/* 🟡 Hero Section */}
      <section className="flex-1 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Header matching Insurance page theme */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                Upcoming Mutual Fund NFOs
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover <strong>New Fund Offers (NFOs)</strong> that give you early
              access to innovative investment ideas across sectors and strategies.
              Stay informed and invest smartly as new opportunities open up.
            </p>
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
                  className="mt-4 px-6 py-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            ) : nfoData.length > 0 ? (
              <>
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={nfoData[activeIndex].id}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* FIXED: Background Image Container - Changed to object-contain to prevent stretching */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <img
                          src={getImageUrl(nfoData[activeIndex].image_url)}
                          alt={nfoData[activeIndex].title}
                          className="w-full h-full object-contain" // Changed from object-cover to object-contain
                          onError={(e) => handleImageError(e, nfoData[activeIndex].image_url)}
                        />
                      </div>
                      
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

                  {/* Navigation buttons - Always show if there are multiple NFOs */}
                  {nfoData.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm cursor-pointer"
                      >
                        ‹
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition text-white text-xl backdrop-blur-sm cursor-pointer"
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
                          className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
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

          {/* Main CTA Section matching Insurance page theme */}
          <div className="max-w-7xl mx-auto px-6 mt-8">
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't Miss the Next Big Opportunity
              </h2>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Stay ahead by tracking upcoming fund launches and learning how NFOs
                can diversify your investment strategy. Our experts are here to guide you.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'} 
                  className="px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer"
                >
                  Talk to an Investment Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UpcomingNFOPage;