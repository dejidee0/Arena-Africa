"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Video, Filter, Gamepad2, Eye, Scissors, Trash2 } from 'lucide-react';

const stats = {
  totalVODs: '24',
  totalViews: '48.2K',
  totalHours: '342'
};

const vods = [
  {
    id: 1,
    title: 'CODM Lagos Qualifiers FINALS',
    date: 'Today',
    duration: '4h 30m',
    peakViewers: '245',
    earnings: '₦8,500',
    image: '/kadyn-pierce-DM3AxUubhg0-unsplash.jpg'
  },
  {
    id: 2,
    title: 'PUBG Squad Championship',
    date: 'Yesterday',
    duration: '3h 15m',
    peakViewers: '189',
    earnings: '₦5,200',
    image: '/fausto-sandoval-Cc-KUNmV1UE-unsplash.jpg'
  },
  {
    id: 3,
    title: 'EA FC 1v1 Ranked',
    date: 'Feb 12',
    duration: '2h 45m',
    peakViewers: '156',
    earnings: '₦3,800',
    image: '/emediong-umoh-63Md7MbwXPg-unsplash.jpg'
  },
  {
    id: 4,
    title: 'Free Fire Finals Coverage',
    date: 'Feb 10',
    duration: '5h 30m',
    peakViewers: '380',
    earnings: '₦9,500',
    image: '/african-american-woman-streamer-stressed-using-computer-gaming-room.jpg'
  },
  {
    id: 5,
    title: 'CODM Ranked Grind',
    date: 'Feb 8',
    duration: '2h 00m',
    peakViewers: '98',
    earnings: '₦1,200',
    image: '/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg'
  },
  {
    id: 6,
    title: 'Tournament Prep Stream',
    date: 'Feb 5',
    duration: '1h 45m',
    peakViewers: '67',
    earnings: '₦800',
    image: '/gamer-streaming-live.jpg'
  }
];

const games = ['All', 'COD Mobile', 'PUBG Mobile', 'EA FC', 'Free Fire'];

export default function VODsPage() {
  const [filter, setFilter] = useState('All');
  const [gameFilter, setGameFilter] = useState('All');

  return (
    <div className={`space-y-6`}>
      {/* Header */}
      <div className={`flex items-center gap-3`}>
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center`}>
          <Video className={`w-5 h-5 text-white`} />
        </div>
        <div>
          <h1 className={`text-2xl font-bold`}>My VODs</h1>
          <p className={`text-white/60`}>Your recorded streams and highlights</p>
        </div>
      </div>

      {/* Stats */}
      <div className={`grid grid-cols-3 gap-4`}>
        <div className={`bg-[#252535] rounded-xl border border-white/10 p-4 text-center`}>
          <div className={`text-2xl font-bold text-white`}>{stats.totalVODs}</div>
          <div className={`text-sm text-white/60`}>VODs</div>
        </div>
        <div className={`bg-[#252535] rounded-xl border border-white/10 p-4 text-center`}>
          <div className={`text-2xl font-bold text-white`}>{stats.totalViews}</div>
          <div className={`text-sm text-white/60`}>Total Views</div>
        </div>
        <div className={`bg-[#252535] rounded-xl border border-white/10 p-4 text-center`}>
          <div className={`text-2xl font-bold text-white`}>{stats.totalHours}</div>
          <div className={`text-sm text-white/60`}>Hours of Content</div>
        </div>
      </div>

      {/* Filters */}
      <div className={`flex flex-wrap gap-3 items-center bg-[#252535] border border-white/10 rounded-2xl p-4`}>
        <Filter className={`w-4 h-4 text-white/60`} />
        <div className={`flex gap-2`}>
          {['All', 'This Week', 'This Month'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all 
                ${filter === f
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-lg'
                  : 'text-white/70 hover:text-white bg-white/5 border border-white/10'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
        <select 
          value={gameFilter} 
          onChange={(e) => setGameFilter(e.target.value)}
          className={`bg-[#1a1a24] border border-white/10 rounded-lg px-4 py-2 text-white/70 text-sm focus:border-[#7C3AED]`}
        >
          {games.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {/* VOD Grid */}
      <div className={`grid md:grid-cols-3 gap-6`}>
        {vods.map((vod) => (
          <div key={vod.id} className={`group bg-[#252535] rounded-2xl border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-[#7C3AED]/20 transition-all`}>
            <div className={`relative aspect-[16/9] overflow-hidden`}>
              <img 
                src={vod.image} 
                alt={vod.title}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}
              />
              <div className={`absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1`}>
                {vod.duration}
              </div>
            </div>
            <div className={`p-5`}>
              <h3 className={`font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-[#7C3AED] transition-colors`}>{vod.title}</h3>
              <div className={`flex items-center gap-4 text-xs text-white/60 mb-3`}>
                <span>{vod.date}</span>
                <span className={`flex items-center gap-1`}>
                  <Eye className={`w-3 h-3`} />
                  {vod.peakViewers} peak
                </span>
                <span className={`text-[#F59E0B]`}>{vod.earnings}</span>
              </div>
              <div className={`flex gap-2`}>
                <button className={`flex-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white py-2 px-4 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-all flex items-center justify-center gap-2`}>
                  <Scissors className={`w-4 h-4`} />
                  Create Clip
                </button>
                <button className={`p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all`}>
                  <Trash2 className={`w-4 h-4`} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {vods.length === 0 && (
        <div className={`text-center py-24 text-white/50`}>
          <Video className={`w-16 h-16 mx-auto mb-4 opacity-50`} />
          <h3 className={`text-xl font-bold mb-2`}>No VODs yet</h3>
          <p>Start streaming to save your highlights automatically</p>
        </div>
      )}
    </div>
  );
}
