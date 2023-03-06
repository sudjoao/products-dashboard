import { Delete, Edit } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ActionButton } from '../../components/ActionButton';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import { tProduct } from '../../types/product';
import { onImageError } from '../../utils/onImageError';
import { ProductPageTemplate } from '../templates/ProductPage';
import {
  ProductBrand,
  ProductContainer,
  ProductImage,
  ProductInfoBox,
  ProductInfoContainer,
  ProductName,
  ProductValue,
  ProductValueDescription
} from './styles';

type iProductInfoParams = {
  productId: string;
};

export const ProductInfo = () => {
  const { getProduct } = useContext(ProductContext);
  const { userToken } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { productId } = useParams<iProductInfoParams>();
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState<tProduct>();

  const getProductInfo = async () => {
    setIsLoading(true);
    getProduct(userToken!, productId!)
      .then(setProductInfo)
      .catch(alert)
      .finally(() => setIsLoading(false));
  };

  const handleDeleteButton = () => console.log('deleted');
  const actions = (
    <>
      <ActionButton
        onClick={() => navigate(`/product/edit/${productId}`)}
        icon="edit"
      />
      <ActionButton onClick={handleDeleteButton} icon="delete" />
    </>
  );

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <ProductPageTemplate
      title={`Produto ${productId}`}
      otherActionsButtons={actions}
    >
      {productInfo && (
        <ProductContainer>
          <ProductImage src={productInfo.photo} onError={onImageError} />
          <ProductName>{productInfo.name}</ProductName>
          <ProductBrand>{productInfo.brand}</ProductBrand>
          <ProductValue>R$ {productInfo.price}</ProductValue>
          <ProductInfoContainer>
            <ProductInfoBox>
              <ProductValue>{productInfo.stock}</ProductValue>
              <ProductValueDescription>em estoque</ProductValueDescription>
            </ProductInfoBox>
            <ProductInfoBox>
              <ProductValue>{productInfo.sold}</ProductValue>
              <ProductValueDescription>vendidos</ProductValueDescription>
            </ProductInfoBox>
          </ProductInfoContainer>
        </ProductContainer>
      )}
    </ProductPageTemplate>
  );
};
