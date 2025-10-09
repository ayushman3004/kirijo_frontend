import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('kirijo-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('kirijo-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    // Store the last added product for background image
    setLastAddedProduct(product);
    // Open sidebar when item is added
    setIsSidebarOpen(true);
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      ).filter((item) => !(item.id === id && item.qty === 1))
    );
  };

  // Compatibility functions for existing checkout pages
  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      ).filter((item) => !(item.id === id && item.qty <= 0))
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clear = () => setCartItems([]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  }, [cartItems]);

  // Compatibility properties for existing checkout pages
  const items = useMemo(() => {
    return cartItems.map(item => ({
      ...item,
      quantity: item.qty
    }));
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  }, [cartItems]);

  const total = useMemo(() => {
    return subtotal + shippingFee;
  }, [subtotal, shippingFee]);

  const value = {
    // New API
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementQty,
    decrementQty,
    totalPrice,
    cartCount,
    // Sidebar controls
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    lastAddedProduct,
    // Compatibility API for existing checkout pages
    items,
    subtotal,
    shippingFee,
    setShippingFee,
    total,
    updateQty,
    removeItem,
    clear
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


