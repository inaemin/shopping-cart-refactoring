export interface createProductRequestSchema {
  name: string;
  price: number;
}

export interface createProductReponseSchema {
  id: number;
  name: string;
  price: number;
}

const ENDPOINTS = {
  PRODUCTS: {
    GET: "/products",
    POST: "/products",
    DELETE: (id: number) => `/products/${id}`,
  },
};

export async function getProducts() {
  const res = await fetch(ENDPOINTS.PRODUCTS.GET);
  const products = await res.json();

  return products;
}

export async function createProduct(
  payload: createProductRequestSchema,
): Promise<createProductReponseSchema> {
  const result = await fetch(ENDPOINTS.PRODUCTS.POST, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return result.json();
}

export async function deleteProduct(id: number) {
  await fetch(ENDPOINTS.PRODUCTS.DELETE(id), { method: "DELETE" });
}
