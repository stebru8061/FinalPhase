export default function MenuCard({ name, description, price }) {
  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <h3>{name}</h3>
        <span className="price">${price}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}