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
  const newDefaultId = isDefault ? id : defaultId;
  if (isDefault && defaultId !== newDefaultId) {
    const actionType = `setDefault${billing ? 'Billing' : 'Shipping'}Address`;
    const newAction = makeAddressChangeAction(actionType, { id });
    customerChangeActions.addCustomerChangeAction(newAction);
  }

  return labeledIds.includes(id) ? newDefaultId : undefined;
}
