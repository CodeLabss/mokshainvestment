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
// prod ready hop
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