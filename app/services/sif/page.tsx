// // v1
// "use client";

// import React, { useState, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Target, Shield, TrendingUp, BarChart3, X, Phone, CheckCircle, Lock, Globe, Users, Zap, Calendar, ArrowRight } from "lucide-react";
// import Link from "next/link";

// // Strategy Detail Modal (keeping this for when users want more details)
// const StrategyDetailModal = ({ 
//   strategy, 
//   onClose 
// }: { 
//   strategy: any; 
//   onClose: () => void; 
// }) => {
//   if (!strategy) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 mr-4">
//               {React.cloneElement(strategy.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-amber-600" })}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">{strategy.name}</h2>
//               <p className="text-gray-500 text-sm mt-1">Professional Investment Access</p>
//             </div>
//           </div>
//           <button 
//             onClick={onClose}
//             className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
//             aria-label="Close modal"
//           >
//             <X size={24} />
//           </button>
//         </div>
        
//         {/* Content */}
//         <div className="p-6">
//           <div className="space-y-6">
//             {/* Description */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">Investment Approach</h3>
//               <p className="text-gray-700 leading-relaxed">{strategy.description}</p>
//             </div>
            
//             {/* CTA Section */}
//             <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-white">
//               <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
//               <p className="text-amber-100 mb-6 text-sm">
//                 Connect with our investment specialists to discuss your eligibility and investment objectives.
//               </p>
//               <Link href="/contact" className="block">
//                 <button className="w-full py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center text-lg cursor-pointer">
//                   <Phone className="w-5 h-5 mr-3" />
//                   Schedule Consultation
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main SIF Page Component
// const SIFPage = () => {
//   const [selectedStrategy, setSelectedStrategy] = useState<any>(null);

//   // Key features highlighting the SIF value proposition
//   const keyFeatures = [
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Accredited Investor Access",
//       description: "Exclusive opportunities typically reserved for institutional clients and high-net-worth individuals"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Professional Management",
//       description: "Expert fund managers with proven track records in alternative investments"
//     },
//     {
//       icon: <Lock className="w-6 h-6" />,
//       title: "Minimum Investment ₹10 Lakhs",
//       description: "Structured entry point for serious investors seeking sophisticated strategies"
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Diversified Portfolios",
//       description: "Access to multiple asset classes and investment strategies in a single fund"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Institutional Standards",
//       description: "Same rigorous due diligence and investment processes used by large institutions"
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Growth Potential",
//       description: "Opportunities for enhanced returns through private markets and alternative assets"
//     }
//   ];

//   // Simple investment options
//   const investmentOptions = [
//     {
//       id: "private-equity",
//       name: "Private Equity Access",
//       description: "Participate in growth-stage companies and buyout opportunities before they go public",
//       icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
//       shortDesc: "Pre-IPO and growth capital investments"
//     },
//     {
//       id: "real-assets",
//       name: "Real Assets",
//       description: "Invest in real estate, infrastructure, and other physical assets generating stable income",
//       icon: <BarChart3 className="w-8 h-8 text-amber-400" />,
//       shortDesc: "Tangible assets with income potential"
//     }
//   ];

//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />

//       <section className="flex-1 pt-32 pb-20 relative z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* Enhanced Header with Focus on Value Proposition */}
//           <div className="text-center mb-16">
//             <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
//                 Specialised Investment Funds
//               </h1>
//             </div>
            
//             {/* Main Value Proposition - Made More Prominent */}
//             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto mb-8">
//               <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6">
//                 Professionally managed investment capital for accredited investors to access exclusive alternative investments typically reserved for institutional clients.
//               </p>
//               <div className="inline-flex items-center gap-2 bg-amber-500/20 px-6 py-3 rounded-full border border-amber-400/30">
//                 <Target className="w-5 h-5 text-amber-400" />
//                 <span className="text-amber-300 font-semibold text-lg">Minimum Investment: ₹10,00,000</span>
//               </div>
//             </div>
//           </div>

