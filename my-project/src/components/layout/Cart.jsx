import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../common/Button";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalItems, totalPrice, isOpen, toggleCart } = useContext(CartContext);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [mpesaProcessing, setMpesaProcessing] = useState(false);
  const [mpesaStatus, setMpesaStatus] = useState("");

  if (!isOpen) return null;

  const handleStartCheckout = () => {
    setCheckoutOpen(true);
    setMpesaStatus("");
  };

  const validateMpesaPhone = (phone) => {
    // Accept formats: 07xxxxxxxx or +2547xxxxxxxx
    const normalized = phone.replace(/\s+/g, "");
    return /^(?:\+254|0)7\d{8}$/.test(normalized);
  };

  const handleMpesaPay = () => {
    if (!validateMpesaPhone(mpesaPhone)) {
      setMpesaStatus("Please enter a valid Kenyan phone number (e.g. 07XXXXXXXX).");
      return;
    }

    // Simulate STK Push
    setMpesaProcessing(true);
    setMpesaStatus("Sending STK Push to your phone...");
    setTimeout(() => {
      setMpesaProcessing(false);
      setMpesaStatus("Success: STK Push sent. Complete the payment on your phone.");
      // Clear cart to simulate order placed
      clearCart();
    }, 1800);
  };

  return (
    <>
      <div className="fixed right-4 top-20 w-80 bg-white rounded-lg shadow-lg z-60 overflow-auto">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold">Your Cart ({totalItems})</h3>
          <button onClick={toggleCart} className="text-gray-600">Close</button>
        </div>
        <div className="p-4 max-h-96">
          {cartItems.length === 0 && <p className="text-gray-600">Cart is empty.</p>}
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center gap-3 mb-4">
              {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />}
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                <div className="text-pink-600 font-bold">{item.price}</div>
              </div>
              <button onClick={() => removeFromCart(item.name)} className="text-sm text-red-500">Remove</button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold">Total</div>
            <div className="font-bold">KSh {totalPrice}</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={clearCart} className="flex-1">Clear</Button>
            <Button variant="primary" onClick={handleStartCheckout} className="flex-1">Checkout</Button>
          </div>
        </div>
      </div>

      {/* Checkout modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setCheckoutOpen(false)} />
          <div className="bg-white rounded-lg p-6 z-80 w-full max-w-md mx-4">
            <h3 className="text-xl font-semibold mb-4">Checkout</h3>

            <div className="mb-4">
              <label className="block font-medium mb-2">Payment method</label>
              <div className="flex gap-3">
                <label className="flex items-center gap-2">
                  <input type="radio" name="pay" checked={paymentMethod === "mpesa"} onChange={() => setPaymentMethod("mpesa")} />
                  M-Pesa
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="pay" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                  Card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="pay" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} />
                  PayPal
                </label>
              </div>
            </div>

            {paymentMethod === "mpesa" && (
              <div className="mb-4">
                <label className="block font-medium mb-2">Phone number (M-Pesa)</label>
                <input value={mpesaPhone} onChange={(e) => setMpesaPhone(e.target.value)} placeholder="07XXXXXXXX" className="w-full p-2 border rounded mb-2" />
                {mpesaStatus && <div className="text-sm text-gray-700 mb-2">{mpesaStatus}</div>}
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setCheckoutOpen(false)}>Cancel</Button>
                  <Button variant="primary" onClick={handleMpesaPay} disabled={mpesaProcessing}>{mpesaProcessing ? "Processing..." : `Pay KSh ${totalPrice}`}</Button>
                </div>
              </div>
            )}

            {paymentMethod === "card" && (
              <div>
                <p className="mb-4">Card payments are not yet implemented. Please choose M-Pesa or PayPal.</p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setCheckoutOpen(false)}>Cancel</Button>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div>
                <p className="mb-4">PayPal payments are not configured in this demo.</p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setCheckoutOpen(false)}>Cancel</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
