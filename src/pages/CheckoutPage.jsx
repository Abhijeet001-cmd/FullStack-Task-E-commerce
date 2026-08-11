// CheckoutPage.jsx
// Checkout page with coupon, tax/GST calculation, and order placement
// React Concepts: useState, useContext, Props (Coupon callback)

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Coupon from "../components/Coupon";

// GST rate stored as a constant — easy to change in one place
// 18% GST is standard in India
const GST_RATE = 0.18;

function CheckoutPage() {

  const { cart, getCartTotal, clearCart } = useCart();

  // useState for coupon discount and order status
  const [discount, setDiscount] = useState(0);   // discount percentage (0, 10, or 20)
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate all amounts
  const subtotal = getCartTotal();
  const discountAmount = (subtotal * discount) / 100;
  const taxableAmount = subtotal - discountAmount;
  const gstAmount = taxableAmount * GST_RATE;
  const finalTotal = taxableAmount + gstAmount;

  // Called when user clicks "Place Order"
  function handlePlaceOrder() {
    setOrderPlaced(true);
    clearCart();
  }

  // Called by Coupon component when a coupon is applied
  // React Concept: Props — Coupon passes discount back via this callback
  function handleCouponApply(discountPercent) {
    setDiscount(discountPercent);
  }

  // Show success message after order is placed
  if (orderPlaced) {
    return (
      <div className="page-container">
        <div className="order-success">
          <h1>🎉 Order Placed Successfully!</h1>
          <p>Thank you for your purchase.</p>
          <Link to="/products" className="shop-link">
            Continue Shopping →
          </Link>
        </div>
      </div>
    );
  }

  // Show empty cart message
  if (cart.length === 0) {
    return (
      <div className="page-container">
        <h1>Checkout</h1>
        <p className="empty-message">Your cart is empty. Add some products first!</p>
        <Link to="/products" className="shop-link">
          Browse Products →
        </Link>
      </div>
    );
  }

  return (

    <div className="page-container">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Order items summary */}
        <div className="checkout-items">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
              </div>
              <p><strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
            </div>
          ))}
        </div>

        {/* Price breakdown */}
        <div className="checkout-summary">

          {/* Coupon section */}
          <Coupon onApply={handleCouponApply} />

          {/* Price calculations */}
          <div className="price-breakdown">

            <div className="price-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="price-row discount-row">
                <span>Coupon Discount ({discount}%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="price-row">
              <span>Tax/GST ({(GST_RATE * 100).toFixed(0)}%)</span>
              <span>${gstAmount.toFixed(2)}</span>
            </div>

            <div className="price-row total-row">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>

          </div>

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>

        </div>

      </div>

    </div>

  );

}

export default CheckoutPage;
