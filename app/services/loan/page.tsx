
"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Car, FileText, Bike, Calculator, Shield, X, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

interface SubCategory {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  features?: string[];
}

interface CategoryWithSubcategories {
  id: string;
  name: string;
  description: string;
  subcategories: SubCategory[];
}

// Information component for loan categories
const LoanInformationBox = ({ 
  subCategory, 
  onClose 
}: { 
  subCategory: SubCategory; 
  onClose: () => void; 
}) => {
  if (!subCategory) return null;

  const handleEmailClick = () => {
    window.location.href = "mailto:info@yourcompany.com?subject=Loan Inquiry&body=Hello, I would like more information about your loan services.";
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 mr-4">
              {React.cloneElement(subCategory.icon as React.ReactElement, { className: "w-8 h-8 text-indigo-600" })}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{subCategory.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Flexible financing solutions</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 gap-8">
            {/* Full Width Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">About This Loan</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{subCategory.description}</p>
              
              {subCategory.features && (
                <>
                  <h4 className="font-medium text-gray-800 mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {subCategory.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            {/* Full Width CTA Container */}
            <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-4 text-xl">Get Personalized Loan Options</h4>
                  <p className="text-indigo-700 mb-5 text-lg">
                    Our loan specialists will find the perfect financing solution for your specific needs and financial situation.
                  </p>
                </div>
                <div>
                  <div className="space-y-4">
                    <Link href="/contact" className="block w-full">
                      <button className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                        <Phone className="w-6 h-6 mr-3" />
                        Request a Callback
                      </button>
                    </Link>
                    <button 
                      onClick={handleEmailClick}
                      className="w-full py-4 border-2 border-indigo-300 text-indigo-600 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <Mail className="w-6 h-6 mr-3" />
                      Email Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Our Loans Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Our Loans?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Calculator className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Competitive Rates</h4>
                    <p className="text-gray-600">Get the best interest rates in the market</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quick Approval</h4>
                    <p className="text-gray-600">Fast processing and quick disbursal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Flexible Terms</h4>
                    <p className="text-gray-600">Customizable repayment options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main LoanPage Component
const LoanPage = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  // Loan categories with enhanced data
  const loanCategories: CategoryWithSubcategories[] = [
    {
      id: "property-loans",
      name: "Property Loans",
      description: "Financing solutions for your property needs",
      subcategories: [
        { 
          id: "home-loan", 
          name: "Home Loan", 
          description: "Realize your dream of owning a home with our flexible home loan options. We offer competitive interest rates, long repayment tenures, and quick processing to make your home buying journey smooth.",
          icon: <Home className="w-8 h-8 text-indigo-600" />,
          features: [
            "Competitive interest rates",
            "Long repayment tenure up to 30 years",
            "Flexible repayment options",
            "Top-up loan facility",
            "Quick processing and disbursal"
          ]
        },
        { 
          id: "mortgage-loan", 
          name: "Mortgage Loan", 
          description: "Unlock the value of your property with our mortgage loans. Get substantial funds for various needs while keeping your property as security with transparent terms and conditions.",
          icon: <FileText className="w-8 h-8 text-indigo-600" />,
          features: [
            "Loan against property",
            "High loan-to-value ratio",
            "Flexible end-use of funds",
            "Long repayment tenure",
            "Balance transfer facility"
          ]
        },
      ],
    },
    {
      id: "vehicle-loans",
      name: "Vehicle Loans",
      description: "Easy financing for your vehicle purchases",
      subcategories: [
        { 
          id: "car-loan", 
          name: "Car Loan", 
          description: "Drive home your dream car with our attractive car loan options. We offer financing for new and used cars with minimal documentation and quick approval process.",
          icon: <Car className="w-8 h-8 text-indigo-600" />,
          features: [
            "Financing for new and used cars",
            "Competitive interest rates",
            "Minimal documentation",
            "Quick approval process",
            "Flexible repayment options"
          ]
        },
        { 
          id: "bike-loan", 
          name: "Bike Loan", 
          description: "Get on the road with your dream bike through our convenient bike loan options. We offer affordable financing for both new and pre-owned bikes with easy eligibility criteria.",
          icon: <Bike className="w-8 h-8 text-indigo-600" />,
          features: [
            "Financing for new and used bikes",
            "Low interest rates",
            "Quick approval process",
            "Minimal documentation required",
            "Flexible repayment tenure"
          ]
        },
      ],
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-transparent">
      <Navbar />

      <section className="flex-1 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-4">
              Loan Services
            </h3>
            <p className="text-gray-600">Choose a category to explore loan options</p>
          </div>

          {/* Loan Categories - Matching Insurance Page Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {loanCategories.map((category) => (
              <div key={category.id} className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-slate-200 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-6 border-b border-slate-200 pb-2">{category.name}</h2>
                
                <div className="space-y-6">
                  {category.subcategories.map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => setSelectedSubCategory(sub)}
                      className="cursor-pointer group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      {/* Gradient glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

                      {/* Icon */}
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
                        {sub.icon}
                      </div>
                      
                      <h4 className="relative text-lg font-semibold text-slate-800">{sub.name}</h4>
                      <p className="relative mt-2 text-gray-600 text-sm">{sub.description}</p>
                      
                      <div className="relative mt-3">
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                          Learn More
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bigger CTA Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center text-white shadow-md mb-12">
            <Calculator className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need Loan Assistance?</h2>
            <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
              Our loan specialists can help you find the perfect financing solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="block">
                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors text-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Speak to an Expert
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors text-lg">
                Get Loan Quote
              </button>
            </div>
          </div>

          {/* Loan Benefits Section */}
          <div className="bg-white/60 backdrop-blur rounded-2xl p-8 border border-slate-200 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-center text-slate-800 mb-8">Why Choose Our Loan Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Low Interest Rates</h3>
                <p className="text-gray-600">Competitive rates that suit your budget</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Quick Processing</h3>
                <p className="text-gray-600">Fast approval and disbursal of funds</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Flexible Terms</h3>
                <p className="text-gray-600">Customizable repayment options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal for loan details */}
      {selectedSubCategory && (
        <LoanInformationBox 
          subCategory={selectedSubCategory} 
          onClose={() => setSelectedSubCategory(null)} 
        />
      )}
    </main>
  );
};

export default LoanPage;