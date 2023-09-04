import { IAddress } from '../../../../types/customerTypes';
import { actions } from '../../listOfChangeActions';
import { ActionType } from '../../customerProfileData/types';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

export function handleAddressChange({
  addresses,
  updatedAddress,
}: {
  addresses: IAddress[];
  updatedAddress: IAddress;
}) {
  const newAddresses = [...addresses];
  const indexOfOldAddress = newAddresses.findIndex(
    ({ id: currentId }) => currentId === updatedAddress.id
  );
  newAddresses.splice(indexOfOldAddress, 1, updatedAddress);

  const action = makeAddressChangeAction(
    ActionType.CHANGE_ADDRESS,
    updatedAddress
  );
  actions.push(action);

  return newAddresses;
}
