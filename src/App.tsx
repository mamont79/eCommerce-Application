import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './store/hooks';
import Footer from './components/footer';
import NavBar from './components/navBar';
import {
  StyledPageWrapper,
  StyledRoutes,
} from './components/routerWrapper/style';
import Catalog from './pages/catalog';
import { CustomerProfile } from './pages/customerProfile';
import Login from './pages/login';
import Logout from './pages/logout';
import NotFound from './pages/notFound';
import Registration from './pages/registration';
import Welcome from './pages/welcome';
import { fetchMeCustomer } from './features/users/usersSlice';
import { getTokenCookie } from './api/cookieToken';
import Product from './pages/product';
import Basket from './pages/basket';
import { AboutUs } from './pages/aboutUs';

export default function App() {
  const dispatch = useAppDispatch();
  const routingNav = [
    { path: '/', element: <Welcome /> },
    { path: '/login', element: <Login /> },
    { path: '/registration', element: <Registration /> },
    { path: '/profile', element: <CustomerProfile /> },
    { path: '/logout', element: <Logout /> },
    { path: '/basket', element: <Basket /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/catalog/:productkey', element: <Product /> },
    { path: '*', element: <NotFound /> },
  ];
  useEffect(() => {
    const mailToken = getTokenCookie('mail_token');
    if (mailToken) dispatch(fetchMeCustomer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPageWrapper>
      <NavBar />
      <StyledRoutes>
        {routingNav.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </StyledRoutes>
      <ToastContainer />
      <Footer />
    </StyledPageWrapper>
  );
}
