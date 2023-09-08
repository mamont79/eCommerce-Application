import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

type IHandleDefaultAddressIdChange = {
  billing?: boolean;
  labeledIds: string[];
  defaultId?: string;
  id: string;
  isDefault: boolean;
};

export function handleDefaultAddressIdChange({
  billing = false,
  labeledIds,
  defaultId,
  id,
  isDefault,
}: IHandleDefaultAddressIdChange) {
  if (defaultId && !labeledIds.includes(defaultId)) {
    const actionType = `setDefault${billing ? 'Billing' : 'Shipping'}Address`;
    const newAction = makeAddressChangeAction(actionType);
    customerChangeActions.addCustomerChangeAction(newAction);

    return undefined;
  }

  if (isDefault && id !== defaultId) {
    const actionType = `setDefault${billing ? 'Billing' : 'Shipping'}Address`;
    const newAction = makeAddressChangeAction(actionType, { id });
    customerChangeActions.addCustomerChangeAction(newAction);

    return id;
  }

  return defaultId;
}
