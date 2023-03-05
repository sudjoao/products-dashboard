import { tProduct } from '../types/product';
import { tProductDto } from '../types/dto/productDto';

export const parseProductDto = (productDto: tProductDto): tProduct => {
  const { id, nome, avatar, preco, qt_estoque, qt_vendas, marca } = productDto;
  return {
    id,
    name: nome,
    photo: avatar,
    price: preco,
    stock: qt_estoque,
    sold: qt_vendas,
    brand: marca
  };
};
