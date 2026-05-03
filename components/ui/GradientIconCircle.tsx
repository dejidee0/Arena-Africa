"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Assume utils exists or create simple cn

interface GradientIconCircleProps {
  icon: LucideIcon;
  gradient: string; // e.g. "from-purple-500 to-pink-500"
  size?: number | string;
}

export function GradientIconCircle({ icon: Icon, gradient, size = 56 }: GradientIconCircleProps) {
  const sizeNum = typeof size === 'string' ? parseInt(size) : size;
  return (
    <div className={cn(`w-[${sizeNum}px] h-[${sizeNum}px] rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl shadow-purple-500/25`)}>
      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
    </div>
  );
}

