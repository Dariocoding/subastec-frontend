import CardBids from './CardBids';
import TablePlaceholder from '../../../../layout/common/placeholders/TablePlaceholder';
import * as React from 'react';
interface IDashboardRightProps {
	optionActual: string;
}

const ConfiguracionUser = React.lazy(() => import('./ConfiguracionUsers'));
const HistorialBids = React.lazy(() => import('./HistorialBids'));
const HistorialSubastas = React.lazy(() => import('./HistorialSubastas'));
const Invitacion = React.lazy(() => import('./Invitación'));
const MisAutoPujas = React.lazy(() => import('./MisAutoPujas'));
const Seguridad = React.lazy(() => import('./Seguridad'));

const DashboardRight: React.FunctionComponent<IDashboardRightProps> = props => {
	const dataOptionsComponents = [
		{ component: CardBids, name: 'comprar-bids' },
		{
			component: HistorialBids,
			name: 'historial-bids',
		},
		{ component: HistorialSubastas, name: 'historial-pujas' },
		{
			component: () => <HistorialSubastas winnerUser />,
			name: 'subastas-ganadas',
		},
		{ component: MisAutoPujas, name: 'mis-auto-pujas' },
		{ component: Invitacion, name: 'invitacion' },
		{ component: ConfiguracionUser, name: 'configuracion' },
		{
			component: Seguridad,
			name: 'acceso-seguridad',
		},
	];

	return (
		<React.Suspense fallback={<TablePlaceholder />}>
			{dataOptionsComponents.map(({ component: Component, name }, index) => {
				if (props.optionActual === name) return <Component key={index} />;
			})}
		</React.Suspense>
	);
};

export default DashboardRight;
