import React, { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-600">
          Gifts Paradise Kenya
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Shop</li>
          <li className="hover:text-pink-500 cursor-pointer">About</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? (
            <svg width="28" height="28" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Shop</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
