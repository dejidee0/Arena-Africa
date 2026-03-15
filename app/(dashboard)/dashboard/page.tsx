"use client";

import React from "react";
import Link from "next/link";
import {
  Trophy,
  Wallet,
  TrendingUp,
  Users,
  PlayCircle,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronRight,
} from "lucide-react";

const kpiCards = [
  { label: "Active Tournaments", value: "3", icon: Trophy, color: "text-[#7C3AED]" },
  { label: "Total Earnings", value: "₦245,000", icon: Wallet, color: "text-[#F59E0B]" },
  { label: "Current ELO", value: "2,450", icon: TrendingUp, color: "text-green-400" },
  { label: "Followers", value: "1,280", icon: Users, color: "text-[#EC4899]" },
];

const liveStreams = [
  {
    id: "1",
    title: "CODM Lagos Qualifiers",
    streamer: "@Shadow",
    viewers: 1280,
    thumbnail: "/bradley-pelish-NPivaRqGFWw-unsplash.jpg",
  },
  {
    id: "2",
    title: "PUBG Naija Royale",
    streamer: "@ZuluSquad",
    viewers: 940,
    thumbnail: "/branden-skeli-L0Razurc1Og-unsplash.jpg",
  },
];

const activeTournaments = [
  {
    id: "1",
    name: "CODM Lagos Cup",
    status: "Live",
    nextMatch: "Today 7:00 PM",
    prize: "₦100,000",
    players: "64/128",
  },
  {
    id: "2",
    name: "PUBG Naija Royale",
    status: "Starting Soon",
    nextMatch: "Tomorrow 6:00 PM",
    prize: "₦250,000",
    players: "32/100",
  },
];

const upcomingMatches = [
  {
    id: "1",
    opponent: "@KillerX",
    tournament: "CODM Lagos Cup",
    time: "Today 7:00 PM",
    game: "COD Mobile",
  },
  {
    id: "2",
    opponent: "@Shadow",
    tournament: "Ranked Match",
    time: "Today 9:00 PM",
    game: "COD Mobile",
  },
];

const recentResults = [
  { id: "1", opponent: "@ProGamer", result: "win", earnings: "₦15,000", elo: "+25", game: "COD Mobile" },
  { id: "2", opponent: "@NigerianKing", result: "win", earnings: "₦20,000", elo: "+32", game: "PUBG Mobile" },
  { id: "3", opponent: "@AcePlayer", result: "loss", earnings: "₦0", elo: "-15", game: "EA FC" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, GhostAlpha</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-white/60">Diamond Rank</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] font-medium">
              Top 5%
            </span>
          </div>
        </div>
        <Link
          href="/dashboard/tournaments"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Trophy className="w-4 h-4" />
          Browse Tournaments
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, i) => (
          <div
            key={i}
            className="bg-[#252535] rounded-xl border border-white/10 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/60">{kpi.label}</span>
              <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
            </div>
            <div className="text-xl font-bold">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Live Now */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-red-500" />
            Live Now
          </h3>
          <Link href="/dashboard/streams" className="text-sm text-[#7C3AED] hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {liveStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-[#252535] rounded-xl border border-white/10 overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-red-500 text-white font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-black/60 text-white/80">
                    {stream.viewers.toLocaleString()} viewers
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="font-semibold text-sm">{stream.title}</div>
                  <div className="text-xs text-white/70">{stream.streamer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Tournaments */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Active Tournaments</h3>
            </div>
            <div className="space-y-3">
              {activeTournaments.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#252535] rounded-xl border border-white/10 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{t.name}</h4>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          t.status === "Live" 
                            ? "bg-red-500/20 text-red-400" 
                            : "bg-[#7C3AED]/20 text-[#7C3AED]"
                        }`}>
                          {t.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {t.nextMatch}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {t.players}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#F59E0B] font-bold">{t.prize}</div>
                      <div className="text-xs text-white/60">Prize Pool</div>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 rounded-lg border border-[#7C3AED] text-[#7C3AED] text-sm font-medium hover:bg-[#7C3AED]/10 transition-colors">
                    View Bracket
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Matches */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Upcoming Matches</h3>
            </div>
            <div className="space-y-3">
              {upcomingMatches.map((m) => (
                <div
                  key={m.id}
                  className="bg-[#252535] rounded-xl border border-white/10 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">vs {m.opponent}</div>
                      <div className="text-sm text-white/60">{m.tournament}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Clock className="w-3 h-3" />
                        {m.time}
                      </div>
                      <div className="text-xs text-white/40">{m.game}</div>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                    Check In
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Results</h3>
            </div>
            <div className="space-y-2">
              {recentResults.map((r) => (
                <div
                  key={r.id}
                  className="bg-[#252535] rounded-xl border border-white/10 p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {r.result === "win" ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                    <div>
                      <div className="font-medium">vs {r.opponent}</div>
                      <div className="text-xs text-white/60">{r.game}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${r.result === "win" ? "text-[#F59E0B]" : "text-white/40"}`}>
                      {r.earnings}
                    </div>
                    <div className={`text-xs ${r.result === "win" ? "text-green-400" : "text-red-400"}`}>
                      {r.elo} ELO
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* ELO Chart placeholder */}
          <div className="bg-[#252535] rounded-xl border border-white/10 p-4">
            <h4 className="font-semibold mb-4">ELO Progress</h4>
            <div className="h-32 flex items-end gap-1">
              {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 80, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#7C3AED] to-[#EC4899] rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-white/40 mt-2">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Rank badge */}
          <div className="bg-[#252535] rounded-xl border border-white/10 p-4">
            <h4 className="font-semibold mb-4">Current Rank</h4>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#F59E0B] to-orange-600 mb-3">
                <span className="text-3xl font-bold">#4</span>
              </div>
              <div className="text-[#F59E0B] font-bold">Diamond</div>
              <div className="text-sm text-white/60">2,450 ELO</div>
            </div>
          </div>

          {/* Next tournament CTA */}
          <div className="bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/20 rounded-xl border border-[#7C3AED]/30 p-4">
            <h4 className="font-semibold mb-2">Next Tournament</h4>
            <div className="text-sm text-white/70 mb-3">
              PUBG Naija Royale starts tomorrow. 32 spots remaining!
            </div>
            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Register Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
