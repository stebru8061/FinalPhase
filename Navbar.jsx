// Navbar.jsx
// Navigation bar used to move between pages in the app.

import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          Lumière
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservations">Reservations</NavLink>
          <NavLink to="/login">Login / Register</NavLink>
          <NavLink to="/admin">Dashboard</NavLink>
        </nav>
      </div>
    </header>
  );
}