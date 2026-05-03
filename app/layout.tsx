import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KultVibe — Your Culture. Your Stage. Your Money.",
  description: "KultVibe is Africa's competitive creator platform for gamers, streamers, developers, musicians and creators. Compete, build an audience, and get paid in ₦.",
  keywords: "kultvibe, african gaming, african creators, esports africa, streaming africa, compete earn africa",
  openGraph: {
    title: "KultVibe",
    description: "KultVibe is Africa's competitive creator platform for gamers, streamers, developers, musicians and creators. Compete, build an audience, and get paid in ₦.",
    url: "https://kultvibe.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
