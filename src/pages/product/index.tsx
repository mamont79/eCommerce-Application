/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProductByKey } from '../../features/products/currentProductSlice';
import {
  StyledCurrentPrice,
  StyledImagesWrapper,
  StyledPriceInfo,
  StyledProductDescription,
  StyledProductInfoWrapper,
  StyledProductPageWrapper,
  StyledProductTitle,
  StyledPreviousPrice,
  StyledButtonWrapper,
  StyledModalContent,
  StyledModalWindow,
  StyledModalSlider,
  StyledModalArea,
  StyledModalZoom,
} from './style';
import { StyledCardBtn } from '../../components/card/style';
import Slider from '../../components/slider';
import {
  fetchMeActiveCart,
  fetchAnonCart,
  fetchProductToAnonimousCart,
  fetchProductToMyCart,
} from '../../features/cart/cartSlice';
import ModalZoomIconSvg from '../../assets/modalZoomIcon';

export default function Product() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const { data } = useAppSelector((state) => state.currentProduct);
  const { isAuth } = useAppSelector((state) => state.users);
  const [openedModal, setOpenedModal] = useState<boolean>(false);

  const productName = useParams();
  const productKey = productName.productkey;

  const currentName = data?.masterData.current.name['en-US'];
  const currentDescription = data?.masterData.current.description['en-US'];
  const discontPrice =
    data?.masterData.current.masterVariant.prices[0].discounted?.value
      .centAmount;
  const fullPrice =
    data?.masterData.current.masterVariant.prices[0].value.centAmount;
  const currency =
    data?.masterData.current.masterVariant.prices[0].value.currencyCode;
  const allImages = data?.masterData.current.masterVariant.images || [];

  const cost = discontPrice || fullPrice;
  const previousCost = discontPrice ? `${fullPrice! / 100} ${currency}` : '';

  let isInCart = false;
  if (cart) {
    isInCart =
      cart.lineItems.find(({ productId }) => productId === data?.id) !==
      undefined;
  }

  const handleOpenModal = () => {
    const opened = openedModal === false;
    setOpenedModal(opened);
  };

  const handleAddProductBtnClick = () => {
    const addProductData = {
      cartId: cart!.id,
      cartVersion: cart!.version,
      productId: data?.id || '',
      productVariantId: 1,
    };
    if (isAuth) dispatch(fetchProductToMyCart(addProductData));
    else dispatch(fetchProductToAnonimousCart(addProductData));
  };

  useEffect(() => {
    dispatch(fetchProductByKey(productKey!));
  }, []);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchMeActiveCart());
    } else {
      dispatch(fetchAnonCart());
    }
  }, []);

  return (
    <StyledProductPageWrapper>
      <StyledImagesWrapper>
        <Slider allImages={allImages} />
        <StyledModalZoom onClick={handleOpenModal}>
          <ModalZoomIconSvg />
        </StyledModalZoom>
      </StyledImagesWrapper>
      <StyledProductInfoWrapper>
        <StyledProductTitle>{currentName}</StyledProductTitle>
        <StyledPriceInfo>
          <StyledCurrentPrice>
            {cost! / 100} {currency}
          </StyledCurrentPrice>
          <StyledPreviousPrice>{previousCost}</StyledPreviousPrice>
        </StyledPriceInfo>
        <StyledButtonWrapper>
          <StyledCardBtn
            $primary
            disabled={isInCart}
            onClick={handleAddProductBtnClick}
          >
            LAZY SHOPPING
          </StyledCardBtn>
        </StyledButtonWrapper>
        <StyledProductDescription>
          {currentDescription}
        </StyledProductDescription>
      </StyledProductInfoWrapper>
      <StyledModalWindow $opened={openedModal}>
        <StyledModalArea onClick={handleOpenModal} />
        <StyledModalContent>
          <StyledModalSlider allImages={allImages} modal />
        </StyledModalContent>
      </StyledModalWindow>
    </StyledProductPageWrapper>
  );
}
