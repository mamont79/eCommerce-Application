import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './pages/welcome';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Registration from './pages/registration';
import NavBar from './components/navBar';
import Footer from './components/footer';
import {
  StyledRoutes,
  StyledPageWrapper,
} from './components/routerWrapper/style';
import Logout from './pages/logout';
import { useAppDispatch } from './store/hooks';
import { fetchAuthToken } from './features/users/usersSlice';
import { getTokenCookie } from './api/cookieToken';

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const tokenFromCookie = getTokenCookie('access_token');
    if (!tokenFromCookie) {
      dispatch(fetchAuthToken);
    }
  }, [dispatch]);

  return (
    <StyledPageWrapper>
      <NavBar />
      <StyledRoutes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </StyledRoutes>
      <ToastContainer />
      <Footer />
    </StyledPageWrapper>
  );
}
