"use client";

import React, { useState } from 'react';
import { ArrowLeft, Gift, Crown, Zap } from 'lucide-react';
import Link from 'next/link';
import { giftCatalogue } from '@/lib/data';
import { AvatarCircle } from '@/components/ui/AvatarCircle';

type Gift = {
  name: string;
  emoji: string;
  vc: number;
  creatorNaira: number;
};

interface Props {
  params: Promise<{ creatorId: string }>;
}

export default function SendGiftPage({ params }: Props) {
  const { creatorId } = React.use(params);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [balance] = useState(4250);

  const creator = {
    handle: '@GhostAlpha',
    name: 'Ghost Alpha',
    avatar: '/higor-hanschen-3Bz1yBpI3GI-unsplash.jpg',
    category: 'Gaming',
    followers: 45200,
  };

  const streakCount = 2; // Mock streak

  const handleSend = () => {
    if (selectedGift && balance >= selectedGift.vc) {
      // Send logic
      console.log(`Sending ${selectedGift.name} to ${creator.handle}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-4 lg:p-6 max-w-2xl mx-auto">
      {/* Back header */}
      <Link href="/dashboard/gifts" className="flex items-center gap-2 mb-6 text-white/70 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5" />
        Back to Gifts
      </Link>

      {/* Creator Info */}
      <div className="bg-[#252535] rounded-2xl p-6 mb-8 text-center border border-white/10">
        <AvatarCircle src={creator.avatar} size={80} />
        <h1 className="text-2xl font-bold mt-4 mb-1">{creator.name}</h1>
        <div className="flex items-center justify-center gap-2 text-white/70 mb-2">
          <span className="font-semibold">{creator.handle}</span>
          <span className="px-2 py-1 bg-[#7C3AED]/20 text-[#7C3AED] text-xs rounded-full">{creator.category}</span>
        </div>
        <div className="text-[#F59E0B] font-bold">{creator.followers.toLocaleString()} followers</div>
      </div>

      {/* Gift Selector */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Gift className="w-6 h-6 text-[#F59E0B]" />
          Choose Gift
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {giftCatalogue.map((gift) => (
            <button
              key={gift.name}
              onClick={() => setSelectedGift(gift)}
              className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 ${
                selectedGift?.name === gift.name
                  ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/30 bg-[#7C3AED]/10'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#F59E0B]/20 mb-2">
                <span className="text-3xl">{gift.emoji}</span>
              </div>
              <h4 className="font-bold text-white mb-1">{gift.name}</h4>
              <div className="text-[#F59E0B] font-bold">{gift.vc} VC</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Gift Preview */}
      {selectedGift && (
        <div className="bg-gradient-to-r from-[#252535] to-[#1a1a24] p-6 rounded-2xl border border-white/10 mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-4xl">{selectedGift.emoji}</span>
            {selectedGift.name}
          </h3>
          <div className="space-y-2 text-white/80">
            <div>Cost: <span className="text-[#F59E0B] font-bold">{selectedGift.vc.toLocaleString()} VC</span></div>
            <div>Creator receives: <span className="text-[#F59E0B] font-bold">₦{selectedGift.creatorNaira.toLocaleString()}</span></div>
          </div>
        </div>
      )}

      {/* Balance Check & Send Button */}
      <div className="space-y-4">
        {balance < (selectedGift?.vc || 0) && selectedGift && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold">Not enough Vibe Credits</p>
                <p>You need {selectedGift.vc.toLocaleString()} VC. You have {balance.toLocaleString()} VC.</p>
                <Link href="/dashboard/coins" className="mt-2 inline-block text-sm underline">
                  Buy More Credits
                </Link>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleSend}
          disabled={!selectedGift || balance < selectedGift.vc}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {selectedGift ? `Send ${selectedGift.name} 🎁` : 'Choose a gift first'}
        </button>

        {streakCount > 0 && (
          <div className="text-center p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/30">
            <p className="text-yellow-400 font-bold flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 animate-pulse" />
              Send 3x in a row to trigger Combo Animation! 🔥 ({3 - streakCount} more needed)
            </p>
          </div>
        )}
      </div>

      {/* Recent Gifts to this creator */}
      <section className="mt-12">
        <h3 className="text-xl font-bold mb-6">Recent Gifts to {creator.handle}</h3>
        <div className="space-y-3">
          {[
            { gift: 'Afro Crown', emoji: '👑', vc: 10000, date: '2 hours ago' },
            { gift: 'Naija Lion', emoji: '🦁', vc: 5000, date: '1 day ago' },
            { gift: 'Jollof Flame', emoji: '🔥', vc: 1500, date: '3 days ago' },
            { gift: 'Drum Drop', emoji: '🥁', vc: 500, date: '1 week ago' },
            { gift: 'Lagos Storm', emoji: '⚡', vc: 25000, date: '2 weeks ago' },
          ].map((g, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#1a1a24] rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{g.emoji}</span>
                <div>
                  <div className="font-semibold">{g.gift}</div>
                  <div className="text-white/60 text-sm">{g.date}</div>
                </div>
              </div>
              <div className="text-[#F59E0B] font-bold text-sm">{g.vc} VC</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
