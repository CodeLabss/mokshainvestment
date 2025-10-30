// "use client";
// import React, { useState, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion } from "framer-motion";
// import { FiMail, FiLock, FiAlertCircle, FiShield, FiUserCheck } from "react-icons/fi";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from 'next/link';


// export default function AdminLoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [securityCheck, setSecurityCheck] = useState(true);
//   const [attempts, setAttempts] = useState(0);
//   const [lastAttempt, setLastAttempt] = useState<number>(0);
  
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );

//   // Security validation functions
//   const isValidEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email) && email.length <= 254;
//   };

//   const containsSQLInjection = (input: string): boolean => {
//     const sqlPatterns = [
//       /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|EXEC)\b)/i,
//       /('|"|;|--|\/\*|\*\/|\\\*|\\-)/,
//       /(\b(OR|AND)\b.*=)/i,
//       /(\b(WAITFOR|DELAY)\b)/i
//     ];
//     return sqlPatterns.some(pattern => pattern.test(input));
//   };

//   const containsXSS = (input: string): boolean => {
//     const xssPatterns = [
//       /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
//       /javascript:/gi,
//       /on\w+\s*=/gi,
//       /<iframe/gi,
//       /<object/gi,
//       /<embed/gi
//     ];
//     return xssPatterns.some(pattern => pattern.test(input));
//   };

//   const sanitizeInput = (input: string): string => {
//     return input
//       .replace(/[<>"'`;()&|$\\]/g, '')
//       .substring(0, 255)
//       .trim();
//   };

//   // Check if user is already logged in
//   useEffect(() => {
//     const checkExistingSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (session) {
//         window.location.href = "/admin";
//       }
//     };
//     checkExistingSession();
//   }, []);

//   // Rate limiting function
//   const checkRateLimit = (): boolean => {
//     const now = Date.now();
//     if (now - lastAttempt < 30000 && attempts >= 3) {
//       setError("Too many attempts. Please wait 30 seconds before trying again.");
//       return false;
//     }
    
//     if (now - lastAttempt > 30000) {
//       setAttempts(0);
//     }
    
//     setAttempts(prev => prev + 1);
//     setLastAttempt(now);
//     return true;
//   };

//   async function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
    
//     if (!checkRateLimit()) {
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setSecurityCheck(true);

//     try {
//       // Input validation and sanitization
//       const sanitizedEmail = sanitizeInput(email);
//       const sanitizedPassword = sanitizeInput(password);

//       // Security checks
//       if (!isValidEmail(sanitizedEmail)) {
//         setError("Please enter a valid email address");
//         setSecurityCheck(false);
//         return;
//       }

//       if (containsSQLInjection(sanitizedEmail) || containsSQLInjection(sanitizedPassword)) {
//         setError("Invalid input detected");
//         setSecurityCheck(false);
//         return;
//       }

//       if (containsXSS(sanitizedEmail) || containsXSS(sanitizedPassword)) {
//         setError("Invalid input detected");
//         setSecurityCheck(false);
//         return;
//       }

//       if (sanitizedPassword.length < 6) {
//         setError("Password must be at least 6 characters long");
//         return;
//       }

//       if (sanitizedPassword.length > 128) {
//         setError("Password is too long");
//         return;
//       }

//       console.log("🛡️ Attempting secure login...");

//       const { data, error: authError } = await supabase.auth.signInWithPassword({
//         email: sanitizedEmail,
//         password: sanitizedPassword,
//       });

//       if (authError) {
//         console.error("Authentication error:", authError);
//         setError("Invalid credentials or account not found");
//         setSecurityCheck(false);
//         return;
//       }

//       if (data?.session) {
//         console.log("✅ Login successful, redirecting...");
        
//         setTimeout(() => {
//           window.location.href = "/admin";
//         }, 100);
//         return;
//       }
      
//       setError("Authentication failed");
//       setSecurityCheck(false);
      
//     } catch (err: any) {
//       console.error("Unexpected error:", err);
//       setError("An unexpected error occurred. Please try again.");
//       setSecurityCheck(false);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <Navbar />
      
