import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../apis/product.api";

export interface Product {
  id: number;
  name: string;
  price: number;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  function addProduct(product: Product) {
    setProducts((prev) => [...prev, product]);
  }

  async function removeProduct(id: number) {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  return {
    products,
    addProduct,
    removeProduct,
  };
};

export default useProducts;
