module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/admin/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/admin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// v1 - working perfectly fine with update_nfo function added
// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion } from "framer-motion";
// import { 
//   FiUser, FiPhone, FiMail, FiFileText, FiClock, 
//   FiCheckCircle, FiXCircle, FiLogOut, FiRefreshCw,
//   FiImage, FiUpload, FiPlus, FiEdit, FiTrash2
// } from "react-icons/fi";
// type LeadRow = {
//   id: string;
//   name: string;
//   phone: string;
//   email?: string;
//   requirement?: string;
//   notes?: string;
//   is_contacted?: boolean;
//   created_at?: string;
// };
// type NFOData = {
//   id: string;
//   title: string;
//   description: string | null;
//   start_date: string | null;
//   end_date: string | null;
//   image_url: string | null;
//   created_at: string;
// };
// // Initialize Supabase client only once
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// export default function AdminDashboardPage() {
//   const [leads, setLeads] = useState<LeadRow[]>([]);
//   const [nfoData, setNfoData] = useState<NFOData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [activeTab, setActiveTab] = useState<'leads' | 'nfo'>('leads');
//   // NFO Form State
//   const [nfoForm, setNfoForm] = useState({
//     title: '',
//     description: '',
//     start_date: '',
//     end_date: '',
//     image_file: null as File | null
//   });
//   const [uploading, setUploading] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [showNfoForm, setShowNfoForm] = useState(false);
//   const [formErrors, setFormErrors] = useState<string[]>([]);
//   const [debugInfo, setDebugInfo] = useState<string[]>([]);
//   const addDebugInfo = (message: string) => {
//     console.log(`🔍 ${message}`);
//     setDebugInfo(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`]);
//   };
//   const checkloggedin = async () => {
//     try {
//       addDebugInfo("Checking authentication...");
//       const { data, error } = await supabase.auth.getUser();
//       if (error) {
//         addDebugInfo(`Auth error: ${error.message}`);
//         return false;
//       }
//       setUserEmail(data.user?.email || "");
//       addDebugInfo("Authentication successful");
//       return true;
//     } catch (error: any) {
//       addDebugInfo(`Auth check failed: ${error.message}`);
//       return false;
//     }
//   };
//   // Database connection test
//   const checkDatabaseConnection = async () => {
//     try {
//       addDebugInfo("Testing database connection...");
//       // Test leads table
//       const { data: leadsData, error: leadsError } = await supabase
//         .from('leads')
//         .select('count')
//         .limit(1);
//       if (leadsError) {
//         addDebugInfo(`Leads table error: ${leadsError.message} (code: ${leadsError.code})`);
//       } else {
//         addDebugInfo("Leads table accessible");
//       }
//       // Test upcoming_nfo table
//       const { data: nfoData, error: nfoError } = await supabase
//         .from('upcoming_nfo')
//         .select('id')
//         .limit(1);
//       if (nfoError) {
//         addDebugInfo(`NFO table error: ${nfoError.message} (code: ${nfoError.code})`);
//         if (nfoError.code === '42P01') {
//           addDebugInfo("NFO table doesn't exist. Please create it in Supabase.");
//         }
//       } else {
//         addDebugInfo("NFO table accessible");
//       }
//       // Test storage bucket
//       const { data: storageData, error: storageError } = await supabase.storage
//         .from('nfo-images')
//         .list('', { limit: 1 });
//       if (storageError) {
//         addDebugInfo(`Storage error: ${storageError.message} (code: ${storageError.code})`);
//       } else {
//         addDebugInfo("Storage bucket accessible");
//       }
//     } catch (error: any) {
//       addDebugInfo(`Database check failed: ${error.message}`);
//     }
//   };
//   useEffect(() => {
//     checkloggedin().then((loggedIn) => {
//       if (!loggedIn) {
//         window.location.href = "/admin/login";
//       }
//     });
//     fetchLeads();
//     fetchNFOData();
//     checkDatabaseConnection();
//   }, []);
//   async function fetchLeads() {
//     try {
//       setLoading(true);
//       addDebugInfo("Fetching leads...");
//       const { data, error } = await supabase
//         .from('leads')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (error) {
//         addDebugInfo(`Leads fetch error: ${error.message}`);
//         console.error('Error fetching leads:', error);
//       } else {
//         addDebugInfo(`Fetched ${data?.length || 0} leads`);
//         setLeads(data || []);
//       }
//     } catch (error: any) {
//       addDebugInfo(`Leads fetch exception: ${error.message}`);
//       console.error('Error in fetchLeads:', error);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   }
//   async function fetchNFOData() {
//     try {
//       addDebugInfo("Fetching NFO data...");
//       const { data, error } = await supabase
//         .from('upcoming_nfo')
//         .select('*')
//         .order('start_date', { ascending: true });
//       if (error) {
//         addDebugInfo(`NFO fetch error: ${error.message}`);
//         console.error('Error fetching NFO data:', error);
//       } else {
//         addDebugInfo(`Fetched ${data?.length || 0} NFOs`);
//         setNfoData(data || []);
//       }
//     } catch (error: any) {
//       addDebugInfo(`NFO fetch exception: ${error.message}`);
//       console.error('Error in fetchNFOData:', error);
//     }
//   }
//   async function handleRefresh() {
//     setRefreshing(true);
//     addDebugInfo("Manual refresh triggered");
//     await fetchLeads();
//     await fetchNFOData();
//   }
//   async function toggleContactStatus(leadId: string, currentStatus: boolean) {
//     try {
//       addDebugInfo(`Toggling contact status for lead ${leadId}`);
//       const { error } = await supabase
//         .from('leads')
//         .update({ is_contacted: !currentStatus })
//         .eq('id', leadId);
//       if (error) {
//         addDebugInfo(`Contact status update error: ${error.message}`);
//         console.error('Error updating lead:', error);
//       } else {
//         addDebugInfo("Contact status updated successfully");
//         setLeads(leads.map(lead => 
//           lead.id === leadId 
//             ? { ...lead, is_contacted: !currentStatus }
//             : lead
//         ));
//       }
//     } catch (error: any) {
//       addDebugInfo(`Contact status exception: ${error.message}`);
//       console.error('Error toggling contact status:', error);
//     }
//   }
//   // NFO Management Functions
//   const handleImageUpload = async (file: File): Promise<string> => {
//     const fileExt = file.name.split('.').pop();
//     const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
//     const filePath = fileName;
//     addDebugInfo(`Uploading image: ${fileName} (${file.size} bytes)`);
//     const { data, error: uploadError } = await supabase.storage
//       .from('nfo-images')
//       .upload(filePath, file, {
//         cacheControl: '3600',
//         upsert: false
//       });
//     if (uploadError) {
//       addDebugInfo(`Image upload failed: ${uploadError.message}`);
//       console.error("❌ Storage upload error:", uploadError);
//       throw new Error(`Failed to upload image: ${uploadError.message}`);
//     }
//     addDebugInfo("Image uploaded successfully");
//     console.log("✅ Image uploaded successfully:", data?.path);
//     return fileName;
//   };
//   const validateForm = (): boolean => {
//     const errors: string[] = [];
//     if (!nfoForm.title.trim()) {
//       errors.push('Title is required');
//     }
//     // Image is compulsory for new NFOs only
//     if (!editingId && !nfoForm.image_file) {
//       errors.push('Image is required for new NFOs');
//     }
//     // Validate file type if provided
//     if (nfoForm.image_file) {
//       const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//       if (!validTypes.includes(nfoForm.image_file.type)) {
//         errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
//       }
//       // Validate file size (5MB max)
//       if (nfoForm.image_file.size > 5 * 1024 * 1024) {
//         errors.push('Image size should be less than 5MB');
//       }
//     }
//     setFormErrors(errors);
//     if (errors.length > 0) {
//       addDebugInfo(`Form validation failed: ${errors.join(', ')}`);
//     }
//     return errors.length === 0;
//   };
//   const handleNfoSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     addDebugInfo("NFO form submission started");
//     if (!validateForm()) {
//       return;
//     }
//     try {
//       setUploading(true);
//       setFormErrors([]);
//       let imageFileName = null;
//       // Upload new image if provided
//       if (nfoForm.image_file) {
//         try {
//           imageFileName = await handleImageUpload(nfoForm.image_file);
//         } catch (uploadError: any) {
//           addDebugInfo(`Image upload error in submit: ${uploadError.message}`);
//           console.error('❌ Image upload failed:', uploadError);
//           setFormErrors([`Image upload failed: ${uploadError.message}`]);
//           setUploading(false);
//           return;
//         }
//       } else if (editingId) {
//         // Keep existing image if editing and no new file
//         const existingNfo = nfoData.find(nfo => nfo.id === editingId);
//         imageFileName = existingNfo?.image_url || null;
//         addDebugInfo(`Using existing image: ${imageFileName}`);
//       }
//       // Prepare data for database
//       const nfoDataToSave = {
//         title: nfoForm.title,
//         description: nfoForm.description || null,
//         start_date: nfoForm.start_date || null,
//         end_date: nfoForm.end_date || null,
//         image_url: imageFileName,
//         // updated_at: new Date().toISOString()
//       };
//       addDebugInfo(`Saving NFO data: ${JSON.stringify(nfoDataToSave)}`);
//       let result;
//       if (editingId) {
//         // Update existing NFO
//         addDebugInfo(`Updating existing NFO: ${editingId}`);
//         result = await supabase
//           .from('upcoming_nfo')
//           .update(nfoDataToSave)
//           .eq('id', editingId);
//       } else {
//         // Create new NFO
//         addDebugInfo("Creating new NFO");
//         result = await supabase
//           .from('upcoming_nfo')
//           .insert([{
//             ...nfoDataToSave,
//             created_at: new Date().toISOString()
//           }]);
//       }
//       // Comprehensive error handling for Supabase responses
//       if (result.error) {
//         addDebugInfo(`Database operation failed: ${result.error.message}`);
//         console.error('❌ Database error details:', {
//           message: result.error.message,
//           details: result.error.details,
//           hint: result.error.hint,
//           code: result.error.code
//         });
//         let errorMessage = 'Database error occurred. ';
//         if (result.error.message) {
//           errorMessage += result.error.message;
//         }
//         if (result.error.details) {
//           errorMessage += ` Details: ${result.error.details}`;
//         }
//         if (result.error.hint) {
//           errorMessage += ` Hint: ${result.error.hint}`;
//         }
//         // Specific error handling for common issues
//         if (result.error.code === '42501') {
//           errorMessage = "Permission denied. Check RLS policies for 'upcoming_nfo' table.";
//         } else if (result.error.code === '42P01') {
//           errorMessage = "Table 'upcoming_nfo' doesn't exist. Please create it in Supabase.";
//         } else if (result.error.code === '23505') {
//           errorMessage = "Duplicate entry. This NFO might already exist.";
//         }
//         throw new Error(errorMessage);
//       }
//       addDebugInfo("NFO saved successfully");
//       // Reset form and refresh data
//       resetNfoForm();
//       await fetchNFOData();
//       alert(editingId ? 'NFO updated successfully!' : 'NFO created successfully!');
//     } catch (error: any) {
//       addDebugInfo(`NFO submission failed: ${error.message}`);
//       console.error('❌ Error saving NFO:', error);
//       console.error('Error details:', {
//         message: error.message,
//         stack: error.stack,
//         name: error.name
//       });
//       // Provide more specific error messages
//       let errorMessage = 'Error saving NFO. Please try again.';
//       if (error.message) {
//         errorMessage = error.message;
//       }
//       setFormErrors([errorMessage]);
//     } finally {
//       setUploading(false);
//     }
//   };
//   const handleEditNfo = (nfo: NFOData) => {
//     addDebugInfo(`Editing NFO: ${nfo.title}`);
//     setNfoForm({
//       title: nfo.title,
//       description: nfo.description || '',
//       start_date: nfo.start_date ? nfo.start_date.split('T')[0] : '',
//       end_date: nfo.end_date ? nfo.end_date.split('T')[0] : '',
//       image_file: null
//     });
//     setEditingId(nfo.id);
//     setShowNfoForm(true);
//     setFormErrors([]);
//   };
//   const handleDeleteNfo = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this NFO?')) return;
//     try {
//       addDebugInfo(`Deleting NFO: ${id}`);
//       const { error } = await supabase
//         .from('upcoming_nfo')
//         .delete()
//         .eq('id', id);
//       if (error) {
//         addDebugInfo(`Delete failed: ${error.message}`);
//         throw error;
//       }
//       addDebugInfo("NFO deleted successfully");
//       await fetchNFOData();
//       alert('NFO deleted successfully!');
//     } catch (error: any) {
//       addDebugInfo(`Delete error: ${error.message}`);
//       console.error('Error deleting NFO:', error);
//       alert(`Error deleting NFO: ${error.message || 'Please try again.'}`);
//     }
//   };
//   const resetNfoForm = () => {
//     addDebugInfo("Resetting NFO form");
//     setNfoForm({
//       title: '',
//       description: '',
//       start_date: '',
//       end_date: '',
//       image_file: null
//     });
//     setEditingId(null);
//     setShowNfoForm(false);
//     setFormErrors([]);
//   };
//   const handleNewNfoClick = () => {
//     addDebugInfo("Creating new NFO");
//     resetNfoForm();
//     setShowNfoForm(true);
//   };
//   const getImageUrl = (imagePath: string | null) => {
//     if (!imagePath) return null;
//     // Extract just the filename
//     let filename = imagePath;
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     filename = filename.replace('nfo-images/', '');
//     const { data } = supabase.storage
//       .from('nfo-images')
//       .getPublicUrl(filename);
//     return data.publicUrl;
//   };
//   async function handleSignOut() {
//     try {
//       addDebugInfo("Signing out...");
//       const { error } = await supabase.auth.signOut();
//       if (error) {
//         addDebugInfo(`Sign out error: ${error.message}`);
//         console.error("Error signing out:", error.message);
//         return;
//       }
//       window.location.href = "/admin/login";
//     } catch (error: any) {
//       addDebugInfo(`Sign out exception: ${error.message}`);
//       console.error("Sign out error:", error);
//     }
//   }
//   // Stats calculations
//   const totalLeads = leads.length;
//   const contactedLeads = leads.filter(lead => lead.is_contacted).length;
//   const newLeads = totalLeads - contactedLeads;
//   const contactRate = totalLeads > 0 ? (contactedLeads / totalLeads) * 100 : 0;
//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };
//   const getRequirementColor = (requirement: string) => {
//     const colors: { [key: string]: string } = {
//       'Insurance': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
//       'Mediclaim': 'bg-green-500/20 text-green-400 border-green-500/30',
//       'Loan': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
//       'Mutual Funds': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
//       'SIP': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
//       'Pension Planning': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
//       'Child Plans': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
//       'Wealth Advisory': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
//     };
//     return colors[requirement] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pt-20">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-7xl mx-auto"
//       >
//         {/* Debug Info Panel - Remove in production */}
//         <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
//           <details>
//             <summary className="cursor-pointer text-blue-400 font-semibold">Debug Info (Click to expand)</summary>
//             <div className="mt-2 text-xs text-blue-300 max-h-32 overflow-y-auto">
//               {debugInfo.map((info, index) => (
//                 <div key={index} className="font-mono">{info}</div>
//               ))}
//             </div>
//           </details>
//         </div>
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
//           <div className="mb-4 lg:mb-0">
//             <h1 className="text-3xl font-bold text-amber-400 mb-2">Admin Dashboard</h1>
//             <p className="text-slate-300 text-lg">
//               Welcome back, <span className="text-white font-semibold">{userEmail}</span>
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={handleRefresh}
//               disabled={refreshing}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors disabled:opacity-50"
//             >
//               <FiRefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
//               Refresh
//             </button>
//             <button
//               onClick={handleSignOut}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 transition-colors"
//             >
//               <FiLogOut className="w-4 h-4" />
//               Sign Out
//             </button>
//           </div>
//         </div>
//         {/* Tab Navigation */}
//         <div className="flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 max-w-md">
//           <button
//             onClick={() => setActiveTab('leads')}
//             className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-1 text-center ${
//               activeTab === 'leads'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             <FiUser className="w-4 h-4" />
//             Leads ({totalLeads})
//           </button>
//           <button
//             onClick={() => setActiveTab('nfo')}
//             className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-1 text-center ${
//               activeTab === 'nfo'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             <FiImage className="w-4 h-4" />
//             NFOs ({nfoData.length})
//           </button>
//         </div>
//         {/* Leads Tab Content */}
//         {activeTab === 'leads' && (
//           <>
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm font-medium">Total Leads</p>
//                     <p className="text-3xl font-bold text-white mt-2">{totalLeads}</p>
//                   </div>
//                   <div className="p-3 bg-amber-500/20 rounded-xl">
//                     <FiUser className="w-6 h-6 text-amber-400" />
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm font-medium">Contacted</p>
//                     <p className="text-3xl font-bold text-green-400 mt-2">{contactedLeads}</p>
//                   </div>
//                   <div className="p-3 bg-green-500/20 rounded-xl">
//                     <FiCheckCircle className="w-6 h-6 text-green-400" />
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm font-medium">New Leads</p>
//                     <p className="text-3xl font-bold text-amber-400 mt-2">{newLeads}</p>
//                   </div>
//                   <div className="p-3 bg-blue-500/20 rounded-xl">
//                     <FiClock className="w-6 h-6 text-blue-400" />
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm font-medium">Contact Rate</p>
//                     <p className="text-3xl font-bold text-purple-400 mt-2">{contactRate.toFixed(1)}%</p>
//                   </div>
//                   <div className="p-3 bg-purple-500/20 rounded-xl">
//                     <FiFileText className="w-6 h-6 text-purple-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Leads Table */}
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-6 overflow-hidden">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-amber-400">Recent Leads</h2>
//                 <div className="text-slate-400 text-sm">
//                   Showing {leads.length} lead{leads.length !== 1 ? 's' : ''}
//                 </div>
//               </div>
//               {loading ? (
//                 <div className="text-center py-12">
//                   <div className="flex items-center justify-center space-x-3">
//                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
//                     <span className="text-slate-300 text-lg">Loading leads...</span>
//                   </div>
//                 </div>
//               ) : leads.length === 0 ? (
//                 <div className="text-center py-12">
//                   <FiFileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-slate-300 mb-2">No leads found</h3>
//                   <p className="text-slate-400">Leads will appear here once customers submit the contact form.</p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-white/10">
//                         <th className="text-left p-3 md:p-4 text-slate-300 font-semibold">Customer</th>
//                         <th className="text-left p-3 md:p-4 text-slate-300 font-semibold hidden md:table-cell">Contact</th>
//                         <th className="text-left p-3 md:p-4 text-slate-300 font-semibold">Requirement</th>
//                         <th className="text-left p-3 md:p-4 text-slate-300 font-semibold">Status</th>
//                         <th className="text-left p-3 md:p-4 text-slate-300 font-semibold hidden lg:table-cell">Date</th>
//                         <th className="text-left p-3 md:p-4 text-slate-300 font-semibold">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {leads.map((lead, index) => (
//                         <motion.tr 
//                           key={lead.id}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.05 }}
//                           className="border-b border-white/5 hover:bg-white/2 transition-colors"
//                         >
//                           {/* Customer Name - Mobile Optimized */}
//                           <td className="p-3 md:p-4">
//                             <div className="flex items-center space-x-3">
//                               <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                 <FiUser className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
//                               </div>
//                               <div className="min-w-0 flex-1">
//                                 <div className="text-white font-semibold text-sm md:text-base truncate">
//                                   {lead.name}
//                                 </div>
//                                 <div className="text-slate-400 text-xs md:hidden">
//                                   {lead.phone}
//                                 </div>
//                                 {lead.email && (
//                                   <div className="text-slate-400 text-xs md:hidden truncate">
//                                     {lead.email}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </td>
//                           {/* Contact Info - Hidden on mobile */}
//                           <td className="p-3 md:p-4 hidden md:table-cell">
//                             <div className="space-y-1">
//                               <div className="flex items-center space-x-2 text-slate-300">
//                                 <FiPhone className="w-4 h-4" />
//                                 <span className="font-mono text-sm">{lead.phone}</span>
//                               </div>
//                               {lead.email && (
//                                 <div className="flex items-center space-x-2 text-slate-400">
//                                   <FiMail className="w-4 h-4" />
//                                   <span className="text-sm truncate max-w-[150px]">{lead.email}</span>
//                                 </div>
//                               )}
//                             </div>
//                           </td>
//                           {/* Requirement */}
//                           <td className="p-3 md:p-4">
//                             {lead.requirement ? (
//                               <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRequirementColor(lead.requirement)}`}>
//                                 <span className="truncate max-w-[80px] md:max-w-none">
//                                   {lead.requirement}
//                                 </span>
//                               </span>
//                             ) : (
//                               <span className="text-slate-400 text-xs">Not specified</span>
//                             )}
//                           </td>
//                           {/* Status */}
//                           <td className="p-3 md:p-4">
//                             <button
//                               onClick={() => toggleContactStatus(lead.id, lead.is_contacted || false)}
//                               className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium border transition-colors ${
//                                 lead.is_contacted
//                                   ? 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'
//                                   : 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'
//                               }`}
//                             >
//                               {lead.is_contacted ? (
//                                 <>
//                                   <FiCheckCircle className="w-3 h-3 mr-1" />
//                                   <span className="hidden sm:inline">Contacted</span>
//                                   <span className="sm:hidden">Done</span>
//                                 </>
//                               ) : (
//                                 <>
//                                   <FiClock className="w-3 h-3 mr-1" />
//                                   <span className="hidden sm:inline">New Lead</span>
//                                   <span className="sm:hidden">New</span>
//                                 </>
//                               )}
//                             </button>
//                           </td>
//                           {/* Date - Hidden on mobile */}
//                           <td className="p-3 md:p-4 hidden lg:table-cell">
//                             <div className="text-slate-300 text-sm">
//                               {lead.created_at ? formatDate(lead.created_at) : 'Unknown'}
//                             </div>
//                           </td>
//                           {/* Actions - Always visible on mobile */}
//                           <td className="p-3 md:p-4">
//                             <div className="flex space-x-1 md:space-x-2">
//                               <button
//                                 onClick={() => toggleContactStatus(lead.id, lead.is_contacted || false)}
//                                 className={`p-2 rounded-lg border transition-colors ${
//                                   lead.is_contacted
//                                     ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'
//                                     : 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'
//                                 }`}
//                                 title={lead.is_contacted ? "Mark as New" : "Mark as Contacted"}
//                               >
//                                 {lead.is_contacted ? 
//                                   <FiXCircle className="w-3 h-3 md:w-4 md:h-4" /> : 
//                                   <FiCheckCircle className="w-3 h-3 md:w-4 md:h-4" />
//                                 }
//                               </button>
//                               {/* Mobile date shortcut */}
//                               <div className="md:hidden text-slate-400 text-xs flex items-center px-2">
//                                 {lead.created_at ? 
//                                   new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
//                                   : 'N/A'
//                                 }
//                               </div>
//                             </div>
//                           </td>
//                         </motion.tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//               {/* Mobile date legend */}
//               {leads.length > 0 && (
//                 <div className="md:hidden mt-4 pt-4 border-t border-white/10">
//                   <p className="text-slate-400 text-xs text-center">
//                     Dates shown in mobile view are in MMM DD format
//                   </p>
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//         {/* NFO Management Tab Content */}
//         {activeTab === 'nfo' && (
//           <div className="space-y-8">
//             {/* NFO List Header with Create Button */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <h2 className="text-2xl font-bold text-amber-400">
//                 Active NFOs ({nfoData.length})
//               </h2>
//               <button
//                 onClick={handleNewNfoClick}
//                 className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors"
//               >
//                 <FiPlus className="w-4 h-4" />
//                 Create New NFO
//               </button>
//             </div>
//             {/* Form Errors */}
//             {formErrors.length > 0 && (
//               <div className="bg-rose-500/20 border border-rose-500/30 rounded-2xl p-4">
//                 <h3 className="text-rose-400 font-semibold mb-2">Error:</h3>
//                 <ul className="text-rose-300 text-sm list-disc list-inside">
//                   {formErrors.map((error, index) => (
//                     <li key={index}>{error}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* NFO Form - Conditionally Rendered */}
//             {(showNfoForm || editingId) && (
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//                 <h2 className="text-xl font-bold text-amber-400 mb-6">
//                   {editingId ? 'Edit NFO' : 'Add New NFO'}
//                 </h2>
//                 <form onSubmit={handleNfoSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-slate-300 text-sm font-medium mb-2">
//                         NFO Title *
//                       </label>
//                       <input
//                         type="text"
//                         value={nfoForm.title}
//                         onChange={(e) => setNfoForm({...nfoForm, title: e.target.value})}
//                         className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                         placeholder="Enter NFO title"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-slate-300 text-sm font-medium mb-2">
//                         Image {!editingId && '*'}
//                       </label>
//                       <input
//                         type="file"
//                         accept="image/jpeg, image/jpg, image/png, image/webp"
//                         onChange={(e) => {
//                           setNfoForm({...nfoForm, image_file: e.target.files?.[0] || null});
//                           setFormErrors([]);
//                         }}
//                         className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors"
//                         required={!editingId}
//                       />
//                       <p className="text-slate-400 text-xs mt-2">
//                         Required for new NFOs. Max 5MB. Supported: JPEG, PNG, WebP
//                         {editingId && (
//                           <span className="text-amber-400 ml-1">(Leave empty to keep current image)</span>
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-slate-300 text-sm font-medium mb-2">
//                       Description
//                     </label>
//                     <textarea
//                       value={nfoForm.description}
//                       onChange={(e) => setNfoForm({...nfoForm, description: e.target.value})}
//                       rows={3}
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                       placeholder="Enter NFO description..."
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-slate-300 text-sm font-medium mb-2">
//                         Start Date
//                       </label>
//                       <input
//                         type="date"
//                         value={nfoForm.start_date}
//                         onChange={(e) => setNfoForm({...nfoForm, start_date: e.target.value})}
//                         className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-slate-300 text-sm font-medium mb-2">
//                         End Date
//                       </label>
//                       <input
//                         type="date"
//                         value={nfoForm.end_date}
//                         onChange={(e) => setNfoForm({...nfoForm, end_date: e.target.value})}
//                         className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex gap-3 pt-4">
//                     <button
//                       type="submit"
//                       disabled={uploading}
//                       className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <FiUpload className="w-4 h-4" />
//                       {uploading ? 'Saving...' : editingId ? 'Update NFO' : 'Create NFO'}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={resetNfoForm}
//                       className="px-6 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:bg-white/10 transition-colors"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             )}
//             {/* NFO List */}
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//               {nfoData.length === 0 ? (
//                 <div className="text-center py-12">
//                   <FiImage className="w-16 h-16 text-slate-600 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-slate-300 mb-2">No NFOs found</h3>
//                   <p className="text-slate-400 mb-6">Create your first NFO to get started.</p>
//                   <button
//                     onClick={handleNewNfoClick}
//                     className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto"
//                   >
//                     <FiPlus className="w-4 h-4" />
//                     Create Your First NFO
//                   </button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {nfoData.map((nfo) => (
//                     <motion.div
//                       key={nfo.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
//                     >
//                       {nfo.image_url && (
//                         <div className="h-40 bg-slate-800 overflow-hidden">
//                           <img
//                             src={getImageUrl(nfo.image_url) || ''}
//                             alt={nfo.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       )}
//                       <div className="p-4">
//                         <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">
//                           {nfo.title}
//                         </h3>
//                         {nfo.description && (
//                           <p className="text-slate-300 text-sm mb-3 line-clamp-2">
//                             {nfo.description}
//                           </p>
//                         )}
//                         <div className="space-y-1 text-xs text-slate-400 mb-4">
//                           <div>Start: {nfo.start_date ? new Date(nfo.start_date).toLocaleDateString() : 'TBA'}</div>
//                           <div>End: {nfo.end_date ? new Date(nfo.end_date).toLocaleDateString() : 'TBA'}</div>
//                         </div>
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleEditNfo(nfo)}
//                             className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
//                           >
//                             <FiEdit className="w-3 h-3" />
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDeleteNfo(nfo.id)}
//                             className="flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors"
//                           >
//                             <FiTrash2 className="w-3 h-3" />
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {/* Footer Stats */}
//         {(leads.length > 0 || nfoData.length > 0) && (
//           <div className="mt-6 text-center">
//             <p className="text-slate-400 text-sm">
//               Last updated: {new Date().toLocaleString()}
//             </p>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }
// v2 
}),
"[project]/mokshainvestment/app/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/admin/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4dc74ebb._.js.map