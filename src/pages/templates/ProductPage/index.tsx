import { ProductPageContainer, ProductPageTitle } from './styles';

interface iProductPageTemplateProps {
  title: string;
  children: JSX.Element | JSX.Element[] | undefined | boolean;
}

export const ProductPageTemplate = ({
  title,
  children
}: iProductPageTemplateProps) => {
  return (
    <ProductPageContainer>
      <ProductPageTitle>{title}</ProductPageTitle>
      {children}
    </ProductPageContainer>
  );
};