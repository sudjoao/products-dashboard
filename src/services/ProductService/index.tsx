import { HttpsAdapterType } from '../../adapters/https/HttpsAdapter';
import { tProductDto } from '../../types/dto/productDto';
import { tProduct } from '../../types/product';
import { parseProductDto } from '../../utils/parseProductsDto';

export interface iProductService {
  listProducts: (userToken: string) => Promise<tProduct[] | undefined>;
  getProduct: (
    userToken: string,
    productId: string
  ) => Promise<tProduct | undefined>;
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
      'produto',
      this.createHeader(userToken)
    );
    if (!products) return;
    const parsedProducts = products.map((productDto) =>
      parseProductDto(productDto)
    );
    console.log(parsedProducts);
    return parsedProducts;
  }

  async getProduct(
    userToken: string,
    productId: string
  ): Promise<tProduct | undefined> {
    const product = await this.api.get<tProductDto>(
      `produto/${productId}`,
      this.createHeader(userToken)
    );
    if (!product) return;
    return parseProductDto(product);
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
