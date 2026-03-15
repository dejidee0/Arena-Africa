"use client"

import Image from 'next/image'
import { Download, Filter, ChevronDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const summaryCards = [
  { label: 'Total Volume', value: '₦8.4M', color: 'text-[#F59E0B]', ring: 'from-yellow-500 to-orange-500' },
  { label: 'Successful', value: '₦7.9M', color: 'text-green-400', ring: 'from-green-500 to-emerald-500' },
  { label: 'Pending', value: '₦320K', color: 'text-yellow-400', ring: 'from-yellow-500 to-amber-500' },
  { label: 'Failed', value: '₦180K', color: 'text-red-400', ring: 'from-red-500 to-rose-500' },
]

const typeStyles: Record<string, string> = {
  Win: 'bg-green-500/20 text-green-400 border border-green-500/30',
  Withdrawal: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  Entry: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  Tip: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  Refund: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
}

const statusStyles: Record<string, string> = {
  Confirmed: 'bg-green-500/20 text-green-400 border border-green-500/30',
  Completed: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  Pending: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  Failed: 'bg-red-500/20 text-red-400 border border-red-500/30',
}

const gatewayStyles: Record<string, string> = {
  Paystack: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  Flutterwave: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
}

const transactions = [
  { date: 'Today', id: 'TXN001', handle: '@GhostAlpha', initials: 'GA', type: 'Win', description: 'CODM Lagos Cup Win', amount: '+₦45,000', amountType: 'credit', gateway: 'Paystack', status: 'Confirmed' },
  { date: 'Today', id: 'TXN002', handle: '@ZuluSquad', initials: 'ZS', type: 'Withdrawal', description: 'Bank Transfer GTB', amount: '-₦30,000', amountType: 'debit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Today', id: 'TXN003', handle: '@Kelechi', initials: 'KE', type: 'Entry', description: 'EA FC Street League', amount: '-₦2,000', amountType: 'debit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Yesterday', id: 'TXN004', handle: '@TemiStreams', initials: 'TS', type: 'Tip', description: 'Tip from @GhostFan', amount: '+₦1,000', amountType: 'credit', gateway: 'Flutterwave', status: 'Confirmed' },
  { date: 'Yesterday', id: 'TXN005', handle: '@NaijaPro', initials: 'NP', type: 'Win', description: 'PUBG Naija Royale Win', amount: '+₦62,500', amountType: 'credit', gateway: 'Paystack', status: 'Confirmed' },
  { date: 'Feb 14', id: 'TXN006', handle: '@Ama', initials: 'AM', type: 'Withdrawal', description: 'Bank Transfer Access', amount: '-₦15,000', amountType: 'debit', gateway: 'Flutterwave', status: 'Failed' },
  { date: 'Feb 14', id: 'TXN007', handle: '@Shadow', initials: 'SH', type: 'Entry', description: 'Free Fire Kano Open', amount: '-₦1,500', amountType: 'debit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Feb 13', id: 'TXN008', handle: '@KillerX', initials: 'KX', type: 'Win', description: 'CODM Cup QF Win', amount: '+₦12,000', amountType: 'credit', gateway: 'Paystack', status: 'Pending' },
  { date: 'Feb 13', id: 'TXN009', handle: '@LagosLens', initials: 'LL', type: 'Tip', description: 'Brand deal payment MTN', amount: '+₦150,000', amountType: 'credit', gateway: 'Paystack', status: 'Confirmed' },
  { date: 'Feb 12', id: 'TXN010', handle: '@AfrobeatKing', initials: 'AK', type: 'Withdrawal', description: 'Bank Transfer Kuda', amount: '-₦80,000', amountType: 'debit', gateway: 'Flutterwave', status: 'Failed' },
  { date: 'Feb 12', id: 'TXN011', handle: '@NaijaCTF', initials: 'NC', type: 'Entry', description: 'NaijaCTF Monthly', amount: '-₦5,000', amountType: 'debit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Feb 11', id: 'TXN012', handle: '@ProGamer', initials: 'PG', type: 'Win', description: 'FIFA Street Finals', amount: '+₦22,000', amountType: 'credit', gateway: 'Flutterwave', status: 'Confirmed' },
  { date: 'Feb 11', id: 'TXN013', handle: '@LagosVlog', initials: 'LV', type: 'Tip', description: 'Tip from @BrandX', amount: '+₦25,000', amountType: 'credit', gateway: 'Paystack', status: 'Confirmed' },
  { date: 'Feb 10', id: 'TXN014', handle: '@AcePlayer', initials: 'AP', type: 'Withdrawal', description: 'Bank Transfer Zenith', amount: '-₦18,000', amountType: 'debit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Feb 10', id: 'TXN015', handle: '@Ama', initials: 'AM', type: 'Refund', description: 'Tournament Cancelled', amount: '+₦2,500', amountType: 'credit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Feb 09', id: 'TXN016', handle: '@NaijaKing', initials: 'NK', type: 'Entry', description: 'CODM Lagos Cup', amount: '-₦3,000', amountType: 'debit', gateway: 'Paystack', status: 'Completed' },
  { date: 'Feb 08', id: 'TXN017', handle: '@GhostAlpha', initials: 'GA', type: 'Tip', description: 'Fan tip from @ZuluFan', amount: '+₦1,800', amountType: 'credit', gateway: 'Flutterwave', status: 'Confirmed' },
  { date: 'Feb 08', id: 'TXN018', handle: '@TemiStreams', initials: 'TS', type: 'Withdrawal', description: 'Bank Transfer UBA', amount: '-₦20,000', amountType: 'debit', gateway: 'Flutterwave', status: 'Pending' },
  { date: 'Feb 07', id: 'TXN019', handle: '@Shadow', initials: 'SH', type: 'Win', description: 'Free Fire Kano Open', amount: '+₦9,000', amountType: 'credit', gateway: 'Paystack', status: 'Confirmed' },
  { date: 'Feb 07', id: 'TXN020', handle: '@KillerX', initials: 'KX', type: 'Refund', description: 'Match Dispute', amount: '+₦4,000', amountType: 'credit', gateway: 'Flutterwave', status: 'Failed' },
]

export default function AdminTransactionsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image src="/setup2.jpg" alt="Transactions" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0F]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium w-fit">
            Finance Ops
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Transactions</h1>
          <p className="text-white/60 mt-2 max-w-2xl">Track payments, withdrawals, and tournament entries in one place.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((card) => (
            <div key={card.label} className="rounded-2xl bg-[#252535] border border-white/10 p-5">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.ring} flex items-center justify-center mb-4`}>
                <div className="w-7 h-7 rounded-full bg-white/20" />
              </div>
              <p className="text-white/50 text-xs">{card.label}</p>
              <p className={`text-2xl font-bold mt-2 ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 p-5 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm hover:bg-white/5">
              <Filter className="w-4 h-4" /> All Types <ChevronDown className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm hover:bg-white/5">
              Status <ChevronDown className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm hover:bg-white/5">
              Gateway <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <button className="ml-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="rounded-2xl bg-[#252535] border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full text-left">
              <thead className="bg-white/5 text-white/50 text-xs uppercase">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">TXN ID</th>
                  <th className="p-4">User</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Gateway</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => {
                  const isFailed = txn.status === 'Failed'
                  return (
                    <tr
                      key={txn.id}
                      className={`border-b border-white/10 hover:bg-white/5 transition-colors ${isFailed ? 'border-l-[3px] border-l-red-500' : ''}`}
                    >
                      <td className="p-4 text-white/60 text-sm">{txn.date}</td>
                      <td className="p-4 text-white/40 text-sm font-mono">{txn.id}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xs font-semibold text-white">
                            {txn.initials}
                          </div>
                          <span className="text-purple-400 font-semibold text-sm">{txn.handle}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeStyles[txn.type]}`}>{txn.type}</span>
                      </td>
                      <td className="p-4 text-white/70 text-sm">{txn.description}</td>
                      <td className={`p-4 text-sm font-semibold ${txn.amountType === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                        <div className="flex items-center gap-1">
                          {txn.amountType === 'credit' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          {txn.amount}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${gatewayStyles[txn.gateway]}`}>{txn.gateway}</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[txn.status]}`}>{txn.status}</span>
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
