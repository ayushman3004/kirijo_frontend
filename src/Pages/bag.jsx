import React from "react";
import { useCart } from "../Helper/CartContext";
import { Link } from "react-router-dom";

export default function Bag() {
  const { items, updateQty, removeItem, subtotal, clear } = useCart();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-200/50" />

      <div className="bg-white">
        <div className="max-w-xl mx-auto py-6">
          <h1 className="text-center tracking-widest text-sm text-pink-400 border-t pt-4">बैग</h1>

          <div className="mt-10 space-y-14">
            {items.length === 0 && (
              <div className="text-center text-gray-500">
                Your bag is empty. <Link className="text-pink-400 underline" to="/">Continue shopping</Link>
              </div>
            )}

            {items.map((p) => (
              <div key={p.id} className="flex flex-col items-center">
                <img src={p.image} alt={p.name} className="h-28 object-contain" />
                <div className="mt-4 text-center">
                  <p className="uppercase text-xs tracking-widest">{p.name}</p>
                  <p className="text-[11px] mt-1">INR {p.price?.toLocaleString()}</p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button onClick={() => updateQty(p.id, -1)} className="bg-pink-200 text-[10px] px-2">-</button>
                  <span className="text-[10px] px-2">{p.quantity}</span>
                  <button onClick={() => updateQty(p.id, 1)} className="bg-pink-200 text-[10px] px-2">+</button>
                  <button onClick={() => removeItem(p.id)} className="ml-2 text-[10px] underline">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t pt-4 px-4">
            <div className="flex justify-between text-[11px]">
              <span>ADD INSTRUCTIONS</span>
              <span>0/250</span>
            </div>
            <textarea className="mt-3 w-full border p-2 h-20 text-sm" placeholder="Any special requests?" />

            <div className="mt-6 flex items-center justify-between">
              <Link to="/cart" className="bg-pink-200 text-gray-800 px-10 py-3 text-xs">VIEW CART</Link>
              <div className="text-right">
                <p className="text-[11px]">INR {subtotal.toLocaleString()}</p>
              </div>
            </div>

            {items.length > 0 && (
              <button onClick={clear} className="mt-3 text-xs underline">Clear bag</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


