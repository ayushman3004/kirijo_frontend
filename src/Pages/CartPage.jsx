import React from 'react';
import { useCart } from '../Helper/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, incrementQty, decrementQty, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: '"Poiret One", cursive' }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your bag is empty</h1>
            <p className="text-gray-600 text-lg">Add some beautiful items to get started</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-8" style={{ fontFamily: '"Poiret One", cursive' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Bag</h1>
          
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 p-6 border border-gray-200 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="text-lg font-medium w-8 text-center">{item.qty}</span>
                  
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold">₹{item.price * item.qty}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Total</h2>
              <p className="text-2xl font-bold text-gray-800">₹{totalPrice}</p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Clear Bag
              </button>
              <Link to="/checkout" className="flex-1 bg-black text-white py-3 px-6 rounded-lg hover:opacity-80 transition-opacity font-medium text-center">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
