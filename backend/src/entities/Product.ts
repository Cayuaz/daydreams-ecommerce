import { Decimal } from "decimal.js";

interface ProductProps {
  name: string;
  price: Decimal;
  description: string;
  image: string;
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
