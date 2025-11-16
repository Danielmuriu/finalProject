import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";
import Button from "../common/Button";

const products = [
  // -------- FEATURED GIFT --------
  { 
    name: "Premium Gift Selection", 
    price: "KSh 3,500", 
    image: "https://lh3.googleusercontent.com/glsgmb/AMnFcuqcrvRgFGjGj23kNiVnFV_cRfiBG_FmPAGv-c3aQGwUJbzQ9waLRlR0_TYdLVA_171-G2sBFL5BIF7ZfJThhOUalg=w330-h304-k-no-rj-sc0x00ffffff" 
  },
  // -------- FLOWERS --------
  { 
    name: "Rose Flower Bouquet", 
    price: "KSh 2,500", 
    image: "https://images.pexels.com/photos/7462745/pexels-photo-7462745.jpeg" 
  },
  { 
    name: "Chocolate Gift Box", 
    price: "KSh 1,800", 
    image: "https://images.pexels.com/photos/7407224/pexels-photo-7407224.jpeg" 
  },
  { 
    name: "Luxury Gift Hamper", 
    price: "KSh 5,000", 
    image: "https://images.unsplash.com/photo-1761156337873-b9c9d3d43ebe?w=500&auto=format&fit=crop&q=60" 
  },
  ,
  { 
    name: "Birthday Surprise Box", 
    price: "KSh 4,200", 
    image: "https://plus.unsplash.com/premium_photo-1661337106118-c78cbf8b26f0?w=500&auto=format&fit=crop&q=60" 
  },

  { 
    name: "Luxury Perfume Bottles", 
    price: "KSh 4,500", 
    image: "https://images.pexels.com/photos/13875781/pexels-photo-13875781.jpeg" 
  },
  ,

  { 
    name: "Elegant Ladies Handbag", 
    price: "KSh 3,800", 
    image: "https://images.pexels.com/photos/22432988/pexels-photo-22432988.jpeg"  
  },
];

const Products = () => {
  return (
    <div id="products">
      <SectionWrapper className="grid lg:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <Card key={i} title={p.name} price={p.price} image={p.image}>
            <Button variant="primary">Buy Now</Button>
          </Card>
        ))}
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
