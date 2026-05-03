"use client";

import React, { useState } from "react";
import { Gamepad2, Coins, ShoppingCart, Gift, Zap, Video, Star, Calendar } from "lucide-react";

const packages = [
  { id: 1, name: "Starter", vc: 500, price: 2500, border: "border-white/20", badge: null },
  { id: 2, name: "Popular", vc: 1500, price: 6000, border: "border-[#7C3AED]", badge: "Most Popular" },
  { id: 3, name: "Pro", vc: 3500, price: 12000, border: "border-cyan-400", badge: "Best Value" },
  { id: 4, name: "Elite", vc: 10000, price: 25000, border: "border-pink-500", badge: null, gradient: true },
];

const transactions = [
  { date: "Today", action: "Purchase", change: "+1,500 VC", desc: "Popular Package", type: "purchase" },
  { date: "Yesterday", action: "Tip", change: "-100 VC", desc: "Tip to @GhostAlpha", type: "spent" },
  { date: "Feb 12", action: "Tournament", change: "-500 VC", desc: "CODM Lagos Entry", type: "spent" },
  { date: "Feb 10", action: "Purchase", change: "+500 VC", desc: "Starter Package", type: "purchase" },
];

const earnWays = [
  { title: "Win a Tournament", reward: "500 VC", icon: "trophy" },
  { title: "Refer a Friend", reward: "200 VC", icon: "user" },
  { title: "Daily Login", reward: "25 VC", icon: "calendar" },
];

export default function CoinsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
          <Coins className="w-10 h-10 text-white" />
        </div>
        <div>
  <h2 className="text-2xl font-bold">Vibe Credits</h2>
          <p className="text-white/60">Send gifts to creators, tip streamers & more</p>
        </div>
      </div>

      {/* Balance Hero */}
      <div className="bg-[#252535] rounded-2xl border border-yellow-500/30 p-8 text-center">
        <p className="text-white/60 text-sm mb-2">Your Vibe Credits Balance</p>
        <div className="text-5xl font-black text-[#F59E0B]">4,250 VC</div>
      </div>

      {/* Info Card */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-2">What are Vibe Credits?</h3>
        <p className="text-sm text-white/60">
          Tip your favorite streamers, highlight your best clips, boost tournaments to get more visibility, or use as entry fees for premium competitions.
        </p>
      </div>

      {/* Purchase Packages */}
      <div>
        <h3 className="font-bold mb-4">Purchase Vibe Credits</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {packages.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl p-6 border-2 bg-[#252535] ${p.border} hover:scale-[1.02] transition-transform`}
            >
              {p.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${
                  p.gradient 
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white"
                    : "bg-[#7C3AED] text-white"
                }`}>
                  {p.badge}
                </div>
              )}
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-4 ${
                p.gradient ? "bg-gradient-to-br from-[#7C3AED] to-[#EC4899]" : "bg-yellow-500/20"
              }`}>
                <Coins className={`w-6 h-6 ${p.gradient ? "text-white" : "text-yellow-400"}`} />
              </div>
              <div className="text-center">
              <div className="text-2xl font-bold text-[#F59E0B]">{p.vc} VC</div>
                <div className="text-white/60 mb-4">₦{p.price.toLocaleString()}</div>
                <button className={`w-full py-2.5 rounded-xl font-semibold ${
                  p.gradient
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white"
                    : "bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30"
                }`}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Transaction History</h3>
        <div className="space-y-3">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
              <div>
                <div className="font-medium">{t.action}</div>
                <div className="text-sm text-white/60">{t.desc}</div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${t.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {t.change}
                </div>
                <div className="text-xs text-white/40">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Earn Free Coins */}
      <div>
        <h3 className="font-bold mb-4">Earn Free Coins</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {earnWays.map((e, i) => (
            <div key={i} className="bg-[#252535] rounded-xl border border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-sm text-green-400">{e.reward}</div>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/30">
                Claim
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
