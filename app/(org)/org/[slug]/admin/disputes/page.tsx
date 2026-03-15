"use client";

import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AvatarCircle } from "@/components/ui/AvatarCircle";

export default function DisputesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const disputes = [
    { id: "D001", players: "@johndoe vs @mikej", issue: "Score dispute", tournament: "CODM Cup", status: "Open", priority: "High" },
    { id: "D002", players: "@janesmith vs @sarahk", issue: "Connection loss", tournament: "PUBG Royale", status: "Resolved", priority: "Medium" },
    { id: "D003", players: "@player1 vs @player3", issue: "Replay dispute", tournament: "CODM Cup", status: "Open", priority: "Low" },
  ];

  const statusColor = (status: string) => {
    switch(status) {
      case "Open": return "orange";
      case "Resolved": return "green";
      case "Appealed": return "purple";
      default: return "gray";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <AlertCircle className="w-8 h-8 text-red-400" />
            Disputes ({disputes.length})
          </h1>
        </div>
        <div className="flex gap-2">
          <select className="bg-[#252535] border border-white/10 rounded-xl px-4 py-2 text-white">
            <option>All</option>
            <option>Open</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-1 flex mb-6">
        {["all", "open", "resolved", "appealed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${activeTab === tab ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
          >
            {tab === "all" && `All (${disputes.length})`}
            {tab === "open" && "Open (2)"}
            {tab === "resolved" && "Resolved (1)"}
            {tab === "appealed" && "Appealed (0)"}
          </button>
        ))}
      </div>

      {/* Disputes List */}
      <div className="space-y-4">
        {disputes.map((dispute) => (
          <div key={dispute.id} className={`p-6 rounded-2xl border ${dispute.status === "Open" ? "border-red-500/20 bg-red-500/5" : "border-green-500/20 bg-green-500/5"}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${dispute.priority === "High" ? "bg-red-500" : dispute.priority === "Medium" ? "bg-orange-500" : "bg-yellow-500"}`} />
                <AvatarCircle initials="JD" />
                <div>
                  <h4 className="font-bold text-lg">{dispute.issue}</h4>
                  <p className="text-white/60">{dispute.players}</p>
                  <p className="text-sm text-purple-400">{dispute.tournament}</p>
                </div>
              </div>
              <StatusBadge status={dispute.status} color={statusColor(dispute.status)} />
            </div>
            <ActionButton variant="primary">View Details</ActionButton>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6 text-center">
          <StatusBadge status="Open" color="red" size="md" />
          <div className="text-3xl font-bold mt-2 text-red-400">5</div>
          <div className="text-white/60 mt-1">Open Disputes</div>
        </div>
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6 text-center">
          <StatusBadge status="Escalated" color="orange" size="md" />
          <div className="text-3xl font-bold mt-2 text-orange-400">2</div>
          <div className="text-white/60 mt-1">Escalated</div>
        </div>
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6 text-center">
          <StatusBadge status="Resolved" color="green" size="md" />
          <div className="text-3xl font-bold mt-2 text-green-400">23</div>
          <div className="text-white/60 mt-1">Resolved</div>
        </div>
      </div>
    </div>
  );
}
