import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { formData, sexData } from './data';
import { DefaultTextField } from '../../../components/DefaultTextField';
import { FormTemplate } from '../../templates/FormTemplate';
import { tPartialUser } from '../../../types/user';
import { cpf } from 'cpf-cnpj-validator';
import { CustomDatePicker } from '../../../components/CustomDatePicker';

const validationSchema = yup.object({
  name: yup.string().required('Campo obrigatório.'),
  surname: yup.string().required('Campo obrigatório.'),
  birthDate: yup.date().required('Campo obrigatório.'),
  cpf: yup
    .string()
    .required('CPF é um campo obrigatório.')
    .test('cpf', 'CPF Inválido', (value) => {
      return cpf.isValid(value);
    }),
  sex: yup.string().required('Sex é um campo obrigatório.')
});

interface iPersonalDataFormProps {
  handleContinueButton: (data: tPartialUser) => void;
}

export const PersonalDataForm = ({
  handleContinueButton
}: iPersonalDataFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      birthDate: undefined,
      sex: '',
      cpf: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleContinueButton({ ...values });
    }
  });

  const handleChangeBirthDate = (value: any) => {
    formik.setFieldValue('birthDate', value['$d']);
  };

  return (
    <FormTemplate onSubmit={formik.handleSubmit}>
      <DefaultTextField
        formData={formData.name}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <DefaultTextField
        formData={formData.surname}
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        helperText={formik.touched.surname && formik.errors.surname}
      />
      <DefaultTextField
        formData={formData.cpf}
        value={formik.values.cpf}
        onChange={formik.handleChange}
        error={formik.touched.cpf && Boolean(formik.errors.cpf)}
        helperText={formik.touched.cpf && formik.errors.cpf}
      />
      <DefaultTextField
        formData={formData.sex}
        value={formik.values.sex}
        onChange={formik.handleChange}
        selectable
        selectItems={sexData}
        error={formik.touched.sex && Boolean(formik.errors.sex)}
        helperText={formik.touched.sex && formik.errors.sex}
      />

      <CustomDatePicker
        onChange={handleChangeBirthDate}
        hasError={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
        errorMessage={formik.errors.birthDate}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Continuar
      </Button>
    </FormTemplate>
  );
};
