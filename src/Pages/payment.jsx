import React from "react";
import { useCart } from "../Helper/CartContext";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
export default function Payment() {
  const { subtotal, shippingFee, total } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 text-center text-2xl tracking-widest"><Logo /></header>

      <nav className="text-xs text-gray-500 max-w-4xl mx-auto px-4">
        <Link to="/checkout">Information</Link> <span className="mx-2">—</span> <Link to="/shipping">Shipping</Link> <span className="mx-2">—</span> <span className="text-black">Payment</span>
      </nav>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-8">
        <div>
          <h3 className="text-sm font-semibold mb-3">PAYMENT</h3>
          <p className="text-xs text-gray-600 mb-4">All transactions are secure and encrypted.</p>

          <div className="border p-4 space-y-3">
            <input className="w-full border p-3" placeholder="Card number" />
            <div className="grid grid-cols-3 gap-3">
              <input className="border p-3" placeholder="MM/YY" />
              <input className="border p-3" placeholder="CVC" />
              <input className="border p-3" placeholder="Name on card" />
            </div>
            <button className="w-full bg-pink-200 py-3 text-xs mt-2">PAY NOW</button>
          </div>

          <Link to="/shipping" className="text-xs inline-block mt-3">Return to Shipping</Link>
        </div>

        <aside className="border-l pl-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-xs"><span>Subtotal</span><span>INR {subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between text-xs"><span>Shipping</span><span>{shippingFee ? `INR ${shippingFee.toLocaleString()}` : "FREE"}</span></div>
            <div className="flex justify-between font-semibold pt-2 border-t"><span>Total</span><span>INR {total.toLocaleString()}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}


