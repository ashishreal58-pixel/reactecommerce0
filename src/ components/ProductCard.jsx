import { useStore } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div className="card">
      
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />

      {/* Product Title */}
      <h3 style={{ fontSize: "14px" }}>
        {product.title}
      </h3>

      {/* Price */}
      <p style={{ fontWeight: "bold" }}>
        ₹{product.price}
      </p>

      {/* Category (extra for uniqueness) */}
      <p style={{ fontSize: "12px", color: "gray" }}>
        {product.category}
      </p>

      {/* Add to Cart */}
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
