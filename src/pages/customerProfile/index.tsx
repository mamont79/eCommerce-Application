import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContentWrapper } from './StyledContentWrapper';
import { useAppSelector } from '../../store/hooks';
import { PersonalDataBlock } from './PersonalDataBlock';
import { CustomerAddressesList } from './CustomerAddressesList';

export function CustomerProfile() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  let profileContent = null;
  if (user)
    profileContent = (
      <StyledContentWrapper>
        <PersonalDataBlock customer={user.customer} />
        <CustomerAddressesList customer={user.customer} />
      </StyledContentWrapper>
    );
  return profileContent;
}
