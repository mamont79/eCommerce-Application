export interface Product {
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  discount: number;
  currency: string;
}

export interface CardProps {
  product: Product;
}
