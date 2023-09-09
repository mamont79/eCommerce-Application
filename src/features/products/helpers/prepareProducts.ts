import { Product } from '../../../components/card/types';
import { ProductType } from '../productsType';

export default function preparProducts(
  productsData: Array<ProductType>
): Product[] {
  const cardDataArr = productsData.map(({ id, masterData }) => {
    const img = masterData.current.masterVariant.images[0].url;
    const title = masterData.current.name['en-US'];
    const description = masterData.current.description['en-US'];
    const price =
      masterData.current.masterVariant.prices[0].value.centAmount / 100;
    const discountPrice = !masterData.current.masterVariant.prices[0].discounted
      ? null
      : masterData.current.masterVariant.prices[0].discounted.value.centAmount /
        100;
    const discount = discountPrice
      ? Math.round((1 - discountPrice / price) * 100)
      : 0;
    const currency =
      masterData.current.masterVariant.prices[0].value.currencyCode;
    return {
      id,
      img,
      title,
      description,
      price,
      discountPrice,
      discount,
      currency,
    };
  });

  return cardDataArr as Product[];
}
