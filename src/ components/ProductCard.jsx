import { useStore } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => addToCart(product)}>Add</button>
    </div>
  );
};

export default ProductCard;
