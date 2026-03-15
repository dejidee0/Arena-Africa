"use client";

import Header from "@/components/Header";
import type { ReactNode } from "react";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

