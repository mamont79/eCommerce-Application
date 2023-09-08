import { IAddress, IDraftAddress } from '../../../types/customerTypes';
import {
  ActionType,
  IChangeCustomerDataAction,
} from '../customerProfileData/types';

export function makeAddressChangeAction(
  actionType: string,
  payload?: IAddress | IDraftAddress | { id: string } | { key: string }
): IChangeCustomerDataAction {
  if (!payload) {
    if (actionType === ActionType.SET_DEFAULT_BILLING_ADDRESS)
      return {
        action: actionType,
      };
    return { action: actionType } as {
      action: ActionType.SET_DEFAULT_SHIPPING_ADDRESS;
    };
  }
  switch (actionType) {
    case ActionType.ADD_ADDRESS:
      if (!isDraftAddressGuard(payload))
        throw new Error('Inconsistent address type');
      return {
        action: ActionType.ADD_ADDRESS,
        address: payload,
      };
    case ActionType.REMOVE_ADDRESS:
      if (!('id' in payload)) throw new Error('No id provided');
      return {
        action: ActionType.REMOVE_ADDRESS,
        addressId: payload.id,
      };
    case ActionType.CHANGE_ADDRESS:
      if (!isIAddressGuard(payload))
        throw new Error('Inconsistent address type');
      return {
        action: ActionType.CHANGE_ADDRESS,
        addressId: payload.id,
        address: payload,
      };
    case ActionType.ADD_BILLING_ADDRESS_ID:
      if ('id' in payload && payload.id) {
        return {
          action: ActionType.ADD_BILLING_ADDRESS_ID,
          addressId: payload.id,
        };
      }
      if ('key' in payload && payload.key) {
        return {
          action: ActionType.ADD_BILLING_ADDRESS_ID,
          addressKey: payload.key,
        };
      }
      throw new Error('no "id" or "key" was provided');
    case ActionType.ADD_SHIPPING_ADDRESS_ID:
      if ('id' in payload && payload.id) {
        return {
          action: ActionType.ADD_SHIPPING_ADDRESS_ID,
          addressId: payload.id,
        };
      }
      if ('key' in payload && payload.key) {
        return {
          action: ActionType.ADD_SHIPPING_ADDRESS_ID,
          addressKey: payload.key,
        };
      }
      throw new Error('No "id" or "key" was provided');
    case ActionType.REMOVE_BILLING_ADDRESS_ID:
      if (!('id' in payload)) throw new Error('No id provided');
      return {
        action: ActionType.REMOVE_BILLING_ADDRESS_ID,
        addressId: payload.id,
      };
    case ActionType.REMOVE_SHIPPING_ADDRESS_ID:
      if (!('id' in payload)) throw new Error('No id provided');
      return {
        action: ActionType.REMOVE_SHIPPING_ADDRESS_ID,
        addressId: payload.id,
      };
    case ActionType.SET_DEFAULT_BILLING_ADDRESS:
      if ('id' in payload) {
        return {
          action: ActionType.SET_DEFAULT_BILLING_ADDRESS,
          addressId: payload.id,
        };
      }
      if ('key' in payload && payload.key) {
        return {
          action: ActionType.SET_DEFAULT_BILLING_ADDRESS,
          addressKey: payload.key,
        };
      }
      return {
        action: ActionType.SET_DEFAULT_BILLING_ADDRESS,
      };
    case ActionType.SET_DEFAULT_SHIPPING_ADDRESS:
      if ('id' in payload) {
        return {
          action: ActionType.SET_DEFAULT_SHIPPING_ADDRESS,
          addressId: payload.id,
        };
      }
      if ('key' in payload && payload.key) {
        return {
          action: ActionType.SET_DEFAULT_SHIPPING_ADDRESS,
          addressKey: payload.key,
        };
      }
      throw new Error('no "id" or "key" was provided');
    default:
      throw new Error('Trying to change unknown field');
  }
}

function isDraftAddressGuard(
  payload: IAddress | IDraftAddress | { id: string } | { key: string }
): payload is IDraftAddress {
  const keys = Object.keys(payload);
  const isDraftAddress =
    keys.includes('country') &&
    keys.includes('city') &&
    keys.includes('postalCode') &&
    keys.includes('streetName') &&
    !keys.includes('id');
  return isDraftAddress;
}

function isIAddressGuard(
  payload: IAddress | IDraftAddress | { id: string } | { key: string }
): payload is IAddress {
  const keys = Object.keys(payload);
  const isIAddress =
    keys.includes('country') &&
    keys.includes('city') &&
    keys.includes('postalCode') &&
    keys.includes('streetName') &&
    keys.includes('id');
  return isIAddress;
}
