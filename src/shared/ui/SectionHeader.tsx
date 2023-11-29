"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

type SectionHeaderProps = {
  pretitle: string;
  title: string;
};

export default function SectionHeader({ pretitle, title }: SectionHeaderProps) {
  return (
    <header>
      <motion.h3
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {pretitle}
      </motion.h3>
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center"
      >
        {title}
      </motion.h2>
    </header>
  );
}
