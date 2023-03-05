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
  { field: 'name', headerName: 'Nome', width: 200 },
  { field: 'brand', headerName: 'Marca', width: 200 },
  { field: 'price', headerName: 'Preço', width: 100 },
  { field: 'stock', headerName: 'Estoque', type: 'number', width: 100 },
  { field: 'sold', headerName: 'Vendidos', type: 'number', width: 100 },
  {
    field: 'info',
    headerName: '',
    sortable: false,
    filterable: false,
    renderCell: (params) => renderIconButton(params.row as tProduct),
    width: 100
  }
];
