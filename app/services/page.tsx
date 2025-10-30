// "use client";

// import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { BgComponent } from "@/components/BgComponent";
// import { useRouter } from "next/navigation";
// import {
//   Shield,
//   Briefcase,
//   UserCheck,
//   ChartLine,
//   Gift,
//   Target,
//   ArrowRightLeft,
//   Calendar,
// } from "lucide-react";

// const ServicesPage: React.FC = () => {
//   const router = useRouter();

//   const services = [
//     {
//       name: "Life Insurance",
//       desc: "Coverage tailored to your life goals.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 text-amber-400"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6.75c-3.5 0-6.75 1.5-6.75 4.5s3.25 4.5 6.75 4.5 6.75-1.5 6.75-4.5-3.25-4.5-6.75-4.5z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6.75V3.75m0 15.75v-3"
//           />
//         </svg>
//       ),
//       href: "/services/insurance",
//     },
//     {
//       name: "Loan",
//       desc: "Flexible loans for personal and business needs.",
//       icon: <Briefcase className="w-8 h-8 text-amber-400" />,
//       href: "/services/loan",
//     },
//     {
//       name: "Mutual Funds",
//       desc: "Grow wealth with disciplined investing.",
//       icon: <ChartLine className="w-8 h-8 text-amber-400" />,
//       href: "/services/mutual-funds",
//     },
//     {
//       name: "Bonds",
//       desc: "Stable income with secure bond investments.",
//       icon: <UserCheck className="w-8 h-8 text-amber-400" />,
//       href: "/services/bonds",
//     },
//     {
//       name: "Upcoming NFO",
//       desc: "Discover new fund opportunities.",
//       icon: <Gift className="w-8 h-8 text-amber-400" />,
//       href: "/services/nfo",
//     },
//     {
//       name: "Digital Gold",
//       desc: "Invest in gold digitally with ease.",
//       icon: <Shield className="w-8 h-8 text-amber-400" />,
//       href: "/services/digital-gold",
//     },
//     {
//       name: "Financial Planning",
//       desc: "Comprehensive financial roadmap for your future.",
//       icon: <Target className="w-8 h-8 text-amber-400" />,
//       href: "/services/financial-planning",
//     },
//     {
//       name: "Mutual Funds Against Loan",
//       desc: "Leverage your mutual fund investments for loans.",
//       icon: <ArrowRightLeft className="w-8 h-8 text-amber-400" />,
//       href: "/services/mutual-funds-loan",
//     },
//     {
//       name: "SIF",
//       desc: "Professional investment strategies for sophisticated investors and institutions.",
//       icon: <Calendar className="w-8 h-8 text-amber-400" />,
//       href: "/services/sif",
//     },
//   ];

//   return (
//     <main className="flex flex-col min-h-screen text-white relative">
//       <BgComponent />
//       <Navbar />

//       {/* Header */}
//       <section className="flex-1 pt-32 pb-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
//               Our Services
//             </h1>
//           </div>
//           <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
//             Explore our wide range of financial services designed to protect,
//             grow, and secure your future with trusted guidance.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <div
//               key={s.name}
//               onClick={() => router.push(s.href)}
//               className="cursor-pointer group relative rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
//             >
//               {/* Hover Glow */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

//               {/* Icon */}
//               <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 mb-5 border border-amber-400/20">
//                 {s.icon}
//               </div>

//               {/* Title & Description */}
//               <h4 className="relative text-lg font-semibold text-white">
//                 {s.name}
//               </h4>
//               <p className="relative mt-2 text-slate-300 text-sm leading-relaxed">
//                 {s.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section (Same style as About Us & Bonds) */}
//         <div className="max-w-7xl mx-auto px-6 mt-24">
//           <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
//             <Shield className="w-16 h-16 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Start Building Your Financial Future Today
//             </h2>
//             <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
//               Connect with our financial advisors to create a personalized plan
//               that aligns with your goals, lifestyle, and long-term vision.
//             </p>
//             <div className="flex justify-center">
//               <button
//                 onClick={() => router.push("/contact")}
//                 className="px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer"
//               >
//                 Get Free Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// };

// export default ServicesPage;




// "use client";

// import { useRouter } from "next/navigation";
// import {
//   Shield,
//   Briefcase,
//   UserCheck,
//   ChartLine,
//   Gift,
//   Target,
//   ArrowRightLeft,
//   Calendar,
// } from "lucide-react";

// export default function Services() {
//   const router = useRouter();

