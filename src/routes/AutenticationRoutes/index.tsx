import { Route, Routes } from 'react-router';
import { NotFound } from '../../pages/NotFound';
import { SignIn } from '../../pages/SignIn';
import { SignUp } from '../../pages/SignUp';

export const AutenticationRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<SignIn />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
