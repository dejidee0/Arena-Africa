"use client"

import Image from 'next/image'
import { AlertCircle, Gavel, Clock, UserCheck, ExternalLink } from 'lucide-react'

const stats = [
  { label: 'Open', value: '8', color: 'text-red-400', ring: 'from-red-500 to-rose-500' },
  { label: 'Escalated', value: '3', color: 'text-orange-400', ring: 'from-orange-500 to-amber-500' },
  { label: 'Resolved', value: '142', color: 'text-green-400', ring: 'from-green-500 to-emerald-500' },
]

const escalated = [
  {
    id: 'DISPUTE-001',
    tournament: 'CODM Cup',
    matchup: '@GhostAlpha vs @KillerX',
    issue: 'Score Mismatch',
    time: '2h ago',
    referee: 'Unassigned',
    action: 'Assign Referee',
  },
  {
    id: 'DISPUTE-002',
    tournament: 'PUBG Royale',
    matchup: '@ZuluSquad vs @NaijaPro',
    issue: 'No Show',
    time: '4h ago',
    referee: '@RefereeX',
    action: 'Escalated',
  },
]

const disputes = [
  { id: 'DIS-210', tournament: 'CODM Cup', tournamentColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30', matchup: '@GhostAlpha vs @KillerX', issue: 'Score Mismatch', time: '2h ago', referee: 'Unassigned', status: 'Open' },
  { id: 'DIS-209', tournament: 'PUBG Royale', tournamentColor: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30', matchup: '@ZuluSquad vs @NaijaPro', issue: 'No Show', time: '4h ago', referee: '@RefereeX', status: 'Escalated' },
  { id: 'DIS-208', tournament: 'EA FC League', tournamentColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30', matchup: '@Ama vs @Shadow', issue: 'Lag Exploit', time: '6h ago', referee: 'Unassigned', status: 'Investigating' },
  { id: 'DIS-207', tournament: 'NaijaCTF', tournamentColor: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30', matchup: '@NaijaCTF vs @ZuluSquad', issue: 'Rule Violation', time: 'Yesterday', referee: '@RefYemi', status: 'Resolved' },
  { id: 'DIS-206', tournament: 'Afrobeats Battle', tournamentColor: 'bg-pink-500/20 text-pink-400 border border-pink-500/30', matchup: '@AfrobeatKing vs @TemiStreams', issue: 'Submission Late', time: 'Yesterday', referee: 'Unassigned', status: 'Open' },
  { id: 'DIS-205', tournament: 'Free Fire Kano', tournamentColor: 'bg-orange-500/20 text-orange-400 border border-orange-500/30', matchup: '@Shadow vs @NaijaKing', issue: 'Roster Dispute', time: 'Feb 13', referee: '@RefTobi', status: 'Resolved' },
  { id: 'DIS-204', tournament: 'PUBG Royale', tournamentColor: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30', matchup: '@ProGamer vs @AcePlayer', issue: 'No Show', time: 'Feb 12', referee: 'Unassigned', status: 'Open' },
  { id: 'DIS-203', tournament: 'CODM Cup', tournamentColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30', matchup: '@LagosLens vs @Kelechi', issue: 'Score Mismatch', time: 'Feb 11', referee: '@RefKemi', status: 'Resolved' },
]

const statusStyles: Record<string, string> = {
  Open: 'bg-red-500/20 text-red-400 border border-red-500/30',
  Escalated: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  Resolved: 'bg-green-500/20 text-green-400 border border-green-500/30',
  Investigating: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
}

export default function AdminDisputesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image src="/kadyn-pierce-DM3AxUubhg0-unsplash.jpg" alt="Disputes" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0F]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium w-fit">
            <AlertCircle className="w-3.5 h-3.5" /> Dispute Center
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Disputes</h1>
          <p className="text-white/60 mt-2 max-w-2xl">Resolve conflicts quickly and keep competitions fair.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 space-y-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-[#252535] border border-white/10 p-5">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.ring} flex items-center justify-center mb-4`}>
                <Gavel className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/50 text-xs">{stat.label}</p>
              <p className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Escalated */}
        <div className="rounded-2xl bg-[#252535] border border-red-500/40 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Escalated</h2>
            <span className="text-xs text-red-400">Pinned Priority</span>
          </div>
          <div className="space-y-3">
            {escalated.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <p className="text-white font-semibold">{item.id}</p>
                  <p className="text-white/60 text-sm">{item.tournament} • {item.matchup}</p>
                  <p className="text-white/50 text-xs">{item.issue}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                  <span>{item.referee}</span>
                  {item.referee === 'Unassigned' ? (
                    <button className="px-3 py-2 rounded-xl border border-orange-500/40 text-orange-400 text-xs font-semibold hover:bg-orange-500/10">
                      Assign Referee
                    </button>
                  ) : (
                    <span className="px-3 py-1.5 rounded-xl border border-orange-500/40 text-orange-400 text-xs font-semibold">Escalated</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Table */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full text-left">
              <thead className="bg-white/5 text-white/50 text-xs uppercase">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Tournament</th>
                  <th className="p-4">Matchup</th>
                  <th className="p-4">Issue</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Referee</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">View</th>
                </tr>
              </thead>
              <tbody>
                {disputes.map((d) => {
                  const isUnassigned = d.referee === 'Unassigned'
                  const isResolved = d.status === 'Resolved'
                  return (
                    <tr
                      key={d.id}
                      className={`border-b border-white/10 hover:bg-white/5 transition-colors ${isUnassigned ? 'border-l-[3px] border-l-orange-500' : ''} ${isResolved ? 'opacity-60' : ''}`}
                    >
                      <td className="p-4 text-white/80 text-sm font-mono">{d.id}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${d.tournamentColor}`}>{d.tournament}</span>
                      </td>
                      <td className="p-4 text-white/80 text-sm">{d.matchup}</td>
                      <td className="p-4 text-white/60 text-sm">{d.issue}</td>
                      <td className="p-4 text-white/50 text-sm">{d.time}</td>
                      <td className="p-4">
                        {isUnassigned ? (
                          <button className="px-3 py-1.5 rounded-xl border border-orange-500/40 text-orange-400 text-xs font-semibold hover:bg-orange-500/10">
                            Assign Referee
                          </button>
                        ) : (
                          <span className="text-white/70 text-sm inline-flex items-center gap-2">
                            <UserCheck className="w-4 h-4" /> {d.referee}
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[d.status]}`}>{d.status}</span>
                      </td>
                      <td className="p-4">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-white/10 text-white/70 text-xs hover:bg-white/5">
                          View <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
