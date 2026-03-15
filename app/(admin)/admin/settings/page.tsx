"use client"

import Image from 'next/image'
import { Users, Trophy, Radio, Briefcase, Code, AlertTriangle, RefreshCcw, Megaphone } from 'lucide-react'

const features = [
  { label: 'User Registration', description: 'Allow new users to register', icon: Users, color: 'from-purple-500 to-pink-500', enabled: true },
  { label: 'Tournament Creation', description: 'Allow orgs to create tournaments', icon: Trophy, color: 'from-yellow-500 to-orange-500', enabled: true },
  { label: 'Live Streaming', description: 'Enable RTMP streaming for all users', icon: Radio, color: 'from-pink-500 to-rose-500', enabled: true },
  { label: 'Brand Deals', description: 'Enable creator brand deal marketplace', icon: Briefcase, color: 'from-cyan-500 to-blue-500', enabled: true },
  { label: 'Tech Competitions', description: 'Enable CTF and hackathon competitions', icon: Code, color: 'from-blue-500 to-indigo-500', enabled: true },
  { label: 'Maintenance Mode', description: 'Disable all platform access', icon: AlertTriangle, color: 'from-red-500 to-rose-500', enabled: false },
]

const integrations = [
  { name: 'Mux', keyLabel: 'streaming key', lastRotated: '7 days ago' },
  { name: 'Paystack', keyLabel: 'secret key', lastRotated: '14 days ago' },
  { name: 'Flutterwave', keyLabel: 'secret key', lastRotated: '14 days ago' },
  { name: 'OneSignal', keyLabel: 'app key', lastRotated: '30 days ago' },
]

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image src="/setup1.jpg" alt="Settings" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0F]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium w-fit">
            <Megaphone className="w-3.5 h-3.5" /> Platform Settings
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Settings</h1>
          <p className="text-white/60 mt-2 max-w-2xl">Control economy rules, platform features, and integrations.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 space-y-6">
        {/* Economy */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Economy</h2>
            <span className="text-xs text-white/40">Core rules</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white/60">Platform Rake %</label>
              <div className="flex items-center gap-4 mt-2">
                <input type="range" min="0" max="30" defaultValue="10" className="w-full accent-purple-500" />
                <span className="text-[#F59E0B] font-semibold">10%</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-white/60">Min Withdrawal</label>
              <input
                type="text"
                defaultValue="₦2,000"
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F59E0B] text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-white/60">Coins Exchange Rate</label>
              <input
                type="text"
                defaultValue="1 AC = ₦0.50"
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F59E0B] text-sm"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90">
              Save Economy Settings
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Features</h2>
            <span className="text-xs text-white/40">Toggle access</span>
          </div>
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{feature.label}</p>
                    <p className="text-white/50 text-xs">{feature.description}</p>
                  </div>
                </div>
                <div className={`w-12 h-7 rounded-full p-1 transition-colors ${feature.enabled ? 'bg-green-500/60' : 'bg-white/10'}`}>
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${feature.enabled ? 'translate-x-5' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Integrations</h2>
            <span className="text-xs text-white/40">Secrets & Keys</span>
          </div>
          <div className="space-y-4">
            {integrations.map((item) => (
              <div key={item.name} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-white/50 text-xs">{item.keyLabel}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-white/60 text-sm">••••••••••••••••</span>
                  <button className="px-3 py-2 rounded-xl border border-white/10 text-white/70 text-xs hover:bg-white/5 inline-flex items-center gap-2">
                    <RefreshCcw className="w-3.5 h-3.5" /> Rotate Key
                  </button>
                  <span className="text-white/40 text-xs">Last rotated: {item.lastRotated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Announcements</h2>
            <span className="text-xs text-white/40">System banner</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold">Show system banner</p>
              <p className="text-xs text-white/50">Display a banner to all users</p>
            </div>
            <div className="w-12 h-7 rounded-full p-1 bg-green-500/60">
              <div className="w-5 h-5 rounded-full bg-white translate-x-5" />
            </div>
          </div>
          <textarea
            placeholder="Enter system-wide announcement message..."
            className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/80 placeholder-white/30"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="px-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm hover:bg-white/5">
              Preview
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90">
              Publish Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
