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
      <TitleSection title="Palm Hotel & Beach Club" subTitle="Barcelona Spain" />

      {/* Deskripsi */}
      <section className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-2xl font-extralight mb-4">We are Palm Hotel & Beach Club</h2>
        <p className="leading-relaxed font-normal">
          Palm Hotel & Beach Club is a luxurious seaside sanctuary...
        </p>
      </section>

      <TripleRowCarousel />

      {/* Services */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-white mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Luxury Spa", desc: "Relax and rejuvenate...", img: "/images/spa.jpg" },
              { title: "Fine Dining", desc: "Experience Mediterranean cuisine...", img: "/images/dining.jpg" },
              { title: "Private Beach", desc: "Exclusive access to serene beaches.", img: "/images/beach.jpg" },
            ].map((s, i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image src={s.img} alt={s.title} width={400} height={250} className="w-full h-56 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-300">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="bg-gray-800 py-16">
          <h2 className="text-3xl font-light text-center text-white mb-10">What Our Guests Say</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
            {[
              { name: "Sophia M.", text: "The most relaxing vacation I’ve ever had.", img: "/images/guest1.jpg" },
              { name: "Daniel R.", text: "Palm Hotel exceeded all expectations.", img: "/images/guest2.jpg" },
            ].map((t, i) => (
              <div key={i} className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
                <Image src={t.img} alt={t.name} width={80} height={80} className="rounded-full mb-4 object-cover" />
                <p className="text-gray-300 italic mb-4">{t.text}</p>
                <h4 className="text-white font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* History */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-light text-center text-white mb-10">Our History</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image src="/images/history.jpg" alt="Hotel History" width={500} height={300} className="rounded-lg shadow-lg object-cover" />
            <div className="text-gray-300 leading-relaxed">
              <p>
                Established in 1985, Palm Hotel & Beach Club began as a small seaside retreat...
              </p>
              <p className="mt-4">
                Today, we continue to honor our legacy by offering guests an unforgettable experience...
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}