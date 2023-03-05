import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { formData } from './data';
import { DefaultTextField } from '../../../components/DefaultTextField';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { FormTemplate } from '../../templates/FormTemplate';
import { tPartialUser } from '../../../types/user';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Entre com um e-mail válido')
    .required('E-mail é um campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Tamanho mímino da senha é 8.')
    .required('Senha é um campo obrigatório.'),
  confirmPassword: yup
    .string()
    .min(8, 'Tamanho mímino da senha é 8.')
    .required('Confirmar Senha é um campo obrigatório.')
});

interface iAccountDataFormProps {
  handleContinueButton: (data: tPartialUser) => void;
}

export const AccountDataForm = ({
  handleContinueButton
}: iAccountDataFormProps) => {
  const { signUp } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleContinueButton({ password: values.password, email: values.email });
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
      <DefaultTextField
        formData={formData.confirmPassword}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        hiddenText
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Entrar
      </Button>
    </FormTemplate>
  );
};
