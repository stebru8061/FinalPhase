import { useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    partySize: "2",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Reservation submitted! Connect this form to your database next.");
    console.log(formData);
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Party Size</label>
        <select
          name="partySize"
          value={formData.partySize}
          onChange={handleChange}
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="4">4 Guests</option>
          <option value="6">6 Guests</option>
          <option value="8">8 Guests</option>
        </select>
      </div>

      <button type="submit" className="gold-button">
        Reserve Table
      </button>
    </form>
  );
}