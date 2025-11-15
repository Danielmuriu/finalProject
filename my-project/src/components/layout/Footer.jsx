import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <h4 className="text-xl font-bold mb-4">Gifts Paradise Kenya</h4>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
