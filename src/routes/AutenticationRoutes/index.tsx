import { Route, Routes } from 'react-router';
import { NotFound } from '../../pages/NotFound';
import { SignIn } from '../../pages/SignIn';

export const AutenticationRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
