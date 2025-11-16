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
    <div>
      <TitleSection
        title="Palm Hotel & Beach Club"
        subTitle="Barcelona Spain"
      />
      <TripleRowCarousel/>
    
    </div>
  );
};

export default About;
