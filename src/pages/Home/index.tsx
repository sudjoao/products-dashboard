import { Info } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../components/DataTable';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import { tProduct } from '../../types/product';
import { ProductPageTemplate } from '../templates/ProductPage/index';
import { getTableHeaders } from './data';
import { ProductImage } from './styles';

export const Home = () => {
  const [products, setProducts] = useState<tProduct[]>();
  const { listProducts } = useContext(ProductContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { userToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = require('../../assets/images/no_image.jpg');
    e.currentTarget.onerror = null;
  };

  const renderProductImage = (imageSource: string) => (
    <ProductImage src={imageSource} onError={handleImageError} />
  );

  const renderIconButton = (product: tProduct) => (
    <IconButton onClick={() => navigate(`product/${product.id}`)}>
      <Info />
    </IconButton>
  );

  const getProducts = async () => {
    setIsLoading(true);
    listProducts(userToken!)
      .then((data) => setProducts(data))
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductPageTemplate title="Produtos">
      {products && (
        <DataTable
          columns={getTableHeaders(renderProductImage, renderIconButton)}
          rows={products}
        />
      )}
    </ProductPageTemplate>
  );
};
