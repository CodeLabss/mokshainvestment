// components/admin/NFOManager.tsx
"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

type NFO = { id: string; title: string; description?: string; start_date?: string; end_date?: string; image_url?: string; created_at?: string };

export default function NFOManager() {
  const [list, setList] = useState<NFO[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<NFO | null>(null);

  useEffect(() => { fetchList(); }, []);

  async function fetchList() {
    setLoading(true);
    const { data, error } = await supabase.from("upcoming_nfo").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    setList((data as any) || []);
    setLoading(false);
  }

  async function deleteNFO(id: string) {
    if (!confirm("Delete this NFO?")) return;
    const res = await fetch("/api/admin/content", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ table: "upcoming_nfo", id }) });
    if (res.ok) fetchList();
  }

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3"><div className="font-semibold text-amber-400">Upcoming NFO</div><button onClick={()=>setEditing({id:"", title:"", description:"", start_date:"", end_date:"", image_url:""})} className="px-3 py-1 rounded bg-amber-400 text-slate-900">Add NFO</button></div>
      {loading ? <div>Loading...</div> :
        <div className="space-y-3">
          {list.map(n => (
            <div key={n.id} className="p-3 rounded bg-white/5 border border-white/6 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{n.title}</div>
                <div className="text-sm text-slate-300">{n.start_date} — {n.end_date}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={()=>setEditing(n)} className="px-2 py-1 rounded border text-sm">Edit</button>
                <button onClick={()=>deleteNFO(n.id)} className="px-2 py-1 rounded bg-rose-600 text-white text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      }
      {editing && <NFOEditor initial={editing} onClose={()=>{ setEditing(null); fetchList(); }} />}
    </motion.div>
  );
}

function NFOEditor({ initial, onClose }: { initial: any; onClose: ()=>void }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [start_date, setStartDate] = useState(initial.start_date || "");
  const [end_date, setEndDate] = useState(initial.end_date || "");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  async function submit() {
    setUploading(true);
    let image_url = initial.image_url || null;
    if (image) {
      // upload to server API -> Supabase storage
      const fd = new FormData();
      fd.append("file", image);
      fd.append("bucket", "uploads");
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      if (res.ok) {
        const j = await res.json();
        image_url = j.publicURL ?? j.path ?? null;
      } else {
        alert("Upload failed");
        setUploading(false);
        return;
      }
    }

    // if initial.id empty => create
    if (!initial.id) {
      const r = await fetch("/api/admin/content", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify({ table: "upcoming_nfo", payload: { title, description, start_date, end_date, image_url } }) });
      if (r.ok) onClose();
    } else {
      const r = await fetch("/api/admin/content", { method: "PATCH", headers: { "Content-Type":"application/json" }, body: JSON.stringify({ table: "upcoming_nfo", id: initial.id, payload: { title, description, start_date, end_date, image_url } }) });
      if (r.ok) onClose();
    }
    setUploading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white/95 p-6 w-full max-w-2xl rounded-2xl" onClick={(e)=>e.stopPropagation()}>
        <h4 className="font-bold mb-2">NFO Editor</h4>
        <div className="space-y-2">
          <input value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full p-2 border rounded" placeholder="Title" />
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full p-2 border rounded" placeholder="Description" />
          <div className="grid grid-cols-2 gap-2">
            <input type="date" value={start_date} onChange={(e)=>setStartDate(e.target.value)} className="p-2 border rounded" />
            <input type="date" value={end_date} onChange={(e)=>setEndDate(e.target.value)} className="p-2 border rounded" />
          </div>
          <div>
            <label className="text-sm">Banner (jpg/png/jpeg)</label>
            <input accept="image/png, image/jpeg, image/jpg" type="file" onChange={(e)=>setImage(e.target.files?.[0] ?? null)} />
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
            <button onClick={submit} className="px-3 py-2 rounded bg-amber-400 text-slate-900 font-semibold" disabled={uploading}>{uploading ? "Saving..." : "Save"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
