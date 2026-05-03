"use client"
import Image from 'next/image'
import {
  Users, Activity, Trophy, DollarSign, AlertCircle, TrendingUp, UserPlus, Flag,
  Shield, CheckCircle
} from 'lucide-react'

const kpis = [
  { icon: Users, label: 'Total Users', value: '12,480', trend: '+8%', trendUp: true, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/10' },
  { icon: Activity, label: 'MAU', value: '3,240', trend: '+12%', trendUp: true, color: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-500/10' },
  { icon: Trophy, label: 'Active Competitions', value: '47', trend: null, trendUp: true, color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-500/10' },
  { icon: DollarSign, label: 'Prize Paid', value: '₦14.2M', trend: null, trendUp: true, color: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' },
  { icon: AlertCircle, label: 'Open Disputes', value: '8', trend: null, trendUp: false, color: 'from-red-500 to-red-600', bg: 'bg-red-500/10' },
  { icon: TrendingUp, label: 'Revenue', value: '₦485K', trend: '+22%', trendUp: true, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-500/10' },
  { icon: UserPlus, label: 'New Today', value: '124', trend: '+5%', trendUp: true, color: 'from-teal-500 to-teal-600', bg: 'bg-teal-500/10' },
  { icon: Flag, label: 'Flagged Content', value: '3', trend: null, trendUp: false, color: 'from-orange-500 to-orange-600', bg: 'bg-orange-500/10' },
]

const revenueData = [
  { day: 'Mon', val: 62 },
  { day: 'Tue', val: 78 },
  { day: 'Wed', val: 55 },
  { day: 'Thu', val: 90 },
  { day: 'Fri', val: 84 },
  { day: 'Sat', val: 100 },
  { day: 'Sun', val: 71 },
]

const activityFeed = [
  { icon: UserPlus, color: 'text-green-400', bg: 'bg-green-500/10', text: '@NaijaCTF joined KultVibe', time: '2min ago' },
  { icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/10', text: 'CODM Lagos Cup tournament started', time: '15min ago' },
  { icon: DollarSign, color: 'text-green-400', bg: 'bg-green-500/10', amount: '₦45,000', text: 'payout processed to @GhostAlpha', time: '32min ago' },
  { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/10', text: 'Dispute raised: @Ama vs @Shadow', time: '1h ago' },
  { icon: UserPlus, color: 'text-green-400', bg: 'bg-green-500/10', text: '@LagosVlog joined as verified creator', time: '1h ago' },
  { icon: Flag, color: 'text-orange-400', bg: 'bg-orange-500/10', text: 'Content flagged by @ProGamer — review needed', time: '2h ago' },
  { icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/10', text: 'West Africa Build Sprint registration opened', time: '2h ago' },
  { icon: DollarSign, color: 'text-green-400', bg: 'bg-green-500/10', amount: '₦80,000', text: 'entry fees collected (PUBG Royale)', time: '3h ago' },
  { icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10', text: '@ZuluSquad org account verified', time: '3h ago' },
  { icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/10', text: 'Daily active users hit 3,240 — record high', time: '4h ago' },
]

const integrations = [
  { name: 'Mux', status: 'Online', statusColor: 'bg-green-500/20 text-green-400', dotColor: 'bg-green-400', desc: 'Video streaming' },
  { name: 'Paystack', status: 'Online', statusColor: 'bg-green-500/20 text-green-400', dotColor: 'bg-green-400', desc: 'Payments' },
  { name: 'Flutterwave', status: 'Online', statusColor: 'bg-green-500/20 text-green-400', dotColor: 'bg-green-400', desc: 'Payments' },
  { name: 'OneSignal', status: 'Degraded', statusColor: 'bg-yellow-500/20 text-yellow-400', dotColor: 'bg-yellow-400', desc: 'Push notifications' },
]

function CardShell({ children, className = '', bgImage = '/setup3.jpg' }: { children: React.ReactNode, className?: string, bgImage?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#252535] border border-white/10 ${className}`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#252535]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function AdminDashboardPage() {
  const maxVal = Math.max(...revenueData.map(d => d.val))
  const chartWidth = 600
  const chartHeight = 180
  const padding = 24
  const points = revenueData.map((d, i) => {
    const x = (i / (revenueData.length - 1)) * (chartWidth - padding * 2) + padding
    const y = chartHeight - padding - (d.val / maxVal) * (chartHeight - padding * 2)
    return [x, y] as const
  })
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  const areaPath = `${linePath} L ${chartWidth - padding} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image src="/setup3.jpg" alt="Admin" fill className="object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/95 to-[#0A0A0F]/80" />
        </div>
        <div className="relative z-10 px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">KultVibe HQ</span>
              </div>
              <h1 className="text-3xl font-bold text-white">Platform Admin</h1>
              <p className="text-white/50 text-sm mt-1">Sunday, March 15, 2026 — Full overview</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Platform Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi) => {
            const isMoney = kpi.value.startsWith('₦')
            return (
            <CardShell key={kpi.label} className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                  <kpi.icon className="w-5 h-5 text-white" />
                </div>
                {kpi.trend && (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kpi.trendUp ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    {kpi.trend}
                  </span>
                )}
              </div>
              <p className={`text-2xl font-bold mb-1 ${isMoney ? 'text-[#F59E0B]' : 'text-white'}`}>{kpi.value}</p>
              <p className="text-white/50 text-xs">{kpi.label}</p>
            </CardShell>
          )})}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <CardShell className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-white text-lg">Revenue — Last 7 Days</h3>
                <p className="text-white/40 text-sm">
                  <span className="text-[#F59E0B] font-semibold">₦485,000</span> total this week
                </p>
              </div>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">+22% vs last week</span>
            </div>
            <div className="h-44">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#FB7185" />
                  </linearGradient>
                  <linearGradient id="revArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#revArea)" />
                <path d={linePath} fill="none" stroke="url(#revLine)" strokeWidth="3" />
                {points.map((p, i) => (
                  <circle key={revenueData[i].day} cx={p[0]} cy={p[1]} r="4" fill="#F59E0B" />
                ))}
              </svg>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/40">
              {revenueData.map((d) => (
                <span key={d.day}>{d.day}</span>
              ))}
            </div>
          </CardShell>

          {/* Integration Health */}
          <CardShell className="p-6">
            <h3 className="font-bold text-white text-lg mb-4">Integration Health</h3>
            <div className="space-y-3">
              {integrations.map((intg) => (
                <div key={intg.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${intg.dotColor}`} />
                    <div>
                      <p className="text-white text-sm font-medium">{intg.name}</p>
                      <p className="text-white/40 text-xs">{intg.desc}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${intg.statusColor}`}>{intg.status}</span>
                </div>
              ))}
            </div>
          </CardShell>
        </div>

        {/* Activity Feed */}
        <CardShell className="p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-white text-lg">Recent Activity</h3>
            <button className="text-purple-400 text-sm hover:text-purple-300">View all</button>
          </div>
          <div className="space-y-2">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                {item.amount ? (
                  <p className="flex-1 text-white/80 text-sm">
                    <span className="text-[#F59E0B] font-semibold">{item.amount}</span> {item.text}
                  </p>
                ) : (
                  <p className="flex-1 text-white/80 text-sm">{item.text}</p>
                )}
                <span className="text-white/30 text-xs whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </CardShell>
      </div>
    </div>
  )
}
