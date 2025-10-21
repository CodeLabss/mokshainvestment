"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { TrendingUp, PieChart, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const UpcomingNFOPage: React.FC = () => {
  const [nfoData, setNfoData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔹 Fetch data (mock for now)
  useEffect(() => {
    setNfoData([
      {
        id: 1,
        fund_name: "ABC Bluechip Fund",
        category: "Large Cap Equity",
        launch_date: "2025-10-15",
        close_date: "2025-10-30",
        min_investment: "₹5,000",
        image_url: "/images/nfo/nfo1.jpg",
      },
      {
        id: 2,
        fund_name: "XYZ Balanced Advantage Fund",
        category: "Hybrid",
        launch_date: "2025-10-20",
        close_date: "2025-11-05",
        min_investment: "₹1,000",
        image_url: "/images/nfo/nfo2.jpg",
      },
      {
        id: 3,
        fund_name: "PQR Flexi Cap Fund",
        category: "Multi Cap",
        launch_date: "2025-11-01",
        close_date: "2025-11-15",
        min_investment: "₹500",
        image_url: "/images/nfo/nfo3.jpg",
      },
    ]);
  }, []);

  // 🔄 Auto-scroll every 4 seconds
  useEffect(() => {
    if (nfoData.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nfoData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [nfoData]);

  return (
    <main className="flex flex-col min-h-screen text-white">
      <BgComponent />
      <Navbar />

      {/* 🟡 Hero Section */}
      <section className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-5">
              Upcoming Mutual Fund NFOs
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover <strong>New Fund Offers (NFOs)</strong> that give you early
              access to innovative investment ideas across sectors and strategies.
              Stay informed and invest smartly as new opportunities open up.
            </p>
          </div>

          {/* 🟡 Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">Early Opportunity</h4>
              <p className="text-sm text-slate-200">
                Invest at the ground level of a fund before it opens to the public.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <PieChart className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">Diversified Potential</h4>
              <p className="text-sm text-slate-200">
                Access new sectors, asset classes, and market themes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <Shield className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">Expert Management</h4>
              <p className="text-sm text-slate-200">
                Managed by trusted AMC professionals to maximize your portfolio’s growth.
              </p>
            </div>
          </div>

          {/* 🟡 Carousel Section */}
          <div className="relative max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center text-amber-400 mb-10">
              Currently Open for Subscription
            </h2>

            {nfoData.length > 0 ? (
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={nfoData[activeIndex].id}
                    src={nfoData[activeIndex].image_url}
                    alt={nfoData[activeIndex].fund_name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                </AnimatePresence>

                {/* Lighter transparent overlay */}
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

                {/* Navigation buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <button
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === 0 ? nfoData.length - 1 : prev - 1
                      )
                    }
                    className="p-2 bg-black/20 rounded-full hover:bg-black/40 transition"
                  >
                    ‹
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <button
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % nfoData.length)
                    }
                    className="p-2 bg-black/20 rounded-full hover:bg-black/40 transition"
                  >
                    ›
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-slate-400">
                No upcoming NFOs available at the moment.
              </p>
            )}
          </div>

          {/* 🟡 CTA Section */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Don’t Miss the Next Big Opportunity
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Stay ahead by tracking upcoming fund launches and learning how NFOs
              can diversify your investment strategy. Our experts are here to guide you.
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UpcomingNFOPage;
