import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Button from "../common/Button";

const features = [
  { title: "Fast Delivery", description: "Same-day delivery available in Nairobi." },
  { title: "High Quality", description: "Premium flowers and curated gift items." },
  { title: "Affordable", description: "Best prices in Kenya for luxury gifts." },
];

const Features = () => {
  return (
    <SectionWrapper id="features" className="grid lg:grid-cols-3 gap-10">
      {features.map((f, i) => (
        <Card key={i} title={f.title} description={f.description}>
          <Button variant="primary">Learn More</Button>
        </Card>
      ))}
    </SectionWrapper>
  );
};

export default Features;
