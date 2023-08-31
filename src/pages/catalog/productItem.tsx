/* eslint-disable react/destructuring-assignment */

import { ProductType } from '../../features/products/productsType';

function ProductItem(props: ProductType) {
  return (
    <div>
      <span>
        {props.id} -- {props.masterData.current.name['en-US']}
      </span>
      <img src={props.masterData.current.masterVariant.images[0].url} alt="" />
    </div>
  );
}

export default ProductItem;
