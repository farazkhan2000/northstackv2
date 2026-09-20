import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Northstack",
  description: "Software engineering and digital product development company.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body id="top" className="bg-white font-[family-name:var(--font-inter)] text-zinc-950 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
