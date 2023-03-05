import { Icon, styled } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { MUIStyledCommonProps } from '@mui/system';

interface iBreadCrumbItemProps {
  selected: boolean;
  done: boolean;
}

export const BreadCrumbsContainer = styled('div')`
  display: flex;
  align-items: center;
`;

export const BreadCrumbItem = styled('p')<iBreadCrumbItemProps>(
  ({ selected, done, theme }) => ({
    color: selected ? theme.palette.primary.main : theme.palette.info.main,
    fontWeight: selected ? 'bold' : '400',
    opacity: done || selected ? '100%' : '50%',
    fontSize: '0.7rem'
  })
);

export const BreadCrumbArrow = styled(ArrowForwardIos)<iBreadCrumbItemProps>(
  ({ done, theme }) => ({
    color: done ? theme.palette.primary.main : theme.palette.info.main,
    margin: '0 0.5rem',
    fontSize: '0.8rem',
    opacity: done ? '100%' : '50%'
  })
);
