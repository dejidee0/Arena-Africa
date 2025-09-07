export const IMG = {
  hero1: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1400&auto=format&fit=crop",
  hero2: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
  hero3: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
  stream: "https://images.unsplash.com/photo-1592179907101-8879f920b3a8?q=80&w=1600&auto=format&fit=crop",
  cover1: "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1400&auto=format&fit=crop",
  cover2: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
  cover3: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
  cover4: "https://images.unsplash.com/photo-1608451643043-6a0b0b5c7193?q=80&w=1400&auto=format&fit=crop",
};

export const heroSlides = [
  { src: IMG.hero1, label: "Live Finals" },
  { src: IMG.hero2, label: "Controllers" },
  { src: IMG.hero3, label: "Pro Setups" },
];

export const games = ["COD Mobile", "PUBG Mobile", "EA FC (FIFA)", "Free Fire", "Valorant (Mobile)"];

export const sponsors = [
  { name: "MTN (Coming Soon)", logo: "🟡" },
  { name: "Airtel (Coming Soon)", logo: "🔴" },
  { name: "Paystack", logo: "💳" },
  { name: "Flutterwave", logo: "🌊" },
  { name: "Red Bull", logo: "🪽" },
  { name: "Monster Energy", logo: "⚡" },
  { name: "YouTube Gaming", logo: "▶️" },
];

export const features = [
  { iconName: "PlayCircle", title: "Live Streams, Low Data", desc: "Adaptive quality built for Nigeria. Go live from your phone in seconds." },
  { iconName: "Trophy", title: "Daily & Weekly Tournaments", desc: "Auto brackets, verified results, and instant leaderboards." },
  { iconName: "DollarSign", title: "Instant Payouts", desc: "Winners get paid fast via Paystack/Flutterwave." },
  { iconName: "ShieldCheck", title: "Anti‑Cheat & Fair Play", desc: "Screen capture checks, referees, and dispute resolution." },
];

export type Stream = {
  id: string;
  title: string;
  streamer: string;
  game: string;
  viewers: number;
  cover: string;
  language?: string;
  region?: string;
  tags?: string[];
  url?: string;
};

export const streams: Stream[] = [
  { id: "s1", title: "CODM — Lagos Qualifiers", streamer: "@GhostAlpha", game: "COD Mobile", viewers: 1280, cover: IMG.cover1, language: "EN", region: "Lagos", tags: ["Ranked", "Nigeria", "Controller"], url: "#" },
  { id: "s2", title: "PUBG Naija Royale — Squad Push", streamer: "@ZuluSquad", game: "PUBG Mobile", viewers: 940, cover: IMG.cover2, language: "EN", region: "Abuja", tags: ["TPP", "Squads", "Africa"], url: "#" },
  { id: "s3", title: "EA FC Street League — Semi Finals", streamer: "@Kelechi", game: "EA FC (FIFA)", viewers: 610, cover: IMG.cover3, language: "EN", region: "PH", tags: ["1v1", "Console", "Skill moves"], url: "#" },
  { id: "s4", title: "Free Fire Rush — Ranked Grind", streamer: "@Ama", game: "Free Fire", viewers: 420, cover: IMG.cover4, language: "EN", region: "Kano", tags: ["Fast pace", "Headshots"], url: "#" },
];

export const streamGames = ["All", ...Array.from(new Set(streams.map((s) => s.game)))];
export const tournaments = [
  { name: "Lagos Arena — CODM Cup", prize: "₦100,000 pool", spots: 128, tag: "Beginners & Pros" },
  { name: "PUBG Naija Royale", prize: "₦250,000 pool", spots: 100, tag: "Squads • All Regions" },
  { name: "EA FC Street League", prize: "₦75,000 pool", spots: 64, tag: "1v1 • Console/Mobile" },
];