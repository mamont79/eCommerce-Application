/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { fetchCatalog } from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import transformationProductData from '../../features/products/helpers/calculateField';
import Card from '../../components/card/card';
import { Product } from '../../components/card/types';
import { StyledCardsWrapper } from '../welcome/style';


export default function Catalog() {
  const dispatch = useAppDispatch();
  const { productsData } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);
  
  const cardsData = transformationProductData(productsData);
  return (
    <StyledCardsWrapper>
      {cardsData.map((product: Product) => (
        <Card product={product} key={product.id} />
      ))}
    </StyledCardsWrapper>

  );
}
