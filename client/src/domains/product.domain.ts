import type { createProductRequestSchema } from "../apis/product.api";

const NAME_MAX_LENGTH = 100;

export class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: string) {
    if (name.length === 0 || name.length > NAME_MAX_LENGTH) {
      throw new Error(`상품명은 1~${NAME_MAX_LENGTH}자여야 합니다`);
    }
    if (Number(price) <= 0) {
      throw new Error("가격은 0보다 커야 합니다");
    }

    this.name = name;
    this.price = Number(price);
  }

  toRequestDto(): createProductRequestSchema {
    return {
      name: this.name,
      price: this.price,
    };
  }
}
