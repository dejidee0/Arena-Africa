"use client";

import { Gamepad2, Code, Music, Star } from "lucide-react";
import { GradientIconCircle } from "./ui/GradientIconCircle";

export default function LandingFeatures() {
  const features = [
    {
      title: "Gaming & Esports",
      desc: "Daily tournaments, COD Mobile, PUBG, FIFA. Win real NGN prizes.",
      gradient: "from-purple-500 to-pink-500",
      icon: Gamepad2,
      image: "/kadyn-pierce-DM3AxUubhg0-unsplash.jpg"
    },
    {
      title: "Tech & Dev Community",
      desc: "CTF competitions, hackathons, bug bounty leaderboards. Africa's home for competitive coders.",
      gradient: "from-cyan-400 to-blue-500",
      icon: Code,
      image: "/setup1.jpg"
    },
    {
      title: "Music & Entertainment",
      desc: "Beat battles, live performances, Afrobeats culture. Stream your art to Africa.",
      gradient: "from-pink-500 to-rose-500",
      icon: Music,
      image: "/afrobeat2.jpg"
    },
    {
      title: "Creator Economy",
      desc: "Brand deals from MTN, Spotify Africa, Jumia. Every creative vertical.",
      gradient: "from-yellow-400 to-orange-500",
      icon: Star,
      image: "/african_vlog.jpg"
    }
  ];

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, i) => (
        <div key={i} className="group relative overflow-hidden rounded-2xl h-48 lg:h-56 bg-[#252535] border border-white/10 hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0">
            <img 
              src={feature.image} 
              alt="" 
              className="w-full h-full object-cover brightness-50" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
          </div>
          <div className="relative p-6 h-full flex flex-col justify-end">
            <GradientIconCircle icon={feature.icon} gradient={feature.gradient} />
            <h3 className="text-xl font-bold mt-3 mb-2">{feature.title}</h3>
            <p className="text-white/80">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

