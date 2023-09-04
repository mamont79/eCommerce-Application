import { actions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

export function handleAddressLabelChange({
  billing = false,
  addressIds,
  id,
  isLabeled,
}: {
  billing?: boolean;
  addressIds: string[];
  id: string;
  isLabeled: boolean;
}) {
  let newAddressIds = [...addressIds];
  let status = 'quo';
  if (addressIds.includes(id) && !isLabeled) {
    status = 'remove';
    newAddressIds = newAddressIds.filter((currentId) => currentId !== id);
  }
  if (!addressIds.includes(id) && isLabeled) {
    status = 'add';
    newAddressIds.push(id);
  }
  if (status !== 'quo') {
    const actionType = `${status}${billing ? 'Billing' : 'Shipping'}AddressId`;
    const newAction = makeAddressChangeAction(actionType, { id });
    actions.push(newAction);
  }
  return newAddressIds;
}
