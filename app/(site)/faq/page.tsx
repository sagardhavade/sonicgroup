import React from "react";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const FaqPage = () => {
  return (
    <div className="pb-20 pt-40">
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  );
};

export default FaqPage;
