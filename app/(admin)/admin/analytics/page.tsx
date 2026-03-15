"use client"

import Image from 'next/image'
import { Users, Activity, DollarSign, TrendingUp, BarChart2, MapPin } from 'lucide-react'

const rangeTabs = ['7d', '30d', '90d', 'All Time']

const metricCards = [
  { label: 'Total Users', value: '12,480', icon: Users, color: 'from-purple-500 to-pink-500' },
  { label: 'Monthly Active', value: '12,480', icon: Activity, color: 'from-cyan-500 to-blue-500' },
  { label: 'Revenue', value: '₦485K', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
  { label: 'Growth Rate', value: '18%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
]

const mauData = [10200, 10800, 11200, 11500, 11800, 12100, 12480]
const dauData = [2800, 2900, 3000, 3100, 3150, 3200, 3240]

const revenueBreakdown = [
  { label: 'Tournament Rake', amount: '₦220K', percent: 45, color: 'bg-purple-500' },
  { label: 'Hosting Fees', amount: '₦98K', percent: 20, color: 'bg-cyan-500' },
  { label: 'Subscriptions', amount: '₦73K', percent: 15, color: 'bg-pink-500' },
  { label: 'Brand Deals', amount: '₦49K', percent: 10, color: 'bg-yellow-500' },
  { label: 'Coins', amount: '₦45K', percent: 10, color: 'bg-teal-500' },
]

const verticals = [
  { label: 'Gaming', percent: 45, color: 'bg-purple-500' },
  { label: 'Tech', percent: 18, color: 'bg-cyan-500' },
  { label: 'Music', percent: 15, color: 'bg-pink-500' },
  { label: 'Lifestyle', percent: 12, color: 'bg-teal-500' },
  { label: 'Fashion', percent: 10, color: 'bg-yellow-500' },
]

const cities = [
  { city: '🇳🇬 Lagos', users: '4,280', percent: 34 },
  { city: '🇳🇬 Abuja', users: '1,890', percent: 15 },
  { city: '🇬🇭 Accra', users: '1,560', percent: 12 },
  { city: '🇳🇬 Kano', users: '980', percent: 8 },
  { city: '🇰🇪 Nairobi', users: '870', percent: 7 },
  { city: '🇿🇦 Cape Town', users: '750', percent: 6 },
  { city: '🇳🇬 PH', users: '680', percent: 5 },
  { city: '🇸🇳 Dakar', users: '520', percent: 4 },
  { city: '🇳🇬 Ibadan', users: '480', percent: 4 },
  { city: '🌍 Other', users: '470', percent: 4 },
]

const retention = [
  { label: 'D1', value: '68%', color: 'text-green-400', ring: 'from-green-500 to-emerald-500' },
  { label: 'D7', value: '42%', color: 'text-yellow-400', ring: 'from-yellow-500 to-amber-500' },
  { label: 'D30', value: '28%', color: 'text-orange-400', ring: 'from-orange-500 to-amber-500' },
]

function buildChart(data: number[], width = 600, height = 200, padding = 24) {
  const max = Math.max(...data)
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * (width - padding * 2) + padding
    const y = height - padding - (val / max) * (height - padding * 2)
    return [x, y] as const
  })
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  const areaPath = `${linePath} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`
  return { points, linePath, areaPath }
}

export default function AdminAnalyticsPage() {
  const mauChart = buildChart(mauData)
  const dauChart = buildChart(dauData)

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image src="/setup3.jpg" alt="Analytics" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0F]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium w-fit">
            <BarChart2 className="w-3.5 h-3.5" /> Platform Analytics
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Analytics Overview</h1>
          <p className="text-white/60 mt-2 max-w-2xl">Measure growth, revenue, and engagement across Arena Africa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 space-y-6">
        {/* Range Tabs */}
        <div className="flex flex-wrap gap-2">
          {rangeTabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium ${i === 1 ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricCards.map((card) => (
            <div key={card.label} className="rounded-2xl bg-[#252535] border border-white/10 p-5">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/50 text-xs">{card.label}</p>
              <p className={`text-2xl font-bold mt-2 ${card.value.startsWith('₦') ? 'text-[#F59E0B]' : 'text-white'}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">MAU</h3>
              <span className="text-xs text-purple-400">Last 7 points</span>
            </div>
            <div className="h-48">
              <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mauLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="mauArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={mauChart.areaPath} fill="url(#mauArea)" />
                <path d={mauChart.linePath} fill="none" stroke="url(#mauLine)" strokeWidth="3" />
              </svg>
            </div>
            <div className="mt-3 flex justify-between text-xs text-white/40">
              {mauData.map((val, idx) => (
                <span key={idx}>{val.toLocaleString()}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">DAU</h3>
              <span className="text-xs text-cyan-400">Last 7 points</span>
            </div>
            <div className="h-48">
              <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="dauLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                  <linearGradient id="dauArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={dauChart.areaPath} fill="url(#dauArea)" />
                <path d={dauChart.linePath} fill="none" stroke="url(#dauLine)" strokeWidth="3" />
              </svg>
            </div>
            <div className="mt-3 flex justify-between text-xs text-white/40">
              {dauData.map((val, idx) => (
                <span key={idx}>{val.toLocaleString()}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue + Verticals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
            <h3 className="text-lg font-bold mb-4">Revenue Breakdown</h3>
            <div className="space-y-4">
              {revenueBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/80">{item.label}</span>
                    <span className="text-[#F59E0B] font-semibold">{item.amount}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
            <h3 className="text-lg font-bold mb-4">Platform Verticals</h3>
            <div className="space-y-4">
              {verticals.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/80">{item.label}</span>
                    <span className="text-white/50">{item.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geo Table */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Top Cities</h3>
            <div className="inline-flex items-center gap-2 text-xs text-white/50"><MapPin className="w-3.5 h-3.5" /> Top 10</div>
          </div>
          <div className="space-y-4">
            {cities.map((city) => (
              <div key={city.city} className="grid grid-cols-1 md:grid-cols-[160px_100px_1fr] gap-3 items-center">
                <span className="text-white/80 text-sm">{city.city}</span>
                <span className="text-white/50 text-sm">{city.users} users</span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: `${city.percent}%` }} />
                  </div>
                  <span className="text-white/50 text-xs">{city.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Retention */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {retention.map((item) => (
            <div key={item.label} className="rounded-2xl bg-[#252535] border border-white/10 p-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.ring} flex items-center justify-center mb-4`}>
                <BarChart2 className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/50 text-xs">{item.label} Retention</p>
              <p className={`text-3xl font-bold mt-2 ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
