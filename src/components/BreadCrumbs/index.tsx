import {
  BreadCrumbArrow,
  BreadCrumbItem,
  BreadCrumbsContainer
} from './styles';

interface iBreadCrumbsProps {
  items: string[];
  currentIndex: number;
}

export const BreadCrumbs = ({ items, currentIndex }: iBreadCrumbsProps) => {
  return (
    <BreadCrumbsContainer>
      {items.map((item, i) => (
        <>
          <BreadCrumbItem selected={i == currentIndex} done={currentIndex > i}>
            {' '}
            {item}
          </BreadCrumbItem>
          {i < items.length - 1 && (
            <BreadCrumbArrow
              selected={i == currentIndex}
              done={currentIndex > i}
            />
          )}
        </>
      ))}
    </BreadCrumbsContainer>
  );
};
