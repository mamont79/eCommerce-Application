/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import {
  fetchCatalog,
  fetchCategory,
} from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Card from '../../components/card/card';
import { Product } from '../../components/card/types';
import { StyledCardsWrapper } from '../welcome/style';
import {
  StyledCatalogFilterBar,
  StyledCatalogWrapper,
  StyledCategoryButtonWrapper,
} from './style';
import { StyledCardBtn } from '../../components/card/style';
import { categoryKids } from '../../constants/categories';

export default function Catalog() {
  const dispatch = useAppDispatch();
  const cardsData = useAppSelector((state) => state.products.cardData);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  const handleKids = () => {
    dispatch(fetchCategory(categoryKids));
  };

  return (
    <StyledCatalogWrapper>
      <StyledCatalogFilterBar>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Women</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Women Top</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Women Bottom</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Men</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Men top</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Men Bottom</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary onClick={handleKids}>
            Kids
          </StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Kids Top</StyledCardBtn>
        </StyledCategoryButtonWrapper>
        <StyledCategoryButtonWrapper>
          <StyledCardBtn $primary>Kids Bottom</StyledCardBtn>
        </StyledCategoryButtonWrapper>
      </StyledCatalogFilterBar>

      <StyledCardsWrapper>
        {cardsData.map((product: Product) => (
          <Card product={product} key={product.id} />
        ))}
      </StyledCardsWrapper>
    </StyledCatalogWrapper>
  );
}
