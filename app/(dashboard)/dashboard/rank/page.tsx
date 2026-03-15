"use client";

import React, { useState } from "react";
import { Gamepad2, TrendingUp, TrendingDown, Crown, Zap } from "lucide-react";

const tiers = [
  { name: "Gravel", bg: "#2C2C2A", text: "#B4B2A9", border: null },
  { name: "Copper Shield", bg: "#1a1208", text: "#EF9F27", border: "#BA7517" },
  { name: "Iron Fang", bg: "#0f1a2e", text: "#85B7EB", border: "#378ADD" },
  { name: "Savanna", bg: "#0d2018", text: "#5DCAA5", border: "#1D9E75" },
  { name: "Lion", bg: "#1a0d0d", text: "#F09595", border: "#E24B4A" },
  { name: "Obsidian", bg: "#1a0a1f", text: "#C4A8F9", border: "#7C3AED" },
  { name: "Diamond Fang", bg: "#061a20", text: "#5DCAA5", border: "#06B6D4" },
  { name: "Arena King", bg: "linear-gradient(135deg, #7C3AED, #EC4899)", text: "white", border: null },
];

const currentTier = 6; // Diamond Fang
const currentELO = 2450;

const eloHistory = [2100, 2150, 2200, 2180, 2250, 2300, 2280, 2350, 2400, 2380, 2420, 2450, 2500, 2480, 2520, 2580, 2550, 2600, 2650, 2700, 2680, 2720, 2750, 2800, 2780, 2850, 2900, 2950, 3000, 2450];

const gameStats = [
  { game: "COD Mobile", elo: 2450, rank: "Diamond Fang", change: "+125", matches: 45, positive: true },
  { game: "PUBG Mobile", elo: 2180, rank: "Obsidian", change: "-35", matches: 32, positive: false },
  { game: "EA FC", elo: 1920, rank: "Lion", change: "+68", matches: 28, positive: true },
];

const recentChanges = [
  { match: "vs @ProGamer", result: "W", change: "+25", time: "2h ago" },
  { match: "vs @NigerianKing", result: "W", change: "+32", time: "4h ago" },
  { match: "vs @AcePlayer", result: "L", change: "-15", time: "Yesterday" },
  { match: "vs @ZuluSquad", result: "W", change: "+28", time: "Yesterday" },
  { match: "vs @Kelechi", result: "W", change: "+18", time: "2 days ago" },
];

export default function RankPage() {
  const [selectedGame, setSelectedGame] = useState("COD Mobile");

  const eloMax = Math.max(...eloHistory);
  const eloMin = Math.min(...eloHistory);
  const progress = ((currentELO - 2000) / (3000 - 2000)) * 100;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-500">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <div className="text-5xl font-black text-white mb-2">{currentELO}</div>
          <div className="text-xl font-bold mb-1" style={{ color: tiers[currentTier].text }}>
            {tiers[currentTier].name}
          </div>
          <p className="text-white/60 mb-6">Current ELO</p>
          
          {/* Progress to next tier */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-xs text-white/60 mb-2">
              <span>Progress to Arena King</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/20" />
      </div>

      {/* Tier Progression */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Rank Tiers</h3>
        <div className="flex justify-between gap-2 overflow-x-auto pb-2">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-20 text-center p-3 rounded-xl ${
                i === currentTier 
                  ? "ring-2 ring-[#7C3AED] ring-offset-2 ring-offset-[#252535]" 
                  : i < currentTier 
                    ? "opacity-60"
                    : "opacity-40"
              }`}
              style={{ backgroundColor: tier.name === "Arena King" ? undefined : tier.bg }}
            >
              {tier.name === "Arena King" && (
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] p-3">
                  <div className="text-xs font-bold text-white">{tier.name}</div>
                </div>
              )}
              {tier.name !== "Arena King" && (
                <>
                  <div className="text-xs font-medium mb-1" style={{ color: tier.text }}>{tier.name}</div>
                  <div className="text-[10px] text-white/40">{2000 + (i * 200)}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Game Tabs */}
      <div className="flex gap-2 overflow-x-auto">
        {gameStats.map((g) => (
          <button
            key={g.game}
            onClick={() => setSelectedGame(g.game)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              selectedGame === g.game
                ? "bg-[#7C3AED] text-white"
                : "bg-[#252535] text-white/70 border border-white/10"
            }`}
          >
            {g.game}
          </button>
        ))}
      </div>

      {/* Per-Game Stats */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-white/60 border-b border-white/10">
              <th className="text-left pb-3">Game</th>
              <th className="text-right pb-3">ELO</th>
              <th className="text-right pb-3">Rank</th>
              <th className="text-right pb-3">7-day</th>
              <th className="text-right pb-3">Matches</th>
            </tr>
          </thead>
          <tbody>
            {gameStats.map((g, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-3 font-medium">{g.game}</td>
                <td className="py-3 text-right font-bold">{g.elo}</td>
                <td className="py-3 text-right">{g.rank}</td>
                <td className={`py-3 text-right ${g.positive ? "text-green-400" : "text-red-400"}`}>
                  <span className="flex items-center justify-end gap-1">
                    {g.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {g.change}
                  </span>
                </td>
                <td className="py-3 text-right text-white/60">{g.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ELO History Chart */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">ELO History</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-400 font-bold">+250 this week</span>
          </div>
        </div>
        <div className="h-40 flex items-end gap-1">
          {eloHistory.map((elo, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#7C3AED] to-[#EC4899] rounded-t"
              style={{ 
                height: `${((elo - eloMin) / (eloMax - eloMin)) * 100}%`,
                minHeight: "4px"
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-white/40 mt-2">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </div>

      {/* Recent ELO Changes */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Recent ELO Changes</h3>
        <div className="space-y-3">
          {recentChanges.map((change, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
              <div>
                <div className="font-medium">{change.match}</div>
                <div className="text-xs text-white/40">{change.time}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-sm ${change.result === "W" ? "text-green-400" : "text-red-400"}`}>
                  {change.result}
                </span>
                <span className={`font-bold ${change.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {change.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
