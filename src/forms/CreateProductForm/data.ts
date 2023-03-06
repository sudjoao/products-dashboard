import {
  AddAPhoto,
  Category,
  Copyright,
  Payments,
  Numbers
} from '@mui/icons-material';
import { tFormData } from '../../types/formData';

interface iProductFormData {
  image: tFormData;
  name: tFormData;
  brand: tFormData;
  price: tFormData;
  stock: tFormData;
}

export const formData: iProductFormData = {
  image: {
    id: 'image',
    name: 'image',
    label: 'Foto',
    Icon: AddAPhoto
  },
  name: {
    id: 'name',
    name: 'name',
    label: 'Nome',
    Icon: Category
  },
  brand: {
    id: 'brand',
    name: 'brand',
    label: 'Marca',
    Icon: Copyright
  },
  price: {
    id: 'price',
    name: 'price',
    label: 'Preço',
    Icon: Payments
  },
  stock: {
    id: 'stock',
    name: 'stock',
    label: 'Estoque',
    Icon: Numbers,
    type: 'number'
  }
};