//   const services = [
//     {
//       name: "Life Insurance",
//       desc: "Coverage tailored to your life goals.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 text-indigo-600"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6.75c-3.5 0-6.75 1.5-6.75 4.5s3.25 4.5 6.75 4.5 6.75-1.5 6.75-4.5-3.25-4.5-6.75-4.5z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6.75V3.75m0 15.75v-3"
//           />
//         </svg>
//       ),
//       href: "/services/insurance",
//     },
//     {
//       name: "Loan",
//       desc: "Flexible loans for personal and business needs.",
//       icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
//       href: "/services/loan",
//     },
//     {
//       name: "Mutual Funds",
//       desc: "Grow wealth with disciplined investing.",
//       icon: <ChartLine className="w-8 h-8 text-indigo-600" />,
//       href: "/services/mutual-funds",
//     },
//     {
//       name: "Bonds",
//       desc: "Stable income with secure bond investments.",
//       icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
//       href: "/services/bonds",
//     },
//     {
//       name: "Upcoming NFO",
//       desc: "Discover new fund opportunities.",
//       icon: <Gift className="w-8 h-8 text-indigo-600" />,
//       href: "/services/nfo",
//     },
//     {
//       name: "Digital Gold",
//       desc: "Invest in gold digitally with ease.",
//       icon: <Shield className="w-8 h-8 text-indigo-600" />,
//       href: "/services/digital-gold",
//     },
//     {
//       name: "Financial Planning",
//       desc: "Comprehensive financial roadmap for your future.",
//       icon: <Target className="w-8 h-8 text-indigo-600" />,
//       href: "/services/financial-planning",
//     },
//     {
//       name: "Mutual Funds Against Loan",
//       desc: "Leverage your mutual fund investments for loans.",
//       icon: <ArrowRightLeft className="w-8 h-8 text-indigo-600" />,
//       href: "/services/mutual-funds-loan",
//     },
//     {
//       name: "SIF",
//       desc: "Professional investment strategies for sophisticated investors and institutions.",
//       icon: <Calendar className="w-8 h-8 text-indigo-600" />,
//       href: "/services/sif",
//     },
//   ];

//   return (
//     <section className="py-20 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-12 text-center">
//           <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
//             Our Services
//           </h3>
//           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//             Comprehensive solutions across protection, health, investments, and
//             long-term wealth creation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((s) => (
//             <div
//               key={s.name}
//               onClick={() => router.push(s.href)}
//               className="cursor-pointer group relative rounded-2xl p-6 bg-white/80 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
//             >
//               {/* Gradient glow on hover */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

//               {/* Icon */}
//               <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
//                 {s.icon}
//               </div>

//               <h4 className="relative text-lg font-semibold text-slate-800">
//                 {s.name}
//               </h4>
//               <p className="relative mt-2 text-gray-600 text-sm">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { useRouter } from "next/navigation";
import {
  Shield,
  Briefcase,
  UserCheck,
  ChartLine,
  Gift,
  Target,
  ArrowRightLeft,
  Calendar,
} from "lucide-react";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      name: "Life Insurance",
      desc: "Coverage tailored to your life goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75c-3.5 0-6.75 1.5-6.75 4.5s3.25 4.5 6.75 4.5 6.75-1.5 6.75-4.5-3.25-4.5-6.75-4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75V3.75m0 15.75v-3"
          />
        </svg>
      ),
      href: "/services/insurance",
    },
    {
      name: "Loan",
      desc: "Flexible loans for personal and business needs.",
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      href: "/services/loan",
    },
    {
      name: "Mutual Funds",
      desc: "Grow wealth with disciplined investing.",
      icon: <ChartLine className="w-8 h-8 text-indigo-600" />,
      href: "/services/mutual-funds",
    },
    {
      name: "Bonds",
      desc: "Stable income with secure bond investments.",
      icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
      href: "/services/bonds",
    },
    {
      name: "Upcoming NFO",
      desc: "Discover new fund opportunities.",
      icon: <Gift className="w-8 h-8 text-indigo-600" />,
      href: "/services/nfo",
    },
    {
      name: "Digital Gold",
      desc: "Invest in gold digitally with ease.",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      href: "/services/digital-gold",
    },
    {
      name: "Financial Planning",
      desc: "Comprehensive financial roadmap for your future.",
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      href: "/services/financial-planning",
    },
    {
      name: "Mutual Funds Against Loan",
      desc: "Leverage your mutual fund investments for loans.",
      icon: <ArrowRightLeft className="w-8 h-8 text-indigo-600" />,
      href: "/services/mutual-funds-loan",
    },
    {
      name: "SIF",
      desc: "Professional investment strategies for sophisticated investors and institutions.",
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      href: "/services/sif",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen text-white relative">
      <BgComponent />
      <Navbar />

      {/* Header Section */}
      <section className="flex-1 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-400/10 px-8 py-6 rounded-2xl border border-amber-200/30 mb-8 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-4">
              Our Services
            </h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Explore our wide range of financial services designed to protect,
            grow, and secure your future with trusted guidance.
          </p>
        </div>

        {/* Services Cards Section (untouched except slightly darker bg) */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              onClick={() => router.push(s.href)}
              className="cursor-pointer group relative rounded-2xl p-6 bg-white/80 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
                {s.icon}
              </div>

              <h4 className="relative text-lg font-semibold text-slate-800">
                {s.name}
              </h4>
              <p className="relative mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-10 text-center text-white shadow-xl">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Building Your Financial Future Today
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our financial advisors to create a personalized plan
              that aligns with your goals, lifestyle, and long-term vision.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="px-12 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-lg text-lg cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
