import { createContext } from 'react';
import { iProductService } from '../../services/ProductService';
import { tProduct } from '../../types/product';
interface iProductContextProps {
  listProducts: (userToken: string) => Promise<tProduct[] | undefined>;
  createProduct: (
    userToken: string,
    productInfo: tProduct
  ) => Promise<tProduct | undefined>;
  editProduct: (
    userToken: string,
    productInfo: tProduct,
    productId: string
  ) => Promise<tProduct | undefined>;
}

export const ProductContext = createContext<iProductContextProps>(
  {} as iProductContextProps
);

interface iProductContextProvider {
  children: JSX.Element;
  productService: iProductService;
}
export const ProductContextProvider = ({
  children,
  productService
}: iProductContextProvider) => {
  const listProducts = (userToken: string) => {
    const products = productService.listProducts(userToken);
    return products;
  };

  const createProduct = (userToken: string, productInfo: tProduct) => {
    const product = productService.createProduct(userToken, productInfo);
    return product;
  };

  const editProduct = (
    userToken: string,
    productInfo: tProduct,
    productId: string
  ) => {
    const product = productService.editpProduct(
      userToken,
      productInfo,
      productId
    );
    return product;
  };

  return (
    <ProductContext.Provider
      value={{ listProducts, createProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
