import React from "react";

const Card = ({ image, title, description, price, children, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      {image && (
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {price && <p className="text-pink-600 font-bold mb-4">{price}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
