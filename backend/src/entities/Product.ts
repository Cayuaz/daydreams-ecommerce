import { Decimal } from "decimal.js";

interface ProductProps {
  id: string;
  name: string;
  price: Decimal;
  description: string;
  imageUrl: string;
}

export class Product {
  constructor(public props: ProductProps) {}

  toJSON() {
    return {
      ...this.props,
      price: this.props.price.toNumber(),
    };
  }
}
