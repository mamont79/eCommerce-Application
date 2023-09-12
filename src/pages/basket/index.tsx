import { useEffect } from 'react';
import { createMyCart } from '../../api/cart/createMyCart';

export default function Basket() {
  useEffect(() => {
    createMyCart();
  }, []);
  return (
    <div>
      <h1>Here would be basket</h1>
      <h2>We promiss</h2>
    </div>
  );
}
