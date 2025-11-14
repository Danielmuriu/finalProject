import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Button from "../common/Button";

const features = [
  {
    title: "Fast Delivery",
    description: "Same-day delivery available in Nairobi and surrounding areas.",
  },
  {
    title: "High Quality",
    description: "Premium flowers and curated gift items for every occasion.",
  },
  {
    title: "Affordable",
    description: "Best prices in Kenya for luxury gifts and hampers.",
  },
];

const Features = () => {
  return (
    <SectionWrapper id="features">
      <h3 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h3>
      <div className="grid lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <Card key={i} title={f.title} description={f.description}>
            <Button variant="primary">Learn More</Button>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
