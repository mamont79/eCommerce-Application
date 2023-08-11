// import React from 'React';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Registration from './pages/registration';

// const navigate = useNavigate();

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
