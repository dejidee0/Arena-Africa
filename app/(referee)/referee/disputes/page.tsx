"use client";

import { Search, Filter, PlayCircle } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AvatarCircle } from "@/components/ui/AvatarCircle";
import { ActionButton } from "@/components/ui/ActionButton";

export default function RefereeDisputes() {
  const disputes = [
    { id: "D001", title: "Score Dispute - High Priority", players: "@johndoe (JD) vs @player2 (P2)", tournament: "CODM Cup", issue: "Score Dispute", sla: "14:23", priority: "Critical" },
    { id: "D002", title: "Connection Loss", players: "@jane (JS) vs @mike (MC)", tournament: "PUBG Royale", issue: "Connection Loss", sla: "32:15", priority: "High" },
    { id: "D003", title: "Replay Review", players: "@team1 (T1) vs @team3 (T3)", tournament: "EA FC League", issue: "Replay Review", sla: "1:12:45", priority: "Medium" },
    { id: "D004", title: "Rule Violation", players: "@alex (A) vs @bob (B)", tournament: "CODM Cup", issue: "Rule Violation", sla: "45:30", priority: "Low" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Disputes ({disputes.length})</h1>
        <div className="flex items-center gap-2 bg-[#252535] rounded-xl p-2 border border-white/10">
          <Search className="w-5 h-5 text-white/60" />
          <input placeholder="Search disputes..." className="bg-transparent border-none outline-none text-white placeholder-white/60 ml-2" />
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex items-center gap-4 bg-[#252535] p-3 rounded-xl border border-white/10">
        <Filter className="w-5 h-5 text-white/60" />
        <button className="px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all">All Status</button>
        <button className="px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all">SLA Critical</button>
        <button className="px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 hover:bg-orange-500/30">High Priority (2)</button>
        <div className="flex-1" />
        <ActionButton variant="ghost">Export</ActionButton>
      </div>

      {/* Disputes List */}
      <div className="space-y-4">
        {disputes.map((dispute) => (
          <div key={dispute.id} className={`p-6 rounded-2xl border group hover:shadow-2xl hover:shadow-orange-500/20 transition-all hover:scale-[1.02] ${dispute.priority === "Critical" ? "border-red-500/20 bg-red-500/5" : "border-white/10 bg-[#252535]"}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full animate-pulse ${dispute.priority === "Critical" ? "bg-red-500" : dispute.priority === "High" ? "bg-orange-500" : "bg-yellow-500"}`} />
                <AvatarCircle initials={dispute.players.split(" ")[0].slice(1,3).toUpperCase()} />
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{dispute.title}</h4>
                  <p className="text-sm text-white/60">{dispute.players}</p>
                  <p className="text-xs text-purple-400 mt-1">{dispute.tournament}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 text-xs">
                <StatusBadge status={dispute.issue.split(" ")[0]} color="purple" size="sm" />
                <span className="font-mono text-orange-400 font-bold">{dispute.sla}</span>
              </div>
            </div>
            <ActionButton variant="primary" className="w-full">
<PlayCircle className="w-4 h-4 ml-auto" />
            </ActionButton>
          </div>
        ))}
      </div>
    </div>
  );
}

