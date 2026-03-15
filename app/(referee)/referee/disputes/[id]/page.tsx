"use client";

import { ArrowLeft, CheckCircle, AlertCircle, Play, Pause } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AvatarCircle } from "@/components/ui/AvatarCircle";

export default function DisputeDetail() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-2xl bg-white/5 hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold">Dispute #D001 - Score Dispute</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white/60">CODM Cup - Round of 16</span>
            <StatusBadge status="Open" color="orange" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Player 1 Submission */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl">
            <AvatarCircle initials="JD" gradient="from-purple-500 to-pink-500" />
            <div className="flex-1">
              <h3 className="font-bold text-lg">@johndoe</h3>
              <StatusBadge status="Winner Claim" color="purple" />
            </div>
          </div>
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-green-400" />
              <span className="font-bold text-green-400">Match Recording</span>
            </div>
            <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center text-white/40">
              Video Player Placeholder
            </div>
            <p className="text-sm text-white/60 mt-4">Player claims final score was 16-12 in their favor. Replay shows disputed kill at 14-12.</p>
          </div>
        </div>

        {/* Player 2 Submission */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-2xl">
            <AvatarCircle initials="P2" gradient="from-gray-500 to-slate-500" />
            <div className="flex-1">
              <h3 className="font-bold text-lg">@player2</h3>
              <StatusBadge status="Loser Claim" color="gray" />
            </div>
          </div>
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-green-400" />
              <span className="font-bold text-green-400">Match Recording</span>
            </div>
            <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center text-white/40">
              Video Player Placeholder
            </div>
            <p className="text-sm text-white/60 mt-4">Player claims score should be 13-15 due to invalid kill and connection issues.</p>
          </div>
        </div>
      </div>

      {/* Evidence Timeline */}
      <div>
        <h3 className="text-xl font-bold mb-6">Evidence Timeline</h3>
        <div className="space-y-4">
          {[
            { time: "14:23", type: "P1 Submission", status: "Uploaded" },
            { time: "14:28", type: "P2 Response", status: "Uploaded" },
            { time: "14:45", type: "Referee Review Start", status: "In Progress" },
          ].map((event, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-[#252535] rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-mono text-sm font-bold text-white">
                {event.time}
              </div>
              <div className="flex-1">
                <div className="font-medium">{event.type}</div>
                <StatusBadge status={event.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ruling Panel */}
      <div className="bg-gradient-to-r from-slate-900/50 to-gray-900/50 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          Make Ruling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Declare Winner
            </h4>
            <div className="space-y-3">
              <ActionButton variant="primary" className="w-full mb-2">@johndoe</ActionButton>
              <ActionButton variant="ghost" className="w-full border-2 border-purple-500/50 bg-purple-500/5">@player2</ActionButton>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Additional Notes</h4>
            <textarea 
              rows={5}
              placeholder="Document your reasoning, key timestamps, rule references..."
              className="w-full bg-[#1A1A26] border border-white/10 rounded-2xl p-4 text-white focus:border-purple-500 resize-none"
            />
          </div>
        </div>
        <div className="flex gap-4 pt-4 border-t border-white/10">
          <ActionButton variant="primary" className="flex-1">Confirm Ruling</ActionButton>
          <ActionButton variant="ghost" className="flex-1">Need More Evidence</ActionButton>
        </div>
      </div>

      {/* Match Context */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h4 className="font-bold mb-4 flex items-center gap-2">Match Context</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center p-3">
            <div className="font-bold text-lg">16-12</div>
            <div className="text-white/60">Final Score</div>
          </div>
          <div className="text-center p-3">
            <div className="font-bold text-lg">Round of 16</div>
            <div className="text-white/60">Stage</div>
          </div>
          <div className="text-center p-3">
            <div className="font-bold text-lg">12:34</div>
            <div className="text-white/60">Duration</div>
          </div>
          <div className="text-center p-3">
            <div className="font-bold text-lg">No Prior Disputes</div>
            <div className="text-white/60">Head to Head</div>
          </div>
        </div>
      </div>
    </div>
  );
}

