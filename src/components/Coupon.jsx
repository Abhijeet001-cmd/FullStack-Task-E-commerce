// Coupon.jsx
// Handles coupon code input and validation
// React Concept: useState — tracks coupon input and messages
// React Concept: Props — passes discount back to parent via onApply callback

import { useState } from "react";

// Coupon codes stored locally (beginner-friendly approach)
// In a real app, these would come from an API
const coupons = {
  SAVE10: 10,  // 10% discount
  SAVE20: 20,  // 20% discount
};

function Coupon({ onApply }) {

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleApply() {
    // Convert to uppercase so "save10" also works
    const upperCode = code.trim().toUpperCase();

    if (coupons[upperCode]) {
      // Valid coupon found
      const discount = coupons[upperCode];
      setMessage(`${discount}% discount applied!`);
      setIsSuccess(true);

      // Pass discount percentage to parent (CheckoutPage)
      onApply(discount);
    } else {
      // Invalid coupon
      setMessage("Invalid coupon code");
      setIsSuccess(false);

      // Reset discount to 0
      onApply(0);
    }
  }

  return (

    <div className="coupon-section">

      <h3>Have a coupon?</h3>

      <div className="coupon-input-group">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="coupon-input"
        />
        <button onClick={handleApply} className="coupon-btn">
          Apply
        </button>
      </div>

      {/* Show success or error message */}
      {message && (
        <p className={isSuccess ? "coupon-success" : "coupon-error"}>
          {message}
        </p>
      )}

      <p className="coupon-hint">Try: SAVE10 or SAVE20</p>

    </div>

  );

}

export default Coupon;
