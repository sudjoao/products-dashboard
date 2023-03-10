import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { formData } from './data';
import { DefaultTextField } from '../../components/DefaultTextField';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FormTemplate } from '../templates/FormTemplate';
import { LoadingContext } from '../../contexts/LoadingContext';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Entre com um e-mail válido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Tamanho mímino da senha é 8.')
    .required('Campo obrigatório.')
});

export const SignInForm = () => {
  const { signIn } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true, true);
      signIn(values.email, values.password)
        .catch((error) => {
          alert(error);
        })
        .finally(() => setIsLoading(false));
    }
  });

  return (
    <FormTemplate onSubmit={formik.handleSubmit}>
      <DefaultTextField
        formData={formData.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <DefaultTextField
        formData={formData.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        hiddenText
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Entrar
      </Button>
    </FormTemplate>
  );
};
