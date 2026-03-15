import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  color?: "green" | "red" | "orange" | "purple" | "gray" | "gold";
  size?: "sm" | "md";
}

const colorClasses = {
  green: "bg-green-500/10 text-green-400 border-green-500/30",
  red: "bg-red-500/10 text-red-400 border-red-500/30",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  gray: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  gold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

export function StatusBadge({ status, color = "gray", size = "md" }: StatusBadgeProps) {
  const padding = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return (
    <span className={cn("rounded-full font-medium border inline-flex items-center gap-1", padding, colorClasses[color])}>
      {status}
    </span>
  );
}

