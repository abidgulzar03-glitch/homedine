import { useRef } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ cart, onAddToCart }) {
  const productsGridRef = useRef(null);

  const handleLeftArrow = () => {
    productsGridRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const handleRightArrow = () => {
    productsGridRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleLeftArrow();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleRightArrow();
    }
  };

  return (
    <section className="products-section" id="bestsellers">
      <div className="products-header">
        <div>
          <p className="section-label">Eco Essentials Planet-Friendly</p>
          <h2>
            Bestselling <em>✥ Products</em>
          </h2>
        </div>

        <div className="products-actions">
          <button className="more-products">More products →</button>
        </div>
      </div>

      <div className="products-controls">
        <button
          className="arrow-button"
          onClick={handleLeftArrow}
          aria-label="Previous products"
        >
          ←
        </button>
        <button
          className="arrow-button"
          onClick={handleRightArrow}
          aria-label="Next products"
        >
          →
        </button>
      </div>

      <div
        className="products-grid"
        ref={productsGridRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
