import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // ✅ ADD THIS

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // ✅ FILTER USING SEARCH
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search)
  );

  return (
    <div>
      
      {/* ✅ PASS setSearch TO NAVBAR */}
      <Navbar setSearch={setSearch} />

      <div className="grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
};

export default Home;
