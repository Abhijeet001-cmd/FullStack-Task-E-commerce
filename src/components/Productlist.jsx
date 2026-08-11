// ProductList.jsx
// Displays a grid of ProductCard components
// React Concept: Props — receives products array from parent
// React Concept: .map() with key — renders a list of components

import ProductCard from "./ProductCard";

function ProductList({ products }) {

  return (

    <div className="product-list">

      {/* .map() renders one ProductCard for each product */}
      {/* key={product.id} — React needs unique keys to track list items */}
      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );

}

export default ProductList;
