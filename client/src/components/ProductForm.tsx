import useProductForm from "../hooks/useProductForm";
import type { Product } from "../hooks/useProducts";

interface ProductFormProps {
  onAdd: (product: Product) => void;
}

const ProductForm = ({ onAdd }: ProductFormProps) => {
  const {
    name,
    price,
    error,
    handleChangeName,
    handleChangePrice,
    handleSubmitNewProduct,
    clearForm,
  } = useProductForm();

  const handleAdd = async () => {
    const product = await handleSubmitNewProduct();
    if (product) {
      onAdd(product);
    }
    clearForm();
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => handleChangeName(e.target.value)}
        placeholder="상품명"
      />
      <input
        value={price}
        onChange={(e) => handleChangePrice(e.target.value)}
        placeholder="가격"
        type="number"
      />
      <button onClick={handleAdd}>추가</button>
      {error && <p>{error}</p>}
    </>
  );
};

export default ProductForm;
