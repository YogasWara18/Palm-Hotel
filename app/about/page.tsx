"use client";

import TitleSection from "@/components/title-section";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import quote from "@/public/logo.png";

import "swiper/css";
import "swiper/css/autoplay";

// Data testimonial
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Travel Blogger",
    message:
      "Palm Hotel & Beach Club exceeded my expectations! The service was impeccable, and the beach views were breathtaking. A perfect getaway spot.",
    image: "/Testimoni-alice.jpg",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Entrepreneur",
    message:
      "An unforgettable experience! The amenities were top-notch, and the staff made me feel like royalty. Highly recommend for anyone visiting Barcelona.",
    image: "/Testimoni-mark.jpg",
  },
  {
    id: 3,
    name: "Sofia Martinez",
    role: "Photographer",
    message:
      "The perfect blend of luxury and relaxation. The beach club is stunning, and the hotel rooms are beautifully designed. I can't wait to return!",
    image: "/Testimoni-sofia.jpg",
  },
];

// --- Client Component inline ---
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

// --- Page utama ---
export default function About() {
  return (
    <>
      <div className="space-y-16 bg-blue-200">
        <TitleSection title="Palm Hotel & Beach Club" subTitle="Barcelona Spain" />

        {/* Services */}
        <AnimatedSection>
          <section
            className="max-w-6xl mx-auto px-6 py-16 
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        rounded-xl shadow-lg"
          >
            <h2
      className="text-4xl md:text-5xl font-extrabold text-center 
                 text-white 
                 bg-clip-text tracking-wide drop-shadow-lg mb-12"
    >
      Our Service
    </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Luxury Spa",
                  desc: "Relax and rejuvenate with world class treatments.",
                  img: "/spa.jpg",
                },
                {
                  title: "Fine Dining",
                  desc: "Experience Mediterranean cuisine with a modern twist.",
                  img: "/fine-dining.jpg",
                },
                {
                  title: "Beach Party",
                  desc: "Exclusive access to serene beaches and vibrant nightlife.",
                  img: "/beach-party.jpg",
                },
                {
                  title: "Infinity Pool",
                  desc: "Swim with breathtaking views of the ocean .",
                  img: "/infinity-pool.jpg",
                },
                {
                  title: "Private Suites",
                  desc: "Enjoy luxury suites with personalized service.",
                  img: "/private-suite.jpg",
                },
                 {
                  title: "Exclusive Room",
                  desc: "Discover exclusive suites at the beach club private",
                  img: "/exclusive-room.jpg",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`relative rounded-lg overflow-hidden shadow-xl p-[2px]
                        bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400
                        animate-[borderGlow_6s_linear_infinite]`}
                >
                  {/* Inner card */}
                  <div className="bg-gray-900 rounded-lg flex flex-col h-full">
                    {/* Gambar */}
                    <Image
                      src={s.img}
                      alt={s.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover rounded-t-lg"
                    />

                    {/* Konten */}
                    <div className="p-6 flex flex-col flex-grow items-center text-center space-y-4">
                      <h3 className="text-xl text-yellow-300 font-semibold">
                        {s.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                      <button
                        className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md shadow-md 
                             hover:bg-yellow-300 transition duration-300"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

    {/* Gallery */}
<AnimatedSection>
  <section className="max-w-7xl mx-auto px-6 py-16">
    <h2
      className="text-4xl md:text-5xl font-extrabold text-center 
                 text-white 
                 bg-clip-text tracking-wide drop-shadow-lg mb-12"
    >
      Beach Club Gallery
    </h2>

    {/* Flexbox container */}
    <div className="flex flex-wrap justify-center gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-2xl shadow-xl group 
                     flex-shrink-0 w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] lg:w-[calc(20%-1rem)] 
                     border-4 border-transparent hover:border-teal-400 transition duration-500"
        >
          <Image
            src={`/img${i + 1}.jpg`}
            alt={`Gallery ${i + 1}`}
            width={400}
            height={300}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition duration-500 
                          flex items-end justify-center pb-4">
            <p className="text-white font-semibold tracking-wide bg-teal-600/70 px-4 py-1 rounded-full">
              Gallery {i + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
</AnimatedSection>

        {/* Teams Testimonials (tidak diubah) */}
        <div className="mt-30 px-[8%] lg:px-[12%] teams-bg py-20 flex flex-col justify-center items-center">
          <Image src={quote} alt="quote" width={170} height={150} />
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 1800 }}
            modules={[Autoplay]}
            className="w-full justify-center items-center lg:w-[70%]"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center flex-col">
                  <p className="GolosText text-2xl font-semibold text-center">
                    {item.message}
                  </p>

                  <div className="flex items-center gap-5 mt-5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={150}
                      height={100}
                      className="rounded-2xl"
                    />
                    <div>
                      <h2 className="GolosText font-bold text-2xl">{item.name}</h2>
                      <p className="GolosText font-semibold ">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}