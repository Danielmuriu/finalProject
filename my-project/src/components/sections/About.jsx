import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=1200"
          alt="About Us"
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600">
            Gifts Paradise Kenya was created to make gift-giving easier,
            thoughtful, and more meaningful. We specialize in premium flowers,
            unique gift baskets, and curated surprises for every occasion.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
