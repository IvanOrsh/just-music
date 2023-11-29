"use client";

import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "@/shared/variants";

const locationSequence = [
  "Los Angeles, CA",
  3000,
  "Rio de Janeiro, Brazil",
  3000,
  "London, UK",
  3000,
  "Paris, France",
  3000,
  "Berlin, Germany",
  3000,
  "Tokyo, Japan",
  3000,
];

export default function Hero() {
  return (
    <section className="h-[80vh  xl:h-[850px]" id="home">
      <div className="relative container mx-auto h-full flex justify-center items-center xl:justify-start before:absolute before:top-overflow-hidden before:h-full before:w-full before:z-[-1]">
        {/* text */}
        <div>text</div>

        {/* image */}
        <div className="hidden xl:flex before:rounded-full">
          <Image
            src="/assets/hero/candidate-2.jpg"
            alt="hero"
            quality={100}
            priority
            height={893}
            width={700}
          />
        </div>
      </div>
    </section>
  );
}
