"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Gamepad2, Zap, Home, Compass, Crown, Activity, Users, MessagesSquare, Menu, X } from 'lucide-react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Discover', href: '/discover', icon: Compass },
    { name: 'Compete', href: '/compete', icon: Crown },
    { name: 'Streams', href: '/streams', icon: Activity },
    { name: 'Creators', href: '/creators', icon: Users },
    { name: 'Community', href: '/community', icon: MessagesSquare },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/10">
        <div className="h-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F59E0B] transition-all duration-300" style={{width: '60%'}} />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0A0A0F]/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              KultVibe
            </span>
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 font-medium">
              Beta
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center gap-2 hover:text-white hover:bg-white/10 px-3 py-2 rounded-xl transition-all duration-200 group"
              >
                <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                {name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/register"
              className="rounded-xl px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
            >
              Join
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
            >
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0A0A0F]/95 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-4 text-base font-medium text-white/90">
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                <Link
                  href="/register"
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Join
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

