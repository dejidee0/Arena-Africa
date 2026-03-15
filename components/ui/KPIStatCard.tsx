"use client";

import { GradientIconCircle } from "./GradientIconCircle";
import type { LucideIcon } from "lucide-react";

interface KPIStatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  gradient: string;
  trend?: string;
}

export function KPIStatCard({ title, value, icon: Icon, gradient, trend }: KPIStatCardProps) {
  return (
    <div className="bg-[#252535] rounded-2xl border border-white/10 p-6 group hover:shadow-2xl hover:shadow-purple-500/20 transition-all">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-white/60 text-sm font-medium uppercase tracking-wide">{title}</p>
          <p className="text-2xl font-black mt-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{value}</p>
          {trend && <p className="text-xs mt-1">{trend}</p>}
        </div>
        <GradientIconCircle icon={Icon} gradient={gradient} />
      </div>
    </div>
  );
}

