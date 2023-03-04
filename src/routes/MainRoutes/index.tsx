import { Route, Routes } from 'react-router';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
