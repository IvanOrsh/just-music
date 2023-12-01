import Image from "next/image";

import { Events } from "@/components/events";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import { Albums } from "@/components/albums";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
    </main>
  );
}
