/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { Formik } from 'formik';
import {
  StyledOrderBtn,
  StyledOrderForm,
  StyledOrderInfo,
  StyledOrderInfoPoint,
  StyledOrderPromocodeWrapper,
  StyledOrderResultText,
  StyledOrderText,
  StyledOrderTitle,
  StyledPromocodeInput,
  StyledResultLine,
} from './style';
import StyledErrorMessage from '../../../components/errorMessage/styledErrorMessage';
import { StyledBtn } from '../../../components/styledBtn';
import { fetchMeActiveCart } from '../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import handleOreder from './helpers/handlerOrder';

export default function Order() {
  const dispatch = useAppDispatch();
  const { cartFields } = useAppSelector((state) => state.cart);
  const priceCurrencyCode = cartFields?.currencyCode;
  const totalPrice =
    cartFields?.cartPriceInCents &&
    typeof cartFields?.cartPriceInCents === 'number'
      ? `${cartFields?.cartPriceInCents / 100}`
      : '';
  const totalQuntety = cartFields?.items.reduce((accumulator, currentItem) => {
    if (currentItem.quantity) {
      accumulator += currentItem.quantity;
    }
    return accumulator;
  }, 0);
  let totalDiscountedPrice: string | number | undefined =
    cartFields?.items.reduce((accumulator, currentItem) => {
      if (currentItem.productDiscountedPriceInCents) {
        accumulator += currentItem.productDiscountedPriceInCents;
      }
      return accumulator;
    }, 0);
  totalDiscountedPrice =
    typeof totalDiscountedPrice === 'number' ? totalDiscountedPrice / 100 : '';

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartFields]);

  return (
    <Formik
      initialValues={{
        promocode: '',
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { promocode } = values;
      }}
    >
      <StyledOrderForm>
        <StyledOrderTitle>Order price</StyledOrderTitle>
        <StyledOrderInfo>
          <StyledOrderInfoPoint>
            <StyledOrderText>Goods</StyledOrderText>
            <StyledOrderText>{totalQuntety}</StyledOrderText>
          </StyledOrderInfoPoint>

          <StyledOrderInfoPoint>
            <StyledOrderText>Discount</StyledOrderText>
            <StyledOrderText>
              {totalDiscountedPrice} {priceCurrencyCode}
            </StyledOrderText>
          </StyledOrderInfoPoint>
        </StyledOrderInfo>

        <StyledOrderPromocodeWrapper>
          <StyledPromocodeInput name="promocode" placeholder="promocode" />
          <StyledBtn $primary>Apply</StyledBtn>
        </StyledOrderPromocodeWrapper>

        <StyledErrorMessage>invalid promocode</StyledErrorMessage>
        <StyledResultLine />
        <StyledOrderInfoPoint>
          <StyledOrderResultText>Result</StyledOrderResultText>
          <StyledOrderResultText>
            {totalPrice} {priceCurrencyCode}
          </StyledOrderResultText>
        </StyledOrderInfoPoint>
        <StyledOrderBtn $primary onClick={handleOreder}>
          Order
        </StyledOrderBtn>
      </StyledOrderForm>
    </Formik>
  );
}
