import { Info } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '../../components/ActionButton';
import { DataTable } from '../../components/DataTable';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import { tProduct } from '../../types/product';
import { onImageError } from '../../utils/onImageError';
import { ProductPageTemplate } from '../templates/ProductPage/index';
import { getTableHeaders } from './data';
import { ProductImage } from './styles';

export const Home = () => {
  const [products, setProducts] = useState<tProduct[]>();
  const { listProducts } = useContext(ProductContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { userToken } = useContext(UserContext);
  const navigate = useNavigate();

  const renderProductImage = (imageSource: string) => (
    <ProductImage src={imageSource} onError={onImageError} />
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
  };

  useEffect(() => {
    getProducts();
  }, []);

  const action = (
    <ActionButton onClick={() => navigate('product/new')} icon="add" />
  );

  return (
    <ProductPageTemplate title="Produtos" otherActionsButtons={action}>
      {products && (
        <DataTable
          columns={getTableHeaders(renderProductImage, renderIconButton)}
          rows={products}
        />
      )}
    </ProductPageTemplate>
  );
};
