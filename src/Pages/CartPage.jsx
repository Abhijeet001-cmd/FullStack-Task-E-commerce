// CartPage.jsx
// Displays all items in the cart
// React Concept: useContext — uses useCart() to access cart data

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function CartPage() {

  const { cart, getCartTotal } = useCart();

  // Show empty cart message
  if (cart.length === 0) {
    return (
      <div className="page-container">
        <h1>Your Cart</h1>
        <p className="empty-message">Your cart is empty.</p>
        <Link to="/products" className="shop-link">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (

    <div className="page-container">

      <h1>Your Cart</h1>

      <div className="cart-container">

        {/* Header row */}
        <div className="cart-header">
          <span>Product</span>
          <span>Details</span>
          <span>Quantity</span>
          <span>Subtotal</span>
          <span></span>
        </div>

        {/* Cart items — .map() with key */}
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {/* Cart footer with total */}
        <div className="cart-footer">
          <p className="cart-total">
            Subtotal: <strong>${getCartTotal().toFixed(2)}</strong>
          </p>

          <div className="cart-actions">
            <Link to="/products" className="continue-btn">
              Continue Shopping
            </Link>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>

      </div>

    </div>

  );

}

export default CartPage;
