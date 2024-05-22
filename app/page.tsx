"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-9 px-24 pt-10">
      <Header />
      <Hero />
    </main>
  );
}