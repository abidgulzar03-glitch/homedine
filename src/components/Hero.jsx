function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Eco-Friendly <p>Kitchenware</p>for a greener home
        </h1>

        <p className="hero-description">
          Thoughtfully designed kitchenware made for a greener and more
          sustainable home.
        </p>

        <button
          className="shop-btn"
          onClick={() =>
            document
              .getElementById("shop")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop now →
        </button>
      </div>

      <div className="hero-image">
        {/* <img src="/hero-kitchen.png" alt="Eco-friendly kitchen" /> */}
        <div className="eco-badge">
          <span>Eco-conscious</span>
          <span>Natural · Sustainable</span>
          <strong>96%</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
