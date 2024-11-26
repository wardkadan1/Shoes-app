/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout({ user, setUser }) {
  const handleLogout = (e) => {
    e.preventDefault();
    setUser([]);
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
            <Link to="/" onClick={handleLogout}>
              {" "}
              | Logout
            </Link>
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
