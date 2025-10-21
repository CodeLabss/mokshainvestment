module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/services/mutual-funds/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/services/mutual-funds/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// a few changes to be made in the structure of the website
// "use client";
// import React, { useState, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { ChartLine, TrendingUp, BarChart3, Shield, X, Phone, Mail, Clock, CheckCircle, ArrowRight, Building2, Users, Target } from "lucide-react";
// import Link from "next/link";
// interface Company {
//   id: string;
//   name: string;
//   logo_url: string;
//   category?: string;
// }
// interface SubCategory {
//   id: string;
//   name: string;
//   description: string;
//   icon: ReactNode;
//   companies?: Company[];
// }
// interface CategoryWithSubcategories {
//   id: string;
//   name: string;
//   description: string;
//   subcategories: SubCategory[];
// }
// // Enhanced Company Logo Grid Component
// const CompanyLogoGrid = ({ companies, title, description }: { companies: Company[]; title?: string; description?: string }) => {
//   if (companies.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center h-40 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
//         <Building2 className="w-8 h-8 text-gray-400 mb-2" />
//         <p className="text-gray-500 text-sm">No companies added yet</p>
//         <p className="text-gray-400 text-xs mt-1">Admin can add company logos</p>
//       </div>
//     );
//   }
//   return (
//     <div className="space-y-6">
//       {(title || description) && (
//         <div className="text-center mb-2">
//           {title && <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>}
//           {description && <p className="text-gray-600 text-sm">{description}</p>}
//         </div>
//       )}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {companies.map((company) => (
//           <div
//             key={company.id}
//             className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all group"
//           >
//             <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-xl p-2 border border-gray-200 group-hover:bg-indigo-50 transition-colors">
//               <img
//                 src={company.logo_url || "/dummy-logo.png"}
//                 alt={company.name}
//                 className="w-full h-full object-contain"
//                 onError={(e) => {
//                   // Fallback to company initial if logo fails to load
//                   e.currentTarget.style.display = 'none';
//                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
//                 }}
//               />
//               {/* Fallback company initial */}
//               <div className="hidden w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
//                 <span className="text-indigo-600 font-bold text-sm">
//                   {company.name.charAt(0)}
//                 </span>
//               </div>
//             </div>
//             <span className="text-xs font-medium text-gray-700 text-center leading-tight">
//               {company.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// // All Companies Showcase Section
// const AllCompaniesShowcase = ({ companies }: { companies: Company[] }) => {
//   const categories = {
//     "Large Cap": companies.filter(company => company.category === "large-cap"),
//     "Mid Cap": companies.filter(company => company.category === "mid-cap"),
//     "Debt Funds": companies.filter(company => company.category === "debt"),
//     "Hybrid Funds": companies.filter(company => company.category === "hybrid"),
//     "Other Partners": companies.filter(company => !company.category)
//   };
//   return (
//     <div className="bg-white/60 backdrop-blur rounded-2xl p-8 border border-slate-200 shadow-md">
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Trusted Fund House Partners</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           We collaborate with India's leading mutual fund companies to bring you the best investment opportunities
//         </p>
//       </div>
//       <div className="space-y-8">
//         {Object.entries(categories).map(([category, categoryCompanies]) => 
//           categoryCompanies.length > 0 && (
//             <div key={category}>
//               <CompanyLogoGrid
//                 companies={categoryCompanies}
//                 title={category}
//                 description={`Top ${category.toLowerCase()} fund houses`}
//               />
//             </div>
//           )
//         )}
//       </div>
//       {/* Stats Section */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
//         <div className="text-center">
//           <div className="text-2xl font-bold text-indigo-600 mb-1">{companies.length}+</div>
//           <div className="text-sm text-gray-600">Fund Houses</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl font-bold text-indigo-600 mb-1">50+</div>
//           <div className="text-sm text-gray-600">Fund Schemes</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl font-bold text-indigo-600 mb-1">24/7</div>
//           <div className="text-sm text-gray-600">Support</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl font-bold text-indigo-600 mb-1">100%</div>
//           <div className="text-sm text-gray-600">Secure</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// // Information component for mutual fund categories
// const MutualFundInformationBox = ({ 
//   subCategory, 
//   onClose 
// }: { 
//   subCategory: SubCategory; 
//   onClose: () => void; 
// }) => {
//   if (!subCategory) return null;
//   const handleEmailClick = () => {
//     window.location.href = "mailto:info@yourcompany.com?subject=Mutual Fund Inquiry&body=Hello, I would like more information about your mutual fund services.";
//   };
//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 mr-4">
//               {React.cloneElement(subCategory.icon as React.ReactElement, { className: "w-8 h-8 text-indigo-600" })}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">{subCategory.name}</h2>
//               <p className="text-gray-500 text-sm mt-1">Professional investment management</p>
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
//           <div className="grid grid-cols-1 gap-8">
//             {/* Full Width Information */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">About This Investment</h3>
//               <p className="text-gray-700 mb-6 leading-relaxed">{subCategory.description}</p>
//               <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6">
//                 <h4 className="font-semibold text-blue-800 mb-3">Investment Benefits</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Professional fund management</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Diversification across multiple assets</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Affordable investment options</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-blue-700">Tax benefits under applicable laws</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Partner Companies */}
//             {subCategory.companies && subCategory.companies.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-6">Available Fund Houses</h3>
//                 <CompanyLogoGrid companies={subCategory.companies} />
//               </div>
//             )}
//             {/* Full Width CTA Container */}
//             <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div>
//                   <h4 className="font-semibold text-indigo-800 mb-4 text-xl">Start Your Investment Journey</h4>
//                   <p className="text-indigo-700 mb-5 text-lg">
//                     Our investment specialists will help you choose the right mutual funds based on your financial goals and risk appetite.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="space-y-4">
//                     <Link href="/contact" className="block w-full">
//                       <button className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
//                         <Phone className="w-6 h-6 mr-3" />
//                         Consult an Expert
//                       </button>
//                     </Link>
//                     <button 
//                       onClick={handleEmailClick}
//                       className="w-full py-4 border-2 border-indigo-300 text-indigo-600 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors flex items-center justify-center"
//                     >
//                       <Mail className="w-6 h-6 mr-3" />
//                       Email Inquiry
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Why Choose Our Services Section */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Invest Through Us?</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start">
//                   <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                     <Users className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Expert Guidance</h4>
//                     <p className="text-gray-600">Professional advice tailored to your goals</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                     <Shield className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Secure Platform</h4>
//                     <p className="text-gray-600">Safe and regulated investment environment</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                     <Target className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Goal-Based Investing</h4>
//                     <p className="text-gray-600">Customized plans for your financial objectives</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// // Main MutualFundsPage Component
// const MutualFundsPage = () => {
//   const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
//   // Sample mutual fund companies - Admin can update these later
//   const allCompanies: Company[] = [
//     { id: "1", name: "HDFC Mutual Fund", logo_url: "/logos/hdfc-mf.png", category: "large-cap" },
//     { id: "2", name: "ICICI Prudential", logo_url: "/logos/icici-prudential.png", category: "large-cap" },
//     { id: "3", name: "SBI Mutual Fund", logo_url: "/logos/sbi-mf.png", category: "large-cap" },
//     { id: "4", name: "Axis Mutual Fund", logo_url: "/logos/axis-mf.png", category: "large-cap" },
//     { id: "5", name: "Kotak Mutual Fund", logo_url: "/logos/kotak-mf.png", category: "mid-cap" },
//     { id: "6", name: "Aditya Birla Sun Life", logo_url: "/logos/absl-mf.png", category: "mid-cap" },
//     { id: "7", name: "Nippon India", logo_url: "/logos/nippon-mf.png", category: "mid-cap" },
//     { id: "8", name: "UTI Mutual Fund", logo_url: "/logos/uti-mf.png", category: "mid-cap" },
//     { id: "9", name: "Franklin Templeton", logo_url: "/logos/franklin-mf.png", category: "debt" },
//     { id: "10", name: "DSP Mutual Fund", logo_url: "/logos/dsp-mf.png", category: "hybrid" },
//     { id: "11", name: "Mirae Asset", logo_url: "/logos/mirae-mf.png", category: "large-cap" },
//     { id: "12", name: "Canara Robeco", logo_url: "/logos/canara-mf.png", category: "debt" },
//   ];
//   // Mutual fund categories with enhanced data
//   const mutualFundCategories: CategoryWithSubcategories[] = [
//     {
//       id: "equity-funds",
//       name: "Equity Funds",
//       description: "Growth-oriented investments in stocks",
//       subcategories: [
//         { 
//           id: "large-cap", 
//           name: "Large Cap Funds", 
//           description: "Invest in established companies with large market capitalization. These funds offer stability and consistent returns by investing in well-established, financially sound companies.",
//           icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "large-cap")
//         },
//         { 
//           id: "mid-cap", 
//           name: "Mid Cap Funds", 
//           description: "Focus on medium-sized companies with high growth potential. These funds aim for higher returns by investing in companies that are beyond the startup phase and experiencing rapid growth.",
//           icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "mid-cap")
//         },
//       ],
//     },
//     {
//       id: "debt-funds",
//       name: "Debt Funds",
//       description: "Stable returns through fixed income instruments",
//       subcategories: [
//         { 
//           id: "liquid-funds", 
//           name: "Liquid Funds", 
//           description: "Short-term investments with high liquidity and stability. Ideal for parking surplus funds with minimal risk and easy withdrawal options.",
//           icon: <ChartLine className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "debt")
//         },
//         { 
//           id: "income-funds", 
//           name: "Income Funds", 
//           description: "Long-term debt investments for regular income generation. These funds invest in government securities, bonds, and other fixed income instruments.",
//           icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
//           companies: allCompanies.filter(company => company.category === "debt")
//         },
//       ],
//     }
//   ];
//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />
//       <section className="flex-1 py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Mutual Fund Services
//             </h1>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Partnering with India's leading fund houses to bring you the best investment opportunities
//             </p>
//           </div>
//           {/* All Companies Showcase */}
//           <div className="mb-16">
//             <AllCompaniesShowcase companies={allCompanies} />
//           </div>
//           {/* Investment Categories */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             {mutualFundCategories.map((category) => (
//               <div key={category.id} className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-slate-200 shadow-md">
//                 <h2 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-3">{category.name}</h2>
//                 <p className="text-gray-600 text-sm mb-6">{category.description}</p>
//                 <div className="space-y-6">
//                   {category.subcategories.map((sub) => (
//                     <div
//                       key={sub.id}
//                       onClick={() => setSelectedSubCategory(sub)}
//                       className="cursor-pointer group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
//                     >
//                       {/* Gradient glow on hover */}
//                       <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
//                       {/* Icon */}
//                       <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
//                         {sub.icon}
//                       </div>
//                       <h4 className="relative text-lg font-semibold text-slate-800">{sub.name}</h4>
//                       <p className="relative mt-2 text-gray-600 text-sm line-clamp-2">{sub.description}</p>
//                       {/* Company count badge */}
//                       <div className="relative mt-3 flex items-center justify-between">
//                         <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
//                           {sub.companies?.length || 0} Fund Houses
//                         </span>
//                         <ArrowRight className="w-4 h-4 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* CTA Section */}
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center text-white shadow-md mb-12">
//             <ChartLine className="w-16 h-16 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold mb-4">Start Your Investment Journey</h2>
//             <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
//               Our investment experts will help you build a portfolio that matches your financial goals and risk tolerance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-5 justify-center">
//               <Link href="/contact" className="block">
//                 <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors text-lg flex items-center justify-center">
//                   <Phone className="w-6 h-6 mr-3" />
//                   Consult an Expert
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Modal for mutual fund details */}
//       {selectedSubCategory && (
//         <MutualFundInformationBox 
//           subCategory={selectedSubCategory} 
//           onClose={() => setSelectedSubCategory(null)} 
//         />
//       )}
//     </main>
//   );
// };
// export default MutualFundsPage;
}),
"[project]/mokshainvestment/app/services/mutual-funds/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/services/mutual-funds/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__72e9b02a._.js.map