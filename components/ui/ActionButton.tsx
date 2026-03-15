"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "danger";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function ActionButton({ children, variant = "primary", href, onClick, className, disabled }: ActionButtonProps) {
  const base = "px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-500/40 shadow-purple-500/25",
    ghost: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    danger: "border border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

