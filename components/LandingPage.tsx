"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Zap,
  PlayCircle,
  Crown,
  Activity,
  Users,
  Trophy,
} from "lucide-react";
import { features, games, heroSlides, sponsors } from "../lib/data";
import Splash from "./Splash";
import SparkLayer from "./SparkLayer";
import CountdownStrip from "./CountdownStrip";
import Aurora from "./Aurora";
import SponsorMarquee from "./SponsorMarquee";
import HeroSlider from "./HeroSlider";
import Tilt from "./Tilt";
import StreamsSection from "./Streams";

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [game, setGame] = useState(games[0]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );
  const [navOpen, setNavOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = showSplash ? "hidden" : prev || "";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showSplash]);

  const webhook = useMemo(() => {
    if (typeof document !== "undefined") {
      const meta = document.querySelector(
        'meta[name="waitlist-webhook"]'
      ) as HTMLMetaElement | null;
      if (meta?.content) return meta.content;
    }
    return "/api/waitlist";
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !name) {
      setStatus({ ok: false, msg: "Please enter your name and email." });
      return;
    }
    setLoading(true);
    setStatus(null);
    const payload = { name, email, handle, game, ts: new Date().toISOString() };
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus({
        ok: true,
        msg: "You're on the waitlist! Check your inbox for confirmation.",
      });
      setName("");
      setEmail("");
      setHandle("");
      setGame(games[0]);
    } catch (err) {
      setStatus({
        ok: false,
        msg: "Could not submit. You can DM us on Instagram @ArenaAfrica.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-fuchsia-500/20 selection:text-fuchsia-200">
      {showSplash && <Splash onClose={() => setShowSplash(false)} />}

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-fuchsia-400 via-pink-300 to-blue-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Ambient gradients & spark layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.10),transparent_40%)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <SparkLayer />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/30">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">Arena Africa</span>
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/60">
              Beta
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#tournaments" className="hover:text-white">
              Tournaments
            </a>
            <a href="#streams" className="hover:text-white">
              Streams
            </a>
            <a href="#waitlist" className="hover:text-white">
              Join Waitlist
            </a>
          </div>
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setNavOpen((v) => !v)}
              className="rounded-lg border border-white/10 p-2"
            >
              <span className="sr-only">Menu</span>
              {navOpen ? <span>✕</span> : <span>☰</span>}
            </button>
          </div>
          <a
            href="#waitlist"
            className="hidden md:inline-flex items-center gap-2 rounded-xl shiny px-4 py-2 text-sm font-semibold"
          >
            <Zap className="w-4 h-4" /> Get Early Access
          </a>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-sm text-white/80">
              <a
                onClick={() => setNavOpen(false)}
                href="#features"
                className="hover:text-white"
              >
                Features
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#tournaments"
                className="hover:text-white"
              >
                Tournaments
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#streams"
                className="hover:text-white"
              >
                Streams
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#waitlist"
                className="hover:text-white"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* COUNTDOWN STRIP */}
      <CountdownStrip />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <Aurora />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[.3em] text-white/60"
            >
              Africa&apos;s Esports + Streaming Arena
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
            >
              Compete.{" "}
              <span className="bg-gradient-to-br from-fuchsia-400 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Stream.
              </span>{" "}
              Earn.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-xl text-white/70"
            >
              Tournaments every week for CODM, PUBG, EA FC and more. Go live
              from your phone, build a fanbase, and cash out your wins — all in
              one app built for Nigeria.
            </motion.p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-2xl shiny px-5 py-3 text-sm font-semibold"
              >
                <Crown className="w-4 h-4" /> Join the Waitlist
              </a>
              <a
                href="#streams"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5"
              >
                <PlayCircle className="w-4 h-4" /> Watch Live
              </a>
            </div>
            <div className="mt-8 max-w-2xl">
              <SponsorMarquee items={sponsors} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
              {[
                {
                  icon: <Users className="w-4 h-4" />,
                  label: "Players",
                  value: "12,480+",
                },
                {
                  icon: <Trophy className="w-4 h-4" />,
                  label: "Payouts",
                  value: "₦14.2M",
                },
                {
                  icon: <Activity className="w-4 h-4" />,
                  label: "Live mins",
                  value: "3.1M+",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="text-xs text-white/60 flex items-center gap-2">
                    {s.icon}
                    {s.label}
                  </div>
                  <div className="mt-1 font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <Tilt>
            <HeroSlider items={heroSlides} />
          </Tilt>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Built for Nigeria. Ready for Africa.
            </h2>
            <p className="text-white/60 max-w-xl">
              Low-data streaming, instant payouts, and a true pathway from
              bedroom gamer to sponsored pro.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent"
              >
                <div className="rounded-2xl h-full w-full border border-white/10 bg-white/5 p-5 hover:bg-white/10">
                  <div className="flex items-center gap-2 text-fuchsia-300">
                    {/* icon injected in page */}
                    <span className="text-sm font-semibold">{f.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STREAMS */}
      <StreamsSection />

      {/* WAITLIST */}
      <section
        id="waitlist"
        className="py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-black/40"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Be First In The Arena
          </h3>
          <p className="mt-2 text-white/70">
            Join the early access waitlist. Get priority invites to closed
            tournaments, creator tools, and sponsor perks.
          </p>
          <form
            onSubmit={submit}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left"
          >
            <div className="col-span-1">
              <label className="text-xs text-white/60">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-fuchsia-400"
                placeholder="Ada Love"
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs text-white/60">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-fuchsia-400"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs text-white/60">
                Gamer tag (optional)
              </label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-fuchsia-400"
                placeholder="@GhostAlpha"
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs text-white/60">Primary game</label>
              <select
                value={game}
                onChange={(e) => setGame(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-fuchsia-400"
              >
                {games.map((g) => (
                  <option key={g} value={g} className="bg-[#0b0b10]">
                    {g}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className={classNames(
                  "inline-flex items-center justify-center gap-2 rounded-2xl shiny px-5 py-3 text-sm font-semibold",
                  "active:scale-[.99] disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {loading ? "Joining…" : <>Join Waitlist</>}
              </button>
              <p className="text-xs text-white/50">
                By joining, you agree to our{" "}
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="#"
                >
                  Terms
                </a>{" "}
                &{" "}
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="#"
                >
                  Privacy
                </a>
                .
              </p>
            </div>
          </form>
          {status && (
            <div
              className={classNames(
                "mt-4 rounded-xl border px-4 py-3 text-sm",
                status.ok
                  ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                  : "border-rose-400/40 bg-rose-500/10 text-rose-200"
              )}
            >
              {status.msg}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white/70">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/30">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <span className="text-sm">
                © {new Date().getFullYear()} Arena Africa
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white">
                Discord
              </a>
              <a href="#" className="hover:text-white">
                Telegram
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                X
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-3 inset-x-3 z-40 md:hidden">
        <a
          href="#waitlist"
          className="block text-center rounded-2xl shiny py-3 font-semibold border border-white"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Shiny button style (kept inline so no extra CSS import needed) */}
      <style>{`.shiny{background:linear-gradient(180deg,#fff,#fff) padding-box,linear-gradient(120deg,#f0abfc,#93c5fd) border-box;border:2px solid transparent;color:#0a0a0a;box-shadow:0 8px 30px rgba(240,171,252,.25),0 2px 8px rgba(147,197,253,.2)}.shiny:hover{box-shadow:0 12px 36px rgba(240,171,252,.35),0 3px 12px rgba(147,197,253,.3)}`}</style>
    </div>
  );
}
