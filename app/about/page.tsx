import { Metadata } from "next";
import TitleSection from "@/components/title-section";
import React from "react";
import TripleRowCarousel from "@/components/tripleRowCaraosel";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

const About = () => {
  return (
    <div className="space-y-1 bg-gray-900">

    

      <TitleSection
        title="Palm Hotel & Beach Club"
        subTitle="Barcelona Spain"
      />

         {/* Deskripsi */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extralight mb-4 text-white">
         We are Palm Hotel & Beach Club Where Elegance Meets the Ocean
        </h2>
        <p className="text-white leading-relaxed font-normal">
          Palm Hotel & Beach Club is a luxurious seaside sanctuary nestled along
          the sun-kissed shores of Barcelona, Spain. Designed for travelers who
          seek both tranquility and sophistication, our hotel blends
          contemporary elegance with the natural beauty of the Mediterranean
          coast.
        </p>
        <p className="text-white mt-4 leading-relaxed font-normal">
          From the moment you arrive, you’ll be welcomed by lush tropical
          gardens, warm hospitality, and breathtaking ocean views. Each of our
          thoughtfully designed rooms and suites features modern amenities,
          artistic touches, and private balconies that open to the sea breeze or
          serene garden landscapes.
        </p>
      </section>

      <TripleRowCarousel />

     

      {/* Google maps */}
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-gray-900">
        <div className="p-4 text-center">
          <h3 className="text-lg font-light mb-2 text-white">Google Maps</h3>
          <iframe
            title="Infinity Pool Palm Hotel Barcelona"
            src="https://www.google.com/maps?q=Infinity+Pool+Palm+Hotel+Barcelona&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
          <p className="text-sm text-blue-600 underline mt-2"></p>
        </div>
      </div>
    </div>
  );
};

export default About;
