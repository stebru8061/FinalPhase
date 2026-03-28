import Layout from "../components/Layout";

function EmployeesPage() {
  const employees = [
    {
      id: 1,
      name: "Abigail Moore",
      role: "Manager",
      phone: "555-222-1001",
      email: "abigail@restaurant.com",
      schedule: "Monday - Friday | 9:00 AM - 5:00 PM",
    },
    {
      id: 2,
      name: "Daniel Scott",
      role: "Worker",
      phone: "555-222-1002",
      email: "daniel@restaurant.com",
      schedule: "Tuesday - Saturday | 11:00 AM - 7:00 PM",
    },
    {
      id: 3,
      name: "Natalie Green",
      role: "Worker",
      phone: "555-222-1003",
      email: "natalie@restaurant.com",
      schedule: "Wednesday - Sunday | 2:00 PM - 10:00 PM",
    },
    {
      id: 4,
      name: "Christopher Hall",
      role: "Owner",
      phone: "555-222-1004",
      email: "christopher@restaurant.com",
      schedule: "Monday - Saturday | 10:00 AM - 6:00 PM",
    },
  ];

  return (
    <Layout title="Employees">
      <div className="content-grid">
        {employees.map((employee) => (
          <div className="info-card" key={employee.id}>
            <h3>{employee.name}</h3>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Work Schedule:</strong> {employee.schedule}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default EmployeesPage;