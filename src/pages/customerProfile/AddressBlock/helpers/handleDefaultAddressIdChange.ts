import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

export function handleDefaultAddressIdChange({
  billing = false,
  labeledIds,
  defaultId,
  id,
  isDefault,
}: {
  billing?: boolean;
  labeledIds: string[];
  defaultId?: string;
  id: string;
  isDefault: boolean;
}) {
  let newDefaultId = isDefault ? defaultId : undefined;
  if (isDefault && defaultId !== id) {
    const actionType = `setDefault${billing ? 'Billing' : 'Shipping'}Address`;
    const newAction = makeAddressChangeAction(actionType, { id });
    customerChangeActions.addCustomerChangeAction(newAction);
    newDefaultId = id;
  }

  return labeledIds.includes(id) ? newDefaultId : undefined;
}
