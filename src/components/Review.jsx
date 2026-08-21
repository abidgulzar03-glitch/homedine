import React from "react";

const testimonials = [
  {
    quote:
      "HomeDine’s glass jars are awesome for storage, and the bamboo utensils are perfect for daily use!",
    name: "Jane Cooper",
    role: "Nutritionist",
  },
  {
    quote:
      "Fantastic products and fast delivery. My kitchen feels so much greener!",
    name: "Darlene Robertson",
    role: "Culinary Instructor",
  },
  {
    quote:
      "Love HomeDine’s eco-style! Glass jars keep things fresh, and bamboo utensils are so chic.",
    name: "Jacob Jones",
    role: "Food Blogger",
  },
  {
    quote:
      "The sustainable style! My bamboo utensils are perfect for daily use.",
    name: "Esther Howard",
    role: "Sous Chef",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="header">
        <h2>4.9/5</h2>
        <p>
          More than <strong>25,000</strong> 5-Star Reviews for Our Award-Winning
          Eco Products
        </p>
      </div>
      <div className="cards">
        {testimonials.map((t, i) => (
          <div key={i} className="card">
            <p className="quote">“{t.quote}”</p>
            <p className="name">{t.name}</p>
            <p className="role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
