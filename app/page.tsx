import Hero from "@/sections/Hero";
import Services from "@/sections/Service";
import Trusted from "@/sections/Trusted";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Trusted By Section */}
      <Trusted />
      {/* <Services /> */}
      <Services />
    </main>
  );
}
