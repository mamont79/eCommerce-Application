import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

type IHandleDefaultAddressKeyAdd = {
  billing?: boolean;
  prevDefaultId: string | undefined;
  key: string;
  isDefault: boolean;
};

export function handleDefaultAddressKeyAdd({
  billing = false,
  prevDefaultId,
  key,
  isDefault,
}: IHandleDefaultAddressKeyAdd) {
  if (isDefault) {
    const actionType = `setDefault${billing ? 'Billing' : 'Shipping'}Address`;
    const newAction = makeAddressChangeAction(actionType, { key });
    customerChangeActions.addCustomerChangeAction(newAction);
  }

  return isDefault ? key : prevDefaultId;
}
