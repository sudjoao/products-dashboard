import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { DefaultModal } from '../../components/DefaultModal';
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
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentForm(forms[currentIndex]);
  }, [currentIndex]);

  const handleContinueButton = async (data: tPartialUser) => {
    setUserData({ ...userData, ...data });
    if (currentIndex < forms.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsLoading(true, true);
      signUp(userData as tUser)
        .then(() => setShowModal(true))
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    }
  };

  const handleConfirmation = () => {
    navigate('/');
  };

  return (
    <AutenticationPage title="Criar Conta">
      <DefaultModal
        open={showModal}
        onClick={handleConfirmation}
        handleClose={() => setShowModal(false)}
        title="Cadastrado com sucesso"
      >
        <p> Cadastrado com sucesso.</p>
      </DefaultModal>
      <BreadCrumbs
        items={formsNames}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      />
      <currentForm.form handleContinueButton={handleContinueButton} />
    </AutenticationPage>
  );
};
