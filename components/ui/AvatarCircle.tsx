"use client";

import { cn } from "@/lib/utils";

interface AvatarCircleProps {
  src?: string;
  initials: string;
  gradient?: string;
  size?: number;
}

export function AvatarCircle({ src, initials, gradient = "from-purple-500 to-pink-500", size = 40 }: AvatarCircleProps) {
  const bgClass = gradient ? `bg-gradient-to-br ${gradient}` : "bg-gradient-to-br from-gray-500 to-gray-700";
  return (
    <div className={cn(`w-[${size}px] h-[${size}px] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden`, bgClass)}>
      {src ? <img src={src} alt="" className="w-full h-full object-cover" /> : initials}
    </div>
  );
}

