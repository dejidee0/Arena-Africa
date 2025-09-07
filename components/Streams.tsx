"use client";
import React, { useState } from "react";
import { PlayCircle, Eye, Heart, Share2, Clock } from "lucide-react";
import { streamGames, streams } from "../lib/data";

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

function TagChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border border-white/10 bg-black/40 text-white/70">
      {children}
    </span>
  );
}

function EqBars() {
  return (
    <span className="ml-2 inline-flex items-end gap-[3px]" aria-hidden>
      <span className="w-[3px] h-[8px] bg-red-500 animate-[eq_700ms_ease-in-out_infinite]" />
      <span
        className="w-[3px] h-[12px] bg-red-500 animate-[eq_650ms_ease-in-out_infinite]"
        style={{ animationDelay: "120ms" }}
      />
      <span
        className="w-[3px] h-[6px] bg-red-500 animate-[eq_600ms_ease-in-out_infinite]"
        style={{ animationDelay: "240ms" }}
      />
      <style>{`@keyframes eq{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1.2)}}`}</style>
    </span>
  );
}

export type Stream = (typeof streams)[number];

function StreamCard({ s }: { s: Stream }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(s.url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 group relative">
      <div className="relative aspect-video overflow-hidden">
        <img
          loading="lazy"
          src={s.cover}
          alt={s.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-red-500 text-white px-2 py-0.5 font-semibold">
            LIVE
          </span>
          <span className="rounded-full bg-black/60 px-2 py-0.5 text-white/80 border border-white/10 inline-flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {Intl.NumberFormat().format(s.viewers)}
          </span>
          <span className="rounded-full bg-black/60 px-2 py-0.5 text-white/80 border border-white/10">
            {s.game}
          </span>
        </div>
        <button className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 active:scale-95">
          <PlayCircle className="w-8 h-8" />
        </button>
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="text-sm font-semibold flex items-center">
            {s.title}
            <EqBars />
          </div>
          <div className="mt-0.5 text-xs text-white/70">
            by {s.streamer} • {s.language ?? "EN"} • {s.region ?? "NG"}
          </div>
        </div>
      </div>
      <div className="p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
        <div className="flex flex-wrap items-center gap-2">
          {s.tags?.slice(0, 3).map((t, i) => (
            <TagChip key={i}>{t}</TagChip>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-white/15 px-3 py-1 hover:bg-white/5">
            Watch
          </button>
          <button className="rounded-lg border border-white/15 px-3 py-1 hover:bg-white/5 inline-flex items-center gap-1">
            <Heart className="w-3 h-3" /> Follow
          </button>
          <button
            onClick={copy}
            className="rounded-lg border border-white/15 px-3 py-1 hover:bg-white/5 inline-flex items-center gap-1"
          >
            <Share2 className="w-3 h-3" /> Share
          </button>
        </div>
      </div>
      {copied && (
        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-1 rounded bg-white/90 text-black">
          Link copied
        </div>
      )}
    </div>
  );
}

function FeaturedStream({ s }: { s: Stream }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
      <div className="relative aspect-[16/8] overflow-hidden">
        <img
          src={s.cover}
          alt={s.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-red-500 text-white px-2 py-0.5 font-semibold">
            LIVE
          </span>
          <span className="rounded-full bg-black/60 px-2 py-0.5 text-white/80 border border-white/10 inline-flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {Intl.NumberFormat().format(s.viewers)}
          </span>
          <span className="rounded-full bg-black/60 px-2 py-0.5 text-white/80 border border-white/10">
            {s.game}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-lg sm:text-xl font-bold flex items-center">
            {s.title}
            <EqBars />
          </div>
          <div className="mt-1 text-xs text-white/80">
            by {s.streamer} • {s.language ?? "EN"} • {s.region ?? "NG"} •{" "}
            <Clock className="inline w-3 h-3 -mt-[2px]" /> Live now
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {s.tags?.slice(0, 4).map((t, i) => (
              <TagChip key={i}>{t}</TagChip>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button className="rounded-xl shiny px-4 py-2 text-sm font-semibold inline-flex items-center gap-2">
              <PlayCircle className="w-4 h-4" /> Watch Live
            </button>
            <button className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">
              Open Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StreamsSection() {
  const [filter, setFilter] = useState<string>("All");
  const filtered =
    filter === "All" ? streams : streams.filter((s) => s.game === filter);
  const featured = filtered[0] ?? streams[0];
  const others = filtered.slice(1, 4);

  return (
    <section id="streams" className="py-16 border-y border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <PlayCircle className="w-5 h-5" /> Live Right Now
          </h3>
          <a
            href="#waitlist"
            className="text-sm text-white/70 hover:text-white underline underline-offset-4"
          >
            Become a streamer →
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {streamGames.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={classNames(
                "text-xs px-3 py-1 rounded-full border",
                filter === g
                  ? "border-fuchsia-400/60 bg-fuchsia-500/10 text-white"
                  : "border-white/15 bg-black/30 text-white/70 hover:bg-white/5"
              )}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <FeaturedStream s={featured} />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {others.map((s) => (
              <StreamCard key={s.id} s={s} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="text-sm font-semibold text-white/80">Up Next</div>
          <div className="mt-3 grid sm:grid-cols-3 gap-3 text-xs">
            {[
              {
                t: "Today 7:00 PM",
                title: "CODM — Lagos Arena Quali #2",
                host: "@Shadow",
              },
              {
                t: "Today 8:30 PM",
                title: "EA FC Street League — Group B",
                host: "@Mide",
              },
              {
                t: "Tomorrow 6:00 PM",
                title: "PUBG Naija Royale — Day 2",
                host: "@ZuluSquad",
              },
            ].map((u, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 flex items-center justify-between"
              >
                <div>
                  <div className="font-medium text-white/90">{u.title}</div>
                  <div className="text-white/60">
                    {u.t} • host {u.host}
                  </div>
                </div>
                <button className="text-xs rounded-lg border border-white/15 px-3 py-1 hover:bg-white/5">
                  Remind me
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-white/50">
          * Demo imagery. Connect your real RTMP/HLS streams in-app.
        </p>
      </div>
    </section>
  );
}
