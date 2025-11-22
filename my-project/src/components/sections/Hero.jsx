import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";
const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/african-delivery-man-people-motorcycle-urban-scene-183047672.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Premium Gifts & Flowers Delivered in Kenya
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Surprise your loved ones with elegant, curated gifts for any occasion.
        </p>
        <div className="mb-6">
          <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm">Till (Buy Goods): <strong className="ml-2">3106430</strong></span>
        </div>
        <Button 
          variant="primary" 
          onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
