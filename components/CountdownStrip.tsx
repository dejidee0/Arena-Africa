"use client";
import React, { useEffect, useState } from "react";
function useCountdown(targetMs: number) {
  const [left, setLeft] = useState(targetMs - Date.now());
  useEffect(() => { const id = setInterval(() => setLeft(targetMs - Date.now()), 1000); return () => clearInterval(id); }, [targetMs]);
  const clamp = (n: number) => Math.max(0, n);
  const d = clamp(Math.floor(left / (1000 * 60 * 60 * 24)));
  const h = clamp(Math.floor((left / (1000 * 60 * 60)) % 24));
  const m = clamp(Math.floor((left / (1000 * 60)) % 60));
  const s = clamp(Math.floor((left / 1000) % 60));
  return { d, h, m, s };
}
export default function CountdownStrip() {
  const target = Date.now() + 1000 * 60 * 60 * 24 * 7;
  const { d, h, m, s } = useCountdown(target);
  return (
    <div className="bg-gradient-to-r from-fuchsia-600/20 via-pink-500/10 to-cyan-500/20 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs">
        <div className="uppercase tracking-[.25em] text-white/70">Season 1 Alpha Starts In</div>
        <div className="flex items-center gap-2 text-white/90">
          {[{label:'D',v:d},{label:'H',v:h},{label:'M',v:m},{label:'S',v:s}].map((t,i)=> (
            <div key={i} className="rounded-md border border-white/15 bg-black/40 px-2 py-1 font-semibold">
              <span className="tabular-nums">{String(t.v).padStart(2,'0')}</span>
              <span className="ml-1 text-white/50">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}