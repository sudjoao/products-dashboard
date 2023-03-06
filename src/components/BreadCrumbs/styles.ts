import { IconButton, styled } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

interface iBreadCrumbItemProps {
  selected: boolean;
  done: boolean;
}

export const BreadCrumbsContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const BreadCrumbIconButton = styled(IconButton)`
  margin: 0;
  padding: 0;
`;
export const BreadCrumbItem = styled('p')<iBreadCrumbItemProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.palette.primary.main : theme.palette.info.main};
    font-weight: ${({ selected }) => (selected ? 'bold' : '400')};
    opacity ${({ done, selected }) => (done || selected ? '100%' : '50%')};
    font-size: 0.7rem;
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 1rem;
  }
`;

export const BreadCrumbArrow = styled(ArrowForwardIos)<iBreadCrumbItemProps>(
  ({ done, theme }) => ({
    color: done ? theme.palette.primary.main : theme.palette.info.main,
    margin: '0 0.5rem',
    fontSize: '0.8rem',
    opacity: done ? '100%' : '50%'
  })
);