//       {/* Increased top padding to prevent navbar overlap */}
//       <div className="flex-1 flex items-center justify-center py-12 px-4 pt-32 md:pt-24">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-md"
//         >
//           {/* Security Status Card - Now has proper spacing from navbar */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.1 }}
//             className="mb-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4"
//           >
//             <div className="flex items-center space-x-3">
//               <div className={`p-2 rounded-lg ${securityCheck ? 'bg-green-500/20' : 'bg-amber-500/20'}`}>
//                 {securityCheck ? (
//                   <FiShield className="w-5 h-5 text-green-400" />
//                 ) : (
//                   <FiAlertCircle className="w-5 h-5 text-amber-400" />
//                 )}
//               </div>
//               <div>
//                 <p className="text-white font-medium text-sm">
//                   {securityCheck ? 'Security Check Passed' : 'Security Alert'}
//                 </p>
//                 <p className="text-slate-400 text-xs">
//                   {securityCheck ? 'All systems secure' : 'Please check your inputs'}
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Login Form */}
//           <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
//             {/* Header */}
//             <div className="text-center mb-6 md:mb-8">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <FiUserCheck className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
//               </div>
//               <h1 className="text-xl md:text-2xl font-bold text-amber-400 mb-2">
//                 Admin Portal
//               </h1>
//               <p className="text-slate-300 text-xs md:text-sm">
//                 Restricted access - Authorized personnel only
//               </p>
//             </div>

//             <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
//               {/* Email Field */}
//               <div>
//                 <label className="text-slate-300 text-sm font-medium mb-2 block">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiMail className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
//                   </div>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (value.length <= 254 && !containsSQLInjection(value) && !containsXSS(value)) {
//                         setEmail(value);
//                       }
//                     }}
//                     required
//                     className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm md:text-base"
//                     placeholder="admin@yourcompany.com"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="text-slate-300 text-sm font-medium mb-2 block">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiLock className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
//                   </div>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (value.length <= 128 && !containsSQLInjection(value) && !containsXSS(value)) {
//                         setPassword(value);
//                       }
//                     }}
//                     required
//                     className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm md:text-base"
//                     placeholder="Enter your password"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>

//               {/* Error Message - Now has proper spacing */}
//               {error && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   className="p-3 md:p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl mt-2"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <FiAlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
//                     <p className="text-rose-400 text-sm">{error}</p>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{ scale: loading ? 1 : 1.02 }}
//                 whileTap={{ scale: loading ? 1 : 0.98 }}
//                 className="w-full px-6 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm md:text-base mt-4"
//               >
//                 {loading ? (
//                   <div className="flex items-center justify-center space-x-2">
//                     <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
//                     <span>Authenticating...</span>
//                   </div>
//                 ) : (
//                   "Secure Sign In"
//                 )}
//               </motion.button>
//             </form>

//             {/* Security Notice */}
//             <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
//               <div className="flex items-start space-x-3">
//                 <FiShield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-blue-400 text-sm font-medium">Enhanced Security</p>
//                   <p className="text-slate-400 text-xs mt-1">
//                     Protected with input validation and rate limiting.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Attempts Counter */}
//             {attempts > 0 && (
//               <div className="mt-3 text-center">
//                 <p className="text-slate-500 text-xs">
//                   Attempts: {attempts}/3
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Back to Home Link */}
//                     {/* Back to Home Link */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-center mt-4 md:mt-6"
//           >
//             <Link
//               href="/"
//               className="text-slate-400 hover:text-white text-sm transition-colors"
//             >
//               ← Back to Homepage
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>

//       <Footer />
//     </main>
//   );
// }












