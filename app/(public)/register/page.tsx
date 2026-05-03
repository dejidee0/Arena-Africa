"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, Mail, Lock, User, Hash, MapPin, Gamepad2 as GameIcon, Chrome, Gamepad2 as Discord, Apple, Check } from "lucide-react";

const regions = [
  "Lagos", "Abuja", "Kano", "Port Harcourt", "Ibadan",
  "Accra", "Nairobi", "Cape Town", "Other"
];

const games = ["COD Mobile", "PUBG Mobile", "EA FC (FIFA)", "Free Fire", "Valorant"];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gamerTag: "",
    password: "",
    confirmPassword: "",
    region: "",
    game: "",
    referralCode: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreedToTerms) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] shadow-lg shadow-purple-500/30 mb-3">
              <Gamepad2 className="h-7 w-7 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">KultVibe</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl font-bold text-center mb-6">Join The Vibe</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs text-white/60 mb-1 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                  placeholder="Ada Love"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60 mb-1 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60 mb-1 block">Gamer Tag</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">@</span>
                <input
                  type="text"
                  value={formData.gamerTag}
                  onChange={(e) => setFormData({ ...formData, gamerTag: e.target.value })}
                  required
                  className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-8 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                  placeholder="GhostAlpha"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/60 mb-1 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/60 mb-1 block">Confirm</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/60 mb-1 block">Region</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    required
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] appearance-none"
                  >
                    <option value="" className="bg-[#0A0A0F]">Select...</option>
                    {regions.map((r) => (
                      <option key={r} value={r} className="bg-[#0A0A0F]">{r}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-white/60 mb-1 block">Primary Game</label>
                <div className="relative">
                  <GameIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <select
                    value={formData.game}
                    onChange={(e) => setFormData({ ...formData, game: e.target.value })}
                    required
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] appearance-none"
                  >
                    <option value="" className="bg-[#0A0A0F]">Select...</option>
                    {games.map((g) => (
                      <option key={g} value={g} className="bg-[#0A0A0F]">{g}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60 mb-1 block">Referral Code (optional)</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={formData.referralCode}
                  onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                  className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#7C3AED] placeholder:text-white/30"
                  placeholder="ARENA2025"
                />
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <button
                type="button"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  agreedToTerms 
                    ? "bg-[#7C3AED] border-[#7C3AED]" 
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                {agreedToTerms && <Check className="w-3 h-3 text-white" />}
              </button>
              <span className="text-xs text-white/60">
                I agree to the{" "}
                <Link href="#" className="text-[#7C3AED] hover:underline">Terms</Link>
                {" "}and{" "}
                <Link href="#" className="text-[#7C3AED] hover:underline">Privacy Policy</Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading || !agreedToTerms}
              className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
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

          {/* Login link */}
          <p className="text-center text-sm text-white/60 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#7C3AED] hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
