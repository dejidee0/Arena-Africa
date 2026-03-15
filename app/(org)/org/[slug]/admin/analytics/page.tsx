"use client";

import { BarChart2, Users, Trophy, DollarSign, MapPin } from "lucide-react";
import { GradientIconCircle } from "@/components/ui/GradientIconCircle";
import { KPIStatCard } from "@/components/ui/KPIStatCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <GradientIconCircle icon={BarChart2} gradient="from-purple-500 to-indigo-500" />
        <h1 className="text-3xl font-bold">Analytics</h1>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIStatCard title="Total Tournaments" value="12" icon={Trophy} gradient="from-orange-500 to-yellow-500" />
        <KPIStatCard title="Members" value="148" icon={Users} gradient="from-purple-500 to-pink-500" />
        <KPIStatCard title="Prize Paid" value="₦2.4M" icon={DollarSign} gradient="from-emerald-500 to-teal-500" />
        <KPIStatCard title="Regions" value="4" icon={MapPin} gradient="from-sky-500 to-blue-500" />
      </div>

      {/* Tournament Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-bold mb-6">Tournament Performance</h3>
          <div className="space-y-4">
            {[
              { name: "CODM Cup", players: 128, completion: "94%", revenue: "₦150K" },
              { name: "PUBG Royale", players: 64, completion: "82%", revenue: "₦98K" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#1A1A26] rounded-xl">
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-white/60">{t.players} players</div>
                </div>
                <div className="text-right">
                  <StatusBadge status={t.completion} />
                  <div className="font-bold text-[#F59E0B] mt-1">{t.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-bold mb-6">Regional Reach</h3>
          <div className="space-y-3">
            {[
              { region: "Lagos", percent: 58, color: "from-purple-500" },
              { region: "Abuja", percent: 22, color: "from-blue-500" },
              { region: "PH", percent: 12, color: "from-emerald-500" },
              { region: "Kano", percent: 8, color: "from-orange-500" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400" />
                <span className="flex-1 font-medium">{r.region}</span>
                <div className="w-24 bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${r.color} to-transparent rounded-full`} style={{ width: `${r.percent}%` }} />
                </div>
                <span className="font-bold">{r.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6 min-h-[400px] flex items-center justify-center">
          <div className="text-center text-white/40">
            <BarChart2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <div>Engagement Over Time Chart</div>
          </div>
        </div>
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6 min-h-[400px] flex items-center justify-center">
          <div className="text-center text-white/40">
            <BarChart2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <div>Player Retention Chart</div>
          </div>
        </div>
      </div>
    </div>
  );
}


