import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { formData } from './data';
import { DefaultTextField } from '../../../components/DefaultTextField';
import { useContext } from 'react';
import { FormTemplate } from '../../templates/FormTemplate';
import { tPartialUser } from '../../../types/user';
import { CepContext } from '../../../contexts/CepServiceContext';
import { LoadingContext } from '../../../contexts/LoadingContext';
import { tAddress } from '../../../types/address';
import { TwoColumsForm } from '../../../components/TwoColumnsForm';

const validationSchema = yup.object({
  cep: yup
    .string()
    .required('Senha é um campo obrigatório.')
    .min(8, 'CEP necessitade de 8 digitos')
    .max(8, 'CEP necessitade de 8 digitos'),
  city: yup.string().required('Senha é um campo obrigatório.'),
  state: yup.string().required('Senha é um campo obrigatório.'),
  public_place: yup.string().required('Senha é um campo obrigatório.'),
  neighborhood: yup.string().required('Senha é um campo obrigatório.'),
  complement: yup.string().required('Senha é um campo obrigatório.')
});

interface iAddressDataFormProps {
  handleContinueButton: (data: tPartialUser) => void;
}

export const AddressDataForm = ({
  handleContinueButton
}: iAddressDataFormProps) => {
  const { getLocationInfo } = useContext(CepContext);
  const { setIsLoading } = useContext(LoadingContext);
  const formik = useFormik({
    initialValues: {
      cep: '',
      city: '',
      state: '',
      public_place: '',
      neighborhood: '',
      complement: ''
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleContinueButton({});
    }
  });

  const updateValues = (addressInfo: tAddress) => {
    let info: keyof typeof addressInfo;
    for (info in addressInfo) {
      if (info != 'cep') formik.setFieldValue(info, addressInfo[info], true);
    }
  };

  const handleCepChange = async (e: React.ChangeEvent<any>) => {
    formik.handleChange(e);
    if (e.target.value.length == 8) {
      setIsLoading(true);
      getLocationInfo(e.target.value)
        .then((data) => data && updateValues(data))
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <FormTemplate onSubmit={formik.handleSubmit}>
      <DefaultTextField
        formData={formData.cep}
        value={formik.values.cep}
        onChange={handleCepChange}
        error={formik.touched.cep && Boolean(formik.errors.cep)}
        helperText={formik.touched.cep && formik.errors.cep}
      />
      <TwoColumsForm>
        <DefaultTextField
          formData={formData.city}
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <DefaultTextField
          formData={formData.state}
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        />
      </TwoColumsForm>
      <DefaultTextField
        formData={formData.public_place}
        value={formik.values.public_place}
        onChange={formik.handleChange}
        error={
          formik.touched.public_place && Boolean(formik.errors.public_place)
        }
        helperText={formik.touched.public_place && formik.errors.public_place}
      />
      <DefaultTextField
        formData={formData.neighborhood}
        value={formik.values.neighborhood}
        onChange={formik.handleChange}
        error={
          formik.touched.neighborhood && Boolean(formik.errors.neighborhood)
        }
        helperText={formik.touched.neighborhood && formik.errors.neighborhood}
      />
      <DefaultTextField
        formData={formData.complement}
        value={formik.values.complement}
        onChange={formik.handleChange}
        error={formik.touched.complement && Boolean(formik.errors.complement)}
        helperText={formik.touched.complement && formik.errors.complement}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Cadastrar
      </Button>
    </FormTemplate>
  );
};
