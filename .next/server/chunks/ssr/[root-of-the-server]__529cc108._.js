module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/mokshainvestment/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// change from the above code
// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { motion } from "framer-motion";
// import { 
//   FiUser, FiPhone, FiMail, FiFileText, FiClock, 
//   FiCheckCircle, FiXCircle, FiLogOut, FiRefreshCw,
//   FiImage, FiUpload, FiPlus, FiEdit, FiTrash2,
//   FiTrendingUp, FiShield, FiBarChart2, FiEye, FiEyeOff,
//   FiArrowLeft, FiSearch, FiFilter
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
// type BondsNCD = {
//   id: string;
//   company_name: string;
//   issue_size: string | null;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   chart_data: any | null;
//   created_at: string;
// };
// type BondsFD = {
//   id: string;
//   bank_name: string;
//   interest_rate: number | null;
//   tenure: string | null;
//   image_url: string | null;
//   chart_data: any | null;
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
//   const [bondsNCD, setBondsNCD] = useState<BondsNCD[]>([]);
//   const [bondsFD, setBondsFD] = useState<BondsFD[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [activeTab, setActiveTab] = useState<'leads' | 'contacted' | 'nfo' | 'bondsNCD' | 'bondsFD'>('leads');
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true);
//   const [authDebug, setAuthDebug] = useState<string[]>([]);
//   const [expandedRequirement, setExpandedRequirement] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterRequirement, setFilterRequirement] = useState("");
//   // NFO Form State
//   const [nfoForm, setNfoForm] = useState({
//     title: '',
//     description: '',
//     start_date: '',
//     end_date: '',
//     image_file: null as File | null
//   });
//   // Bonds NCD Form State
//   const [bondsNCDForm, setBondsNCDForm] = useState({
//     company_name: '',
//     issue_size: '',
//     interest_rate: '',
//     tenure: '',
//     image_file: null as File | null
//   });
//   // Bonds FD Form State
//   const [bondsFDForm, setBondsFDForm] = useState({
//     bank_name: '',
//     interest_rate: '',
//     tenure: '',
//     image_file: null as File | null
//   });
//   const [uploading, setUploading] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editingType, setEditingType] = useState<'nfo' | 'ncd' | 'fd' | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formErrors, setFormErrors] = useState<string[]>([]);
//   const [debugInfo, setDebugInfo] = useState<string[]>([]);
//   const addDebugInfo = (message: string) => {
//     console.log(`🔍 ${message}`);
//     setDebugInfo(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`]);
//   };
//   const addAuthDebug = (message: string) => {
//     console.log(`🔐 ${message}`);
//     setAuthDebug(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`]);
//   };
//   // Authentication check
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         addAuthDebug("Starting authentication check...");
//         // Get the current session
//         const { data: { session }, error } = await supabase.auth.getSession();
//         if (error) {
//           addAuthDebug(`Session check error: ${error.message}`);
//           console.error("❌ Session check error:", error);
//           window.location.href = "/admin/login";
//           return;
//         }
//         if (!session) {
//           addAuthDebug("No session found, redirecting to login");
//           console.log("❌ No session found, redirecting to login");
//           window.location.href = "/admin/login";
//           return;
//         }
//         addAuthDebug(`Session found for user: ${session.user?.email}`);
//         console.log("✅ Session found, user is authenticated");
//         setUserEmail(session.user?.email || "");
//         setIsCheckingAuth(false);
//         // Now fetch the data
//         addAuthDebug("Fetching dashboard data...");
//         await Promise.all([
//           fetchLeads(),
//           fetchNFOData(),
//           fetchBondsNCD(),
//           fetchBondsFD()
//         ]);
//         addAuthDebug("Dashboard data loaded successfully");
//       } catch (error: any) {
//         addAuthDebug(`Auth check failed: ${error.message}`);
//         console.error("❌ Auth check failed:", error);
//         window.location.href = "/admin/login";
//       }
//     };
//     checkAuth();
//   }, []);
//   // Add session state listener
//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       addAuthDebug(`Auth state changed: ${event}`);
//       console.log("🔐 Auth state changed:", event);
//       if (event === 'SIGNED_OUT') {
//         addAuthDebug("User signed out, redirecting to login");
//         window.location.href = "/admin/login";
//       }
//       if (event === 'SIGNED_IN') {
//         addAuthDebug("User signed in, updating email");
//         setUserEmail(session?.user?.email || "");
//         setIsCheckingAuth(false);
//       }
//       if (event === 'TOKEN_REFRESHED') {
//         addAuthDebug("Token refreshed successfully");
//       }
//     });
//     return () => subscription.unsubscribe();
//   }, []);
//   // Filtered leads based on active tab and search
//   const filteredLeads = leads.filter(lead => {
//     const matchesSearch = 
//       lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       lead.phone.includes(searchTerm) ||
//       (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (lead.requirement && lead.requirement.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (lead.notes && lead.notes.toLowerCase().includes(searchTerm.toLowerCase()));
//     const matchesRequirement = !filterRequirement || lead.requirement === filterRequirement;
//     if (activeTab === 'leads') {
//       return !lead.is_contacted && matchesSearch && matchesRequirement;
//     } else if (activeTab === 'contacted') {
//       return lead.is_contacted && matchesSearch && matchesRequirement;
//     }
//     return matchesSearch && matchesRequirement;
//   });
//   // Show loading while checking authentication
//   if (isCheckingAuth) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
//           <p className="text-slate-300 text-lg">Verifying access...</p>
//           <p className="text-slate-400 text-sm mt-2">Checking authentication status</p>
//         </div>
//       </div>
//     );
//   }
//   // Show loading while fetching data
//   if (loading && !isCheckingAuth) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
//           <p className="text-slate-300 text-lg">Loading dashboard...</p>
//           <p className="text-slate-400 text-sm mt-2">Fetching your data</p>
//         </div>
//       </div>
//     );
//   }
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
//   async function fetchBondsNCD() {
//     try {
//       addDebugInfo("Fetching Bonds NCD data...");
//       const { data, error } = await supabase
//         .from('bonds_ncd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (error) {
//         addDebugInfo(`Bonds NCD fetch error: ${error.message}`);
//         console.error('Error fetching Bonds NCD data:', error);
//       } else {
//         addDebugInfo(`Fetched ${data?.length || 0} Bonds NCD`);
//         setBondsNCD(data || []);
//       }
//     } catch (error: any) {
//       addDebugInfo(`Bonds NCD fetch exception: ${error.message}`);
//       console.error('Error in fetchBondsNCD:', error);
//     }
//   }
//   async function fetchBondsFD() {
//     try {
//       addDebugInfo("Fetching Bonds FD data...");
//       const { data, error } = await supabase
//         .from('bonds_fd')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (error) {
//         addDebugInfo(`Bonds FD fetch error: ${error.message}`);
//         console.error('Error fetching Bonds FD data:', error);
//       } else {
//         addDebugInfo(`Fetched ${data?.length || 0} Bonds FD`);
//         setBondsFD(data || []);
//       }
//     } catch (error: any) {
//       addDebugInfo(`Bonds FD fetch exception: ${error.message}`);
//       console.error('Error in fetchBondsFD:', error);
//     }
//   }
//   async function handleRefresh() {
//     setRefreshing(true);
//     addDebugInfo("Manual refresh triggered");
//     await fetchLeads();
//     await fetchNFOData();
//     await fetchBondsNCD();
//     await fetchBondsFD();
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
//   // Image Upload Function
//   const handleImageUpload = async (file: File, bucket: string): Promise<string> => {
//     const fileExt = file.name.split('.').pop();
//     const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
//     const filePath = fileName;
//     addDebugInfo(`Uploading image to ${bucket}: ${fileName} (${file.size} bytes)`);
//     const { data, error: uploadError } = await supabase.storage
//       .from(bucket)
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
//   // NFO Management Functions
//   const validateNFOForm = (): boolean => {
//     const errors: string[] = [];
//     if (!nfoForm.title.trim()) {
//       errors.push('Title is required');
//     }
//     if (!editingId && !nfoForm.image_file) {
//       errors.push('Image is required for new NFOs');
//     }
//     if (nfoForm.image_file) {
//       const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//       if (!validTypes.includes(nfoForm.image_file.type)) {
//         errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
//       }
//       if (nfoForm.image_file.size > 5 * 1024 * 1024) {
//         errors.push('Image size should be less than 5MB');
//       }
//     }
//     setFormErrors(errors);
//     if (errors.length > 0) {
//       addDebugInfo(`NFO Form validation failed: ${errors.join(', ')}`);
//     }
//     return errors.length === 0;
//   };
//   const handleNfoSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     addDebugInfo("NFO form submission started");
//     if (!validateNFOForm()) {
//       return;
//     }
//     try {
//       setUploading(true);
//       setFormErrors([]);
//       let imageFileName = null;
//       if (nfoForm.image_file) {
//         try {
//           imageFileName = await handleImageUpload(nfoForm.image_file, 'nfo-images');
//         } catch (uploadError: any) {
//           addDebugInfo(`Image upload error in submit: ${uploadError.message}`);
//           setFormErrors([`Image upload failed: ${uploadError.message}`]);
//           setUploading(false);
//           return;
//         }
//       } else if (editingId) {
//         const existingNfo = nfoData.find(nfo => nfo.id === editingId);
//         imageFileName = existingNfo?.image_url || null;
//         addDebugInfo(`Using existing image: ${imageFileName}`);
//       }
//       const nfoDataToSave = {
//         title: nfoForm.title,
//         description: nfoForm.description || null,
//         start_date: nfoForm.start_date || null,
//         end_date: nfoForm.end_date || null,
//         image_url: imageFileName,
//       };
//       addDebugInfo(`Saving NFO data: ${JSON.stringify(nfoDataToSave)}`);
//       let result;
//       if (editingId) {
//         addDebugInfo(`Updating existing NFO: ${editingId}`);
//         result = await supabase
//           .from('upcoming_nfo')
//           .update(nfoDataToSave)
//           .eq('id', editingId);
//       } else {
//         addDebugInfo("Creating new NFO");
//         result = await supabase
//           .from('upcoming_nfo')
//           .insert([{
//             ...nfoDataToSave,
//             created_at: new Date().toISOString()
//           }]);
//       }
//       if (result.error) {
//         addDebugInfo(`Database operation failed: ${result.error.message}`);
//         throw new Error(result.error.message);
//       }
//       addDebugInfo("NFO saved successfully");
//       resetForm();
//       await fetchNFOData();
//       alert(editingId ? 'NFO updated successfully!' : 'NFO created successfully!');
//     } catch (error: any) {
//       addDebugInfo(`NFO submission failed: ${error.message}`);
//       setFormErrors([error.message]);
//     } finally {
//       setUploading(false);
//     }
//   };
//   // Bonds NCD Management Functions
//   const validateBondsNCDForm = (): boolean => {
//     const errors: string[] = [];
//     if (!bondsNCDForm.company_name.trim()) {
//       errors.push('Company name is required');
//     }
//     if (!editingId && !bondsNCDForm.image_file) {
//       errors.push('Image is required for new NCDs');
//     }
//     if (bondsNCDForm.image_file) {
//       const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//       if (!validTypes.includes(bondsNCDForm.image_file.type)) {
//         errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
//       }
//       if (bondsNCDForm.image_file.size > 5 * 1024 * 1024) {
//         errors.push('Image size should be less than 5MB');
//       }
//     }
//     setFormErrors(errors);
//     return errors.length === 0;
//   };
//   const handleBondsNCDSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     addDebugInfo("Bonds NCD form submission started");
//     if (!validateBondsNCDForm()) {
//       return;
//     }
//     try {
//       setUploading(true);
//       setFormErrors([]);
//       let imageFileName = null;
//       if (bondsNCDForm.image_file) {
//         try {
//           imageFileName = await handleImageUpload(bondsNCDForm.image_file, 'bonds-images');
//         } catch (uploadError: any) {
//           setFormErrors([`Image upload failed: ${uploadError.message}`]);
//           setUploading(false);
//           return;
//         }
//       } else if (editingId) {
//         const existingNCD = bondsNCD.find(ncd => ncd.id === editingId);
//         imageFileName = existingNCD?.image_url || null;
//       }
//       const ncdDataToSave = {
//         company_name: bondsNCDForm.company_name,
//         issue_size: bondsNCDForm.issue_size || null,
//         interest_rate: bondsNCDForm.interest_rate ? parseFloat(bondsNCDForm.interest_rate) : null,
//         tenure: bondsNCDForm.tenure || null,
//         image_url: imageFileName,
//       };
//       let result;
//       if (editingId) {
//         result = await supabase
//           .from('bonds_ncd')
//           .update(ncdDataToSave)
//           .eq('id', editingId);
//       } else {
//         result = await supabase
//           .from('bonds_ncd')
//           .insert([{
//             ...ncdDataToSave,
//             created_at: new Date().toISOString()
//           }]);
//       }
//       if (result.error) throw new Error(result.error.message);
//       resetForm();
//       await fetchBondsNCD();
//       alert(editingId ? 'NCD updated successfully!' : 'NCD created successfully!');
//     } catch (error: any) {
//       setFormErrors([error.message]);
//     } finally {
//       setUploading(false);
//     }
//   };
//   // Bonds FD Management Functions
//   const validateBondsFDForm = (): boolean => {
//     const errors: string[] = [];
//     if (!bondsFDForm.bank_name.trim()) {
//       errors.push('Bank name is required');
//     }
//     if (!editingId && !bondsFDForm.image_file) {
//       errors.push('Image is required for new FDs');
//     }
//     if (bondsFDForm.image_file) {
//       const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//       if (!validTypes.includes(bondsFDForm.image_file.type)) {
//         errors.push('Please upload a valid image (JPEG, PNG, or WebP)');
//       }
//       if (bondsFDForm.image_file.size > 5 * 1024 * 1024) {
//         errors.push('Image size should be less than 5MB');
//       }
//     }
//     setFormErrors(errors);
//     return errors.length === 0;
//   };
//   const handleBondsFDSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     addDebugInfo("Bonds FD form submission started");
//     if (!validateBondsFDForm()) {
//       return;
//     }
//     try {
//       setUploading(true);
//       setFormErrors([]);
//       let imageFileName = null;
//       if (bondsFDForm.image_file) {
//         try {
//           imageFileName = await handleImageUpload(bondsFDForm.image_file, 'bonds-images');
//         } catch (uploadError: any) {
//           setFormErrors([`Image upload failed: ${uploadError.message}`]);
//           setUploading(false);
//           return;
//         }
//       } else if (editingId) {
//         const existingFD = bondsFD.find(fd => fd.id === editingId);
//         imageFileName = existingFD?.image_url || null;
//       }
//       const fdDataToSave = {
//         bank_name: bondsFDForm.bank_name,
//         interest_rate: bondsFDForm.interest_rate ? parseFloat(bondsFDForm.interest_rate) : null,
//         tenure: bondsFDForm.tenure || null,
//         image_url: imageFileName,
//       };
//       let result;
//       if (editingId) {
//         result = await supabase
//           .from('bonds_fd')
//           .update(fdDataToSave)
//           .eq('id', editingId);
//       } else {
//         result = await supabase
//           .from('bonds_fd')
//           .insert([{
//             ...fdDataToSave,
//             created_at: new Date().toISOString()
//           }]);
//       }
//       if (result.error) throw new Error(result.error.message);
//       resetForm();
//       await fetchBondsFD();
//       alert(editingId ? 'FD updated successfully!' : 'FD created successfully!');
//     } catch (error: any) {
//       setFormErrors([error.message]);
//     } finally {
//       setUploading(false);
//     }
//   };
//   const handleEdit = (item: any, type: 'nfo' | 'ncd' | 'fd') => {
//     addDebugInfo(`Editing ${type}: ${item.title || item.company_name || item.bank_name}`);
//     if (type === 'nfo') {
//       setNfoForm({
//         title: item.title,
//         description: item.description || '',
//         start_date: item.start_date ? item.start_date.split('T')[0] : '',
//         end_date: item.end_date ? item.end_date.split('T')[0] : '',
//         image_file: null
//       });
//     } else if (type === 'ncd') {
//       setBondsNCDForm({
//         company_name: item.company_name,
//         issue_size: item.issue_size || '',
//         interest_rate: item.interest_rate?.toString() || '',
//         tenure: item.tenure || '',
//         image_file: null
//       });
//     } else if (type === 'fd') {
//       setBondsFDForm({
//         bank_name: item.bank_name,
//         interest_rate: item.interest_rate?.toString() || '',
//         tenure: item.tenure || '',
//         image_file: null
//       });
//     }
//     setEditingId(item.id);
//     setEditingType(type);
//     setShowForm(true);
//     setFormErrors([]);
//   };
//   const handleDelete = async (id: string, type: 'nfo' | 'ncd' | 'fd') => {
//     if (!confirm('Are you sure you want to delete this item?')) return;
//     try {
//       addDebugInfo(`Deleting ${type}: ${id}`);
//       const tableName = type === 'nfo' ? 'upcoming_nfo' : type === 'ncd' ? 'bonds_ncd' : 'bonds_fd';
//       const { error } = await supabase
//         .from(tableName)
//         .delete()
//         .eq('id', id);
//       if (error) throw error;
//       // Refresh the appropriate data
//       if (type === 'nfo') await fetchNFOData();
//       else if (type === 'ncd') await fetchBondsNCD();
//       else if (type === 'fd') await fetchBondsFD();
//       alert('Item deleted successfully!');
//     } catch (error: any) {
//       console.error('Error deleting item:', error);
//       alert(`Error deleting item: ${error.message || 'Please try again.'}`);
//     }
//   };
//   const resetForm = () => {
//     setNfoForm({
//       title: '',
//       description: '',
//       start_date: '',
//       end_date: '',
//       image_file: null
//     });
//     setBondsNCDForm({
//       company_name: '',
//       issue_size: '',
//       interest_rate: '',
//       tenure: '',
//       image_file: null
//     });
//     setBondsFDForm({
//       bank_name: '',
//       interest_rate: '',
//       tenure: '',
//       image_file: null
//     });
//     setEditingId(null);
//     setEditingType(null);
//     setShowForm(false);
//     setFormErrors([]);
//   };
//   const handleNewClick = (type: 'nfo' | 'ncd' | 'fd') => {
//     resetForm();
//     setEditingType(type);
//     setShowForm(true);
//   };
//   const getImageUrl = (imagePath: string | null, bucket: string) => {
//     if (!imagePath) return null;
//     let filename = imagePath;
//     if (filename.includes('/')) {
//       filename = filename.split('/').pop() || filename;
//     }
//     filename = filename.replace(`${bucket}/`, '');
//     const { data } = supabase.storage
//       .from(bucket)
//       .getPublicUrl(filename);
//     return data.publicUrl;
//   };
//   async function handleSignOut() {
//     try {
//       addAuthDebug("User initiated sign out");
//       const { error } = await supabase.auth.signOut();
//       if (error) {
//         console.error("Error signing out:", error.message);
//         return;
//       }
//       // The auth state change listener will handle the redirect
//     } catch (error: any) {
//       console.error("Sign out error:", error);
//     }
//   }
//   // Stats calculations
//   const totalLeads = leads.length;
//   const contactedLeads = leads.filter(lead => lead.is_contacted).length;
//   const newLeads = totalLeads - contactedLeads;
//   const contactRate = totalLeads > 0 ? (contactedLeads / totalLeads) * 100 : 0;
//   // Requirement statistics - FIXED VERSION
//   const getRequirementStats = () => {
//     const requirementCounts: { [key: string]: number } = {};
//     leads.forEach(lead => {
//       if (lead.requirement && lead.requirement.trim()) {
//         const requirement = lead.requirement.trim();
//         requirementCounts[requirement] = (requirementCounts[requirement] || 0) + 1;
//       }
//     });
//     return requirementCounts;
//   };
//   const requirementStats = getRequirementStats();
//   const topRequirement = Object.entries(requirementStats).sort((a, b) => b[1] - a[1])[0];
//   const uniqueRequirements = Object.keys(requirementStats).length;
//   // Get unique requirements for filter dropdown - FIXED: Removed duplicate definition
//   const uniqueRequirementsList = Object.keys(requirementStats);
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
//       'Wealth Advisory': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
//       'Tax Saving': 'bg-red-500/20 text-red-400 border-red-500/30',
//       'Retirement Planning': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
//       'Health Insurance': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
//       'Life Insurance': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
//       'Car Insurance': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
//       'Home Insurance': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
//       'Investment': 'bg-lime-500/20 text-lime-400 border-lime-500/30',
//       'Savings': 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30'
//     };
//     // Try exact match first
//     if (colors[requirement]) {
//       return colors[requirement];
//     }
//     // Try partial matches for flexibility
//     const requirementLower = requirement.toLowerCase();
//     for (const [key, value] of Object.entries(colors)) {
//       if (requirementLower.includes(key.toLowerCase())) {
//         return value;
//       }
//     }
//     // Default color for unknown requirements
//     return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//   };
//   // Render appropriate form based on editingType
//   const renderForm = () => {
//     if (!showForm && !editingType) return null;
//     const formConfig = {
//       nfo: {
//         title: editingId ? 'Edit NFO' : 'Add New NFO',
//         onSubmit: handleNfoSubmit,
//         fields: (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-slate-300 text-sm font-medium mb-2">
//                   NFO Title *
//                 </label>
//                 <input
//                   type="text"
//                   value={nfoForm.title}
//                   onChange={(e) => setNfoForm({...nfoForm, title: e.target.value})}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                   placeholder="Enter NFO title"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-slate-300 text-sm font-medium mb-2">
//                   Image {!editingId && '*'}
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/jpeg, image/jpg, image/png, image/webp"
//                   onChange={(e) => {
//                     setNfoForm({...nfoForm, image_file: e.target.files?.[0] || null});
//                     setFormErrors([]);
//                   }}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors"
//                   required={!editingId}
//                 />
//                 <p className="text-slate-400 text-xs mt-2">
//                   Required for new NFOs. Max 5MB. Supported: JPEG, PNG, WebP
//                   {editingId && (
//                     <span className="text-amber-400 ml-1">(Leave empty to keep current image)</span>
//                   )}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Description
//               </label>
//               <textarea
//                 value={nfoForm.description}
//                 onChange={(e) => setNfoForm({...nfoForm, description: e.target.value})}
//                 rows={3}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="Enter NFO description..."
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-slate-300 text-sm font-medium mb-2">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   value={nfoForm.start_date}
//                   onChange={(e) => setNfoForm({...nfoForm, start_date: e.target.value})}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
//                 />
//               </div>
//               <div>
//                 <label className="block text-slate-300 text-sm font-medium mb-2">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   value={nfoForm.end_date}
//                   onChange={(e) => setNfoForm({...nfoForm, end_date: e.target.value})}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
//                 />
//               </div>
//             </div>
//           </>
//         )
//       },
//       ncd: {
//         title: editingId ? 'Edit NCD' : 'Add New NCD',
//         onSubmit: handleBondsNCDSubmit,
//         fields: (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Company Name *
//               </label>
//               <input
//                 type="text"
//                 value={bondsNCDForm.company_name}
//                 onChange={(e) => setBondsNCDForm({...bondsNCDForm, company_name: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="Enter company name"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Issue Size
//               </label>
//               <input
//                 type="text"
//                 value={bondsNCDForm.issue_size}
//                 onChange={(e) => setBondsNCDForm({...bondsNCDForm, issue_size: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="e.g., ₹500 Cr"
//               />
//             </div>
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Interest Rate (%)
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 value={bondsNCDForm.interest_rate}
//                 onChange={(e) => setBondsNCDForm({...bondsNCDForm, interest_rate: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="e.g., 8.5"
//               />
//             </div>
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Tenure
//               </label>
//               <input
//                 type="text"
//                 value={bondsNCDForm.tenure}
//                 onChange={(e) => setBondsNCDForm({...bondsNCDForm, tenure: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="e.g., 3 years"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Image {!editingId && '*'}
//               </label>
//               <input
//                 type="file"
//                 accept="image/jpeg, image/jpg, image/png, image/webp"
//                 onChange={(e) => {
//                   setBondsNCDForm({...bondsNCDForm, image_file: e.target.files?.[0] || null});
//                   setFormErrors([]);
//                 }}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors"
//                 required={!editingId}
//               />
//               <p className="text-slate-400 text-xs mt-2">
//                 Required for new NCDs. Max 5MB. Supported: JPEG, PNG, WebP
//                 {editingId && (
//                   <span className="text-amber-400 ml-1">(Leave empty to keep current image)</span>
//                 )}
//               </p>
//             </div>
//           </div>
//         )
//       },
//       fd: {
//         title: editingId ? 'Edit FD' : 'Add New FD',
//         onSubmit: handleBondsFDSubmit,
//         fields: (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Bank Name *
//               </label>
//               <input
//                 type="text"
//                 value={bondsFDForm.bank_name}
//                 onChange={(e) => setBondsFDForm({...bondsFDForm, bank_name: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="Enter bank name"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Interest Rate (%)
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 value={bondsFDForm.interest_rate}
//                 onChange={(e) => setBondsFDForm({...bondsFDForm, interest_rate: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="e.g., 7.2"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Tenure
//               </label>
//               <input
//                 type="text"
//                 value={bondsFDForm.tenure}
//                 onChange={(e) => setBondsFDForm({...bondsFDForm, tenure: e.target.value})}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
//                 placeholder="e.g., 1-3 years"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-slate-300 text-sm font-medium mb-2">
//                 Image {!editingId && '*'}
//               </label>
//               <input
//                 type="file"
//                 accept="image/jpeg, image/jpg, image/png, image/webp"
//                 onChange={(e) => {
//                   setBondsFDForm({...bondsFDForm, image_file: e.target.files?.[0] || null});
//                   setFormErrors([]);
//                 }}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors"
//                 required={!editingId}
//               />
//               <p className="text-slate-400 text-xs mt-2">
//                 Required for new FDs. Max 5MB. Supported: JPEG, PNG, WebP
//                 {editingId && (
//                   <span className="text-amber-400 ml-1">(Leave empty to keep current image)</span>
//                 )}
//               </p>
//             </div>
//           </div>
//         )
//       }
//     };
//     const config = formConfig[editingType!];
//     return (
//       <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8">
//         <h2 className="text-xl font-bold text-amber-400 mb-6">
//           {config.title}
//         </h2>
//         <form onSubmit={config.onSubmit} className="space-y-6">
//           {config.fields}
//           <div className="flex gap-3 pt-4">
//             <button
//               type="submit"
//               disabled={uploading}
//               className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <FiUpload className="w-4 h-4" />
//               {uploading ? 'Saving...' : (editingId ? 'Update' : 'Create')}
//             </button>
//             <button
//               type="button"
//               onClick={resetForm}
//               className="px-6 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:bg-white/10 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   };
//   // Render Leads Table
//   const renderLeadsTable = () => {
//     return (
//       <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
//           <h2 className="text-xl font-bold text-amber-400">
//             {activeTab === 'leads' ? 'New Leads' : 'Contacted Leads'} ({filteredLeads.length})
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-3">
//             {/* Search Input */}
//             <div className="relative">
//               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search leads..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors w-full sm:w-64"
//               />
//             </div>
//             {/* Requirement Filter */}
//             {uniqueRequirements > 0 && (
//               <select
//                 value={filterRequirement}
//                 onChange={(e) => setFilterRequirement(e.target.value)}
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
//               >
//                 <option value="">All Requirements</option>
//                 {uniqueRequirementsList.map(req => (
//                   <option key={req} value={req}>{req} ({requirementStats[req]})</option>
//                 ))}
//               </select>
//             )}
//           </div>
//         </div>
//         {filteredLeads.length === 0 ? (
//           <div className="text-center py-12">
//             <FiUser className="w-16 h-16 text-slate-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-slate-300 mb-2">
//               {searchTerm || filterRequirement ? 'No matching leads found' : 'No leads found'}
//             </h3>
//             <p className="text-slate-400">
//               {searchTerm || filterRequirement 
//                 ? 'Try adjusting your search or filter criteria'
//                 : activeTab === 'leads' 
//                   ? 'New leads will appear here once customers submit the contact form.'
//                   : 'Contacted leads will appear here once you mark them as contacted.'
//               }
//             </p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-white/10">
//                   <th className="text-left py-3 px-4 text-slate-400 font-semibold">Customer</th>
//                   <th className="text-left py-3 px-4 text-slate-400 font-semibold">Contact</th>
//                   <th className="text-left py-3 px-4 text-slate-400 font-semibold">Requirement</th>
//                   <th className="text-left py-3 px-4 text-slate-400 font-semibold">Date</th>
//                   <th className="text-left py-3 px-4 text-slate-400 font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredLeads.map((lead, index) => (
//                   <motion.tr
//                     key={lead.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: index * 0.05 }}
//                     className="border-b border-white/5 hover:bg-white/5 transition-colors"
//                   >
//                     <td className="py-3 px-4">
//                       <div>
//                         <div className="font-semibold text-white">{lead.name}</div>
//                         {lead.email && (
//                           <div className="text-slate-400 text-sm">{lead.email}</div>
//                         )}
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="text-slate-300 font-mono">{lead.phone}</div>
//                     </td>
//                     <td className="py-3 px-4">
//                       {lead.requirement && (
//                         <div className="max-w-xs">
//                           <div className={`px-3 py-1 rounded-lg border ${getRequirementColor(lead.requirement)}`}>
//                             <span className="truncate">{lead.requirement}</span>
//                           </div>
//                           {/* Expanded Requirement View - ALWAYS VISIBLE BY DEFAULT */}
//                           <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/10">
//                             <div className="font-semibold text-slate-300 mb-2">Full Requirement:</div>
//                             <p className="text-slate-300 text-sm">{lead.requirement}</p>
//                             {lead.notes && (
//                               <>
//                                 <div className="font-semibold text-slate-300 mt-3 mb-1">Additional Notes:</div>
//                                 <p className="text-slate-400 text-sm">{lead.notes}</p>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="text-slate-400 text-sm">
//                         {lead.created_at ? formatDate(lead.created_at) : 'Unknown'}
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => toggleContactStatus(lead.id, lead.is_contacted || false)}
//                           className={`p-2 rounded-lg border transition-colors ${
//                             lead.is_contacted
//                               ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'
//                               : 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'
//                           }`}
//                           title={lead.is_contacted ? "Mark as New" : "Mark as Contacted"}
//                         >
//                           {lead.is_contacted ? 
//                             <FiXCircle className="w-4 h-4" /> : 
//                             <FiCheckCircle className="w-4 h-4" />
//                           }
//                         </button>
//                       </div>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     );
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pt-20">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-7xl mx-auto"
//       >
//         {/* Debug Info Panel */}
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
//         {/* Auth Debug Panel */}
//         <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
//           <details>
//             <summary className="cursor-pointer text-green-400 font-semibold">Auth Debug (Click to expand)</summary>
//             <div className="mt-2 text-xs text-green-300 max-h-32 overflow-y-auto">
//               {authDebug.map((info, index) => (
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
//         {/* Enhanced Stats Cards - WITH CLICKABLE CONTACTED CARD */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm font-medium">Total Leads</p>
//                 <p className="text-3xl font-bold text-white mt-2">{totalLeads}</p>
//               </div>
//               <div className="p-3 bg-amber-500/20 rounded-xl">
//                 <FiUser className="w-6 h-6 text-amber-400" />
//               </div>
//             </div>
//           </div>
//           {/* CLICKABLE CONTACTED CARD */}
//           <button
//             onClick={() => setActiveTab('contacted')}
//             className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-left cursor-pointer"
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm font-medium">Contacted</p>
//                 <p className="text-3xl font-bold text-green-400 mt-2">{contactedLeads}</p>
//               </div>
//               <div className="p-3 bg-green-500/20 rounded-xl">
//                 <FiCheckCircle className="w-6 h-6 text-green-400" />
//               </div>
//             </div>
//           </button>
//           <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm font-medium">New Leads</p>
//                 <p className="text-3xl font-bold text-amber-400 mt-2">{newLeads}</p>
//               </div>
//               <div className="p-3 bg-blue-500/20 rounded-xl">
//                 <FiClock className="w-6 h-6 text-blue-400" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm font-medium">Requirements</p>
//                 <p className="text-3xl font-bold text-purple-400 mt-2">{uniqueRequirements}</p>
//                 <p className="text-slate-400 text-xs mt-1">
//                   {topRequirement ? `Top: ${topRequirement[0]}` : 'No data'}
//                 </p>
//               </div>
//               <div className="p-3 bg-purple-500/20 rounded-xl">
//                 <FiBarChart2 className="w-6 h-6 text-purple-400" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Tab Navigation */}
//         {/* <div className="flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 max-w-3xl overflow-x-auto">
//           <button
//             onClick={() => setActiveTab('leads')}
//             className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ${ */}
//             {/* <div className="flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 w-full overflow-x-auto"> */}
//             <div className="flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 w-full overflow-x-auto">
//   <button
//     onClick={() => setActiveTab('leads')}
//     className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors flex-1 text-center justify-center min-w-0 ${
//               activeTab === 'leads'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             {/* <FiUser className="w-4 h-4" />
//             New Leads ({leads.filter(l => !l.is_contacted).length}) */}
//                 <FiUser className="w-4 h-4 flex-shrink-0" />
//     <span className="truncate">New Leads ({leads.filter(l => !l.is_contacted).length})</span>
//           </button>
//           {/* <button
//             onClick={() => setActiveTab('contacted')}
//             className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ${ */}
//                 <button
//     onClick={() => setActiveTab('contacted')}
//     // className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors flex-1 text-center justify-center min-w-0 ${
//         className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${
//               activeTab === 'contacted'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             {/* <FiCheckCircle className="w-4 h-4" />
//             Contacted ({contactedLeads}) */}
//                 <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
//     <span className="truncate">Contacted ({contactedLeads})</span>
//           </button>
//           <button
//             onClick={() => setActiveTab('nfo')}
//             // className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ${
//                 className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${
//               activeTab === 'nfo'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             <FiImage className="w-4 h-4" />
//             NFOs ({nfoData.length})
//           </button>
//           <button
//             onClick={() => setActiveTab('bondsNCD')}
//             // className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ${
//                 className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${
//               activeTab === 'bondsNCD'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             <FiTrendingUp className="w-4 h-4" />
//             Bonds NCD ({bondsNCD.length})
//           </button>
//           <button
//             onClick={() => setActiveTab('bondsFD')}
//             // className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors flex-shrink-0 text-center ${
//                 className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${
//               activeTab === 'bondsFD'
//                 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
//                 : 'text-slate-400 hover:text-white'
//             }`}
//           >
//             <FiShield className="w-4 h-4" />
//             Bonds FD ({bondsFD.length})
//           </button>
//         </div>
//         {/* Form Errors */}
//         {formErrors.length > 0 && (
//           <div className="bg-rose-500/20 border border-rose-500/30 rounded-2xl p-4 mb-6">
//             <h3 className="text-rose-400 font-semibold mb-2">Error:</h3>
//             <ul className="text-rose-300 text-sm list-disc list-inside">
//               {formErrors.map((error, index) => (
//                 <li key={index}>{error}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {/* Render Active Form */}
//         {renderForm()}
//         {/* Leads & Contacted Tabs Content */}
//         {(activeTab === 'leads' || activeTab === 'contacted') && renderLeadsTable()}
//         {/* NFO Management Tab Content */}
//         {activeTab === 'nfo' && (
//           <div className="space-y-8">
//             {/* NFO List Header with Create Button */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <h2 className="text-2xl font-bold text-amber-400">
//                 Active NFOs ({nfoData.length})
//               </h2>
//               <button
//                 onClick={() => handleNewClick('nfo')}
//                 className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors"
//               >
//                 <FiPlus className="w-4 h-4" />
//                 Create New NFO
//               </button>
//             </div>
//             {/* NFO List */}
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//               {nfoData.length === 0 ? (
//                 <div className="text-center py-12">
//                   <FiImage className="w-16 h-16 text-slate-600 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-slate-300 mb-2">No NFOs found</h3>
//                   <p className="text-slate-400 mb-6">Create your first NFO to get started.</p>
//                   <button
//                     onClick={() => handleNewClick('nfo')}
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
//                             src={getImageUrl(nfo.image_url, 'nfo-images') || ''}
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
//                             onClick={() => handleEdit(nfo, 'nfo')}
//                             className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
//                           >
//                             <FiEdit className="w-3 h-3" />
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDelete(nfo.id, 'nfo')}
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
//         {/* Bonds NCD Tab Content */}
//         {activeTab === 'bondsNCD' && (
//           <div className="space-y-8">
//             {/* Bonds NCD List Header with Create Button */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <h2 className="text-2xl font-bold text-amber-400">
//                 Bonds NCD ({bondsNCD.length})
//               </h2>
//               <button
//                 onClick={() => handleNewClick('ncd')}
//                 className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors"
//               >
//                 <FiPlus className="w-4 h-4" />
//                 Add New NCD
//               </button>
//             </div>
//             {/* Bonds NCD List */}
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//               {bondsNCD.length === 0 ? (
//                 <div className="text-center py-12">
//                   <FiTrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-slate-300 mb-2">No NCDs found</h3>
//                   <p className="text-slate-400 mb-6">Add your first NCD to get started.</p>
//                   <button
//                     onClick={() => handleNewClick('ncd')}
//                     className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto"
//                   >
//                     <FiPlus className="w-4 h-4" />
//                     Add Your First NCD
//                   </button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {bondsNCD.map((ncd) => (
//                     <motion.div
//                       key={ncd.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
//                     >
//                       {ncd.image_url && (
//                         <div className="h-40 bg-slate-800 overflow-hidden">
//                           <img
//                             src={getImageUrl(ncd.image_url, 'bonds-images') || ''}
//                             alt={ncd.company_name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       )}
//                       <div className="p-4">
//                         <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">
//                           {ncd.company_name}
//                         </h3>
//                         <div className="space-y-2 text-sm text-slate-300 mb-4">
//                           {ncd.issue_size && (
//                             <div className="flex justify-between">
//                               <span>Issue Size:</span>
//                               <span className="text-amber-400">{ncd.issue_size}</span>
//                             </div>
//                           )}
//                           {ncd.interest_rate && (
//                             <div className="flex justify-between">
//                               <span>Interest Rate:</span>
//                               <span className="text-green-400">{ncd.interest_rate}%</span>
//                             </div>
//                           )}
//                           {ncd.tenure && (
//                             <div className="flex justify-between">
//                               <span>Tenure:</span>
//                               <span className="text-blue-400">{ncd.tenure}</span>
//                             </div>
//                           )}
//                         </div>
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleEdit(ncd, 'ncd')}
//                             className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
//                           >
//                             <FiEdit className="w-3 h-3" />
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDelete(ncd.id, 'ncd')}
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
//         {/* Bonds FD Tab Content */}
//         {activeTab === 'bondsFD' && (
//           <div className="space-y-8">
//             {/* Bonds FD List Header with Create Button */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <h2 className="text-2xl font-bold text-amber-400">
//                 Bonds FD ({bondsFD.length})
//               </h2>
//               <button
//                 onClick={() => handleNewClick('fd')}
//                 className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors"
//               >
//                 <FiPlus className="w-4 h-4" />
//                 Add New FD
//               </button>
//             </div>
//             {/* Bonds FD List */}
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
//               {bondsFD.length === 0 ? (
//                 <div className="text-center py-12">
//                   <FiShield className="w-16 h-16 text-slate-600 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-slate-300 mb-2">No FDs found</h3>
//                   <p className="text-slate-400 mb-6">Add your first FD to get started.</p>
//                   <button
//                     onClick={() => handleNewClick('fd')}
//                     className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto"
//                   >
//                     <FiPlus className="w-4 h-4" />
//                     Add Your First FD
//                   </button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {bondsFD.map((fd) => (
//                     <motion.div
//                       key={fd.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
//                     >
//                       {fd.image_url && (
//                         <div className="h-40 bg-slate-800 overflow-hidden">
//                           <img
//                             src={getImageUrl(fd.image_url, 'bonds-images') || ''}
//                             alt={fd.bank_name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       )}
//                       <div className="p-4">
//                         <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">
//                           {fd.bank_name}
//                         </h3>
//                         <div className="space-y-2 text-sm text-slate-300 mb-4">
//                           {fd.interest_rate && (
//                             <div className="flex justify-between">
//                               <span>Interest Rate:</span>
//                               <span className="text-green-400">{fd.interest_rate}%</span>
//                             </div>
//                           )}
//                           {fd.tenure && (
//                             <div className="flex justify-between">
//                               <span>Tenure:</span>
//                               <span className="text-blue-400">{fd.tenure}</span>
//                             </div>
//                           )}
//                         </div>
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleEdit(fd, 'fd')}
//                             className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
//                           >
//                             <FiEdit className="w-3 h-3" />
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDelete(fd.id, 'fd')}
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
//         {(leads.length > 0 || nfoData.length > 0 || bondsNCD.length > 0 || bondsFD.length > 0) && (
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
// prod ready hopefully
__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://fouathcllogchmgagguq.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdWF0aGNsbG9nY2htZ2FnZ3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzIzMTEsImV4cCI6MjA3MjgwODMxMX0.y9rOlWdVGnA-vCflrTys4IEROvp9v18qBd46wRwg2oM"));
function AdminDashboardPage() {
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nfoData, setNfoData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bondsNCD, setBondsNCD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bondsFD, setBondsFD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('leads');
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterRequirement, setFilterRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [nfoForm, setNfoForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        image_file: null
    });
    const [bondsNCDForm, setBondsNCDForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        company_name: '',
        issue_size: '',
        interest_rate: '',
        tenure: '',
        image_file: null
    });
    const [bondsFDForm, setBondsFDForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        bank_name: '',
        interest_rate: '',
        tenure: '',
        image_file: null
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingType, setEditingType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error || !session) {
                    window.location.href = "/admin/login";
                    return;
                }
                setUserEmail(session.user?.email || "");
                setIsCheckingAuth(false);
                await Promise.all([
                    fetchLeads(),
                    fetchNFOData(),
                    fetchBondsNCD(),
                    fetchBondsFD()
                ]);
            } catch (error) {
                window.location.href = "/admin/login";
            }
        };
        checkAuth();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event)=>{
            if (event === 'SIGNED_OUT') {
                window.location.href = "/admin/login";
            }
        });
        return ()=>subscription.unsubscribe();
    }, []);
    const filteredLeads = leads.filter((lead)=>{
        const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.phone.includes(searchTerm) || lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()) || lead.requirement && lead.requirement.toLowerCase().includes(searchTerm.toLowerCase()) || lead.notes && lead.notes.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRequirement = !filterRequirement || lead.requirement === filterRequirement;
        if (activeTab === 'leads') {
            return !lead.is_contacted && matchesSearch && matchesRequirement;
        } else if (activeTab === 'contacted') {
            return lead.is_contacted && matchesSearch && matchesRequirement;
        }
        return matchesSearch && matchesRequirement;
    });
    if (isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 1953,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-lg",
                        children: "Verifying access..."
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 1954,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                lineNumber: 1952,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 1951,
            columnNumber: 7
        }, this);
    }
    if (loading && !isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 1964,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-lg",
                        children: "Loading dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 1965,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                lineNumber: 1963,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 1962,
            columnNumber: 7
        }, this);
    }
    async function fetchLeads() {
        try {
            setLoading(true);
            const { data, error } = await supabase.from('leads').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error fetching leads:', error);
            } else {
                setLeads(data || []);
            }
        } catch (error) {
            console.error('Error in fetchLeads:', error);
        } finally{
            setLoading(false);
            setRefreshing(false);
        }
    }
    async function fetchNFOData() {
        try {
            const { data, error } = await supabase.from('upcoming_nfo').select('*').order('start_date', {
                ascending: true
            });
            if (error) {
                console.error('Error fetching NFO data:', error);
            } else {
                setNfoData(data || []);
            }
        } catch (error) {
            console.error('Error in fetchNFOData:', error);
        }
    }
    async function fetchBondsNCD() {
        try {
            const { data, error } = await supabase.from('bonds_ncd').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error fetching Bonds NCD data:', error);
            } else {
                setBondsNCD(data || []);
            }
        } catch (error) {
            console.error('Error in fetchBondsNCD:', error);
        }
    }
    async function fetchBondsFD() {
        try {
            const { data, error } = await supabase.from('bonds_fd').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error fetching Bonds FD data:', error);
            } else {
                setBondsFD(data || []);
            }
        } catch (error) {
            console.error('Error in fetchBondsFD:', error);
        }
    }
    async function handleRefresh() {
        setRefreshing(true);
        await fetchLeads();
        await fetchNFOData();
        await fetchBondsNCD();
        await fetchBondsFD();
    }
    async function toggleContactStatus(leadId, currentStatus) {
        try {
            const { error } = await supabase.from('leads').update({
                is_contacted: !currentStatus
            }).eq('id', leadId);
            if (error) {
                console.error('Error updating lead:', error);
            } else {
                setLeads(leads.map((lead)=>lead.id === leadId ? {
                        ...lead,
                        is_contacted: !currentStatus
                    } : lead));
            }
        } catch (error) {
            console.error('Error toggling contact status:', error);
        }
    }
    const handleImageUpload = async (file, bucket)=>{
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const { data, error: uploadError } = await supabase.storage.from(bucket).upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
        });
        if (uploadError) {
            throw new Error(`Failed to upload image: ${uploadError.message}`);
        }
        return fileName;
    };
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
        return errors.length === 0;
    };
    const handleNfoSubmit = async (e)=>{
        e.preventDefault();
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
                    setFormErrors([
                        `Image upload failed: ${uploadError.message}`
                    ]);
                    setUploading(false);
                    return;
                }
            } else if (editingId) {
                const existingNfo = nfoData.find((nfo)=>nfo.id === editingId);
                imageFileName = existingNfo?.image_url || null;
            }
            const nfoDataToSave = {
                title: nfoForm.title,
                description: nfoForm.description || null,
                start_date: nfoForm.start_date || null,
                end_date: nfoForm.end_date || null,
                image_url: imageFileName
            };
            let result;
            if (editingId) {
                result = await supabase.from('upcoming_nfo').update(nfoDataToSave).eq('id', editingId);
            } else {
                result = await supabase.from('upcoming_nfo').insert([
                    {
                        ...nfoDataToSave,
                        created_at: new Date().toISOString()
                    }
                ]);
            }
            if (result.error) {
                throw new Error(result.error.message);
            }
            resetForm();
            await fetchNFOData();
            alert(editingId ? 'NFO updated successfully!' : 'NFO created successfully!');
        } catch (error) {
            setFormErrors([
                error.message
            ]);
        } finally{
            setUploading(false);
        }
    };
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
                        `Image upload failed: ${uploadError.message}`
                    ]);
                    setUploading(false);
                    return;
                }
            } else if (editingId) {
                const existingNCD = bondsNCD.find((ncd)=>ncd.id === editingId);
                imageFileName = existingNCD?.image_url || null;
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
                        `Image upload failed: ${uploadError.message}`
                    ]);
                    setUploading(false);
                    return;
                }
            } else if (editingId) {
                const existingFD = bondsFD.find((fd)=>fd.id === editingId);
                imageFileName = existingFD?.image_url || null;
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
        if (type === 'nfo') {
            setNfoForm({
                title: item.title,
                description: item.description || '',
                start_date: item.start_date ? item.start_date.split('T')[0] : '',
                end_date: item.end_date ? item.end_date.split('T')[0] : '',
                image_file: null
            });
        } else if (type === 'ncd') {
            setBondsNCDForm({
                company_name: item.company_name,
                issue_size: item.issue_size || '',
                interest_rate: item.interest_rate?.toString() || '',
                tenure: item.tenure || '',
                image_file: null
            });
        } else if (type === 'fd') {
            setBondsFDForm({
                bank_name: item.bank_name,
                interest_rate: item.interest_rate?.toString() || '',
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
            const tableName = type === 'nfo' ? 'upcoming_nfo' : type === 'ncd' ? 'bonds_ncd' : 'bonds_fd';
            const { error } = await supabase.from(tableName).delete().eq('id', id);
            if (error) throw error;
            if (type === 'nfo') await fetchNFOData();
            else if (type === 'ncd') await fetchBondsNCD();
            else if (type === 'fd') await fetchBondsFD();
            alert('Item deleted successfully!');
        } catch (error) {
            alert(`Error deleting item: ${error.message || 'Please try again.'}`);
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
        filename = filename.replace(`${bucket}/`, '');
        const { data } = supabase.storage.from(bucket).getPublicUrl(filename);
        return data.publicUrl;
    };
    async function handleSignOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error("Error signing out:", error.message);
            }
        } catch (error) {
            console.error("Sign out error:", error);
        }
    }
    const totalLeads = leads.length;
    const contactedLeads = leads.filter((lead)=>lead.is_contacted).length;
    const newLeads = totalLeads - contactedLeads;
    const getRequirementStats = ()=>{
        const requirementCounts = {};
        leads.forEach((lead)=>{
            if (lead.requirement && lead.requirement.trim()) {
                const requirement = lead.requirement.trim();
                requirementCounts[requirement] = (requirementCounts[requirement] || 0) + 1;
            }
        });
        return requirementCounts;
    };
    const requirementStats = getRequirementStats();
    const topRequirement = Object.entries(requirementStats).sort((a, b)=>b[1] - a[1])[0];
    const uniqueRequirements = Object.keys(requirementStats).length;
    const uniqueRequirementsList = Object.keys(requirementStats);
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
            'Wealth Advisory': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
            'Tax Saving': 'bg-red-500/20 text-red-400 border-red-500/30',
            'Retirement Planning': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
            'Health Insurance': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
            'Life Insurance': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
            'Car Insurance': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
            'Home Insurance': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
            'Investment': 'bg-lime-500/20 text-lime-400 border-lime-500/30',
            'Savings': 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30'
        };
        if (colors[requirement]) {
            return colors[requirement];
        }
        const requirementLower = requirement.toLowerCase();
        for (const [key, value] of Object.entries(colors)){
            if (requirementLower.includes(key.toLowerCase())) {
                return value;
            }
        }
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    };
    const renderForm = ()=>{
        if (!showForm && !editingType) return null;
        const formConfig = {
            nfo: {
                title: editingId ? 'Edit NFO' : 'Add New NFO',
                onSubmit: handleNfoSubmit,
                fields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: "NFO Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2547,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 2550,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: [
                                                "Image ",
                                                !editingId && '*'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2561,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/jpeg, image/jpg, image/png, image/webp",
                                            onChange: (e)=>{
                                                setNfoForm({
                                                    ...nfoForm,
                                                    image_file: e.target.files?.[0] || null
                                                });
                                                setFormErrors([]);
                                            },
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors",
                                            required: !editingId
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2564,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs mt-2",
                                            children: [
                                                "Required for new NFOs. Max 5MB. Supported: JPEG, PNG, WebP",
                                                editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-400 ml-1",
                                                    children: "(Leave empty to keep current image)"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2577,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2574,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2560,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2545,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2584,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                    lineNumber: 2587,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2583,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2598,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: nfoForm.start_date,
                                            onChange: (e)=>setNfoForm({
                                                    ...nfoForm,
                                                    start_date: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2597,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 text-sm font-medium mb-2",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: nfoForm.end_date,
                                            onChange: (e)=>setNfoForm({
                                                    ...nfoForm,
                                                    end_date: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2613,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2609,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2596,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            },
            ncd: {
                title: editingId ? 'Edit NCD' : 'Add New NCD',
                onSubmit: handleBondsNCDSubmit,
                fields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Company Name *"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2630,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2633,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2629,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Issue Size"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2644,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2647,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Interest Rate (%)"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2657,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2660,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2656,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Tenure"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2674,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2670,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: [
                                        "Image ",
                                        !editingId && '*'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/jpeg, image/jpg, image/png, image/webp",
                                    onChange: (e)=>{
                                        setBondsNCDForm({
                                            ...bondsNCDForm,
                                            image_file: e.target.files?.[0] || null
                                        });
                                        setFormErrors([]);
                                    },
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors",
                                    required: !editingId
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2687,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-2",
                                    children: [
                                        "Required for new NCDs. Max 5MB. Supported: JPEG, PNG, WebP",
                                        editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 ml-1",
                                            children: "(Leave empty to keep current image)"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2700,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2697,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2683,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2628,
                    columnNumber: 11
                }, this)
            },
            fd: {
                title: editingId ? 'Edit FD' : 'Add New FD',
                onSubmit: handleBondsFDSubmit,
                fields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Bank Name *"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2713,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2716,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2712,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Interest Rate (%)"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2727,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2730,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2726,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: "Tenure"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2741,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 2744,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2740,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 text-sm font-medium mb-2",
                                    children: [
                                        "Image ",
                                        !editingId && '*'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2754,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/jpeg, image/jpg, image/png, image/webp",
                                    onChange: (e)=>{
                                        setBondsFDForm({
                                            ...bondsFDForm,
                                            image_file: e.target.files?.[0] || null
                                        });
                                        setFormErrors([]);
                                    },
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30 transition-colors",
                                    required: !editingId
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2757,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-2",
                                    children: [
                                        "Required for new FDs. Max 5MB. Supported: JPEG, PNG, WebP",
                                        editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 ml-1",
                                            children: "(Leave empty to keep current image)"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2770,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2767,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2753,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2711,
                    columnNumber: 11
                }, this)
            }
        };
        const config = formConfig[editingType];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-amber-400 mb-6",
                    children: config.title
                }, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2783,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: config.onSubmit,
                    className: "space-y-6",
                    children: [
                        config.fields,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: uploading,
                                    className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUpload"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2796,
                                            columnNumber: 15
                                        }, this),
                                        uploading ? 'Saving...' : editingId ? 'Update' : 'Create'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2791,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetForm,
                                    className: "px-6 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:bg-white/10 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2800,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2790,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2787,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 2782,
            columnNumber: 7
        }, this);
    };
    const renderLeadsTable = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-amber-400",
                            children: [
                                activeTab === 'leads' ? 'New Leads' : 'Contacted Leads',
                                " (",
                                filteredLeads.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2817,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2823,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search leads...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors w-full sm:w-64"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2824,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2822,
                                    columnNumber: 13
                                }, this),
                                uniqueRequirements > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: filterRequirement,
                                    onChange: (e)=>setFilterRequirement(e.target.value),
                                    className: "px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All Requirements"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2839,
                                            columnNumber: 17
                                        }, this),
                                        uniqueRequirementsList.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: req,
                                                children: [
                                                    req,
                                                    " (",
                                                    requirementStats[req],
                                                    ")"
                                                ]
                                            }, req, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2841,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2834,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2821,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2816,
                    columnNumber: 9
                }, this),
                filteredLeads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUser"], {
                            className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2850,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-slate-300 mb-2",
                            children: searchTerm || filterRequirement ? 'No matching leads found' : 'No leads found'
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2851,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400",
                            children: searchTerm || filterRequirement ? 'Try adjusting your search or filter criteria' : activeTab === 'leads' ? 'New leads will appear here once customers submit the contact form.' : 'Contacted leads will appear here once you mark them as contacted.'
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2854,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2849,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                            children: "Customer"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2868,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2869,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                            children: "Requirement"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2870,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2871,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2872,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2867,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2866,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: filteredLeads.map((lead, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].tr, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: index * 0.05
                                        },
                                        className: "border-b border-white/5 hover:bg-white/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-white",
                                                            children: lead.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2886,
                                                            columnNumber: 25
                                                        }, this),
                                                        lead.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-slate-400 text-sm",
                                                            children: lead.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2888,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2885,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2884,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-300 font-mono",
                                                    children: lead.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2893,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2892,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: lead.requirement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `px-3 py-1 rounded-lg border ${getRequirementColor(lead.requirement)}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate",
                                                                children: lead.requirement
                                                            }, void 0, false, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 2899,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2898,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 p-3 bg-white/5 rounded-lg border border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-slate-300 mb-2",
                                                                    children: "Full Requirement:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2903,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-slate-300 text-sm",
                                                                    children: lead.requirement
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                    lineNumber: 2904,
                                                                    columnNumber: 29
                                                                }, this),
                                                                lead.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-slate-300 mt-3 mb-1",
                                                                            children: "Additional Notes:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2908,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-400 text-sm",
                                                                            children: lead.notes
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                            lineNumber: 2909,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2902,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2897,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2895,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-400 text-sm",
                                                    children: lead.created_at ? formatDate(lead.created_at) : 'Unknown'
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2917,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2916,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleContactStatus(lead.id, lead.is_contacted || false),
                                                        className: `p-2 rounded-lg border transition-colors ${lead.is_contacted ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30' : 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'}`,
                                                        title: lead.is_contacted ? "Mark as New" : "Mark as Contacted",
                                                        children: lead.is_contacted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiXCircle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2933,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                            lineNumber: 2934,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 2923,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 2922,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2921,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, lead.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2877,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2875,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 2865,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2864,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 2815,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 lg:mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-amber-400 mb-2",
                                    children: "Admin Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2959,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300 text-lg",
                                    children: [
                                        "Welcome back, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-semibold",
                                            children: userEmail
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2961,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2960,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2958,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRefresh,
                                    disabled: refreshing,
                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiRefreshCw"], {
                                            className: `w-4 h-4 ${refreshing ? 'animate-spin' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2970,
                                            columnNumber: 15
                                        }, this),
                                        "Refresh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2965,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSignOut,
                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2977,
                                            columnNumber: 15
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 2973,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2964,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2957,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm font-medium",
                                                children: "Total Leads"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2988,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-white mt-2",
                                                children: totalLeads
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 2989,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2987,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-amber-500/20 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUser"], {
                                            className: "w-6 h-6 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 2992,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 2991,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 2986,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2985,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('contacted'),
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-left cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm font-medium",
                                                children: "Contacted"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3003,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-green-400 mt-2",
                                                children: contactedLeads
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3004,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3002,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-green-500/20 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                            className: "w-6 h-6 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 3007,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3006,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3001,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 2997,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm font-medium",
                                                children: "New Leads"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3015,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-amber-400 mt-2",
                                                children: newLeads
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3016,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3014,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-blue-500/20 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiClock"], {
                                            className: "w-6 h-6 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 3019,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3018,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3013,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3012,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm font-medium",
                                                children: "Requirements"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3027,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-purple-400 mt-2",
                                                children: uniqueRequirements
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3028,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs mt-1",
                                                children: topRequirement ? `Top: ${topRequirement[0]}` : 'No data'
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3029,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3026,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-purple-500/20 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart2"], {
                                            className: "w-6 h-6 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 3034,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3033,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3025,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3024,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 2984,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 w-full overflow-x-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('leads'),
                            className: `flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${activeTab === 'leads' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUser"], {
                                    className: "w-4 h-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3050,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-sm",
                                    children: [
                                        "New Leads (",
                                        leads.filter((l)=>!l.is_contacted).length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3051,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3042,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('contacted'),
                            className: `flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${activeTab === 'contacted' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                    className: "w-4 h-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3061,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-sm",
                                    children: [
                                        "Contacted (",
                                        contactedLeads,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3062,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3053,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('nfo'),
                            className: `flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${activeTab === 'nfo' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiImage"], {
                                    className: "w-4 h-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3072,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-sm",
                                    children: [
                                        "NFOs (",
                                        nfoData.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3073,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3064,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('bondsNCD'),
                            className: `flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${activeTab === 'bondsNCD' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                    className: "w-4 h-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3083,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-sm",
                                    children: [
                                        "Bonds NCD (",
                                        bondsNCD.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3084,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3075,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('bondsFD'),
                            className: `flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors flex-1 min-w-0 ${activeTab === 'bondsFD' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"], {
                                    className: "w-4 h-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3094,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-sm",
                                    children: [
                                        "Bonds FD (",
                                        bondsFD.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3095,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3086,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 3041,
                    columnNumber: 9
                }, this),
                formErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-rose-500/20 border border-rose-500/30 rounded-2xl p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-rose-400 font-semibold mb-2",
                            children: "Error:"
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "text-rose-300 text-sm list-disc list-inside",
                            children: formErrors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: error
                                }, index, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3105,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 3101,
                    columnNumber: 11
                }, this),
                renderForm(),
                (activeTab === 'leads' || activeTab === 'contacted') && renderLeadsTable(),
                activeTab === 'nfo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-400",
                                    children: [
                                        "Active NFOs (",
                                        nfoData.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNewClick('nfo'),
                                    className: "flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 3128,
                                            columnNumber: 17
                                        }, this),
                                        "Create New NFO"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: nfoData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiImage"], {
                                        className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3136,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-300 mb-2",
                                        children: "No NFOs found"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3137,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mb-6",
                                        children: "Create your first NFO to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3138,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNewClick('nfo'),
                                        className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3143,
                                                columnNumber: 21
                                            }, this),
                                            "Create Your First NFO"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3139,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3135,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: nfoData.map((nfo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            nfo.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 bg-slate-800 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getImageUrl(nfo.image_url, 'nfo-images') || '',
                                                    alt: nfo.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 3158,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3157,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-lg mb-2 line-clamp-2",
                                                        children: nfo.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3166,
                                                        columnNumber: 25
                                                    }, this),
                                                    nfo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-sm mb-3 line-clamp-2",
                                                        children: nfo.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3170,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 text-xs text-slate-400 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Start: ",
                                                                    nfo.start_date ? new Date(nfo.start_date).toLocaleDateString() : 'TBA'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3175,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "End: ",
                                                                    nfo.end_date ? new Date(nfo.end_date).toLocaleDateString() : 'TBA'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3176,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3174,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(nfo, 'nfo'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3183,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3179,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(nfo.id, 'nfo'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3190,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3186,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3178,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3165,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, nfo.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3150,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3148,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 3119,
                    columnNumber: 11
                }, this),
                activeTab === 'bondsNCD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-400",
                                    children: [
                                        "Bonds NCD (",
                                        bondsNCD.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNewClick('ncd'),
                                    className: "flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 3214,
                                            columnNumber: 17
                                        }, this),
                                        "Add New NCD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: bondsNCD.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
                                        className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3222,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-300 mb-2",
                                        children: "No NCDs found"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3223,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mb-6",
                                        children: "Add your first NCD to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3224,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNewClick('ncd'),
                                        className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3229,
                                                columnNumber: 21
                                            }, this),
                                            "Add Your First NCD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3225,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3221,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: bondsNCD.map((ncd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            ncd.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 bg-slate-800 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getImageUrl(ncd.image_url, 'bonds-images') || '',
                                                    alt: ncd.company_name,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 3244,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3243,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-lg mb-2 line-clamp-2",
                                                        children: ncd.company_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3252,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm text-slate-300 mb-4",
                                                        children: [
                                                            ncd.issue_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Issue Size:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3258,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-400",
                                                                        children: ncd.issue_size
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3259,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3257,
                                                                columnNumber: 29
                                                            }, this),
                                                            ncd.interest_rate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Interest Rate:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3264,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-400",
                                                                        children: [
                                                                            ncd.interest_rate,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3265,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3263,
                                                                columnNumber: 29
                                                            }, this),
                                                            ncd.tenure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Tenure:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3270,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-400",
                                                                        children: ncd.tenure
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3271,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3269,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3255,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(ncd, 'ncd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3280,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3276,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(ncd.id, 'ncd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3287,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3283,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3275,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3251,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, ncd.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3236,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3234,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3219,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 3205,
                    columnNumber: 11
                }, this),
                activeTab === 'bondsFD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-400",
                                    children: [
                                        "Bonds FD (",
                                        bondsFD.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNewClick('fd'),
                                    className: "flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                            lineNumber: 3311,
                                            columnNumber: 17
                                        }, this),
                                        "Add New FD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                    lineNumber: 3307,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3303,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                            children: bondsFD.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"], {
                                        className: "w-16 h-16 text-slate-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3319,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-300 mb-2",
                                        children: "No FDs found"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3320,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mb-6",
                                        children: "Add your first FD to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3321,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNewClick('fd'),
                                        className: "flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-colors mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3326,
                                                columnNumber: 21
                                            }, this),
                                            "Add Your First FD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3322,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3318,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: bondsFD.map((fd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            fd.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 bg-slate-800 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getImageUrl(fd.image_url, 'bonds-images') || '',
                                                    alt: fd.bank_name,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                    lineNumber: 3341,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3340,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-lg mb-2 line-clamp-2",
                                                        children: fd.bank_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3349,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm text-slate-300 mb-4",
                                                        children: [
                                                            fd.interest_rate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Interest Rate:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3355,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-400",
                                                                        children: [
                                                                            fd.interest_rate,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3356,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3354,
                                                                columnNumber: 29
                                                            }, this),
                                                            fd.tenure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Tenure:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3361,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-400",
                                                                        children: fd.tenure
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3362,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3360,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3352,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(fd, 'fd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3371,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3367,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(fd.id, 'fd'),
                                                                className: "flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg text-xs hover:bg-rose-500/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                        lineNumber: 3378,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                                lineNumber: 3374,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                        lineNumber: 3366,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                                lineNumber: 3348,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, fd.id, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 3333,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 3331,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                            lineNumber: 3316,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 3302,
                    columnNumber: 11
                }, this),
                (leads.length > 0 || nfoData.length > 0 || bondsNCD.length > 0 || bondsFD.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm",
                        children: [
                            "Last updated: ",
                            new Date().toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 3393,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                    lineNumber: 3392,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 2951,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
        lineNumber: 2950,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__529cc108._.js.map