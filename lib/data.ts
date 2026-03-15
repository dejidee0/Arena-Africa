export const IMG = {
  hero1: "/african-american-woman-streamer-stressed-using-computer-gaming-room.jpg",
  hero2: "/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg",
  hero3: "/kadyn-pierce-DM3AxUubhg0-unsplash.jpg",
  stream: "https://images.unsplash.com/photo-1592179907101-8879f920b3a8?q=80&w=1600&auto=format&fit=crop",
  cover1: "/bradley-pelish-NPivaRqGFWw-unsplash.jpg",
  cover2: "/branden-skeli-L0Razurc1Og-unsplash.jpg",
  cover3: "/fausto-sandoval-cpLHjCUpL0o-unsplash.jpg",
  cover4: "/erik-mclean-JHKrEcjXSi8-unsplash.jpg",
  dashboardStream1: "/gamer-streaming-live.jpg",
  dashboardStream2: "/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg",
  tournament1: "/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg",
  tournament2: "/frustrated-streamer-losing-online-shooter-video-games-play-competition-computer-with-neon-lights-male-gamer-streaming-action-gameplay-feeling-sad-about-lost-shooting-championship.jpg",
  tournament3: "/emediong-umoh-63Md7MbwXPg-unsplash.jpg",
  influencerHero: "/aejaz-memon-Ifv8DUZnozA-unsplash.jpg",
  creatorHub: "/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg",
  influencer1: "/tim-tim-bwOb9qluXgA-unsplash.jpg",
  influencer2: "/daniel-lincoln-TD8uFU0v068-unsplash.jpg",
  production: "/heshan-perera-7AgpW7p4Ozs-unsplash.jpg",
  dj: "/dj.jpg",
  afro_beat1: "/afro beat1.jpg",
  afrobeat2: "/afrobeat2.jpg",
  setup1: "/setup1.jpg",
  setup2: "/setup2.jpg",
  setup3: "/setup3.jpg",
  hack1: "/hack1.jpg",
  hack2: "/hack2.jpg",
  hack3: "/hack3.jpg",
  hack4: "/hack4.jpg",
  african_vlog: "/african vlog.jpg",
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
  category?: string;
};

export const streams: Stream[] = [
  { id: "s1", title: "CODM — Lagos Qualifiers", streamer: "@GhostAlpha", game: "Gaming", viewers: 1280, cover: IMG.cover1, language: "EN", region: "Lagos", tags: ["Ranked", "Nigeria", "Controller"], url: "#", category: "Gaming" },
  { id: "s2", title: "PUBG Naija Royale — Squad Push", streamer: "@ZuluSquad", game: "Gaming", viewers: 940, cover: IMG.cover2, language: "EN", region: "Abuja", tags: ["TPP", "Squads", "Africa"], url: "#", category: "Gaming" },
  { id: "s3", title: "EA FC Street League — Semi Finals", streamer: "@Kelechi", game: "Gaming", viewers: 610, cover: IMG.cover3, language: "EN", region: "PH", tags: ["1v1", "Console", "Skill moves"], url: "#", category: "Gaming" },
  { id: "s4", title: "Free Fire Rush — Ranked Grind", streamer: "@Ama", game: "Gaming", viewers: 420, cover: IMG.cover4, language: "EN", region: "Kano", tags: ["Fast pace", "Headshots"], url: "#", category: "Gaming" },
  { id: "s5", title: "CTF Live Challenge", streamer: "@NaijaCTF", game: "Tech & Dev", viewers: 890, cover: "/hack4.jpg", category: "Tech & Dev" },
  { id: "s6", title: "Live Concert Stream", streamer: "@AfrobeatKing", game: "Music", viewers: 1120, cover: "/afrobeat2.jpg", category: "Music" },
  { id: "s7", title: "Fashion Haul + Review", streamer: "@LagosStyle", game: "Fashion", viewers: 560, cover: "/african_vlog.jpg", category: "Fashion" },
  { id: "s8", title: "React Tutorial Live", streamer: "@TechWithAma", game: "Tech & Dev", viewers: 430, cover: "/setup1.jpg", category: "Tech & Dev" },
];

export const streamCategories = ["All", "Gaming", "Tech & Dev", "Music & Entertainment", "Lifestyle", "Fashion", "Just Chatting"];

export const tournaments = [
  { name: "Lagos Arena — CODM Cup", prize: "₦100,000", spots: 128, tag: "Beginners & Pros", image: IMG.tournament1 },
  { name: "PUBG Naija Royale", prize: "₦250,000", spots: 100, tag: "Squads • All Regions", image: IMG.tournament2 },
  { name: "EA FC Street League", prize: "₦75,000", spots: 64, tag: "1v1 • Console/Mobile", image: IMG.tournament3 },
];

export type Creator = {
  id: string;
  handle: string;
  name: string;
  category: string;
  region: string;
  followers: number;
  image: string;
  verified: boolean;
};

