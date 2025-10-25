// "use client";

// import { useRouter } from "next/navigation";
// import { Shield, Briefcase, UserCheck, ChartLine, Gift, Target, ArrowRightLeft } from "lucide-react";

// export default function Services() {
//   const router = useRouter();

//   const services = [
//     {
//       name: "Life Insurance",
//       desc: "Coverage tailored to your life goals.",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg"
//           fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//           stroke="currentColor" className="w-8 h-8 text-indigo-600">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c-3.5 0-6.75 1.5-6.75 4.5s3.25 4.5 6.75 4.5 6.75-1.5 6.75-4.5-3.25-4.5-6.75-4.5z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V3.75m0 15.75v-3" />
//         </svg>
//       ),
//       href: "/services/insurance"
//     },
//     { 
//       name: "Loan", 
//       desc: "Flexible loans for personal and business needs.", 
//       icon: <Briefcase className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/loan" 
//     },
//     { 
//       name: "Mutual Funds", 
//       desc: "Grow wealth with disciplined investing.", 
//       icon: <ChartLine className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/mutual-funds" 
//     },
//     { 
//       name: "Bonds", 
//       desc: "Stable income with secure bond investments.", 
//       icon: <UserCheck className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/bonds" 
//     },
//     { 
//       name: "Upcoming NFO", 
//       desc: "Discover new fund opportunities.", 
//       icon: <Gift className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/nfo" 
//     },
//     { 
//       name: "Digital Gold", 
//       desc: "Invest in gold digitally with ease.", 
//       icon: <Shield className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/digital-gold" 
//     },
//     { 
//       name: "Financial Planning", 
//       desc: "Comprehensive financial roadmap for your future.", 
//       icon: <Target className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/financial-planning" 
//     },
//     { 
//       name: "Mutual Funds Against Loan", 
//       desc: "Leverage your mutual fund investments for loans.", 
//       icon: <ArrowRightLeft className="w-8 h-8 text-indigo-600" />, 
//       href: "/services/mutual-funds-loan" 
//     },
//   ];

//   return (
//     <section className="py-20 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-12 text-center">
//           <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h3>
//           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//             Comprehensive solutions across protection, health, investments, and long-term wealth creation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((s) => (
//             <div
//               key={s.name}
//               onClick={() => router.push(s.href)}
//               className="cursor-pointer group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
//             >
//               {/* Gradient glow on hover */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

//               {/* Icon */}
//               <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
//                 {s.icon}
//               </div>

//               <h4 className="relative text-lg font-semibold text-slate-800">{s.name}</h4>
//               <p className="relative mt-2 text-gray-600 text-sm">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { useRouter } from "next/navigation";
import { Shield, Briefcase, UserCheck, ChartLine, Gift, Target, ArrowRightLeft, Calendar } from "lucide-react";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      name: "Life Insurance",
      desc: "Coverage tailored to your life goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-8 h-8 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c-3.5 0-6.75 1.5-6.75 4.5s3.25 4.5 6.75 4.5 6.75-1.5 6.75-4.5-3.25-4.5-6.75-4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V3.75m0 15.75v-3" />
        </svg>
      ),
      href: "/services/insurance"
    },
    { 
      name: "Loan", 
      desc: "Flexible loans for personal and business needs.", 
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />, 
      href: "/services/loan" 
    },
    { 
      name: "Mutual Funds", 
      desc: "Grow wealth with disciplined investing.", 
      icon: <ChartLine className="w-8 h-8 text-indigo-600" />, 
      href: "/services/mutual-funds" 
    },
    { 
      name: "Bonds", 
      desc: "Stable income with secure bond investments.", 
      icon: <UserCheck className="w-8 h-8 text-indigo-600" />, 
      href: "/services/bonds" 
    },
    { 
      name: "Upcoming NFO", 
      desc: "Discover new fund opportunities.", 
      icon: <Gift className="w-8 h-8 text-indigo-600" />, 
      href: "/services/nfo" 
    },
    { 
      name: "Digital Gold", 
      desc: "Invest in gold digitally with ease.", 
      icon: <Shield className="w-8 h-8 text-indigo-600" />, 
      href: "/services/digital-gold" 
    },
    { 
      name: "Financial Planning", 
      desc: "Comprehensive financial roadmap for your future.", 
      icon: <Target className="w-8 h-8 text-indigo-600" />, 
      href: "/services/financial-planning" 
    },
    { 
      name: "Mutual Funds Against Loan", 
      desc: "Leverage your mutual fund investments for loans.", 
      icon: <ArrowRightLeft className="w-8 h-8 text-indigo-600" />, 
      href: "/services/mutual-funds-loan" 
    },
    { 
      name: "SIF", 
      desc: "Professional investment strategies for sophisticated investors and institutions.", 
      icon: <Calendar className="w-8 h-8 text-indigo-600" />, 
      href: "/services/sif" 
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across protection, health, investments, and long-term wealth creation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              onClick={() => router.push(s.href)}
              className="cursor-pointer group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

              {/* Icon */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
                {s.icon}
              </div>

              <h4 className="relative text-lg font-semibold text-slate-800">{s.name}</h4>
              <p className="relative mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}