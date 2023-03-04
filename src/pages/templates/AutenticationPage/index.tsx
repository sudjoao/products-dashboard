import {
  AutenticationPageContainer,
  AutenticationPageContent,
  AutenticationPageTitle
} from './styles';

interface iAutenticationPageProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const AutenticationPage = ({
  title,
  children
}: iAutenticationPageProps) => {
  return (
    <AutenticationPageContainer>
      <AutenticationPageTitle>{title}</AutenticationPageTitle>
      <AutenticationPageContent>{children}</AutenticationPageContent>
    </AutenticationPageContainer>
  );
};
