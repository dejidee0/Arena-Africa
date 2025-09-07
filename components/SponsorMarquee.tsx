"use client";
import { motion } from "framer-motion";
export default function SponsorMarquee({ items }: { items: { name: string; logo: string }[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div className="flex items-center gap-8 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, ease: "linear", repeat: Infinity }}>
        {row.map((s, i) => (
          <div key={i} className="inline-flex items-center gap-2 text-xs text-white/70 px-2 py-1 rounded-full border border-white/10 bg-white/5">
            <span className="text-base leading-none">{s.logo}</span>
            <span className="leading-none">{s.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}