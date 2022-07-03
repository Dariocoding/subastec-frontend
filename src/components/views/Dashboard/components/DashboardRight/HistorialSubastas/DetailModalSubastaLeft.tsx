import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import moment from 'moment-timezone';
import { PujaType, SubastaType } from '../../../../../../entities';
import { formatter, PF } from '../../../../../utils';
import { useAuthContext } from '../../../../../../context/autenticacion/authState';
import { FaAward } from 'react-icons/fa';
import useRequestData from '../../../../../../hooks/useRequestData';
import DataTable from '../../../../../layout/common/datatable';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface IDetailModalSubastaLeftProps {
	subasta: SubastaType;
}

const DetailModalSubastaLeft: React.FC<IDetailModalSubastaLeftProps> = ({ subasta }) => {
	const { usuario } = useAuthContext();
	const [pujas, loadingPujas] = useRequestData<PujaType[]>([], {
		url: `puja?userid=${usuario.iduser}&subastaid=${subasta.idsubasta}`,
	});

	const ImagenSubasta: React.FC = () => {
		if (subasta.producto) {
			return (
				<Box display={'flex'} justifyContent={'center'}>
					<img
						src={PF + subasta.fotoSubasta}
						width={'100%'}
						alt={''}
					/>
				</Box>
			);
		}

		if (subasta.paqueteBid) {
			return (
				<Box
					style={{
						background: subasta.paqueteBid.background,
						width: '75%',
						margin: 'auto',
					}}
					borderRadius={5}
					color={'#fff'}
					padding={7}
				>
					<Typography variant={'h5'} align={'center'}>
						Paquete de bids: {subasta.paqueteBid.cantidadBids}{' '}
						<br />
						Bonus: {subasta.paqueteBid.bonus}
					</Typography>
				</Box>
			);
		}
		return null;
	};

	const precioTotal = (p: PujaType) => {
		const formula = (p.costopuja / 100) * p.cantidadBids;
		return formatter.format(formula ? formula : 0).replace('$', '') + ' USD';
	};

	const data: GridRowsProp = pujas.map(p => ({
		...p,
		id: p.idpuja,
		fullname: p.user.nombres + ' ' + p.user.apellidos,
		precioTotal: precioTotal(p),
	}));

	const headingPujas: GridColDef[] = [
		{ field: 'fullname', headerName: 'Nombre de usuario' },
		{ field: 'cantidadBids', headerName: 'Cantidad Bids' },
		{ field: 'precioTotal', headerName: 'Precio' },
	];

	return (
		<Grid item lg={subasta.producto ? 6 : 12}>
			<ImagenSubasta />
			<Typography variant="h5" align={'center'} marginTop={2}>
				{subasta.titulo}
			</Typography>
			<Typography marginTop={1}>
				<>
					<b>Fecha Finalización:</b>{' '}
					{moment(subasta.fechaFinalizacion).format(
						'DD/MM/YYYY H:mm:ss'
					)}
				</>
			</Typography>
			<Typography marginTop={1}>
				<>
					<b>Fecha Inicio:</b>{' '}
					{moment(subasta.fechaInicio).format('DD/MM/YYYY H:mm:ss')}
				</>
			</Typography>
			<Typography marginTop={1}>
				<>
					<b>Precio subasta:</b> {subasta.preciosubasta} USD
				</>
			</Typography>
			<Typography marginY={1}>
				<>
					<b>Costo puja</b>{' '}
					{formatter.format(subasta.costopuja / 100).replace('$', '')}{' '}
					USD
				</>
			</Typography>

			{subasta.winnerUserId === usuario.iduser &&
			subasta?.producto?.codigoTarjeta ? (
				<Typography marginY={1}>
					<>
						<b>Código Tarjeta:</b>{' '}
						{subasta.producto.codigoTarjeta}
					</>
				</Typography>
			) : null}

			{subasta.winnerUserId === usuario.iduser ? (
				<Typography
					marginY={3}
					align={'center'}
					fontWeight={600}
					variant={'h5'}
				>
					Eres el ganador de esta subasta <FaAward />
				</Typography>
			) : null}

			<DataTable loading={loadingPujas} data={data} heading={headingPujas} />
		</Grid>
	);
};

export default DetailModalSubastaLeft;
