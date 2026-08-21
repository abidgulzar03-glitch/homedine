function Footer() {
  const handleJoinUs = () => {
    const newsletter = document.querySelector(".newsletter-section");

    if (newsletter) {
      newsletter.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-description">
          <p>
            Homedine promotes sustainable
            <br />
            dining with beautifully crafted
            <br />
            bamboo and glass <span>✧Kitchenware!</span>
          </p>

          <button className="join-button" onClick={handleJoinUs}>
            Join Us Now ↗
          </button>
        </div>

        <div className="footer-links">
          <a href="#drinkware"> 🍷🥂 Drinkware</a>
          <a href="#tableware"> 🍽️🥣 Tableware</a>
          <a href="#utensils"> 🍴🥄 Utensils</a>
        </div>
      </div>

      <div className="footer-bottom">
        <h2>
          Home<em>dine</em>
        </h2>

        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            𝕏 Twitter <span>↗</span>
          </a>

          <a href="https://www.instagram.com">
            📷 Instagram <span>↗</span>
          </a>

          <a href="https://www.linkedin.com">
            💼 Linkedin <span>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
