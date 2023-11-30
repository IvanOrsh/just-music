import Image from "next/image";

import { Events } from "@/components/events";
import Hero from "@/components/Hero";
import Player from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
    </main>
  );
}
