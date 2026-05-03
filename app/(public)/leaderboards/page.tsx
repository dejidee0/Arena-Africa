"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, BarChart2, Crown, MapPin, TrendingUp, TrendingDown } from "lucide-react";

const top3 = [
  { rank: 2, handle: "@ZuluSquad", region: "Abuja", earnings: "₦198,500", initials: "ZS", color: "from-gray-300 to-gray-400", height: "h-20" },
  { rank: 1, handle: "@GhostAlpha", region: "Lagos", earnings: "₦245,000", initials: "GA", color: "from-yellow-400 to-yellow-600", height: "h-32", isFirst: true },
  { rank: 3, handle: "@NaijaPro", region: "PH", earnings: "₦156,000", initials: "NP", color: "from-orange-600 to-orange-700", height: "h-16" },
];

const players = [
  { rank: 1, handle: "@GhostAlpha", region: "Lagos", elo: 2450, earnings: "₦245,000", winRate: "68%", change: "+125", game: "COD Mobile" },
  { rank: 2, handle: "@ZuluSquad", region: "Abuja", elo: 2380, earnings: "₦198,500", winRate: "62%", change: "+80", game: "PUBG Mobile" },
  { rank: 3, handle: "@NaijaPro", region: "PH", elo: 2290, earnings: "₦156,000", winRate: "58%", change: "+45", game: "EA FC" },
  { rank: 4, handle: "@KillerX", region: "Kano", elo: 2150, earnings: "₦142,000", winRate: "55%", change: "+20", game: "COD Mobile" },
  { rank: 5, handle: "@Ama", region: "Accra", elo: 2080, earnings: "₦128,500", winRate: "52%", change: "-15", game: "Free Fire" },
  { rank: 6, handle: "@Shadow", region: "Lagos", elo: 2020, earnings: "₦115,000", winRate: "60%", change: "+30", game: "COD Mobile" },
  { rank: 7, handle: "@TemiStreams", region: "Abuja", elo: 1950, earnings: "₦98,000", winRate: "48%", change: "+55", game: "EA FC" },
  { rank: 8, handle: "@LagosLens", region: "Lagos", elo: 1890, earnings: "₦85,500", winRate: "51%", change: "+10", game: "PUBG Mobile" },
  { rank: 9, handle: "@AfroBoss", region: "Nairobi", elo: 1820, earnings: "₦72,000", winRate: "45%", change: "-25", game: "Free Fire" },
  { rank: 10, handle: "@NeonGirlNG", region: "Abuja", elo: 1750, earnings: "₦65,000", winRate: "49%", change: "+40", game: "EA FC" },
  { rank: 11, handle: "@Kelechi", region: "PH", elo: 1680, earnings: "₦58,500", winRate: "47%", change: "+15", game: "COD Mobile" },
  { rank: 12, handle: "@ProGamer", region: "Cape Town", elo: 1620, earnings: "₦52,000", winRate: "44%", change: "-10", game: "PUBG Mobile" },
  { rank: 13, handle: "@NaijaKing", region: "Lagos", elo: 1550, earnings: "₦45,000", winRate: "42%", change: "+5", game: "EA FC" },
  { rank: 14, handle: "@AcePlayer", region: "Kano", elo: 1490, earnings: "₦38,500", winRate: "46%", change: "+20", game: "Free Fire" },
  { rank: 15, handle: "@NigerianKing", region: "Abuja", elo: 1420, earnings: "₦32,000", winRate: "40%", change: "-30", game: "COD Mobile" },
];

const regions = ["Global", "West Africa", "East Africa", "Southern Africa", "Diaspora"];
const games = ["All Games", "COD Mobile", "PUBG Mobile", "EA FC", "Free Fire"];
const times = ["This Week", "This Month", "All Time"];

export default function LeaderboardsPage() {
  const [regionFilter, setRegionFilter] = useState("Global");
  const [gameFilter, setGameFilter] = useState("All Games");
  const [timeFilter, setTimeFilter] = useState("This Week");

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
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/tournaments" className="hover:text-white">Tournaments</Link>
            <Link href="/leaderboards" className="text-[#7C3AED]">Leaderboards</Link>
            <Link href="/creators" className="hover:text-white">Creators</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
            <BarChart2 className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Leaderboards</h1>
            <p className="text-white/60">Top players across Africa</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex gap-2 overflow-x-auto">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  regionFilter === r
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#252535] text-white/70 border border-white/10"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <select
            value={gameFilter}
            onChange={(e) => setGameFilter(e.target.value)}
            className="bg-[#252535] border border-white/10 rounded-lg px-3 py-2 text-sm text-white/70 outline-none focus:border-[#7C3AED]"
          >
            {games.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <div className="flex gap-2">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setTimeFilter(t)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  timeFilter === t
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#252535] text-white/70 border border-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-12">
          {top3.map((p) => (
            <div
              key={p.rank}
              className={`flex flex-col items-center ${p.rank === 2 ? 'order-1' : p.rank === 1 ? 'order-2' : 'order-3'}`}
            >
              <div className="text-lg font-bold mb-2">{p.rank === 1 ? (
                <Crown className="w-6 h-6 text-yellow-400" />
              ) : (
                <span className="text-white/60">#{p.rank}</span>
              )}</div>
              <div className={`w-20 ${p.height} rounded-t-2xl bg-gradient-to-t ${p.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">{p.initials}</span>
              </div>
              <div className="bg-[#252535] px-4 py-3 rounded-b-2xl text-center w-24">
                <div className="font-bold text-white">{p.handle}</div>
                <div className="text-xs text-white/60 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {p.region}
                </div>
                <div className="text-[#F59E0B] font-bold text-sm mt-1">{p.earnings}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Table */}
        <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-white/60 border-b border-white/10">
                <th className="text-left p-4">Rank</th>
                <th className="text-left p-4">Player</th>
                <th className="text-left p-4">Region</th>
                <th className="text-right p-4">ELO</th>
                <th className="text-right p-4">Earnings</th>
                <th className="text-right p-4">Win Rate</th>
                <th className="text-right p-4">7d</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.rank} className={`border-b border-white/5 ${p.rank <= 3 ? 'bg-white/[0.02]' : ''}`}>
                  <td className="p-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      p.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                      p.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                      p.rank === 3 ? 'bg-orange-600/20 text-orange-500' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {p.rank}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{p.handle}</td>
                  <td className="p-4 text-white/60">{p.region}</td>
                  <td className="p-4 text-right font-bold">{p.elo}</td>
                  <td className="p-4 text-right text-[#F59E0B] font-bold">{p.earnings}</td>
                  <td className="p-4 text-right text-white/60">{p.winRate}</td>
                  <td className="p-4 text-right">
                    <span className={`flex items-center justify-end gap-1 ${p.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {p.change.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {p.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Ranking Footer */}
        <div className="mt-6 bg-[#252535] rounded-2xl border border-[#7C3AED]/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-lg">Your Ranking</div>
              <div className="text-white/60">#47 globally | #12 in Lagos | Top 15%</div>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold">
              View Profile
            </button>
          </div>
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
              <span className="text-sm text-white/70">© 2025 KultVibe.</span>
            </div>
            <div className="flex items-center gap-5 text-sm text-white/60">
              <a href="#" className="hover:text-white">Discord</a>
              <a href="#" className="hover:text-white">Telegram</a>
              <a href="#" className="hover:text-white">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
