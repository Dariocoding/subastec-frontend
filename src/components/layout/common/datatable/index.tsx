import * as React from 'react';
import Header from './Header';
import TablePlaceholder from '../placeholders/TablePlaceholder';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Stack } from '@mui/material';

interface IDataTableProps {
	heading: GridColDef[];
	data: GridRowsProp;
	buttonHeader?: React.ReactNode;
	loading: boolean;
	titulo?: any;
	canSearch?: boolean;
	getRowId?(value: any): any;
}

const DataTable: React.FC<IDataTableProps> = props => {
	let { data, heading, buttonHeader, loading, canSearch, getRowId } = props;
	const itemsPerPage = 10;
	const [q, setQ] = React.useState('');
	const [currentItems, setCurrentItems] = React.useState(data);
	const [pageCount, setPageCount] = React.useState(0);
	const [itemOffset, setItemOffset] = React.useState(0);

	if (loading && !data.length) return <TablePlaceholder />;

	heading = heading.map(h => ({
		align: 'center',
		flex: 1,
		headerAlign: 'center',
		sortable: false,
		...h,
	}));

	return (
		<div style={{ flexGrow: 1 }}>
			<DataGrid
				density="comfortable"
				rows={data}
				columns={heading}
				pagination
				getRowId={getRowId}
				loading={loading}
				pageSize={10}
				rowsPerPageOptions={[10]}
				autoHeight
				disableColumnSelector
				disableSelectionOnClick
				disableColumnFilter
				disableColumnMenu
				components={{
					NoRowsOverlay: () => (
						<Stack
							height="100%"
							alignItems="center"
							justifyContent="center"
						>
							No se encontraron datos
						</Stack>
					),
					NoResultsOverlay: () => (
						<Stack
							height="100%"
							alignItems="center"
							justifyContent="center"
						>
							Local filter returns no result
						</Stack>
					),
				}}
			/>
		</div>
	);
};

export default DataTable;
