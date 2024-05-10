import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pb-20 pt-40">
      <About />
      <FeaturesTab />
      {/* <Testimonial /> */}
    </div>
  );
};

export default AboutPage;
