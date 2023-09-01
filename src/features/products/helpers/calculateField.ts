import { Product } from '../../../components/card/types';
import { ProductType } from '../productsType';

export default function transformationProductData(
  productsData: Array<ProductType>
): Product[] {
  const cardDataArr = productsData.map((product) => {
    const [id] = [product.id];
    const img = product.masterData.current.masterVariant.images[0].url;
    const title = product.masterData.current.name['en-US'];
    const discription = product.masterData.current.description['en-US'];
    const price =
      product.masterData.current.masterVariant.prices[0].value.centAmount / 100;
    const discountPrice = !product.masterData.current.masterVariant.prices[0]
      .discounted
      ? null
      : product.masterData.current.masterVariant.prices[0].discounted.value
          .centAmount / 100;
    const discount = discountPrice
      ? Math.round((1 - discountPrice / price) * 100)
      : 0;
    const currency =
      product.masterData.current.masterVariant.prices[0].value.currencyCode;
    return {
      id,
      img,
      title,
      discription,
      price,
      discountPrice,
      discount,
      currency,
    };
  });

  return cardDataArr as Product[];
}
