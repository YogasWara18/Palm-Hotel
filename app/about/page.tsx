"use client";

import TitleSection from "@/components/title-section";
import TripleRowCarousel from "@/components/tripleRowCaraosel";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
    <div className="space-y-16 bg-gray-900">
      <TitleSection
        title="Palm Hotel & Beach Club"
        subTitle="Barcelona Spain"
      />

      {/* Services */}
      <AnimatedSection>
        <section
          className="max-w-6xl mx-auto px-6 py-16 
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-light text-center text-white mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Luxury Spa",
                desc: "Relax and rejuvenate with world-class treatments.",
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

                  {/* Konten selalu tampil */}
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

      {/* Testimonials */}
      <AnimatedSection>
        <section className="bg-gray-800 py-16">
          <h2 className="text-3xl font-light text-center text-white mb-10">
            What Our Guests Say
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
            {[
              {
                name: "Sophia M.",
                text: "The most relaxing vacation I’ve ever had.",
                img: "/images/guest1.jpg",
              },
              {
                name: "Daniel R.",
                text: "Palm Hotel exceeded all expectations.",
                img: "/images/guest2.jpg",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
              >
                <Image
                  src={t.img}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 object-cover"
                />
                <p className="text-gray-300 italic mb-4">{t.text}</p>
                <h4 className="text-white font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* History */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-6 py-16 relative">
          <h2 className="text-3xl font-light text-center text-white mb-10">
            Our History
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Gambar */}
            <Image
              src="/images/history.jpg"
              alt="Hotel History"
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />

            {/* Teks berjalan transparan */}
            <div className="flex-1 relative overflow-hidden bg-transparent">
              <motion.div
                className="absolute whitespace-nowrap"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              >
                <span className="text-gray-200 text-lg font-light px-4">
                  Established in 1985, Palm Hotel & Beach Club began as a small
                  seaside retreat...
                </span>
                <span className="text-gray-200 text-lg font-light px-4">
                  Today, we continue to honor our legacy by offering guests an
                  unforgettable experience...
                </span>
                <span className="text-gray-200 text-lg font-light px-4">
                  Loved by over <strong className="text-white">1200+</strong>{" "}
                  guests who shared their comments!
                </span>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <TripleRowCarousel />
    </div>
  );
}