//           {/* Key Features Grid - Highlighting the Core Benefits */}
//           <div className="mb-16">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Why Choose Specialised Investment Funds?
//               </h2>
//               <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//                 Access institutional-grade investment opportunities with professional management and structured oversight.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {keyFeatures.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 group hover:transform hover:-translate-y-1"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
//                       {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { 
//                         className: "w-6 h-6 text-amber-400" 
//                       })}
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-white mb-2">
//                         {feature.title}
//                       </h3>
//                       <p className="text-gray-300 text-sm leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Simplified Investment Options */}
//           <div className="mb-16">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Investment Opportunities
//               </h2>
//               <p className="text-gray-300 text-lg">
//                 Choose from carefully curated investment strategies
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//               {investmentOptions.map((option) => (
//                 <div
//                   key={option.id}
//                   onClick={() => setSelectedStrategy(option)}
//                   className="cursor-pointer group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-amber-400/50 hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-amber-500/30 transition-colors">
//                       {option.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
//                         {option.name}
//                       </h3>
//                       <p className="text-amber-400 text-sm font-medium">{option.shortDesc}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 mb-4 leading-relaxed">
//                     {option.description}
//                   </p>
//                   <div className="flex items-center text-amber-400 font-semibold group-hover:text-amber-300 transition-colors">
//                     <span>Learn more</span>
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process Overview */}
//           <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-16">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 How It Works
//               </h2>
//               <p className="text-gray-300 text-lg">
//                 Simple process to start your institutional investment journey
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//               <div className="text-center p-6">
//                 <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users className="w-8 h-8 text-amber-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">1. Eligibility Check</h3>
//                 <p className="text-gray-300 text-sm">
//                   Verify accredited investor status and discuss investment objectives
//                 </p>
//               </div>

//               <div className="text-center p-6">
//                 <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Calendar className="w-8 h-8 text-amber-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">2. Portfolio Construction</h3>
//                 <p className="text-gray-300 text-sm">
//                   Customized investment strategy based on your goals and risk profile
//                 </p>
//               </div>

//               <div className="text-center p-6">
//                 <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <TrendingUp className="w-8 h-8 text-amber-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">3. Professional Management</h3>
//                 <p className="text-gray-300 text-sm">
//                   Ongoing monitoring and management by experienced investment professionals
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Main CTA Section */}
//           <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
//             <div className="max-w-2xl mx-auto">
//               <Target className="w-16 h-16 mx-auto mb-6" />
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Start Your Institutional Investment Journey
//               </h2>
//               <p className="text-amber-100 text-lg mb-8 leading-relaxed">
//                 Join other accredited investors accessing sophisticated investment strategies with professional oversight and institutional standards.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" className="block flex-1 max-w-md">
//                   <button className="w-full px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg cursor-pointer">
//                     Schedule Consultation
//                   </button>
//                 </Link>
//                 <div className="flex-1 max-w-md">
//                   <button className="w-full px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
//                     Download Brochure
//                   </button>
//                 </div>
//               </div>
//               <p className="text-amber-200 text-sm mt-6">
//                 Minimum investment: ₹10,00,000 • Accredited investors only
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Modal for Strategy Details */}
//       {selectedStrategy && (
//         <StrategyDetailModal 
//           strategy={selectedStrategy} 
//           onClose={() => setSelectedStrategy(null)} 
//         />
//       )}
//     </main>
//   );
// };

// export default SIFPage;





