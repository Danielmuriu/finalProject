import React, { useContext } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Button from "../common/Button";
import bikeDelivery from "../../assets/bike-delivery.jpg";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";

// products list is imported from shared data file

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div id="products">
      <SectionWrapper className="grid lg:grid-cols-3 gap-10">
        {products.map((p, i) => {
          const img = p && p.image ? p.image : bikeDelivery;
          return (
            <Card key={i} title={p.name} price={p.price} image={img}>
              <Button variant="primary" onClick={() => addToCart(p)}>Buy Now</Button>
            </Card>
          );
        })}
      </SectionWrapper>
      <div className="max-w-7xl mx-auto text-center mt-12 px-6 lg:px-20 pb-20">
        <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=2b4071618c37111c&q=gifts+paradise+kenya&source=lnms&fbs=AIIjpHzKhFDFGqdV4Dt4FtciRsW5-Ar5zavWI2ZC-nhKeGNRvi16RI88_fFb_kOAUKWxWH6wLTMg6qLR1w14dIDkArQIHyIBAP60FAYNPFolW_hR_UFgWK-958gjOScnHJ2kybZLsWP5uoelqttTYYOpZ-zaxGUkZFr5Zzos0W9Jmmqf5oQ7tTAHWa9CiqOUlCy4I-uyIyNH&sa=X&ved=2ahUKEwj1ze2VwPaQAxUi9wIHHfAIDkwQ0pQJegQICRAB&biw=1516&bih=568&dpr=1#lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcE1QNFRlU1MxUUsyWUZ4bGE4SEp2R3ptWThMZndmN1VjZDY0bGRF" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">View More Items</Button>
        </a>
      </div>
    </div>
  );
};

export default Products;
