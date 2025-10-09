import React from 'react';
import { useCart } from '../Helper/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartSidebar() {
  const { 
    cartItems, 
    removeFromCart, 
    clearCart, 
    incrementQty, 
    decrementQty, 
    totalPrice,
    isSidebarOpen,
    closeSidebar,
    lastAddedProduct
  } = useCart();

  // Get the background image - use lastAddedProduct or fallback to first cart item
  const backgroundImage = lastAddedProduct?.image || (cartItems.length > 0 ? cartItems[0].image : null);

  return (
    <>
      {/* Backdrop with blurred product image */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          backgroundColor: backgroundImage ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.5)'
        }}
      />
      
      {/* Additional overlay for better contrast */}
      {backgroundImage && (
        <div 
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)'
          }}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-gray-100 z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold" style={{ fontFamily: '"Poiret One", cursive' }}>
            CART
          </h2>
          <button 
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white mx-4 my-4 rounded-lg">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Your bag is empty</h3>
              <p className="text-gray-600 mb-6">Add some beautiful items to get started</p>
              <button 
                onClick={closeSidebar}
                className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6">
              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrementQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      
                      <span className="w-8 text-center">{item.qty}</span>
                      
                      <button
                        onClick={() => incrementQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white mx-4 mb-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-lg font-semibold">₹{totalPrice}</span>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={clearCart}
                className="w-full bg-pink-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-pink-300 transition-colors font-medium"
              >
                Clear Bag
              </button>
              <Link 
                to="/checkout" 
                onClick={closeSidebar}
                className="block w-full bg-pink-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-pink-300 transition-colors font-medium text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
