import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

type IHandleAddressLabelChangeProps = {
  billing?: boolean;
  addressIds: string[];
  isLabeled: boolean;
  id?: string;
  key?: string;
};

type IHandleChangeLabeledAddressProps = {
  billing?: boolean;
  newAddressIds: string[];
  isLabeled: boolean;
  id: string;
};

type IHandleAddNewLabeledAddressProps = {
  billing?: boolean;
  newAddressIds: string[];
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
  const newAddressIds = [...addressIds];
  if (id) {
    return handleChangeLabeledAddress({
      billing,
      newAddressIds,
      isLabeled,
      id,
    });
  }

  if (key) {
    return handleAddNewLabeledAddress({
      billing,
      newAddressIds,
      isLabeled,
      key,
    });
  }
  throw new Error('No address identifier was found');
}

function handleChangeLabeledAddress({
  newAddressIds,
  id,
  isLabeled,
  billing,
}: IHandleChangeLabeledAddressProps) {
  let status = 'quo';
  if (!newAddressIds.includes(id) && isLabeled) {
    status = 'add';
    newAddressIds.push(id);
  } else if (newAddressIds.includes(id) && !isLabeled) {
    status = 'remove';
    return newAddressIds.filter((currentId) => currentId !== id);
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
  newAddressIds,
  isLabeled,
  key,
}: IHandleAddNewLabeledAddressProps) {
  if (isLabeled) {
    newAddressIds.push(key);

    const actionType = `add${billing ? 'Billing' : 'Shipping'}AddressId`;

    const newAction = makeAddressChangeAction(actionType, { key });
    customerChangeActions.addCustomerChangeAction(newAction);
  }
  return newAddressIds;
}
