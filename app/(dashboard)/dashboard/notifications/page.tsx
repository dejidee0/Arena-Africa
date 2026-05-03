"use client";

import React, { useState } from "react";
import { Gamepad2, Clock, Wallet, Trophy, Bell, User, CheckCircle, ArrowUpRight, Settings, Star, Briefcase, Shield, Zap, Circle } from "lucide-react";

const notifications = [
  { id: 1, type: "match", title: "Your match vs @KillerX starts in 15 minutes", icon: Clock, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", time: "5min ago", unread: true },
  { id: 2, type: "payment", title: "₦15,000 credited to your wallet", icon: Wallet, iconBg: "bg-green-500/20", iconColor: "text-green-400", time: "1h ago", unread: true },
  { id: 3, type: "tournament", title: "CODM Lagos Cup quarterfinals bracket ready", icon: Trophy, iconBg: "bg-yellow-500/20", iconColor: "text-yellow-400", time: "2h ago", unread: true },
  { id: 4, type: "social", title: "@ZuluFan started following you", icon: User, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", time: "3h ago", unread: false },
  { id: 5, type: "tournament", title: "PUBG Naija Royale registration closes in 2 hours", icon: Bell, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", time: "4h ago", unread: false },
  { id: 6, type: "match", title: "Result confirmed: You won vs @ProGamer +25 ELO", icon: CheckCircle, iconBg: "bg-green-500/20", iconColor: "text-green-400", time: "5h ago", unread: false },
  { id: 7, type: "payment", title: "Withdrawal ₦50,000 completed", icon: ArrowUpRight, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", time: "Yesterday", unread: false },
  { id: 8, type: "system", title: "Stream key regenerated", icon: Settings, iconBg: "bg-white/10", iconColor: "text-white/60", time: "Yesterday", unread: false },
  { id: 9, type: "achievement", title: "Achievement unlocked: Tournament Veteran!", icon: Star, iconBg: "bg-yellow-500/20", iconColor: "text-yellow-400", time: "2 days ago", unread: false },
  { id: 10, type: "creator", title: "New brand deal: MTN Gaming Ambassador ₦500,000", icon: Briefcase, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", time: "2 days ago", unread: false },
  { id: 11, type: "match", title: "Dispute resolved in your favour vs @Shadow", icon: Shield, iconBg: "bg-green-500/20", iconColor: "text-green-400", time: "3 days ago", unread: false },
  { id: 12, type: "social", title: "@NaijaPro is now following you", icon: User, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", time: "3 days ago", unread: false },
  { id: 13, type: "tournament", title: "Free Fire Kano Open starts tomorrow", icon: Trophy, iconBg: "bg-yellow-500/20", iconColor: "text-yellow-400", time: "4 days ago", unread: false },
  { id: 14, type: "payment", title: "Vibe Credits purchase confirmed: 1,500 VC", icon: Wallet, iconBg: "bg-yellow-500/20", iconColor: "text-yellow-400", time: "4 days ago", unread: false },
  { id: 15, type: "system", title: "Welcome to KultVibe! Complete your profile", icon: Zap, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", time: "1 week ago", unread: false },
];

const filters = ["All", "Matches", "Tournaments", "Payments", "Social", "System"];

export default function NotificationsPage() {
  const [filter, setFilter] = useState("All");
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Notifications</h2>
          {unreadCount > 0 && (
            <span className="px-2 py-1 rounded-full bg-[#7C3AED] text-white text-xs font-bold">
              {unreadCount} new
            </span>
          )}
        </div>
        <button className="text-sm text-white/60 hover:text-white">
          Mark All Read
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              filter === f
                ? "bg-[#7C3AED] text-white"
                : "bg-[#252535] text-white/70 border border-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-2">
        {notifications.map((n) => {
          const IconComponent = n.icon;
          return (
            <div
              key={n.id}
              className={`relative p-4 rounded-xl border transition-colors ${
                n.unread
                  ? "bg-[#252535] border-l-4 border-l-[#7C3AED] border-white/10"
                  : "bg-[#252535]/50 border-white/5 hover:bg-[#252535]"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${n.iconBg} flex items-center justify-center`}>
                  <IconComponent className={`w-5 h-5 ${n.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`font-medium ${n.unread ? "text-white" : "text-white/80"}`}>
                    {n.title}
                  </p>
                  <p className="text-sm text-white/40 mt-1">{n.time}</p>
                </div>

                {/* Unread Dot */}
                {n.unread && (
                  <div className="flex-shrink-0">
                    <Circle className="w-2 h-2 fill-[#7C3AED] text-[#7C3AED]" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
