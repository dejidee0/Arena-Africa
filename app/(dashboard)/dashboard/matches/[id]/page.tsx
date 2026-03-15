"use client";

import React, { useState } from "react";
import { 
  Gamepad2, Clock, AlertTriangle, Upload, ArrowLeft, CheckCircle, AlertCircle 
} from "lucide-react";
import Link from "next/link";

export default function MatchRoomPage() {
  const [yourScore, setYourScore] = useState("");
  const [oppScore, setOppScore] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<"win" | "loss" | null>(null);

  const handleSubmit = () => {
    if (yourScore && oppScore) {
      setSubmitted(true);
      setResult(parseInt(yourScore) > parseInt(oppScore) ? "win" : "loss");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-white/60 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-xl font-bold">Match Room</h2>
            <p className="text-sm text-white/60">Lagos Arena CODM Cup • Quarterfinals</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          LIVE
        </div>
      </div>

      {/* Match Card */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-8">
        <div className="flex items-center justify-center gap-8">
          {/* Your Card */}
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-3xl font-bold mx-auto mb-4 ring-4 ring-[#7C3AED]/30">
              G
            </div>
            <div className="text-lg font-bold">@GhostAlpha</div>
            <div className="text-sm text-white/60">2,450 ELO</div>
            <div className="mt-2 inline-block px-2 py-1 rounded bg-[#7C3AED]/20 text-[#7C3AED] text-xs font-medium">YOU</div>
          </div>

          {/* VS Section */}
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#F59E0B]">VS</div>
            <div className="flex items-center gap-2 mt-2 text-white/60 justify-center">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Ends in 12:45</span>
            </div>
          </div>

          {/* Opponent Card */}
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-3xl font-bold mx-auto mb-4 border-2 border-white/20">
              A
            </div>
            <div className="text-lg font-bold">@AcePlayer</div>
            <div className="text-sm text-white/60">2,380 ELO</div>
          </div>
        </div>
      </div>

      {/* Score Submission */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Submit Score</h3>
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <input
              type="number"
              value={yourScore}
              onChange={(e) => setYourScore(e.target.value)}
              placeholder="0"
              className="w-24 h-24 text-center text-4xl font-bold bg-[#1a1a24] border border-white/10 rounded-xl outline-none focus:border-[#7C3AED]"
            />
            <p className="mt-2 text-sm text-white/60">Your Score</p>
          </div>
          <span className="text-2xl text-white/40">:</span>
          <div className="text-center">
            <input
              type="number"
              value={oppScore}
              onChange={(e) => setOppScore(e.target.value)}
              placeholder="0"
              className="w-24 h-24 text-center text-4xl font-bold bg-[#1a1a24] border border-white/10 rounded-xl outline-none focus:border-[#7C3AED]"
            />
            <p className="mt-2 text-sm text-white/60">Opponent Score</p>
          </div>
        </div>

        {/* Result Animation */}
        {submitted && (
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto bg-gradient-to-br from-green-400 to-emerald-600">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <p className={`mt-2 font-bold ${result === "win" ? "text-green-400" : "text-red-400"}`}>
              {result === "win" ? "YOU WON!" : "YOU LOST"}
            </p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!yourScore || !oppScore || submitted}
          className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          Submit Result
        </button>
      </div>

      {/* Evidence Upload */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <h3 className="font-bold mb-4">Evidence Upload</h3>
        <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-[#7C3AED]/50 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 mx-auto text-white/40 mb-2" />
          <p className="text-sm text-white/60">Drag & drop screenshot here</p>
          <p className="text-xs text-white/40 mt-1">or click to browse</p>
        </div>
      </div>

      {/* Raise Dispute */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">Raise Dispute</h3>
            <p className="text-sm text-white/60">Report any issues with this match</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <button className="px-4 py-2 rounded-xl border border-red-500/50 text-red-400 text-sm hover:bg-red-500/10">
              Raise Dispute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
