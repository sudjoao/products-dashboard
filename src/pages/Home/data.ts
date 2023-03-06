import { GridColDef } from '@mui/x-data-grid';
import { tProduct } from '../../types/product';

export const getTableHeaders = (
  renderProductImage: (imageSource: string) => JSX.Element,
  renderIconButton: (product: tProduct) => JSX.Element
): GridColDef[] => [
  {
    field: 'photo',
    headerName: 'Foto',
    align: 'center',
    sortable: false,
    renderCell: (params) => renderProductImage(params.value)
  },
  { field: 'name', headerName: 'Nome', minWidth: 200, flex: 2 },
  { field: 'brand', headerName: 'Marca', minWidth: 200, flex: 2 },
  { field: 'price', headerName: 'Preço', minWidth: 100, flex: 1 },
  {
    field: 'stock',
    headerName: 'Estoque',
    type: 'number',
    minWidth: 100,
    flex: 1
  },
  {
    field: 'sold',
    headerName: 'Vendidos',
    type: 'number',
    minWidth: 100,
    flex: 1
  },
  {
    field: 'info',
    headerName: '',
    sortable: false,
    filterable: false,
    renderCell: (params) => renderIconButton(params.row as tProduct),
    minWidth: 100,
    flex: 1
  }
];
