"use client";

import React, { useState } from "react";
import { Gamepad2, Zap, Shield, Coins, Star, CheckCircle, Trophy, Lock } from "lucide-react";

const achievements = [
  { id: 1, name: "First Blood", desc: "Win your first match", points: 10, earned: true, earnedDate: "Jan 15, 2024", icon: "zap", color: "from-cyan-400 to-blue-600" },
  { id: 2, name: "Tournament Veteran", desc: "Complete 10 tournaments", points: 25, earned: true, earnedDate: "Feb 20, 2024", icon: "shield", color: "from-blue-500 to-cyan-400" },
  { id: 3, name: "Moneymaker", desc: "Earn ₦50,000 total", points: 50, earned: true, earnedDate: "Mar 10, 2024", icon: "coins", color: "from-yellow-400 to-yellow-600" },
  { id: 4, name: "Crowd Favourite", desc: "Reach 500 followers", points: 30, earned: true, earnedDate: "Apr 5, 2024", icon: "star", color: "from-yellow-400 to-pink-500" },
  { id: 5, name: "First Win Streak", desc: "Win 3 in a row", points: 15, earned: true, earnedDate: "Jan 28, 2024", icon: "check", color: "from-green-400 to-emerald-600" },
  { id: 6, name: "Champion", desc: "Win a tournament", points: 100, earned: true, earnedDate: "May 1, 2024", icon: "trophy", color: "from-yellow-400 to-orange-500" },
  { id: 7, name: "Undefeated", desc: "Win tournament without dropping a map", points: 150, earned: false, progress: 75, icon: "trophy", color: "from-yellow-400 to-orange-500" },
  { id: 8, name: "Pan-African", desc: "Compete in 5 different regions", points: 75, earned: false, progress: 40, icon: "globe", color: "from-purple-500 to-pink-500" },
  { id: 9, name: "Arena King", desc: "Reach Arena King rank", points: 200, earned: false, progress: 60, icon: "crown", color: "from-purple-600 to-pink-500" },
  { id: 10, name: "Legend", desc: "Earn ₦500,000 total", points: 250, earned: false, progress: 45, icon: "coins", color: "from-yellow-400 to-yellow-600" },
  { id: 11, name: "Streamer God", desc: "10,000 concurrent viewers", points: 200, earned: false, progress: 0, icon: "eye", color: "from-red-500 to-pink-500" },
  { id: 12, name: "Brand Deal King", desc: "Complete 10 brand deals", points: 175, earned: false, progress: 20, icon: "briefcase", color: "from-indigo-500 to-purple-500" },
];

const categories = ["All", "Combat", "Tournament", "Streaming", "Social", "Earnings"];

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  shield: Shield,
  coins: Coins,
  star: Star,
  check: CheckCircle,
  trophy: Trophy,
};

export default function AchievementsPage() {
  const [filter, setFilter] = useState("All");

  const earnedCount = achievements.filter(a => a.earned).length;
  const totalPoints = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500">
          <Star className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Achievements</h2>
          <p className="text-white/60">Track your progress and unlock rewards</p>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
          <div className="text-3xl font-bold text-white">{earnedCount}/{achievements.length}</div>
          <div className="text-sm text-white/60">Achievements Unlocked</div>
          <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full" style={{ width: `${(earnedCount / achievements.length) * 100}%` }} />
          </div>
        </div>
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
          <div className="text-3xl font-bold text-[#F59E0B]">{totalPoints}</div>
          <div className="text-sm text-white/60">Achievement Points</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              filter === c
                ? "bg-[#7C3AED] text-white"
                : "bg-[#252535] text-white/70 border border-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Achievement Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a) => {
          const IconComponent = iconMap[a.icon] || Star;
          return (
            <div
              key={a.id}
              className={`relative rounded-2xl p-5 border ${
                a.earned
                  ? "bg-[#252535] border-[#F59E0B]/30"
                  : "bg-[#252535]/50 border-white/10 opacity-60 grayscale"
              }`}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${a.color} mb-4`}>
                {a.earned ? (
                  <IconComponent className="w-7 h-7 text-white" />
                ) : (
                  <Lock className="w-7 h-7 text-white/60" />
                )}
              </div>

              {/* Content */}
              <h3 className={`font-bold text-lg ${a.earned ? "text-white" : "text-white/60"}`}>
                {a.name}
              </h3>
              <p className="text-sm text-white/60 mt-1">{a.desc}</p>

              {/* Points Badge */}
              <div className={`mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                a.earned ? "bg-[#F59E0B]/20 text-[#F59E0B]" : "bg-white/10 text-white/40"
              }`}>
                {a.points} pts
              </div>

              {/* Earned Date or Progress */}
              {a.earned ? (
                <div className="mt-3 text-xs text-white/40">
                  Earned {a.earnedDate}
                </div>
              ) : a.progress !== undefined ? (
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-white/40 mb-1">
                    <span>Progress</span>
                    <span>{a.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#7C3AED] rounded-full" style={{ width: `${a.progress}%` }} />
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
