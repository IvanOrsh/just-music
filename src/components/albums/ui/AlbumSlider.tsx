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
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/albums",
    getAlbums
  );

  if (error) return "Failed to fetch data";
  if (!data) return "Loading...";

  return (
    <>
      <Swiper>
        {data.map((album) => (
          <SwiperSlide key={album.id} className="mb-12">
            <div>
              {/* img */}
              <div>image</div>

              {/* track container */}
              <div>track container</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumb swiper */}
      <Swiper>thumb slider</Swiper>
    </>
  );
}
