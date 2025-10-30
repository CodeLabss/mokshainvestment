
// different theme
// "use client";

// import React, { useState, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Home, Car, FileText, Bike, Calculator, Shield, X, Phone, Mail, Clock, CheckCircle, Star, Plus } from "lucide-react";
// import Link from "next/link";

// interface SubCategory {
//   id: string;
//   name: string;
//   description: string;
//   icon: ReactNode;
//   features?: string[];
// }

// interface CategoryWithSubcategories {
//   id: string;
//   name: string;
//   description: string;
//   subcategories: SubCategory[];
// }

// // Information component for loan categories - Updated to match insurance modal
// const LoanInformationBox = ({ 
//   subCategory, 
//   onClose 
// }: { 
//   subCategory: SubCategory; 
//   onClose: () => void; 
// }) => {
//   if (!subCategory) return null;

//   const handleEmailClick = () => {
//     window.location.href = "mailto:info@yourcompany.com?subject=Loan Inquiry&body=Hello, I would like more information about your loan services.";
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 mr-4">
//               {React.cloneElement(subCategory.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-amber-600" })}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">{subCategory.name}</h2>
//               <p className="text-gray-500 text-sm mt-1">Flexible financing solutions</p>
//             </div>
//           </div>
//           <button 
//             onClick={onClose}
//             className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
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
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Loan</h3>
//               <p className="text-gray-700 leading-relaxed">{subCategory.description}</p>
//             </div>
            
//             {/* Key Features */}
//             {subCategory.features && (
//               <div>
//                 <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
//                 <ul className="space-y-3">
//                   {subCategory.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
            
//             {/* CTA Section */}
//             <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-white">
//               <h4 className="font-bold text-lg mb-2">Ready to Get Financing?</h4>
//               <p className="text-amber-100 mb-4 text-sm">
//                 Our loan specialists will find the perfect financing solution tailored to your needs and budget.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <Link href="/contact" className="flex-1">
//                   <button className="w-full py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center">
//                     <Phone className="w-4 h-4 mr-2" />
//                     Get Free Consultation
//                   </button>
//                 </Link>
//                 <button 
//                   onClick={handleEmailClick}
//                   className="flex-1 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
//                 >
//                   <Mail className="w-4 h-4 mr-2" />
//                   Get Quote via Email
//                 </button>
//               </div>
//             </div>

//             {/* Additional Benefits */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
//               <div className="text-center p-4 bg-gray-50 rounded-xl">
//                 <Clock className="w-8 h-8 text-amber-500 mx-auto mb-2" />
//                 <h5 className="font-semibold text-gray-800 text-sm">Quick Process</h5>
//                 <p className="text-gray-600 text-xs">Approval in 24 hours</p>
//               </div>
//               <div className="text-center p-4 bg-gray-50 rounded-xl">
//                 <Shield className="w-8 h-8 text-amber-500 mx-auto mb-2" />
//                 <h5 className="font-semibold text-gray-800 text-sm">Expert Advice</h5>
//                 <p className="text-gray-600 text-xs">Personalized guidance</p>
//               </div>
//               <div className="text-center p-4 bg-gray-50 rounded-xl">
//                 <CheckCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
//                 <h5 className="font-semibold text-gray-800 text-sm">Flexible Terms</h5>
//                 <p className="text-gray-600 text-xs">Customizable options</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Enhanced Stats Section similar to Insurance page
// const LoanStatsSection = () => {
//   return (
//     <section className="py-16 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-sm mb-6">
//             <Star className="w-5 h-5 text-amber-400" />
//             <span className="text-base font-semibold text-white">Trusted by Thousands</span>
//             <Star className="w-5 h-5 text-amber-400" />
//           </div>
//           <h3 className="text-3xl font-bold text-white mb-4">
//             Partnered with 20+ Leading Banks
//           </h3>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
//             We work with the most reputable financial institutions to bring you the best loan options
//           </p>
//         </div>

//         {/* Enhanced Stats Section */}
//         <div className="grid grid-cols-3 gap-8 mt-8 pt-12 border-t border-white/20 max-w-2xl mx-auto">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-amber-400 mb-3">20+</div>
//             <div className="text-base text-gray-200 font-medium">Bank Partners</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-amber-400 mb-3">50K+</div>
//             <div className="text-base text-gray-200 font-medium">Loans Sanctioned</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-amber-400 mb-3">24/7</div>
//             <div className="text-base text-gray-200 font-medium">Customer Support</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Main LoanPage Component - Updated to match Insurance page UI
// const LoanPage = () => {
//   const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

