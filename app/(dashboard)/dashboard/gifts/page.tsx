"use client";

import React from 'react';
import Link from 'next/link';
import { Gift, ShoppingBag, ArrowRight, Crown } from 'lucide-react';
import { vcPackages, giftCatalogue } from '@/lib/data';
import { GradientIconCircle } from '@/components/ui/GradientIconCircle';

export default function GiftsPage() {
  const balance = 4250; // Mock VC balance

  const renderPackageCard = (pkg: any, index: number) => (
    <div className={`relative rounded-2xl p-6 border-2 bg-[#252535] hover:scale-[1.02] transition-all ${pkg.popular ? 'border-[#F59E0B] ring-2 ring-[#F59E0B]/30' : 'border-white/10'}`}>
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Most Popular
        </div>
      )}
      <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#F59E0B] to-yellow-500">
        <Gift className="w-8 h-8 text-black" />
      </div>
      <div className="text-center">
        <div className="text-3xl font-black text-[#F59E0B] mb-2">{pkg.vc.toLocaleString()} VC</div>
        <div className="text-white/80 text-lg mb-4">₦{pkg.price.toLocaleString()}</div>
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold shadow-lg hover:shadow-xl transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );

  const renderGiftCard = (gift: any, index: number) => (
    <div className={`relative rounded-2xl p-5 border border-white/10 bg-[#252535] hover:border-[#7C3AED]/50 transition-all overflow-hidden ${gift.special ? 'col-span-2 border-4 !border-[#F59E0B]/50 ring-4 ring-[#F59E0B]/20' : ''}`}>
      {gift.special && (
        <div className="absolute top-3 left-3 bg-red-500/90 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
          RAREST GIFT
        </div>
      )}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B]/20 to-yellow-500/20 mb-3 mx-auto">
        <span className="text-3xl">{gift.emoji}</span>
      </div>
      <h4 className="text-lg font-bold text-white mb-1 text-center">{gift.name}</h4>
      <div className="flex items-center justify-between mb-3">
        <div className="text-[#F59E0B] font-bold text-lg">{gift.vc} VC</div>
        <div className="text-white/60 text-sm">Creator gets ₦{gift.creatorNaira.toLocaleString()}</div>
      </div>
      <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold shadow-lg hover:shadow-xl transition-all">
        Send Gift
      </button>
      {gift.special && (
        <p className="text-xs text-white/70 mt-2 text-center italic">
          Full screen takeover animation
        </p>
      )}
    </div>
  );

  return (
    <div className="space-y-8 p-4 lg:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-4">
          <GradientIconCircle icon={Gift} gradient="from-pink-500 to-rose-500" size={56} />
          <div>
            <h1 className="text-3xl lg:text-4xl font-black">Gift Shop</h1>
            <p className="text-white/70">Send gifts to creators and streamers</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-[#252535] rounded-2xl border border-white/10">
          <div className="text-2xl font-black text-[#F59E0B]">{balance.toLocaleString()}</div>
          <span className="text-white/70">VC</span>
          <Link href="/dashboard/gifts/buy" className="px-4 py-2 bg-white/10 backdrop-blur rounded-xl text-white/80 hover:bg-white/20 transition-all text-sm font-medium">
            Buy More Credits <ArrowRight className="w-4 h-4 inline ml-1" />
          </Link>
        </div>
      </div>

      {/* VC Purchase Packages */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Buy Vibe Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {vcPackages.map((pkg, index) => renderPackageCard(pkg, index))}
        </div>
      </section>

      {/* Gift Catalogue */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Gift className="w-8 h-8 text-[#F59E0B]" />
          <div>
            <h2 className="text-2xl font-bold">Send a Gift</h2>
            <p className="text-white/70">All gifts can be converted to real ₦ by creators</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {giftCatalogue.map((gift, index) => renderGiftCard(gift, index))}
        </div>
      </section>

      {/* Recent Gift History */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Gift History</h2>
        <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/70">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/70">Gift</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/70">Sent To</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-white/70">VC Spent</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-white/70">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5">
                <td className="px-6 py-4 text-sm text-white/80">2 hours ago</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">👑</span>
                    <span>Afro Crown</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold">@GhostAlpha</span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-[#F59E0B]">10,000 VC</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    Delivered
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-6 py-4 text-sm text-white/80">1 day ago</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🦁</span>
                    <span>Naija Lion</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold">@TemiStreams</span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-[#F59E0B]">5,000 VC</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                    Claimed
                  </span>
                </td>
              </tr>
              {/* More rows... */}
              <tr className="hover:bg-white/5">
                <td className="px-6 py-4 text-sm text-white/80">3 days ago</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <span>Jollof Flame</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold">@AfrobeatKing</span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-[#F59E0B]">1,500 VC</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
