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
  const newDefaultId = isDefault ? id : defaultId;
  if (isDefault && defaultId !== newDefaultId) {
    const actionType = `setDefault${billing ? 'Billing' : 'Shipping'}Address`;
    const newAction = makeAddressChangeAction(actionType, { id });
    customerChangeActions.addCustomerChangeAction(newAction);
  }

  return labeledIds.includes(id) ? newDefaultId : undefined;
}
