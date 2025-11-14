import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";

const testimonials = [
  { name: "Mary N.", message: "Beautiful flowers and fast delivery! Highly recommended." },
  { name: "James K.", message: "The gift hamper was amazing. Perfect for my anniversary." },
  { name: "Sarah W.", message: "Quality products and great customer service." },
];

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials">
      <h3 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h3>
      <div className="grid lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <Card key={i} description={`"${t.message}"`} title={t.name} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
