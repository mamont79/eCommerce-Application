/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import ProductItem from './productItem';
import { fetchCatalog } from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function Catalog() {
  const dispatch = useAppDispatch();
  const { productsData } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  return (
    <div>
      {productsData.map((product) => (
        <ProductItem
          id={product.id}
          masterData={product.masterData}
          key={product.id}
        />
      ))}
    </div>
  );
}
