/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Footer from './components/footer';
import NavBar from './components/navBar';
import { fetchMeCustomer } from './features/users/usersSlice';
import { getTokenCookie } from './api/cookieToken';
import { StyledPageWrapper, StyledRoutes } from './components/routerWrapper';
import Spinner from './components/spinner';
import { getAuthToken } from './api/auth';
import { getAnonimToken } from './api/authAnonim';
import { fetchMeActiveCart, fetchAnonCart } from './features/cart/cartSlice';
import { fetchDiscountCodes } from './features/discount/discountSlice';

const Catalog = lazy(() => import('./pages/catalog'));
const Login = lazy(() => import('./pages/login'));
const Logout = lazy(() => import('./pages/logout'));
const NotFound = lazy(() => import('./pages/notFound'));
const Registration = lazy(() => import('./pages/registration'));
const Welcome = lazy(() => import('./pages/welcome'));
const CustomerProfile = lazy(() => import('./pages/customerProfile'));
const Product = lazy(() => import('./pages/product'));
const Basket = lazy(() => import('./pages/basket'));
const AboutUs = lazy(() => import('./pages/aboutUs'));

export default function App() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.users);
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
    getAuthToken();
    getAnonimToken();
    const mailToken = getTokenCookie('mail_token');
    if (mailToken) {
      dispatch(fetchMeCustomer());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchDiscountCodes());
    if (isAuth) {
      dispatch(fetchMeActiveCart());
    } else {
      dispatch(fetchAnonCart());
    }
  }, []);
  return (
    <StyledPageWrapper>
      <NavBar />
      <StyledRoutes>
        {routingNav.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<Spinner />}>{element}</Suspense>}
          />
        ))}
      </StyledRoutes>
      <ToastContainer />
      <Footer />
    </StyledPageWrapper>
  );
}
