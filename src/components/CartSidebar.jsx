import "./CartSidebar.css";

function CartSidebar({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // TODO: replace with your actual WhatsApp business number (country code + number, no + or spaces)
    const phoneNumber = "9797398157";

    const orderLines = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n");

    const message = `Hi, I'd like to place an order:\n\n${orderLines}\n\nSubtotal: $${subtotal.toFixed(2)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h3>Your Cart</h3>
          <button className="cart-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>

                    <div className="cart-item-qty">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-item-remove"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label="Remove item"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-sidebar-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout via WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartSidebar;
