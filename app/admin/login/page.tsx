"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient(  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      console.log("Sign in data:", data);

      if (error) {
        setError(error.message);
        console.log("Sign in error:", error);
        setLoading(false);
        return;
      }

      if (data?.session) {
        // Reload the page to let the middleware handle the redirect
        window.location.href = "/admin";
        return;
      }
      
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-xl mx-auto mt-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-extrabold text-amber-400 mb-2">Admin Sign In</h2>
        <p className="text-slate-300 mb-6">
          Use your admin credentials to access the dashboard
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-slate-300 text-sm font-medium mb-1 block">Email</label>
            <input
              type="email"
              placeholder="admin@admin.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="text-slate-300 text-sm font-medium mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
          
          {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}