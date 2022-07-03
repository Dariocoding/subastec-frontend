import styled from 'styled-components';
import Description from './Description';
import Contador from './Contador';
import Pujador from './Pujador';
import HistorialPujas from './HistorialPujasx';
import CostDetails from './CostDetails';
import * as React from 'react';
import { PujaType, SubastaType } from '../../../../../entities';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import { AbrirModalAuth, handleError, SocketTypes, STATE_MODAL_LOGIN } from '../../../../utils';
import clienteAxios from '../../../../../config/axios';
import { useSocket } from '../../../../../context/socket/SocketContext';
const Container = styled.div`
	border: 1px solid #fff;
	border-radius: 20px;
`;

interface ISubastaInfoRightProps {
	setSubasta(subasta: SubastaType): void;
	subasta: SubastaType;
	pujas: PujaType[];
	setPujas(pujas: PujaType[]): void;
}

export type ReqPujaType = {
	puja: PujaType;
	preciosubasta: number;
};

export type HandlePujarProps = 'pujamanual' | 'autopujar';

const SubastaInfoRight: React.FC<ISubastaInfoRightProps> = props => {
	const { subasta, setPujas, setSubasta, pujas } = props;
	const { Socket } = useSocket();
	const { openModalAuth } = AbrirModalAuth(STATE_MODAL_LOGIN);
	const { autenticado, usuario } = useAuthContext();
	const [puja, setPuja] = React.useState(0);
	const [isPujando, setIsPujando] = React.useState(false);
	const [contador, setContador] = React.useState(10);
	const [hanPujado, setHandPujado] = React.useState(false);

	const handlePujar = async (modalidadPuja: HandlePujarProps) => {
		if (!autenticado) return openModalAuth();

		if (!puja) {
			toast.error('Debes primero añadir bids a tu puja', {
				position: 'bottom-right',
			});
			return;
		}

		if (puja > usuario.bids) {
			toast.error('No posees la cantidad suficiente de bids', {
				position: 'bottom-right',
			});
		}

		if (modalidadPuja === 'pujamanual') PujaManual();
		else PujaAutomatica();
	};

	function PujaAutomatica() {
		Socket.emit(SocketTypes.ADDAUTOPUJA, {
			costopuja: subasta.costopuja,
			userid: usuario.iduser,
			cantidadBids: puja,
			subastaid: subasta.idsubasta,
		});
	}

	async function PujaManual() {
		try {
			setIsPujando(true);
			const idToast = toast.loading('Realizando puja...', {
				position: 'bottom-right',
			});

			const data: PujaType = {
				costopuja: subasta.costopuja,
				subastaid: subasta.idsubasta,
				cantidadBids: puja,
				modalidad: 'M',
			};

			const req = await clienteAxios.post(`puja/${usuario.iduser}`, data);

			const reqData = req.data as {
				msg: string;
				cantidadBids: number;
			} & ReqPujaType;
			toast.update(idToast, {
				type: 'success',
				position: 'bottom-right',
				render: req.data.msg,
				isLoading: false,
				autoClose: 2000,
			});

			Socket.emit(SocketTypes.SENDPUJA, {
				preciosubasta: reqData.preciosubasta,
				puja: reqData.puja,
				cantidadBids: reqData.cantidadBids,
			});
		} catch (error) {
			handleError(error);
		} finally {
			setIsPujando(false);
		}
	}

	React.useEffect(() => {
		Socket.on(SocketTypes.GETPUJASUBASTA(subasta.idsubasta), (body: ReqPujaType) => {
			if (pujas.length >= 10) {
				const oldPujas = pujas.slice(0, 9);
				setPujas([body.puja, ...oldPujas]);
			} else setPujas([body.puja, ...pujas]);

			setSubasta({ ...subasta, preciosubasta: body.preciosubasta });
			setContador(10);
			setHandPujado(true);
			setTimeout(() => setHandPujado(false), 500);
		});
	}, [pujas, subasta]);

	React.useEffect(() => {}, [usuario.iduser]);

	return (
		<Container>
			<Description subasta={props.subasta} />
			<Contador
				pujas={props.pujas}
				subasta={props.subasta}
				handlePujar={handlePujar}
				isPujando={isPujando}
				contador={contador}
				setContador={setContador}
				hanPujado={hanPujado}
			/>
			<Pujador
				subasta={props.subasta}
				puja={puja}
				setPuja={setPuja}
				handlePujar={handlePujar}
				isPujando={isPujando}
			/>
			<CostDetails subasta={props.subasta} />
			<HistorialPujas pujas={props.pujas} />
		</Container>
	);
};

export default SubastaInfoRight;
