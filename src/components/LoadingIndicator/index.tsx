import { LoadingIndicatorContainer, StyledLoadingIndicator } from './styles';
interface iLoadingIndicatorProps {
  fullscreen?: boolean;
}
export const LoadingIndicator = ({ fullscreen }: iLoadingIndicatorProps) => {
  return (
    <LoadingIndicatorContainer fullscreen={fullscreen}>
      <StyledLoadingIndicator />
    </LoadingIndicatorContainer>
  );
};
