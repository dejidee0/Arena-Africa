"use client";

import React, { useState } from "react";
import { Gamepad2, Gift, Copy, Twitter, MessageCircle, Link, Users, TrendingUp } from "lucide-react";

const stats = [
  { label: "Friends Referred", value: "12" },
  { label: "Coins Earned", value: "2,400 AC" },
  { label: "Pending", value: "3" },
  { label: "Conversion", value: "75%" },
];

const tiers = [
  { tier: "Tier 1", range: "1-5 friends", reward: "200 AC", highlight: false },
  { tier: "Tier 2", range: "6-15 friends", reward: "300 AC", highlight: true },
  { tier: "Tier 3", range: "16-30 friends", reward: "400 AC", highlight: false },
  { tier: "Tier 4", range: "31+ friends", reward: "500 AC", highlight: false },
];

const referrals = [
  { date: "Feb 14, 2024", handle: "@ZuluSquad", status: "Rewarded", coins: "300 AC" },
  { date: "Feb 13, 2024", handle: "@Shadow", status: "Joined", coins: "-" },
  { date: "Feb 12, 2024", handle: "@KillerX", status: "Rewarded", coins: "300 AC" },
  { date: "Feb 11, 2024", handle: "@Ama", status: "Pending", coins: "-" },
  { date: "Feb 10, 2024", handle: "@NeonGirlNG", status: "Rewarded", coins: "300 AC" },
  { date: "Feb 9, 2024", handle: "@TemiStreams", status: "Joined", coins: "-" },
  { date: "Feb 8, 2024", handle: "@LagosLens", status: "Rewarded", coins: "200 AC" },
  { date: "Feb 7, 2024", handle: "@AfroBoss", status: "Joined", coins: "-" },
  { date: "Feb 6, 2024", handle: "@ProGamer", status: "Rewarded", coins: "200 AC" },
  { date: "Feb 5, 2024", handle: "@NaijaKing", status: "Rewarded", coins: "200 AC" },
  { date: "Feb 4, 2024", handle: "@AcePlayer", status: "Rewarded", coins: "200 AC" },
  { date: "Feb 3, 2024", handle: "@NigerianKing", status: "Rewarded", coins: "200 AC" },
];

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "arenaAfrica.gg/join?ref=GhostAlpha";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
          <Gift className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Refer & Earn</h2>
          <p className="text-white/60">Invite friends and earn Arena Coins</p>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#7C3AED]/20 to-[#EC4899]/20 rounded-2xl border border-[#7C3AED]/30 p-8 text-center">
        <p className="text-white/60 mb-2">Earn 200 Arena Coins for every friend you refer</p>
        <div className="text-4xl font-black text-[#F59E0B]">200 AC</div>
        <p className="text-sm text-white/40 mt-2">per successful referral</p>
      </div>

      {/* Referral Link */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Your Referral Link</h3>
        <div className="flex items-center gap-2">
          <code className="flex-1 bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 text-sm font-mono">
            {referralLink}
          </code>
          <button 
            onClick={copyLink}
            className="p-3 rounded-xl bg-[#7C3AED] text-white hover:bg-[#7C3AED]/80"
          >
            {copied ? <Gift className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2]/20 text-[#1DA1F2]">
            <Twitter className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0088cc]/20 text-[#0088cc]">
            <Link className="w-4 h-4" />
            Telegram
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
            <div className="text-xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-white/60">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tiers */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Referral Tiers</h3>
        <div className="grid grid-cols-4 gap-4">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-xl text-center ${t.highlight ? "bg-[#7C3AED]/20 border border-[#7C3AED]" : "bg-[#1a1a24]"}`}
            >
              <div className="font-bold text-sm">{t.tier}</div>
              <div className="text-xs text-white/60">{t.range}</div>
              <div className="text-[#F59E0B] font-bold mt-2">{t.reward}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 px-4 py-3 text-xs font-semibold text-white/60 uppercase border-b border-white/10">
          <div>Date</div>
          <div>Handle</div>
          <div>Status</div>
          <div className="text-right">Coins Earned</div>
        </div>
        <div className="divide-y divide-white/5">
          {referrals.map((r, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 px-4 py-3 items-center">
              <div className="text-sm text-white/60">{r.date}</div>
              <div className="font-medium">{r.handle}</div>
              <div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  r.status === "Rewarded" ? "bg-green-500/20 text-green-400" :
                  r.status === "Joined" ? "bg-blue-500/20 text-blue-400" :
                  "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {r.status}
                </span>
              </div>
              <div className="text-right text-[#F59E0B] font-medium">{r.coins}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">How It Works</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mx-auto mb-3">
              <Link className="w-6 h-6 text-[#7C3AED]" />
            </div>
            <div className="font-bold">1. Share Link</div>
            <div className="text-sm text-white/60">Send your unique referral link to friends</div>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-[#7C3AED]" />
            </div>
            <div className="font-bold">2. Friend Joins</div>
            <div className="text-sm text-white/60">They join and play their first tournament</div>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mx-auto mb-3">
              <Gift className="w-6 h-6 text-[#7C3AED]" />
            </div>
            <div className="font-bold">3. Both Earn</div>
            <div className="text-sm text-white/60">You both receive Arena Coins instantly</div>
          </div>
        </div>
      </div>
    </div>
  );
}
