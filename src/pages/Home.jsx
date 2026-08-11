// Home.jsx
// Home page with hero section and featured products
// React Concepts: useState, useEffect, async/await, Axios

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";

function Home() {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch first 4 products as "featured"
  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products?limit=4");
      setFeaturedProducts(response.data);
    } catch (error) {
      console.error("Error fetching featured products:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect with [] — fetch once on mount
  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (

    <div className="page-container">

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to E-Shop</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="hero-btn">
          Shop Now →
        </Link>
      </div>

      {/* Featured Products */}
      <div className="featured-section">
        <h2>Featured Products</h2>

        {loading ? (
          <p className="loading-text">Loading products...</p>
        ) : (
          <ProductList products={featuredProducts} />
        )}

        <Link to="/products" className="view-all-link">
          View All Products →
        </Link>
      </div>

    </div>

  );

}

export default Home;