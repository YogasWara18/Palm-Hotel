import { Metadata } from "next";
import TitleSection from "@/components/title-section";
import React from "react";
import TripleRowCarousel from "@/components/tripleRowCaraosel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

const About = () => {
  return (
    <div className="space-y-1">
      <TitleSection
        title="Palm Hotel & Beach Club"
        subTitle="Barcelona Spain"
      />
      <TripleRowCarousel />

      {/* Deskripsi */}
       <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Where Elegance Meets the Ocean</h2>
        <p className="text-gray-300 leading-relaxed">
          Palm Hotel & Beach Club is a luxurious seaside sanctuary nestled along the sun-kissed shores of Barcelona, Spain.
          Designed for travelers who seek both tranquility and sophistication, our hotel blends contemporary elegance with
          the natural beauty of the Mediterranean coast.
        </p>
        <p className="text-gray-300 mt-4 leading-relaxed">
          From the moment you arrive, you’ll be welcomed by lush tropical gardens, warm hospitality, and breathtaking ocean views.
          Each of our thoughtfully designed rooms and suites features modern amenities, artistic touches, and private balconies
          that open to the sea breeze or serene garden landscapes.
        </p>
      </section>


      {/* Fasilitas */}
     <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
  {[
    { title: "Infinity Pool", image: "/about.jpg", alt: "Pool" },
    { title: "Spa & Wellness", image: "/about.jpg", alt: "Spa" },
    { title: "Fine Dining", image: "/about.jpg", alt: "Restaurant" },
    { title: "Private Beach", image: "/about.jpg", alt: "Beach" },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-900 hover:scale-105 transition-transform"
    >
      <Image
        src={item.image}
        width={500}
        height={300}
        alt={item.alt}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
    </div>
  ))}
</section>

      {/* CTA */}
      <div className="text-center">
        <button className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded hover:bg-yellow-400 transition">
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default About;
