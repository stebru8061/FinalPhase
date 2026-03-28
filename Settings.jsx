import Layout from "../components/Layout";

function SettingsPage() {
  const restaurantInfo = {
    name: "Golden Fork Restaurant",
    phone: "(555) 123-4567",
    hours: "Monday - Sunday: 11:00 AM - 10:00 PM",
    address: "123 Main Street, Charleston, SC",
  };

  return (
    <Layout title="Restaurant Settings">
      <div className="content-grid single-card">
        <div className="info-card">
          <h3>{restaurantInfo.name}</h3>
          <p><strong>Phone:</strong> {restaurantInfo.phone}</p>
          <p><strong>Hours:</strong> {restaurantInfo.hours}</p>
          <p><strong>Address:</strong> {restaurantInfo.address}</p>
        </div>
      </div>
    </Layout>
  );
}

export default SettingsPage;