export const creators: Creator[] = [
  { id: "c1", handle: "@TemiStreams", name: "Temi", category: "Gaming + Commentary", region: "Lagos", followers: 45200, image: "/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg", verified: true },
  { id: "c2", handle: "@AfroBoss", name: "Kofi", category: "Lifestyle Gaming", region: "Accra", followers: 28900, image: "/aejaz-memon-Ifv8DUZnozA-unsplash.jpg", verified: true },
  { id: "c3", handle: "@NeonGirlNG", name: "Amara", category: "Gaming Setup + Reviews", region: "Abuja", followers: 67100, image: "/tim-tim-bwOb9qluXgA-unsplash.jpg", verified: true },
  { id: "c4", handle: "@ZuluContent", name: "Thabo", category: "Esports Commentary", region: "Durban", followers: 19400, image: "/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg", verified: true },
  { id: "c5", handle: "@LagosLens", name: "Chidi", category: "Gaming Photography", region: "Lagos", followers: 33700, image: "/daniel-lincoln-TD8uFU0v068-unsplash.jpg", verified: true },
  { id: "c6", handle: "@GhostProductions", name: "Juma", category: "Tournament Coverage", region: "Nairobi", followers: 52000, image: "/emediong-umoh-63Md7MbwXPg-unsplash.jpg", verified: true },
  { id: "c7", handle: "@NaijaCTF", name: "NaijaCTF", category: "Ethical Hacking + CTF", region: "Lagos", followers: 38400, image: "/hack1.jpg", verified: true },
  { id: "c8", handle: "@AfrobeatKing", name: "Afrobeat King", category: "Music + Entertainment", region: "Accra", followers: 89200, image: "/afrobeat2.jpg", verified: true },
  { id: "c9", handle: "@LagosVlog", name: "Lagos Vlog", category: "Lifestyle", region: "Lagos", followers: 44100, image: "/african_vlog.jpg", verified: true },
];

export const creatorFilters = ["All", "Gaming", "Tech & Dev", "Music", "Lifestyle", "Fashion"];

export const brandDeals = [
  { id: "b1", brand: "MTN", brandInitial: "M", title: "Gaming Ambassador", amount: "₦500,000", requirements: "10k+ followers, gaming content", status: "available" },
  { id: "b2", brand: "Flutterwave", brandInitial: "F", title: "FinTech Creator", amount: "₦300,000", requirements: "Finance/Tech audience", status: "available" },
  { id: "b3", brand: "Red Bull", brandInitial: "R", title: "Energy & Esports", amount: "₦400,000", requirements: "Tournament coverage", status: "available" },
  { id: "b4", brand: "Airtel", brandInitial: "A", title: "Data Bundle Promo", amount: "₦250,000", requirements: "Nigerian audience", status: "available" },
  { id: "b5", brand: "Logitech", brandInitial: "L", title: "Gaming Gear Review", amount: "₦180,000", requirements: "Tech content creator", status: "available" },
  { id: "b6", brand: "Arena Africa", brandInitial: "A", title: "Platform Ambassador", amount: "₦600,000", requirements: "Top Creator badge", status: "available" },
];

export const activeBrandDeals = [
  { id: "ab1", brand: "MTN Nigeria", title: "Tournament Coverage", amount: "₦150,000", dueIn: 5, image: "/emediong-umoh-63Md7MbwXPg-unsplash.jpg", status: "active" },
  { id: "ab2", brand: "Red Bull", title: "Stream Sponsorship", amount: "₦200,000", dueIn: 12, image: "/heshan-perera-7AgpW7p4Ozs-unsplash.jpg", status: "active" },
  { id: "ab3", brand: "Paystack", title: "Integration Review", amount: "₦80,000", dueIn: 3, image: "/daniel-lincoln-TD8uFU0v068-unsplash.jpg", status: "active" },
];

export const communities = [
  { name: "Lagos Gaming Hub", icon: "Gamepad2", color: "from-purple-500 to-pink-500", members: 4280, region: "Lagos", image: "/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg" },
  { name: "Naija Dev & Hackers", icon: "Code", color: "from-cyan-400 to-blue-500", members: 2150, region: "Nigeria", image: "/hack2.jpg" },
  { name: "Accra Creators Circle", icon: "Star", color: "from-yellow-400 to-orange-500", members: 1890, region: "Accra", image: "/african_vlog.jpg" },
  { name: "Afrobeats Connect", icon: "Music", color: "from-pink-500 to-rose-500", members: 3420, region: "West Africa", image: "/afrobeat2.jpg" },
  { name: "SA Esports Network", icon: "Trophy", color: "from-orange-500 to-red-500", members: 1340, region: "South Africa", image: "/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg" },
  { name: "Fashion Africa", icon: "Sparkles", color: "from-teal-500 to-cyan-500", members: 2670, region: "Pan-Africa", image: "/tim-tim-bwOb9qluXgA-unsplash.jpg" },
];

export const competitions = [
  { name: "Lagos Arena CODM Cup", category: "Gaming", prize: "₦100,000", spots: "64/128", image: "/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg" },
  { name: "NaijaCTF Monthly Challenge", category: "CTF & Hacking", prize: "₦75,000", spots: "45/100 teams", image: "/hack3.jpg" },
  { name: "West Africa Build Sprint", category: "Hackathon", prize: "₦500,000", spots: "23/50 teams", image: "/setup3.jpg" },
  { name: "Afrobeats Beat Battle", category: "Music", prize: "₦80,000", spots: "18/32 artists", image: "/dj.jpg" },
  { name: "African UI Design Challenge", category: "Design", prize: "₦60,000", spots: "34/64", image: "/setup2.jpg" },
  { name: "PUBG Naija Royale", category: "Gaming", prize: "₦250,000", spots: "32/100", image: "/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg" },
];

