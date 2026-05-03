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
  MapPin,
  DollarSign,
  UsersRound,
  Star,
  Music,
} from "lucide-react";
import { tournaments, IMG, communities, sponsors, games, heroSlides } from "../lib/data";
import LandingFeatures from "./LandingFeatures";
import { Code, Camera, Sparkles, MessageCircle } from "lucide-react";
import { GradientIconCircle } from "./ui/GradientIconCircle";

const tournamentGames = ["COD Mobile", "PUBG Mobile", "EA FC (FIFA)"];
import Splash from "./Splash";
import Header from './Header';
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
const [game, setGame] = useState("COD Mobile");
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
        msg: "Could not submit. You can DM us on Instagram @KultVibe.",
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

      <Header />

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
              Africa&apos;s competitive creator platform
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
                Create.
              </span>{" "}
              <span className="bg-gradient-to-br from-[#F59E0B] to-yellow-500 bg-clip-text text-transparent">
                Earn.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-xl text-white/70"
            >
              Africa&apos;s platform for gamers, creators, developers, musicians and culture makers
            </motion.p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:opacity-90 transition-opacity"
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
      <section id="features" className="py-24">
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
            {[
              {
                title: "Gaming & Esports",
                desc: "Daily tournaments, COD Mobile, PUBG, FIFA. Win real NGN prizes.",
                gradient: "from-purple-500 to-pink-500",
                icon: Gamepad2,
                image: "/kadyn-pierce-DM3AxUubhg0-unsplash.jpg"
              },
              {
                title: "Tech & Dev Community",
                desc: "CTF competitions, hackathons, bug bounty leaderboards. Africa's home for competitive coders.",
                gradient: "from-cyan-400 to-blue-500",
                icon: Code,
                image: "/setup1.jpg"
              },
              {
                title: "Music & Entertainment",
                desc: "Beat battles, live performances, Afrobeats culture. Stream your art to Africa.",
                gradient: "from-pink-500 to-rose-500",
                icon: Music,
                image: "/afrobeat2.jpg"
              },
              {
                title: "Creator Economy",
                desc: "Brand deals from MTN, Spotify Africa, Jumia. Every creative vertical.",
                gradient: "from-yellow-400 to-orange-500",
                icon: Star,
                image: "/african_vlog.jpg"
              }
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl h-48 lg:h-56 bg-[#252535] border border-white/10 hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt="" 
                    className="w-full h-full object-cover brightness-50" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                </div>
                <div className="relative p-6 h-full flex flex-col justify-end">
                  <GradientIconCircle icon={feature.icon} gradient={feature.gradient} />
                  <h3 className="text-xl font-bold mt-3 mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-24 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Upcoming Tournaments
            </h2>
            <p className="text-white/60 max-w-xl">
              Compete for real prizes. Register now before spots run out.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tournaments.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#252535] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252535] via-transparent to-transparent" />
                  {/* Game badge at top-left */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] px-2 py-1 rounded-full bg-black/70 text-white font-medium">
                      {tournamentGames[i]}
                    </span>
                  </div>
                  {/* Tag badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border border-white/10 bg-black/60 text-white/80">
                      {t.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{t.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#F59E0B]" />
                      <span className="text-[#F59E0B] font-bold text-lg">
                        {t.prize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <UsersRound className="w-4 h-4" />
                      <span className="text-sm">{t.spots} spots</span>
                    </div>
                  </div>
                  <div className="mt-3 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full"
                      style={{ width: `${Math.round((1 - (t.spots - 10) / t.spots) * 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    {Math.floor(t.spots * 0.8)} spots remaining
                  </p>
                  <button className="mt-4 w-full rounded-xl py-2.5 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="py-24 border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Top Earners This Week
            </h2>
            <a href="#waitlist" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
              Join the leaderboard →
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0f] overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-5 py-3 text-xs font-semibold text-white/60 uppercase tracking-wide border-b border-white/10">
              <div className="col-span-2">Rank</div>
              <div className="col-span-4">Player</div>
              <div className="col-span-3">Game</div>
              <div className="col-span-2">Region</div>
              <div className="col-span-1 text-right">Earnings</div>
            </div>
            {[
              { rank: 1, handle: "@GhostAlpha", game: "COD Mobile", region: "Lagos", earnings: "₦45,000" },
              { rank: 2, handle: "@ZuluSquad", game: "PUBG Mobile", region: "Abuja", earnings: "₦38,500" },
              { rank: 3, handle: "@Kelechi", game: "EA FC (FIFA)", region: "PH", earnings: "₦29,000" },
              { rank: 4, handle: "@Ama", game: "Free Fire", region: "Kano", earnings: "₦21,500" },
              { rank: 5, handle: "@Shadow", game: "COD Mobile", region: "Lagos", earnings: "₦18,000" },
            ].map((player, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 px-5 py-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="col-span-2">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                    player.rank === 1 
                      ? "bg-[#F59E0B] text-black" 
                      : "bg-fuchsia-500/20 text-fuchsia-300"
                  }`}>
                    {player.rank}
                  </span>
                </div>
                <div className="col-span-4 font-semibold text-white">{player.handle}</div>
                <div className="col-span-3 text-white/70">{player.game}</div>
                <div className="col-span-2 flex items-center gap-1 text-white/70">
                  <MapPin className="w-3 h-3" />
                  {player.region}
                </div>
                <div className="col-span-1 text-right font-bold text-[#F59E0B]">{player.earnings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KULTVIBE */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">Why KultVibe?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-[400px] group">
              <img src="/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg" alt="Built for Africa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/75" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] mb-4">
                  <Gamepad2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Built for Africa</h3>
                <p className="text-white/70">Low-data streaming, NGN payouts, and tournaments designed for Nigerian internet realities</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[400px] group">
              <img src="/emediong-umoh-63Md7MbwXPg-unsplash.jpg" alt="Real Prize Money" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/75" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#F59E0B] to-orange-600 mb-4">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Real Prize Money</h3>
                <p className="text-white/70">Win daily tournaments and get paid instantly via Paystack and Flutterwave — no delays, no USD conversion</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[400px] group">
              <img src="/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg" alt="Creator Economy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/75" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Creator Economy</h3>
                <p className="text-white/70">Go from bedroom streamer to brand ambassador. KultVibe&apos;s Creator tier connects you directly with MTN, Red Bull, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STREAMS */}
      <StreamsSection />

      {/* FOR CREATORS */}
      <section id="creators" className="py-24 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={IMG.influencerHero}
                  alt="Creator"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
                <Star className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              For Every Creator
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Stop chasing brands. Let brands find you.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "✦", title: "Brand Deal Marketplace", desc: "MTN, Red Bull, Paystack find YOU" },
                  { icon: "✦", title: "Verified Creator Badge", desc: "Stand out from every basic streamer" },
                  { icon: "✦", title: "Auto Media Kit", desc: "One click PDF for brand pitches" },
                  { icon: "✦", title: "Watch Party Hosting", desc: "Own the biggest tournament moments" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#7C3AED] text-lg">{feature.icon}</span>
                    <div>
                      <span className="font-semibold">{feature.title}</span>
                      <span className="text-white/60"> — {feature.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/creators"
                className="inline-flex items-center gap-2 mt-8 rounded-xl px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:opacity-90 transition-opacity"
              >
                Become a Creator
              </a>
            </div>
          </div>
        </div>
      </section>

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
{["COD Mobile", "PUBG Mobile", "EA FC (FIFA)"].map((g) => (
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
      <footer className="py-10 border-t border-[#3D3D55] bg-[#0A0A0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/30">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <span className="text-sm text-white/70">
                © 2025 KultVibe. Built for the continent.
              </span>
            </div>
            <div className="flex items-center gap-5 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Telegram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
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
          className="block text-center rounded-2xl py-3 font-semibold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Shiny button style (kept inline so no extra CSS import needed) */}
      <style>{`.shiny{background:linear-gradient(180deg,#fff,#fff) padding-box,linear-gradient(120deg,#f0abfc,#93c5fd) border-box;border:2px solid transparent;color:#0a0a0a;box-shadow:0 8px 30px rgba(240,171,252,.25),0 2px 8px rgba(147,197,253,.2)}.shiny:hover{box-shadow:0 12px 36px rgba(240,171,252,.35),0 3px 12px rgba(147,197,253,.3)}`}</style>
    </div>
  );
}
