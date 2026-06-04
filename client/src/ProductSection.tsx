import useProducts from "./hooks/useProducts";
import ProductForm from "./components/ProductForm";

export default function ProductSection() {
  const { products, addProduct, removeProduct } = useProducts();

  const handleDelete = async (id: number) => {
    await removeProduct(id);
  };

  return (
    <div>
      <ProductForm onAdd={addProduct} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — {product.price.toLocaleString()}원
            <button onClick={() => handleDelete(product.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
