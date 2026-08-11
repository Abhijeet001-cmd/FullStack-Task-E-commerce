// Navbar.jsx
// Navigation bar with links and cart item count badge
// React Concept: useContext — uses useCart() to show cart count
// React Concept: Link — uses React Router's Link for navigation (no page reload)

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {

  // Get cart count from Context
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (

    <nav className="navbar">

      <div className="nav-brand">
        <Link to="/">🛒 E-Shop</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Cart link with item count badge */}
        <Link to="/cart" className="cart-link">
          Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>

    </nav>

  );

}

export default Navbar;