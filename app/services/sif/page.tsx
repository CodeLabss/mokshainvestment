"use client";

import React, { useState, ReactNode, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Building2, Users, Shield, TrendingUp, BarChart3, X, Phone, Mail, Clock, CheckCircle, Star, Plus, Lock, Globe, Award } from "lucide-react";
import Link from "next/link";

interface FundHouse {
  id: string;
  name: string;
  logo_url: string;
  specialty: string;
}

interface InvestmentStrategy {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  features?: string[];
}

interface CategoryWithStrategies {
  id: string;
  name: string;
  description: string;
  strategies: InvestmentStrategy[];
}

// Enhanced fund houses data
const allFundHouses: FundHouse[] = [
  {
    id: "1",
    name: "Blackstone Alternatives",
    logo_url: "/images/sif/blackstone.jpg",
    specialty: "Private Equity & Real Estate"
  },
  {
    id: "2", 
    name: "KKR & Co.",
    logo_url: "/images/sif/kkr.jpg",
    specialty: "Alternative Investments"
  },
  {
    id: "3",
    name: "Brookfield Asset Management",
    logo_url: "/images/sif/brookfield.jpg",
    specialty: "Real Assets & Infrastructure"
  },
  {
    id: "4",
    name: "Carlyle Group",
    logo_url: "/images/sif/carlyle.jpg",
    specialty: "Global Private Equity"
  },
  {
    id: "5",
    name: "Apollo Global Management",
    logo_url: "/images/sif/apollo.jpg",
    specialty: "Credit & Private Equity"
  },
  {
    id: "6",
    name: "Ares Management",
    logo_url: "/images/sif/ares.jpg",
    specialty: "Alternative Credit"
  },
];

