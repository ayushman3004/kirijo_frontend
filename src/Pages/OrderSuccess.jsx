import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OrderSuccess() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: '"Poiret One", cursive' }}>
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for your purchase. Your order has been confirmed and will be processed shortly.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block bg-black text-white py-3 px-6 rounded-lg hover:opacity-80 transition-opacity font-medium"
            >
              Continue Shopping
            </Link>
            <Link 
              to="/cart" 
              className="block bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
