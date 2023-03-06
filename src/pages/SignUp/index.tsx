import React, { useContext, useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { LoadingContext } from '../../contexts/LoadingContext';
import { UserContext } from '../../contexts/UserContext';
import { AccountDataForm } from '../../forms/SignUpForms/AccountDataForm';
import { AddressDataForm } from '../../forms/SignUpForms/AddressDataForm';
import { PersonalDataForm } from '../../forms/SignUpForms/PersonalDataForm';
import { tPartialUser, tUser } from '../../types/user';
import { AutenticationPage } from '../templates/AutenticationPage';

export const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);
  const forms = [
    {
      name: 'Dados da Conta',
      form: AccountDataForm
    },
    {
      name: 'Dados Pessoais',
      form: PersonalDataForm
    },
    {
      name: 'Endereço',
      form: AddressDataForm
    }
  ];
  const formsNames = forms.map((form) => form.name);

  const [userData, setUserData] = useState<tPartialUser>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentForm, setCurrentForm] = useState(forms[0]);

  useEffect(() => {
    setCurrentForm(forms[currentIndex]);
  }, [currentIndex]);

  const handleContinueButton = async (data: tPartialUser) => {
    setUserData({ ...userData, ...data });
    if (currentIndex < forms.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsLoading(true);
      signUp(userData as tUser)
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <AutenticationPage title="Criar Conta">
      <BreadCrumbs
        items={formsNames}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      />
      <currentForm.form handleContinueButton={handleContinueButton} />
    </AutenticationPage>
  );
};
