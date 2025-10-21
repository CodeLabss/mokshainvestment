module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/admin/dashboard/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/admin/dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// interface Category {
//   id: string;
//   name: string;
//   icon: string;
// }
// export default function DashboardPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [logo, setLogo] = useState<File | null>(null);
//   const [categoryId, setCategoryId] = useState("");
//   const [companies, setCompanies] = useState<any[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const isAdmin = localStorage.getItem("isAdmin");
//     if (!isAdmin) router.push("/admin/login");
//     initializeData();
//   }, [router]);
//   async function initializeData() {
//     setLoading(true);
//     try {
//       // First, try to seed categories if they don't exist
//       await fetch("/api/admin/seed-categories", { method: "POST" });
//       // Then fetch categories and companies
//       await Promise.all([fetchCategories(), fetchCompanies()]);
//     } catch (error) {
//       console.error("Error initializing data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   async function fetchCategories() {
//     try {
//       const response = await fetch("/api/admin/categories");
//       const result = await response.json();
//       if (result.categories) {
//         setCategories(result.categories);
//         // Set the first category as default if none is selected
//         if (!categoryId && result.categories.length > 0) {
//           setCategoryId(result.categories[0].id);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   }
//   async function fetchCompanies() {
//     try {
//       const response = await fetch("/api/admin/companies");
//       const result = await response.json();
//       if (result.data) setCompanies(result.data);
//     } catch (error) {
//       console.error("Error fetching companies:", error);
//     }
//   }
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     try {
//       let logoUrl = null;
//       // Upload logo if provided
//       if (logo) {
//         const formData = new FormData();
//         formData.append("file", logo);
//         const uploadResponse = await fetch("/api/admin/upload", {
//           method: "POST",
//           body: formData,
//         });
//         const uploadResult = await uploadResponse.json();
//         if (uploadResult.error) {
//           console.error("Upload error:", uploadResult.error);
//           return;
//         }
//         logoUrl = uploadResult.url;
//       }
//       // Create company
//       const companyResponse = await fetch("/api/admin/companies", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, logoUrl, categoryId }),
//       });
//       const companyResult = await companyResponse.json();
//       if (companyResult.error) {
//         console.error("Company creation error:", companyResult.error);
//       } else {
//         setName("");
//         setLogo(null);
//         // Reset to first category or empty
//         if (categories.length > 0) {
//           setCategoryId(categories[0].id);
//         } else {
//           setCategoryId("");
//         }
//         fetchCompanies();
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   if (loading) {
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
//         <div className="flex items-center justify-center h-64">
//           <div className="text-lg">Loading...</div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
//       {/* Add Company Form */}
//       <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6 w-96">
//         <h2 className="text-lg font-semibold mb-4">Add Insurance Company</h2>
//         <input
//           type="text"
//           placeholder="Company Name"
//           className="w-full border p-2 mb-3 rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <select
//           className="w-full border p-2 mb-3 rounded"
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//           required
//         >
//           <option value="">Select a category</option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.id}>
//               {category.icon} {category.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="file"
//           accept="image/*"
//           className="w-full mb-3"
//           onChange={(e) => setLogo(e.target.files?.[0] || null)}
//         />
//         <button 
//           type="submit" 
//           className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
//           disabled={!categoryId}
//         >
//           Add Company
//         </button>
//       </form>
//       {/* Companies List */}
//       <h2 className="text-lg font-semibold mb-3">Existing Companies</h2>
//       <div className="grid grid-cols-2 gap-4">
//         {companies.map((company) => (
//           <div key={company.id} className="border p-3 rounded flex items-center gap-3">
//             {company.logo_url && (
//               <img src={company.logo_url} alt={company.name} className="w-12 h-12 object-contain" />
//             )}
//             <span>{company.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// working with delete and update but not good UI
// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import toast, { Toaster } from "react-hot-toast";
// interface Category { id: string; name: string; icon: string; }
// export default function DashboardPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [logo, setLogo] = useState<File | null>(null);
//   const [categoryId, setCategoryId] = useState("");
//   const [companies, setCompanies] = useState<any[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     if (!localStorage.getItem("isAdmin")) router.push("/admin/login");
//     initializeData();
//   }, [router]);
//   async function initializeData() {
//     setLoading(true);
//     try {
//       await fetch("/api/admin/seed-categories", { method: "POST" });
//       await Promise.all([fetchCategories(), fetchCompanies()]);
//     } catch { toast.error("Failed to initialize data"); }
//     finally { setLoading(false); }
//   }
//   async function fetchCategories() {
//     try {
//       const res = await fetch("/api/admin/categories");
//       const result = await res.json();
//       if (result.categories) { setCategories(result.categories); if (!categoryId && result.categories.length>0) setCategoryId(result.categories[0].id); }
//     } catch { toast.error("Failed to fetch categories"); }
//   }
//   async function fetchCompanies() {
//     try {
//       const res = await fetch("/api/admin/companies");
//       const text = await res.text();
//       const result = JSON.parse(text);
//       if (result.data) setCompanies(result.data);
//       else toast.error(result.error || "Failed to fetch companies");
//     } catch { toast.error("Failed to fetch companies"); }
//   }
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     try {
//       let logoUrl = null;
//       if (logo) {
//         const formData = new FormData();
//         formData.append("file", logo);
//         const uploadRes = await fetch("/api/admin/upload", { method:"POST", body: formData });
//         const uploadResult = JSON.parse(await uploadRes.text());
//         if (uploadResult.error) return toast.error(uploadResult.error);
//         logoUrl = uploadResult.url;
//       }
//       const res = await fetch("/api/admin/companies", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({name, logoUrl, categoryId}) });
//       const result = JSON.parse(await res.text());
//       if (result.error) return toast.error(result.error);
//       setName(""); setLogo(null);
//       toast.success("Company added!");
//       fetchCompanies();
//     } catch { toast.error("Failed to add company"); }
//   }
//   async function handleDelete(id:string) {
//     if(!confirm("Are you sure?")) return;
//     const toastId = toast.loading("Deleting...");
//     try {
//       const res = await fetch(`/api/admin/companies/${id}`, { method:"DELETE" });
//       const result = JSON.parse(await res.text());
//       if(result.success) toast.success("Deleted!", {id:toastId});
//       else toast.error(result.error || "Delete failed", {id:toastId});
//       fetchCompanies();
//     } catch { toast.error("Delete failed",{id:toastId}); }
//   }
//   async function handleUpdateLogo(id:string) {
//     const file:File|null = await new Promise(resolve=>{
//       const input=document.createElement("input");
//       input.type="file"; input.accept="image/*";
//       input.onchange = () => resolve(input.files?.[0]||null);
//       input.click();
//     });
//     if(!file) return;
//     const toastId = toast.loading("Updating logo...");
//     try {
//       const formData=new FormData();
//       formData.append("file", file);
//       const uploadRes=await fetch("/api/admin/upload",{method:"POST",body:formData});
//       const uploadResult=JSON.parse(await uploadRes.text());
//       if(uploadResult.error) return toast.error(uploadResult.error,{id:toastId});
//       const res = await fetch(`/api/admin/companies/${id}`, { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({logoUrl:uploadResult.url}) });
//       const result=JSON.parse(await res.text());
//       if(result.success) toast.success("Logo updated!",{id:toastId});
//       else toast.error(result.error || "Update failed",{id:toastId});
//       fetchCompanies();
//     } catch { toast.error("Update failed",{id:toastId}); }
//   }
//   if(loading) return <><Navbar/><main className="p-8 text-center">Loading...</main><Footer/><Toaster/></>;
//   return (
//     <>
//       <Navbar/>
//       <main className="p-8 max-w-6xl mx-auto">
//         <Toaster position="top-right"/>
//         <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
//         {/* Add Company Form */}
//         <section className="bg-white p-6 rounded-xl shadow mb-10 border">
//           <h2 className="text-xl font-semibold mb-4">➕ Add Insurance Company</h2>
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="text" placeholder="Company Name" className="w-full border p-2 rounded" value={name} onChange={(e)=>setName(e.target.value)} required/>
//             <select className="w-full border p-2 rounded" value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} required>
//               <option value="">Select a category</option>
//               {categories.map(cat=> <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>)}
//             </select>
//             <input type="file" accept="image/*" className="w-full border rounded p-2" onChange={e=>setLogo(e.target.files?.[0]||null)}/>
//             <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400" disabled={!categoryId}>Add Company</button>
//           </form>
//         </section>
//         {/* Companies Table */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4">🏢 Existing Companies</h2>
//           {categories.map(cat=>(
//             <div key={cat.id} className="mb-8">
//               <h3 className="text-lg font-bold mb-2">{cat.icon} {cat.name}</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse border">
//                   <thead><tr className="bg-gray-100"><th className="border p-2">Logo</th><th className="border p-2">Name</th><th className="border p-2">Actions</th></tr></thead>
//                   <tbody>
//                     {companies.filter(c=>c.category_id===cat.id).map(company=>(
//                       <tr key={company.id} className="hover:bg-gray-50">
//                         <td className="border p-2 text-center">{company.logo_url ? <img src={company.logo_url} className="w-12 h-12 mx-auto object-contain"/> : <span className="text-gray-400">No Logo</span>}</td>
//                         <td className="border p-2">{company.name}</td>
//                         <td className="border p-2 text-center space-x-2">
//                           <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600" onClick={()=>handleDelete(company.id)}>Delete</button>
//                           <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" onClick={()=>handleUpdateLogo(company.id)}>Update Logo</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ))}
//         </section>
//       </main>
//       <Footer/>
//     </>
//   );
// }
// working perfect just a few  changes
// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import toast, { Toaster } from "react-hot-toast";
// interface Category { 
//   id: string; 
//   name: string; 
//   icon: string; 
// }
// interface Company {
//   id: string;
//   name: string;
//   logo_url: string | null;
//   category_id: string;
// }
// export default function DashboardPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [logo, setLogo] = useState<File | null>(null);
//   const [categoryId, setCategoryId] = useState("");
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     if (!localStorage.getItem("isAdmin")) {
//       router.push("/admin/login");
//       return;
//     }
//     initializeData();
//   }, [router]);
//   const initializeData = async () => {
//     setLoading(true);
//     try {
//       await fetch("/api/admin/seed-categories", { method: "POST" });
//       await Promise.all([fetchCategories(), fetchCompanies()]);
//     } catch (error) {
//       toast.error("Failed to initialize data");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("/api/admin/categories");
//       const result = await res.json();
//       if (result.categories) {
//         setCategories(result.categories);
//         if (!categoryId && result.categories.length > 0) {
//           setCategoryId(result.categories[0].id);
//         }
//       }
//     } catch (error) {
//       toast.error("Failed to fetch categories");
//     }
//   };
//   const fetchCompanies = async () => {
//     try {
//       const res = await fetch("/api/admin/companies");
//       const result = await res.json();
//       if (result.data) {
//         setCompanies(result.data);
//       } else {
//         toast.error(result.error || "Failed to fetch companies");
//       }
//     } catch (error) {
//       toast.error("Failed to fetch companies");
//     }
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       let logoUrl = null;
//       if (logo) {
//         const formData = new FormData();
//         formData.append("file", logo);
//         const uploadRes = await fetch("/api/admin/upload", { 
//           method: "POST", 
//           body: formData 
//         });
//         const uploadResult = await uploadRes.json();
//         if (uploadResult.error) {
//           toast.error(uploadResult.error);
//           return;
//         }
//         logoUrl = uploadResult.url;
//       }
//       const res = await fetch("/api/admin/companies", { 
//         method: "POST", 
//         headers: { "Content-Type": "application/json" }, 
//         body: JSON.stringify({ name, logoUrl, categoryId }) 
//       });
//       const result = await res.json();
//       if (result.error) {
//         toast.error(result.error);
//         return;
//       }
//       setName(""); 
//       setLogo(null);
//       toast.success("Company added!");
//       fetchCompanies();
//     } catch (error) {
//       toast.error("Failed to add company");
//     }
//   };
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this company?")) return;
//     const toastId = toast.loading("Deleting...");
//     try {
//       const res = await fetch(`/api/admin/companies/${id}`, { method: "DELETE" });
//       const result = await res.json();
//       if (result.success) {
//         toast.success("Company deleted!", { id: toastId });
//       } else {
//         toast.error(result.error || "Delete failed", { id: toastId });
//       }
//       fetchCompanies();
//     } catch (error) {
//       toast.error("Delete failed", { id: toastId });
//     }
//   };
//   const handleUpdateLogo = async (id: string) => {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "image/*";
//     fileInput.onchange = async (e) => {
//       const file = (e.target as HTMLInputElement).files?.[0] || null;
//       if (!file) return;
//       const toastId = toast.loading("Updating logo...");
//       try {
//         const formData = new FormData();
//         formData.append("file", file);
//         const uploadRes = await fetch("/api/admin/upload", {
//           method: "POST",
//           body: formData
//         });
//         const uploadResult = await uploadRes.json();
//         if (uploadResult.error) {
//           toast.error(uploadResult.error, { id: toastId });
//           return;
//         }
//         const res = await fetch(`/api/admin/companies/${id}`, { 
//           method: "PUT", 
//           headers: { "Content-Type": "application/json" }, 
//           body: JSON.stringify({ logoUrl: uploadResult.url }) 
//         });
//         const result = await res.json();
//         if (result.success) {
//           toast.success("Logo updated!", { id: toastId });
//         } else {
//           toast.error(result.error || "Update failed", { id: toastId });
//         }
//         fetchCompanies();
//       } catch (error) {
//         toast.error("Update failed", { id: toastId });
//       }
//     };
//     fileInput.click();
//   };
//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <main className="min-h-screen flex items-center justify-center">
//           <div className="text-lg">Loading...</div>
//         </main>
//         <Footer />
//         <Toaster />
//       </>
//     );
//   }
//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen bg-gray-50 py-8">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <Toaster position="top-right" />
//           <div className="mb-8 text-center">
//             <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
//             <p className="text-gray-600 mt-2">Manage insurance companies and categories</p>
//           </div>
//           {/* Add Company Form */}
//           <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-gray-100">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Insurance Company</h2>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                 <input 
//                   type="text" 
//                   placeholder="Enter company name" 
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
//                   value={name} 
//                   onChange={(e) => setName(e.target.value)} 
//                   required 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                 <select 
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
//                   value={categoryId} 
//                   onChange={(e) => setCategoryId(e.target.value)} 
//                   required
//                 >
//                   <option value="">Select a category</option>
//                   {categories.map(cat => (
//                     <option key={cat.id} value={cat.id}>
//                       {cat.icon} {cat.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
//                 <input 
//                   type="file" 
//                   accept="image/*" 
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition" 
//                   onChange={e => setLogo(e.target.files?.[0] || null)} 
//                 />
//               </div>
//               <div className="flex items-end">
//                 <button 
//                   type="submit" 
//                   className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed" 
//                   disabled={!categoryId}
//                 >
//                   Add Company
//                 </button>
//               </div>
//             </form>
//           </div>
//           {/* Companies List */}
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-6">Existing Companies</h2>
//             {categories.map(category => {
//               const categoryCompanies = companies.filter(company => company.category_id === category.id);
//               if (categoryCompanies.length === 0) return null;
//               return (
//                 <div key={category.id} className="mb-10">
//                   <div className="flex items-center mb-4">
//                     <span className="text-2xl mr-2">{category.icon}</span>
//                     <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
//                     <span className="ml-3 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
//                       {categoryCompanies.length} companies
//                     </span>
//                   </div>
//                   <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
//                     <table className="w-full">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="text-left py-4 px-6 font-medium text-gray-600">Logo</th>
//                           <th className="text-left py-4 px-6 font-medium text-gray-600">Company Name</th>
//                           <th className="text-right py-4 px-6 font-medium text-gray-600">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-100">
//                         {categoryCompanies.map(company => (
//                           <tr key={company.id} className="hover:bg-gray-50 transition">
//                             <td className="py-4 px-6">
//                               {company.logo_url ? (
//                                 <img 
//                                   src={company.logo_url} 
//                                   alt={company.name} 
//                                   className="w-12 h-12 object-contain mx-auto" 
//                                 />
//                               ) : (
//                                 <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
//                                   <span className="text-gray-400 text-xs">No Logo</span>
//                                 </div>
//                               )}
//                             </td>
//                             <td className="py-4 px-6 font-medium text-gray-800">{company.name}</td>
//                             <td className="py-4 px-6">
//                               <div className="flex justify-end space-x-3">
//                                 <button 
//                                   className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
//                                   onClick={() => handleUpdateLogo(company.id)}
//                                 >
//                                   Update Logo
//                                 </button>
//                                 <button 
//                                   className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
//                                   onClick={() => handleDelete(company.id)}
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }
}),
"[project]/mokshainvestment/app/admin/dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/admin/dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8e959a5d._.js.map