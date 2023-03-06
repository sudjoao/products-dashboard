import DefaultAppBar from '../../../components/DefaultAppBar';
import {
  ProductPageContainer,
  ProductPageContent,
  ProductPageTitle
} from './styles';

interface iProductPageTemplateProps {
  title: string;
  children: JSX.Element | JSX.Element[] | undefined | boolean;
  otherActionsButtons?: JSX.Element | JSX.Element[] | undefined;
}

export const ProductPageTemplate = ({
  title,
  children,
  otherActionsButtons
}: iProductPageTemplateProps) => {
  return (
    <>
      <ProductPageContainer>
        <DefaultAppBar title={title} otherActions={otherActionsButtons} />
        <ProductPageContent>
          <ProductPageTitle>{title}</ProductPageTitle>
          {children}
        </ProductPageContent>
      </ProductPageContainer>
    </>
  );
};
