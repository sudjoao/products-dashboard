import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import { CreateProductForm } from '../../forms/CreateProductForm';
import { tProduct } from '../../types/product';
import { ProductPageTemplate } from '../templates/ProductPage';

type iCreateProductParams = {
  productId: string;
};

export const CreateProduct = () => {
  const { productId } = useParams<iCreateProductParams>();
  const { userToken } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { getProduct } = useContext(ProductContext);
  const [product, setProduct] = useState<tProduct>();

  useEffect(() => {
    if (productId) {
      setIsLoading(true);
      getProduct(userToken!, productId)
        .then(setProduct)
        .catch(alert)
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <ProductPageTemplate title={productId ? 'Criar Produto' : 'Editar Produto'}>
      {!isLoading && <CreateProductForm product={product} />}
    </ProductPageTemplate>
  );
};
