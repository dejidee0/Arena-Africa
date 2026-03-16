"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Search, Gamepad2, Code, Music, Camera, Sparkles, MessageCircle, Eye, Users, TrendingUp, ArrowRight } from 'lucide-react'

const trendingItems = [
  { title: 'CTF Challenge Live', image: '/hack4.jpg', watching: '890', badge: 'Tech & Dev', badgeColor: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
  { title: 'Afrobeats Concert', image: '/afrobeat2.jpg', watching: '1,120', badge: 'Music', badgeColor: 'bg-pink-500/20 text-pink-400 border border-pink-500/30' },
  { title: 'CODM Finals', image: '/gamer-streaming-live.jpg', watching: '3,420', badge: 'Gaming', badgeColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
  { title: 'African Vlogger', image: '/african_vlog.jpg', watching: '560', badge: 'Lifestyle', badgeColor: 'bg-teal-500/20 text-teal-400 border border-teal-500/30' },
]

const categories = [
  { name: 'Gaming', image: '/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg', icon: Gamepad2, color: 'text-purple-400', bg: 'from-purple-500/30', count: '4,280 active' },
  { name: 'Tech & Dev', image: '/setup3.jpg', icon: Code, color: 'text-cyan-400', bg: 'from-cyan-500/30', count: '1,890 active' },
  { name: 'Music', image: '/afrobeat2.jpg', icon: Music, color: 'text-pink-400', bg: 'from-pink-500/30', count: '2,340 active' },
  { name: 'Lifestyle', image: '/african_vlog.jpg', icon: Camera, color: 'text-teal-400', bg: 'from-teal-500/30', count: '1,560 active' },
  { name: 'Fashion', image: '/tim-tim-bwOb9qluXgA-unsplash.jpg', icon: Sparkles, color: 'text-yellow-400', bg: 'from-yellow-500/30', count: '980 active' },
  { name: 'Just Chatting', image: '/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg', icon: MessageCircle, color: 'text-gray-400', bg: 'from-gray-500/30', count: '3,120 active' },
]

const risingCreators = [
  { handle: '@NaijaCTF', image: '/hack1.jpg', category: 'Tech & Dev', badgeColor: 'bg-cyan-500/20 text-cyan-400', followers: '38.4K' },
  { handle: '@AfrobeatKing', image: '/afrobeat2.jpg', category: 'Music', badgeColor: 'bg-pink-500/20 text-pink-400', followers: '89.2K' },
  { handle: '@LagosVlog', image: '/african_vlog.jpg', category: 'Lifestyle', badgeColor: 'bg-teal-500/20 text-teal-400', followers: '44.1K' },
  { handle: '@GhostAlpha', image: '/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg', category: 'Gaming', badgeColor: 'bg-purple-500/20 text-purple-400', followers: '67.1K' },
]

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero Search Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hack4.jpg" alt="Discover" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/60 via-[#0A0A0F]/80 to-[#0A0A0F]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
            <TrendingUp className="w-3 h-3" /> Discover Africa&apos;s Best Content
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Find What Moves You
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Explore gaming, music, tech, and lifestyle content from top African creators and competitors.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search creators, streams, tournaments, communities..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 text-base transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['CODM', 'CTF Challenge', 'Afrobeats', 'Hackathon', 'Lagos Creators', 'PUBG'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs cursor-pointer hover:text-white hover:bg-white/10 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-16">
        {/* Trending Now */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Trending Now
            </h2>
            <Link href="/streams" className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
            {trendingItems.map((item) => (
              <div key={item.title} className="flex-shrink-0 w-72 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
                <div className="relative h-44">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-red-500/90 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-xs font-bold">LIVE</span>
                  </div>
                </div>
                <div className="p-4 bg-[#252535]">
                  <p className="font-semibold text-white text-sm mb-2">{item.title}</p>
                  <div className="flex items-center gap-1.5 text-white/50 text-xs">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.watching} watching</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link href={`/streams?category=${cat.name.toLowerCase()}`} key={cat.name} className="relative rounded-2xl overflow-hidden h-36 cursor-pointer group border border-white/10 hover:border-white/20 transition-all">
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} to-black/80`} />
                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center`}>
                    <cat.icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">{cat.name}</p>
                    <p className="text-white/60 text-xs mt-0.5">{cat.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New & Rising Creators */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">New &amp; Rising Creators</h2>
            <Link href="/creators" className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {risingCreators.map((creator) => (
              <div key={creator.handle} className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all bg-[#252535] group">
                <div className="relative h-40">
                  <Image src={creator.image} alt={creator.handle} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-white text-sm mb-1.5">{creator.handle}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${creator.badgeColor}`}>{creator.category}</span>
                    <span className="text-white/50 text-xs flex items-center gap-1">
                      <Users className="w-3 h-3" />{creator.followers}
                    </span>
                  </div>
                  <button className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-medium hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Competition */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Featured Competition</h2>
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image src="/setup3.jpg" alt="West Africa Build Sprint" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="relative z-10 p-10 md:p-14 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium">Hackathon</span>
                <span className="px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium">Registration Open</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">West Africa Build Sprint</h3>
              <p className="text-white/60 text-base mb-6 leading-relaxed">
                48-hour hackathon for developers across West Africa. Build solutions that matter. Win big prizes and get noticed by top tech companies.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-white/40 text-xs mb-1">Prize Pool</p>
                  <p className="text-[#F59E0B] text-2xl font-bold">₦500,000</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <p className="text-white/40 text-xs mb-1">Teams</p>
                  <p className="text-white font-bold text-lg">23/50</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <p className="text-white/40 text-xs mb-1">Deadline</p>
                  <p className="text-white font-bold text-lg">Mar 28</p>
                </div>
              </div>
              <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity">
                Register Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
