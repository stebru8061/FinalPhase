import MenuCard from "../components/MenuCard";

export default function Menu() {
  const starters = [
    {
      name: "Truffle Burrata",
      description: "Creamy burrata, roasted tomatoes, basil oil, and truffle drizzle.",
      price: "18",
    },
    {
      name: "Crispy Calamari",
      description: "Served with lemon aioli and a charred chili glaze.",
      price: "16",
    },
  ];

  const mains = [
    {
      name: "Filet Mignon",
      description: "Tender cut of beef with garlic mashed potatoes and red wine jus.",
      price: "38",
    },
    {
      name: "Herb Seared Salmon",
      description: "Atlantic salmon with seasonal vegetables and citrus butter sauce.",
      price: "29",
    },
  ];

  const desserts = [
    {
      name: "Vanilla Bean Crème Brûlée",
      description: "Classic custard with caramelized sugar topping.",
      price: "12",
    },
    {
      name: "Chocolate Torte",
      description: "Rich dark chocolate torte with fresh berries.",
      price: "13",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">Our Menu</p>
          <h1>Curated Dining</h1>
          <p>
            Explore a seasonal menu crafted with quality ingredients and elegant
            presentation.
          </p>
        </div>

        <div className="menu-section">
          <h2>Starters</h2>
          <div className="menu-grid">
            {starters.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-grid">
            {mains.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-grid">
            {desserts.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}