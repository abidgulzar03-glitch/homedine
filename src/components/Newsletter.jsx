import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage(`Thank you! ${email} for subscribe.`);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-left">
        <img src="/new-letter-img01.jfif" alt="Cooking" />
        <img src="/new-letter-img02.jfif" alt="Kitchen" />
      </div>

      <div className="newsletter-content">
        <p>Get Recipes</p>

        <h2>10% Off</h2>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Subscribe</button>
        </form>

        {message && <p className="newsletter-message">{message}</p>}

        <p className="newsletter-text">
          Eco-friendly recipes, cooking tips, and a 10% discount on sustainable
          kitchenware for a greener lifestyle.
        </p>
      </div>

      <div className="newsletter-right">
        <img src="/new-letter3.png" alt="Family cooking" />
        <img src="/new-letter-img4.jfif" alt="Cooking" />
      </div>
    </section>
  );
}

export default Newsletter;
