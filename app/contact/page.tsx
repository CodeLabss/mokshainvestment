// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { createClient } from "@supabase/supabase-js";

// const requirements = [
//   "Insurance",
//   "Mediclaim",
//   "Loan",
//   "Mutual Funds",
//   "SIP",
//   "Pension Planning",
//   "Child Plans",
//   "Wealth Advisory"
// ];

// // Initialize Supabase safely for client-side usage
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
// const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// const WHATSAPP_PHONE = "9029026060";

// export default function ContactPage() {
//   const [name, setName] = useState("");
//   const [requirement, setRequirement] = useState("Insurance");
//   const [phone, setPhone] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
//   const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string }>({});

//   function validateFields(currentName: string, currentPhone: string) {
//     const errors: { name?: string; phone?: string } = {};

//     if (!currentName.trim()) {
//       errors.name = "Name is required.";
//     }
//     if (/[^a-zA-Z\s]/.test(currentName)) {
//       errors.name = "Only letters and spaces are allowed.";
//     }

//     if (!currentPhone) {
//       errors.phone = "Contact number is required.";
//     } else if (!/^\d{10}$/.test(currentPhone)) {
//       errors.phone = "Contact number must be exactly 10 digits.";
//     }

//     setFieldErrors(errors);
//     return errors;
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     try {
//       const errors = validateFields(name, phone);
//       if (errors.name || errors.phone) {
//         setSubmitStatus({
//           type: 'error',
//           message: 'Please correct the highlighted fields and try again.'
//         });
//         return;
//       }
//       if (!isSupabaseConfigured) {
//         throw new Error("Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
//       }
//       const { data, error } = await supabase
//         .from('form_submissions')
//         .insert([
//           { 
//             name, 
//             requirement, 
//             phone,
//             created_at: new Date().toISOString()
//           }
//         ])
//         .select();

//       if (error) {
//         throw new Error(error.message || "Unknown Supabase error");
//       }

//       setSubmitStatus({
//         type: 'success', 
//         message: `Thank you ${name}! We will reach out at ${phone} regarding ${requirement}.`
//       });
      
//       // Reset form
//       setName("");
//       setRequirement("Insurance");
//       setPhone("");
//       setFieldErrors({});
//     } catch (error) {
//       const err = error as unknown;
//       setSubmitStatus({
//         type: 'error', 
//         message: err instanceof Error ? err.message : 'Sorry, there was an error submitting your form. Please try again or contact us via WhatsApp.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   const waLink = `https://wa.me/${WHATSAPP_PHONE.replace(/[^\d]/g, "")}`;

//   return (
//     <main className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-1 pt-24 px-6 pb-32"> {/* added pb-32 for footer spacing */}
//         <div className="max-w-2xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//             Contact Us
//           </h1>
//           <p className="mt-3 text-lg text-gray-600">
//             Share your details and we'll get back shortly.
//           </p>

//           {/* Status Message */}
//           {submitStatus && (
//             <div className={`mt-6 p-4 rounded-xl ${
//               submitStatus.type === 'success' 
//                 ? 'bg-green-100 text-green-800' 
//                 : 'bg-red-100 text-red-800'
//             }`}>
//               {submitStatus.message}
//             </div>
//           )}

//           {!isSupabaseConfigured && (
//             <div className="mt-4 p-4 rounded-xl bg-yellow-100 text-yellow-900">
//               Supabase is not configured. Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in your environment.
//             </div>
//           )}

//           <form
//             onSubmit={handleSubmit}
//             className="mt-10 space-y-6 bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-2xl"
//           >
//             {/* Name field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(e) => {
//                   const sanitized = e.target.value.replace(/[^a-zA-Z\s]/g, '');
//                   setName(sanitized);
//                   validateFields(sanitized, phone);
//                 }}
//                 className={`mt-2 w-full rounded-xl px-4 py-3 bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition ${fieldErrors.name ? 'border-red-500 border' : 'border border-gray-300'}`}
//                 placeholder="Your full name"
//                 aria-invalid={!!fieldErrors.name}
//               />
//               {fieldErrors.name && (
//                 <p className="mt-2 text-sm text-red-600">{fieldErrors.name}</p>
//               )}
//             </div>

//             {/* Requirement field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Requirement
//               </label>
//               <div className="relative mt-2">
//                 <select
//                   value={requirement}
//                   onChange={(e) => setRequirement(e.target.value)}
//                   className="appearance-none w-full rounded-xl border border-gray-300 px-4 py-3 pr-10 bg-gradient-to-r from-white to-gray-50 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition text-gray-800 font-medium"
//                   aria-label="Requirement"
//                 >
//                   {requirements.map((req) => (
//                     <option key={req} value={req}>{req}</option>
//                   ))}
//                 </select>

//                 {/* Custom dropdown arrow */}
//                 <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-indigo-500">
//                   ▼
//                 </span>
//               </div>
//             </div>

//             {/* Phone field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 required
//                 value={phone}
//                 onChange={(e) => {
//                   const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
//                   setPhone(digitsOnly);
//                   validateFields(name, digitsOnly);
//                 }}
//                 inputMode="numeric"
//                 pattern="[0-9]{10}"
//                 title="Enter exactly 10 digits"
//                 maxLength={10}
//                 className={`mt-2 w-full rounded-xl px-4 py-3 bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition ${fieldErrors.phone ? 'border-red-500 border' : 'border border-gray-300'}`}
//                 placeholder="e.g. 9876543210"
//                 aria-invalid={!!fieldErrors.phone}
//               />
//               {fieldErrors.phone && (
//                 <p className="mt-2 text-sm text-red-600">{fieldErrors.phone}</p>
//               )}
//             </div>

//             {/* Actions */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit'}
//               </button>

//               <Link
//                 href={waLink}
//                 target="_blank"
//                 className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
//               >
//                 <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }


"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@supabase/supabase-js";

const requirements = [
  "Insurance",
  "Mediclaim",
  "Loan",
  "Mutual Funds",
  "SIP",
  "Pension Planning",
  "Child Plans",
  "Wealth Advisory"
];

// Initialize Supabase safely for client-side usage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const WHATSAPP_PHONE = "9029026060";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [requirement, setRequirement] = useState("Insurance");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // Added email field for leads table
  const [notes, setNotes] = useState(""); // Added notes field for leads table
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  function validateFields(currentName: string, currentPhone: string, currentEmail: string) {
    const errors: { name?: string; phone?: string; email?: string } = {};

    if (!currentName.trim()) {
      errors.name = "Name is required.";
    }
    if (/[^a-zA-Z\s]/.test(currentName)) {
      errors.name = "Only letters and spaces are allowed.";
    }

    if (!currentPhone) {
      errors.phone = "Contact number is required.";
    } else if (!/^\d{10}$/.test(currentPhone)) {
      errors.phone = "Contact number must be exactly 10 digits.";
    }

    if (currentEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    setFieldErrors(errors);
    return errors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const errors = validateFields(name, phone, email);
      if (errors.name || errors.phone || errors.email) {
        setSubmitStatus({
          type: 'error',
          message: 'Please correct the highlighted fields and try again.'
        });
        return;
      }
      if (!isSupabaseConfigured) {
        throw new Error("Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      }
      
      // Insert into leads table instead of form_submissions
      const { data, error } = await supabase
        .from('leads')
        .insert([
          { 
            name: name.trim(),
            phone: phone,
            email: email.trim() || null, // Store as null if empty
            requirement: requirement,
            notes: notes.trim() || null, // Store as null if empty
            is_contacted: false, // Default to false for new leads
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        throw new Error(error.message || "Unknown Supabase error");
      }

      setSubmitStatus({
        type: 'success', 
        message: `Thank you ${name}! We have received your ${requirement} inquiry and will contact you at ${phone} shortly.`
      });
      
      // Reset form
      setName("");
      setRequirement("Insurance");
      setPhone("");
      setEmail("");
      setNotes("");
      setFieldErrors({});
    } catch (error) {
      const err = error as unknown;
      setSubmitStatus({
        type: 'error', 
        message: err instanceof Error ? err.message : 'Sorry, there was an error submitting your form. Please try again or contact us via WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const waLink = `https://wa.me/${WHATSAPP_PHONE.replace(/[^\d]/g, "")}`;

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-24 px-6 pb-32"> {/* added pb-32 for footer spacing */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-gray-600">
  Share your details and we&apos;ll get back shortly.
</p>

          {/* Status Message */}
          {submitStatus && (
            <div className={`mt-6 p-4 rounded-xl ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          {!isSupabaseConfigured && (
            <div className="mt-4 p-4 rounded-xl bg-yellow-100 text-yellow-900 border border-yellow-200">
              Supabase is not configured. Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in your environment.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-2xl"
          >
            {/* Name field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => {
                  const sanitized = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setName(sanitized);
                  validateFields(sanitized, phone, email);
                }}
                className={`mt-2 w-full rounded-xl px-4 py-3 bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition ${fieldErrors.name ? 'border-red-500 border-2' : 'border border-gray-300'}`}
                placeholder="Your full name"
                aria-invalid={!!fieldErrors.name}
              />
              {fieldErrors.name && (
                <p className="mt-2 text-sm text-red-600">{fieldErrors.name}</p>
              )}
            </div>

            {/* Phone field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Contact Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => {
                  const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setPhone(digitsOnly);
                  validateFields(name, digitsOnly, email);
                }}
                inputMode="numeric"
                pattern="[0-9]{10}"
                title="Enter exactly 10 digits"
                maxLength={10}
                className={`mt-2 w-full rounded-xl px-4 py-3 bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition ${fieldErrors.phone ? 'border-red-500 border-2' : 'border border-gray-300'}`}
                placeholder="e.g. 9876543210"
                aria-invalid={!!fieldErrors.phone}
              />
              {fieldErrors.phone && (
                <p className="mt-2 text-sm text-red-600">{fieldErrors.phone}</p>
              )}
            </div>

            {/* Email field (optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateFields(name, phone, e.target.value);
                }}
                className={`mt-2 w-full rounded-xl px-4 py-3 bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition ${fieldErrors.email ? 'border-red-500 border-2' : 'border border-gray-300'}`}
                placeholder="your.email@example.com"
                aria-invalid={!!fieldErrors.email}
              />
              {fieldErrors.email && (
                <p className="mt-2 text-sm text-red-600">{fieldErrors.email}</p>
              )}
            </div>

            {/* Requirement field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Requirement *
              </label>
              <div className="relative mt-2">
                <select
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="appearance-none w-full rounded-xl border border-gray-300 px-4 py-3 pr-10 bg-gradient-to-r from-white to-gray-50 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition text-gray-800 font-medium"
                  aria-label="Requirement"
                >
                  {requirements.map((req) => (
                    <option key={req} value={req}>{req}</option>
                  ))}
                </select>

                {/* Custom dropdown arrow */}
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-indigo-500">
                  ▼
                </span>
              </div>
            </div>

            {/* Notes field (optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Additional Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="mt-2 w-full rounded-xl px-4 py-3 bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition border border-gray-300 resize-none"
                placeholder="Any specific requirements or questions you have..."
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Inquiry'
                )}
              </button>

              <Link
                href={waLink}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
              </Link>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              * Required fields
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}