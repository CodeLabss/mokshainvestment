module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/services/digital-gold/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/services/digital-gold/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// no text with image looks good except for the hero section
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { DollarSign, Shield, Home, ArrowRight } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Updated image paths to use your public folder
// const images = [
//   "/images/digigold4.jpg",
//   "/images/digigold2.jpg",
//   "/images/digigold3.jpg",
//   "/images/digigold6.jpg",
//   "/images/digigold5.jpg",
//   "/images/digigold7.jpg",
//   "/images/digigold8.jpg",
//   "/images/digigold9.jpg",
//   "/images/digigold10.jpg",
// ];
// const imageContent = [
//   {
//     title: "What is Digital Gold?",
//     description: "Digital Gold is physical gold that is bought and stored online. You can buy it in small quantities, starting from as low as ₹1, and it's kept safe in a secure vault on your behalf.",
//   },
//   {
//     title: "Why Invest in Gold?",
//     description: "Gold is a timeless asset. It's a hedge against inflation, a safe haven asset during economic uncertainty, and a great way to diversify your investment portfolio for stability.",
//   },
//   {
//     title: "Global Impact",
//     description: "Geopolitical events, like the sanctions on Russia, have led countries like India and China to increase their gold reserves, highlighting its role as a secure alternative to U.S. dollar-based assets.",
//   },
//   {
//     title: "Safe, Secure & Transparent",
//     description: "Your digital gold is stored with trusted custodians like Brinks. The entire process is transparent, with a live price ticker and a trustee (Vistra) ensuring your assets are protected.",
//   },
//   {
//     title: "Guaranteed 24K Gold",
//     description: "We guarantee 99.5% purity. Your gold is 24 Karat and is certified by the National Accreditation Board for Testing & Calibration Laboratories (NABL), a government-approved body.",
//   },
//   {
//     title: "Ease of Transacting",
//     description: "Enjoy a fully paperless experience. From KYC to transactions, everything is done online. You get instant credit and can start investing in minutes.",
//   },
//   {
//     title: "Easy Liquidity",
//     description: "Your investment is highly liquid. You can sell your digital gold anytime, anywhere, and the money is credited to your bank account quickly, usually within T+1 days.",
//   },
//   {
//     title: "Home Delivery",
//     description: "Want physical gold? You can get your digital gold redeemed as coins or bars, delivered straight to your home with full transit insurance across 19,000+ pin codes in India.",
//   },
//   {
//     title: "Redeem as Jewellery",
//     description: "Redeeming your gold isn't just for coins or bars. You can also use your digital gold to purchase beautiful jewellery from trusted partners like Tanishq and CaratLane.",
//   },
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mb-4">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-amber-400" })}
//     </div>
//     <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//     <p className="text-sm text-slate-200">{description}</p>
//   </div>
// );
// const DigitalGoldPage = () => {
//   const [activeImage, setActiveImage] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const isDesktop = window.innerWidth >= 768;
//     if (isDesktop) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
//               setActiveImage(index);
//             }
//           });
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.5,
//         }
//       );
//       sectionRefs.current.forEach((section) => {
//         if (section) {
//           observer.observe(section);
//         }
//       });
//       return () => {
//         sectionRefs.current.forEach((section) => {
//           if (section) {
//             observer.unobserve(section);
//           }
//         });
//       };
//     }
//   }, []);
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section */}
//         <section className="min-h-screen py-24 flex flex-col items-center justify-center text-center bg-transparent">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4 animate-fade-in-up">Digital Gold</h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-down">
//             Invest in physical gold, stored securely, with the ease and liquidity of a digital asset. Start your golden journey today.
//           </p>
//         </section>
//         {/* --- */}
//         {/* Features Section */}
//         <section className="py-16 bg-transparent">
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<Shield />}
//               title="Safe & Secure"
//               description="Your gold is stored in insured vaults with trusted custodians, ensuring maximum security."
//             />
//             <FeatureCard
//               icon={<DollarSign />}
//               title="Affordable & Accessible"
//               description="Buy and sell gold in small amounts, starting from as low as ₹1, without any storage fees."
//             />
//             <FeatureCard
//               icon={<Home />}
//               title="Physical Delivery"
//               title="Physical Delivery"
//               description="Redeem your digital gold for physical coins or bars and get them delivered to your doorstep."
//             />
//           </div>
//         </section>
//         {/* --- */}
//         {/* Refactored Responsive Sticky Scroll Section */}
//         <section className="relative py-20 bg-transparent">
//           {/* Main sticky container for desktop */}
//           <div className="hidden md:flex sticky top-24 h-screen items-center justify-center">
//             {/* The single, centered block with dynamic image and text */}
//             <div className="relative w-full max-w-5xl h-[70vh] p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
//               {/* Image as background with fade effect */}
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={imageContent[index].title}
//                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
//                     activeImage === index ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Invisible scrollable content for trigger on desktop */}
//           <div className="hidden md:block">
//             {imageContent.map((content, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 className="min-h-[70vh] flex items-center"
//               />
//             ))}
//           </div>
//           {/* Mobile Layout: Image then Description */}
//           <div className="md:hidden max-w-4xl mx-auto px-6 space-y-24">
//             {imageContent.map((content, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-full rounded-2xl overflow-hidden mb-6 shadow-xl">
//                     <img 
//                         src={images[index]} 
//                         alt={content.title}
//                         className="w-full h-auto object-contain"
//                     />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* --- */}
//         {/* CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Ready to Shine?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Invest in a brighter future with digital gold. Start your golden journey today.
//             </p>
//             <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400">
//               <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//               <span className="relative z-10">Invest Now</span>
//               <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// kindof look good 
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { DollarSign, Shield, Home, ArrowRight } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Updated image paths to use your public folder
// const images = [
//   "/images/digigold4.jpg",
//   "/images/digigold2.jpg",
//   "/images/digigold3.jpg",
//   "/images/digigold6.jpg",
//   "/images/digigold5.jpg",
//   "/images/digigold7.jpg",
//   "/images/digigold8.jpg",
//   "/images/digigold9.jpg",
//   "/images/digigold10.jpg",
// ];
// const imageContent = [
//   {
//     title: "What is Digital Gold?",
//     description: "Digital Gold is physical gold that is bought and stored online. You can buy it in small quantities, starting from as low as ₹1, and it's kept safe in a secure vault on your behalf.",
//   },
//   {
//     title: "Why Invest in Gold?",
//     description: "Gold is a timeless asset. It's a hedge against inflation, a safe haven asset during economic uncertainty, and a great way to diversify your investment portfolio for stability.",
//   },
//   {
//     title: "Global Impact",
//     description: "Geopolitical events, like the sanctions on Russia, have led countries like India and China to increase their gold reserves, highlighting its role as a secure alternative to U.S. dollar-based assets.",
//   },
//   {
//     title: "Safe, Secure & Transparent",
//     description: "Your digital gold is stored with trusted custodians like Brinks. The entire process is transparent, with a live price ticker and a trustee (Vistra) ensuring your assets are protected.",
//   },
//   {
//     title: "Guaranteed 24K Gold",
//     description: "We guarantee 99.5% purity. Your gold is 24 Karat and is certified by the National Accreditation Board for Testing & Calibration Laboratories (NABL), a government-approved body.",
//   },
//   {
//     title: "Ease of Transacting",
//     description: "Enjoy a fully paperless experience. From KYC to transactions, everything is done online. You get instant credit and can start investing in minutes.",
//   },
//   {
//     title: "Easy Liquidity",
//     description: "Your investment is highly liquid. You can sell your digital gold anytime, anywhere, and the money is credited to your bank account quickly, usually within T+1 days.",
//   },
//   {
//     title: "Home Delivery",
//     description: "Want physical gold? You can get your digital gold redeemed as coins or bars, delivered straight to your home with full transit insurance across 19,000+ pin codes in India.",
//   },
//   {
//     title: "Redeem as Jewellery",
//     description: "Redeeming your gold isn't just for coins or bars. You can also use your digital gold to purchase beautiful jewellery from trusted partners like Tanishq and CaratLane.",
//   },
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mb-4">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-amber-400" })}
//     </div>
//     <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//     <p className="text-sm text-slate-200">{description}</p>
//   </div>
// );
// const DigitalGoldPage = () => {
//   const [activeImage, setActiveImage] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const isDesktop = window.innerWidth >= 768;
//     if (isDesktop) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
//               setActiveImage(index);
//             }
//           });
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.5,
//         }
//       );
//       sectionRefs.current.forEach((section) => {
//         if (section) {
//           observer.observe(section);
//         }
//       });
//       return () => {
//         sectionRefs.current.forEach((section) => {
//           if (section) {
//             observer.unobserve(section);
//           }
//         });
//       };
//     }
//   }, []);
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section - Refined for better visual balance and flow */}
//         <section className="py-48 flex flex-col items-center justify-center text-center bg-transparent">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4 animate-fade-in-up">Digital Gold</h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-down mb-8">
//             Invest in physical gold, stored securely, with the ease and liquidity of a digital asset. Start your golden journey today.
//           </p>
//           <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400 animate-fade-in-up">
//             <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//             <span className="relative z-10">Invest Now</span>
//             <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//           </button>
//         </section>
//         {/* --- */}
//         {/* Features Section */}
//         <section className="py-16 bg-transparent">
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<Shield />}
//               title="Safe & Secure"
//               description="Your gold is stored in insured vaults with trusted custodians, ensuring maximum security."
//             />
//             <FeatureCard
//               icon={<DollarSign />}
//               title="Affordable & Accessible"
//               description="Buy and sell gold in small amounts, starting from as low as ₹1, without any storage fees."
//             />
//             <FeatureCard
//               icon={<Home />}
//               title="Physical Delivery"
//               description="Redeem your digital gold for physical coins or bars and get them delivered to your doorstep."
//             />
//           </div>
//         </section>
//         {/* --- */}
//         {/* Refactored Responsive Sticky Scroll Section */}
//         <section className="relative py-20 bg-transparent">
//           {/* Main sticky container for desktop */}
//           <div className="hidden md:flex sticky top-24 h-screen items-center justify-center">
//             {/* The single, centered block with dynamic image */}
//             <div className="relative w-full max-w-5xl h-[70vh] p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
//               {/* Image as background with fade effect */}
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={imageContent[index].title}
//                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
//                     activeImage === index ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Invisible scrollable content for trigger on desktop */}
//           <div className="hidden md:block">
//             {imageContent.map((content, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 className="min-h-[70vh] flex items-center"
//               />
//             ))}
//           </div>
//           {/* Mobile Layout: Image then Description (retained previous structure) */}
//           <div className="md:hidden max-w-4xl mx-auto px-6 space-y-24">
//             {imageContent.map((content, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-full rounded-2xl overflow-hidden mb-6 shadow-xl">
//                     <img 
//                         src={images[index]} 
//                         alt={content.title}
//                         className="w-full h-auto object-contain"
//                     />
//                 </div>
//                 {/* Description for mobile as requested in prior iterations */}
//                 <div className="text-center">
//                   <h2 className="text-2xl font-bold text-amber-400 mb-4">{content.title}</h2>
//                   <p className="text-lg text-slate-200 leading-relaxed">{content.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* --- */}
//         {/* CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Ready to Shine?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Invest in a brighter future with digital gold. Start your golden journey today.
//             </p>
//             <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400">
//               <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//               <span className="relative z-10">Invest Now</span>
//               <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { DollarSign, Shield, Home, ArrowRight } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Updated image paths to use your public folder
// const images = [
//   "/images/digigold4.jpg",
//   "/images/digigold2.jpg",
//   "/images/digigold3.jpg",
//   "/images/digigold6.jpg",
//   "/images/digigold5.jpg",
//   "/images/digigold7.jpg",
//   "/images/digigold8.jpg",
//   "/images/digigold9.jpg",
//   "/images/digigold10.jpg",
// ];
// const imageContent = [
//   {
//     title: "What is Digital Gold?",
//     description: "Digital Gold is physical gold that is bought and stored online. You can buy it in small quantities, starting from as low as ₹1, and it's kept safe in a secure vault on your behalf.",
//   },
//   {
//     title: "Why Invest in Gold?",
//     description: "Gold is a timeless asset. It's a hedge against inflation, a safe haven asset during economic uncertainty, and a great way to diversify your investment portfolio for stability.",
//   },
//   {
//     title: "Global Impact",
//     description: "Geopolitical events, like the sanctions on Russia, have led countries like India and China to increase their gold reserves, highlighting its role as a secure alternative to U.S. dollar-based assets.",
//   },
//   {
//     title: "Safe, Secure & Transparent",
//     description: "Your digital gold is stored with trusted custodians like Brinks. The entire process is transparent, with a live price ticker and a trustee (Vistra) ensuring your assets are protected.",
//   },
//   {
//     title: "Guaranteed 24K Gold",
//     description: "We guarantee 99.5% purity. Your gold is 24 Karat and is certified by the National Accreditation Board for Testing & Calibration Laboratories (NABL), a government-approved body.",
//   },
//   {
//     title: "Ease of Transacting",
//     description: "Enjoy a fully paperless experience. From KYC to transactions, everything is done online. You get instant credit and can start investing in minutes.",
//   },
//   {
//     title: "Easy Liquidity",
//     description: "Your investment is highly liquid. You can sell your digital gold anytime, anywhere, and the money is credited to your bank account quickly, usually within T+1 days.",
//   },
//   {
//     title: "Home Delivery",
//     description: "Want physical gold? You can get your digital gold redeemed as coins or bars, delivered straight to your home with full transit insurance across 19,000+ pin codes in India.",
//   },
//   {
//     title: "Redeem as Jewellery",
//     description: "Redeeming your gold isn't just for coins or bars. You can also use your digital gold to purchase beautiful jewellery from trusted partners like Tanishq and CaratLane.",
//   },
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mb-4">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-amber-400" })}
//     </div>
//     <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//     <p className="text-sm text-slate-200">{description}</p>
//   </div>
// );
// const DigitalGoldPage = () => {
//   const [activeImage, setActiveImage] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const isDesktop = window.innerWidth >= 768;
//     if (isDesktop) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
//               setActiveImage(index);
//             }
//           });
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.5,
//         }
//       );
//       sectionRefs.current.forEach((section) => {
//         if (section) {
//           observer.observe(section);
//         }
//       });
//       return () => {
//         sectionRefs.current.forEach((section) => {
//           if (section) {
//             observer.unobserve(section);
//           }
//         });
//       };
//     }
//   }, []);
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section - Aligned and balanced */}
//         <section className="py-48 flex flex-col items-center justify-center text-center bg-transparent">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4 animate-fade-in-up">Digital Gold</h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-down mb-8">
//             Invest in physical gold, stored securely, with the ease and liquidity of a digital asset. Start your golden journey today.
//           </p>
//           <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400 animate-fade-in-up">
//             <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//             <span className="relative z-10">Invest Now</span>
//             <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//           </button>
//         </section>
//         {/* --- */}
//         {/* Features Section - Title added for consistency */}
//         <section className="py-16 bg-transparent">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400">Features</h2>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<Shield />}
//               title="Safe & Secure"
//               description="Your gold is stored in insured vaults with trusted custodians, ensuring maximum security."
//             />
//             <FeatureCard
//               icon={<DollarSign />}
//               title="Affordable & Accessible"
//               description="Buy and sell gold in small amounts, starting from as low as ₹1, without any storage fees."
//             />
//             <FeatureCard
//               icon={<Home />}
//               title="Physical Delivery"
//               description="Redeem your digital gold for physical coins or bars and get them delivered to your doorstep."
//             />
//           </div>
//         </section>
//         {/* --- */}
//         {/* Refactored Responsive Sticky Scroll Section */}
//         <section className="relative py-20 bg-transparent">
//           {/* Main sticky container for desktop - Centered with flexbox */}
//           <div className="hidden md:flex sticky top-24 h-screen items-center justify-center">
//             {/* The single, centered block with dynamic image */}
//             <div className="relative w-full max-w-5xl h-[70vh] p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
//               {/* Image as background with fade effect */}
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={imageContent[index].title}
//                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
//                     activeImage === index ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Invisible scrollable content for trigger on desktop */}
//           <div className="hidden md:block">
//             {imageContent.map((content, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 className="min-h-[70vh] flex items-center"
//               />
//             ))}
//           </div>
//           {/* Mobile Layout: Image then Description - Description removed */}
//           <div className="md:hidden max-w-4xl mx-auto px-6 space-y-24">
//             {imageContent.map((content, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-full rounded-2xl overflow-hidden mb-6 shadow-xl">
//                     <img 
//                         src={images[index]} 
//                         alt={content.title}
//                         className="w-full h-auto object-contain"
//                     />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* --- */}
//         {/* CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Ready to Shine?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Invest in a brighter future with digital gold. Start your golden journey today.
//             </p>
//             <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400">
//               <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//               <span className="relative z-10">Invest Now</span>
//               <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// can be better
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { DollarSign, Shield, Home, ArrowRight } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Updated image paths to use your public folder
// const images = [
//   "/images/digigold4.jpg",
//   "/images/digigold2.jpg",
//   "/images/digigold3.jpg",
//   "/images/digigold6.jpg",
//   "/images/digigold5.jpg",
//   "/images/digigold7.jpg",
//   "/images/digigold8.jpg",
//   "/images/digigold9.jpg",
//   "/images/digigold10.jpg",
// ];
// const imageContent = [
//   {
//     title: "What is Digital Gold?",
//     description: "Digital Gold is physical gold that is bought and stored online. You can buy it in small quantities, starting from as low as ₹1, and it's kept safe in a secure vault on your behalf.",
//   },
//   {
//     title: "Why Invest in Gold?",
//     description: "Gold is a timeless asset. It's a hedge against inflation, a safe haven asset during economic uncertainty, and a great way to diversify your investment portfolio for stability.",
//   },
//   {
//     title: "Global Impact",
//     description: "Geopolitical events, like the sanctions on Russia, have led countries like India and China to increase their gold reserves, highlighting its role as a secure alternative to U.S. dollar-based assets.",
//   },
//   {
//     title: "Safe, Secure & Transparent",
//     description: "Your digital gold is stored with trusted custodians like Brinks. The entire process is transparent, with a live price ticker and a trustee (Vistra) ensuring your assets are protected.",
//   },
//   {
//     title: "Guaranteed 24K Gold",
//     description: "We guarantee 99.5% purity. Your gold is 24 Karat and is certified by the National Accreditation Board for Testing & Calibration Laboratories (NABL), a government-approved body.",
//   },
//   {
//     title: "Ease of Transacting",
//     description: "Enjoy a fully paperless experience. From KYC to transactions, everything is done online. You get instant credit and can start investing in minutes.",
//   },
//   {
//     title: "Easy Liquidity",
//     description: "Your investment is highly liquid. You can sell your digital gold anytime, anywhere, and the money is credited to your bank account quickly, usually within T+1 days.",
//   },
//   {
//     title: "Home Delivery",
//     description: "Want physical gold? You can get your digital gold redeemed as coins or bars, delivered straight to your home with full transit insurance across 19,000+ pin codes in India.",
//   },
//   {
//     title: "Redeem as Jewellery",
//     description: "Redeeming your gold isn't just for coins or bars. You can also use your digital gold to purchase beautiful jewellery from trusted partners like Tanishq and CaratLane.",
//   },
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mb-4">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-amber-400" })}
//     </div>
//     <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//     <p className="text-sm text-slate-200">{description}</p>
//   </div>
// );
// const DigitalGoldPage = () => {
//   const [activeImage, setActiveImage] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const handleResize = () => {
//       const isDesktop = window.innerWidth >= 768;
//       if (isDesktop) {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
//                 setActiveImage(index);
//               }
//             });
//           },
//           {
//             root: null,
//             rootMargin: "0px",
//             threshold: 0.5,
//           }
//         );
//         sectionRefs.current.forEach((section) => {
//           if (section) observer.observe(section);
//         });
//         return () => {
//           sectionRefs.current.forEach((section) => {
//             if (section) observer.unobserve(section);
//           });
//         };
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section - Refined for better visual balance and flow */}
//         <section className="py-48 flex flex-col items-center justify-center text-center bg-transparent">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4 animate-fade-in-up">Digital Gold</h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-down mb-8">
//             Invest in physical gold, stored securely, with the ease and liquidity of a digital asset. Start your golden journey today.
//           </p>
//           <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400 animate-fade-in-up">
//             <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//             <span className="relative z-10">Invest Now</span>
//             <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//           </button>
//         </section>
//         {/* --- */}
//         {/* Features Section - Title added for consistency */}
//         <section className="py-16 bg-transparent">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400">Features</h2>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<Shield />}
//               title="Safe & Secure"
//               description="Your gold is stored in insured vaults with trusted custodians, ensuring maximum security."
//             />
//             <FeatureCard
//               icon={<DollarSign />}
//               title="Affordable & Accessible"
//               description="Buy and sell gold in small amounts, starting from as low as ₹1, without any storage fees."
//             />
//             <FeatureCard
//               icon={<Home />}
//               title="Physical Delivery"
//               description="Redeem your digital gold for physical coins or bars and get them delivered to your doorstep."
//             />
//           </div>
//         </section>
//         {/* --- */}
//         {/* Refactored Responsive Sticky Scroll Section */}
//         <section className="relative py-20 bg-transparent">
//           {/* Main sticky container for desktop - Centered with flexbox */}
//           <div className="hidden md:flex sticky top-24 h-screen items-center justify-center">
//             {/* The single, centered block with dynamic image */}
//             <div className="relative w-full max-w-5xl h-[70vh] p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={imageContent[index].title}
//                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
//                     activeImage === index ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Invisible scrollable content for trigger on desktop */}
//           <div className="hidden md:block">
//             {imageContent.map((content, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 className="min-h-[70vh] flex items-center"
//               />
//             ))}
//           </div>
//           {/* Mobile Layout: Image then Description - Removed description */}
//           <div className="md:hidden max-w-4xl mx-auto px-6 space-y-24">
//             {imageContent.map((content, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-full rounded-2xl overflow-hidden mb-6 shadow-xl relative transition-transform duration-300 ease-in-out hover:scale-[1.02]">
//                     <img 
//                         src={images[index]} 
//                         alt={content.title}
//                         className="w-full h-auto object-contain"
//                     />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* --- */}
//         {/* CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Ready to Shine?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Invest in a brighter future with digital gold. Start your golden journey today.
//             </p>
//             <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400">
//               <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//               <span className="relative z-10">Invest Now</span>
//               <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// except hero secto
// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { DollarSign, Shield, Home, ArrowRight, Gem } from "lucide-react";
// import { BgComponent } from "@/components/BgComponent";
// // Updated image paths to use your public folder
// const images = [
//   "/images/digigold4.jpg",
//   "/images/digigold2.jpg",
//   "/images/digigold3.jpg",
//   "/images/digigold6.jpg",
//   "/images/digigold5.jpg",
//   "/images/digigold7.jpg",
//   "/images/digigold8.jpg",
//   "/images/digigold9.jpg",
//   "/images/digigold10.jpg",
// ];
// const imageContent = [
//   {
//     title: "What is Digital Gold?",
//     description: "Digital Gold is physical gold that is bought and stored online. You can buy it in small quantities, starting from as low as ₹1, and it's kept safe in a secure vault on your behalf.",
//   },
//   {
//     title: "Why Invest in Gold?",
//     description: "Gold is a timeless asset. It's a hedge against inflation, a safe haven asset during economic uncertainty, and a great way to diversify your investment portfolio for stability.",
//   },
//   {
//     title: "Global Impact",
//     description: "Geopolitical events, like the sanctions on Russia, have led countries like India and China to increase their gold reserves, highlighting its role as a secure alternative to U.S. dollar-based assets.",
//   },
//   {
//     title: "Safe, Secure & Transparent",
//     description: "Your digital gold is stored with trusted custodians like Brinks. The entire process is transparent, with a live price ticker and a trustee (Vistra) ensuring your assets are protected.",
//   },
//   {
//     title: "Guaranteed 24K Gold",
//     description: "We guarantee 99.5% purity. Your gold is 24 Karat and is certified by the National Accreditation Board for Testing & Calibration Laboratories (NABL), a government-approved body.",
//   },
//   {
//     title: "Ease of Transacting",
//     description: "Enjoy a fully paperless experience. From KYC to transactions, everything is done online. You get instant credit and can start investing in minutes.",
//   },
//   {
//     title: "Easy Liquidity",
//     description: "Your investment is highly liquid. You can sell your digital gold anytime, anywhere, and the money is credited to your bank account quickly, usually within T+1 days.",
//   },
//   {
//     title: "Home Delivery",
//     description: "Want physical gold? You can get your digital gold redeemed as coins or bars, delivered straight to your home with full transit insurance across 19,000+ pin codes in India.",
//   },
//   {
//     title: "Redeem as Jewellery",
//     description: "Redeeming your gold isn't just for coins or bars. You can also use your digital gold to purchase beautiful jewellery from trusted partners like Tanishq and CaratLane.",
//   },
// ];
// const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-amber-400">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400/20 mb-4">
//       {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-amber-400" })}
//     </div>
//     <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//     <p className="text-sm text-slate-200">{description}</p>
//   </div>
// );
// const DigitalGoldPage = () => {
//   const [activeImage, setActiveImage] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
//             setActiveImage(index);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.6,
//       }
//     );
//     sectionRefs.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });
//     return () => {
//       sectionRefs.current.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);
//   return (
//     <main className="relative flex flex-col min-h-screen text-white">
//       <BgComponent />
//       <div className="relative z-10">
//         <Navbar />
//         {/* Hero Section */}
//         <section className="py-32 flex flex-col items-center justify-center text-center bg-transparent">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400 mb-4">Digital Gold</h1>
//           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
//             Invest in physical gold, stored securely, with the ease and liquidity of a digital asset. Start your golden journey today.
//           </p>
//           <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400">
//             <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//             <span className="relative z-10">Invest Now</span>
//             <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//           </button>
//         </section>
//         {/* Features Section */}
//         <section className="py-16 bg-transparent">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-400">Features</h2>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<Shield />}
//               title="Safe & Secure"
//               description="Your gold is stored in insured vaults with trusted custodians, ensuring maximum security."
//             />
//             <FeatureCard
//               icon={<DollarSign />}
//               title="Affordable & Accessible"
//               description="Buy and sell gold in small amounts, starting from as low as ₹1, without any storage fees."
//             />
//             <FeatureCard
//               icon={<Home />}
//               title="Physical Delivery"
//               description="Redeem your digital gold for physical coins or bars and get them delivered to your doorstep."
//             />
//           </div>
//         </section>
//         {/* Image Scroll Section with Small Counter */}
//         <section className="relative py-10 bg-transparent">
//           {/* Desktop Layout */}
//           <div className="hidden md:block">
//             {/* Sticky Image Container */}
//             <div className="sticky top-32 h-[70vh] flex items-center justify-center z-20">
//               <div className="relative w-full max-w-4xl mx-auto px-6">
//                 <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 border border-white/20">
//                   {images.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt={imageContent[index].title}
//                       className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
//                         activeImage === index ? "opacity-100" : "opacity-0"
//                       }`}
//                     />
//                   ))}
//                   {/* Small Counter at Bottom Right */}
//                   <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-amber-400/30">
//                     <span className="text-amber-400 text-sm font-medium">
//                       {activeImage + 1} / {images.length}
//                     </span>
//                   </div>
//                   {/* Content Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
//                     <h3 className="text-xl font-bold text-white mb-2">
//                       {imageContent[activeImage]?.title}
//                     </h3>
//                     <p className="text-slate-200 text-sm">
//                       {imageContent[activeImage]?.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Scroll Triggers */}
//             <div className="relative z-10">
//               {imageContent.map((_, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (sectionRefs.current[index] = el)}
//                   className="h-[100vh] flex items-center justify-center"
//                 >
//                   {/* Invisible trigger point */}
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Mobile Layout */}
//           <div className="md:hidden max-w-4xl mx-auto px-6 space-y-16">
//             {imageContent.map((content, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
//                   <img 
//                     src={images[index]} 
//                     alt={content.title}
//                     className="w-full h-auto object-cover"
//                   />
//                   {/* Small Counter for Mobile */}
//                   <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 border border-amber-400/30">
//                     <span className="text-amber-400 text-xs font-medium">
//                       {index + 1} / {images.length}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="text-center mt-6">
//                   <h3 className="text-xl font-bold text-white mb-3">
//                     {content.title}
//                   </h3>
//                   <p className="text-slate-200 text-sm">
//                     {content.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* CTA Section */}
//         <section className="py-20 bg-transparent">
//           <div className="max-w-4xl mx-auto px-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Ready to Shine?</h2>
//             <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
//               Invest in a brighter future with digital gold. Start your golden journey today.
//             </p>
//             <button className="relative px-8 py-4 bg-transparent text-amber-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden border border-amber-400">
//               <div className="absolute inset-0 bg-amber-400 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
//               <span className="relative z-10">Invest Now</span>
//               <ArrowRight className="ml-2 w-5 h-5 inline-block relative z-10" />
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default DigitalGoldPage;
}),
"[project]/mokshainvestment/app/services/digital-gold/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/services/digital-gold/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07d39e9c._.js.map