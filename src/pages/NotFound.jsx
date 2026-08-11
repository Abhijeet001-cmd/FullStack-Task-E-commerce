// NotFound.jsx
// 404 page — shown when the URL doesn't match any route
// React Router uses path="*" to catch all unmatched URLs

import { Link } from "react-router-dom";

function NotFound() {

  return (

    <div className="page-container not-found">

      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className="shop-link">
        ← Go Back Home
      </Link>

    </div>

  );

}

export default NotFound;
