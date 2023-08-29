import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContentWrapper } from './style';
import { useAppSelector } from '../../store/hooks';
import { PersonalDataBlock } from './PersonalDataBlock';
import { CustomerAddressesList } from './CustomerAddressesList';
import { CustomerEditModal } from './CustomerEditModal';
import { toggleBodyScrolling } from '../../components/BodyBlinder/toggleBodyScrolling';

export function CustomerProfile() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [isEdited, setIsEdited] = useState<boolean>(false);
  const startEdit = () => {
    toggleBodyScrolling(isEdited);
    setIsEdited(true);
  };
  const cancelEdit = () => {
    toggleBodyScrolling(isEdited);
    setIsEdited(false);
  };

  let profileContent = null;
  if (user)
    profileContent = (
      <StyledContentWrapper>
        <PersonalDataBlock startEdit={startEdit} customer={user.customer} />
        <CustomerAddressesList customer={user.customer} />
        {isEdited && (
          <CustomerEditModal cancelEdit={cancelEdit} customerOldData={user} />
        )}
      </StyledContentWrapper>
    );
  return profileContent;
}
