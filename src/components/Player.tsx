"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";

import { fadeIn } from "@/shared/variants";

export default function Player() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="section mx-auto mt-20 bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-0 flex items-center "
    >
      <div className="container mx-auto flex flex-col items-center xl:flex-row">
        {/* text & avatar */}
        <div className="hidden w-[300px] xl:flex items-center gap-x-4">
          <div className="relative w-16 h-16">
            <Image src="/assets/player/avatar.png" alt="avatar" fill />
          </div>

          <div className="leading-none space-y-1">
            <div className="text-lg font-medium">Mia Reynolds</div>
            <div className="text-sm font-light">Freedom</div>
          </div>
        </div>

        {/* player */}
        <div className="w-full max-w-4xl">
          <AudioPlayer
            width={"100%"}
            loop
            preload="none"
            color="#333"
            volume={40}
            volumePlacement="top"
            src="/assets/freedom.mp3"
            style={{
              marginInline: "auto",
              color: "white",
              background: "transparent",
              boxShadow: "none",
              width: "100%",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
