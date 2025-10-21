// components/admin/LeadsTable.tsx
"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  requirement?: string;
  notes?: string;
  is_contacted: boolean;
  created_at: string;
};

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
    // optional realtime subscription:
    const channel = supabase.channel("public:leads")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => fetchLeads())
      .subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  async function fetchLeads() {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);
    if (error) console.error(error);
    setLeads((data as any) || []);
    setLoading(false);
  }

  async function toggleCalled(lead: Lead) {
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: lead.id, payload: { is_contacted: !lead.is_contacted } }),
    });
    if (res.ok) fetchLeads();
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead?")) return;
    const res = await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) fetchLeads();
  }

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
      <div className="mb-3 font-semibold text-amber-400">Leads</div>

      {loading ? <div>Loading...</div> : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-slate-300">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Contact</th>
                <th className="p-2">Requirement / Notes</th>
                <th className="p-2">Called</th>
                <th className="p-2">Created</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(l => (
                <tr key={l.id} className="border-t border-white/6">
                  <td className="p-2 font-semibold">{l.name}</td>
                  <td className="p-2 text-slate-300">{l.email}<br/>{l.phone}</td>
                  <td className="p-2 text-slate-200 max-w-[300px]">{l.requirement}<div className="text-xs text-slate-400 mt-1">{l.notes}</div></td>
                  <td className="p-2">
                    <input type="checkbox" checked={l.is_contacted} onChange={() => toggleCalled(l)} />
                  </td>
                  <td className="p-2 text-slate-300">{new Date(l.created_at).toLocaleString()}</td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <button onClick={() => setEditing(l)} className="px-2 py-1 rounded border text-sm">Edit</button>
                      <button onClick={() => deleteLead(l.id)} className="px-2 py-1 rounded bg-rose-600 text-white text-sm">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && <EditLeadModal lead={editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); fetchLeads(); }} />}
    </motion.div>
  );
}

function EditLeadModal({ lead, onClose, onSaved }: { lead: any; onClose: ()=>void; onSaved: ()=>void }) {
  const [name, setName] = useState(lead.name);
  const [phone, setPhone] = useState(lead.phone);
  const [email, setEmail] = useState(lead.email || "");
  const [notes, setNotes] = useState(lead.notes || "");
  const [is_contacted, setIsContacted] = useState(lead.is_contacted || false);

  async function save() {
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: lead.id, payload: { name, phone, email, notes, is_contacted } }),
    });
    if (res.ok) onSaved();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white/95 text-slate-900 rounded-2xl p-6 w-full max-w-lg" onClick={(e)=>e.stopPropagation()}>
        <h4 className="font-bold mb-2">Edit Lead</h4>
        <div className="space-y-3">
          <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 border rounded" />
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-2 border rounded" />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border rounded" />
          <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} className="w-full p-2 border rounded" />
          <label className="flex items-center gap-2"><input type="checkbox" checked={is_contacted} onChange={(e)=>setIsContacted(e.target.checked)} /> Mark contacted</label>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
            <button onClick={save} className="px-3 py-2 rounded bg-amber-400 text-slate-900 font-semibold">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