// v2
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiAlertCircle, FiShield, FiUserCheck } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [securityCheck, setSecurityCheck] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [lastAttempt, setLastAttempt] = useState<number>(0);
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Security validation functions
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  const containsSQLInjection = (input: string): boolean => {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|EXEC)\b)/i,
      /('|"|;|--|\/\*|\*\/|\\\*|\\-)/,
      /(\b(OR|AND)\b.*=)/i,
      /(\b(WAITFOR|DELAY)\b)/i
    ];
    return sqlPatterns.some(pattern => pattern.test(input));
  };

  const containsXSS = (input: string): boolean => {
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe/gi,
      /<object/gi,
      /<embed/gi
    ];
    return xssPatterns.some(pattern => pattern.test(input));
  };

  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>"'`;()&|$\\]/g, '')
      .substring(0, 255)
      .trim();
  };

  // Check if user is already logged in
  useEffect(() => {
    const checkExistingSession = async () => {
      console.log("🔍 Checking for existing session...");
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error("❌ Session check error:", error);
        return;
      }
      
      if (session) {
        console.log("✅ Session found, redirecting to admin...");
        // Use replace to prevent back navigation to login
        window.location.replace("/admin");
      } else {
        console.log("❌ No session found, staying on login page");
      }
    };
    checkExistingSession();
  }, []);

  // Rate limiting function
  const checkRateLimit = (): boolean => {
    const now = Date.now();
    if (now - lastAttempt < 30000 && attempts >= 3) {
      setError("Too many attempts. Please wait 30 seconds before trying again.");
      return false;
    }
    
    if (now - lastAttempt > 30000) {
      setAttempts(0);
    }
    
    setAttempts(prev => prev + 1);
    setLastAttempt(now);
    return true;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!checkRateLimit()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSecurityCheck(true);

    try {
      // Input validation and sanitization
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedPassword = sanitizeInput(password);

      // Security checks
      if (!isValidEmail(sanitizedEmail)) {
        setError("Please enter a valid email address");
        setSecurityCheck(false);
        return;
      }

      if (containsSQLInjection(sanitizedEmail) || containsSQLInjection(sanitizedPassword)) {
        setError("Invalid input detected");
        setSecurityCheck(false);
        return;
      }

      if (containsXSS(sanitizedEmail) || containsXSS(sanitizedPassword)) {
        setError("Invalid input detected");
        setSecurityCheck(false);
        return;
      }

      if (sanitizedPassword.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
      }

      if (sanitizedPassword.length > 128) {
        setError("Password is too long");
        return;
      }

      console.log("🛡️ Attempting secure login...");

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password: sanitizedPassword,
      });

      if (authError) {
        console.error("❌ Authentication error:", authError);
        setError("Invalid credentials or account not found");
        setSecurityCheck(false);
        return;
      }

      if (data?.session) {
        console.log("✅ Login successful, verifying session...");
        
        // Double-check session before redirect
        const { data: { session: freshSession } } = await supabase.auth.getSession();
        console.log("🔄 Fresh session check:", freshSession ? "EXISTS" : "MISSING");
        
        if (freshSession) {
          console.log("🎯 Redirecting to admin dashboard...");
          // Use replace to prevent back navigation issues
          setTimeout(() => {
            window.location.replace("/admin");
          }, 1000);
        } else {
          console.error("❌ Session lost after login");
          setError("Authentication failed - please try again");
        }
        return;
      }
      
      setError("Authentication failed");
      setSecurityCheck(false);
      
    } catch (err: any) {
      console.error("❌ Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
      setSecurityCheck(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Increased top padding to prevent navbar overlap */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 pt-32 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Security Status Card - Now has proper spacing from navbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${securityCheck ? 'bg-green-500/20' : 'bg-amber-500/20'}`}>
                {securityCheck ? (
                  <FiShield className="w-5 h-5 text-green-400" />
                ) : (
                  <FiAlertCircle className="w-5 h-5 text-amber-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  {securityCheck ? 'Security Check Passed' : 'Security Alert'}
                </p>
                <p className="text-slate-400 text-xs">
                  {securityCheck ? 'All systems secure' : 'Please check your inputs'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Login Form */}
          <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FiUserCheck className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-amber-400 mb-2">
                Admin Portal
              </h1>
              <p className="text-slate-300 text-xs md:text-sm">
                Restricted access - Authorized personnel only
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              {/* Email Field */}
              <div>
                <label className="text-slate-300 text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 254 && !containsSQLInjection(value) && !containsXSS(value)) {
                        setEmail(value);
                      }
                    }}
                    required
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="admin@yourcompany.com"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="text-slate-300 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-4 w-4 md:h-5 md:h-5 text-slate-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 128 && !containsSQLInjection(value) && !containsXSS(value)) {
                        setPassword(value);
                      }
                    }}
                    required
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Error Message - Now has proper spacing */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-3 md:p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <FiAlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <p className="text-rose-400 text-sm">{error}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full px-6 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm md:text-base mt-4"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  "Secure Sign In"
                )}
              </motion.button>
            </form>

            {/* Security Notice */}
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <div className="flex items-start space-x-3">
                <FiShield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-400 text-sm font-medium">Enhanced Security</p>
                  <p className="text-slate-400 text-xs mt-1">
                    Protected with input validation and rate limiting.
                  </p>
                </div>
              </div>
            </div>

            {/* Attempts Counter */}
            {attempts > 0 && (
              <div className="mt-3 text-center">
                <p className="text-slate-500 text-xs">
                  Attempts: {attempts}/3
                </p>
              </div>
            )}
          </div>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-4 md:mt-6"
          >
            <Link
              href="/"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              ← Back to Homepage
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}