import { Route, Routes } from 'react-router';
import { CreateProduct } from '../../pages/CreateProduct';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { ProductInfo } from '../../pages/ProductInfo';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/product/:productId'} element={<ProductInfo />} />
      <Route path={'/product/new'} element={<CreateProduct />} />
      <Route path={'/product/edit/:productId'} element={<CreateProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
