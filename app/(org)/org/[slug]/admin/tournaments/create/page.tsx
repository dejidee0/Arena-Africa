"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, Music, ShieldAlert, Code, Palette, Star } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function TournamentCreate() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const tournamentFormats = [
    { name: "Single Elimination", desc: "Fast bracket, one loss out" },
    { name: "Double Elimination", desc: "Second chance bracket" },
    { name: "Round Robin", desc: "Everyone plays everyone" },
    { name: "Swiss", desc: "Pair by record, no elimination" },
  ];

  const [selectedFormat, setSelectedFormat] = useState(0);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={() => setStep(Math.max(1, step - 1))} className="p-2 rounded-xl bg-white/5 hover:bg-white/10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all ${step > i + 1 ? 'bg-green-500 scale-110' : step === i + 1 ? 'bg-purple-500' : 'bg-white/30'}`} />
          ))}
          <span className="text-white/60">Step {step} of {totalSteps}</span>
        </div>
        <div className="w-10" />
      </div>

      {/* Step 1: Details */}
      {step === 1 && (
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            Tournament Details
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-white/70 mb-2 font-medium">Tournament Name</label>
              <input type="text" placeholder="e.g. Lagos Arena CODM Cup" className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 mb-2 font-medium">Game</label>
                <select className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500">
                  <option>COD Mobile</option>
                  <option>PUBG Mobile</option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-medium">Region</label>
                <select className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500">
                  <option>Lagos</option>
                  <option>All Nigeria</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-white/70 mb-2 font-medium">Max Players</label>
              <input type="number" placeholder="128" className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-white/70 mb-2 font-medium">Entry Fee</label>
              <div className="flex gap-3">
                <input type="number" placeholder="0" className="flex-1 bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500" />
                <StatusBadge status="Free Entry" color="green" />
              </div>
            </div>
            <div>
              <label className="block text-white/70 mb-2 font-medium">Description</label>
              <textarea rows={4} placeholder="Describe your tournament..." className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 resize-vertical" />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Format */}
      {step === 2 && (
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            Tournament Format
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {tournamentFormats.map((format, i) => (
              <div 
                key={i}
                className={`p-6 rounded-2xl border border-white/10 hover:border-purple-500 cursor-pointer group hover:shadow-2xl hover:shadow-purple-500/20 transition-all ${selectedFormat === i ? 'border-purple-500 bg-purple-500/5 shadow-2xl shadow-purple-500/20' : ''}`}
                onClick={() => setSelectedFormat(i)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{format.name}</h3>
                  {selectedFormat === i && <ChevronRight className="w-5 h-5 text-purple-400" />}
                </div>
                <p className="text-white/60">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Prizes */}
      {step === 3 && (
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            Prize Distribution
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-[#252535] rounded-xl border border-white/10">
              <div className="flex-1">
                <label className="block text-white/70 mb-2 font-medium">Prize Type</label>
                <select className="w-full bg-[#1A1A26] border border-white/10 rounded-xl px-4 py-3 text-white">
                  <option>Fixed Pool</option>
                  <option>Dynamic</option>
                  <option>Sponsored</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-white/70 mb-2 font-medium">Total Pool</label>
                <input type="number" placeholder="₦100,000" className="w-full bg-[#1A1A26] border border-white/10 rounded-xl px-4 py-3 text-[#F59E0B] font-bold text-lg focus:border-yellow-500" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { place: "1st", percent: "50%" },
                { place: "2nd", percent: "30%" },
                { place: "3rd", percent: "20%" },
              ].map((prize, i) => (
                <div key={i} className="p-4 bg-[#252535] rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-[#F59E0B] mb-1">{prize.place}</div>
                  <StatusBadge status={prize.percent} color="gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Schedule */}
      {step === 4 && (
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            Schedule & Publish
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 mb-2 font-medium">Start Date</label>
                <input type="date" className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-medium">End Date</label>
                <input type="date" className="w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-[#252535] rounded-xl border border-white/10">
                <input id="stream" type="checkbox" className="w-5 h-5 rounded border-white/20 bg-[#1A1A26] text-purple-500 focus:ring-purple-500" />
                <label htmlFor="stream" className="text-white font-medium flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Enable Live Stream Integration
                </label>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#252535] rounded-xl border border-white/10">
                <input id="publish" type="checkbox" className="w-5 h-5 rounded border-white/20 bg-[#1A1A26] text-purple-500 focus:ring-purple-500" />
                <label htmlFor="publish" className="text-white font-medium flex items-center gap-2">
                  Make Public (Publish to Arena)
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <ActionButton variant="ghost" onClick={() => setStep(Math.max(1, step - 1))}>
          <ChevronLeft className="w-5 h-5" />
          Back
        </ActionButton>
        <ActionButton variant="primary" className="px-8" onClick={() => setStep(Math.min(totalSteps, step + 1))}>
          {step === totalSteps ? "Create Tournament" : "Next"}
          <ChevronRight className="w-5 h-5" />
        </ActionButton>
      </div>
    </div>
  );
}

