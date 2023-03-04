import { AutenticationPageContainer, AutenticationPageTitle } from './styles';

interface iAutenticationPageProps {
  title: string;
  children: JSX.Element;
}

export const AutenticationPage = ({
  title,
  children
}: iAutenticationPageProps) => {
  return (
    <AutenticationPageContainer>
      <AutenticationPageTitle>{title}</AutenticationPageTitle>
      {children}
    </AutenticationPageContainer>
  );
};
