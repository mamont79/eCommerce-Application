import { IAddress, IDraftAddress } from '../../../types/customerTypes';
import {
  ActionType,
  IChangeCustomerDataAction,
} from '../customerProfileData/types';

export function makeAddressChangeAction(
  actionType: string,
  payload: Partial<IAddress>
): IChangeCustomerDataAction {
  switch (actionType) {
    case ActionType.ADD_ADDRESS:
      return {
        action: ActionType.ADD_ADDRESS,
        address: payload as IDraftAddress,
      };
    case ActionType.REMOVE_ADDRESS:
      return {
        action: ActionType.REMOVE_ADDRESS,
        addressId: (payload as { id: string }).id,
      };
    case ActionType.CHANGE_ADDRESS:
      return {
        action: ActionType.CHANGE_ADDRESS,
        addressId: (payload as { id: string }).id,
        address: payload as IDraftAddress,
      };
    case ActionType.ADD_BILLING_ADDRESS_ID:
      return {
        action: ActionType.ADD_BILLING_ADDRESS_ID,
        addressId: (payload as { id: string }).id,
      };
    case ActionType.ADD_SHIPPING_ADDRESS_ID:
      return {
        action: ActionType.ADD_SHIPPING_ADDRESS_ID,
        addressId: (payload as { id: string }).id,
      };
    case ActionType.REMOVE_BILLING_ADDRESS_ID:
      return {
        action: ActionType.REMOVE_BILLING_ADDRESS_ID,
        addressId: (payload as { id: string }).id,
      };
    case ActionType.REMOVE_SHIPPING_ADDRESS_ID:
      return {
        action: ActionType.REMOVE_SHIPPING_ADDRESS_ID,
        addressId: (payload as { id: string }).id,
      };
    case ActionType.SET_DEFAULT_BILLING_ADDRESS:
      return {
        action: ActionType.SET_DEFAULT_BILLING_ADDRESS,
        addressId: (payload as { id: string }).id,
      };
    case ActionType.SET_DEFAULT_SHIPPING_ADDRESS:
      return {
        action: ActionType.SET_DEFAULT_SHIPPING_ADDRESS,
        addressId: (payload as { id: string }).id,
      };
    default:
      throw new Error('Trying to change unknown field');
  }
}
