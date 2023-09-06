/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProductByKey } from '../../features/products/currentProductSlice';
import {
  StyledCurrentPrice,
  StyledImagesWrapper,
  StyledPriceInfo,
  StyledProductDescription,
  StyledProductImage,
  StyledProductInfoWrapper,
  StyledProductPageWrapper,
  StyledProductTitle,
  StyledPreviousPrice,
  StyledButtonWrapper,
  StyledMiniImages,
  // StyledMiniImg,
} from './style';
import { StyledCardBtn } from '../../components/card/style';

export default function Product() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.currentProduct);

  const productName = useParams();
  const productKey = productName.productkey;

  const mainImageUrl = data?.masterData.current.masterVariant.images[0].url;
  const currentName = data?.masterData.current.name['en-US'];
  const currentDescription = data?.masterData.current.description['en-US'];
  const discontPrice =
    data?.masterData.current.masterVariant.prices[0].discounted?.value
      .centAmount;
  const fullPrice =
    data?.masterData.current.masterVariant.prices[0].value.centAmount;
  const currency =
    data?.masterData.current.masterVariant.prices[0].value.currencyCode;
  // const allImages = data!.masterData.current.masterVariant.images;

  const cost = discontPrice || fullPrice;
  const previousCost = discontPrice ? `${fullPrice! / 100} ${currency}` : '';

  useEffect(() => {
    dispatch(fetchProductByKey(productKey!));
  }, []);

  return (
    <StyledProductPageWrapper>
      <StyledImagesWrapper>
        <StyledProductImage src={mainImageUrl} />
        <StyledMiniImages>
          Swall images would be here
          {/* {allImages.map((elem) => {
          <StyledMiniImg src={elem.url} />
        })} */}
        </StyledMiniImages>
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
          <StyledCardBtn $primary>LAZY SHOPPING</StyledCardBtn>
        </StyledButtonWrapper>
        <StyledProductDescription>
          {currentDescription}
        </StyledProductDescription>
      </StyledProductInfoWrapper>
    </StyledProductPageWrapper>
  );
}
