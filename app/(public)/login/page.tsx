"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, Mail, Lock, Chrome, Gamepad2 as Discord, Apple } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] shadow-lg shadow-purple-500/30 mb-3">
              <Gamepad2 className="h-7 w-7 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">KultVibe</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-white/60 mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Link href="#" className="text-xs text-[#7C3AED] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/40">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* OAuth buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
              <Chrome className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
              <Discord className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
              <Apple className="w-4 h-4" />
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-sm text-white/60 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#7C3AED] hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
