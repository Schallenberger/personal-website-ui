"use client";
import AboutMe from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-24 pt-10">
      <Header />
      <div className="w-full flex flex-col gap-9">
        <Hero />
        <AboutMe />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
