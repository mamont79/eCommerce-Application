/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { ChangeEventHandler, useEffect, useState } from 'react';
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
import {
  fetchApplyPromoCodeToAnonimousCart,
  fetchApplyPromoCodeToAuthCart,
  fetchMeActiveCart,
} from '../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import handleOrder from './helpers/handlerOrder';
import { type IAddDiscoutCode } from '../../../api/cart/types';
import { calculateTotalFullPrice } from './helpers/calculateTotalFullPrice';
import { StyledCardDiscountPrice } from '../../../components/card/style';

export default function Order() {
  const dispatch = useAppDispatch();
  const { cartFields } = useAppSelector((state) => state.cart);
  const { cart } = useAppSelector((state) => state.cart);
  const { message } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.users);
  const [discountCode, setDiscountCode] = useState<string>('');

  const applyDiscountCode = () => {
    if (!cart) throw new Error('No active cart data');
    const { id, version } = cart;
    const cartData: IAddDiscoutCode = {
      cartId: id,
      cartVersion: version,
      discountCode,
    };
    if (isAuth) {
      dispatch(fetchApplyPromoCodeToAuthCart(cartData));
    } else {
      dispatch(fetchApplyPromoCodeToAnonimousCart(cartData));
    }
  };

  const handlePromocodeInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setDiscountCode(value);
  };

  const priceCurrencyCode = cartFields?.currencyCode;
  const totalPrice =
    cartFields?.cartPriceInCents &&
    typeof cartFields?.cartPriceInCents === 'number'
      ? cartFields?.cartPriceInCents / 100
      : '';
  const totalQuntity = cartFields?.items.reduce((accumulator, { quantity }) => {
    if (quantity) {
      accumulator += quantity;
    }
    return accumulator;
  }, 0);
  const totalFullPrice = calculateTotalFullPrice(cartFields!);

  const totalDiscountedPrice =
    totalFullPrice && typeof totalPrice === 'number'
      ? (totalFullPrice / 100 - +totalPrice).toFixed(2)
      : '';

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
  }, [cartFields, dispatch]);

  return (
    <Formik
      initialValues={{
        promocode: '',
      }}
      onSubmit={handleOrder}
    >
      <StyledOrderForm>
        <StyledOrderTitle>Order price</StyledOrderTitle>
        <StyledOrderInfo>
          <StyledOrderInfoPoint>
            <StyledOrderText>Goods</StyledOrderText>
            <StyledOrderText>{totalQuntity}</StyledOrderText>
          </StyledOrderInfoPoint>

          <StyledOrderInfoPoint>
            <StyledOrderText>Discount</StyledOrderText>
            <StyledOrderText>
              {totalDiscountedPrice} {priceCurrencyCode}
            </StyledOrderText>
          </StyledOrderInfoPoint>
        </StyledOrderInfo>

        <StyledOrderPromocodeWrapper>
          <StyledPromocodeInput
            onChange={handlePromocodeInputChange}
            name="promocode"
            placeholder="promocode"
          />
          <StyledBtn type="button" $primary onClick={applyDiscountCode}>
            Apply
          </StyledBtn>
        </StyledOrderPromocodeWrapper>

        {message && <StyledErrorMessage>{message}</StyledErrorMessage>}
        <StyledResultLine />
        <StyledOrderInfoPoint>
          <StyledOrderResultText>Result</StyledOrderResultText>
          <StyledOrderResultText>
            <StyledCardDiscountPrice>
              {(totalFullPrice / 100).toFixed(2)} {priceCurrencyCode}
            </StyledCardDiscountPrice>
            <div>
              {totalPrice} {priceCurrencyCode}
            </div>
          </StyledOrderResultText>
        </StyledOrderInfoPoint>
        <StyledOrderBtn type="submit" $primary>
          Order
        </StyledOrderBtn>
      </StyledOrderForm>
    </Formik>
  );
}
