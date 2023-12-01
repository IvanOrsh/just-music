"use client";

import { motion } from "framer-motion";

import AlbumSlider from "./AlbumSlider";
import { fadeIn } from "@/shared/variants";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function Albums() {
  return (
    <section id="discography">
      <div className="container mx-auto space-y-8">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        {/* album slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
}
