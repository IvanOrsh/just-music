"use client";

import Image from "next/image";
import { RiMapPin2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

import { type Events } from "../model/types";
import { fadeIn } from "@/shared/variants";

type EventBoxProps = {
  events?: Events;
};

export default function EventBox({ events }: EventBoxProps) {
  // TODO: screen for no events

  if (!events) {
    return (
      <div>
        <h2 className="text-2xl text-center text-accent font-bold">
          No events
        </h2>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="bg-secondary/80 rounded-[10px] p-4 xl:p-12 relative">
        <div className="flex flex-col xl:flex-row justify-between xl:h-full gap-x-4 h-[620px]">
          <div className="hidden xl:flex w-[400px]">
            <Image
              src={"/assets/events/artist1.png"}
              alt="le artist"
              width={358}
              height={489}
              priority
              quality={100}
            />
          </div>

          <div className="flex-1  h-[540px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-white/10 xl:pr-6  ">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col xl:flex-row xl:justify-between items-center gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b-4 border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0"
              >
                <div className="flex flex-col xl:flex-row items-center gap-x-4">
                  {/* day & month */}
                  <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                    <div className="text-[44px] font-bold text-accent">
                      {event.date.day}
                    </div>
                    <div className="text-[20px] font-extrabold">
                      {event.date.month}
                    </div>
                  </div>
                </div>

                {/* location */}
                <div className="w-64 flex flex-col gap-y-2">
                  <div className="text-lg leading-none font-bold">{`${event.location.city}, ${event.location.country}`}</div>
                  <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                    <div className="text-primary text-lg">
                      <RiMapPin2Fill />
                    </div>
                    <div className="font-light">{event.location.address}</div>
                  </div>
                </div>

                {/* price range  */}
                <div className="w-[100px] text-lg text-center text-white">
                  {event.priceRange}
                </div>

                {/* btn */}
                <button className="btn btn-sm btn-accent">Get tickets</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
