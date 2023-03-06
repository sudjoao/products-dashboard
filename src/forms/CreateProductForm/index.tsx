import { Field, useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';
import { formData } from './data';
import { DefaultTextField } from '../../components/DefaultTextField';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FormTemplate } from '../templates/FormTemplate';
import { LoadingContext } from '../../contexts/LoadingContext';
import { CurrencyTextField } from '../../components/CurrencyTextField';
import { tProduct } from '../../types/product';
import ImageUploader from '../../components/ImageUploader';
import { ProductContext } from '../../contexts/ProductContext';

const validationSchema = yup.object({
  name: yup.string().required('Campo obrigatório.'),
  brand: yup.string().required('Campo obrigatório.'),
  price: yup.string().required('Campo obrigatório.'),
  stock: yup.number().required('Campo obrigatório.'),
  image: yup.mixed().required('Campo obrigatório.')
});

interface iCreateProductFormProps {
  product?: tProduct;
}

export const CreateProductForm = ({ product }: iCreateProductFormProps) => {
  const { createProduct, editProduct } = useContext(ProductContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { userToken } = useContext(UserContext);
  const initialValues = product
    ? { ...product }
    : {
        image: '',
        name: '',
        brand: '',
        price: '',
        stock: 0
      };

  const handleConfirm = async (data: tProduct) => {
    try {
      let sucessMessage = '';
      setIsLoading(true);
      if (product) {
        await editProduct(userToken!, data, product.id);
        sucessMessage = 'Alterado com sucesso.';
      } else {
        await createProduct(userToken!, data);
        sucessMessage = 'Criado com sucesso.';
      }
      setIsLoading(false);
      alert(sucessMessage);
    } catch (e) {
      alert(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleConfirm(values as tProduct);
    }
  });

  return (
    <FormTemplate onSubmit={formik.handleSubmit}>
      <ImageUploader
        setFieldValue={formik.setFieldValue}
        hasError={formik.touched.image && Boolean(formik.errors.image)}
        errorMessage={formik.errors.image}
        initialImage={product?.photo}
      />
      <DefaultTextField
        formData={formData.name}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <DefaultTextField
        formData={formData.brand}
        value={formik.values.brand}
        onChange={formik.handleChange}
        error={formik.touched.brand && Boolean(formik.errors.brand)}
        helperText={formik.touched.brand && formik.errors.brand}
      />
      <CurrencyTextField
        formData={formData.price}
        value={formik.values.price}
        onChange={formik.handleChange}
        setFieldValue={formik.setFieldValue}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <DefaultTextField
        formData={formData.stock}
        value={formik.values.stock}
        onChange={formik.handleChange}
        error={formik.touched.stock && Boolean(formik.errors.stock)}
        helperText={formik.touched.stock && formik.errors.stock}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Confirmar
      </Button>
    </FormTemplate>
  );
};
