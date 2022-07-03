import { Box } from '@mui/system';
import * as React from 'react';
import { Button, Input } from 'react-rainbow-components';
import { toast } from 'react-toastify';
import clienteAxios from '../../../../../../config/axios';
import { useModal } from '../../../../../../context/modal/ModalState';
import { useLoader } from '../../../../../../context/loaderpage/LoaderPageState';
import { SubastasReclamoType } from '../../../../../../entities';
import { handleError } from '../../../../../utils';
import { AxiosResponse } from 'axios';

interface IContentModalReclamoProps {
	reclamo: SubastasReclamoType;
	subastaid: number;
}

const ContentModalReclamo: React.FC<IContentModalReclamoProps> = props => {
	const modalState = useModal();
	const loaderState = useLoader();
	const { reclamo, subastaid } = props;
	const [direccion, setDireccion] = React.useState(
		reclamo?.direccion ? reclamo.direccion : ''
	);

	React.useEffect(() => {
		if (reclamo) {
			modalState.setTitulo('Reclamo del producto: ' + reclamo.subasta.titulo);
		}
	}, []);

	/* 	const sendReclamo = async () => {
		if (!direccion) {
			return toast.error('Debes escribir una dirección');
		}
		const data = { subastaid, direccion };

		try {
			let req: AxiosResponse<{ msg: string }>;
			if (reclamo) {
				req = await clienteAxios.put(
					`subastas-reclamos/${reclamo.idreclamo}`,
					data
				);
			} else {
				req = await clienteAxios.post('subastas-reclamos', data);
			}
			toast.success(req.data.msg);
		} catch (error) {
			handleError(error);
		} finally {
			loaderState.setLoader(false);
		}

		modalState.cerrarModal();
	}; */

	return (
		<React.Fragment>
			<Input
				value={direccion}
				onChange={e => setDireccion(e.target.value)}
				placeholder={'Dirección'}
				label={'Dirección de envío'}
			/>
			<Box display={'flex'} justifyContent={'center'}>
				<Button
					variant="brand"
					style={{ width: '90%', marginTop: '20px' }}
					onClick={() => {}}
				>
					Enviar
				</Button>
			</Box>
		</React.Fragment>
	);
};

export default ContentModalReclamo;
