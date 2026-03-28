import { Link, useNavigate } from "react-router-dom";

function Layout({ title, children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="topbar">
        <div>
          <h1>{title}</h1>
          <p>Restaurant Admin Panel</p>
        </div>

        <div className="topbar-actions">
          <Link to="/admin" className="nav-btn">
            Dashboard
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {children}
    </div>
  );
}

export default Layout;