export interface Product {
  id: string;
  img: string;
  title: string;
  discription: string;
  price: number;
  discountPrice?: number;
  discount: number;
  currency: string;
}
