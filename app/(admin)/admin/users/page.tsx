"use client"

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Search, ChevronDown, Download, MoreHorizontal, Users, ShieldCheck, MapPin, SlidersHorizontal } from 'lucide-react'

const users = [
  { id: 'ghostalpha', handle: '@GhostAlpha', initials: 'GA', email: 'ghostalpha@arena.africa', role: 'Player', region: 'Lagos', joined: 'Jan 12, 2026', status: 'Active', elo: '2450' },
  { id: 'zulusquad', handle: '@ZuluSquad', initials: 'ZS', email: 'zulusquad@arena.africa', role: 'Player', region: 'Abuja', joined: 'Jan 09, 2026', status: 'Active', elo: '2180' },
  { id: 'naijactf', handle: '@NaijaCTF', initials: 'NC', email: 'naijactf@arena.africa', role: 'Creator', region: 'Lagos', joined: 'Dec 21, 2025', status: 'Active', elo: '-' },
  { id: 'afrobeatking', handle: '@AfrobeatKing', initials: 'AK', email: 'afrobeatking@arena.africa', role: 'Creator', region: 'Accra', joined: 'Dec 18, 2025', status: 'Active', elo: '-' },
  { id: 'temistreams', handle: '@TemiStreams', initials: 'TS', email: 'temistreams@arena.africa', role: 'Streamer', region: 'Abuja', joined: 'Jan 02, 2026', status: 'Active', elo: '1950' },
  { id: 'lagoslens', handle: '@LagosLens', initials: 'LL', email: 'lagoslens@arena.africa', role: 'Streamer', region: 'Lagos', joined: 'Dec 28, 2025', status: 'Active', elo: '1890' },
  { id: 'kelechi', handle: '@Kelechi', initials: 'KE', email: 'kelechi@arena.africa', role: 'Player', region: 'PH', joined: 'Jan 05, 2026', status: 'Active', elo: '1920' },
  { id: 'shadow', handle: '@Shadow', initials: 'SH', email: 'shadow@arena.africa', role: 'Player', region: 'Lagos', joined: 'Jan 03, 2026', status: 'Active', elo: '2020' },
  { id: 'killerx', handle: '@KillerX', initials: 'KX', email: 'killerx@arena.africa', role: 'Player', region: 'Kano', joined: 'Dec 30, 2025', status: 'Suspended', elo: '2150' },
  { id: 'naijapro', handle: '@NaijaPro', initials: 'NP', email: 'naijapro@arena.africa', role: 'Player', region: 'Lagos', joined: 'Dec 27, 2025', status: 'Active', elo: '2290' },
  { id: 'ama', handle: '@Ama', initials: 'AM', email: 'ama@arena.africa', role: 'Streamer', region: 'Accra', joined: 'Jan 06, 2026', status: 'Active', elo: '1560' },
  { id: 'lagosvlog', handle: '@LagosVlog', initials: 'LV', email: 'lagosvlog@arena.africa', role: 'Creator', region: 'Lagos', joined: 'Dec 20, 2025', status: 'Active', elo: '-' },
  { id: 'progamer', handle: '@ProGamer', initials: 'PG', email: 'progamer@arena.africa', role: 'Player', region: 'Cape Town', joined: 'Dec 15, 2025', status: 'Active', elo: '1620' },
  { id: 'naijaking', handle: '@NaijaKing', initials: 'NK', email: 'naijaking@arena.africa', role: 'Player', region: 'Lagos', joined: 'Jan 01, 2026', status: 'Active', elo: '1550' },
  { id: 'aceplayer', handle: '@AcePlayer', initials: 'AP', email: 'aceplayer@arena.africa', role: 'Player', region: 'Kano', joined: 'Dec 12, 2025', status: 'Banned', elo: '1490' },
]

const roleStyles: Record<string, string> = {
  Player: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  Streamer: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  Creator: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  Org: 'bg-green-500/20 text-green-400 border border-green-500/30',
  Referee: 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
  Admin: 'bg-red-500/20 text-red-400 border border-red-500/30',
}

