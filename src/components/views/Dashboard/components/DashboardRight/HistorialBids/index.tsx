import DataTable from '../../../../../layout/common/datatable';
import * as React from 'react';
import useRequestData from '../../../../../../hooks/useRequestData';
import { GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import { PagoType } from '../../../../../../entities/pagos.entity';
import { handleError, SMONEY } from '../../../../../utils';
import { Button, Typography } from '@mui/material';
import { FaEye } from 'react-icons/fa';
import { useLoader } from '../../../../../../context/loaderpage/LoaderPageState';
import { useModal } from '../../../../../../context/modal/ModalState';
import clienteAxios from '../../../../../../config/axios';
import ContentModalPago from './ContentModalPago';
import moment from 'moment-timezone';
import Tile from '../../../../../layout/common/Tile';

interface IHistorialBidsProps {}

const HistorialBids: React.FunctionComponent<IHistorialBidsProps> = () => {
	const { setModal } = useModal();
	const { setLoader } = useLoader();
	const [datos, loading] = useRequestData<PagoType[]>([], { url: '/pagos' });

	const viewPago = async (id: number) => {
		try {
			setLoader(true, 'Cargando pago...');

			const pago = await clienteAxios(`/pagos/${id}`);
			setModal({
				content: <ContentModalPago pago={pago.data} />,
				bgHeader: 'primary',
				titulo: 'Detalle Pago',
				position: 'center',
				size: 'sm',
			});
		} catch (error) {
			handleError(error);
		} finally {
			setLoader(false);
		}
	};

	const Heading: GridColDef[] = [
		{ field: 'transactionId', headerName: 'ID Transacción' },
		{ field: 'date_created', headerName: 'Fecha Transacción' },
		{ field: 'ammount', headerName: 'Total' },
		{ field: 'transactionStatus', headerName: 'Estado Transacción' },
		{ field: 'cantidadBids', headerName: 'Cantidad Bids' },
		{
			field: 'options',
			headerName: 'Acciones',
			renderCell: (params: GridRenderCellParams<number>) => (
				<Button
					variant="contained"
					color="primary"
					size="small"
					onClick={() => viewPago(params.row.idpago)}
				>
					<FaEye />
				</Button>
			),
		},
	];

	const rows: GridRowsProp = datos.map(d => ({
		...d,
		id: d.idpago,
		ammount: `${d.amount / 100} ${SMONEY}`,
		date_created: moment(d.date_created).format('DD/MM/YYYY'),
		cantidadBids: d.cantidadBidsTotal,
	}));

	return (
		<Tile>
			<Typography variant="h5" align="center" marginBottom={4}>
				Historial de Pago
			</Typography>
			<DataTable loading={loading} data={rows} heading={Heading} />
		</Tile>
	);
};

export default HistorialBids;
