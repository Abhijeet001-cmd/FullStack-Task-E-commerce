// Layout.jsx
// Layout wraps all pages — contains Navbar and Footer
// React Concept: Outlet — React Router renders the matched child route here
// Think of Outlet as a "placeholder" where the page content appears

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {

  return (

    <>
      {/* Navbar always shows at the top */}
      <Navbar />

      {/* Outlet renders whatever child Route matches the current URL */}
      {/* For example: /products renders <Products /> here */}
      <main>
        <Outlet />
      </main>

      {/* Footer always shows at the bottom */}
      <Footer />
    </>

  );

}

export default Layout;