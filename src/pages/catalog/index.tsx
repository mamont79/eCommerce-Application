/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { fetchCatalog } from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Card from '../../components/card/card';
import { Product } from '../../components/card/types';
import { StyledCardsWrapper } from '../welcome/style';

export default function Catalog() {
  const dispatch = useAppDispatch();
  const cardsData = useAppSelector((state) => state.products.cardData);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  return (
    <StyledCardsWrapper>
      {cardsData.map((product: Product) => (
        <Card product={product} key={product.id} />
      ))}
    </StyledCardsWrapper>
  );
}
