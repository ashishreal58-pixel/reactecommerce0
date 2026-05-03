const Navbar = ({ setSearch }) => {
  return (
    <nav>
      <h2>LUXE</h2>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
    </nav>
  );
};

export default Navbar;
