"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";
import { fadeIn } from "@/shared/variants";

export default function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px flex flex-col xl:flex-row justify-between items-center">
        {/* logo */}
        <Link href={"#"} className="relative flex w-[226px] h-[37.64px]">
          <Image
            src="/assets/header/logo.svg"
            fill
            alt="logo"
            className="object-contain"
          />
        </Link>

        {/* nav */}
        <Nav containerStyles="hidden xl:flex items-center gap-x-4" />

        {/* nav mobile */}
        <NavMobile />

        {/* menu btn */}
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>

        {/* social icons */}
        <Socials
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
}
