import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.name === product.name);
      if (existing) {
        return prev.map((p) => p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prev) => prev.filter((p) => p.name !== productName));
  };

  const clearCart = () => setCartItems([]);

  const toggleCart = () => setIsOpen((v) => !v);

  const totalItems = cartItems.reduce((s, i) => s + (i.quantity || 0), 0);
  const totalPrice = cartItems.reduce((s, i) => {
    const priceNum = Number(String(i.price).replace(/[^0-9.]/g, "")) || 0;
    return s + priceNum * (i.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalPrice, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
