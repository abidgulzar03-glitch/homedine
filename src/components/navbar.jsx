import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cartItemCount, onCartClick }) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileOpen((current) => !current);
  };

  const handleMenuClick = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleProfileNavigate = () => {
    setProfileOpen(false);
    navigate("/profile");
  };

  const handleOrdersNavigate = () => {
    setProfileOpen(false);
    navigate("/orders");
  };

  return (
    <nav className="navbar">
      {/* MOBILE TOGGLE */}
      <button
        className="menu-toggle"
        onClick={handleMenuClick}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#shop" onClick={closeMenu}>
          Shop
        </a>
        <a href="#bestsellers" onClick={closeMenu}>
          Bestsellers
        </a>
        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </div>

      {/* LOGO */}
      <div className="logo">
        Home<span>dine</span>
      </div>

      {/* NAV ACTIONS */}
      <div className="nav-actions">
        {/* SEARCH */}
        <div className="search-btn">
          <span>⌕</span>
          <input type="text" placeholder="Search Product" />
        </div>

        {/* CART */}
        <button className="cart-btn" onClick={onCartClick}>
          🛒
          <span className="cart-count">{cartItemCount}</span>
        </button>

        {/* ACCOUNT */}
        <div className="account-container">
          <button
            className="account-btn"
            onClick={handleProfileClick}
            aria-label="Account"
          >
            👤
          </button>

          {profileOpen && (
            <div className="profile-menu">
              <div className="profile-menu-header">
                <h3>👤 My Account</h3>
              </div>

              <button onClick={handleProfileNavigate}>Profile</button>
              <button onClick={handleOrdersNavigate}>Orders</button>
              <button>Settings</button>
              <button>Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
