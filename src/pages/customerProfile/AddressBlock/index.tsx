import { useState } from 'react';
import { AddressItem } from './AddressItem/AddressItem';
import { makeAddressChangeAction } from './makeAddressChangeAction';
import { toggleBodyScrolling } from '../../../components/BodyBlinder/toggleBodyScrolling';
import { AddressEditModal } from './AddressEditModal';
import { handleAddressChange } from './helpers/handleAddressChange';
import { handleAddressLabelChange } from './helpers/handleAddressLabelChange';
import { handleDefaultAddressIdChange } from './helpers/handleDefaultAddressIdChange';
import { getInitialAddressData } from './getInitialAddressData';
import { StyledAddressList } from './style';
import { IAddress, ICustomer } from '../../../types/customerTypes';
import { ActionType } from '../customerProfileData/types';
import { ICustomerEditFormFields, type IOperationsWithAddress } from './type';
import { customerChangeActions } from '../listOfChangeActions';

export function AddressBlock({ customer }: { customer: ICustomer }) {
  const [editedAddress, setEditedAddress] = useState<IAddress | null>(null);

  const modalControlls = {
    showModal(address: IAddress) {
      toggleBodyScrolling(Boolean(editedAddress));
      setEditedAddress(address);
    },
    hideModal() {
      toggleBodyScrolling(Boolean(editedAddress));
      setEditedAddress(null);
    },
  };

  const initialAddressData = getInitialAddressData(customer);

  const [currentAddressData, setCurrentAddressData] =
    useState(initialAddressData);

  const {
    addresses,
    billingAddressIds,
    shippingAddressIds,
    defaultBillingAddressId,
    defaultShippingAddressId,
  } = currentAddressData;

  const operationsWithAddress: IOperationsWithAddress = {
    removeAddress(id: string) {
      const newAddressesState = {
        addresses: currentAddressData.addresses.filter(
          ({ id: addId }) => addId !== id
        ),
        billingAddressIds: currentAddressData.billingAddressIds.filter(
          (billingId) => billingId !== id
        ),
        shippingAddressIds: currentAddressData.shippingAddressIds.filter(
          (shippingId) => shippingId !== id
        ),
        defaultBillingAddressId:
          currentAddressData.defaultBillingAddressId === id
            ? undefined
            : currentAddressData.defaultBillingAddressId,
        defaultShippingAddressId:
          currentAddressData.defaultShippingAddressId === id
            ? undefined
            : currentAddressData.defaultShippingAddressId,
      };
      const newAction = makeAddressChangeAction(ActionType.REMOVE_ADDRESS, {
        id,
      });
      customerChangeActions.addCustomerChangeAction(newAction);
      setCurrentAddressData(newAddressesState);
    },
    changeAddress({
      id,
      country,
      postalCode,
      city,
      streetName,
      billingAddress: isBilling,
      shippingAddress: isShipping,
      defaultBilling: isDefaultBilling,
      defaultShipping: isDefaultShipping,
    }: ICustomerEditFormFields) {
      const updatedAddress = {
        id,
        country,
        postalCode,
        streetName,
        city,
      };
      const newAddresses = handleAddressChange({ addresses, updatedAddress });
      const newBillingAddressIds = handleAddressLabelChange({
        billing: true,
        addressIds: billingAddressIds,
        id,
        isLabeled: isBilling,
      });
      const newShippingAddressIds = handleAddressLabelChange({
        addressIds: shippingAddressIds,
        id,
        isLabeled: isShipping,
      });
      const newDefaultBillingAddressId = handleDefaultAddressIdChange({
        billing: true,
        labeledIds: billingAddressIds,
        defaultId: defaultBillingAddressId,
        id,
        isDefault: isDefaultBilling,
      });
      const newDefaultShippingAddressId = handleDefaultAddressIdChange({
        defaultId: defaultShippingAddressId,
        labeledIds: shippingAddressIds,
        id,
        isDefault: isDefaultShipping,
      });

      const newCurrentAddressData = {
        addresses: newAddresses,
        billingAddressIds: newBillingAddressIds,
        shippingAddressIds: newShippingAddressIds,
        defaultBillingAddressId: newDefaultBillingAddressId,
        defaultShippingAddressId: newDefaultShippingAddressId,
      };

      setCurrentAddressData(newCurrentAddressData);

      modalControlls.hideModal();
    },
  };

  const addressItems = addresses.map((address) =>
    AddressItem({
      address,
      operationsWithAddress,
      showModal: modalControlls.showModal,
      isBilling: billingAddressIds.includes(address.id),
      isShipping: shippingAddressIds.includes(address.id),
      isDefaultBilling: address.id === defaultBillingAddressId,
      isDefaultShipping: address.id === defaultShippingAddressId,
    })
  );
  return (
    <div>
      <StyledAddressList>{addressItems}</StyledAddressList>
      {Boolean(editedAddress) && (
        <AddressEditModal
          oldAddress={editedAddress!}
          cancelEdit={modalControlls.hideModal}
          operationsWithAddress={operationsWithAddress}
          isBilling={billingAddressIds.includes(editedAddress!.id)}
          isShipping={shippingAddressIds.includes(editedAddress!.id)}
          isDefaultBilling={defaultBillingAddressId === editedAddress!.id}
          isDefaultShipping={defaultShippingAddressId === editedAddress!.id}
        />
      )}
    </div>
  );
}
