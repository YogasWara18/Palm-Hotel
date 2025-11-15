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
      <div className="grid grid-cols-3 grid-rows-4 gap-4 pt-2">
        <div>
          <Image
            src="/about-image1.png"
            width={600}
            height={679}
            alt="Palm Hotel"
          />
        </div>
        <div className="col-span-2 pr-2">
          <h1 className="text-5xl font-extralight text-gray-900 mb-4 text-center">
            Who we Are
          </h1>
          <p className="text-gray-700 py-5 font-normal">
            Palm Hotel & Beach, located in Lloret de Mar, is part of the htop
            Hotels network, committed to offering an authentic Mediterranean
            experience. Situated in a coastal area bustling with tourists, the
            hotel has become a favorite choice for families, couples, and
            travelers seeking peace and comfort. Since its inception, Palm Hotel
            & Beach has been designed as a relaxation oasis with an outdoor
            pool, spa, sauna, and sun terrace overlooking the cityscape. Its
            strategic location, just 25 minutes from Girona Airport and about an
            hour from Barcelona, makes it an ideal base for exploring the charms
            of Catalonia while enjoying the comfort of a modest yet elegant
            three-star hotel.
          </p>
        </div>
        <div className="col-start-3 row-start-2">
          <Image
            src="/about-image2.png"
            width={600}
            height={479}
            alt="Palm Hotel"
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-2 pl-2">
          <h1 className="text-5xl font-extralight text-gray-900 text-center">
            Our service
          </h1>
          <p className="text-gray-700 py-5 font-normal">
            Palm Hotel & Beach is known for its dedicated staff and commitment
            to providing an unforgettable stay. They believe that every guest is
            part of the Palm family, which is why their service is always warm,
            personalized, and attentive.
          </p>
        </div>
        <div className="col-start-2 row-start-3">
          {" "}
          <Image
            src="/about-crew.jpg"
            width={900}
            height={479}
            alt="Palm Hotel"
          />
        </div>
        <div className="col-span-3 row-start-4 text-center p-2">
          <h1 className="text-5xl font-extralight text-gray-900 mb-4">
            Who we Are
          </h1>
          <p className="text-gray-700 py-5 font-normal">
            Palm Hotel & Beach, located in Lloret de Mar, is part of the htop
            Hotels network, committed to offering an authentic Mediterranean
            experience. Situated in a coastal area bustling with tourists, the
            hotel has become a favorite choice for families, couples, and
            travelers seeking peace and comfort. Since its inception, Palm Hotel
            & Beach has been designed as a relaxation oasis with an outdoor
            pool, spa, sauna, and sun terrace overlooking the cityscape. Its
            strategic location, just 25 minutes from Girona Airport and about an
            hour from Barcelona, makes it an ideal base for exploring the charms
            of Catalonia while enjoying the comfort of a modest yet elegant
            three-star hotel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
