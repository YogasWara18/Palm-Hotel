import { Metadata } from "next";
import TitleSection from "@/components/title-section";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

const About = () => {
  return (
    <div>
      <TitleSection
        title="Palm Hotel & Beach Club"
        subTitle="Barcelona Spain"
      />
      <div className="mx-auto py-20 px-4">
        <div className="relative w-full h-[500px]">
          <Image
            src="/about-image.jpg"
            width={650}
            height={679}
            alt="Palm Hotel"
          />
          <div>
            <h1 className="text-5xl font-extralight text-gray-900 mb-4">
              Who we Are
            </h1>
            <p className="text-gray-700 py-5 font-normal">
              At Palm Hotel & Beach Club, we believe luxury should feel
              effortless and nature should be part of every moment. Nestled
              along the sun-kissed shores of Barcelona, our beachfront oasis
              blends modern elegance with tropical charm. Whether you are here
              for a romantic escape, a family getaway, or a stylish event, we
              offer curated experiences, warm hospitality, and unforgettable
              views.
            </p>
            
            <div className="absolute inset-0 flex items-center justify-start px-8">
              <div className="bg-white/80 p-6 rounded-lg max-w-xl">
                <div className="md:pr-10 text-left">
                  <h1 className="text-5xl font-extralight text-gray-900 mb-4">
                    Who we Are
                  </h1>
                  <p className="text-gray-700 font-normal leading-relaxed text-justify">
                    At Palm Hotel & Beach Club, we believe luxury should feel
                    effortless and nature should be part of every moment.
                    Nestled along the sun-kissed shores of Barcelona, our
                    beachfront oasis blends modern elegance with tropical charm.
                    Whether you are here for a romantic escape, a family
                    getaway, or a stylish event, we offer curated experiences,
                    warm hospitality, and unforgettable views.
                  </p>
                </div>

                <Image
                  src="/about-image.jpg"
                  width={650}
                  height={50}
                  alt="about"
                />
              </div>
            </div>
          </div>
          {/* Contact Form */}
        </div>
      </div>
    </div>
  );
};

export default About;
