"use client";

import { useParams } from "next/navigation";
import { LayoutDashboard, GitBranch, UserCheck, AlertTriangle, DollarSign, Gamepad2, Trophy, Users } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AvatarCircle } from "@/components/ui/AvatarCircle";

export default function TournamentDetail() {
  const params = useParams();
  const tournamentId = params.id as string;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Lagos Arena CODM Cup</h1>
            <div className="flex items-center gap-2 mt-1">
              <StatusBadge status="Live" color="red" />
              <span className="text-white/60">Round of 16</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="bg-[#1A1A26] p-1 flex rounded-t-2xl">
          {[
            { label: "Overview", href: "#", icon: LayoutDashboard, active: true },
            { label: "Bracket", href: "#", icon: GitBranch, active: false },
            { label: "Registrations", href: "#", icon: UserCheck, active: false },
            { label: "Disputes", href: "#", icon: AlertTriangle, active: false },
            { label: "Payouts", href: "#", icon: DollarSign, active: false },
          ].map((tab) => (
            <ActionButton key={tab.label} variant={tab.active ? "primary" : "ghost"} className="flex-1">
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </ActionButton>
          ))}
        </div>
      </div>

      {/* Overview Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tournament Info */}
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 p-3 bg-[#1A1A26] rounded-xl">
                <Gamepad2 className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-bold">COD Mobile</div>
                  <div className="text-sm text-white/60">Battle Royale</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#1A1A26] rounded-xl">
                <Users className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="font-bold">64 Players</div>
                  <div className="text-sm text-white/60">32 active</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#1A1A26] rounded-xl">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <div className="font-bold text-yellow-400">₦100,000</div>
              </div>
            </div>
            <div className="prose prose-invert max-w-none">
              <p>This weekly COD Mobile tournament features single elimination bracket with $100k NGN prize pool. Top Lagos players compete for glory.</p>
            </div>
          </div>

          {/* Recent Matches */}
          <div className="bg-[#252535] rounded-2xl border border-white/10">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-xl font-bold flex items-center gap-2">Recent Matches</h3>
            </div>
            <div className="divide-y divide-white/10">
              {[
                { players: "@johndoe vs @janesmith", score: "16-12", status: "Won" },
                { players: "@mikej vs @sarahk", score: "13-15", status: "Lost" },
              ].map((match, i) => (
                <div key={i} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <AvatarCircle initials="JD" />
                      <AvatarCircle initials="JS" />
                    </div>
                    <StatusBadge status={match.status} color="green" />
                  </div>
                  <p className="text-white/60">{match.players}</p>
                  <p className="font-bold text-lg mt-1">{match.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <h4 className="font-bold mb-4">Quick Actions</h4>
            <div className="space-y-2">
              <ActionButton variant="primary" className="w-full">Advance Round</ActionButton>
              <ActionButton variant="ghost" className="w-full">View Leaderboard</ActionButton>
              <ActionButton variant="danger" className="w-full">Cancel Tournament</ActionButton>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <h4 className="font-bold mb-4">Stats</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Matches Played</span>
                <span className="font-bold">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Disputes</span>
                <span className="font-bold text-orange-400">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Avg Match Time</span>
                <span className="font-bold">12:34</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disputes Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Open Disputes ({2})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "D001", players: "@johndoe vs @mikej", issue: "Score Dispute" },
          ].map((dispute) => (
            <div key={dispute.id} className="bg-gradient-to-r from-orange-500/5 border border-orange-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold">{dispute.issue}</h4>
                  <p className="text-white/60 mt-1">{dispute.players}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <ActionButton variant="ghost" className="flex-1">View Evidence</ActionButton>
                <ActionButton variant="primary" className="flex-1">Assign Referee</ActionButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
