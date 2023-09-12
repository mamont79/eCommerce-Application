import { useEffect } from 'react';
// import { Suspense, lazy, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './store/hooks';
import Footer from './components/footer';
import NavBar from './components/navBar';

import { fetchMeCustomer } from './features/users/usersSlice';
import { getTokenCookie } from './api/cookieToken';
import Product from './pages/product';
import Basket from './pages/basket';
import { AboutUs } from './pages/aboutUs';
import { StyledPageWrapper, StyledRoutes } from './components/routerWrapper';
// import Spinner from './components/spiner';

import Catalog from './pages/catalog';
import CustomerProfile from "./pages/customerProfile"
import Login from './pages/login';
import Logout from './pages/logout';
import NotFound from './pages/notFound';
import Registration from './pages/registration';
import Welcome from './pages/welcome';


// const Catalog = lazy(() => import('./pages/catalog'));
// const Login = lazy(() => import('./pages/login'));
// const Logout = lazy(() => import('./pages/logout'));
// const NotFound = lazy(() => import('./pages/notFound'));
// const Registration = lazy(() => import('./pages/registration'));
// const Welcome = lazy(() => import('./pages/welcome'));
// const CustomerProfile = lazy(() => import('./pages/customerProfile'));
// const Product = lazy(() => import('./pages/product'));
// const Basket = lazy(() => import('./pages/basket'));
// const AboutUs = lazy(() => import('./pages/aboutUs'));

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
        {/* <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Welcome />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/registration"
          element={
            <Suspense fallback={<Spinner />}>
              <Registration />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Spinner />}>
              <CustomerProfile />
            </Suspense>
          }
        />
        <Route
          path="/logout"
          element={
            <Suspense fallback={<Spinner />}>
              <Logout />
            </Suspense>
          }
        />
        <Route
          path="/basket"
          element={
            <Suspense fallback={<Spinner />}>
              <Basket />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense fallback={<Spinner />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Spinner />}>
              <Catalog />
            </Suspense>
          }
        />
        <Route
          path="/catalog/:productkey"
          element={
            <Suspense fallback={<Spinner />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        /> */}
      </StyledRoutes>
      <ToastContainer />
      <Footer />
    </StyledPageWrapper>
  );
}
