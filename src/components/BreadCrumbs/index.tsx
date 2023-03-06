import { IconButton } from '@mui/material';
import {
  BreadCrumbArrow,
  BreadCrumbIconButton,
  BreadCrumbItem,
  BreadCrumbsContainer
} from './styles';

interface iBreadCrumbsProps {
  items: string[];
  currentIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const BreadCrumbs = ({
  items,
  currentIndex,
  setIndex
}: iBreadCrumbsProps) => {
  return (
    <BreadCrumbsContainer>
      {items.map((item, i) => (
        <>
          <BreadCrumbIconButton
            onClick={() => {
              setIndex(i);
            }}
            disabled={currentIndex < i}
          >
            <BreadCrumbItem
              selected={i == currentIndex}
              done={currentIndex > i}
            >
              {' '}
              {item}
            </BreadCrumbItem>
          </BreadCrumbIconButton>
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
