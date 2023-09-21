import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  fetchAllCategories,
  fetchCatalog,
  resetProducts,
} from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Card from '../../components/card/card';
import { Product } from '../../components/card/types';
import { StyledCardsWrapper, StyledCatalogWrapper } from './style';

export default function Catalog() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [fetching, setFetching] = useState<boolean>(true);

  const cardsData = useAppSelector((state) => state.products.cardData);
  const catalogCurrentPage = useAppSelector(
    (state) => state.products.catalogCurrentPage
  );

  function scrollHandler(): void {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }

  useEffect(() => {
    setFetching(false);

    return () => {
      dispatch(resetProducts());
    };
  }, [location, dispatch]);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchAllCategories());
      dispatch(fetchCatalog(catalogCurrentPage));
      setFetching(false);
    }
  }, [fetching, dispatch, setFetching, catalogCurrentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <StyledCatalogWrapper>
      <StyledCardsWrapper>
        {cardsData.map((product: Product) => (
          <Card product={product} key={product.id} />
        ))}
      </StyledCardsWrapper>
    </StyledCatalogWrapper>
  );
}
