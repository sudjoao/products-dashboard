import { GridColDef } from '@mui/x-data-grid';
import { DataTableContainer, StyledDataGrid } from './styles';

interface iDataTableProps {
  columns: GridColDef[];
  rows: any[];
}

export const DataTable = ({ columns, rows }: iDataTableProps) => {
  return (
    <DataTableContainer>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15
            }
          }
        }}
        pageSizeOptions={[5, 10, 15]}
      />
    </DataTableContainer>
  );
};
