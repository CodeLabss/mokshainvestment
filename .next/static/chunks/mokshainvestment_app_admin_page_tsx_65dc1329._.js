(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mokshainvestment/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
// v2 with bonds integration
// v2 - Updated with Bonds NCD and FD management
__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Initialize Supabase client only once
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://fouathcllogchmgagguq.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdWF0aGNsbG9nY2htZ2FnZ3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzIzMTEsImV4cCI6MjA3MjgwODMxMX0.y9rOlWdVGnA-vCflrTys4IEROvp9v18qBd46wRwg2oM"));
function AdminDashboardPage() {
    _s();
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nfoData, setNfoData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bondsNCD, setBondsNCD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bondsFD, setBondsFD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('leads');
    // NFO Form State
    const [nfoForm, setNfoForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        image_file: null
    });
    // Bonds NCD Form State
    const [bondsNCDForm, setBondsNCDForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        company_name: '',
        issue_size: '',
        interest_rate: '',
        tenure: '',
        image_file: null
    });
    // Bonds FD Form State
    const [bondsFDForm, setBondsFDForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bank_name: '',
        interest_rate: '',
        tenure: '',
        image_file: null
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingType, setEditingType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [debugInfo, setDebugInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addDebugInfo = (message)=>{
        console.log("🔍 ".concat(message));
        setDebugInfo((prev)=>[
                ...prev.slice(-9),
                "".concat(new Date().toLocaleTimeString(), ": ").concat(message)
            ]);
    };
    const checkloggedin = async ()=>{
        try {
            var _data_user;
            addDebugInfo("Checking authentication...");
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                addDebugInfo("Auth error: ".concat(error.message));
                return false;
            }
            setUserEmail(((_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.email) || "");
            addDebugInfo("Authentication successful");
            return true;
        } catch (error) {
            addDebugInfo("Auth check failed: ".concat(error.message));
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardPage.useEffect": ()=>{
            checkloggedin().then({
                "AdminDashboardPage.useEffect": (loggedIn)=>{
                    if (!loggedIn) {
                        window.location.href = "/admin/login";
                    }
                }
            }["AdminDashboardPage.useEffect"]);
            fetchLeads();
            fetchNFOData();
            fetchBondsNCD();
            fetchBondsFD();
        }
    }["AdminDashboardPage.useEffect"], []);
    async function fetchLeads() {
        try {
            setLoading(true);
            addDebugInfo("Fetching leads...");
            const { data, error } = await supabase.from('leads').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                addDebugInfo("Leads fetch error: ".concat(error.message));
                console.error('Error fetching leads:', error);
            } else {
                addDebugInfo("Fetched ".concat((data === null || data === void 0 ? void 0 : data.length) || 0, " leads"));
                setLeads(data || []);
            }
        } catch (error) {
            addDebugInfo("Leads fetch exception: ".concat(error.message));
            console.error('Error in fetchLeads:', error);
        } finally{
            setLoading(false);
            setRefreshing(false);
        }
    }
    async function fetchNFOData() {
        try {
            addDebugInfo("Fetching NFO data...");
            const { data, error } = await supabase.from('upcoming_nfo').select('*').order('start_date', {
                ascending: true
            });
            if (error) {
                addDebugInfo("NFO fetch error: ".concat(error.message));
                console.error('Error fetching NFO data:', error);
            } else {
                addDebugInfo("Fetched ".concat((data === null || data === void 0 ? void 0 : data.length) || 0, " NFOs"));
                setNfoData(data || []);
            }
        } catch (error) {
            addDebugInfo("NFO fetch exception: ".concat(error.message));
            console.error('Error in fetchNFOData:', error);
        }
    }
    async function fetchBondsNCD() {
        try {
            addDebugInfo("Fetching Bonds NCD data...");
            const { data, error } = await supabase.from('bonds_ncd').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                addDebugInfo("Bonds NCD fetch error: ".concat(error.message));
                console.error('Error fetching Bonds NCD data:', error);
            } else {
                addDebugInfo("Fetched ".concat((data === null || data === void 0 ? void 0 : data.length) || 0, " Bonds NCD"));
                setBondsNCD(data || []);
            }
        } catch (error) {
            addDebugInfo("Bonds NCD fetch exception: ".concat(error.message));
            console.error('Error in fetchBondsNCD:', error);
        }
    }
    async function fetchBondsFD() {
        try {
            addDebugInfo("Fetching Bonds FD data...");
            const { data, error } = await supabase.from('bonds_fd').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                addDebugInfo("Bonds FD fetch error: ".concat(error.message));
                console.error('Error fetching Bonds FD data:', error);
            } else {
                addDebugInfo("Fetched ".concat((data === null || data === void 0 ? void 0 : data.length) || 0, " Bonds FD"));
                setBondsFD(data || []);
            }
        } catch (error) {
            addDebugInfo("Bonds FD fetch exception: ".concat(error.message));
            console.error('Error in fetchBondsFD:', error);
        }
    }
    async function handleRefresh() {
        setRefreshing(true);
        addDebugInfo("Manual refresh triggered");
        await fetchLeads();
        await fetchNFOData();
        await fetchBondsNCD();
        await fetchBondsFD();
    }
    async function toggleContactStatus(leadId, currentStatus) {
        try {
            addDebugInfo("Toggling contact status for lead ".concat(leadId));
            const { error } = await supabase.from('leads').update({
                is_contacted: !currentStatus
            }).eq('id', leadId);
            if (error) {
                addDebugInfo("Contact status update error: ".concat(error.message));
                console.error('Error updating lead:', error);
            } else {
                addDebugInfo("Contact status updated successfully");
                setLeads(leads.map((lead)=>lead.id === leadId ? {
                        ...lead,
                        is_contacted: !currentStatus
                    } : lead));
            }
        } catch (error) {
            addDebugInfo("Contact status exception: ".concat(error.message));
            console.error('Error toggling contact status:', error);
        }
    }
    // Image Upload Function
    const handleImageUpload = async (file, bucket)=>{
        const fileExt = file.name.split('.').pop();
        const fileName = "".concat(Math.random().toString(36).substring(2), "_").concat(Date.now(), ".").concat(fileExt);
        const filePath = fileName;
        addDebugInfo("Uploading image to ".concat(bucket, ": ").concat(fileName, " (").concat(file.size, " bytes)"));
        const { data, error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
        });
        if (uploadError) {
            addDebugInfo("Image upload failed: ".concat(uploadError.message));
            console.error("❌ Storage upload error:", uploadError);
            throw new Error("Failed to upload image: ".concat(uploadError.message));
        }
        addDebugInfo("Image uploaded successfully");
        console.log("✅ Image uploaded successfully:", data === null || data === void 0 ? void 0 : data.path);
        return fileName;
    };
    // NFO Management Functions
    const validateNFOForm = ()=>{
        const errors = [];
        if (!nfoForm.title.trim()) {
            errors.push('Title is required');
        }
        if (!editingId && !nfoForm.image_file) {
            errors.push('Image is required for new NFOs');
        }
        if (nfoForm.image_file) {
            const validTypes = [
                'image/jpeg',
                'image/jpg',
                'image/png',
                'image/webp'
            ];
            if (!validTypes.includes(nfoForm.image_file.type)) {
                errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
            }
            if (nfoForm.image_file.size > 5 * 1024 * 1024) {
                errors.push('Image size should be less than 5MB');
            }
        }
        setFormErrors(errors);
        if (errors.length > 0) {
            addDebugInfo("NFO Form validation failed: ".concat(errors.join(', ')));
        }
        return errors.length === 0;
    };
    const handleNfoSubmit = async (e)=>{
        e.preventDefault();
        addDebugInfo("NFO form submission started");
        if (!validateNFOForm()) {
            return;
        }
        try {
            setUploading(true);
            setFormErrors([]);
            let imageFileName = null;
            if (nfoForm.image_file) {
                try {
                    imageFileName = await handleImageUpload(nfoForm.image_file, 'nfo-images');
                } catch (uploadError) {
                    addDebugInfo("Image upload error in submit: ".concat(uploadError.message));
                    setFormErrors([
                        "Image upload failed: ".concat(uploadError.message)
                    ]);
                    setUploading(false);
                    return;
                }
            } else if (editingId) {
                const existingNfo = nfoData.find((nfo)=>nfo.id === editingId);
                imageFileName = (existingNfo === null || existingNfo === void 0 ? void 0 : existingNfo.image_url) || null;
                addDebugInfo("Using existing image: ".concat(imageFileName));
            }
            const nfoDataToSave = {
                title: nfoForm.title,
                description: nfoForm.description || null,
                start_date: nfoForm.start_date || null,
                end_date: nfoForm.end_date || null,
                image_url: imageFileName
            };
            addDebugInfo("Saving NFO data: ".concat(JSON.stringify(nfoDataToSave)));
            let result;
            if (editingId) {
                addDebugInfo("Updating existing NFO: ".concat(editingId));
                result = await supabase.from('upcoming_nfo').update(nfoDataToSave).eq('id', editingId);
            } else {
                addDebugInfo("Creating new NFO");
                result = await supabase.from('upcoming_nfo').insert([
                    {
                        ...nfoDataToSave,
                        created_at: new Date().toISOString()
                    }
                ]);
            }
            if (result.error) {
                addDebugInfo("Database operation failed: ".concat(result.error.message));
                throw new Error(result.error.message);
            }
            addDebugInfo("NFO saved successfully");
            resetForm();
            await fetchNFOData();
            alert(editingId ? 'NFO updated successfully!' : 'NFO created successfully!');
        } catch (error) {
            addDebugInfo("NFO submission failed: ".concat(error.message));
            setFormErrors([
                error.message
            ]);
        } finally{
            setUploading(false);
        }
    };
    // Bonds NCD Management Functions
    const validateBondsNCDForm = ()=>{
        const errors = [];
        if (!bondsNCDForm.company_name.trim()) {
            errors.push('Company name is required');
        }
        if (!editingId && !bondsNCDForm.image_file) {
            errors.push('Image is required for new NCDs');
        }
        if (bondsNCDForm.image_file) {
            const validTypes = [
                'image/jpeg',
                'image/jpg',
                'image/png',
                'image/webp'
            ];
            if (!validTypes.includes(bondsNCDForm.image_file.type)) {
                errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
            }
            if (bondsNCDForm.image_file.size > 5 * 1024 * 1024) {
                errors.push('Image size should be less than 5MB');
            }
        }
        setFormErrors(errors);
        return errors.length === 0;
    };
    const handleBondsNCDSubmit = async (e)=>{
        e.preventDefault();
        addDebugInfo("Bonds NCD form submission started");
        if (!validateBondsNCDForm()) {
            return;
        }
        try {
            setUploading(true);
            setFormErrors([]);
            let imageFileName = null;
            if (bondsNCDForm.image_file) {
                try {
                    imageFileName = await handleImageUpload(bondsNCDForm.image_file, 'bonds-images');
                } catch (uploadError) {
                    setFormErrors([
                        "Image upload failed: ".concat(uploadError.message)
                    ]);
                    setUploading(false);
                    return;
                }
            } else if (editingId) {
                const existingNCD = bondsNCD.find((ncd)=>ncd.id === editingId);
                imageFileName = (existingNCD === null || existingNCD === void 0 ? void 0 : existingNCD.image_url) || null;
            }
            const ncdDataToSave = {
                company_name: bondsNCDForm.company_name,
                issue_size: bondsNCDForm.issue_size || null,
                interest_rate: bondsNCDForm.interest_rate ? parseFloat(bondsNCDForm.interest_rate) : null,
                tenure: bondsNCDForm.tenure || null,
                image_url: imageFileName
            };
            let result;
            if (editingId) {
                result = await supabase.from('bonds_ncd').update(ncdDataToSave).eq('id', editingId);
            } else {
                result = await supabase.from('bonds_ncd').insert([
                    {
                        ...ncdDataToSave,
                        created_at: new Date().toISOString()
                    }
                ]);
            }
            if (result.error) throw new Error(result.error.message);
            resetForm();
            await fetchBondsNCD();
            alert(editingId ? 'NCD updated successfully!' : 'NCD created successfully!');
        } catch (error) {
            setFormErrors([
                error.message
            ]);
        } finally{
            setUploading(false);
        }
    };
    // Bonds FD Management Functions
    const validateBondsFDForm = ()=>{
        const errors = [];
        if (!bondsFDForm.bank_name.trim()) {
            errors.push('Bank name is required');
        }
        if (!editingId && !bondsFDForm.image_file) {
            errors.push('Image is required for new FDs');
        }
        if (bondsFDForm.image_file) {
            const validTypes = [
                'image/jpeg',
                'image/jpg',
                'image/png',
                'image/webp'
            ];
            if (!validTypes.includes(bondsFDForm.image_file.type)) {
                errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
            }
            if (bondsFDForm.image_file.size > 5 * 1024 * 1024) {
                errors.push('Image size should be less than 5MB');
            }
        }
        setFormErrors(errors);
        return errors.length === 0;
    };
    const handleBondsFDSubmit = async (e)=>{
        e.preventDefault();
        addDebugInfo("Bonds FD form submission started");
        if (!validateBondsFDForm()) {
            return;
        }
        try {
            setUploading(true);
            setFormErrors([]);
            let imageFileName = null;
            if (bondsFDForm.image_file) {
                try {
                    imageFileName = await handleImageUpload(bondsFDForm.image_file, 'bonds-images');
                } catch (uploadError) {
                    setFormErrors([
                        "Image upload failed: ".concat(uploadError.message)
                    ]);
                    setUploading(false);
                    return;
                }
            } else if (editingId) {
                const existingFD = bondsFD.find((fd)=>fd.id === editingId);
                imageFileName = (existingFD === null || existingFD === void 0 ? void 0 : existingFD.image_url) || null;
            }
            const fdDataToSave = {
                bank_name: bondsFDForm.bank_name,
                interest_rate: bondsFDForm.interest_rate ? parseFloat(bondsFDForm.interest_rate) : null,
                tenure: bondsFDForm.tenure || null,
                image_url: imageFileName
            };
            let result;
            if (editingId) {
                result = await supabase.from('bonds_fd').update(fdDataToSave).eq('id', editingId);
            } else {
                result = await supabase.from('bonds_fd').insert([
                    {
                        ...fdDataToSave,
                        created_at: new Date().toISOString()
                    }
                ]);
            }
            if (result.error) throw new Error(result.error.message);
            resetForm();
            await fetchBondsFD();
            alert(editingId ? 'FD updated successfully!' : 'FD created successfully!');
        } catch (error) {
            setFormErrors([
                error.message
            ]);
        } finally{
            setUploading(false);
        }
    };
    const handleEdit = (item, type)=>{
        addDebugInfo("Editing ".concat(type, ": ").concat(item.title || item.company_name || item.bank_name));
        if (type === 'nfo') {
            setNfoForm({
                title: item.title,
                description: item.description || '',
                start_date: item.start_date ? item.start_date.split('T')[0] : '',
                end_date: item.end_date ? item.end_date.split('T')[0] : '',
                image_file: null
            });
        } else if (type === 'ncd') {
            var _item_interest_rate;
            setBondsNCDForm({
                company_name: item.company_name,
                issue_size: item.issue_size || '',
                interest_rate: ((_item_interest_rate = item.interest_rate) === null || _item_interest_rate === void 0 ? void 0 : _item_interest_rate.toString()) || '',
                tenure: item.tenure || '',
                image_file: null
            });
        } else if (type === 'fd') {
            var _item_interest_rate1;
            setBondsFDForm({
                bank_name: item.bank_name,
                interest_rate: ((_item_interest_rate1 = item.interest_rate) === null || _item_interest_rate1 === void 0 ? void 0 : _item_interest_rate1.toString()) || '',
                tenure: item.tenure || '',
                image_file: null
            });
        }
        setEditingId(item.id);
        setEditingType(type);
        setShowForm(true);
        setFormErrors([]);
    };
    const handleDelete = async (id, type)=>{
        if (!confirm('Are you sure you want to delete this item?')) return;
        try {
            addDebugInfo("Deleting ".concat(type, ": ").concat(id));
            const tableName = type === 'nfo' ? 'upcoming_nfo' : type === 'ncd' ? 'bonds_ncd' : 'bonds_fd';
            const { error } = await supabase.from(tableName).delete().eq('id', id);
            if (error) throw error;
            // Refresh the appropriate data
            if (type === 'nfo') await fetchNFOData();
            else if (type === 'ncd') await fetchBondsNCD();
            else if (type === 'fd') await fetchBondsFD();
            alert('Item deleted successfully!');
        } catch (error) {
            console.error('Error deleting item:', error);
            alert("Error deleting item: ".concat(error.message || 'Please try again.'));
        }
    };
    const resetForm = ()=>{
        setNfoForm({
            title: '',
            description: '',
            start_date: '',
            end_date: '',
            image_file: null
        });
        setBondsNCDForm({
            company_name: '',
            issue_size: '',
            interest_rate: '',
            tenure: '',
            image_file: null
        });
        setBondsFDForm({
            bank_name: '',
            interest_rate: '',
            tenure: '',
            image_file: null
        });
        setEditingId(null);
        setEditingType(null);
        setShowForm(false);
        setFormErrors([]);
    };
    const handleNewClick = (type)=>{
        resetForm();
        setEditingType(type);
        setShowForm(true);
    };
    const getImageUrl = (imagePath, bucket)=>{
        if (!imagePath) return null;
        let filename = imagePath;
        if (filename.includes('/')) {
            filename = filename.split('/').pop() || filename;
        }
        filename = filename.replace("".concat(bucket, "/"), '');
        const { data } = supabase.storage.from(bucket).getPublicUrl(filename);
        return data.publicUrl;
    };
    async function handleSignOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error("Error signing out:", error.message);
                return;
            }
            window.location.href = "/admin/login";
        } catch (error) {
            console.error("Sign out error:", error);
        }
    }
    // Stats calculations
    const totalLeads = leads.length;
    const contactedLeads = leads.filter((lead)=>lead.is_contacted).length;
    const newLeads = totalLeads - contactedLeads;
    const contactRate = totalLeads > 0 ? contactedLeads / totalLeads * 100 : 0;
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const getRequirementColor = (requirement)=>{
        const colors = {
            'Insurance': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
            'Mediclaim': 'bg-green-500/20 text-green-400 border-green-500/30',
            'Loan': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
            'Mutual Funds': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
            'SIP': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
            'Pension Planning': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
            'Child Plans': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
            'Wealth Advisory': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
        };
        return colors[requirement] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    };
    // Render appropriate form based on editingType
    const renderForm = ()=>{
        if (!showForm && !editingType) return null;
        const formConfig = {
            nfo: {
                title: editingId ? 'Edit NFO' : 'Add New NFO',
                onSubmit: handleNfoSubmit,
                fields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: "NFO Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1780,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: nfoForm.title,
                                            onChange: (e)=>setNfoForm({
                                                    ...nfoForm,
                                                    title: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                            placeholder: "Enter NFO title",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1783,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1779,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: [
                                                "Image ",
                                                !editingId && '*'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1794,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/jpeg, image/jpg, image/png, image/webp",
                                            onChange: (e)=>{
                                                var _e_target_files;
                                                setNfoForm({
                                                    ...nfoForm,
                                                    image_file: ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null
                                                });
                                                setFormErrors([]);
                                            },
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors",
                                            required: !editingId
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1797,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs mt-2",
                                            children: [
                                                "Required for new NFOs. Max 5MB. Supported: JPEG, PNG, WebP",
                                                editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-400 ml-1",
                                                    children: "(Leave empty to keep current image)"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 1810,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1807,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1793,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1778,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1817,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: nfoForm.description,
                                    onChange: (e)=>setNfoForm({
                                            ...nfoForm,
                                            description: e.target.value
                                        }),
                                    rows: 3,
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "Enter NFO description..."
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1820,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1816,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1831,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: nfoForm.start_date,
                                            onChange: (e)=>setNfoForm({
                                                    ...nfoForm,
                                                    start_date: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1834,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1830,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1843,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: nfoForm.end_date,
                                            onChange: (e)=>setNfoForm({
                                                    ...nfoForm,
                                                    end_date: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1846,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1842,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1829,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            },
            ncd: {
                title: editingId ? 'Edit NCD' : 'Add New NCD',
                onSubmit: handleBondsNCDSubmit,
                fields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Company Name *"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1863,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: bondsNCDForm.company_name,
                                    onChange: (e)=>setBondsNCDForm({
                                            ...bondsNCDForm,
                                            company_name: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "Enter company name",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1866,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1862,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Issue Size"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1877,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: bondsNCDForm.issue_size,
                                    onChange: (e)=>setBondsNCDForm({
                                            ...bondsNCDForm,
                                            issue_size: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "e.g., ₹500 Cr"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1880,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1876,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Interest Rate (%)"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1890,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    step: "0.01",
                                    value: bondsNCDForm.interest_rate,
                                    onChange: (e)=>setBondsNCDForm({
                                            ...bondsNCDForm,
                                            interest_rate: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "e.g., 8.5"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1893,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1889,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Tenure"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1904,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: bondsNCDForm.tenure,
                                    onChange: (e)=>setBondsNCDForm({
                                            ...bondsNCDForm,
                                            tenure: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "e.g., 3 years"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1907,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1903,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: [
                                        "Image ",
                                        !editingId && '*'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1917,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/jpeg, image/jpg, image/png, image/webp",
                                    onChange: (e)=>{
                                        var _e_target_files;
                                        setBondsNCDForm({
                                            ...bondsNCDForm,
                                            image_file: ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null
                                        });
                                        setFormErrors([]);
                                    },
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors",
                                    required: !editingId
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1920,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-2",
                                    children: [
                                        "Required for new NCDs. Max 5MB. Supported: JPEG, PNG, WebP",
                                        editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 ml-1",
                                            children: "(Leave empty to keep current image)"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 1933,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1930,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1916,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 1861,
                    columnNumber: 11
                }, this)
            },
            fd: {
                title: editingId ? 'Edit FD' : 'Add New FD',
                onSubmit: handleBondsFDSubmit,
                fields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Bank Name *"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1946,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: bondsFDForm.bank_name,
                                    onChange: (e)=>setBondsFDForm({
                                            ...bondsFDForm,
                                            bank_name: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "Enter bank name",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1949,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1945,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Interest Rate (%)"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1960,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    step: "0.01",
                                    value: bondsFDForm.interest_rate,
                                    onChange: (e)=>setBondsFDForm({
                                            ...bondsFDForm,
                                            interest_rate: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "e.g., 7.2"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1963,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1959,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Tenure"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1974,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: bondsFDForm.tenure,
                                    onChange: (e)=>setBondsFDForm({
                                            ...bondsFDForm,
                                            tenure: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors",
                                    placeholder: "e.g., 1-3 years"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1977,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1973,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: [
                                        "Image ",
                                        !editingId && '*'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1987,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/jpeg, image/jpg, image/png, image/webp",
                                    onChange: (e)=>{
                                        var _e_target_files;
                                        setBondsFDForm({
                                            ...bondsFDForm,
                                            image_file: ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null
                                        });
                                        setFormErrors([]);
                                    },
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors",
                                    required: !editingId
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 1990,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-2",
                                    children: [
                                        "Required for new FDs. Max 5MB. Supported: JPEG, PNG, WebP",
                                        editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 ml-1",
                                            children: "(Leave empty to keep current image)"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2003,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2000,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 1986,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 1944,
                    columnNumber: 11
                }, this)
            }
        };
        const config = formConfig[editingType];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-amber-400 mb-6",
                    children: config.title
                }, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2016,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: config.onSubmit,
                    className: "space-y-6",
                    children: [
                        config.fields,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: uploading,
                                    className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUpload"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2029,
                                            columnNumber: 15
                                        }, this),
                                        uploading ? 'Saving...' : editingId ? 'Update' : 'Create'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2024,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetForm,
                                    className: "px-6 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:bg-white/10 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2033,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2023,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2020,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 2015,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "cursor-pointer text-blue-400 font-semibold",
                                children: "Debug Info (Click to expand)"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2056,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-xs text-blue-300 max-h-32 overflow-y-auto",
                                children: debugInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono",
                                        children: info
                                    }, index, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2059,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2057,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 2055,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2054,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 lg:mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-amber-400 mb-2",
                                    children: "Admin Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2068,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300 text-lg",
                                    children: [
                                        "Welcome back, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-semibold",
                                            children: userEmail
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2070,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2069,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2067,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRefresh,
                                    disabled: refreshing,
                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiRefreshCw"], {
                                            className: "w-4 h-4 ".concat(refreshing ? 'animate-spin' : '')
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2079,
                                            columnNumber: 15
                                        }, this),
                                        "Refresh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2074,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSignOut,
                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2086,
                                            columnNumber: 15
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2073,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2066,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 max-w-2xl overflow-x-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('leads'),
                            className: "flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ".concat(activeTab === 'leads' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2102,
                                    columnNumber: 13
                                }, this),
                                "Leads (",
                                totalLeads,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2094,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('nfo'),
                            className: "flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ".concat(activeTab === 'nfo' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiImage"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2113,
                                    columnNumber: 13
                                }, this),
                                "NFOs (",
                                nfoData.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('bondsNCD'),
                            className: "flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ".concat(activeTab === 'bondsNCD' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2124,
                                    columnNumber: 13
                                }, this),
                                "Bonds NCD (",
                                bondsNCD.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('bondsFD'),
                            className: "flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ".concat(activeTab === 'bondsFD' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShield"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2135,
                                    columnNumber: 13
                                }, this),
                                "Bonds FD (",
                                bondsFD.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2093,
                    columnNumber: 9
                }, this),
                formErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-rose-500/20 border border-rose-500/30 rounded-2xl p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-rose-400 font-semibold mb-2",
                            children: "Error:"
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "text-rose-300 text-sm list-disc list-inside",
                            children: formErrors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: error
                                }, index, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2146,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2142,
                    columnNumber: 11
                }, this),
                renderForm(),
                activeTab === 'leads' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm font-medium",
                                                        children: "Total Leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2163,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-white mt-2",
                                                        children: totalLeads
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-amber-500/20 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                    className: "w-6 h-6 text-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2167,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2166,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2161,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm font-medium",
                                                        children: "Contacted"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2175,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-green-400 mt-2",
                                                        children: contactedLeads
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2176,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-green-500/20 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                                    className: "w-6 h-6 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2179,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2178,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm font-medium",
                                                        children: "New Leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2187,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-amber-400 mt-2",
                                                        children: newLeads
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2188,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-blue-500/20 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                    className: "w-6 h-6 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2191,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2185,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm font-medium",
                                                        children: "Contact Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-purple-400 mt-2",
                                                        children: [
                                                            contactRate.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2198,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-purple-500/20 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                                    className: "w-6 h-6 text-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2203,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2202,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2197,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2196,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2159,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-6 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-amber-400",
                                            children: "Recent Leads"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-400 text-sm",
                                            children: [
                                                "Showing ",
                                                leads.length,
                                                " lead",
                                                leads.length !== 1 ? 's' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2211,
                                    columnNumber: 15
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2221,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-lg",
                                                children: "Loading leads..."
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2222,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2220,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2219,
                                    columnNumber: 17
                                }, this) : leads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                            className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-slate-300 mb-2",
                                            children: "No leads found"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2228,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400",
                                            children: "Leads will appear here once customers submit the contact form."
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2229,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2226,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left p-3 md:p-4 text-slate-300 font-semibold",
                                                            children: "Customer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2236,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left p-3 md:p-4 text-slate-300 font-semibold hidden md:table-cell",
                                                            children: "Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2237,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left p-3 md:p-4 text-slate-300 font-semibold",
                                                            children: "Requirement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2238,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left p-3 md:p-4 text-slate-300 font-semibold",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2239,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left p-3 md:p-4 text-slate-300 font-semibold hidden lg:table-cell",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2240,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left p-3 md:p-4 text-slate-300 font-semibold",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2241,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2235,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2234,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: leads.map((lead, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            delay: index * 0.05
                                                        },
                                                        className: "border-b border-white/5 hover:bg-white/2 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 md:p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 md:w-10 md:h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                                className: "w-4 h-4 md:w-5 md:h-5 text-amber-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2257,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2256,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-white font-semibold text-sm md:text-base truncate",
                                                                                    children: lead.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2260,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-slate-400 text-xs md:hidden",
                                                                                    children: lead.phone
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2263,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                lead.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-slate-400 text-xs md:hidden truncate",
                                                                                    children: lead.email
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2267,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2259,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2255,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2254,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 md:p-4 hidden md:table-cell",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center space-x-2 text-slate-300",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2279,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-sm",
                                                                                    children: lead.phone
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2280,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2278,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        lead.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center space-x-2 text-slate-400",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2284,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm truncate max-w-[150px]",
                                                                                    children: lead.email
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                    lineNumber: 2285,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2283,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2277,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2276,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 md:p-4",
                                                                children: lead.requirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ".concat(getRequirementColor(lead.requirement)),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate max-w-[80px] md:max-w-none",
                                                                        children: lead.requirement
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2295,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2294,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-400 text-xs",
                                                                    children: "Not specified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2300,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2292,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 md:p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>toggleContactStatus(lead.id, lead.is_contacted || false),
                                                                    className: "inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium border transition-colors ".concat(lead.is_contacted ? 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'),
                                                                    children: lead.is_contacted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                                                                className: "w-3 h-3 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2316,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "Contacted"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2317,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "Done"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2318,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                                                className: "w-3 h-3 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2322,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "New Lead"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2323,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "New"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2324,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2306,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2305,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 md:p-4 hidden lg:table-cell",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-slate-300 text-sm",
                                                                    children: lead.created_at ? formatDate(lead.created_at) : 'Unknown'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2332,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2331,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 md:p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex space-x-1 md:space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>toggleContactStatus(lead.id, lead.is_contacted || false),
                                                                            className: "p-2 rounded-lg border transition-colors ".concat(lead.is_contacted ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30' : 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'),
                                                                            title: lead.is_contacted ? "Mark as New" : "Mark as Contacted",
                                                                            children: lead.is_contacted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiXCircle"], {
                                                                                className: "w-3 h-3 md:w-4 md:h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2350,
                                                                                columnNumber: 35
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                                                                className: "w-3 h-3 md:w-4 md:h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                                lineNumber: 2351,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2340,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "md:hidden text-slate-400 text-xs flex items-center px-2",
                                                                            children: lead.created_at ? new Date(lead.created_at).toLocaleDateString('en-US', {
                                                                                month: 'short',
                                                                                day: 'numeric'
                                                                            }) : 'N/A'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2356,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2339,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2338,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, lead.id, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2246,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2244,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2233,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2232,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2210,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                activeTab === 'nfo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-400",
                                    children: [
                                        "Active NFOs (",
                                        nfoData.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNewClick('nfo'),
                                    className: "flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2386,
                                            columnNumber: 17
                                        }, this),
                                        "Create New NFO"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2382,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2378,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: nfoData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiImage"], {
                                        className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2395,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-300 mb-2",
                                        children: "No NFOs found"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2396,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mb-6",
                                        children: "Create your first NFO to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2397,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNewClick('nfo'),
                                        className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2402,
                                                columnNumber: 21
                                            }, this),
                                            "Create Your First NFO"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2398,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2394,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: nfoData.map((nfo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors",
                                        children: [
                                            nfo.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 bg-slate-800 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getImageUrl(nfo.image_url, 'nfo-images') || '',
                                                    alt: nfo.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2417,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2416,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-lg mb-2 line-clamp-2",
                                                        children: nfo.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2425,
                                                        columnNumber: 25
                                                    }, this),
                                                    nfo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-sm mb-3 line-clamp-2",
                                                        children: nfo.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2429,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 text-xs text-slate-400 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Start: ",
                                                                    nfo.start_date ? new Date(nfo.start_date).toLocaleDateString() : 'TBA'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2434,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "End: ",
                                                                    nfo.end_date ? new Date(nfo.end_date).toLocaleDateString() : 'TBA'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2435,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2433,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(nfo, 'nfo'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2442,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2438,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(nfo.id, 'nfo'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2449,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2445,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2437,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2424,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, nfo.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2409,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2407,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2392,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2376,
                    columnNumber: 11
                }, this),
                activeTab === 'bondsNCD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-400",
                                    children: [
                                        "Bonds NCD (",
                                        bondsNCD.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNewClick('ncd'),
                                    className: "flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2474,
                                            columnNumber: 17
                                        }, this),
                                        "Add New NCD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2470,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2466,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: bondsNCD.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                        className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2483,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-300 mb-2",
                                        children: "No NCDs found"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2484,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mb-6",
                                        children: "Add your first NCD to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2485,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNewClick('ncd'),
                                        className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2490,
                                                columnNumber: 21
                                            }, this),
                                            "Add Your First NCD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2486,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2482,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: bondsNCD.map((ncd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors",
                                        children: [
                                            ncd.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 bg-slate-800 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getImageUrl(ncd.image_url, 'bonds-images') || '',
                                                    alt: ncd.company_name,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2505,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2504,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-lg mb-2 line-clamp-2",
                                                        children: ncd.company_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2513,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm text-slate-300 mb-4",
                                                        children: [
                                                            ncd.issue_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Issue Size:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2519,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-400",
                                                                        children: ncd.issue_size
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2520,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2518,
                                                                columnNumber: 29
                                                            }, this),
                                                            ncd.interest_rate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Interest Rate:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2525,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-400",
                                                                        children: [
                                                                            ncd.interest_rate,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2526,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2524,
                                                                columnNumber: 29
                                                            }, this),
                                                            ncd.tenure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Tenure:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2531,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-400",
                                                                        children: ncd.tenure
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2532,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2530,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2516,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(ncd, 'ncd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2541,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2537,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(ncd.id, 'ncd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2548,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2544,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2536,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2512,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, ncd.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2497,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2495,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2480,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2464,
                    columnNumber: 11
                }, this),
                activeTab === 'bondsFD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-400",
                                    children: [
                                        "Bonds FD (",
                                        bondsFD.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2566,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNewClick('fd'),
                                    className: "flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2573,
                                            columnNumber: 17
                                        }, this),
                                        "Add New FD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2569,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2565,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: bondsFD.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShield"], {
                                        className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2582,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-300 mb-2",
                                        children: "No FDs found"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2583,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mb-6",
                                        children: "Add your first FD to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2584,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNewClick('fd'),
                                        className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2589,
                                                columnNumber: 21
                                            }, this),
                                            "Add Your First FD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2585,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2581,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: bondsFD.map((fd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors",
                                        children: [
                                            fd.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 bg-slate-800 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getImageUrl(fd.image_url, 'bonds-images') || '',
                                                    alt: fd.bank_name,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2604,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2603,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-lg mb-2 line-clamp-2",
                                                        children: fd.bank_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2612,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm text-slate-300 mb-4",
                                                        children: [
                                                            fd.interest_rate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Interest Rate:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2618,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-400",
                                                                        children: [
                                                                            fd.interest_rate,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2619,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2617,
                                                                columnNumber: 29
                                                            }, this),
                                                            fd.tenure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Tenure:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2624,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-400",
                                                                        children: fd.tenure
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2625,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2623,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2615,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(fd, 'fd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2634,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2630,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(fd.id, 'fd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 2641,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2637,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2629,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2611,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, fd.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2596,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2594,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2579,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2563,
                    columnNumber: 11
                }, this),
                (leads.length > 0 || nfoData.length > 0 || bondsNCD.length > 0 || bondsFD.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm",
                        children: [
                            "Last updated: ",
                            new Date().toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 2657,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2656,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 2048,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
        lineNumber: 2047,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "JbldQTT5GU9/tyjA21WGvCcFj2k=");
_c = AdminDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_app_admin_page_tsx_65dc1329._.js.map