//   // Loan categories with updated colors to match insurance page
//   const loanCategories: CategoryWithSubcategories[] = [
//     {
//       id: "property-loans",
//       name: "Property Loans",
//       description: "Financing solutions for your property needs",
//       subcategories: [
//         { 
//           id: "home-loan", 
//           name: "Home Loan", 
//           description: "Realize your dream of owning a home with our flexible home loan options. We offer competitive interest rates, long repayment tenures, and quick processing to make your home buying journey smooth.",
//           icon: <Home className="w-8 h-8 text-rose-500" />,
//           features: [
//             "Competitive interest rates",
//             "Long repayment tenure up to 30 years",
//             "Flexible repayment options",
//             "Top-up loan facility",
//             "Quick processing and disbursal"
//           ]
//         },
//         { 
//           id: "mortgage-loan", 
//           name: "Mortgage Loan", 
//           description: "Unlock the value of your property with our mortgage loans. Get substantial funds for various needs while keeping your property as security with transparent terms and conditions.",
//           icon: <FileText className="w-8 h-8 text-emerald-400" />,
//           features: [
//             "Loan against property",
//             "High loan-to-value ratio",
//             "Flexible end-use of funds",
//             "Long repayment tenure",
//             "Balance transfer facility"
//           ]
//         },
//       ],
//     },
//     {
//       id: "vehicle-loans",
//       name: "Vehicle Loans",
//       description: "Easy financing for your vehicle purchases",
//       subcategories: [
//         { 
//           id: "car-loan", 
//           name: "Car Loan", 
//           description: "Drive home your dream car with our attractive car loan options. We offer financing for new and used cars with minimal documentation and quick approval process.",
//           icon: <Car className="w-8 h-8 text-sky-400" />,
//           features: [
//             "Financing for new and used cars",
//             "Competitive interest rates",
//             "Minimal documentation",
//             "Quick approval process",
//             "Flexible repayment options"
//           ]
//         },
//         { 
//           id: "bike-loan", 
//           name: "Bike Loan", 
//           description: "Get on the road with your dream bike through our convenient bike loan options. We offer affordable financing for both new and pre-owned bikes with easy eligibility criteria.",
//           icon: <Bike className="w-8 h-8 text-amber-400" />,
//           features: [
//             "Financing for new and used bikes",
//             "Low interest rates",
//             "Quick approval process",
//             "Minimal documentation required",
//             "Flexible repayment tenure"
//           ]
//         },
//       ],
//     }
//   ];

//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />

//       <section className="flex-1 pt-32 pb-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Enhanced Header matching Insurance page */}
//           <div className="text-center mb-16">
//             <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
//                 Loan Services
//               </h1>
//             </div>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
//               Comprehensive financing solutions for every aspect of your life. 
//               Choose from our wide range of loan products designed to fulfill your dreams.
//             </p>
//           </div>

//           {/* Loan Categories matching Insurance page style */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             {loanCategories.map((category) => (
//               <div key={category.id} className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="flex items-center mb-6 pb-4 border-b border-white/30">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center mr-4">
//                     {category.id === "property-loans" ? (
//                       <Home className="w-6 h-6 text-white" />
//                     ) : (
//                       <Car className="w-6 h-6 text-white" />
//                     )}
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">{category.name}</h2>
//                     <p className="text-gray-200 text-sm">{category.description}</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   {category.subcategories.map((sub) => (
//                     <div
//                       key={sub.id}
//                       onClick={() => setSelectedSubCategory(sub)}
//                       className="cursor-pointer group rounded-xl p-5 bg-white/20 backdrop-blur border border-white/30 hover:border-amber-400/50 hover:shadow-md transition-all duration-300"
//                     >
//                       <div className="flex items-center">
//                         <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/30 group-hover:bg-amber-500/40 transition-colors mr-4">
//                           {React.cloneElement(sub.icon as React.ReactElement<{ className?: string }>, { 
//                             className: "w-6 h-6 text-amber-300" 
//                           })}
//                         </div>
//                         <div className="flex-grow">
//                           <h4 className="font-semibold text-white group-hover:text-amber-200 transition-colors">
//                             {sub.name}
//                           </h4>
//                           <p className="text-gray-200 text-sm mt-1 line-clamp-2">
//                             {sub.description}
//                           </p>
//                         </div>
//                         <div className="text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <Plus className="w-5 h-5" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Enhanced Stats Section */}
//         <LoanStatsSection />

