function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />

        <span className="product-tag">{product.tag}</span>
      </div>

      <div className="product-info">
        <div className="product-colors">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="color-dot"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <p className="product-price">${product.price.toFixed(2)}</p>

          <button className="cart-button" onClick={() => onAddToCart(product)}>
            + Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
