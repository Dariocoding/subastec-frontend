import CardBid from './CardBid';
import { Grid } from '@mui/material';
import useRequestData from '../../../../../../hooks/useRequestData';
import CardBidPlaceholder from '../../../../../layout/common/placeholders/CardBidPlaceholder';
import { PaqueteBidType } from '../../../../../../entities';
import * as React from 'react';
import { PayPhoneButtons } from '../../../../../utils';
import { useLoader } from '../../../../../../context/loaderpage/LoaderPageState';
import clienteAxios from '../../../../../../config/axios';
import { useAuthContext } from '../../../../../../context/autenticacion/authState';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ArrayPlaceholder = [...Array(16).keys()];
const CardBids = () => {
	const { setLoader } = useLoader();
	const { usuarioAutenticado } = useAuthContext();
	const [paqueteBids, cargando] = useRequestData([], { url: 'paquete-bids' });
	const [paqueteBidSeleccionado, setPaqueteBid] = React.useState<PaqueteBidType>();

	const onApprovePay = async (details: any) => {
		try {
			const res = await clienteAxios.post('pagos', {
				paqueteBidId: paqueteBidSeleccionado.idpaquete,
				...details,
			});
			await usuarioAutenticado();
			Swal.fire({ title: res.data.msg, icon: 'success' });
			setPaqueteBid(null);
		} catch (error) {
			toast.error('Ha ocurrido un error', { position: 'top-center' });
		} finally {
			setLoader(false);
		}
	};

	const monto = paqueteBidSeleccionado?.price ? paqueteBidSeleccionado.price : 0;

	return (
		<Grid container spacing={4}>
			{cargando
				? ArrayPlaceholder.map(i => (
						<Grid item xs={12} md={6} lg={4} key={i} xl={3}>
							<CardBidPlaceholder />
						</Grid>
				  ))
				: paqueteBids.map((paquete, index) => (
						<Grid item xs={12} md={6} lg={4} key={index} xl={3}>
							<CardBid
								paqueteBid={paquete}
								handleClick={setPaqueteBid}
							/>
						</Grid>
				  ))}

			{monto ? <PayPhoneButtons monto={monto} onAprooved={onApprovePay} /> : null}
		</Grid>
	);
};

export default CardBids;
