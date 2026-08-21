import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Products from "./components/products";
import BrandBanner from "./components/BrandBanner";
import FeaturePills from "./components/FeaturePills";
import Categories from "./components/Categories";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Sustainability from "./components/Sustainability";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import OrdersPage from "./Pages/OrdersPage";
import ProfilePage from "./Pages/Profilepage";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleRemoveItem = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const cartItemCount = cart.length;

  const navbar = (
    <Navbar
      cartItemCount={cartItemCount}
      onCartClick={() => setIsCartOpen(true)}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
    />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-page">
                {navbar}
                <Hero />
              </div>

              <div>
                <Products
                  cart={cart}
                  onAddToCart={handleAddToCart}
                  searchTerm={searchTerm}
                />
                <BrandBanner />
                <FeaturePills />
                <Categories />
                <Gallery />
                <Review />
                <Sustainability />
                <Newsletter />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="profile-page-wrap">
              {navbar}
              <ProfilePage />
            </div>
          }
        />
        <Route
          path="/orders"
          element={
            <div className="profile-page-wrap">
              {navbar}
              <OrdersPage cart={cart} />
            </div>
          }
        />
      </Routes>

      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </BrowserRouter>
  );
}

export default App;
