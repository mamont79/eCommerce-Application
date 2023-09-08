import { IAddress, IDraftAddress } from '../../../../types/customerTypes';
import { ActionType } from '../../customerProfileData/types';
import { customerChangeActions } from '../../listOfChangeActions';
import { makeAddressChangeAction } from '../makeAddressChangeAction';

type IHandleAddressAddProps = {
  newAddress: IDraftAddress;
  addresses: IAddress[];
};

export function handleAddressAdd({
  newAddress,
  addresses,
}: IHandleAddressAddProps) {
  const newAddresses = [...addresses];
  const tempId = newAddress.key;

  if (!tempId) throw new Error('No "key" in newly created address');

  const newAddressWithTempId: IAddress = { ...newAddress, id: tempId };
  newAddresses.push(newAddressWithTempId);

  const newAction = makeAddressChangeAction(ActionType.ADD_ADDRESS, newAddress);
  customerChangeActions.addCustomerChangeAction(newAction);

  return newAddresses;
}
