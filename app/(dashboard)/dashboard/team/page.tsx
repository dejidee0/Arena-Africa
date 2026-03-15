"use client";

import React, { useState } from "react";
import { Gamepad2, Users, Trophy, DollarSign, TrendingUp, UserPlus, LogOut, Calendar } from "lucide-react";

const team = {
  name: "Lagos Wolves",
  tag: "[LW]",
  region: "Lagos",
  founded: "Jan 2024",
  stats: {
    members: "5/10",
    wins: "8",
    earnings: "₦420,000",
    winRate: "64%",
  },
};

const members = [
  { handle: "@GhostAlpha", role: "Captain", game: "COD Mobile", elo: 2450, joined: "Jan 2024", avatar: "GA" },
  { handle: "@Shadow", role: "Member", game: "COD Mobile", elo: 2180, joined: "Feb 2024", avatar: "SH" },
  { handle: "@KillerX", role: "Member", game: "PUBG Mobile", elo: 2050, joined: "Feb 2024", avatar: "KX" },
  { handle: "@Ama", role: "Member", game: "Free Fire", elo: 1920, joined: "Mar 2024", avatar: "AM" },
  { handle: "@Kelechi", role: "Member", game: "EA FC", elo: 1800, joined: "Mar 2024", avatar: "KE" },
];

const tournaments = [
  { name: "CODM Lagos Championship", status: "In Progress", round: "Quarterfinals", prize: "₦100,000" },
  { name: "PUBG Naija Squads", status: "Registered", round: "Group Stage", prize: "₦250,000" },
];

export default function TeamPage() {
  const [inviteHandle, setInviteHandle] = useState("");

  return (
    <div className="space-y-6">
      {/* Team Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-2xl font-bold">
            LW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">{team.name}</h2>
              <span className="text-white/60">{team.tag}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span>{team.region}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Founded {team.founded}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white/60 mb-1">
            <Users className="w-4 h-4" />
            <span className="text-xs">Members</span>
          </div>
          <div className="text-xl font-bold">{team.stats.members}</div>
        </div>
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white/60 mb-1">
            <Trophy className="w-4 h-4" />
            <span className="text-xs">Wins</span>
          </div>
          <div className="text-xl font-bold">{team.stats.wins}</div>
        </div>
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white/60 mb-1">
            <DollarSign className="w-4 h-4" />
            <span className="text-xs">Earnings</span>
          </div>
          <div className="text-xl font-bold text-[#F59E0B]">{team.stats.earnings}</div>
        </div>
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white/60 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">Win Rate</span>
          </div>
          <div className="text-xl font-bold text-green-400">{team.stats.winRate}</div>
        </div>
      </div>

      {/* Roster */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h3 className="font-bold">Team Roster</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-xs text-white/60 border-b border-white/10">
              <th className="text-left px-6 py-3">Player</th>
              <th className="text-left px-6 py-3">Role</th>
              <th className="text-left px-6 py-3">Game</th>
              <th className="text-right px-6 py-3">ELO</th>
              <th className="text-right px-6 py-3">Joined</th>
              <th className="text-right px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center font-bold">
                      {m.avatar}
                    </div>
                    <span className="font-medium">{m.handle}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    m.role === "Captain" ? "bg-yellow-500/20 text-yellow-400" : "bg-white/10 text-white/60"
                  }`}>
                    {m.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-white/70">{m.game}</td>
                <td className="px-6 py-4 text-right font-bold">{m.elo}</td>
                <td className="px-6 py-4 text-right text-white/60">{m.joined}</td>
                <td className="px-6 py-4 text-right">
                  {m.role !== "Captain" && (
                    <button className="text-red-400 text-sm hover:underline">Remove</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invite */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Invite Member</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={inviteHandle}
            onChange={(e) => setInviteHandle(e.target.value)}
            placeholder="Enter player handle..."
            className="flex-1 bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]"
          />
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] text-white font-semibold">
            <UserPlus className="w-5 h-5" />
            Send Invite
          </button>
        </div>
      </div>

      {/* Active Tournaments */}
      <div>
        <h3 className="font-bold mb-4">Active Tournaments</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tournaments.map((t, i) => (
            <div key={i} className="bg-[#252535] rounded-xl border border-white/10 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{t.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  t.status === "In Progress" ? "bg-green-500/20 text-green-400" : "bg-[#7C3AED]/20 text-[#7C3AED]"
                }`}>
                  {t.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{t.round}</span>
                <span className="text-[#F59E0B]">{t.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave Team */}
      <div className="pt-4 border-t border-white/10">
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-red-500 text-red-400 font-semibold hover:bg-red-500/10">
          <LogOut className="w-5 h-5" />
          Leave Team
        </button>
      </div>
    </div>
  );
}
