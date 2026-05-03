import { useStore } from "../context/StoreContext";

const Navbar = () => {
  const { cart, setSearch } = useStore();

  return (
    <nav>
      <h2>LUXE</h2>
      <input onChange={(e) => setSearch(e.target.value)} />
      <span>Cart ({cart.length})</span>
    </nav>
  );
};

export default Navbar;
