import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="pt-32 pb-20 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Premium Gifts & Flowers Delivered in Kenya
        </h1>
        <p className="text-lg mb-6">
          Surprise your loved ones with elegant, curated gifts for any occasion.
        </p>
        <Button variant="primary">Shop Now</Button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
        alt="Gifts"
        className="w-full rounded-xl"
      />
    </SectionWrapper>
  );
};

export default Hero;
