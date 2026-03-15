"use client";

import { Upload, Shield, CreditCard, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { AvatarCircle } from "@/components/ui/AvatarCircle";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-8">
      {/* Org Profile */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 p-8">
        <h2 className="text-2xl font-bold mb-6">Organization Profile</h2>
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <AvatarCircle initials="NE" size={80} gradient="from-yellow-400 to-orange-500" />
            <label className="absolute -bottom-2 -right-2 bg-[#252535] border-2 border-white/20 p-2 rounded-2xl cursor-pointer hover:bg-white/10">
              <Upload className="w-5 h-5" />
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="flex-1 space-y-2">
            <input type="text" placeholder="Nexus Esports" className="w-full bg-transparent border-none text-3xl font-bold text-white focus:outline-none" />
            <input type="text" placeholder="ne.com/org/nexus-esports" className="w-full text-white/60 text-sm" />
          </div>
        </div>
        <textarea rows={4} placeholder="Organization bio..." className="w-full bg-[#1A1A26] border border-white/10 rounded-xl p-4 text-white resize-vertical focus:border-purple-500" />
        <ActionButton variant="primary" className="mt-6">Save Profile</ActionButton>
      </div>

      {/* Co-Admins */}
      <div className="bg-[#252535] rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Co-Admins (2/5)
          </h3>
          <ActionButton variant="ghost">+ Add Co-Admin</ActionButton>
        </div>
        <div className="divide-y divide-white/10">
          {[
            { name: "Sarah Johnson", role: "Admin", handle: "@sarahj", active: true },
            { name: "Mike Chen", role: "Moderator", handle: "@mikechen", active: true },
          ].map((admin, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-white/5">
              <div className="flex items-center gap-3">
                <AvatarCircle initials="SJ" />
                <div>
                  <div className="font-semibold">{admin.name}</div>
                  <div className="text-sm text-white/60">@{admin.handle}</div>
                </div>
                <StatusBadge status={admin.role} color="purple" />
              </div>
<ActionButton variant="danger">
                <Trash2 className="w-4 h-4" />
              </ActionButton>
            </div>
          ))}
        </div>
      </div>

      {/* Billing */}
      <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/30 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Pro Plan</h3>
            <p className="text-white/60">Unlimited tournaments, advanced analytics, priority support</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <div>5 active tournaments</div>
          <div>₦2.4M paid out</div>
          <div>148 members</div>
          <div>Next billing: Mar 15</div>
        </div>
        <ActionButton variant="primary" className="w-full">Upgrade to Enterprise</ActionButton>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-r from-red-500/5 to-rose-500/5 border border-red-500/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <Trash2 className="w-6 h-6" />
          Danger Zone
        </h3>
        <p className="text-red-300 mb-6">Delete this organization and all associated data. This action cannot be undone.</p>
        <ActionButton variant="danger" className="w-48">Delete Organization</ActionButton>
      </div>
    </div>
  );
}

