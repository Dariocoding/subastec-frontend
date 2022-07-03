import { Button, Typography } from '@mui/material';
import { GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import * as React from 'react';
import { useLoader } from '../../../../../../context/loaderpage/LoaderPageState';
import { useModal } from '../../../../../../context/modal/ModalState';
import { SubastaType } from '../../../../../../entities';
import useRequestData from '../../../../../../hooks/useRequestData';
import DataTable from '../../../../../layout/common/datatable';
import Tile from '../../../../../layout/common/Tile';
import { FaAward, FaEye } from 'react-icons/fa';
import clienteAxios from '../../../../../../config/axios';
import { handleError } from '../../../../../utils';
import ContentModalSubasta from './ContentModalSubasta';
import { useAuthContext } from '../../../../../../context/autenticacion/authState';
import { ButtonGroup } from 'react-rainbow-components';
import ContentModalReclamo from './ContentModalReclamo';

interface IHistorialSubastasProps {
	winnerUser?: boolean;
}

const HistorialSubastas: React.FunctionComponent<IHistorialSubastasProps> = props => {
	const { setModal } = useModal();
	const { setLoader } = useLoader();
	const { usuario } = useAuthContext();
	const [datos, loading] = useRequestData<SubastaType[]>([], {
		url: props.winnerUser
			? `puja/findSubastasGroup?userid${usuario.iduser}&winnerUserId=${usuario.iduser}`
			: `puja/findSubastasGroup?userid${usuario.iduser}`,
	});

	const viewSubasta = async (id: number) => {
		try {
			setLoader(true, 'Cargando subasta...');

			const subasta = await clienteAxios(`subastas/${id}`);
			setModal({
				content: <ContentModalSubasta subasta={subasta.data} />,
				bgHeader: 'primary',
				titulo: subasta.data.titulo,
				position: 'center',
				size: 'xl',
			});
		} catch (error) {
			handleError(error);
		} finally {
			setLoader(false);
		}
	};

	const viewDireccionReclamo = async (idsubasta: number) => {
		try {
			setLoader(true, 'Cargando subasta...');

			const reclamo = await clienteAxios('subastas-reclamos/' + idsubasta);

			setModal({
				titulo: 'Reclamo Premio Subasta',
				size: 'md',
				bgHeader: 'primary',
				content: (
					<ContentModalReclamo
						reclamo={reclamo.data}
						subastaid={idsubasta}
					/>
				),
			});
		} catch (error) {
			handleError(error);
		} finally {
			setLoader(false);
		}
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
						color="primary"
						onClick={() => viewSubasta(params.row.idsubasta)}
					>
						<FaEye />
					</Button>
					{params.row.winnerUserId === usuario.iduser ? (
						<Button
							variant="contained"
							color="warning"
							onClick={() =>
								viewDireccionReclamo(
									params.row.idsubasta
								)
							}
						>
							<FaAward />
						</Button>
					) : null}
				</ButtonGroup>
			),
		},
	];

	const rows: GridRowsProp = datos.map(d => ({
		...d,
		id: d.idsubasta,
	}));

	return (
		<Tile>
			<Typography variant="h5" align="center" marginBottom={4}>
				{props.winnerUser
					? `Historial de subastas ganadas`
					: `Historial de Subastas`}
			</Typography>
			<DataTable loading={loading} data={rows} heading={Heading} />
		</Tile>
	);
};

export default HistorialSubastas;
