"use client";
export default function Aurora() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[45rem] h-[45rem] rounded-full blur-3xl bg-gradient-to-tr from-fuchsia-600/30 via-pink-400/20 to-cyan-300/20 animate-[aurora_16s_linear_infinite]" />
      <div className="absolute -bottom-24 -left-24 w-[45rem] h-[45rem] rounded-full blur-3xl bg-gradient-to-tr from-cyan-400/30 via-blue-400/20 to-fuchsia-300/20 animate-[aurora_20s_linear_infinite]" />
      <style>{`@keyframes aurora { 0%{transform:translate3d(0,0,0) rotate(0)} 50%{transform:translate3d(20px,-10px,0) rotate(60deg)} 100%{transform:translate3d(0,0,0) rotate(0)} }`}</style>
    </div>
  );
}