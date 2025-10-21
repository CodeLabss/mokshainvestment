// components/admin/BondsManager.tsx
"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

type FD = { id: string; bank_name: string; interest_rate?: number; tenure?: string; image_url?: string; chart_data?: any; created_at?: string };
type NCD = { id: string; company_name: string; interest_rate?: number; issue_size?: string; tenure?: string; image_url?: string; chart_data?: any; created_at?: string };

export default function BondsManager() {
  const [fds, setFds] = useState<FD[]>([]);
  const [ncds, setNcds] = useState<NCD[]>([]);
  const [loading, setLoading] = useState(false);
  const [editFD, setEditFD] = useState<FD | null>(null);
  const [editNCD, setEditNCD] = useState<NCD | null>(null);

  useEffect(()=>{ fetchAll(); }, []);

  async function fetchAll() {
    setLoading(true);
    const { data: fdata } = await supabase.from("bonds_fd").select("*").order("created_at", { ascending: false });
    const { data: ndata } = await supabase.from("bonds_ncd").select("*").order("created_at", { ascending: false });
    setFds((fdata as any) || []);
    setNcds((ndata as any) || []);
    setLoading(false);
  }

  async function deleteRow(table: "bonds_fd" | "bonds_ncd", id: string) {
    if (!confirm("Delete?")) return;
    const res = await fetch("/api/admin/content", { method: "DELETE", headers: { "Content-Type":"application/json" }, body: JSON.stringify({ table, id }) });
    if (res.ok) fetchAll();
  }

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3"><div className="font-semibold text-amber-400">Fixed Deposits (FDs)</div><button onClick={()=>setEditFD({id:"", bank_name:"", interest_rate:0, tenure:"", image_url:"", chart_data:{}})} className="px-3 py-1 rounded bg-amber-400 text-slate-900">Add FD</button></div>
        {loading ? <div>Loading...</div> : fds.map(fd => (
          <div key={fd.id} className="p-3 rounded bg-white/5 border border-white/6 flex items-center justify-between mb-2">
            <div><div className="font-semibold">{fd.bank_name}</div><div className="text-sm text-slate-300">{fd.tenure} • {fd.interest_rate}%</div></div>
            <div className="flex gap-2"><button onClick={()=>setEditFD(fd)} className="px-2 py-1 rounded border">Edit</button><button onClick={()=>deleteRow("bonds_fd", fd.id)} className="px-2 py-1 rounded bg-rose-600 text-white">Delete</button></div>
          </div>
        ))}
      </div>

      <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3"><div className="font-semibold text-amber-400">NCDs (Non-convertible debentures)</div><button onClick={()=>setEditNCD({id:"", company_name:"", issue_size:"", interest_rate:0, tenure:"", image_url:"", chart_data:{}})} className="px-3 py-1 rounded bg-amber-400 text-slate-900">Add NCD</button></div>
        {loading ? <div>Loading...</div> : ncds.map(n => (
          <div key={n.id} className="p-3 rounded bg-white/5 border border-white/6 flex items-center justify-between mb-2">
            <div><div className="font-semibold">{n.company_name}</div><div className="text-sm text-slate-300">{n.issue_size} • {n.interest_rate}%</div></div>
            <div className="flex gap-2"><button onClick={()=>setEditNCD(n)} className="px-2 py-1 rounded border">Edit</button><button onClick={()=>deleteRow("bonds_ncd", n.id)} className="px-2 py-1 rounded bg-rose-600 text-white">Delete</button></div>
          </div>
        ))}
      </div>

      {editFD && <FDNCDEditor kind="fd" initial={editFD} onClose={()=>{setEditFD(null); fetchAll();}} />}
      {editNCD && <FDNCDEditor kind="ncd" initial={editNCD} onClose={()=>{setEditNCD(null); fetchAll();}} />}
    </motion.div>
  );
}

function FDNCDEditor({ kind, initial, onClose }: { kind: "fd"|"ncd"; initial: any; onClose: ()=>void }) {
  const [label1, setLabel1] = useState(kind==="fd" ? "Bank name" : "Company name");
  const [name, setName] = useState(initial.bank_name || initial.company_name || "");
  const [interest_rate, setRate] = useState(initial.interest_rate || 0);
  const [tenure, setTenure] = useState(initial.tenure || "");
  const [issue_size, setIssueSize] = useState(initial.issue_size || "");
  const [image, setImage] = useState<File | null>(null);
  const [chartDataText, setChartDataText] = useState(JSON.stringify(initial.chart_data || { series: [] }, null, 2));
  const [saving, setSaving] = useState(false);

  async function submit() {
    setSaving(true);
    let image_url = initial.image_url || null;
    if (image) {
      const fd = new FormData();
      fd.append("file", image);
      fd.append("bucket", "uploads");
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      if (res.ok) {
        const j = await res.json();
        image_url = j.publicURL ?? j.path ?? null;
      } else { alert("Upload failed"); setSaving(false); return; }
    }

    let chart_data = null;
    try { chart_data = JSON.parse(chartDataText); } catch(e) { alert("Invalid JSON in chart data"); setSaving(false); return; }

    const table = kind === "fd" ? "bonds_fd" : "bonds_ncd";
    const payload: any = {
      ...(kind==="fd"?{ bank_name: name }:{ company_name: name }),
      interest_rate,
      tenure,
      image_url,
      chart_data
    };
    if (kind==="ncd") payload.issue_size = issue_size;

    if (!initial.id) {
      const res = await fetch("/api/admin/content", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ table, payload }) });
      if (res.ok) onClose();
    } else {
      const res = await fetch("/api/admin/content", { method: "PATCH", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ table, id: initial.id, payload }) });
      if (res.ok) onClose();
    }
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white/95 p-6 w-full max-w-2xl rounded-2xl" onClick={(e)=>e.stopPropagation()}>
        <h4 className="font-bold mb-2">{kind === "fd" ? "FD Editor" : "NCD Editor"}</h4>
        <div className="space-y-2">
          <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 border rounded" placeholder={label1} />
          <input type="number" value={interest_rate} onChange={(e)=>setRate(Number(e.target.value))} className="w-full p-2 border rounded" placeholder="Interest rate (%)" />
          <input value={tenure} onChange={(e)=>setTenure(e.target.value)} className="w-full p-2 border rounded" placeholder="Tenure" />
          {kind === "ncd" && <input value={issue_size} onChange={(e)=>setIssueSize(e.target.value)} className="w-full p-2 border rounded" placeholder="Issue size" />}
          <div>
            <label className="text-sm">Logo/Image (jpg/png/jpeg)</label>
            <input accept="image/png, image/jpeg, image/jpg" type="file" onChange={(e)=>setImage(e.target.files?.[0] ?? null)} />
          </div>
          <div>
            <label className="text-sm">Chart data (JSON)</label>
            <textarea value={chartDataText} onChange={(e)=>setChartDataText(e.target.value)} className="w-full p-2 border rounded h-40" />
            <div className="text-xs text-slate-500 mt-1">Example: {`{"series":[{"label":"1Y","value":6.5},{"label":"3Y","value":7.2}]}`}</div>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
            <button onClick={submit} className="px-3 py-2 rounded bg-amber-400 text-slate-900 font-semibold" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
