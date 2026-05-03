"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, DollarSign, AlertCircle, BarChart2, Settings, Shield, Circle
} from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Transactions', href: '/admin/transactions', icon: DollarSign },
  { label: 'Disputes', href: '/admin/disputes', icon: AlertCircle },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#0A0A0F]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111118] border-r border-white/10 flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Platform Admin</p>
              <p className="text-xs text-yellow-400">KultVibe HQ</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? 'bg-yellow-500/15 text-yellow-400 border-l-2 border-yellow-400'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {item.label === 'Disputes' && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">8</span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Status */}
        <div className="p-4 border-t border-white/10">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-white/40 text-xs mb-2 font-medium uppercase tracking-wider">Platform Status</p>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 text-green-400 fill-green-400" />
              <span className="text-green-400 text-xs font-medium">All Systems Operational</span>
            </div>
            <p className="text-white/30 text-xs mt-1">99.9% uptime this month</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
