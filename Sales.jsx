import Layout from "../components/Layout";

function SalesPage() {
  const reports = [
    { id: 1, date: "March 25, 2026", totalSales: "$1,240.00", tax: "$105.40" },
    { id: 2, date: "March 26, 2026", totalSales: "$1,480.00", tax: "$125.80" },
    { id: 3, date: "March 27, 2026", totalSales: "$1,365.00", tax: "$116.03" },
    { id: 4, date: "March 28, 2026", totalSales: "$1,590.00", tax: "$135.15" },
  ];

  return (
    <Layout title="Sales Reports">
      <div className="content-grid">
        {reports.map((report) => (
          <div className="info-card" key={report.id}>
            <h3>{report.date}</h3>
            <p><strong>Total Sales:</strong> {report.totalSales}</p>
            <p><strong>Sales Tax:</strong> {report.tax}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default SalesPage;