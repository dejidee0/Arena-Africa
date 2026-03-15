"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Trophy, Users, DollarSign, Gamepad2, Code, Music, Palette, Camera, Filter, ChevronDown } from 'lucide-react'

const competitions = [
  {
    title: 'Lagos Arena CODM Cup',
    image: '/kadyn-pierce-PruhDU1m1Yk-unsplash.jpg',
    badge: 'Gaming',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    prize: '₦100,000',
    spotsTotal: 128,
    spotsFilled: 64,
    category: 'Gaming',
    status: 'Open',
    statusColor: 'bg-green-500/20 text-green-400',
    endsIn: '5 days',
  },
  {
    title: 'NaijaCTF Monthly',
    image: '/hack3.jpg',
    badge: 'CTF & Hacking',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    prize: '₦75,000',
    spotsTotal: 100,
    spotsFilled: 45,
    category: 'CTF & Hacking',
    status: 'Open',
    statusColor: 'bg-green-500/20 text-green-400',
    endsIn: '3 days',
  },
  {
    title: 'West Africa Build Sprint',
    image: '/setup3.jpg',
    badge: 'Hackathon',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    prize: '₦500,000',
    spotsTotal: 50,
    spotsFilled: 23,
    category: 'Hackathons',
    status: 'Open',
    statusColor: 'bg-green-500/20 text-green-400',
    endsIn: '13 days',
  },
  {
    title: 'Afrobeats Beat Battle',
    image: '/dj.jpg',
    badge: 'Music',
    badgeColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    prize: '₦80,000',
    spotsTotal: 32,
    spotsFilled: 18,
    category: 'Music',
    status: 'Open',
    statusColor: 'bg-green-500/20 text-green-400',
    endsIn: '8 days',
  },
  {
    title: 'African UI Design Challenge',
    image: '/setup2.jpg',
    badge: 'Design',
    badgeColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    prize: '₦60,000',
    spotsTotal: 64,
    spotsFilled: 34,
    category: 'Design',
    status: 'Open',
    statusColor: 'bg-green-500/20 text-green-400',
    endsIn: '10 days',
  },
  {
    title: 'PUBG Naija Royale',
    image: '/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg',
    badge: 'Gaming',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    prize: '₦250,000',
    spotsTotal: 100,
    spotsFilled: 32,
    category: 'Gaming',
    status: 'Open',
    statusColor: 'bg-green-500/20 text-green-400',
    endsIn: '7 days',
  },
]

const tabs = [
  { label: 'All', icon: Filter },
  { label: 'Gaming', icon: Gamepad2 },
  { label: 'CTF & Hacking', icon: Code },
  { label: 'Hackathons', icon: Code },
  { label: 'Music', icon: Music },
  { label: 'Design', icon: Palette },
  { label: 'Lifestyle', icon: Camera },
]

export default function CompetePage() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All' ? competitions : competitions.filter(c => c.category === activeTab)

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/kadyn-pierce-DM3AxUubhg0-unsplash.jpg" alt="Compete" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0A0A0F]" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium mb-4">
            <Trophy className="w-3 h-3" /> Real Prizes. Real Competition.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Compete for <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Real Prizes</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Enter tournaments, hackathons, beat battles and more - across gaming, tech, music and creative categories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 -mt-8 mb-12 relative z-10">
          {[
            { icon: Trophy, label: 'Active Competitions', value: '47', color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-500/10' },
            { icon: DollarSign, label: 'Total Prize Pool', value: '₦3.8M', color: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' },
            { icon: Gamepad2, label: 'Categories', value: '6', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-[#252535] border border-white/10 p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${stat.label === 'Total Prize Pool' ? 'text-[#F59E0B]' : 'text-white'}`}>{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.label
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 ml-auto">
            <Filter className="w-3.5 h-3.5" /> Sort <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Competition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((comp) => {
            const pct = Math.round((comp.spotsFilled / comp.spotsTotal) * 100)
            return (
              <div key={comp.title} className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all bg-[#252535] group flex flex-col">
                <div className="relative h-48">
                  <Image src={comp.image} alt={comp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${comp.badgeColor}`}>{comp.badge}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${comp.statusColor}`}>{comp.status}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-bold text-white text-base leading-tight">{comp.title}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white/40 text-xs mb-1">Prize Pool</p>
                      <p className="text-[#F59E0B] text-xl font-bold">{comp.prize}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-xs mb-1">Ends in</p>
                      <p className="text-white font-semibold text-sm">{comp.endsIn}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-white/50 mb-1.5">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {comp.spotsFilled}/{comp.spotsTotal} spots</span>
                      <span>{pct}% full</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <button className="mt-auto w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    Register Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white/20" />
            </div>
            <p className="text-white/40">No competitions in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}



