import { createContext, useContext, useState } from "react";
import PRODUCTS from "../data/products";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <StoreContext.Provider value={{ PRODUCTS, cart, addToCart, search, setSearch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
