"use client";

import { Scale, ClipboardList, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { GradientIconCircle } from "@/components/ui/GradientIconCircle";
import { KPIStatCard } from "@/components/ui/KPIStatCard";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AvatarCircle } from "@/components/ui/AvatarCircle";

export default function RefereeDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <GradientIconCircle icon={Scale} gradient="from-purple-500 to-pink-500" />
        <h1 className="text-3xl font-bold">Referee Dashboard</h1>
      </div>

      {/* Warning Banner */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-4 flex items-center gap-3">
        <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-orange-400">SLA Warning</h3>
          <p className="text-white/80 text-sm">2 disputes approaching 2-hour SLA</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <KPIStatCard title="Assigned" value="3" icon={ClipboardList} gradient="from-cyan-400 to-blue-500" />
        <KPIStatCard title="Open" value="5" icon={AlertTriangle} gradient="from-orange-500 to-red-500" />
        <KPIStatCard title="Resolved" value="2" icon={CheckCircle} gradient="from-green-500 to-emerald-500" />
        <KPIStatCard title="Avg Time" value="1.8h" icon={Clock} gradient="from-yellow-500 to-orange-500" />
      </div>

      {/* Dispute Queue */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Priority Queue</h3>
        <div className="space-y-4">
          {[
            { id: "D001", title: "Score Dispute", players: "@johndoe vs @player2", tournament: "CODM Cup", priority: "Critical", sla: "14m" },
            { id: "D002", title: "Connection Loss", players: "@jane vs @mike", tournament: "PUBG Royale", priority: "High", sla: "32m" },
            { id: "D003", title: "Replay Review", players: "@team1 vs @team3", tournament: "EA FC League", priority: "Medium", sla: "1h 12m" },
          ].map((dispute) => (
            <div key={dispute.id} className="group bg-[#252535] rounded-2xl border border-white/10 p-6 hover:shadow-2xl hover:shadow-orange-500/20 transition-all hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    dispute.priority === "Critical" ? "bg-red-500" : dispute.priority === "High" ? "bg-orange-500" : "bg-yellow-500"
                  }`} />
                  <AvatarCircle initials="JD" />
                  <div>
                    <h4 className="font-bold">{dispute.title}</h4>
                    <p className="text-white/60">{dispute.players}</p>
                    <p className="text-sm text-purple-400">{dispute.tournament}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StatusBadge status={dispute.sla} color="orange" />
                  <span className="text-xs text-orange-400 font-mono">{dispute.sla}</span>
                </div>
              </div>
              <ActionButton variant="primary" className="w-full group-hover:shadow-xl">
                Review Dispute
              </ActionButton>
            </div>
          ))}
        </div>
      </div>

      {/* Assigned Tournaments */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Assigned Tournaments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "CODM Lagos Championship", disputes: 3, image: "/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg" },
            { name: "PUBG Naija Royale", disputes: 1, image: "/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg" },
          ].map((tournament, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#252535] border border-white/10 hover:scale-[1.02] transition-all">
              <div className="aspect-[4/3] relative">
                <img src={tournament.image} alt="" className="w-full h-full object-cover brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <StatusBadge status="Open Disputes" color="orange" size="sm" />
                  <span className="text-white/60 text-sm">({tournament.disputes})</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{tournament.name}</h4>
                <ActionButton variant="primary" className="w-full">View Tournament</ActionButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

