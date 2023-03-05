import { Route, Routes } from 'react-router';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { ProductInfo } from '../../pages/ProductInfo';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/product/:productId'} element={<ProductInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
