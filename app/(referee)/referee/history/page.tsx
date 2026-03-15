"use client";

import { CheckCircle, XCircle, Clock, BarChart3, Clipboard } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GradientIconCircle } from "@/components/ui/GradientIconCircle";
import { KPIStatCard } from "@/components/ui/KPIStatCard";

export default function HistoryPage() {
  const history = [
    { id: "H001", title: "Score Dispute", status: "Player 1 Won", date: "Feb 10", duration: "28m" },
    { id: "H002", title: "Connection Loss", status: "Forfeit P2", date: "Feb 9", duration: "45m" },
    { id: "H003", title: "Replay Review", status: "No Change", date: "Feb 8", duration: "1h 12m" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <GradientIconCircle icon={BarChart3} gradient="from-slate-500 to-gray-500" />
        <h1 className="text-3xl font-bold">Ruling History</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <KPIStatCard title="Total Rulings" value="43" icon={Clipboard} gradient="from-purple-500 to-indigo-500" />
        <KPIStatCard title="Player 1 Wins" value="28" icon={CheckCircle} gradient="from-green-500 to-emerald-500" />
        <KPIStatCard title="Player 2 Wins" value="15" icon={CheckCircle} gradient="from-blue-500 to-cyan-500" />
        <KPIStatCard title="Avg Duration" value="36m" icon={Clock} gradient="from-amber-500 to-orange-500" />
      </div>

      {/* Resolutions Table */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold">Recent Rulings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left font-semibold text-white/70">Dispute</th>
                <th className="p-4 text-left font-semibold text-white/70">Ruling</th>
                <th className="p-4 text-left font-semibold text-white/70">Date</th>
                <th className="p-4 text-right font-semibold text-white/70">Duration</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 font-medium">{item.title}</td>
                  <td className="p-4">
                    <StatusBadge status={item.status} color={item.status.includes("Won") ? "green" : "gray"} />
                  </td>
                  <td className="p-4">{item.date}</td>
                  <td className="p-4 font-bold text-right">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Activity */}
      <div>
        <h3 className="text-xl font-bold mb-6">Weekly Resolutions</h3>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={day} className="text-center p-3 bg-[#1A1A26] rounded-xl border border-white/10 group hover:bg-gradient-to-b from-green-500 to-emerald-500 hover:text-white transition-all">
              <div className="font-bold text-lg">{i + 3}</div>
              <div className="text-xs text-white/60">{day}</div>
              <div className="w-full h-16 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl mt-2 mx-2 scale-0 group-hover:scale-100 transition-transform origin-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


