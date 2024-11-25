import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/shoes">Shoes</Link> |
          <Link to="/shoes/add">Add Shoe</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
