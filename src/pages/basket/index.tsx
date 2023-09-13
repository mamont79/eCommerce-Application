import { useEffect } from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { Product } from '../../components/card/types';
import Card from '../../components/card/card';
import { StyledBasketCardsWrapper, StyledPageContentWrapper } from './style';

export default function Basket() {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);
  useEffect(() => {
    if (!cart) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const goods = cart?.lineItems;

  return (
    <StyledPageContentWrapper>
      <StyledBasketCardsWrapper>
        {goods && goods.map(makeCard)}
      </StyledBasketCardsWrapper>
    </StyledPageContentWrapper>
  );
}

function makeCard(productData: LineItem) {
  const cardData = prepareCardData(productData);
  return <Card product={cardData} key={cardData.id} />;
}

function prepareCardData({
  variant,
  name,
  productId,
  price: {
    value: { centAmount, currencyCode },
    discounted,
  },
}: LineItem): Product {
  const { images, id } = variant;
  const img = images && images.length ? images[0].url : '';
  const title = name['en-US'];
  const description = '';
  const price = centAmount / 100;
  const discountPrice = !discounted
    ? undefined
    : discounted.value.centAmount / 100;
  const discount = discountPrice
    ? Math.round((1 - discountPrice / price) * 100)
    : 0;
  const currency = currencyCode;

  return {
    id: String(`${productId}${id}`),
    currency,
    description,
    discount,
    img,
    price,
    title,
    discountPrice,
  };
}
