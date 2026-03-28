// App.jsx
// Main application routes for the restaurant website.

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import Customers from "./Pages/Customers";
import Employees from "./Pages/Employees";
import Inventory from "./Pages/Inventory";
import Sales from "./Pages/Sales";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="Page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}