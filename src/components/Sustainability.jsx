function Sustainability() {
  return (
    <section className="sustainability" id="about">
      <div className="sustainability-images">
        <div className="side-image left-image">
          <img
            src="/Sustainability-img2.png.jpeg"
            alt="Sustainable kitchenware"
          />
        </div>

        <div className="main-image">
          <img src="/Sustainability-img1.png" alt="Eco-friendly kitchen" />
        </div>

        <div className="side-image right-image">
          <img src="/Sustainability-img3.png.jpeg" alt="Kitchen products" />
        </div>
      </div>

      <div className="sustainability-text">
        <p>
          Discover our commitment to{" "}
          <span className="image-word">
            <img src="/Sustainability-img4.png" alt="" />
          </span>{" "}
          <em>sustainable materials</em>, low-impact production, and{" "}
          <em>ethical sourcing</em> partnerships — all crafted to support a
          healthier planet and a{" "}
          <span className="image-word">
            <img src="/hero-kitchen.jpeg" alt="" />
          </span>{" "}
          <em>greener kitchen.</em>
        </p>
      </div>
    </section>
  );
}

export default Sustainability;
