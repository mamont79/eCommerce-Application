import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyledContentWrapper } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ICustomer } from '../../types/customerTypes';
import { PersonalDataBlock } from './PersonalDataBlock';
import { StyledBtn } from '../../components/styledBtn';
import { actions } from './listOfChangeActions';
import { AddressBlock } from './AddressBlock';
import {
  fetchUpdateCustomerData,
  resetStatus,
} from '../../features/users/usersSlice';
import { UserStatusTypes } from '../../features/users/usersReducerTypes';
import { toastOptions } from '../registration/RegistrationForm/toastConfig';
import { IDataForUpdate } from './type';

export function CustomerProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, status, message } = useAppSelector((state) => state.users);
  const updateCustomerOnServer = () => {
    const { version } = user.customer;
    const dataForUpdate: IDataForUpdate = {
      version,
      actions,
    };

    dispatch(fetchUpdateCustomerData(dataForUpdate));
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else if (status === UserStatusTypes.ERROR) {
      toast.error(message, toastOptions);
    } else if (status === UserStatusTypes.SUCCESS) {
      toast.success(`Updated succsessfully!`, toastOptions);
      dispatch(resetStatus());
    }
  }, [user, navigate, status, dispatch, message]);

  let profileContent = null;
  if (user) {
    const { customer }: { customer: ICustomer } = user;
    profileContent = (
      <StyledContentWrapper>
        <PersonalDataBlock customer={customer} />
        <AddressBlock customer={customer} />
        <StyledBtn onClick={updateCustomerOnServer}>Save changes</StyledBtn>
      </StyledContentWrapper>
    );
  }
  return profileContent;
}
