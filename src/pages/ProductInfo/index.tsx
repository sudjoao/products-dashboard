import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  const [productInfo, setProductInfo] = useState<tProduct>();

  const getProductInfo = async () => {
    setIsLoading(true);
    getProduct(userToken!, productId!)
      .then(setProductInfo)
      .catch(alert)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <ProductPageTemplate title={`Produto ${productId}`}>
      {productInfo && (
        <ProductContainer>
          <ProductImage src={productInfo.photo} onError={onImageError} />
          <ProductName>{productInfo.name}</ProductName>
          <ProductBrand>{productInfo.brand}</ProductBrand>
          <ProductValue>{productInfo.price}</ProductValue>
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
