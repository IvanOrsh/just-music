"use client";

import { motion } from "framer-motion";

import AlbumSlider from "./AlbumSlider";
import { fadeIn } from "@/shared/variants";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function Albums() {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        {/* album slider */}
        <div>
          <AlbumSlider />
        </div>
      </div>
    </section>
  );
}
