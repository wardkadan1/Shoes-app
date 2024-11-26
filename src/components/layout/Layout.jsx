/* eslint-disable react/prop-types */
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./layout.css";

export default function Layout({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser([]);
    navigate("/", { replace: true });
  };
  return (
    <div className="page-container">
      <header>
        <nav>
          <Link to="/">Home</Link> <Link to="/shoes"> | Shoes</Link>
          {user.type === "admin" && (
            <Link to="/shoes/add"> | Add Shoe</Link>
          )}{" "}
          {(Object.keys(user).length > 0 && (
            <Link onClick={handleLogout}> | Logout</Link>
          )) || <Link to="/login"> | Login</Link>}
        </nav>
      </header>
      <main>
        <section className="mainSec">
          <Outlet />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Shoe Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
