import Hero from "@/components/Hero";
import Player from "@/components/Player";
import { Events } from "@/components/events";
import { Albums } from "@/components/albums";
import { Blog } from "@/components/blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
    </main>
  );
}