// Enhanced Infinite Logo Marquee Component for SIF
const SIFLogoMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the fund houses array to create seamless loop
  const duplicatedFundHouses = [...allFundHouses, ...allFundHouses];

  // Auto-scroll animation
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let animationId: number;
    const speed = 0.5;
    let position = 0;

    const animate = () => {
      if (!isHovered && content) {
        position -= speed;
        const firstItemWidth = 160 + 48;
        const totalWidth = duplicatedFundHouses.length * firstItemWidth;
        
        if (Math.abs(position) >= totalWidth / 2) {
          position = 0;
        }
        
        content.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, duplicatedFundHouses.length]);

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-sm mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-base font-semibold text-white">Elite Investment Partners</span>
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Partnered with Global Alternative Investment Leaders
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Access exclusive investment opportunities through our partnerships with world-class alternative investment managers
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={marqueeRef}
            className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
          >
            <div 
              ref={contentRef}
              className="flex gap-16 items-center"
              style={{ willChange: 'transform' }}
            >
              {duplicatedFundHouses.map((fundHouse, index) => (
                <div
                  key={`${fundHouse.id}-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div className="w-40 h-24 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <img
                      src={fundHouse.logo_url || "/dummy-logo.png"}
                      alt={fundHouse.name}
                      className="w-full h-full object-contain opacity-100 brightness-100 contrast-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">$50B+</div>
            <div className="text-base text-gray-200 font-medium">Assets Under Advice</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">15+</div>
            <div className="text-base text-gray-200 font-medium">Years Track Record</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">100+</div>
            <div className="text-base text-gray-200 font-medium">Institutional Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">24/7</div>
            <div className="text-base text-gray-200 font-medium">Wealth Advisory</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Strategy Detail Modal
const StrategyDetailModal = ({ 
  strategy, 
  onClose 
}: { 
  strategy: InvestmentStrategy; 
  onClose: () => void; 
}) => {
  if (!strategy) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 mr-4">
              {React.cloneElement(strategy.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-amber-600" })}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{strategy.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Sophisticated Investment Strategy</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Investment Strategy Overview</h3>
              <p className="text-gray-700 leading-relaxed">{strategy.description}</p>
            </div>
            
            {/* Key Features */}
            {strategy.features && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Strategic Advantages</h4>
                <ul className="space-y-3">
                  {strategy.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Ready to Access Elite Investments?</h4>
              <p className="text-amber-100 mb-6 text-sm">
                Our specialized investment advisors will guide you through the qualification process and portfolio construction.
              </p>
              <Link href="/contact" className="block">
                <button className="w-full py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center text-lg cursor-pointer">
                  <Phone className="w-5 h-5 mr-3" />
                  Schedule Private Consultation
                </button>
              </Link>
            </div>

            {/* Investment Criteria */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Lock className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800 text-sm">Accredited Investors</h5>
                <p className="text-gray-600 text-xs">Qualified individuals & institutions</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800 text-sm">Enhanced Due Diligence</h5>
                <p className="text-gray-600 text-xs">Rigorous investment analysis</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Globe className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800 text-sm">Global Opportunities</h5>
                <p className="text-gray-600 text-xs">Diversified international exposure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main SIF Page Component
const SIFPage = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<InvestmentStrategy | null>(null);

  const sifCategories: CategoryWithStrategies[] = [
    {
      id: "private-markets",
      name: "Private Markets",
      description: "Exclusive access to non-public investment opportunities",
      strategies: [
        { 
          id: "private-equity", 
          name: "Private Equity", 
          description: "Direct investments in private companies with high growth potential. Access to venture capital, growth equity, and buyout opportunities typically unavailable to public market investors.",
          icon: <TrendingUp className="w-8 h-8 text-rose-500" />,
          features: [
            "Access to pre-IPO companies",
            "Active ownership and value creation",
            "Long-term capital appreciation",
            "Diversification from public markets",
            "Professional management oversight"
          ]
        },
        { 
          id: "real-estate", 
          name: "Real Estate Funds", 
          description: "Institutional-grade real estate investments across commercial, residential, and industrial properties. Target income generation and capital appreciation through strategic property acquisitions.",
          icon: <Building2 className="w-8 h-8 text-emerald-400" />,
          features: [
            "Institutional property portfolios",
            "Stable income through rentals",
            "Inflation hedging characteristics",
            "Geographic diversification",
            "Professional property management"
          ]
        },
      ],
    },
    {
      id: "alternative-strategies",
      name: "Alternative Strategies",
      description: "Sophisticated investment approaches beyond traditional assets",
      strategies: [
        { 
          id: "hedge-funds", 
          name: "Hedge Funds", 
          description: "Advanced investment strategies employing leverage, short-selling, and derivatives to generate returns in various market conditions. Designed to provide absolute returns with low correlation to traditional markets.",
          icon: <BarChart3 className="w-8 h-8 text-sky-400" />,
          features: [
            "Absolute return focus",
            "Low correlation to stocks/bonds",
            "Sophisticated risk management",
            "Multiple strategy approaches",
            "Professional trading expertise"
          ]
        },
        { 
          id: "infrastructure", 
          name: "Infrastructure Funds", 
          description: "Investments in essential public assets and services including transportation, utilities, and social infrastructure. Provides stable, long-term cash flows with inflation-linked revenue streams.",
          icon: <Target className="w-8 h-8 text-amber-400" />,
          features: [
            "Essential service assets",
            "Long-term stable cash flows",
            "Inflation-protected returns",
            "Government contracted revenues",
            "Low economic sensitivity"
          ]
        },
      ],
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-transparent">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                Specialised Investment Funds
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Exclusive investment opportunities for accredited investors seeking sophisticated strategies 
              beyond traditional public markets. Minimum investment thresholds apply.
            </p>
          </div>

          {/* Investment Strategy Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {sifCategories.map((category) => (
              <div key={category.id} className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6 pb-4 border-b border-white/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center mr-4">
                    {category.id === "private-markets" ? (
                      <Building2 className="w-6 h-6 text-white" />
                    ) : (
                      <BarChart3 className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.strategies.map((strategy) => (
                    <div
                      key={strategy.id}
                      onClick={() => setSelectedStrategy(strategy)}
                      className="cursor-pointer group rounded-xl p-5 bg-white/20 backdrop-blur border border-white/30 hover:border-amber-400/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/30 group-hover:bg-amber-500/40 transition-colors mr-4">
                          {React.cloneElement(strategy.icon as React.ReactElement<{ className?: string }>, { 
                            className: "w-6 h-6 text-amber-300" 
                          })}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-white group-hover:text-amber-200 transition-colors">
                            {strategy.name}
                          </h4>
                          <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                            {strategy.description}
                          </p>
                        </div>
                        <div className="text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Plus className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fund Houses Marquee */}
        <SIFLogoMarquee />

        {/* Main CTA Section */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Access Elite Investment Opportunities?
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our specialized investment advisors provide exclusive access to sophisticated strategies 
              and conduct thorough due diligence to ensure optimal portfolio construction for qualified investors.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="block w-full max-w-md">
                <button className="w-full px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer">
                  Request Accredited Investor Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal for Strategy Details */}
      {selectedStrategy && (
        <StrategyDetailModal 
          strategy={selectedStrategy} 
          onClose={() => setSelectedStrategy(null)} 
        />
      )}
    </main>
  );
};

export default SIFPage;