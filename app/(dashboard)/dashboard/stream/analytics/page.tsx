"use client";

import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Calendar, MapPin, Activity, Clock, Gamepad2 } from 'lucide-react';

const stats = {
  totalViews: '48.2K',
  newFollowers: '234',
  peakViewers: '520',
  earnings: '₦45,000'
};

const viewersData = [1200, 3400, 2800, 4500, 3800, 2900, 5200];

const topStreams = [
  { title: 'CODM Lagos Finals', date: 'Today', duration: '4h30m', peak: '245', avg: '189', earnings: '₦8,500' },
  { title: 'PUBG Squad', date: 'Yesterday', duration: '3h15m', peak: '189', avg: '142', earnings: '₦5,200' },
  { title: 'EA FC 1v1', date: 'Feb 12', duration: '2h45m', peak: '156', avg: '124', earnings: '₦3,800' },
];

const regions = [
  { name: 'Lagos', percent: 42 },
  { name: 'Abuja', percent: 18 },
  { name: 'Accra', percent: 12 },
  { name: 'Other Nigeria', percent: 15 },
  { name: 'Diaspora', percent: 13 }
];

const games = [
  { name: 'COD Mobile', percent: 45 },
  { name: 'PUBG', percent: 28 },
  { name: 'EA FC', percent: 18 },
  { name: 'Other', percent: 9 }
];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('Last 7 days');

  return (
    <div className={`space-y-6`}>
      <div className={`flex items-center gap-3`}>
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center`}>
          <BarChart3 className={`w-5 h-5 text-white`} />
        </div>
        <div>
          <h1 className={`text-2xl font-bold`}>Stream Analytics</h1>
          <p className={`text-white/60`}>Understand your audience and optimize your content</p>
        </div>
      </div>

      <div className={`bg-[#252535] border border-white/10 rounded-2xl p-4 flex gap-2 overflow-x-auto pb-2`}>
        {['Last 7 days', 'Last 30 days', 'Last 90 days'].map((range) => (
          <button
            key={range}
            onClick={() => setDateRange(range)}
            className={`
              px-6 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all 
              ${dateRange === range
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-lg'
                : 'text-white/70 hover:text-white bg-white/5 border border-white/10'
              }`}
          >
            {range}
          </button>
        ))}
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
        <div className={`bg-gradient-to-br from-[#7C3AED]/10 to-[#EC4899]/10 border border-[#7C3AED]/30 rounded-2xl p-6 text-center`}>
          <Users className={`w-8 h-8 text-[#7C3AED] mx-auto mb-2`} />
          <div className={`text-2xl font-bold text-white mb-1`}>{stats.totalViews}</div>
          <div className={`text-sm text-white/60`}>Total Views</div>
        </div>
        <div className={`bg-gradient-to-br from-green-500/10 to-green-400/10 border border-green-500/30 rounded-2xl p-6 text-center`}>
          <TrendingUp className={`w-8 h-8 text-green-400 mx-auto mb-2`} />
          <div className={`text-2xl font-bold text-white mb-1`}>{stats.newFollowers}</div>
          <div className={`text-sm text-white/60`}>New Followers</div>
        </div>
        <div className={`bg-gradient-to-br from-yellow-500/10 to-yellow-400/10 border border-yellow-500/30 rounded-2xl p-6 text-center`}>
          <Users className={`w-8 h-8 text-yellow-400 mx-auto mb-2`} />
          <div className={`text-2xl font-bold text-white mb-1`}>{stats.peakViewers}</div>
          <div className={`text-sm text-white/60`}>Peak Viewers</div>
        </div>
        <div className={`bg-gradient-to-br from-[#F59E0B]/10 to-amber-500/10 border border-[#F59E0B]/30 rounded-2xl p-6 text-center`}>
          <Activity className={`w-8 h-8 text-[#F59E0B] mx-auto mb-2`} />
          <div className={`text-2xl font-bold text-[#F59E0B] mb-1`}>{stats.earnings}</div>
          <div className={`text-sm text-white/60`}>Total Earnings</div>
        </div>
      </div>

      <div className={`bg-[#252535] border border-white/10 rounded-2xl p-6`}>
        <h3 className={`font-bold mb-6 flex items-center gap-2`}>Viewers Over Time</h3>
        <div className={`flex items-end gap-1 h-32 mb-6`}>
          {viewersData.map((value, i) => (
            <div
              key={i}
              className={`flex-1 bg-gradient-to-t from-[#7C3AED] to-[#EC4899] rounded-lg mx-0.5 relative group hover:scale-110 transition-all cursor-pointer`}
              style={{ height: `${(value / Math.max(...viewersData)) * 100}%` }}
              title={`${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}: ${value.toLocaleString()}`}
            >
              <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/80 whitespace-nowrap bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
                {value.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-7 gap-2 text-xs text-white/60 text-center`}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>

      <div className={`grid md:grid-cols-2 gap-6`}>
        <div className={`bg-[#252535] border border-white/10 rounded-2xl overflow-hidden`}>
          <div className={`p-6 border-b border-white/10`}>
            <h3 className={`font-bold text-lg mb-4`}>Top Streams</h3>
          </div>
          <div className={`overflow-x-auto`}>
            <table className={`w-full`}>
              <thead>
                <tr className={`text-xs text-white/60 uppercase tracking-wide border-b border-white/10`}>
                  <th className={`text-left p-6`}>Title</th>
                  <th className={`text-left p-3`}>Date</th>
                  <th className={`text-left p-3`}>Duration</th>
                  <th className={`text-right p-3`}>Peak</th>
                  <th className={`text-right p-3`}>Avg</th>
                  <th className={`text-right p-3`}>Earnings</th>
                </tr>
              </thead>
              <tbody>
                {topStreams.map((stream, i) => (
                  <tr key={i} className={`border-b border-white/5 hover:bg-white/5`}>
                    <td className={`p-6 font-semibold text-white max-w-[200px] truncate`}>{stream.title}</td>
                    <td className={`p-3 text-white/70`}>{stream.date}</td>
                    <td className={`p-3 text-white/70`}>{stream.duration}</td>
                    <td className={`p-3 text-right font-bold text-white`}>{stream.peak}</td>
                    <td className={`p-3 text-right font-bold text-white`}>{stream.avg}</td>
                    <td className={`p-3 text-right font-bold text-[#F59E0B]`}>{stream.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`space-y-6`}>
          <div className={`bg-[#252535] border border-white/10 rounded-2xl p-6`}>
            <h3 className={`font-bold mb-6 flex items-center gap-2`}>By Region</h3>
            {regions.map((region, i) => (
              <div key={i} className={`flex items-center gap-3 mb-3 last:mb-0`}>
                <div className={`flex-1 bg-[#1a1a24] rounded-full h-2 overflow-hidden`}>
                  <div 
                    className={`h-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full`} 
                    style={{ width: `${region.percent}%` }}
                  />
                </div>
                <span className={`text-sm font-medium text-white min-w-[40px]`}>{region.percent}%</span>
                <span className={`text-sm text-white/70`}>{region.name}</span>
              </div>
            ))}
          </div>

          <div className={`bg-[#252535] border border-white/10 rounded-2xl p-6`}>
            <h3 className={`font-bold mb-6 flex items-center gap-2`}>By Game</h3>
            {games.map((game, i) => (
              <div key={i} className={`flex items-center gap-3 mb-3 last:mb-0`}>
                <div className={`flex-1 bg-[#1a1a24] rounded-full h-2 overflow-hidden`}>
                  <div 
                    className={`h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full`} 
                    style={{ width: `${game.percent}%` }}
                  />
                </div>
                <span className={`text-sm font-medium text-white min-w-[40px]`}>{game.percent}%</span>
                <span className={`text-sm text-white/70`}>{game.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`grid md:grid-cols-2 gap-6`}>
        <div className={`bg-[#252535] border border-white/10 rounded-2xl p-6`}>
          <h3 className={`font-bold mb-6 flex items-center gap-2`}>Follower Growth</h3>
          <div className={`flex items-end h-32 gap-1 bg-[#1a1a24] rounded-xl p-4 overflow-hidden`}>
            {[120, 140, 165, 180, 210, 234].map((value, i) => (
              <div
                key={i}
                className={`w-4 bg-gradient-to-t from-[#7C3AED] to-[#EC4899] rounded-lg relative group hover:w-6 transition-all cursor-pointer`}
                style={{ height: `${(value / 234) * 100}%` }}
              />
            ))}
          </div>
          <div className={`grid grid-cols-6 gap-2 mt-4 text-xs text-white/60 text-center pt-2 border-t border-white/10`}>
            {Array.from({length: 6}, (_, i) => `Day ${i+1}`).map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <p className={`text-sm text-white/60 mt-2`}>+23% growth last 30 days</p>
        </div>

        <div className={`bg-[#252535] border border-white/10 rounded-2xl p-6`}>
          <h3 className={`font-bold mb-6 flex items-center gap-2`}>Best Times (7x24 heatmap)</h3>
          <div className={`grid grid-cols-7 gap-1 text-center`}>
            {['12AM', '6AM', '12PM', '6PM'].map((time) => (
              <div key={time} className={`text-xs text-white/60 py-1`}>{time}</div>
            ))}
          </div>
          {Array.from({length: 7}).map((_, day) => (
            <div key={day} className={`flex gap-1 mb-1 last:mb-0`}>
              {Array.from({length: 4}).map((_, hour) => {
                const intensity = Math.floor(Math.random() * 4);
                const colors = ['#3730A3', '#7C3AED', '#A78BFA', '#C4B5FD'];
                return (
                  <div
                    key={hour}
                    className={`w-4 h-8 rounded flex-1 mx-0.5 cursor-pointer group hover:brightness-125 transition-all`}
                    style={{ backgroundColor: colors[intensity] }}
                    title={`${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day]} ${hour * 6}:00 PM`}
                  />
                );
              })}
            </div>
          ))}
          <div className={`grid grid-cols-7 gap-1 mt-3 text-center text-xs text-white/60`}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <p className={`text-sm text-white/60 mt-2`}>Peak times purple</p>
        </div>
      </div>
    </div>
  );
}
