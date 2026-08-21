import { Link } from "react-router-dom";
import "./OrdersPage.css";

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function OrdersPage({ cart = [] }) {
  const hasItems = cart.length > 0;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="orders-page">
      <div className="orders-page-card">
        <Link to="/" className="orders-back-link">
          ←
        </Link>

        <div className="orders-page-header">
          <div className="orders-icon">📦</div>
          <div>
            <h1>My Orders</h1>
            {/* <p>Track and review your current order</p> */}
          </div>
        </div>

        {hasItems ? (
          <div className="orders-list">
            <div className="order-card">
              <div className="order-card-top">
                <div>
                  <p className="order-id">Current Order</p>
                  <p className="order-date">{formatDate(new Date())}</p>
                </div>
                <span className="order-status status-in-cart">In Cart</span>
              </div>

              <ul className="order-items">
                {cart.map((item) => (
                  <li className="order-item-row" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="order-item-image"
                    />
                    <div className="order-item-info">
                      <p className="order-item-name">{item.name}</p>
                      <p className="order-item-meta">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <p className="order-item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="order-card-bottom">
                <span className="order-total">Total: ${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="orders-empty">
            <p>You haven't added anything to your cart yet.</p>
            <Link to="/" className="orders-shop-link">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;
