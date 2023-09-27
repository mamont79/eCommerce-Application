import { ActionType, IChangeCustomerDataAction } from './types';

export function makePersonalDataChangeAction(
  fieldName: string,
  newValue: string
): IChangeCustomerDataAction {
  switch (fieldName) {
    case 'firstName':
      return {
        action: ActionType.SET_FIRST_NAME,
        firstName: newValue,
      };
    case 'lastName':
      return {
        action: ActionType.SET_LAST_NAME,
        lastName: newValue,
      };
    case 'email':
      return {
        action: ActionType.CHANGE_EMAIL,
        email: newValue,
      };
    default:
      throw new Error('Trying to change unknown field');
  }
}
