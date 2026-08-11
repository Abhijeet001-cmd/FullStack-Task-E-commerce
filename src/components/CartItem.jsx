// CartItem.jsx
// Displays a single item in the cart with quantity controls
// React Concept: Props — receives item data from parent (CartPage)
// React Concept: useContext — uses useCart() to update/remove items

import { useCart } from "../context/CartContext";

function CartItem({ item }) {

  // Get cart functions from Context
  const { updateQuantity, removeFromCart } = useCart();

  return (

    <div className="cart-item">

      <img src={item.image} alt={item.title} />

      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-controls">

        {/* Decrease quantity */}
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          −
        </button>

        <span className="qty-display">{item.quantity}</span>

        {/* Increase quantity */}
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>

      </div>

      {/* Subtotal for this item */}
      <p className="cart-item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      {/* Remove item completely */}
      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
      >
        ✕
      </button>

    </div>

  );

}

export default CartItem;
