"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, Trophy, Users, MapPin, DollarSign, Clock, Filter, BarChart2 } from "lucide-react";

const tournamentList = [
  {
    id: "1",
    name: "Lagos Arena CODM Cup",
    status: "Live",
    prize: "₦100,000",
    spots: "64/128",
    game: "COD Mobile",
    region: "Lagos",
    image: "/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg",
  },
  {
    id: "2",
    name: "PUBG Naija Royale",
    status: "Starting Soon",
    prize: "₦250,000",
    spots: "32/100",
    game: "PUBG Mobile",
    region: "All Regions",
    image: "/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg",
  },
  {
    id: "3",
    name: "EA FC Street League",
    status: "Upcoming",
    prize: "₦75,000",
    spots: "12/64",
    game: "EA FC",
    region: "Lagos",
    image: "/emediong-umoh-63Md7MbwXPg-unsplash.jpg",
  },
  {
    id: "4",
    name: "Free Fire Kano Open",
    status: "Upcoming",
    prize: "₦50,000",
    spots: "45/128",
    game: "Free Fire",
    region: "Kano",
    image: "/frustrated-streamer-losing-online-shooter-video-games-play-competition-computer-with-neon-lights-male-gamer-streaming-action-gameplay-feeling-sad-about-lost-shooting-championship.jpg",
  },
  {
    id: "5",
    name: "Accra CODM Invitational",
    status: "Upcoming",
    prize: "₦120,000",
    spots: "8/32",
    game: "COD Mobile",
    region: "Accra",
    image: "/african-american-woman-streamer-stressed-using-computer-gaming-room.jpg",
  },
  {
    id: "6",
    name: "Nairobi PUBG Championship",
    status: "Upcoming",
    prize: "₦200,000",
    spots: "56/100",
    game: "PUBG Mobile",
    region: "Nairobi",
    image: "/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg",
  },
];

const statusColors: Record<string, string> = {
  "Live": "bg-red-500 text-white",
  "Starting Soon": "bg-[#7C3AED] text-white",
  "Upcoming": "bg-white/10 text-white/70",
  "Completed": "bg-white/5 text-white/40",
};

export default function TournamentsPage() {
  const [filter, setFilter] = useState("All");
  const [gameFilter, setGameFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");

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
            <Link href="/tournaments" className="text-[#7C3AED]">Tournaments</Link>
            <Link href="/creators" className="hover:text-white">Creators</Link>
            <Link href="/#waitlist" className="hover:text-white">Join Waitlist</Link>
          </nav>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-[#252535]/50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#7C3AED]" />
                <span className="text-sm text-white/60">24 Active Tournaments</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-sm text-white/60">₦2.1M Total Prize Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#EC4899]" />
                <span className="text-sm text-white/60">1,840 Players Competing</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
              <BarChart2 className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-[#0A0A0F]/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Status tabs */}
            <div className="flex items-center gap-2">
              {["All", "Live", "Upcoming", "Completed"].map((f) => (
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

            <div className="h-6 w-px bg-white/10" />

            {/* Game filter */}
            <select
              value={gameFilter}
              onChange={(e) => setGameFilter(e.target.value)}
              className="bg-[#252535] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/70 outline-none focus:border-[#7C3AED]"
            >
              <option value="All">All Games</option>
              <option value="COD Mobile">COD Mobile</option>
              <option value="PUBG Mobile">PUBG Mobile</option>
              <option value="EA FC">EA FC</option>
              <option value="Free Fire">Free Fire</option>
            </select>

            {/* Region filter */}
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="bg-[#252535] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/70 outline-none focus:border-[#7C3AED]"
            >
              <option value="All">All Regions</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Accra">Accra</option>
              <option value="Nairobi">Nairobi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tournament Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournamentList.map((t) => (
            <Link
              key={t.id}
              href={`/tournaments/${t.id}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#252535] hover:scale-[1.02] transition-transform duration-200"
            >
              {/* Background Image */}
              <div className="relative aspect-[4/3]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252535] via-black/40 to-transparent" />
                
                {/* Game badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-black/70 text-white font-medium">
                    {t.game}
                  </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] px-2 py-1 rounded-full font-medium flex items-center gap-1 ${
                    t.status === "Live" ? "bg-red-500 text-white animate-pulse" : statusColors[t.status]
                  }`}>
                    {t.status === "Live" && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                    {t.status}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-lg text-white mb-2">{t.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#F59E0B] font-bold">{t.prize}</span>
                    <span className="text-white/60 text-sm flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {t.spots}
                    </span>
                  </div>
                  <div className="mt-2 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full"
                      style={{ width: `${Math.round((parseInt(t.spots.split('/')[0]) / parseInt(t.spots.split('/')[1])) * 100)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {t.region}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {t.status === "Live" ? "Now" : "Starting Soon"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <div className="p-4 pt-0">
                <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                  Register Now
                </button>
              </div>
            </Link>
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
