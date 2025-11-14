import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const Hero = () => {
  return (
    <div className="pt-28 bg-pink-50">
      <SectionWrapper className="grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Beautiful Flowers & Thoughtful Gifts Delivered with Love
          </h1>
          <p className="text-gray-600 mb-6">
            Kenya’s most trusted online flower & gift shop. Fresh blooms,
            curated baskets, and fast same-day delivery.
          </p>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-500">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200"
          alt="Bouquet"
          className="rounded-2xl shadow-xl object-cover"
        />
      </SectionWrapper>
    </div>
  );
};

export default Hero;
