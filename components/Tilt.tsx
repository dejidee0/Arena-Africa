"use client";
import React, { useState } from "react";
export default function Tilt({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<{ transform: string } | undefined>();
  return (
    <div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const rx = (py * -8).toFixed(2);
        const ry = (px * 8).toFixed(2);
        setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)` });
      }}
      onMouseLeave={() => setStyle({ transform: `perspective(900px) rotateX(0deg) rotateY(0deg)` })}
      style={style}
      className="transition-transform will-change-transform"
    >
      {children}
    </div>
  );
}