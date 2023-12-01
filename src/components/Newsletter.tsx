"use client";

import { motion } from "framer-motion";

import SectionHeader from "@/shared/ui/SectionHeader";
import { fadeIn } from "@/shared/variants";

export default function Newsletter() {
  return (
    <section
      className="section bg-newsletter bg-fixed h-[480px] bg-cover w-full bg-center bg-no-repeat "
      id="contact"
    >
      <div className="container mx-auto h-full space-y-2">
        <SectionHeader
          pretitle="Get in touch"
          title="Subscribe to our newsletter"
        />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col h-full items-center justify-center"
        >
          {/* input */}
          <div className="relative flex items-center w-full max-w-xl">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-[50px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8"
            />
            <button
              type="submit"
              className="bg-accent absolute right-2 h-[45px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6 font-bold"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
