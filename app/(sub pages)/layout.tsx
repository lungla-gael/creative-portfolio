"use client"
import { Inter } from "next/font/google";
import HomeBtn from "../components/HomeBtn";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function SubPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen flex flex-col items-start py-10 px-12">
      {/* Top-left Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <HomeBtn />
      </div>

      {/* Page-specific content */}
      {children}
    </main>
  );
}
