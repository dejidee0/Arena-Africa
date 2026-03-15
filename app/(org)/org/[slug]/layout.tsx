"use client"

import { useParams, usePathname } from 'next/navigation'

import Link from 'next/link'

import { LayoutDashboard, Users, Trophy, AlertCircle, BarChart2, Settings, Building2, Plus } from 'lucide-react'

export default function OrgLayout({ children }: { children: React.ReactNode }) {

  const params = useParams()

  const pathname = usePathname()

  const slug = params.slug as string

  const menuItems = [

    { label: 'Overview', href: `/org/${slug}/admin`, icon: LayoutDashboard },

    { label: 'Roster', href: `/org/${slug}/admin/roster`, icon: Users },

    { label: 'Tournaments', href: `/org/${slug}/admin/tournaments`, icon: Trophy },

    { label: 'Disputes', href: `/org/${slug}/admin/disputes`, icon: AlertCircle },

    { label: 'Analytics', href: `/org/${slug}/admin/analytics`, icon: BarChart2 },

    { label: 'Settings', href: `/org/${slug}/admin/settings`, icon: Settings },

  ]

  return (

    <div className="flex min-h-screen bg-[#0A0A0F]">

      <aside className="w-60 bg-[#111118] border-r border-white/10 flex flex-col">

        <div className="p-4 border-b border-white/10">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">

              <Building2 className="w-5 h-5 text-white" />

            </div>

            <div>

              <p className="font-semibold text-white text-sm">Nexus Esports</p>

              <p className="text-xs text-green-400">Verified Org</p>

            </div>

          </div>

        </div>

        <nav className="flex-1 p-3 space-y-1">

          {menuItems.map((item) => {

            const isActive = pathname === item.href

            return (

              <Link key={item.label} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive ? 'bg-purple-500/20 text-purple-400 border-l-2 border-purple-500' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>

                <item.icon className="w-4 h-4" />

                {item.label}

              </Link>

            )

          })}

        </nav>

        <div className="p-3 border-t border-white/10">

          <Link href={`/org/${slug}/admin/tournaments/create`} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium">

            <Plus className="w-4 h-4" /> Create Tournament

          </Link>

        </div>

      </aside>

      <main className="flex-1 overflow-auto">{children}</main>

    </div>

  )

}
