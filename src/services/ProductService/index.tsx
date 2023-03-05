import { HttpsAdapterType } from '../../adapters/https/HttpsAdapter';
import { tProductDto } from '../../types/dto/productDto';
import { tProduct } from '../../types/product';
import { parseProductDto } from '../../utils/parseProductsDto';

export interface iProductService {
  listProducts: (userToken: string) => Promise<tProduct[] | undefined>;
  createProduct: (
    userToken: string,
    productInfo: tProduct
  ) => Promise<tProduct | undefined>;
  editpProduct: (
    userToken: string,
    productInfo: tProduct,
    productId: string
  ) => Promise<tProduct | undefined>;
}

export class MockApiProductService implements iProductService {
  api: HttpsAdapterType;

  constructor(api: HttpsAdapterType) {
    this.api = api;
  }

  createHeader(token: string) {
    const config = {
      headers: { Authorization: token }
    };
    return config;
  }

  async listProducts(userToken: string): Promise<tProduct[] | undefined> {
    const products = await this.api.get<tProductDto[]>(
      'products',
      this.createHeader(userToken)
    );
    if (!products) return;
    const parsedProducts = products.map((productDto) =>
      parseProductDto(productDto)
    );
    console.log(parsedProducts);
    return parsedProducts;
  }

  async createProduct(
    userToken: string,
    productInfo: tProduct
  ): Promise<tProduct | undefined> {
    return;
  }

  async editpProduct(
    userToken: string,
    productInfo: tProduct,
    productId: string
  ): Promise<tProduct | undefined> {
    return;
  }
}
