import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { formData } from './data';
import { DefaultTextField } from '../../components/DefaultTextField';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FormTemplate } from '../templates/FormTemplate';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Entre com um e-mail válido')
    .required('E-mail é um campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Tamanho mímino da senha é 8.')
    .required('Senha é um campo obrigatório.')
});

export const SignInForm = () => {
  const { signIn } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values.email, values.password).catch((error) => {
        alert(error);
      });
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
