import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";

function App() {

  const cart = [];

  function addToCart(product){
      cart.push(product);
      alert(product.name + " Added");
      console.log(cart);
  }

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

            <Route
              index
              element={<Home addToCart={addToCart}/>}
            />

            <Route
              path="about"
              element={<About />}
            />

            <Route
              path="contact"
              element={<Contact />}
            />

            <Route
              path="cart"
              element={<Cart />}
            />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;