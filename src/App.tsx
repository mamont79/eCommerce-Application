import { Route } from 'react-router-dom';
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

export default function App() {
  return (
    <StyledPageWrapper>
      <NavBar />
      <StyledRoutes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </StyledRoutes>
      <Footer />
    </StyledPageWrapper>
  );
}
