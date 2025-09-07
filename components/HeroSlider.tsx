"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider({ items, interval = 4500 }: { items: { src: string; label: string }[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const len = items.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [interval, len]);

  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    let startX = 0; let dx = 0; let down = false;
    const onDown = (e: TouchEvent | MouseEvent) => { down = true; startX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX; };
    const onMove = (e: TouchEvent | MouseEvent) => { if (!down) return; const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX; dx = x - startX; };
    const onUp = () => { if (!down) return; down = false; if (dx < -50) next(); else if (dx > 50) prev(); dx = 0; };
    el.addEventListener('mousedown', onDown); el.addEventListener('mousemove', onMove); el.addEventListener('mouseup', onUp); el.addEventListener('mouseleave', onUp);
    el.addEventListener('touchstart', onDown, { passive: true }); el.addEventListener('touchmove', onMove, { passive: true }); el.addEventListener('touchend', onUp);
    return () => {
      el.removeEventListener('mousedown', onDown); el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseup', onUp); el.removeEventListener('mouseleave', onUp);
      el.removeEventListener('touchstart', onDown); el.removeEventListener('touchmove', onMove); el.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10">
      <div ref={trackRef} className="relative w-full h-64 sm:h-96">
        <div className="absolute inset-0 flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((it, i) => (
            <div key={i} className="relative min-w-full h-64 sm:h-96">
              <img src={it.src} alt={it.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute left-4 bottom-4 text-xs uppercase tracking-wider bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button aria-label="Previous" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur border border-white/15 p-2 hover:bg-black/60"><ChevronLeft className="w-5 h-5" /></button>
      <button aria-label="Next" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur border border-white/15 p-2 hover:bg-black/60"><ChevronRight className="w-5 h-5" /></button>
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${index === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"}`} />
        ))}
      </div>
    </div>
  );
}