"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";

type LeadRow = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  requirement?: string;
  is_contacted?: boolean;
  created_at?: string;
};

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const checkloggedin = async()=>{
    const { data, error } = await supabase.auth.getUser();
    if(error) return false
    return true;
  }
  useEffect(() => {
    checkloggedin().then((loggedIn) => {
      if (!loggedIn) {
        // If not logged in, redirect to login page
        window.location.href = "/admin/login";
      }})
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching leads:', error);
      } else {
        setLeads(data || []);
      }
    } catch (error) {
      console.error('Error in fetchLeads:', error);
    } finally {
      setLoading(false);
    }
  }



  async function handleSignOut() {
      const { data, error:error2 } = await supabase.auth.getUser();
  console.log("Authenticated user:", data?.user, "Error:", error2);
   const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error.message);
      // Optionally, show an error message to the user
      return;
    }
    // Reload the page to let the middleware handle the redirect to login
   window.location.href = "/admin/login";
  }

  return (
    <div className="min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-amber-400">Leads Dashboard</h1>
              <p className="text-slate-300 mt-1">Manage your customer leads</p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-slate-300"
            >
              Sign Out
            </button>
          </div>

          {/* You can add your stats and table JSX here */}
          {loading ? (
            <p className="text-slate-300">Loading leads...</p>
          ) : (
            <p className="text-slate-300">{leads.length} leads found.</p>
          )}

        </div>
      </motion.div>
    </div>
  );
}