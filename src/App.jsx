// App.jsx
// Main application file — sets up routing and wraps everything in CartProvider
// React Concept: Context Provider — CartProvider wraps all routes so every
// component can access cart data via useCart()

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context Provider
import { CartProvider } from "./context/CartContext";

// Layout (contains Navbar + Outlet + Footer)
import Layout from "./pages/Layout";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

function App() {

  return (

    // CartProvider wraps everything — makes cart available globally
    <CartProvider>

      <BrowserRouter>

        <Routes>

          {/* Layout route — Navbar and Footer wrap all child routes */}
          {/* Outlet in Layout.jsx renders the matched child route */}
          <Route path="/" element={<Layout />}>

            {/* index route — shown at "/" */}
            <Route index element={<Home />} />

            {/* Products listing page */}
            <Route path="products" element={<Products />} />

            {/* Single product details — :id is a URL parameter */}
            <Route path="product/:id" element={<ProductDetails />} />

            {/* About page */}
            <Route path="about" element={<About />} />

            {/* Contact page */}
            <Route path="contact" element={<Contact />} />

            {/* Cart page */}
            <Route path="cart" element={<CartPage />} />

            {/* Checkout page */}
            <Route path="checkout" element={<CheckoutPage />} />

            {/* 404 catch-all — path="*" matches any URL not defined above */}
            <Route path="*" element={<NotFound />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </CartProvider>

  );

}

export default App;