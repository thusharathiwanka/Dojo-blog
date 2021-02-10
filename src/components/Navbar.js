const Navbar = () => {
  return (
    <header>
      <nav>
        <h2 className="logo">Dojo Blog</h2>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
