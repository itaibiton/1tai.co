"use client";

import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
// import Cursor from "@/components/Cursor";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full relative min-h-screen">
      <Grid />
      {/* <Cursor /> */}
      {/* <Header /> */}
      <Hero />
      {/* <Services /> */}
      {/* <Footer /> */}
    </main>
  );
}
