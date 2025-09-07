"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, X as CloseIcon } from "lucide-react";

export default function Splash({ onClose }: { onClose: () => void }) {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const closedRef = useRef(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = document.querySelector(
      'meta[name="splash-audio"]'
    ) as HTMLMetaElement | null;
    if (meta?.content) {
      const a = new Audio(meta.content);
      a.preload = "auto";
      audioRef.current = a;
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!closedRef.current) handleEnter(false);
    }, 3200);
    return () => clearTimeout(id);
  }, []);

  function speakFallback() {
    try {
      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window &&
        !muted
      ) {
        const u = new SpeechSynthesisUtterance(
          "Welcome to Arena Africa by CodewithMonk Technology"
        );
        u.rate = 0.9;
        u.pitch = 0.6;
        u.volume = 1;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      }
    } catch {}
  }

  async function handleEnter(playSound = true) {
    if (closedRef.current) return;
    closedRef.current = true;

    const sfxBoom = () => {
      try {
        const Ctx =
          (
            window as unknown as {
              AudioContext?: typeof AudioContext;
              webkitAudioContext?: typeof AudioContext;
            }
          ).AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const now = ctx.currentTime;
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.0001, now);
        master.gain.exponentialRampToValueAtTime(0.9, now + 0.03);
        master.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
        master.connect(ctx.destination);
        const osc = ctx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(55, now + 0.7);
        osc.connect(master);
        osc.start(now);
        osc.stop(now + 0.7);
        const bufferSize = ctx.sampleRate * 0.4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++)
          data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const ng = ctx.createGain();
        ng.gain.setValueAtTime(0.6, now);
        ng.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        noise.connect(ng);
        ng.connect(master);
        noise.start(now);
        noise.stop(now + 0.4);
      } catch {}
    };

    if (playSound && !muted) {
      let played = false;
      try {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          played = true;
        }
      } catch {}
      if (!played) {
        sfxBoom();
        speakFallback();
      }
      setTimeout(() => onClose(), 650);
    } else {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[52rem] h-[52rem] rounded-full blur-3xl bg-gradient-to-tr from-red-600/25 via-fuchsia-500/25 to-amber-400/20 animate-[aurora_16s_linear_infinite]" />
        <div className="absolute -bottom-32 -left-24 w-[52rem] h-[52rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-400/25 via-red-500/20 to-fuchsia-400/20 animate-[aurora_20s_linear_infinite]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,.2) 0, rgba(255,255,255,.2) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mx-auto max-w-3xl text-center px-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] uppercase tracking-[.3em] text-white/70">
          <span>Welcome</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-black leading-tight">
          <span className="glitch" data-text="ARENA AFRICA">
            ARENA AFRICA
          </span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-white/70">
          by CodewithMonk Technology
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => handleEnter(true)}
            className="inline-flex items-center gap-2 rounded-2xl shiny px-5 py-3 text-sm font-semibold"
          >
            Enter Arena
          </button>
          <button
            onClick={() => setMuted((m) => !m)}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold hover:bg-white/5"
          >
            {muted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}{" "}
            {muted ? "Muted" : "Sound On"}
          </button>
        </div>
        <button
          onClick={() => handleEnter(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white inline-flex items-center gap-2 text-sm"
        >
          <CloseIcon className="w-4 h-4" /> Skip
        </button>
      </motion.div>

      <style>{`
        .glitch { position: relative; display: inline-block; text-shadow: 0 0 0 transparent; }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; left: 0; top: 0; width: 100%; height: 100%; mix-blend-mode: screen; }
        .glitch::before { color: #f472b6; transform: translate(2px, -1px); animation: glitch1 2.2s infinite linear alternate-reverse; }
        .glitch::after { color: #93c5fd; transform: translate(-2px, 1px); animation: glitch2 1.8s infinite linear alternate; }
        @keyframes glitch1 { 0%{ clip-path: inset(0 0 85% 0);} 20%{ clip-path: inset(0 0 20% 0);} 40%{ clip-path: inset(0 0 60% 0);} 60%{ clip-path: inset(0 0 30% 0);} 80%{ clip-path: inset(0 0 10% 0);} 100%{ clip-path: inset(0 0 85% 0);} }
        @keyframes glitch2 { 0%{ clip-path: inset(85% 0 0 0);} 20%{ clip-path: inset(20% 0 0 0);} 40%{ clip-path: inset(60% 0 0 0);} 60%{ clip-path: inset(30% 0 0 0);} 80%{ clip-path: inset(10% 0 0 0);} 100%{ clip-path: inset(85% 0 0 0);} }
      `}</style>
    </div>
  );
}
