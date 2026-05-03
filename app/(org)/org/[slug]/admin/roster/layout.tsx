"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Scale, ClipboardList, AlertTriangle, Clock, History } from "lucide-react";

export default function RefereeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const menuItems = [
    { label: "Dashboard", href: "/referee", icon: Scale },
    { label: "Disputes", href: "/referee/disputes", icon: ClipboardList },
    { label: "Dispute Detail", href: "/referee/disputes/[id]", icon: AlertTriangle },
    { label: "Assigned", href: "/referee/assigned", icon: Clock },
    { label: "History", href: "/referee/history", icon: History },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#1A1A26] border-r border-white/10">
          <div className="p-6 border-b border-white/10">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Scale className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl" />
              Referee Panel
            </h1>
          </div>
          <nav className="p-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Main */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

