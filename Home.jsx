import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">
      <div className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <p className="eyebrow">Fine Dining Experience</p>
            <h1>Modern Elegance in Every Bite</h1>
            <p className="hero-text">
              Welcome to Lumière, a refined restaurant experience where elegant
              design, seasonal ingredients, and exceptional service come
              together.
            </p>

            <div className="hero-actions">
              <Link to="/reservations" className="gold-button">
                Reserve a Table
              </Link>
              <Link to="/menu" className="outline-button">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-grid">
        <div className="info-card">
          <h2>Opening Hours</h2>
          <p>Monday–Thursday: 4:00 PM – 10:00 PM</p>
          <p>Friday–Saturday: 4:00 PM – 11:30 PM</p>
          <p>Sunday: 3:00 PM – 9:00 PM</p>
        </div>

        <div className="info-card">
          <h2>Reservations by Phone</h2>
          <p>Call us directly to schedule your dining experience.</p>
          <p className="phone-number">(555) 234-7812</p>
        </div>
      </div>
    </section>
  );
}