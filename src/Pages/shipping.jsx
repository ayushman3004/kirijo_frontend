import React, { useState } from "react";
import { useCart } from "../Helper/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/LOGO";

export default function Shipping() {
  const { setShippingFee, subtotal } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState("standard");

  const fees = {
    standard: 0,
    express: 299,
  };

  const continueToPayment = () => {
    setShippingFee(fees[method]);
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 text-center text-2xl tracking-widest"><Logo /></header>

      <nav className="text-xs text-gray-500 max-w-4xl mx-auto px-4">
        <Link to="/checkout">Information</Link> <span className="mx-2">—</span> <span className="text-black">Shipping</span> <span className="mx-2">—</span> <span>Payment</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <h3 className="text-sm font-semibold mb-4">SHIPPING METHOD</h3>
        <div className="space-y-3">
          <label className="flex justify-between items-center border p-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <input type="radio" name="ship" checked={method === "standard"} onChange={() => setMethod("standard")} />
              <span className="text-sm">Standard (5-7 days)</span>
            </div>
            <span className="text-sm">FREE</span>
          </label>
          <label className="flex justify-between items-center border p-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <input type="radio" name="ship" checked={method === "express"} onChange={() => setMethod("express")} />
              <span className="text-sm">Express (2-3 days)</span>
            </div>
            <span className="text-sm">INR 299</span>
          </label>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Link to="/checkout" className="text-xs">Return to Information</Link>
          <button onClick={continueToPayment} className="bg-pink-200 px-6 py-3 text-xs">CONTINUE TO PAYMENT</button>
        </div>

        <div className="mt-6 text-xs text-gray-600">Subtotal: INR {subtotal.toLocaleString()}</div>
      </div>
    </div>
  );
}


