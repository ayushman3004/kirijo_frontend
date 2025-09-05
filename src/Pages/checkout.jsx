import React from "react";
import { useCart } from "../Helper/CartContext";
import { Link } from "react-router-dom";
import Logo from "../Components/LOGO";

export default function Checkout() {
  const { items, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 text-center text-2xl tracking-widest"><Logo /></header>

      <nav className="text-xs text-gray-500 max-w-6xl mx-auto px-4">
        <span>Cart</span> <span className="mx-2">—</span> <span className="text-black">Information</span> <span className="mx-2">—</span> <Link to="/shipping">Shipping</Link> <span className="mx-2">—</span> <span>Payment</span>
      </nav>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-8">
        <div className="md:col-span-2">
          <section>
            <h3 className="text-sm font-semibold mb-3">CONTACT INFORMATION</h3>
            <input placeholder="Email or mobile phone number" className="w-full border p-3 mb-2" />
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" />
              Keep me up to date on news and exclusive offers
            </label>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-semibold mb-3">SHIPPING ADDRESS</h3>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="First name" className="border p-3" />
              <input placeholder="Last name" className="border p-3" />
            </div>
            <input placeholder="Address" className="w-full border p-3 mt-3" />
            <input placeholder="Apartment, suite, etc. (optional)" className="w-full border p-3 mt-3" />
            <input placeholder="City" className="w-full border p-3 mt-3" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <select className="border p-3">
                <option>Rajasthan</option>
                <option>Assam</option>
                <option>Maharashtra</option>
              </select>
              <input placeholder="Postal code" className="border p-3" />
            </div>
            <label className="flex items-center gap-2 text-xs text-gray-600 mt-3">
              <input type="checkbox" /> Save this information for next time
            </label>

            <div className="flex justify-between items-center mt-6">
              <Link to="/bag" className="text-xs">Return To Cart</Link>
              <Link to="/shipping" className="bg-pink-200 px-6 py-3 text-xs">CONTINUE TO SHIPPING</Link>
            </div>
          </section>
        </div>

        <aside className="border-l pl-6">
          <div className="space-y-8">
            {items.map((p) => (
              <div key={p.id} className="flex items-center gap-4">
                <img src={p.image} alt={p.name} className="h-20 object-contain" />
                <div className="flex-1 text-xs">
                  <p className="uppercase text-[10px] text-gray-500">{p.name}</p>
                </div>
                <div className="text-[10px]">INR {p.price?.toLocaleString()}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex gap-2">
              <input placeholder="GIFT CARD" className="flex-1 border p-3 text-xs" />
              <button className="bg-pink-200 px-4 text-xs">APPLY</button>
            </div>
          </div>

          <div className="mt-8 space-y-2 text-sm">
            <div className="flex justify-between text-xs"><span>Subtotal</span><span>INR {subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between text-xs"><span>Shipping</span><span>—</span></div>
            <div className="flex justify-between font-semibold pt-2 border-t"><span>Total</span><span>INR {subtotal.toLocaleString()}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}


