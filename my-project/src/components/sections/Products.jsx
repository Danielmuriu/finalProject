import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Button from "../common/Button";

const products = [
  { name: "Rose Flower Bouquet", price: "KSh 2,500", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "Chocolate Gift Box", price: "KSh 1,800", image: "https://images.unsplash.com/photo-1589712183824-119d6d2d1e0a" },
  { name: "Luxury Gift Hamper", price: "KSh 5,000", image: "https://images.unsplash.com/photo-1607082349566-187a5d3c3555" },
];

const Products = () => {
  return (
    <SectionWrapper id="products" className="grid lg:grid-cols-3 gap-10">
      {products.map((p, i) => (
        <Card key={i} title={p.name} price={p.price} image={p.image}>
          <Button variant="primary">Buy Now</Button>
        </Card>
      ))}
    </SectionWrapper>
  );
};

export default Products;
