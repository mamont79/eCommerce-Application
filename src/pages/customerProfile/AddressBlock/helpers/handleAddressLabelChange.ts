import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

type IHandleAddressLabelChangeProps = {
  billing?: boolean;
  addressIds: string[];
  isLabeled: boolean;
  id?: string;
  key?: string;
};

type IHandleAddNewLabeledAddressProps = {
  billing?: boolean;
  addressIds: string[];
  isLabeled: boolean;
  key: string;
};

export function handleAddressLabelChange({
  billing = false,
  addressIds,
  isLabeled,
  id,
  key,
}: IHandleAddressLabelChangeProps) {
  let newAddressIds = [...addressIds];
  if (!id) {
    if (!key) throw new Error('No address identifier was found');
    return handleAddNewLabeledAddress({ billing, addressIds, isLabeled, key });
  }
  let status: 'quo' | 'add' | 'remove' = 'quo';
  if (!addressIds.includes(id) && isLabeled) {
    status = 'add';
    newAddressIds.push(id);
  } else if (addressIds.includes(id) && !isLabeled) {
    status = 'remove';
    newAddressIds = newAddressIds.filter((currentId) => currentId !== id);
  }

  if (status !== 'quo') {
    const actionType = `${status}${billing ? 'Billing' : 'Shipping'}AddressId`;
    const newAction = makeAddressChangeAction(actionType, { id });
    customerChangeActions.addCustomerChangeAction(newAction);
  }

  return newAddressIds;
}

function handleAddNewLabeledAddress({
  billing,
  addressIds,
  isLabeled,
  key,
}: IHandleAddNewLabeledAddressProps) {
  const newAddressIds = [...addressIds];
  if (isLabeled) {
    newAddressIds.push(key);

    const actionType = `add${billing ? 'Billing' : 'Shipping'}AddressId`;

    const newAction = makeAddressChangeAction(actionType, { key });
    customerChangeActions.addCustomerChangeAction(newAction);
  }
  return newAddressIds;
}
