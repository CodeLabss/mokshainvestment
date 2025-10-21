
"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, Shield, Home, ArrowRight, Gem, Zap, Coins, TrendingUp } from "lucide-react";
import { BgComponent } from "@/components/BgComponent";

// Updated image paths to use your public folder
const images = [
  "/images/digigold4.jpg",
  "/images/digigold2.jpg",
  "/images/digigold3.jpg",
  "/images/digigold6.jpg",
  "/images/digigold5.jpg",
  "/images/digigold7.jpg",
  "/images/digigold8.jpg",
  "/images/digigold9.jpg",
  "/images/digigold10.jpg",
];

const imageContent = [
  {
    title: "What is Digital Gold?",
    description: "Digital Gold is physical gold that is bought and stored online. You can buy it in small quantities, starting from as low as ₹1, and it's kept safe in a secure vault on your behalf.",
  },
  {
    title: "Why Invest in Gold?",
    description: "Gold is a timeless asset. It's a hedge against inflation, a safe haven asset during economic uncertainty, and a great way to diversify your investment portfolio for stability.",
  },
  {
    title: "Global Impact",
    description: "Geopolitical events, like the sanctions on Russia, have led countries like India and China to increase their gold reserves, highlighting its role as a secure alternative to U.S. dollar-based assets.",
  },
  {
    title: "Safe, Secure & Transparent",
    description: "Your digital gold is stored with trusted custodians like Brinks. The entire process is transparent, with a live price ticker and a trustee (Vistra) ensuring your assets are protected.",
  },
  {
    title: "Guaranteed 24K Gold",
    description: "We guarantee 99.5% purity. Your gold is 24 Karat and is certified by the National Accreditation Board for Testing & Calibration Laboratories (NABL), a government-approved body.",
  },
  {
    title: "Ease of Transacting",
    description: "Enjoy a fully paperless experience. From KYC to transactions, everything is done online. You get instant credit and can start investing in minutes.",
  },
  {
    title: "Easy Liquidity",
    description: "Your investment is highly liquid. You can sell your digital gold anytime, anywhere, and the money is credited to your bank account quickly, usually within T+1 days.",
  },
  {
    title: "Home Delivery",
    description: "Want physical gold? You can get your digital gold redeemed as coins or bars, delivered straight to your home with full transit insurance across 19,000+ pin codes in India.",
  },
  {
    title: "Redeem as Jewellery",
    description: "Redeeming your gold isn't just for coins or bars. You can also use your digital gold to purchase beautiful jewellery from trusted partners like Tanishq and CaratLane.",
  },
];

const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-amber-400 hover:shadow-2xl">
    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 mb-6">
      {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-amber-400" })}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-200 leading-relaxed">{description}</p>
  </div>
);

const DigitalGoldPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            setActiveImage(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="relative flex flex-col min-h-screen text-white">
      <BgComponent />
      <div className="relative z-10">
        <Navbar />

        {/* Enhanced Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="max-w-6xl mx-auto px-6 text-center">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Gem className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Premium Gold Investment</span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Digital Gold
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Own physical gold digitally with bank-grade security. Start with just ₹1 and build your 
              <span className="text-amber-400 font-semibold"> golden legacy </span>
              with 24/7 trading and insured vault storage.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Investing Now
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-amber-400/50 text-amber-400 font-semibold rounded-xl transition-all duration-300 hover:bg-amber-400/10 hover:border-amber-400">
                Watch Product Tour
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-400">Pure Gold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Trading</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">₹1</div>
                <div className="text-sm text-slate-400">Minimum</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section with Proper Alignment */}
        <section className="py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="text-amber-400">Digital Gold</span>?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Experience the perfect blend of traditional gold security with modern digital convenience
              </p>
            </div>
            
            {/* Properly Aligned Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield />}
                title="Bank-Grade Security"
                description="Your gold is stored in insured vaults with trusted custodians, ensuring maximum security and peace of mind."
              />
              <FeatureCard
                icon={<Zap />}
                title="Instant Liquidity"
                description="Buy and sell gold instantly 24/7 with real-time pricing and immediate settlement to your account."
              />
              <FeatureCard
                icon={<Coins />}
                title="Fractional Ownership"
                description="Start with as little as ₹1 and own pure 24K gold in precise gram measurements without storage worries."
              />
            </div>

            {/* Additional Feature Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              <FeatureCard
                icon={<TrendingUp />}
                title="Inflation Protection"
                description="Gold has historically outperformed inflation, preserving your wealth during economic uncertainty."
              />
              <FeatureCard
                icon={<Home />}
                title="Physical Delivery"
                description="Redeem your digital gold for physical coins or bars delivered to your doorstep across India."
              />
            </div>
          </div>
        </section>

        {/* Image Scroll Section */}
        <section className="relative py-10 bg-transparent">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Sticky Image Container */}
            <div className="sticky top-32 h-[70vh] flex items-center justify-center z-20">
              <div className="relative w-full max-w-4xl mx-auto px-6">
                <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 border border-white/20">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={imageContent[index].title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                        activeImage === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  
                  {/* Small Counter at Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-amber-400/30">
                    <span className="text-amber-400 text-sm font-medium">
                      {activeImage + 1} / {images.length}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {imageContent[activeImage]?.title}
                    </h3>
                    <p className="text-slate-200 text-sm">
                      {imageContent[activeImage]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Triggers */}
            <div className="relative z-10">
              {imageContent.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="h-[100vh] flex items-center justify-center"
                >
                  {/* Invisible trigger point */}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden max-w-4xl mx-auto px-6 space-y-16">
            {imageContent.map((content, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <img 
                    src={images[index]} 
                    alt={content.title}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Small Counter for Mobile */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 border border-amber-400/30">
                    <span className="text-amber-400 text-xs font-medium">
                      {index + 1} / {images.length}
                    </span>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {content.title}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl rounded-3xl p-12 border border-amber-400/20 shadow-2xl text-center">
              <Gem className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of smart investors who are building generational wealth with digital gold. 
                Start with just ₹1 and experience the future of gold investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Investing Now
                </button>
                <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400/10 transition-all duration-300">
                  Get Expert Advice
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default DigitalGoldPage;