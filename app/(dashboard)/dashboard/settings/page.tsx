"use client";

import React, { useState } from "react";
import { Gamepad2, User, Lock, Bell, Shield, AlertTriangle, Camera, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const tabs = ["Profile", "Security", "Notifications", "Privacy", "Danger Zone"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Account Settings</h2>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
              activeTab === tab
                ? "bg-[#7C3AED] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Section */}
      {activeTab === "Profile" && (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-3xl font-bold">
                G
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-bold">Profile Photo</h3>
              <p className="text-sm text-white/60">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/60">Full Name</label>
              <input
                type="text"
                defaultValue="Gabriel O."
                className="mt-1 w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]"
              />
            </div>
            <div>
              <label className="text-xs text-white/60">Username</label>
              <div className="mt-1 flex items-center bg-[#252535] border border-white/10 rounded-xl overflow-hidden">
                <span className="px-4 text-white/60">@</span>
                <input
                  type="text"
                  defaultValue="GhostAlpha"
                  className="flex-1 bg-transparent py-3 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs text-white/60">Bio</label>
            <textarea
              rows={3}
              placeholder="Tell us about yourself..."
              className="mt-1 w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/60">Region</label>
              <select className="mt-1 w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]">
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>South Africa</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-white/60">Primary Game</label>
              <select className="mt-1 w-full bg-[#252535] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]">
                <option>COD Mobile</option>
                <option>PUBG Mobile</option>
                <option>EA FC</option>
                <option>Free Fire</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social Links</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-[#252535] border border-white/10 rounded-xl px-4">
                <Twitter className="w-5 h-5 text-white/60" />
                <input type="text" placeholder="Twitter/X handle" className="flex-1 bg-transparent py-3 outline-none" />
              </div>
              <div className="flex items-center gap-3 bg-[#252535] border border-white/10 rounded-xl px-4">
                <MessageCircle className="w-5 h-5 text-white/60" />
                <input type="text" placeholder="Discord username" className="flex-1 bg-transparent py-3 outline-none" />
              </div>
              <div className="flex items-center gap-3 bg-[#252535] border border-white/10 rounded-xl px-4">
                <Instagram className="w-5 h-5 text-white/60" />
                <input type="text" placeholder="Instagram" className="flex-1 bg-transparent py-3 outline-none" />
              </div>
              <div className="flex items-center gap-3 bg-[#252535] border border-white/10 rounded-xl px-4">
                <Youtube className="w-5 h-5 text-white/60" />
                <input type="text" placeholder="YouTube channel" className="flex-1 bg-transparent py-3 outline-none" />
              </div>
            </div>
          </div>

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold">
            Save Changes
          </button>
        </div>
      )}

      {/* Security Section */}
      {activeTab === "Security" && (
        <div className="space-y-6">
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <h3 className="font-bold mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-white/60">Current Password</label>
                <input type="password" className="mt-1 w-full bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]" />
              </div>
              <div>
                <label className="text-xs text-white/60">New Password</label>
                <input type="password" className="mt-1 w-full bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]" />
              </div>
              <div>
                <label className="text-xs text-white/60">Confirm New Password</label>
                <input type="password" className="mt-1 w-full bg-[#1a1a24] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]" />
              </div>
              <button className="px-6 py-2.5 rounded-xl bg-[#7C3AED]/20 text-[#7C3AED] font-semibold">
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold">Two-Factor Authentication</h3>
                <p className="text-sm text-white/60 mt-1">Add an extra layer of security to your account</p>
              </div>
              <button
                onClick={() => setTwoFactor(!twoFactor)}
                className={`w-12 h-6 rounded-full transition-colors ${twoFactor ? "bg-green-500" : "bg-white/20"}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${twoFactor ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>

          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <h3 className="font-bold mb-4">Connected Accounts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
                <span>Google</span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Connected</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
                <span>Discord</span>
                <button className="px-4 py-1.5 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] text-sm">Connect</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
                <span>Apple</span>
                <button className="px-4 py-1.5 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] text-sm">Connect</button>
              </div>
            </div>
          </div>

          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <h3 className="font-bold mb-4">Active Sessions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
                <div>
                  <div className="font-medium">Chrome on Windows</div>
                  <div className="text-xs text-white/60">Lagos, Nigeria • Last active 2 min ago</div>
                </div>
                <button className="text-red-400 text-sm hover:underline">Revoke</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-xl">
                <div>
                  <div className="font-medium">Safari on iPhone</div>
                  <div className="text-xs text-white/60">Lagos, Nigeria • Last active 1 hour ago</div>
                </div>
                <button className="text-red-400 text-sm hover:underline">Revoke</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Section */}
      {activeTab === "Notifications" && (
        <div className="space-y-4">
          {[
            { label: "Match reminders", desc: "30 min before match starts", enabled: true },
            { label: "Tournament results", desc: "When tournaments end", enabled: true },
            { label: "Payout notifications", desc: "When you receive winnings", enabled: true },
            { label: "New followers", desc: "When someone follows you", enabled: true },
            { label: "Brand deal updates", desc: "New deals and offers", enabled: true },
            { label: "Platform announcements", desc: "News and updates", enabled: false },
            { label: "Email digest", desc: "Weekly summary", enabled: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#252535] rounded-xl border border-white/10">
              <div>
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-white/60">{item.desc}</div>
              </div>
              <button className={`w-12 h-6 rounded-full transition-colors ${item.enabled ? "bg-green-500" : "bg-white/20"}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${item.enabled ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Privacy Section */}
      {activeTab === "Privacy" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#252535] rounded-xl border border-white/10">
            <div>
              <div className="font-medium">Profile Visibility</div>
              <div className="text-sm text-white/60">Allow others to view your profile</div>
            </div>
            <button className="w-12 h-6 rounded-full bg-green-500">
              <div className="w-5 h-5 rounded-full bg-white translate-x-6" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#252535] rounded-xl border border-white/10">
            <div>
              <div className="font-medium">Show Earnings</div>
              <div className="text-sm text-white/60">Display your total earnings on profile</div>
            </div>
            <button className="w-12 h-6 rounded-full bg-green-500">
              <div className="w-5 h-5 rounded-full bg-white translate-x-6" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#252535] rounded-xl border border-white/10">
            <div>
              <div className="font-medium">Show ELO Rank</div>
              <div className="text-sm text-white/60">Display your rank on public leaderboards</div>
            </div>
            <button className="w-12 h-6 rounded-full bg-green-500">
              <div className="w-5 h-5 rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </div>
      )}

      {/* Danger Zone */}
      {activeTab === "Danger Zone" && (
        <div className="space-y-4">
          <div className="bg-[#252535] rounded-2xl border border-red-500/30 p-6">
            <h3 className="font-bold text-red-400 mb-2">Delete Account</h3>
            <p className="text-sm text-white/60 mb-4">
              Once you delete your account, there is no going back. All your data, earnings, and progress will be permanently deleted.
            </p>
            <button className="px-6 py-2.5 rounded-xl border border-red-500 text-red-400 font-semibold hover:bg-red-500/10">
              Delete Account
            </button>
          </div>
          <div className="bg-[#252535] rounded-2xl border border-white/10 p-6">
            <h3 className="font-bold mb-2">Export My Data</h3>
            <p className="text-sm text-white/60 mb-4">
              Download all your data including match history, earnings, and profile information.
            </p>
            <button className="px-6 py-2.5 rounded-xl border border-white/10 text-white/70 font-semibold hover:bg-white/5">
              Export Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
