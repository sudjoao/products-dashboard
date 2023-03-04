import { Route, Routes } from 'react-router';
import { Register } from '../../pages/Register';

export const AutenticationRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Register />} />
    </Routes>
  );
};
