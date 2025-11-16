import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Stats from "./components/sections/Stats";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Products />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
