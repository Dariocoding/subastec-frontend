import { Button, Typography } from '@mui/material';
import { GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { ButtonGroup } from 'react-rainbow-components';
import clienteAxios from '../../../../../../config/axios';
import { useAutoPujasContext } from '../../../../../../context/autopujas/AutoPujasContext';
import { useModal } from '../../../../../../context/modal/ModalState';
import { SubastaType } from '../../../../../../entities';
import DataTable from '../../../../../layout/common/datatable';
import Tile from '../../../../../layout/common/Tile';

interface IMisAutoPujasProps {}

const MisAutoPujas: React.FunctionComponent<IMisAutoPujasProps> = props => {
	const { autopujas, detenerAutoPuja } = useAutoPujasContext();
	const [subastas, setSubastas] = React.useState<SubastaType[]>([]);
	const { setModal } = useModal();
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		async function on() {
			let data = [];
			for (let i = 0; i < autopujas.length; i++) {
				const el = autopujas[i];
				const subasta = await clienteAxios(`subastas/${el}`);
				data.push(subasta.data);
			}
			setSubastas(data);
			setIsLoading(false);
		}
		on();
	}, [autopujas]);

	const viewSubasta = (idsubasta: number) => {};

	const handleDetenerPuja = (idsubasta: number) => {
		detenerAutoPuja(idsubasta);
		const newSubastas = subastas.filter(s => s.idsubasta !== idsubasta);
		setSubastas(newSubastas);
	};

	const Heading: GridColDef[] = [
		{ field: 'id', headerName: 'Subasta ID' },
		{ field: 'titulo', headerName: 'Título' },
		{
			field: 'options',
			headerName: 'Acciones',
			renderCell: (params: GridRenderCellParams<number>) => (
				<ButtonGroup>
					<Button
						variant="contained"
						color="error"
						onClick={() =>
							handleDetenerPuja(params.row.idsubasta)
						}
					>
						Cancelar Auto Puja <FaTimes />
					</Button>
				</ButtonGroup>
			),
		},
	];

	const rows: GridRowsProp = subastas.map(d => ({
		...d,
		id: d.idsubasta,
	}));

	return (
		<Tile>
			<Typography variant="h5" align="center" marginBottom={4}>
				Historial de Pago
			</Typography>
			<DataTable loading={isLoading} data={rows} heading={Heading} />
		</Tile>
	);
};

export default MisAutoPujas;
