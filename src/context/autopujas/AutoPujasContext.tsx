import * as React from 'react';
import { useAuthContext } from '../autenticacion/authState';
import { SocketTypes } from '../../components/utils';
import { useSocket } from '../socket/SocketContext';

interface IAutoPujasContextProps {
	children: React.ReactNode;
}

interface AutoPujaContentValues {
	autopujas?: number[];
	getAutoPujas?(): void;
	detenerAutoPuja?(subastaid: number): void;
}

const PujasContext = React.createContext<AutoPujaContentValues>({});

const AutoPujasState: React.FunctionComponent<IAutoPujasContextProps> = props => {
	const { usuario, setUsuario } = useAuthContext();
	const { Socket } = useSocket();
	const [autopujas, setAutoPujas] = React.useState<number[]>([]);

	React.useEffect(() => {
		if (usuario.iduser) getAutoPujas();
		if (!usuario.iduser) setAutoPujas([]);
	}, [usuario.iduser]);

	function getAutoPujas() {
		Socket.emit(SocketTypes.GETAUTOPUJA, usuario.iduser);
	}

	function detenerAutoPuja(subastaid: number) {
		Socket.emit(SocketTypes.DETENER_AUTO_PUJA, { subastaid, userid: usuario.iduser });
	}

	Socket.on(SocketTypes.DETENER_AUTO_PUJA, (body: { subastaid: number; userid: number }) => {
		if (usuario.iduser !== body.userid) return;
		const newPujas = autopujas.filter(idsubasta => idsubasta !== body.subastaid);
		setAutoPujas(newPujas);
	});

	Socket.on(SocketTypes.GETAUTOPUJA, (newAutoPujas: number[], userid: number) => {
		if (userid === usuario.iduser) {
			setAutoPujas(newAutoPujas);
		}
	});

	Socket.on(SocketTypes.ADDAUTOPUJA, (body: { subastaid: number; userid: number }) => {
		if (body.userid !== usuario.iduser) return;
		setAutoPujas([...autopujas, body.subastaid]);
	});

	Socket.on(SocketTypes.SENDPUJA, (body: { cantidadBids: number; userid: number }) => {
		if (body.userid !== usuario.iduser) return;
		setUsuario({ bids: body.cantidadBids });
	});

	return (
		<PujasContext.Provider value={{ autopujas, getAutoPujas, detenerAutoPuja }}>
			{props.children}
		</PujasContext.Provider>
	);
};

export default AutoPujasState;

export const useAutoPujasContext = () => React.useContext(PujasContext);
