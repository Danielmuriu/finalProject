import React from "react";

const Navigation = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-20">
        <h1 className="text-2xl font-bold">Gifts Paradise Kenya</h1>
        <ul className="hidden lg:flex gap-10 font-medium">
          <li>Home</li>
          <li>Features</li>
          <li>Products</li>
          <li>Testimonials</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="lg:hidden p-2 border rounded">Menu</button>
      </div>
    </nav>
  );
};

export default Navigation;
