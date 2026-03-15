"use client";

import React from "react";
import Link from "next/link";
import { 
  Star, Users, DollarSign, TrendingUp, Briefcase, FileText, 
  Download, Clock, Eye, Heart, MessageCircle, ArrowRight, 
  CheckCircle, Plus
} from "lucide-react";
import { activeBrandDeals } from "../../../../lib/data";

const stats = [
  { label: "Total Reach", value: "89.5K", sub: "followers + avg viewers", icon: Users, color: "text-[#7C3AED]" },
  { label: "Brand Deals Active", value: "3", sub: "This month", icon: Briefcase, color: "text-[#EC4899]" },
  { label: "Monthly Earnings", value: "₦430,000", sub: "From deals & tips", icon: DollarSign, color: "text-[#F59E0B]" },
  { label: "Content Score", value: "87", sub: "Top 10% creator", icon: TrendingUp, color: "text-green-400" },
];

const collabRequests = [
  { id: "1", from: "@LagosArena", tournament: "CODM Lagos Cup", status: "pending" },
  { id: "2", from: "@PUBG_Naija", tournament: "PUBG Royale", status: "pending" },
];

const contentCards = [
  { id: "1", title: "Top 10 COD Mobile Tips", views: "12.5K", engagement: "8.2%", thumbnail: "/gamer-streaming-live.jpg" },
  { id: "2", title: "Stream Highlights EP3", views: "8.2K", engagement: "6.1%", thumbnail: "/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg" },
  { id: "3", title: "My Gaming Setup 2025", views: "15.1K", engagement: "9.4%", thumbnail: "/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg" },
  { id: "4", title: "Ranked Push to Diamond", views: "22.8K", engagement: "11.2%", thumbnail: "/tim-tim-bwOb9qluXgA-unsplash.jpg" },
];

export default function CreatorHubPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            Creator Hub
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-medium">
              <Star className="w-3 h-3 fill-[#F59E0B]" />
              Verified Creator
            </span>
          </h2>
          <p className="text-white/60">Manage your brand deals and content</p>
        </div>
        <Link
          href="/dashboard/brand-deals"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Briefcase className="w-4 h-4" />
          Browse Deals
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#252535] rounded-xl border border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/60">{stat.label}</span>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="text-xs text-white/40">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Brand Deals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Active Brand Deals</h3>
            <div className="space-y-3">
              {activeBrandDeals.map((deal) => (
                <div key={deal.id} className="bg-[#252535] rounded-xl border border-white/10 p-4 flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={deal.image} alt={deal.brand} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{deal.brand}</h4>
                        <p className="text-sm text-white/60">{deal.title}</p>
                      </div>
                      <span className="text-[#F59E0B] font-bold">{deal.amount}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-white/40 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Due in {deal.dueIn} days
                      </span>
                      <button className="text-xs text-[#7C3AED] hover:underline">View Brief</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collab Requests */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collab Requests</h3>
            <div className="space-y-3">
              {collabRequests.map((req) => (
                <div key={req.id} className="bg-[#252535] rounded-xl border border-white/10 p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{req.from}</div>
                    <div className="text-sm text-white/60">{req.tournament}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-lg border border-white/10 text-sm hover:bg-white/5">Decline</button>
                    <button className="px-3 py-1.5 rounded-lg bg-[#7C3AED] text-white text-sm font-medium hover:opacity-90">Accept</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Content */}
          <div>
            <h3 className="text-lg font-semibold mb-4">My Content</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contentCards.map((content) => (
                <div key={content.id} className="bg-[#252535] rounded-xl border border-white/10 overflow-hidden group hover:scale-[1.02] transition-transform duration-200">
                  <div className="relative aspect-video">
                    <img src={content.thumbnail} alt={content.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-2">{content.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {content.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {content.engagement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Media Kit */}
          <div className="bg-[#252535] rounded-xl border border-white/10 p-4">
            <h4 className="font-semibold mb-4">Media Kit</h4>
            <div className="aspect-[3/4] bg-[#1a1a24] rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center p-4">
                <FileText className="w-8 h-8 mx-auto mb-2 text-white/40" />
                <p className="text-xs text-white/60">Your Media Kit</p>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          {/* Creator Score */}
          <div className="bg-[#252535] rounded-xl border border-white/10 p-4">
            <h4 className="font-semibold mb-4">Creator Score</h4>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#252535" strokeWidth="10" />
                <circle 
                  cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray="251.2" strokeDashoffset="31.4"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">87</span>
              </div>
            </div>
            <p className="text-sm text-center text-white/60 mb-2">Excellent</p>
            <p className="text-xs text-center text-white/40">Top 10% of creators</p>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/20 rounded-xl border border-[#7C3AED]/30 p-4">
            <h4 className="font-semibold mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full py-2 rounded-lg bg-[#252535] text-left px-3 text-sm hover:bg-white/5 flex items-center gap-2">
                <Plus className="w-4 h-4" /> Upload New Content
              </button>
              <button className="w-full py-2 rounded-lg bg-[#252535] text-left px-3 text-sm hover:bg-white/5 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> New Brand Pitch
              </button>
              <button className="w-full py-2 rounded-lg bg-[#252535] text-left px-3 text-sm hover:bg-white/5 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Respond to Fans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Play({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
