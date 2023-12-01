"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Socials from "@/shared/ui/Socials";
import Nav from "@/shared/ui/Nav";
import { fadeIn } from "@/shared/variants";

export default function Footer() {
  return (
    <footer className="section bg-accent h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        {/* email link */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href="#">
            <h3 className="text-2xl lg:text-3xl font-semibold leading-tight">
              hello@miareynolds.com
            </h3>
          </Link>
        </motion.div>

        {/* nav */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles="flex flex-col xl:flex-row items-center justify-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>

        {/* socials */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>

        {/* logo */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link
            href="#"
            className="relative w-[250px] h-[50px] flex transition-all"
          >
            <Image
              src={"/assets/header/logo.svg"}
              fill
              className="object-contain"
              alt="logo"
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
