"use client";

import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ZodError } from "zod";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { type Albums, AlbumsData } from "../model/types";

// TODO: replace player instance with playlist

const getAlbums = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    });

    const obj: Albums = AlbumsData.parse(await response.json());
    return obj;
  } catch (error) {
    if (error instanceof ZodError) {
      // TODO: toast maybe?
      console.log(error.issues);
    } else {
      console.log(error);
    }
    throw error;
  }
};

export default function AlbumSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/albums",
    getAlbums
  );

  if (error) return "Failed to fetch data";
  if (!data) return "Loading...";

  return (
    <>
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {data.map((album) => (
          <SwiperSlide key={album.id} className="mb-12">
            <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row p-6 xl:p-12 gap-x-12">
              {/* img */}
              <div className="hidden xl:flex relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] cursor-pointer rounded-[10px] overflow-hidden">
                <Image
                  src={album.img}
                  alt={album.name}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* track container */}
              <div className="w-full flex flex-1 min-h-[500px]">
                {/* tracks */}

                <div className="w-full space-y-2">
                  {album.tracks.map((track, index) => (
                    <div key={track.name} className="flex flex-1">
                      {/* track name */}
                      <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                        <div className="text-accent text-sm xl:text-lg">
                          0{index + 1}.
                        </div>
                        <div className="text-sm xl:text-base">{track.name}</div>
                      </div>

                      {/* audio player */}
                      <AudioPlayer
                        src={track.src}
                        loop
                        preload="none"
                        volume={40}
                        volumePlacement="bottom"
                        className="album-player"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumb swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
      >
        {data.map((thumb, index) => (
          <SwiperSlide
            key={index}
            className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
          >
            <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer">
              <Image
                src={thumb.img}
                alt={thumb.name}
                fill
                priority
                className="object-contain group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