const statusStyles: Record<string, string> = {
  Active: 'bg-green-500/20 text-green-400 border border-green-500/30',
  Suspended: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  Banned: 'bg-red-500/20 text-red-400 border border-red-500/30',
}

export default function AdminUsersPage() {
  const [selected, setSelected] = useState<string[]>([])

  const allSelected = selected.length === users.length
  const selectedCount = selected.length

  const toggleAll = () => {
    setSelected(allSelected ? [] : users.map((u) => u.id))
  }

  const toggleOne = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const summaryBadges = useMemo(
    () => [
      { label: 'Players 640', icon: Users, color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { label: 'Creators 240', icon: ShieldCheck, color: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' },
      { label: 'Streamers 180', icon: Users, color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
      { label: 'Orgs 42', icon: MapPin, color: 'bg-green-500/20 text-green-400 border border-green-500/30' },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image src="/gamer-streaming-live.jpg" alt="Users" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0F]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium w-fit">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Admin Users
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">User Management</h1>
          <p className="text-white/60 mt-2 max-w-2xl">Audit, filter, and export user data across KultVibe.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 space-y-6">
        {/* Search + Filters */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search users by handle, email or region..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select className="appearance-none bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-9 text-sm text-white/70">
                  <option>Role</option>
                  <option>Player</option>
                  <option>Streamer</option>
                  <option>Creator</option>
                  <option>Org</option>
                  <option>Referee</option>
                  <option>Admin</option>
                </select>
                <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
              <div className="relative">
                <select className="appearance-none bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-9 text-sm text-white/70">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Banned</option>
                </select>
                <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
              <div className="relative">
                <select className="appearance-none bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-9 text-sm text-white/70">
                  <option>Region</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Accra</option>
                  <option>Kano</option>
                  <option>Cape Town</option>
                  <option>PH</option>
                </select>
                <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90">
                <Download className="w-4 h-4" /> Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white/50 text-sm">1,240 total users</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {summaryBadges.map((badge) => (
              <span key={badge.label} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${badge.color}`}>
                <badge.icon className="w-3.5 h-3.5" /> {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedCount > 0 && (
          <div className="rounded-2xl bg-[#252535] border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-white/70 text-sm">{selectedCount} selected</p>
            <div className="flex gap-3">
              <button className="px-4 py-2.5 rounded-xl border border-red-500/40 text-red-400 text-sm font-medium hover:bg-red-500/10">
                Suspend Selected
              </button>
              <button className="px-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5">
                Export Selected
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full text-left">
              <thead className="bg-white/5 text-white/50 text-xs uppercase">
                <tr>
                  <th className="p-4">
                    <input type="checkbox" checked={allSelected} onChange={toggleAll} className="h-4 w-4 rounded border-white/20 bg-white/5" />
                  </th>
                  <th className="p-4">User</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Region</th>
                  <th className="p-4">Joined</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">ELO</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <input type="checkbox" checked={selected.includes(user.id)} onChange={() => toggleOne(user.id)} className="h-4 w-4 rounded border-white/20 bg-white/5" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xs font-semibold text-white">
                          {user.initials}
                        </div>
                        <span className="text-purple-400 font-semibold text-sm">{user.handle}</span>
                      </div>
                    </td>
                    <td className="p-4 text-white/50 text-sm">{user.email}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${roleStyles[user.role]}`}>{user.role}</span>
                    </td>
                    <td className="p-4 text-white/70 text-sm">{user.region}</td>
                    <td className="p-4 text-white/50 text-sm">{user.joined}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[user.status]}`}>{user.status}</span>
                    </td>
                    <td className="p-4 text-white/80 text-sm">{user.elo}</td>
                    <td className="p-4">
                      <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10">
                        <MoreHorizontal className="w-4 h-4 text-white/60" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 text-xs text-white/40">Showing 1-15 of 1,240</div>
        </div>
      </div>
    </div>
  )
}
