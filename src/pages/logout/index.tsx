import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { StyledBtn } from '../../components/styledBtn';
import { reset } from '../../features/users/usersSlice';
import { useAppDispatch } from '../../store/hooks';
import { StyledPageContentWrapper } from '../registration/style';
import { resetCartData } from '../../features/cart/cartSlice';

export default function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(reset());
    dispatch(resetCartData());
    navigate('/');
    toast(`Bye bye lazy bun 🧡`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <StyledPageContentWrapper>
      <StyledBtn $primary onClick={handleLogout}>
        Logout
      </StyledBtn>
    </StyledPageContentWrapper>
  );
}
