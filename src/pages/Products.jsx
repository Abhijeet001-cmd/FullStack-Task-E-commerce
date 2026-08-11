// Products.jsx
// Fetches and displays ALL products from the FakeStore API
// React Concepts: useState, useEffect, async/await, Axios

import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function Products() {

  // useState — manage products, loading state, and errors
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Async function to fetch products from API
  const fetchProducts = async () => {
    try {
      // axios.get() returns a response object
      // response.data contains the actual JSON data (no need to call .json())
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect — runs fetchProducts when the component first loads
  // The empty array [] means "run only once when component mounts"
  // Without [], it would run on EVERY re-render (causing infinite API calls!)
  useEffect(() => {
    fetchProducts();
  }, []);

  // Show loading message while API request is in progress
  if (loading) {
    return (
      <div className="page-container">
        <p className="loading-text">Loading products...</p>
      </div>
    );
  }

  // Show error message if API request failed
  if (error) {
    return (
      <div className="page-container">
        <p className="error-text">{error}</p>
        <button onClick={fetchProducts} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (

    <div className="page-container">

      <h1>All Products</h1>

      {/* ProductList receives products via props */}
      <ProductList products={products} />

    </div>

  );

}

export default Products;
