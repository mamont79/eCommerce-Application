import { IAddress } from '../../../../types/customerTypes';
import { ActionType } from '../../customerProfileData/types';
import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

type IHandleAddressChange = {
  addresses: IAddress[];
  updatedAddress: IAddress;
};

export function handleAddressChange({
  addresses,
  updatedAddress,
}: IHandleAddressChange) {
  const newAddresses = [...addresses];
  const indexOfOldAddress = newAddresses.findIndex(
    ({ id: currentId }) => currentId === updatedAddress.id
  );
  newAddresses.splice(indexOfOldAddress, 1, updatedAddress);

  const action = makeAddressChangeAction(
    ActionType.CHANGE_ADDRESS,
    updatedAddress
  );
  customerChangeActions.addCustomerChangeAction(action);

  return newAddresses;
}
