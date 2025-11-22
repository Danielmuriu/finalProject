import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-20">
        <div className="flex items-center gap-2">
          <img src="https://lh3.googleusercontent.com/p/AF1QipP3BJTtO7M0IIHzGbuyjKp0PF8cSApNfn_POwmR=s680-w680-h510" alt="Purpink Logo" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">Gifts Paradise</h1>
            <p className="text-xs text-gray-600">Kenya</p>
          </div>
        </div>

        <ul className="hidden lg:flex gap-8 font-medium items-center">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li className="relative">
            <div className="flex items-center gap-2">
              <a href="#shop" className="hover:underline">Browse Shop</a>
              <div className="text-sm text-gray-400">|</div>
              <a href="https://share.google/Mh5yDt53HgMhsbAJo" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium">External Shop</a>
            </div>
          </li>
          <li><a href="#testimonials">Best Sellers</a></li>
          <li><a href="#products">New Arrivals</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)} className="lg:hidden p-2 border rounded">
            {mobileOpen ? "Close" : "Menu"}
          </button>

          {/* external shop CTA for larger screens */}
          <a href="https://share.google/Mh5yDt53HgMhsbAJo" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block px-4 py-2 bg-pink-600 text-white rounded-lg font-medium">External Shop</a>

          {/* cart button */}
          <CartButton />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white w-full border-t shadow-md">
          <div className="max-w-7xl mx-auto p-4">
            <ul className="flex flex-col gap-3">
              <li><a href="#hero" onClick={() => setMobileOpen(false)}>Home</a></li>
              <li><a href="#features" onClick={() => setMobileOpen(false)}>Features</a></li>
              <li className="flex items-center justify-between">
                <div>
                  <a href="#shop" onClick={() => setMobileOpen(false)} className="block">Browse Shop</a>
                  <a href="https://share.google/Mh5yDt53HgMhsbAJo" target="_blank" rel="noopener noreferrer" className="block text-pink-600 mt-1">External Shop</a>
                </div>
              </li>
              <li><a href="#testimonials" onClick={() => setMobileOpen(false)}>Best Sellers</a></li>
              <li><a href="#products" onClick={() => setMobileOpen(false)}>New Arrivals</a></li>
              <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
              <li className="pt-2">
                <div className="border-t pt-3">
                  <CartButton />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

const CartButton = () => {
  const { totalItems, toggleCart } = useContext(CartContext);
  return (
    <button onClick={toggleCart} className="px-3 py-2 rounded-lg border flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M16 11V6a2 2 0 00-2-2H6V3a1 1 0 00-2 0v1H3a1 1 0 000 2h1l1 9a2 2 0 002 2h6a2 2 0 002-2v-1h1a1 1 0 100-2h-1z" />
      </svg>
      <span className="font-medium">Cart</span>
      <span className="bg-pink-600 text-white px-2 py-0.5 rounded text-sm">{totalItems}</span>
    </button>
  );
};

export default Navigation;
