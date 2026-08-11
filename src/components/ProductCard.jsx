// ProductCard.jsx
// Displays a single product in the grid
// React Concept: Props — receives product data from parent (ProductList)
// React Concept: useContext — uses useCart() to add items to cart
// React Concept: Link — navigates to product details page

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product);
    alert(product.title + " added to cart!");
  }

  return (

    <div className="product-card">

      {/* Click image or title to go to product details */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <h3 className="product-title">
        <Link to={`/product/${product.id}`}>
          {product.title}
        </Link>
      </h3>

      <p className="product-price">${product.price.toFixed(2)}</p>

      {/* Show rating if available */}
      {product.rating && (
        <p className="product-rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>
      )}

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>

    </div>

  );

}

export default ProductCard;
