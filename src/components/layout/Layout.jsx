/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout({ user }) {
  user.type = "admin";
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> <Link to="/shoes"> | Shoes</Link>
          {user.type === "admin" && (
            <Link to="/shoes/add"> | Add Shoe</Link>
          )}{" "}
          {(user[0] && <Link to="/"> | Logout</Link>) || (
            <Link to="/login"> | Login</Link>
          )}
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