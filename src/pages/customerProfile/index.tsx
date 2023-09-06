import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyledContentWrapper } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { PersonalDataBlock } from './PersonalDataBlock';
import { StyledBtn } from '../../components/styledBtn';
import { AddressBlock } from './AddressBlock';
import {
  fetchUpdateCustomerData,
  resetStatus,
} from '../../features/users/usersSlice';
import { UserStatusTypes } from '../../features/users/usersReducerTypes';
import { toastOptions } from '../registration/RegistrationForm/toastConfig';
import { IDataForUpdate } from './type';
import { customerChangeActions } from './listOfChangeActions';

export function CustomerProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, status, message } = useAppSelector((state) => state.users);
  const updateCustomerOnServer = () => {
    if (!user) return;
    const { version } = user;
    const dataForUpdate: IDataForUpdate = {
      version,
      actions: customerChangeActions.actions,
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

  customerChangeActions.clearActions();

  let profileContent = null;
  if (user) {
    profileContent = (
      <StyledContentWrapper>
        <PersonalDataBlock customer={user} />
        <AddressBlock customer={user} />
        <StyledBtn onClick={updateCustomerOnServer}>Save changes</StyledBtn>
      </StyledContentWrapper>
    );
  }

  return profileContent;
}
