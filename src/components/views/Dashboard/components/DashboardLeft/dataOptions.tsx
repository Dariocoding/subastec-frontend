import CerrarSesionLi from './CerrarSesionLi';

interface ILiGoProps {
	onClick(): void;
}

const LiComprarBids: React.FC<ILiGoProps> = props => <li onClick={props.onClick}>Comprar Bids</li>;

const LiHistorialBids: React.FC<ILiGoProps> = props => (
	<li onClick={props.onClick}>Historial Bids</li>
);

const LiSubastasGanadas: React.FC<ILiGoProps> = props => (
	<li onClick={props.onClick}>Subastas Ganadas</li>
);

const LiMisAutoPujas: React.FC<ILiGoProps> = props => (
	<li onClick={props.onClick}>Mis auto pujas</li>
);

const LiHistorialPujas: React.FC<ILiGoProps> = props => (
	<li onClick={props.onClick}>Historial Pujas</li>
);

const LiInvitación: React.FC<ILiGoProps> = props => <li onClick={props.onClick}>Invitación</li>;

const LiSettings: React.FC<ILiGoProps> = props => <li onClick={props.onClick}>Configuración</li>;

const LiAccesosYSeguridad: React.FC<ILiGoProps> = props => (
	<li onClick={props.onClick}>Accesos y Seguridad</li>
);

const dataOptions = [
	{ component: LiComprarBids, name: 'comprar-bids' },
	{ component: LiHistorialBids, name: 'historial-bids' },
	{ component: LiSubastasGanadas, name: 'subastas-ganadas' },
	{ component: LiMisAutoPujas, name: 'mis-auto-pujas' },
	{ component: LiHistorialPujas, name: 'historial-pujas' },
	{ component: LiInvitación, name: 'invitacion' },
	{ component: LiSettings, name: 'configuracion' },
	{ component: LiAccesosYSeguridad, name: 'acceso-seguridad' },
	{ component: CerrarSesionLi },
];

export default dataOptions;
