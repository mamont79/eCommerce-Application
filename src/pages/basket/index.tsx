import { useEffect } from 'react';
import { getMyActiveCart } from '../../api/cart/getMyActiveCart';

export default function Basket() {
  useEffect(() => {
    getMyActiveCart();
  }, []);
  return (
    <div>
      <h1>Here would be basket</h1>
      <h2>We promiss</h2>
    </div>
  );
}
