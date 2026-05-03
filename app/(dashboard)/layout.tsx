"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gamepad2,
  LayoutDashboard,
  Trophy,
  Gift,

  Swords,
  TrendingUp,
  Award,
  Radio,
  Video,
  BarChart2,
  Wallet,
  Coins,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Star,
  Briefcase,
  Users,
  FileText,
  PieChart,
  Crown,
} from "lucide-react";

const menuItems = [
  { section: "MAIN", items: [
    { label: "Home", href: "/dashboard", icon: LayoutDashboard },
    { label: "Tournaments", href: "/dashboard/tournaments", icon: Trophy },
    { label: "My Matches", href: "/dashboard/matches", icon: Swords },
    { label: "Rank & ELO", href: "/dashboard/rank", icon: TrendingUp },
    { label: "Achievements", href: "/dashboard/achievements", icon: Award },
  ]},
  { section: "CREATOR", items: [
    { label: "Creator Hub", href: "/dashboard/creator", icon: Star },
    { label: "Brand Deals", href: "/dashboard/brand-deals", icon: Briefcase },
    { label: "Collabs", href: "/dashboard/collabs", icon: Users },
    { label: "Media Kit", href: "/dashboard/media-kit", icon: FileText },
    { label: "Analytics", href: "/dashboard/creator-analytics", icon: PieChart },
  ]},
  { section: "STREAM", items: [
    { label: "Go Live", href: "/dashboard/live", icon: Radio },
    { label: "My VODs", href: "/dashboard/stream/vods", icon: Video },
    { label: "Analytics", href: "/dashboard/stream/analytics", icon: BarChart2 },

  ]},
  { section: "ACCOUNT", items: [
    { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { label: "Vibe Credits", href: "/dashboard/coins", icon: Coins },
    { label: "🎁 Gifts", href: "/dashboard/gifts", icon: Gift },
    { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ]},
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-60 bg-[#111118] border-r border-white/10 transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-5 border-b border-white/10">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <span className="font-semibold">KultVibe</span>
            </Link>
          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {menuItems.map((section) => (
              <div key={section.section} className="mb-4">
                <div className="px-3 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    {section.section}
                  </span>
                </div>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                        isActive
                          ? "bg-[#7C3AED]/10 text-[#7C3AED] border-l-2 border-[#7C3AED]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>

          {/* User section */}
          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#252535]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center font-bold">
                G
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">@GhostAlpha</div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F59E0B]/20 text-[#F59E0B] font-medium">
                    Diamond
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <LogOut className="w-4 h-4 text-white/60" />
              </button>
            </div>
            
            {/* Go Creator Upgrade Banner */}
            <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] cursor-pointer group">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Go Creator</span>
              </div>
              <p className="text-[10px] text-white/70 mt-1">Unlock brand deals & more</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">
              {pathname === "/dashboard" ? "Dashboard" : 
               pathname.replace("/dashboard/", "").replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-white/10 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full" />
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#252535]">
              <Wallet className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-sm font-medium">₦124,500</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center font-bold text-sm">
              G
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
