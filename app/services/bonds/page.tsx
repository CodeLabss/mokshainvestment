
"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import {
  Shield,
  BarChart3,
  TrendingUp,
  PieChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BondsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ncd" | "fd">("ncd");
  const [currentIndex, setCurrentIndex] = useState(0);

  const ncdCharts = [
    "/images/bond/ncd1.jpg",
    "/images/bond/ncd1.jpg", 
    "/images/bond/ncd1.jpg",
    // "/images/bond/ncd2.png",
    // "/images/bond/ncd3.png",
  ];

  const fdCharts = [
    "/images/bond/fd1.png",
    "/images/bond/fd2.png",
    "/images/bond/fd3.png",
  ];

  const charts = activeTab === "ncd" ? ncdCharts : fdCharts;
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Reset to first slide when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Auto slide functionality
  useEffect(() => {
    if (charts.length <= 1) return;

    const startAutoSlide = () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [charts.length, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % charts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + charts.length) % charts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <main className="flex flex-col min-h-screen text-white">
      <BgComponent />
      <Navbar />

      <section className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-5">
              Fixed Income Investments
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Fixed-income investments such as <strong>NCDs</strong> and{" "}
              <strong>FDs</strong> offer predictable returns and safeguard your
              capital. They're ideal for investors seeking steady income with low
              to moderate risk exposure.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
              <TrendingUp className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">Stable Growth</h4>
              <p className="text-sm text-slate-200">
                Enjoy predictable, risk-adjusted returns over time.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
              <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">Performance Insights</h4>
              <p className="text-sm text-slate-200">
                Visualize how NCDs and FDs perform through market trends.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
              <Shield className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">Secure Returns</h4>
              <p className="text-sm text-slate-200">
                Both options prioritize capital safety and steady income.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 gap-6">
            <button
              onClick={() => setActiveTab("ncd")}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "ncd"
                  ? "bg-amber-400 text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              View NCDs
            </button>
            <button
              onClick={() => setActiveTab("fd")}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "fd"
                  ? "bg-amber-400 text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              View FDs
            </button>
          </div>

          {/* New Fixed Carousel */}
          <div className="relative max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
              {activeTab === "ncd"
                ? "Non-Convertible Debentures (NCD)"
                : "Fixed Deposits (FD)"}
            </h2>

            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6">
                <div className="relative h-[500px] flex items-center justify-center">
                  {charts.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${activeTab} chart ${index + 1}`}
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {charts.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-3 hover:bg-amber-300 transition-all shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 rounded-full p-3 hover:bg-amber-300 transition-all shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Slide Indicators */}
                {charts.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {charts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-amber-400 scale-125"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Slide Counter */}
              {charts.length > 1 && (
                <div className="text-center mt-4 text-slate-300">
                  {currentIndex + 1} / {charts.length}
                </div>
              )}

              {/* Description */}
              <p className="text-center text-slate-300 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
                {activeTab === "ncd"
                  ? "NCDs offer higher interest rates than traditional bank deposits, making them attractive to investors seeking steady income with moderate risk."
                  : "Fixed Deposits provide safety and guaranteed returns, making them the go-to choice for conservative investors seeking predictable income."}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-xl max-w-5xl mx-auto">
            <PieChart className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our experts will help you choose between NCDs and FDs based on your
              goals and risk appetite.
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

export default BondsPage; 