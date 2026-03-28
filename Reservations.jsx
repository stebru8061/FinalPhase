import ReservationForm from "../components/ReservationForm";

export default function Reservations() {
  return (
    <section className="page">
      <div className="container reservation-layout">
        <div>
          <p className="eyebrow">Reserve Your Table</p>
          <h1>Book an Elegant Evening</h1>
          <p>
            Reserve your dining experience online or call us directly for large
            party accommodations and special requests.
          </p>
          <p className="reservation-phone">Call: (555) 234-7812</p>
        </div>

        <ReservationForm />
      </div>
    </section>
  );
}