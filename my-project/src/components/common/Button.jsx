import React from "react";

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  let baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors duration-200";

  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles = "bg-pink-600 text-white hover:bg-pink-500";
      break;
    case "secondary":
      variantStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "outline":
      variantStyles = "border border-pink-600 text-pink-600 hover:bg-pink-50";
      break;
    default:
      variantStyles = "bg-pink-600 text-white hover:bg-pink-500";
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

