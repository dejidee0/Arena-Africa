"use client";

import React, { useState } from "react";
import { Briefcase, Search, Filter, ArrowRight } from "lucide-react";
import { brandDeals } from "../../../../lib/data";

const filters = ["Available", "Active", "Completed", "Pitched"];

export default function BrandDealsPage() {
  const [activeFilter, setActiveFilter] = useState("Available");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Brand Deal Marketplace</h2>
        <p className="text-white/60">Find and pitch to brands looking for creators</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              activeFilter === f
                ? "bg-[#7C3AED] text-white"
                : "bg-[#252535] text-white/70 hover:text-white border border-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Deals grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brandDeals.map((deal) => (
          <div
            key={deal.id}
            className="bg-[#252535] rounded-xl border border-white/10 p-5 hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center font-bold text-lg">
                {deal.brandInitial}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{deal.brand}</h3>
                <p className="text-sm text-white/60">{deal.title}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-2xl font-bold text-[#F59E0B] mb-1">{deal.amount}</div>
              <p className="text-xs text-white/60">{deal.requirements}</p>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Pitch Yourself
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Info section */}
      <div className="bg-[#252535] rounded-xl border border-white/10 p-6 mt-8">
        <h3 className="font-semibold mb-3">How Brand Deals Work</h3>
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-white/70">
          <div>
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mb-2 text-[#7C3AED] font-bold">1</div>
            <h4 className="font-medium text-white mb-1">Browse Deals</h4>
            <p>Explore brands looking for creators in your niche and region.</p>
          </div>
          <div>
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mb-2 text-[#7C3AED] font-bold">2</div>
            <h4 className="font-medium text-white mb-1">Pitch Yourself</h4>
            <p>Submit your proposal with your media kit and previous work.</p>
          </div>
          <div>
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mb-2 text-[#7C3AED] font-bold">3</div>
            <h4 className="font-medium text-white mb-1">Get Paid</h4>
            <p>Once approved, complete the deliverables and receive payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
