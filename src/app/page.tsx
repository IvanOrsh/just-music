import Image from "next/image";

import { Events } from "@/components/events";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
    </main>
  );
}
