// ProductDetails.jsx
// Shows detailed view of a single product
// React Concepts: useParams (get ID from URL), useEffect, useState, Axios

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetails() {

  // useParams — extracts the :id from the URL (e.g., /product/3 → id = "3")
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  // Fetch single product by ID
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to load product details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect runs when component mounts
  // We include [id] so it re-fetches if the URL id changes
  useEffect(() => {
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
    alert(product.title + " added to cart!");
  }

  if (loading) {
    return (
      <div className="page-container">
        <p className="loading-text">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <p className="error-text">{error}</p>
        <Link to="/products" className="back-link">← Back to Products</Link>
      </div>
    );
  }

  return (

    <div className="page-container">

      <Link to="/products" className="back-link">← Back to Products</Link>

      <div className="product-details">

        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-details-info">

          <span className="product-category">{product.category}</span>

          <h1>{product.title}</h1>

          <p className="product-description">{product.description}</p>

          <p className="product-details-price">${product.price.toFixed(2)}</p>

          {/* Rating display */}
          {product.rating && (
            <p className="product-details-rating">
              ⭐ {product.rating.rate} / 5 — ({product.rating.count} reviews)
            </p>
          )}

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;
