import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <Navigation />
    </header>
  );
};

export default Header;

