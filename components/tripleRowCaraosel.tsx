"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const images = [
  "/caraosel1.jpg",
  "/caraosel3.jpg",
  "/caraosel4.jpg",
  "/caraosel5.jpg",
  "/caraosel6.jpg",
  "/caraosel10.jpg",
  "/caraosel7.jpg",
  "/caraosel11.jpg",
  "/caraosel8.jpg",
  "/caraosel12.jpg",
  "/caraosel9.jpg",
  "/caraosel13.jpg",
  "/caraosel15.jpg",
];

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const CarouselRow = ({ reverse = false }: { reverse?: boolean }) => {
  const [shuffledImages, setShuffledImages] = useState<string[] | null>(null);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  if (!shuffledImages) return null; // ⏳ Hindari render sebelum gambar siap

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={5}
      loop
      autoplay={{
        delay: 10,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={3000}
      className="w-full"
    >
      {shuffledImages.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={200}
            height={180}
            alt={`Image ${index + 1}`}
            className="w-full max-w-[380px] h-[180px] object-cover rounded-lg mx-auto mt-1 mb-1"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const DoubleRowCarousel = () => {
  return (
    <div className="space-y-0.5"> {/* ⬅️ Tambah jarak antar baris */}
      <CarouselRow reverse={false} />
      <CarouselRow reverse={true} />
    </div>
  );
};

export default DoubleRowCarousel;

