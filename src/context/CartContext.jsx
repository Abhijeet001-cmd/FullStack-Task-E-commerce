// CartContext.jsx
// React Concept: useContext — allows us to share cart data globally
// without passing props through every component level (prop drilling).

import { createContext, useState, useContext } from "react";

// 1. Create the Context
const CartContext = createContext();

// 2. Custom Hook — makes it easy to use cart anywhere
// Instead of writing useContext(CartContext) every time, just use useCart()
export function useCart() {
  return useContext(CartContext);
}

// 3. Cart Provider — wraps the app and provides cart data to all children
export function CartProvider({ children }) {

  // useState to store cart items
  // Each item: { id, title, price, image, quantity }
  const [cart, setCart] = useState([]);

  // Add a product to cart
  // If product already exists, increase its quantity
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Product already in cart — increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // New product — add with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  // Remove a product from cart completely
  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  // Update quantity of a specific product
  // If quantity becomes 0 or less, remove the item
  function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

  // Clear entire cart (used after placing order)
  function clearCart() {
    setCart([]);
  }

  // Calculate subtotal (sum of price × quantity for all items)
  function getCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Get total number of items in cart (sum of all quantities)
  function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }

  // The value object contains everything components need from the cart
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
