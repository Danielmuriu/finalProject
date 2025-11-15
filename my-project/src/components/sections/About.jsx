import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" className="grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        alt="About us"
        className="w-full rounded-xl"
      />
      <div>
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-lg">
          Gifts Paradise Kenya is your trusted destination for premium gifts, flowers, and hampers. We aim to make gifting meaningful, memorable, and stress-free.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
