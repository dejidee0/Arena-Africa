"use client"
import Image from 'next/image'
import { Gamepad2, Code, Star, Music, Trophy, Sparkles, Users, MapPin, MessageSquare, ThumbsUp, Clock, Search } from 'lucide-react'

const communities = [
  {
    name: 'Lagos Gaming Hub',
    image: '/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg',
    icon: Gamepad2,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    members: '4,280',
    location: 'Lagos',
    description: 'The premier gaming community for Lagos and surrounding areas. Tournaments, meetups, and online events weekly.',
    badge: 'Gaming',
    badgeColor: 'bg-purple-500/20 text-purple-400',
  },
  {
    name: 'Naija Dev & Hackers',
    image: '/hack2.jpg',
    icon: Code,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/20',
    members: '2,150',
    location: 'Nigeria',
    description: 'CTF challenges, hackathons, and developer meetups for Nigeria\'s tech-savvy community.',
    badge: 'Tech & Dev',
    badgeColor: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    name: 'Accra Creators Circle',
    image: '/african_vlog.jpg',
    icon: Star,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/20',
    members: '1,890',
    location: 'Accra',
    description: 'Ghanaian content creators sharing stories, tips, and collaborating on brand deals.',
    badge: 'Lifestyle',
    badgeColor: 'bg-yellow-500/20 text-yellow-400',
  },
  {
    name: 'Afrobeats Connect',
    image: '/afrobeat2.jpg',
    icon: Music,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/20',
    members: '3,420',
    location: 'West Africa',
    description: 'Beat producers, DJs, and music lovers from across West Africa. Share tracks, get feedback, win battles.',
    badge: 'Music',
    badgeColor: 'bg-pink-500/20 text-pink-400',
  },
  {
    name: 'SA Esports Network',
    image: '/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg',
    icon: Trophy,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/20',
    members: '1,340',
    location: 'South Africa',
    description: 'South Africa\'s fastest-growing esports community. Professional players, coaches, and fans welcome.',
    badge: 'Gaming',
    badgeColor: 'bg-orange-500/20 text-orange-400',
  },
  {
    name: 'Fashion Africa',
    image: '/tim-tim-bwOb9qluXgA-unsplash.jpg',
    icon: Sparkles,
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/20',
    members: '2,670',
    location: 'Pan-Africa',
    description: 'African fashion designers, stylists, and influencers celebrating African fashion and culture.',
    badge: 'Fashion',
    badgeColor: 'bg-teal-500/20 text-teal-400',
  },
]

const discussions = [
  {
    avatar: 'GA',
    avatarColor: 'from-purple-500 to-indigo-600',
    handle: '@GhostAlpha',
    community: 'Lagos Gaming Hub',
    communityColor: 'bg-purple-500/20 text-purple-400',
    title: 'CODM Season 5 meta has completely shifted — here\'s what\'s working for me',
    time: '12 min ago',
    replies: 47,
    upvotes: 183,
  },
  {
    avatar: 'NC',
    avatarColor: 'from-cyan-500 to-blue-600',
    handle: '@NaijaCTF',
    community: 'Naija Dev & Hackers',
    communityColor: 'bg-cyan-500/20 text-cyan-400',
    title: 'Breaking down this month\'s challenge — Binary Exploitation walkthroughs inside',
    time: '34 min ago',
    replies: 28,
    upvotes: 96,
  },
  {
    avatar: 'AK',
    avatarColor: 'from-pink-500 to-rose-600',
    handle: '@AfrobeatKing',
    community: 'Afrobeats Connect',
    communityColor: 'bg-pink-500/20 text-pink-400',
    title: 'Dropped my entry for the Beat Battle — feedback needed! 🎵',
    time: '1 hr ago',
    replies: 62,
    upvotes: 241,
  },
  {
    avatar: 'LV',
    avatarColor: 'from-teal-500 to-emerald-600',
    handle: '@LagosVlog',
    community: 'Accra Creators Circle',
    communityColor: 'bg-yellow-500/20 text-yellow-400',
    title: 'How I grew from 0 to 44K followers in 6 months — full breakdown thread',
    time: '2 hrs ago',
    replies: 85,
    upvotes: 312,
  },
  {
    avatar: 'TS',
    avatarColor: 'from-green-500 to-teal-600',
    handle: '@TemiStreams',
    community: 'Lagos Gaming Hub',
    communityColor: 'bg-purple-500/20 text-purple-400',
    title: 'Anyone want to squad up for the Arena Africa CODM Cup? Looking for 2 more',
    time: '3 hrs ago',
    replies: 19,
    upvotes: 54,
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-[#0A0A0F] to-pink-900/20 border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
            <Users className="w-3 h-3" /> 15,750+ Community Members
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Find Your Community
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Connect with gamers, creators, hackers, musicians and more across Africa. Your people are here.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search communities by name, category or location..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 text-sm transition-all"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 pt-12 space-y-16">
        {/* Community Cards */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Active Communities</h2>
            <button className="text-purple-400 text-sm hover:text-purple-300 border border-purple-500/30 px-4 py-2 rounded-xl hover:bg-purple-500/10 transition-all">
              + Create Community
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all bg-[#252535] group flex flex-col">
                {/* Image */}
                <div className="relative h-40">
                  <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-10 h-10 rounded-xl ${c.iconBg} backdrop-blur-sm flex items-center justify-center border border-white/10`}>
                      <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${c.badgeColor}`}>{c.badge}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base mb-1">{c.name}</h3>
                  <p className="text-white/50 text-xs mb-3 leading-relaxed">{c.description}</p>
                  <div className="flex items-center gap-4 mb-4 mt-auto">
                    <span className="flex items-center gap-1.5 text-white/50 text-xs">
                      <Users className="w-3.5 h-3.5" /> {c.members} members
                    </span>
                    <span className="flex items-center gap-1.5 text-white/50 text-xs">
                      <MapPin className="w-3.5 h-3.5" /> {c.location}
                    </span>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                    Join Community
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Discussions */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Trending Discussions</h2>
            <button className="text-purple-400 text-sm hover:text-purple-300 border border-purple-500/30 px-4 py-2 rounded-xl hover:bg-purple-500/10 transition-all">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {discussions.map((d, i) => (
              <div key={i} className="rounded-2xl border border-white/10 hover:border-white/20 transition-all bg-[#252535] p-5 cursor-pointer group">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {d.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-white text-sm font-semibold">{d.handle}</span>
                      <span className="text-white/30 text-xs">in</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${d.communityColor}`}>{d.community}</span>
                      <span className="flex items-center gap-1 text-white/30 text-xs ml-auto">
                        <Clock className="w-3 h-3" /> {d.time}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors leading-snug mb-3">
                      {d.title}
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-white/40 text-xs hover:text-purple-400 transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" /> {d.upvotes}
                      </button>
                      <button className="flex items-center gap-1.5 text-white/40 text-xs hover:text-purple-400 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" /> {d.replies} replies
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