//         {/* Main CTA Section matching Insurance page */}
//         <div className="max-w-7xl mx-auto px-6 mt-8">
//           <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
//             <Calculator className="w-16 h-16 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Find Your Perfect Loan?
//             </h2>
//             <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
//               Our loan experts will analyze your needs and recommend the best financing options 
//               from our 20+ partner banks to ensure you get optimal terms.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg">
//                 Get Free Loan Analysis
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
//                 Compare Loan Offers
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Modal for loan details */}
//       {selectedSubCategory && (
//         <LoanInformationBox 
//           subCategory={selectedSubCategory} 
//           onClose={() => setSelectedSubCategory(null)} 
//         />
//       )}
//     </main>
//   );
// };

// export default LoanPage;





















"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Car, FileText, Bike, Calculator, Shield, X, Phone, Mail, Clock, CheckCircle, Star, Plus } from "lucide-react";
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

// Information component for loan categories - Updated to match insurance modal
const LoanInformationBox = ({ 
  subCategory, 
  onClose 
}: { 
  subCategory: SubCategory; 
  onClose: () => void; 
}) => {
  if (!subCategory) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 mr-4">
              {React.cloneElement(subCategory.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-amber-600" })}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{subCategory.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Flexible financing solutions</p>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Loan</h3>
              <p className="text-gray-700 leading-relaxed">{subCategory.description}</p>
            </div>
            
            {/* Key Features */}
            {subCategory.features && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                <ul className="space-y-3">
                  {subCategory.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* CTA Section - Updated with single bigger button */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Ready to Get Financing?</h4>
              <p className="text-amber-100 mb-6 text-sm">
                Our loan specialists will find the perfect financing solution tailored to your needs and budget.
              </p>
              <Link href="/contact" className="block">
                <button className="w-full py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center text-lg cursor-pointer">
                  <Phone className="w-5 h-5 mr-3" />
                  Get Free Consultation
                </button>
              </Link>
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800 text-sm">Quick Process</h5>
                <p className="text-gray-600 text-xs">Approval in 24 hours</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800 text-sm">Expert Advice</h5>
                <p className="text-gray-600 text-xs">Personalized guidance</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h5 className="font-semibold text-gray-800 text-sm">Flexible Terms</h5>
                <p className="text-gray-600 text-xs">Customizable options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Stats Section similar to Insurance page
const LoanStatsSection = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-sm mb-6">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-base font-semibold text-white">Trusted by Thousands</span>
            <Star className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Partnered with 20+ Leading Banks
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We work with the most reputable financial institutions to bring you the best loan options
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-8 pt-12 border-t border-white/20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">20+</div>
            <div className="text-base text-gray-200 font-medium">Bank Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">50K+</div>
            <div className="text-base text-gray-200 font-medium">Loans Sanctioned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-3">24/7</div>
            <div className="text-base text-gray-200 font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main LoanPage Component - Updated to match Insurance page UI
const LoanPage = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  // Loan categories with updated colors to match insurance page
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
          icon: <Home className="w-8 h-8 text-rose-500" />,
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
          icon: <FileText className="w-8 h-8 text-emerald-400" />,
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
          description: "Drive home your dream car with our attractive car loan options. We offer financing for new cars with minimal documentation and quick approval process.",
          icon: <Car className="w-8 h-8 text-sky-400" />,
          features: [
            "Financing for new  cars",
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
          icon: <Bike className="w-8 h-8 text-amber-400" />,
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

      <section className="flex-1 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Header matching Insurance page */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
                Loan Services
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive financing solutions for every aspect of your life. 
              Choose from our wide range of loan products designed to fulfill your dreams.
            </p>
          </div>

          {/* Loan Categories matching Insurance page style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {loanCategories.map((category) => (
              <div key={category.id} className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6 pb-4 border-b border-white/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center mr-4">
                    {category.id === "property-loans" ? (
                      <Home className="w-6 h-6 text-white" />
                    ) : (
                      <Car className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.subcategories.map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => setSelectedSubCategory(sub)}
                      className="cursor-pointer group rounded-xl p-5 bg-white/20 backdrop-blur border border-white/30 hover:border-amber-400/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/30 group-hover:bg-amber-500/40 transition-colors mr-4">
                          {React.cloneElement(sub.icon as React.ReactElement<{ className?: string }>, { 
                            className: "w-6 h-6 text-amber-300" 
                          })}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-white group-hover:text-amber-200 transition-colors">
                            {sub.name}
                          </h4>
                          <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                            {sub.description}
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

        {/* Enhanced Stats Section */}
        <LoanStatsSection />

        {/* Main CTA Section matching Insurance page - Updated with single bigger button */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
            <Calculator className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Loan?
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our loan experts will analyze your needs and recommend the best financing options 
              from our 20+ partner banks to ensure you get optimal terms.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="block w-full max-w-md">
                <button className="w-full px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer">
                  Get Free Loan Consultation
                </button>
              </Link>
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