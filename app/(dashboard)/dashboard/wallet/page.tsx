"use client";

import React, { useState } from "react";
import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Coins, CheckCircle } from "lucide-react";

const transactions = [
  { id: "1", date: "Today", type: "Gift Earnings", desc: "Kult Queen from @VibeQueen", amount: "+₦175,000", status: "Confirmed", statusColor: "green" },
  { id: "2", date: "Today", type: "Win", desc: "CODM Lagos Cup - Semifinal", amount: "+₦15,000", status: "Confirmed", statusColor: "green" },
  { id: "3", date: "Yesterday", type: "Gift Earnings", desc: "Pan-Africa from @GiftKing", amount: "+₦35,000", status: "Confirmed", statusColor: "green" },
  { id: "4", date: "Yesterday", type: "Entry Fee", desc: "EA FC Street League", amount: "-₦2,000", status: "Completed", statusColor: "orange" },
  { id: "5", date: "2 days ago", type: "Win", desc: "Free Fire Kano Open", amount: "+₦8,500", status: "Pending", statusColor: "yellow" },
  { id: "6", date: "3 days ago", type: "Tip", desc: "From @ZuluFan", amount: "+₦1,000", status: "Confirmed", statusColor: "purple" },
];

const statusColors: Record<string, string> = {
  green: "text-green-400 bg-green-500/20",
  orange: "text-orange-400 bg-orange-500/20",
  blue: "text-blue-400 bg-blue-500/20",
  yellow: "text-yellow-400 bg-yellow-500/20",
  purple: "text-purple-400 bg-purple-500/20",
};

export default function WalletPage() {
  const [filter, setFilter] = useState("All");
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const filters = ["All", "Winnings", "Withdrawals", "Entry Fees", "Gift Earnings"];

  return (
    <div className="space-y-6">
      {/* Balance Hero */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-8 text-center relative overflow-hidden">
        <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-yellow-600">
          <Coins className="w-10 h-10 text-white" />
        </div>
        <p className="text-white/60 text-sm mb-1">Available Balance</p>
        <div className="text-5xl font-black text-white mb-4">₦245,000</div>
        <button 
          onClick={() => setShowWithdraw(!showWithdraw)}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Withdraw
        </button>
        
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent" />
      </div>

      {/* Pending Card */}
      <div className="bg-[#252535] rounded-2xl border border-yellow-500/30 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/60 text-sm">Pending from active tournaments</p>
            <p className="text-2xl font-bold text-yellow-400">₦45,000</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
          <div className="text-green-400 font-bold text-xl">₦380,000</div>
          <div className="text-xs text-white/60">Total Earned</div>
        </div>
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
          <div className="text-blue-400 font-bold text-xl">₦135,000</div>
          <div className="text-xs text-white/60">Total Withdrawn</div>
        </div>
        <div className="bg-[#252535] rounded-xl border border-white/10 p-4 text-center">
        <div className="text-[#F59E0B] font-bold text-xl">4,250 VC</div>
        <div className="text-xs text-white/60 mt-1">Vibe Credits • 1,000 VC = ₦350</div>
        <button className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-medium">
          Convert to Cash
        </button>
          <div className="text-xs text-white/60">Active Value</div>
        </div>
      </div>

      {/* Withdrawal Form */}
      {showWithdraw && (
        <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold mb-4">Withdraw Funds</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-white/60">Bank</label>
              <select 
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full mt-1 bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]"
              >
                <option value="">Select Bank</option>
                <option value="GTB">GTBank</option>
                <option value="Access">Access Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="Zenith">Zenith Bank</option>
                <option value="OPay">OPay</option>
                <option value="Kuda">Kuda Bank</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-white/60">Account Number</label>
              <input 
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="0123456789"
                className="w-full mt-1 bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]"
              />
            </div>
            <div>
              <label className="text-xs text-white/60">Amount</label>
              <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="₦0"
                className="w-full mt-1 bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]"
              />
            </div>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity">
              Confirm Withdrawal
            </button>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              filter === f
                ? "bg-[#7C3AED] text-white"
                : "bg-[#252535] text-white/70 border border-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Transaction History */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-semibold text-white/60 uppercase border-b border-white/10">
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-2 text-right">Amount</div>
          <div className="col-span-2 text-right">Status</div>
        </div>
        <div className="divide-y divide-white/5">
          {transactions.map((t) => (
            <div key={t.id} className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-white/5 transition-colors">
              <div className="col-span-2 text-sm text-white/60">{t.date}</div>
              <div className="col-span-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  t.type === "Win" || t.type === "Tip" ? "bg-green-500/20 text-green-400" :
                  t.type === "Withdrawal" ? "bg-blue-500/20 text-blue-400" :
                  "bg-orange-500/20 text-orange-400"
                }`}>
                  {t.type}
                </span>
              </div>
              <div className="col-span-4 text-sm">{t.desc}</div>
              <div className={`col-span-2 text-right font-bold ${
                t.amount.startsWith("+") ? "text-green-400" : "text-red-400"
              }`}>
                {t.amount}
              </div>
              <div className="col-span-2 text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[t.statusColor]} flex items-center justify-end gap-1`}>
                  {t.status === "Confirmed" && (
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500/30">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                  )}
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
