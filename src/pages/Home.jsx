import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

const Home = () => {
  const { PRODUCTS, search } = useStore();

  return (
    <div>
      <Navbar />
      {PRODUCTS.filter(p => p.name.includes(search)).map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Home;
