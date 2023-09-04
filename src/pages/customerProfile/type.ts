import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';

export type IDataForUpdate = {
  version: number;
  actions: MyCustomerUpdateAction[];
};
