module.exports = [
"[project]/mokshainvestment/app/services/digital-gold/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import {
//   Shield,
//   Zap,
//   Coins,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// // Fixed Image Stack Component with proper z-index stacking
// const ImageStack = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const images = [
//     "/images/digigold1.jpg",
//     "/images/digigold2.jpg", 
//     "/images/insurance3.jpg",
//     "/images/insurance4.jpg",
//     "/images/insurance5.jpg",
//     "/images/insurance6.jpg",
//     "/images/insurance7.jpg",
//     "/images/insurance8.jpg",
//     "/images/insurance9.jpg",
//     "/images/insurance10.jpg",
//     "/images/insurance11.jpg",
//     "/images/insurance12.jpg",
//   ];
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="relative">
//       {/* Container for the sticky stack - height determines scroll length */}
//       <div className="relative" style={{ height: `${(images.length + 1) * 100}vh` }}>
//         {images.map((src, index) => {
//           // Calculate when this image should be active based on scroll
//           const triggerPoint = index * window.innerHeight;
//           const nextTriggerPoint = (index + 1) * window.innerHeight;
//           // Determine current active image based on scroll position
//           const currentActiveIndex = Math.floor(scrollY / window.innerHeight);
//           // This image should be visible and on top when it's the active one or later
//           const isActive = currentActiveIndex >= index;
//           const isOnTop = currentActiveIndex === index;
//           return (
//             <div
//               key={index}
//               className="sticky top-16 sm:top-20 h-[70vh] sm:h-[80vh] w-full flex items-center justify-center px-4 sm:px-6"
//               style={{
//                 zIndex: isActive ? index + 1 : 1,
//                 transform: `scale(${isOnTop ? 1 : 0.95}) translateY(${isActive && !isOnTop ? '10px' : '0px'})`,
//                 transition: 'all 0.3s ease-out',
//                 opacity: isActive ? 1 : 0.3,
//               }}
//             >
//               {/* Fluid container that adapts to image aspect ratio */}
//               <div className="relative w-full h-full max-w-6xl">
//                 <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
//                   <Image
//                     src={src}
//                     alt={`Digital Gold ${index + 1}`}
//                     fill
//                     className="object-contain sm:object-cover"
//                     priority={index < 3}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// // Simple background - you'll import your own Three.js component
// const SimpleBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"></div>
//     </div>
//   );
// };
// // Main DigitalGoldPage Component
// const DigitalGoldPage = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Secure Gold Storage",
//       description: "Bank-grade security with insured vault storage",
//       icon: <Shield className="w-8 h-8 text-indigo-400" />,
//     },
//     {
//       id: 2,
//       title: "24/7 Trading",
//       description: "Buy and sell gold anytime with instant settlement",
//       icon: <Zap className="w-8 h-8 text-indigo-400" />,
//     },
//     {
//       id: 3,
//       title: "Fractional Ownership",
//       description: "Start small with precise gold measurements",
//       icon: <Coins className="w-8 h-8 text-indigo-400" />,
//     },
//   ];
//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />
//       {/* Simple Background - replace with your Three.js component */}
//       <SimpleBackground />
//       {/* Hero Section with enhanced animations */}
//       <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//               Digital{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse">
//                 Gold
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Experience the future of gold investment with secure digital
//               ownership and instant trading
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/get-started">
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                   Start Investing
//                 </button>
//               </Link>
//               <Link href="/learn">
//                 <button className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Section with enhanced cards */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Digital Gold?
//             </h2>
//             <p className="text-gray-400 text-xl">
//               Modern gold investment with traditional security
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-2"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Image Stack Animation Section */}
//       <section className="relative z-10">
//         <div className="text-center py-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Explore Digital Gold
//           </h2>
//           <p className="text-gray-400 text-xl">
//             Scroll to see our gold investment features unfold
//           </p>
//         </div>
//         <ImageStack />
//       </section>
//       {/* Enhanced Final CTA Section */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Start?
//             </h2>
//             <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
//               Begin your digital gold investment journey today with just a few clicks
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link href="/signup">
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Create Account
//                 </button>
//               </Link>
//               <Link href="/learn">
//                 <button className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Add custom CSS animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//       `}</style>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// "use client";
// import React, { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import {
//   Shield,
//   Zap,
//   Coins,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// // Fixed Image Stack Component with proper z-index stacking
// const ImageStack = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//   const images = [
//     "/images/digigold1.png",
//      "/images/digigold2.png"
//     // "/images/insurance3.jpg",
//     // "/images/insurance4.jpg",
//     // "/images/insurance5.jpg",
//     // "/images/insurance6.jpg",
//     // "/images/insurance7.jpg",
//     // "/images/insurance8.jpg",
//     // "/images/insurance9.jpg",
//     // "/images/insurance10.jpg",
//     // "/images/insurance11.jpg",
//     // "/images/insurance12.jpg",
//   ];
//   useEffect(() => {
//     // Set mounted state and initial window height
//     setIsMounted(true);
//     setWindowHeight(window.innerHeight);
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleResize = () => setWindowHeight(window.innerHeight);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleResize, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   // Don't render anything until mounted (avoids SSR issues)
//   if (!isMounted || windowHeight === 0) {
//     return (
//       <div className="relative" style={{ height: `${(images.length + 1) * 100}vh` }}>
//         <div className="sticky top-16 sm:top-20 h-[70vh] sm:h-[80vh] w-full flex items-center justify-center">
//           <div className="text-white text-xl">Loading...</div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="relative">
//       {/* Container for the sticky stack - height determines scroll length */}
//       <div className="relative" style={{ height: `${(images.length + 1) * 100}vh` }}>
//         {images.map((src, index) => {
//           // Calculate when this image should be active based on scroll
//           const triggerPoint = index * windowHeight;
//           const nextTriggerPoint = (index + 1) * windowHeight;
//           // Determine current active image based on scroll position
//           const currentActiveIndex = Math.floor(scrollY / windowHeight);
//           // This image should be visible and on top when it's the active one or later
//           const isActive = currentActiveIndex >= index;
//           const isOnTop = currentActiveIndex === index;
//           return (
//             <div
//               key={index}
//               className="sticky top-16 sm:top-20 h-[70vh] sm:h-[80vh] w-full flex items-center justify-center px-4 sm:px-6"
//               style={{
//                 zIndex: isActive ? index + 1 : 1,
//                 transform: `scale(${isOnTop ? 1 : 0.95}) translateY(${isActive && !isOnTop ? '10px' : '0px'})`,
//                 transition: 'all 0.3s ease-out',
//                 opacity: isActive ? 1 : 0.3,
//               }}
//             >
//               {/* Fluid container that adapts to image aspect ratio */}
//               <div className="relative w-full h-full max-w-6xl">
//                 <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-800">
//                   <Image
//                     src={src}
//                     alt={`Digital Gold ${index + 1}`}
//                     fill
//                     className="object-contain sm:object-cover"
//                     priority={index < 3}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
//                     onError={(e) => {
//                       console.log(`Failed to load image: ${src}`);
//                     }}
//                     onLoad={() => {
//                       console.log(`Successfully loaded image: ${src}`);
//                     }}
//                   />
//                   {/* Temporary debugging content - remove once images work */}
//                   <div className="absolute inset-0 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-purple-600">
//                     <div className="text-center p-4">
//                       <div className="text-4xl mb-2">🖼️</div>
//                       <div className="text-lg font-semibold">Image {index + 1}</div>
//                       <div className="text-sm opacity-75 mt-1">Path: {src}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// // Simple background - you'll import your own Three.js component
// const SimpleBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"></div>
//     </div>
//   );
// };
// // Main DigitalGoldPage Component
// const DigitalGoldPage = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Secure Gold Storage",
//       description: "Bank-grade security with insured vault storage",
//       icon: <Shield className="w-8 h-8 text-indigo-400" />,
//     },
//     {
//       id: 2,
//       title: "24/7 Trading",
//       description: "Buy and sell gold anytime with instant settlement",
//       icon: <Zap className="w-8 h-8 text-indigo-400" />,
//     },
//     {
//       id: 3,
//       title: "Fractional Ownership",
//       description: "Start small with precise gold measurements",
//       icon: <Coins className="w-8 h-8 text-indigo-400" />,
//     },
//   ];
//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />
//       {/* Simple Background - replace with your Three.js component */}
//       <SimpleBackground />
//       {/* Hero Section with enhanced animations */}
//       <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//               Digital{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse">
//                 Gold
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Experience the future of gold investment with secure digital
//               ownership and instant trading
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/get-started">
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                   Start Investing
//                 </button>
//               </Link>
//               <Link href="/learn">
//                 <button className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Section with enhanced cards */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Digital Gold?
//             </h2>
//             <p className="text-gray-400 text-xl">
//               Modern gold investment with traditional security
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-2"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Image Stack Animation Section */}
//       <section className="relative z-10">
//         <div className="text-center py-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Explore Digital Gold
//           </h2>
//           <p className="text-gray-400 text-xl">
//             Scroll to see our gold investment features unfold
//           </p>
//         </div>
//         <ImageStack />
//       </section>
//       {/* Enhanced Final CTA Section */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Start?
//             </h2>
//             <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
//               Begin your digital gold investment journey today with just a few clicks
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link href="/signup">
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Create Account
//                 </button>
//               </Link>
//               <Link href="/learn">
//                 <button className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Add custom CSS animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//       `}</style>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// "use client";
// import React, { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import {
//   Shield,
//   Zap,
//   Coins,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// // Fixed Image Stack Component with proper z-index stacking
// const ImageStack = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//   const images = [
//     "/images/digigold1.png",
//     "/images/digigold2.png", 
//     "/images/digigold3.png",
//     "/images/digigold4.png",
//     "/images/digigold5.png",
//     "/images/digigold6.png",
//     "/images/digigold7.png",
//     "/images/digigold8.png",
//     "/images/digigold9.png",
//     "/images/digigold10.png",
//     "/images/digigold11.png",
//     "/images/digigold12.png",
//   ];
//   useEffect(() => {
//     // Set mounted state and initial window height
//     setIsMounted(true);
//     setWindowHeight(window.innerHeight);
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleResize = () => setWindowHeight(window.innerHeight);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleResize, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   // Don't render anything until mounted (avoids SSR issues)
//   if (!isMounted || windowHeight === 0) {
//     return (
//       <div className="relative" style={{ height: `${(images.length + 1) * 100}vh` }}>
//         <div className="sticky top-16 sm:top-20 h-[70vh] sm:h-[80vh] w-full flex items-center justify-center">
//           <div className="text-white text-xl">Loading...</div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="relative">
//       {/* Container for the sticky stack - height determines scroll length */}
//       <div className="relative" style={{ height: `${(images.length + 1) * 100}vh` }}>
//         {images.map((src, index) => {
//           // Calculate when this image should be active based on scroll
//           const triggerPoint = index * windowHeight;
//           const nextTriggerPoint = (index + 1) * windowHeight;
//           // Determine current active image based on scroll position
//           const currentActiveIndex = Math.floor(scrollY / windowHeight);
//           // This image should be visible and on top when it's the active one or later
//           const isActive = currentActiveIndex >= index;
//           const isOnTop = currentActiveIndex === index;
//           return (
//             <div
//               key={index}
//               className="sticky top-16 sm:top-20 h-[70vh] sm:h-[80vh] w-full flex items-center justify-center px-4 sm:px-6"
//               style={{
//                 zIndex: isActive ? index + 1 : 1,
//                 transform: `scale(${isOnTop ? 1 : 0.95}) translateY(${isActive && !isOnTop ? '10px' : '0px'})`,
//                 transition: 'all 0.3s ease-out',
//                 opacity: isActive ? 1 : 0.3,
//               }}
//             >
//               {/* Fluid container that adapts to image aspect ratio */}
//               <div className="relative w-full h-full max-w-6xl">
//                 <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-800">
//                   <Image
//                     src={src}
//                     alt={`Digital Gold ${index + 1}`}
//                     fill
//                     className="object-contain sm:object-cover"
//                     priority={index < 3}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
//                     style={{ 
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       width: '100%',
//                       height: '100%'
//                     }}
//                     onError={(e) => {
//                       console.log(`Failed to load image: ${src}`);
//                       e.currentTarget.style.display = 'none';
//                     }}
//                     onLoad={(e) => {
//                       console.log(`Successfully loaded image: ${src}`);
//                       // Hide the placeholder content when image loads
//                       const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-content');
//                       if (placeholder) {
//                         placeholder.style.display = 'none';
//                       }
//                     }}
//                   />
//                   {/* Temporary debugging content - will be hidden when image loads */}
//                   <div className="placeholder-content absolute inset-0 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-purple-600">
//                     <div className="text-center p-4">
//                       <div className="text-4xl mb-2">🖼️</div>
//                       <div className="text-lg font-semibold">Loading Image {index + 1}</div>
//                       <div className="text-sm opacity-75 mt-1">Path: {src}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// // Simple background - you'll import your own Three.js component
// const SimpleBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"></div>
//     </div>
//   );
// };
// // Main DigitalGoldPage Component
// const DigitalGoldPage = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Secure Gold Storage",
//       description: "Bank-grade security with insured vault storage",
//       icon: <Shield className="w-8 h-8 text-indigo-400" />,
//     },
//     {
//       id: 2,
//       title: "24/7 Trading",
//       description: "Buy and sell gold anytime with instant settlement",
//       icon: <Zap className="w-8 h-8 text-indigo-400" />,
//     },
//     {
//       id: 3,
//       title: "Fractional Ownership",
//       description: "Start small with precise gold measurements",
//       icon: <Coins className="w-8 h-8 text-indigo-400" />,
//     },
//   ];
//   return (
//     <main className="flex flex-col min-h-screen bg-transparent">
//       <Navbar />
//       {/* Simple Background - replace with your Three.js component */}
//       <SimpleBackground />
//       {/* Hero Section with enhanced animations */}
//       <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//               Digital{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse">
//                 Gold
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Experience the future of gold investment with secure digital
//               ownership and instant trading
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/get-started">
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                   Start Investing
//                 </button>
//               </Link>
//               <Link href="/learn">
//                 <button className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Section with enhanced cards */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Digital Gold?
//             </h2>
//             <p className="text-gray-400 text-xl">
//               Modern gold investment with traditional security
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-2"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Image Stack Animation Section */}
//       <section className="relative z-10">
//         <div className="text-center py-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Explore Digital Gold
//           </h2>
//           <p className="text-gray-400 text-xl">
//             Scroll to see our gold investment features unfold
//           </p>
//         </div>
//         <ImageStack />
//       </section>
//       {/* Enhanced Final CTA Section */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Start?
//             </h2>
//             <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
//               Begin your digital gold investment journey today with just a few clicks
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link href="/signup">
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Create Account
//                 </button>
//               </Link>
//               <Link href="/learn">
//                 <button className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       {/* Add custom CSS animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//       `}</style>
//     </main>
//   );
// };
// export default DigitalGoldPage;
// image not showing after this code there is testing
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ImageStack = ()=>{
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [windowHeight, setWindowHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const images = [
        "/images/digigold1.png",
        "/images/digigold2.png"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        setWindowHeight(window.innerHeight);
        const handleScroll = ()=>setScrollY(window.scrollY);
        const handleResize = ()=>setWindowHeight(window.innerHeight);
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        window.addEventListener("resize", handleResize, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: `${(images.length + 1) * 100}vh`
            },
            children: images.map((src, index)=>{
                const currentActiveIndex = Math.floor(scrollY / windowHeight);
                const isActive = currentActiveIndex >= index;
                const isOnTop = currentActiveIndex === index;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-16 sm:top-20 h-[70vh] sm:h-[80vh] w-full flex items-center justify-center px-4 sm:px-6",
                    style: {
                        zIndex: isActive ? index + 1 : 1,
                        transform: `scale(${isOnTop ? 1 : 0.95}) translateY(${isActive && !isOnTop ? "10px" : "0px"})`,
                        transition: "all 0.3s ease-out",
                        opacity: isActive ? 1 : 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[70vh] max-w-6xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: `Digital Gold ${index + 1}`,
                                fill: true,
                                className: "object-contain sm:object-cover",
                                priority: index < 3,
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw",
                                onError: (e)=>{
                                    console.error(`Failed to load image: ${src}`);
                                    e.currentTarget.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/services/digital-gold/page.tsx",
                                lineNumber: 905,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/services/digital-gold/page.tsx",
                            lineNumber: 904,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/services/digital-gold/page.tsx",
                        lineNumber: 903,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/mokshainvestment/app/services/digital-gold/page.tsx",
                    lineNumber: 890,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/mokshainvestment/app/services/digital-gold/page.tsx",
            lineNumber: 883,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/app/services/digital-gold/page.tsx",
        lineNumber: 881,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ImageStack;
}),
];

//# sourceMappingURL=mokshainvestment_app_services_digital-gold_page_tsx_7d3e3f9d._.js.map