"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Shield, TrendingUp, BarChart3, X, Phone, Lock, Globe, Users, Zap, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Strategy Detail Modal
const StrategyDetailModal = ({ strategy, onClose }: { strategy: any; onClose: () => void; }) => {
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
              <p className="text-gray-500 text-base mt-1">Professional Investment Access</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer" aria-label="Close modal">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Investment Approach</h3>
            <p className="text-gray-700 text-base leading-relaxed">{strategy.description}</p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-white">
            <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
            <p className="text-amber-100 mb-6 text-base">
              Connect with our investment specialists to discuss your eligibility and investment objectives.
            </p>
            <Link href="/contact" className="block">
              <button className="w-full py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center text-lg cursor-pointer">
                <Phone className="w-5 h-5 mr-3" />
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main SIF Page
const SIFPage = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<any>(null);

  const keyFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: "Accredited Investor Access", description: "Exclusive opportunities typically reserved for institutional clients and high-net-worth individuals" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Professional Management", description: "Expert fund managers with proven track records in alternative investments" },
    { icon: <Lock className="w-6 h-6" />, title: "Minimum Investment ₹10 Lakhs", description: "Structured entry point for serious investors seeking sophisticated strategies" },
    { icon: <Globe className="w-6 h-6" />, title: "Diversified Portfolios", description: "Access to multiple asset classes and investment strategies in a single fund" },
    { icon: <Users className="w-6 h-6" />, title: "Institutional Standards", description: "Same rigorous due diligence and investment processes used by large institutions" },
    { icon: <Zap className="w-6 h-6" />, title: "Growth Potential", description: "Opportunities for enhanced returns through private markets and alternative assets" },
  ];

  const investmentOptions = [
    {
      id: "private-equity",
      name: "Private Equity Access",
      description: "Participate in growth-stage companies and buyout opportunities before they go public",
      icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
      shortDesc: "Pre-IPO and growth capital investments",
    },
    {
      id: "real-assets",
      name: "Real Assets",
      description: "Invest in real estate, infrastructure, and other physical assets generating stable income",
      icon: <BarChart3 className="w-8 h-8 text-amber-400" />,
      shortDesc: "Tangible assets with income potential",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-transparent">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                Specialised Investment Funds
              </h1>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6">
                Professionally managed investment capital for accredited investors to access exclusive alternative investments typically reserved for institutional clients.
              </p>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 px-6 py-3 rounded-full border border-amber-400/30">
                <Target className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold text-lg">Minimum Investment: ₹10,00,000</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                Why Choose Specialised Investment Funds?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Access institutional-grade investment opportunities with professional management and structured oversight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-amber-400/40 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/25 rounded-lg flex items-center justify-center group-hover:bg-amber-500/40 transition-colors">
                      {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-amber-400" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Options */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                Investment Opportunities
              </h2>
              <p className="text-gray-300 text-lg">Choose from carefully curated investment strategies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {investmentOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedStrategy(option)}
                  className="cursor-pointer group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-amber-500/25 rounded-xl flex items-center justify-center mr-4 group-hover:bg-amber-500/40 transition-colors">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {option.name}
                      </h3>
                      <p className="text-amber-400 text-base font-medium">{option.shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">{option.description}</p>
                  <div className="flex items-center text-amber-400 font-semibold group-hover:text-amber-300 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                How It Works
              </h2>
              <p className="text-gray-300 text-lg">Simple process to start your institutional investment journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Users className="w-8 h-8 text-amber-400" />, title: "1. Eligibility Check", desc: "Verify accredited investor status and discuss investment objectives" },
                { icon: <Calendar className="w-8 h-8 text-amber-400" />, title: "2. Portfolio Construction", desc: "Customized investment strategy based on your goals and risk profile" },
                { icon: <TrendingUp className="w-8 h-8 text-amber-400" />, title: "3. Professional Management", desc: "Ongoing monitoring and management by experienced investment professionals" },
              ].map((step, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-16 h-16 bg-amber-500/25 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
            <div className="max-w-2xl mx-auto">
              <Target className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Institutional Investment Journey</h2>
              <p className="text-amber-100 text-lg mb-8 leading-relaxed">
                Join other accredited investors accessing sophisticated investment strategies with professional oversight and institutional standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="block flex-1 max-w-md">
                  <button className="w-full px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg cursor-pointer">
                    Schedule Consultation
                  </button>
                </Link>
                {/* <div className="flex-1 max-w-md">
                  <button className="w-full px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    Download Brochure
                  </button>
                </div> */}
              </div>
              <p className="text-amber-200 text-sm mt-6">
                Minimum investment: ₹10,00,000 • Accredited investors only
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {selectedStrategy && <StrategyDetailModal strategy={selectedStrategy} onClose={() => setSelectedStrategy(null)} />}
    </main>
  );
};

export default SIFPage;
