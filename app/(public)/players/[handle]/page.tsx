"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Gamepad2, MapPin, Calendar, Trophy, TrendingUp, 
  Share2, UserPlus, DollarSign, Swords, Award, Shield, Zap, Star 
} from "lucide-react";

const player = {
  handle: "@GhostAlpha",
  name: "Gabriel O.",
  region: "Lagos",
  joinDate: "Jan 2024",
  avatar: "G",
  stats: {
    matches: 156,
    winRate: "68%",
    earnings: "₦245,000",
    wins: 42,
    winStreak: 7,
  },
  ranks: [
    { game: "COD Mobile", elo: 2450, rank: "Diamond", tier: "Diamond Fang" },
    { game: "PUBG Mobile", elo: 2180, rank: "Platinum", tier: "Obsidian" },
    { game: "EA FC", elo: 1920, rank: "Gold", tier: "Lion" },
  ],
  achievements: [
    { name: "First Blood", icon: "🩸", earned: true },
    { name: "Speed Demon", icon: "⚡", earned: true },
    { name: "Tournament King", icon: "👑", earned: true },
    { name: "100 Wins", icon: "💯", earned: true },
    { name: "African Champion", icon: "🏆", earned: false },
    { name: "Undefeated", icon: "🛡️", earned: false },
  ],
  matchHistory: [
    { date: "Today", tournament: "CODM Lagos Cup", opponent: "@ProGamer", result: "W", score: "3-1", earnings: "₦15,000", elo: "+25" },
    { date: "Today", tournament: "CODM Lagos Cup", opponent: "@NigerianKing", result: "W", score: "3-2", earnings: "₦15,000", elo: "+32" },
    { date: "Yesterday", tournament: "Ranked Match", opponent: "@AcePlayer", result: "L", score: "1-3", earnings: "₦0", elo: "-15" },
    { date: "Yesterday", tournament: "PUBG Naija", opponent: "@ZuluSquad", result: "W", score: "Winner", earnings: "₦20,000", elo: "+28" },
    { date: "2 days ago", tournament: "EA FC Street", opponent: "@Kelechi", result: "W", score: "2-0", earnings: "₦8,500", elo: "+18" },
  ],
  recentForm: ["W", "W", "L", "W", "W", "W", "W"],
  activeTournaments: [
    { name: "CODM Lagos Cup", status: "In Progress", round: "Quarterfinals" },
    { name: "PUBG Naija Royale", status: "Registered", round: "Group Stage" },
  ],
};

export default function PlayerProfilePage() {
  const [tab, setTab] = useState("Overview");

  const tabs = ["Overview", "Match History", "Achievements", "Teams"];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <span className="font-semibold">KultVibe</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link href="/">Home</Link>
            <Link href="/tournaments">Tournaments</Link>
            <Link href="/creators">Creators</Link>
          </nav>
        </div>
      </header>

      {/* Profile Header */}
      <div className="border-b border-white/10 bg-[#252535]/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-4xl font-bold">
              {player.avatar}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold flex items-center gap-3">
                {player.handle}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </h1>
              <p className="text-white/60">{player.name}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-white/60">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {player.region}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {player.joinDate}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-sm font-semibold">
                <UserPlus className="w-4 h-4" />
                Follow
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#252535] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">{player.stats.matches}</div>
              <div className="text-xs text-white/60">Matches Played</div>
            </div>
            <div className="bg-[#252535] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{player.stats.winRate}</div>
              <div className="text-xs text-white/60">Win Rate</div>
            </div>
            <div className="bg-[#252535] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#F59E0B]">{player.stats.earnings}</div>
              <div className="text-xs text-white/60">Total Earnings</div>
            </div>
            <div className="bg-[#252535] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                {player.stats.wins}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-xs text-white/60">Win Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10 sticky top-16 bg-[#0A0A0F]/80 backdrop-blur z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  tab === t
                    ? "border-[#7C3AED] text-[#7C3AED]"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {tab === "Overview" && (
          <div className="space-y-8">
            {/* Ranks */}
            <div>
              <h3 className="font-bold mb-4">Rank by Game</h3>
              <div className="space-y-3">
                {player.ranks.map((r, i) => (
                  <div key={i} className="bg-[#252535] rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{r.game}</div>
                      <div className="text-sm text-white/60">{r.tier}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">{r.elo}</div>
                      <div className="text-xs text-white/60">ELO</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      r.tier.includes("Diamond") ? "bg-cyan-500/20 text-cyan-400" :
                      r.tier.includes("Obsidian") ? "bg-purple-500/20 text-purple-400" :
                      r.tier.includes("Lion") ? "bg-red-500/20 text-red-400" :
                      "bg-gray-500/20 text-gray-400"
                    }`}>
                      {r.rank}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Form */}
            <div>
              <h3 className="font-bold mb-4">Recent Form</h3>
              <div className="flex gap-2">
                {player.recentForm.map((f, i) => (
                  <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                    f === "W" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Active Tournaments */}
            <div>
              <h3 className="font-bold mb-4">Active Tournaments</h3>
              <div className="space-y-3">
                {player.activeTournaments.map((t, i) => (
                  <div key={i} className="bg-[#252535] rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-white/60">{t.round}</div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      t.status === "In Progress" ? "bg-green-500/20 text-green-400" : "bg-[#7C3AED]/20 text-[#7C3AED]"
                    }`}>
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "Match History" && (
          <div className="space-y-3">
            {player.matchHistory.map((m, i) => (
              <div key={i} className="bg-[#252535] rounded-xl p-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      m.result === "W" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}>
                      {m.result}
                    </span>
                    <div>
                      <div className="font-medium">vs {m.opponent}</div>
                      <div className="text-sm text-white/60">{m.tournament}</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/60">{m.date}</div>
                  <div className="flex items-center gap-2 justify-end">
                    <span className={m.result === "W" ? "text-[#F59E0B]" : "text-white/40"}>
                      {m.earnings}
                    </span>
                    <span className={m.elo.startsWith("+") ? "text-green-400" : "text-red-400"}>
                      {m.elo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Achievements" && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-bold">Achievements</h3>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {player.achievements.map((a, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 text-center border ${
                    a.earned
                      ? "bg-[#F59E0B]/10 border-[#F59E0B]/30"
                      : "bg-[#252535] border-white/10 opacity-40"
                  }`}
                >
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <div className={`text-xs font-medium ${a.earned ? "text-[#F59E0B]" : "text-white/40"}`}>
                    {a.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "Teams" && (
          <div className="text-center py-12 text-white/60">
            No teams yet
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-[#3D3D55]">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/60">
          © 2025 KultVibe.
        </div>
      </footer>
    </div>
  );
}
