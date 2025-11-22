import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" className="grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipP3BJTtO7M0IIHzGbuyjKp0PF8cSApNfn_POwmR=s680-w680-h510-rw"
        alt="About us"
        className="w-full rounded-xl"
      />
      <div>
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-lg mb-4">
          Looking for unique and spectacular gifts that create a lasting impression? At Purpink, we have thousands of gift items to celebrate every moment, whether it's for him or her, from anniversaries to graduations and weddings.
        </p>
        <p className="text-lg mb-4">
          Gifts paradise is also Kenya's leading online flower delivery service, known for excellent packaging by our expert florists—the best in the country.
        </p>
        <p className="text-lg">
          With gifts paradise, enjoy fast same-day delivery in Nairobi and next-day delivery all over Kenya. Our flexible and safe payment options make it easy to turn those special moments into cherished memories.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
