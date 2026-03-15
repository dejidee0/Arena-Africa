"use client";

import React, { useState } from "react";
import { Gamepad2, Users, Eye, Clock, Copy, RefreshCw, Play, Video, BarChart2, Calendar, Edit, Trash2, Gift } from "lucide-react";

const stats = [
  { label: "Total Followers", value: "2,450" },
  { label: "Avg Viewers", value: "180" },
  { label: "Hours Streamed", value: "342" },
  { label: "Total Tips", value: "₦45,000" },
];

const recentStreams = [
  { date: "Today", title: "CODM Ranked Grind", duration: "4h 30m", peak: "245", earnings: "₦8,500", vod: true },
  { date: "Yesterday", title: "PUBG Squads", duration: "3h 15m", peak: "189", earnings: "₦5,200", vod: true },
  { date: "Feb 12", title: "Tournament Coverage", duration: "6h 00m", peak: "520", earnings: "₦12,000", vod: true },
  { date: "Feb 11", title: "EA FC 1v1s", duration: "2h 45m", peak: "156", earnings: "₦3,800", vod: false },
  { date: "Feb 10", title: "Free Fire Finals", duration: "5h 30m", peak: "380", earnings: "₦9,500", vod: true },
];

const upcomingStreams = [
  { title: "CODM Qualifiers", time: "Tomorrow, 6:00 PM" },
  { title: "PUBG Tournament", time: "Saturday, 8:00 PM" },
];

const tips = [
  { user: "@ZuluFan", amount: "₦500" },
  { user: "@NaijaPro", amount: "₦1,000" },
  { user: "@GhostFan", amount: "₦200" },
];

export default function StreamerDashboardPage() {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Stream</h2>
          <p className="text-white/60">Manage your streaming setup</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-500 animate-pulse">
          <Play className="w-5 h-5" />
          Go Live
        </button>
      </div>

      {/* Status Card */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <span className="font-semibold">OFFLINE</span>
          </div>
          <span className="text-white/60 text-sm">Last live: 2 hours ago</span>
        </div>
      </div>

      {/* RTMP Setup */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">RTMP Setup</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-white/60">RTMP URL</label>
            <div className="flex items-center gap-2 mt-1">
              <code className="flex-1 bg-[#1a1a24] border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white/80">
                rtmp://live.arenaAfrica.gg/stream
              </code>
              <button className="p-3 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30">
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs text-white/60">Stream Key</label>
            <div className="flex items-center gap-2 mt-1">
              <code className="flex-1 bg-[#1a1a24] border border-white/10 rounded-lg px-4 py-3 text-sm font-mono">
                {showKey ? "gh0st_4lph4_sk_2024" : "••••••••••••••••••••"}
              </code>
              <button onClick={() => setShowKey(!showKey)} className="p-3 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30">
                <Eye className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30">
                <Copy className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
            <div className="text-xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-white/60">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Streams */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Recent Streams</h3>
        <table className="w-full">
          <thead>
            <tr className="text-xs text-white/60 border-b border-white/10">
              <th className="text-left pb-3">Date</th>
              <th className="text-left pb-3">Title</th>
              <th className="text-right pb-3">Duration</th>
              <th className="text-right pb-3">Peak</th>
              <th className="text-right pb-3">Earnings</th>
              <th className="text-right pb-3">VOD</th>
            </tr>
          </thead>
          <tbody>
            {recentStreams.map((s, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-3 text-sm text-white/60">{s.date}</td>
                <td className="py-3 font-medium">{s.title}</td>
                <td className="py-3 text-right text-sm">{s.duration}</td>
                <td className="py-3 text-right text-sm">{s.peak}</td>
                <td className="py-3 text-right text-green-400 font-medium">{s.earnings}</td>
                <td className="py-3 text-right">
                  {s.vod ? (
                    <button className="text-[#7C3AED] text-sm hover:underline">Watch</button>
                  ) : (
                    <span className="text-white/30 text-sm">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming Streams */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Upcoming Scheduled Streams</h3>
        <div className="space-y-3">
          {upcomingStreams.map((s, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#1a1a24] rounded-xl">
              <div>
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-white/60">{s.time}</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg text-red-400 hover:bg-red-500/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stream Tips */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Tips Today</h3>
        <div className="space-y-3">
          {tips.map((t, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#1a1a24] rounded-xl">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
                <Gift className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-white/60">{t.user} tipped</span>
              <span className="text-green-400 font-bold ml-auto">{t.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-4 gap-4">
        {["My VODs", "Overlays", "Analytics", "Schedule"].map((link) => (
          <button key={link} className="py-3 rounded-xl bg-[#252535] border border-white/10 text-white/70 hover:text-white hover:border-[#7C3AED]/50 transition-colors">
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}
