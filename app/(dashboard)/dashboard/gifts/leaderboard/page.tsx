"use client";

import React, { useState } from 'react';
import { Trophy, Crown, Zap, Diamond } from 'lucide-react';
import { AvatarCircle } from '@/components/ui/AvatarCircle';
import Link from 'next/link';

const tabs = ['This Week', 'This Month', 'All Time'];

const topGifters = [
  { rank: 1, handle: '@GiftKing', avatar: '/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg', vc: 1_250_000, nairaValue: 437_500, giftsSent: 245, badge: '🔥 Kult Supporter' },
  { rank: 2, handle: '@VibeQueen', avatar: '/tim-tim-bwOb9qluXgA-unsplash.jpg', vc: 980_000, nairaValue: 343_000, giftsSent: 189, badge: '⚡ Power Fan' },
  { rank: 3, handle: '@NaijaLion', avatar: '/aejaz-memon-Ifv8DUZnozA-unsplash.jpg', vc: 650_000, nairaValue: 227_500, giftsSent: 134, badge: '💎 Diamond Fan' },
];

const leaderboard = [
  { rank: 4, handle: '@GhostFan', avatar: '/daniel-lincoln-TD8uFU0v068-unsplash.jpg', vc: 420_000, nairaValue: 147_000, giftsSent: 89 },
  { rank: 5, handle: '@TemiLover', avatar: '/emediong-umoh-63Md7MbwXPg-unsplash.jpg', vc: 380_000, nairaValue: 133_000, giftsSent: 76 },
  { rank: 6, handle: '@ZuluSupporter', avatar: '/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg', vc: 295_000, nairaValue: 103_250, giftsSent: 64 },
  { rank: 7, handle: '@AmaFanClub', avatar: '/hack1.jpg', vc: 210_000, nairaValue: 73_500, giftsSent: 52 },
  { rank: 8, handle: '@BeatMaster', avatar: '/afrobeat2.jpg', vc: 185_000, nairaValue: 64_750, giftsSent: 41 },
  { rank: 9, handle: '@StyleKing', avatar: '/african_vlog.jpg', vc: 145_000, nairaValue: 50_750, giftsSent: 32 },
  { rank: 10, handle: '@DevWarrior', avatar: '/setup1.jpg', vc: 120_000, nairaValue: 42_000, giftsSent: 28 },
];

const battles = [
  {
    user1: '@GiftKing',
    user1Vc: 125000,
    user2: '@VibeQueen',
    user2Vc: 98000,
    prize: 'Featured on creator page 1 week',
    endsIn: '2d 14h',
  },
  {
    user1: '@NaijaLion',
    user1Vc: 65000,
    user2: '@GhostFan',
    user2Vc: 42000,
    prize: 'Top gifter badge + shoutout',
    endsIn: '5d 3h',
  },
];

export default function GiftsLeaderboard() {
  const [activeTab, setActiveTab] = useState('This Month');

  return (
    <div className="space-y-8 p-4 lg:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl">
            <Trophy className="w-10 h-10 text-black font-bold" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-black">Top Gifters</h1>
            <p className="text-white/70">This Month's Biggest Supporters</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 bg-[#252535] rounded-2xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex-1 ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-lg'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Podium - Top 3 */}
      <section className="relative">
        <h2 className="text-2xl font-bold mb-8 text-center">🏆 Leaderboard Podium</h2>
        <div className="flex items-end justify-center gap-8 lg:gap-16 h-80 lg:h-96">
          {/* 3rd Place */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F59E0B] to-yellow-500 shadow-2xl flex items-center justify-center mb-4 border-4 border-[#0A0A0F]">
              <AvatarCircle src={topGifters[2].avatar} initials="NL" />
            </div>
            <div className="font-black text-2xl mb-1">3</div>
            <div className="font-semibold">{topGifters[2].handle}</div>
            <div className="text-[#F59E0B] font-bold">{topGifters[2].vc.toLocaleString()} VC</div>
            <div className={`text-xs mt-1 px-2 py-1 rounded-full bg-white/10 ${topGifters[2].badge === '💎 Diamond Fan' ? 'text-[#F59E0B]' : ''}`}>
              {topGifters[2].badge}
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center text-center relative">
            <div className="absolute top-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 blur-xl"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl flex items-center justify-center mb-6 border-8 border-[#0A0A0F] ring-8 ring-yellow-400/30">
              <AvatarCircle src={topGifters[0].avatar} initials="GK" size={80} />
              <Crown className="w-12 h-12 text-black absolute -top-2 -right-2 drop-shadow-lg" />
            </div>
            <div className="font-black text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">1</div>
            <div className="font-black text-xl lg:text-2xl mb-2">{topGifters[0].handle}</div>
            <div className="text-2xl text-[#F59E0B] font-black mb-1">{topGifters[0].vc.toLocaleString()} VC</div>
            <div className="text-sm text-white/80 mb-3">{topGifters[0].nairaValue.toLocaleString()} ₦ Value</div>
            <div className="text-lg px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold shadow-lg">
              {topGifters[0].badge}
            </div>
          </div>

          {/* 2nd Place */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center mb-4 border-4 border-[#0A0A0F]">
              <AvatarCircle src={topGifters[1].avatar} initials="VQ" />
            </div>
            <div className="font-black text-2xl mb-1">2</div>
            <div className="font-semibold">{topGifters[1].handle}</div>
            <div className="text-[#F59E0B] font-bold">{topGifters[1].vc.toLocaleString()} VC</div>
            <div className={`text-xs mt-1 px-2 py-1 rounded-full bg-white/10 ${topGifters[1].badge === '⚡ Power Fan' ? 'text-purple-400' : ''}`}>
              {topGifters[1].badge}
            </div>
          </div>
        </div>
      </section>

      {/* Full Leaderboard Table */}
      <section>
        <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-sm font-bold text-white/80">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white/80">Gifter</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-white/80">Total VC</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-white/80">₦ Value</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-white/80">Gifts Sent</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-white/80">Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leaderboard.map((gifter) => (
                <tr key={gifter.rank} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-lg text-white">{gifter.rank}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <AvatarCircle src={gifter.avatar} size={40} />
                      <span className="font-semibold">{gifter.handle}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#F59E0B]">{gifter.vc.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-bold text-[#F59E0B]">₦{gifter.nairaValue.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-mono text-white/80">{gifter.giftsSent}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-bold">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gifting Battles */}
      <section>
        <h2 className="text-2xl font-bold mb-8">⚔️ Live Gifting Battles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {battles.map((battle, index) => (
            <div key={index} className="bg-gradient-to-br from-[#252535] to-[#1a1a24] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Gifting Battle #{index + 1}</h3>
                <div className="px-3 py-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-bold rounded-full">
                  Ends in {battle.endsIn}
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <AvatarCircle src="/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg" initials="GK" />
                  <div>
                    <div className="font-bold">{battle.user1}</div>
                    <div className="text-[#F59E0B] font-bold">{battle.user1Vc.toLocaleString()} VC</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-white">VS</div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <AvatarCircle src="/tim-tim-bwOb9qluXgA-unsplash.jpg" initials="VQ" />
                  <div>
                    <div className="font-bold">{battle.user2}</div>
                    <div className="text-[#F59E0B] font-bold">{battle.user2Vc.toLocaleString()} VC</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/70 mb-6">
                <div className="text-sm">Prize:</div>
                <div className="font-bold text-[#F59E0B]">{battle.prize}</div>
              </div>
              <Link href="#" className="w-full block py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold text-center shadow-lg hover:shadow-xl transition-all">
                Join Battle
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
