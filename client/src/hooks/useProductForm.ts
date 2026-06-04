import { useState } from "react";
import { createProduct } from "../apis/product.api";
import { Product } from "../domains/product.domain";

const useProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleChangeName = (newName: string) => {
    setName(newName);
  };

  const handleChangePrice = (newPrice: string) => {
    setPrice(newPrice);
  };

  const clearForm = () => {
    setName("");
    setPrice("");
  };

  const handleSubmitNewProduct = async () => {
    try {
      const newProduct = new Product(name, price);
      const payload = newProduct.toRequestDto();
      setError("");
      const product = await createProduct(payload);
      return product;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return {
    name,
    price,
    error,
    handleChangeName,
    handleChangePrice,
    handleSubmitNewProduct,
    clearForm,
  };
};

export default useProductForm;
