import { IDraftAddress } from '../../../types/customerTypes';

export enum ActionType {
  CHANGE_EMAIL = 'changeEmail',
  SET_FIRST_NAME = 'setFirstName',
  SET_LAST_NAME = 'setLastName',
  REMOVE_ADDRESS = 'removeAddress',
  CHANGE_ADDRESS = 'changeAddress',
  ADD_ADDRESS = 'addAddress',
  SET_DEFAULT_SHIPPING_ADDRESS = 'setDefaultShippingAddress',
  SET_DEFAULT_BILLING_ADDRESS = 'setDefaultBillingAddress',
  ADD_SHIPPING_ADDRESS_ID = 'addShippingAddressId',
  REMOVE_SHIPPING_ADDRESS_ID = 'removeShippingAddressId',
  ADD_BILLING_ADDRESS_ID = 'addBillingAddressId',
  REMOVE_BILLING_ADDRESS_ID = 'removeBillingAddressId',
}

export type IChangeCustomerDataAction =
  | {
      action: ActionType.CHANGE_EMAIL;
      email: string;
    }
  | {
      action: ActionType.SET_FIRST_NAME;
      firstName: string;
    }
  | {
      action: ActionType.SET_LAST_NAME;
      lastName: string;
    }
  | {
      action: ActionType.REMOVE_ADDRESS;
      addressId: string;
    }
  | {
      action: ActionType.CHANGE_ADDRESS;
      addressId: string;
      address: IDraftAddress;
    }
  | {
      action: ActionType.ADD_ADDRESS;
      address: IDraftAddress;
    }
  | {
      action: ActionType.SET_DEFAULT_SHIPPING_ADDRESS;
      addressId: string;
    }
  | {
      action: ActionType.SET_DEFAULT_SHIPPING_ADDRESS;
      addressKey: string;
    }
  | {
      action: ActionType.SET_DEFAULT_BILLING_ADDRESS;
      addressId: string;
    }
  | {
      action: ActionType.SET_DEFAULT_BILLING_ADDRESS;
      addressKey: string;
    }
  | {
      action: ActionType.ADD_SHIPPING_ADDRESS_ID;
      addressId: string;
    }
  | {
      action: ActionType.ADD_SHIPPING_ADDRESS_ID;
      addressKey: string;
    }
  | {
      action: ActionType.REMOVE_SHIPPING_ADDRESS_ID;
      addressId: string;
    }
  | {
      action: ActionType.ADD_BILLING_ADDRESS_ID;
      addressId: string;
    }
  | {
      action: ActionType.ADD_BILLING_ADDRESS_ID;
      addressKey: string;
    }
  | {
      action: ActionType.REMOVE_BILLING_ADDRESS_ID;
      addressId: string;
    };
