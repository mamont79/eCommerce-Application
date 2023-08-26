import { ICustomerAddress } from '../../types/userProfileDataType';

export type IAddressItem = {
  address: ICustomerAddress;
  isBilling: boolean;
  isShipping: boolean;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
};
