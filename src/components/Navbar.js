import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h2 className="logo">Dojo Blog</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
