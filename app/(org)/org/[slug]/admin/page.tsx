"use client";

import { Building2, Users, Trophy, DollarSign, AlertCircle, PlusCircle, Shield, MessageSquare } from "lucide-react";
import { GradientIconCircle } from "@/components/ui/GradientIconCircle";
import { KPIStatCard } from "@/components/ui/KPIStatCard";
import { AvatarCircle } from "@/components/ui/AvatarCircle";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ActionButton } from "@/components/ui/ActionButton";

export default function OrgAdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GradientIconCircle icon={Building2} gradient="from-yellow-400 to-orange-500" />
          <div>
            <h1 className="text-3xl font-bold">Nexus Esports</h1>
            <StatusBadge status="Verified" color="green" />
          </div>
        </div>
        <ActionButton variant="ghost">View Public Page</ActionButton>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPIStatCard title="Members" value="20" icon={Users} gradient="from-purple-500 to-pink-500" />
        <KPIStatCard title="Tournaments" value="3" icon={Trophy} gradient="from-yellow-400 to-orange-500" />
        <KPIStatCard title="Prize Pool" value="₦450,000" icon={DollarSign} gradient="from-green-500 to-emerald-500" />
        <KPIStatCard title="Disputes" value="2" icon={AlertCircle} gradient="from-red-500 to-orange-500" trend="-2" />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActionButton variant="primary">
          <PlusCircle className="w-4 h-4" />
          Create Tournament
        </ActionButton>
        <ActionButton variant="ghost">
          <Users className="w-4 h-4" />
          Manage Roster
        </ActionButton>
        <ActionButton variant="ghost">
          <Shield className="w-4 h-4" />
          View Disputes
        </ActionButton>
        <ActionButton variant="ghost">
          <MessageSquare className="w-4 h-4" />
          Discord
        </ActionButton>
      </div>

      {/* Active Tournaments */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold flex items-center gap-2">
            Active Tournaments
          </h3>
        </div>
        <div className="divide-y divide-white/10">
          {[1,2,3].map((t) => (
            <div key={t} className="p-6 hover:bg-white/5">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <StatusBadge status="LIVE" color="red" />
                  <div>
                    <h4 className="font-bold text-lg">CODM Weekly Cup</h4>
                    <p className="text-white/60 text-sm">₦50,000 prize | Quarterfinals</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
<ActionButton variant="ghost">Manage</ActionButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Payouts */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold flex items-center gap-2">
            Recent Payouts
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left p-4 font-semibold text-white/70">Player</th>
                <th className="text-left p-4 font-semibold text-white/70">Tournament</th>
                <th className="text-left p-4 font-semibold text-white/70">Handle</th>
                <th className="text-right p-4 font-semibold text-white/70">Amount</th>
                <th className="text-left p-4 font-semibold text-white/70">Date</th>
                <th className="text-left p-4 font-semibold text-white/70">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "John Doe", initials: "JD", tournament: "CODM Cup", handle: "@johndoe", amount: "₦25,000", date: "2024-02-10", status: "Confirmed" },
                { name: "Jane Smith", initials: "JS", tournament: "PUBG Royale", handle: "@janesmith", amount: "₦15,000", date: "2024-02-09", status: "Pending" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">
                    <AvatarCircle initials={row.initials} />
                  </td>
                  <td className="p-4 font-medium">{row.tournament}</td>
                  <td className="p-4">@{row.handle}</td>
                  <td className="p-4 font-bold text-[#F59E0B] text-right">{row.amount}</td>
                  <td className="p-4 text-white/60">{row.date}</td>
                  <td className="p-4">
                    <StatusBadge status={row.status} color="green" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disputes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            title: "Player Dispute #001",
            players: "@player1 vs @player2",
            tournament: "CODM Weekly Cup",
            issue: "Score dispute"
          }
        ].map((dispute, i) => (
          <div key={i} className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">{dispute.title}</h4>
                <p className="text-white/60">{dispute.players}</p>
                <p className="text-sm text-red-400">{dispute.tournament}</p>
              </div>
            </div>
            <StatusBadge status="Open" color="orange" />
            <ActionButton variant="primary" className="mt-4 w-full">
              View Dispute
            </ActionButton>
          </div>
        ))}
      </div>
    </div>
  );
}

