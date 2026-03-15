"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Gamepad2, MapPin, Clock, Users, DollarSign, Share2, Trophy, 
  Calendar, User, ArrowLeft, PlayCircle 
} from "lucide-react";

const tournament = {
  id: "1",
  name: "Lagos Arena CODM Cup",
  status: "Live",
  prize: "₦100,000",
  game: "COD Mobile",
  region: "Lagos",
  image: "/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg",
  format: "Single Elimination",
  entryFee: "₦2,000",
  startTime: "Today, 6:00 PM",
  organizer: "Arena Africa",
  prizeBreakdown: [
    { place: "1st", percentage: "60%", amount: "₦60,000", color: "#F59E0B" },
    { place: "2nd", percentage: "25%", amount: "₦25,000", color: "#9CA3AF" },
    { place: "3rd", percentage: "15%", amount: "₦15,000", color: "#B45309" },
  ],
  players: [
    { name: "@GhostAlpha", initials: "GA" },
    { name: "@ZuluSquad", initials: "ZS" },
    { name: "@Kelechi", initials: "K" },
    { name: "@Ama", initials: "A" },
    { name: "@Shadow", initials: "S" },
    { name: "@ProGamer", initials: "PG" },
    { name: "@NigerianKing", initials: "NK" },
    { name: "@AcePlayer", initials: "AP" },
  ],
  matches: [
    { time: "6:00 PM", p1: "@GhostAlpha", p2: "@AcePlayer", round: "Quarterfinals" },
    { time: "6:30 PM", p1: "@ZuluSquad", p2: "@NigerianKing", round: "Quarterfinals" },
    { time: "7:00 PM", p1: "@Kelechi", p2: "@ProGamer", round: "Quarterfinals" },
    { time: "7:30 PM", p1: "@Ama", p2: "@Shadow", round: "Quarterfinals" },
  ],
  bracket: [
    { round: "Quarterfinals", matches: [
      { p1: "@GhostAlpha", p2: "@AcePlayer", winner: "@GhostAlpha" },
      { p1: "@ZuluSquad", p2: "@NigerianKing", winner: null },
      { p1: "@Kelechi", p2: "@ProGamer", winner: null },
      { p1: "@Ama", p2: "@Shadow", winner: null },
    ]},
    { round: "Semifinals", matches: [
      { p1: "@GhostAlpha", p2: "TBD", winner: null },
      { p1: "TBD", p2: "TBD", winner: null },
    ]},
    { round: "Finals", matches: [
      { p1: "TBD", p2: "TBD", winner: null },
    ]},
  ],
};

export default function TournamentDetailPage() {
  const params = useParams();
  const [registered, setRegistered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/tournaments" className="flex items-center gap-2 text-white/70 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <span className="font-semibold">Arena Africa</span>
            </Link>
          </div>
          <button className="flex items-center gap-2 text-white/70 hover:text-white">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <img src={tournament.image} alt={tournament.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-black/70 text-white">{tournament.game}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-red-500 text-white animate-pulse flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                LIVE
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{tournament.name}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-[#F59E0B] font-bold text-2xl">{tournament.prize}</span>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              <span className="text-white/60 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {tournament.region}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Bracket & Schedule */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bracket */}
            <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-bold mb-6">Bracket</h2>
              <div className="flex gap-8 overflow-x-auto pb-4">
                {tournament.bracket.map((round, ri) => (
                  <div key={ri} className="flex-shrink-0">
                    <h3 className="text-xs text-white/40 uppercase mb-3">{round.round}</h3>
                    <div className="space-y-3">
                      {round.matches.map((m, mi) => (
                        <div key={mi} className="w-40 bg-[#1a1a24] rounded-lg p-3 border border-white/10">
                          <div className={`text-sm font-medium ${m.winner ? (m.winner === m.p1 ? 'text-green-400' : 'text-white/60') : 'text-white'}`}>
                            {m.p1}
                          </div>
                          <div className="text-white/30 text-xs my-1">vs</div>
                          <div className={`text-sm font-medium ${m.winner ? (m.winner === m.p2 ? 'text-green-400' : 'text-white/60') : 'text-white'}`}>
                            {m.p2}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Match Schedule */}
            <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-bold mb-6">Match Schedule</h2>
              <div className="space-y-3">
                {tournament.matches.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#1a1a24] rounded-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-white/60 w-16">{m.time}</span>
                      <span className="font-medium">{m.p1}</span>
                      <span className="text-white/40">vs</span>
                      <span className="font-medium">{m.p2}</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] text-sm hover:bg-[#7C3AED]/30">
                      <PlayCircle className="w-4 h-4" />
                      Watch
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Tournament Info */}
            <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
              <h3 className="font-bold mb-4">Tournament Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Format</span>
                  <span>{tournament.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Entry Fee</span>
                  <span>{tournament.entryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Start Time</span>
                  <span>{tournament.startTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Organizer</span>
                  <span>{tournament.organizer}</span>
                </div>
              </div>
            </div>

            {/* Prize Breakdown */}
            <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
              <h3 className="font-bold mb-4">Prize Pool</h3>
              <div className="space-y-3">
                {tournament.prizeBreakdown.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: `${p.color}15` }}>
                    <div className="flex items-center gap-3">
                      <span className="font-bold" style={{ color: p.color }}>{p.place}</span>
                      <span className="text-white/60 text-xs">({p.percentage})</span>
                    </div>
                    <span className="font-bold" style={{ color: p.color }}>{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Register Button */}
            {registered ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <span className="text-green-400 font-bold">✓ Registered</span>
              </div>
            ) : (
              <button 
                onClick={() => setRegistered(true)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold hover:opacity-90 transition-opacity"
              >
                Register Now - {tournament.entryFee}
              </button>
            )}

            {/* Players */}
            <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
              <h3 className="font-bold mb-4">Players ({tournament.players.length})</h3>
              <div className="flex flex-wrap gap-2">
                {tournament.players.map((p, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-xs font-bold">
                    {p.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-[#3D3D55]">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/60">
          © 2025 Arena Africa.
        </div>
      </footer>
    </div>
  );
}
