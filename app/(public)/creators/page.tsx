"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, MapPin, Star, Search, Filter } from "lucide-react";
import { creators, creatorFilters } from "../../../lib/data";

export default function CreatorsPage() {
  const [filter, setFilter] = useState("All");

  const filteredCreators = filter === "All" 
    ? creators 
    : creators.filter(c => c.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-wide">KultVibe</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link href="/#features" className="hover:text-white">Features</Link>
            <Link href="/#tournaments" className="hover:text-white">Tournaments</Link>
            <Link href="/#streams" className="hover:text-white">Streams</Link>
            <Link href="/creators" className="text-[#7C3AED]">Creators</Link>
            <Link href="/#waitlist" className="hover:text-white">Join Waitlist</Link>
          </nav>
          <Link
            href="/#waitlist"
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Page header */}
      <div className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">KultVibe Creators</h1>
          <p className="text-white/60 text-lg">Follow the voices of African gaming</p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-[#0A0A0F]/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-white/40 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter:</span>
            </div>
            {creatorFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                  filter === f
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#252535] text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Creator grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden group hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="relative aspect-square">
                <img
                  src={creator.image}
                  alt={creator.handle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252535] via-transparent to-transparent" />
                {creator.verified && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] text-[10px] font-medium">
                      <Star className="w-3 h-3 fill-[#F59E0B]" />
                      Verified
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      {creator.handle}
                    </h3>
                    <p className="text-sm text-white/60">{creator.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-white/5">{creator.category}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {creator.region}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#7C3AED]">
                    {creator.followers.toLocaleString()} followers
                  </span>
                  <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-[#3D3D55] bg-[#0A0A0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <span className="text-sm text-white/70">
                © 2025 KultVibe. Built for the continent.
              </span>
            </div>
            <div className="flex items-center gap-5 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
