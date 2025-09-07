"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SparkLayer() {
  const [sparks, setSparks] = useState<
    {
      id: number;
      top: number;
      left: number;
      size: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const generatedSparks = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      top: rand(5, 95),
      left: rand(2, 98),
      size: rand(3, 7),
      delay: rand(0, 4),
      duration: rand(3.5, 7),
    }));
    setSparks(generatedSparks);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          initial={{ y: 0, opacity: 0.3 }}
          animate={{ y: [0, -10, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
          }}
          className="absolute rounded-full bg-gradient-to-br from-fuchsia-400/60 to-blue-300/60 blur-[1px]"
        />
      ))}
    </div>
  );
}
