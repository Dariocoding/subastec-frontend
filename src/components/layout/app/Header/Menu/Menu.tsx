import DataMenu from './DataMenu';
import { Box } from '@mui/material';
import ButtonNav from './ButtonNav';
import {
	CustomButtonOutlineButton,
	CustomButtonOutlineLink,
} from '../../../common/CustomsButtonsOutline';
import { AbrirModalAuth, STATE_MODAL_REGISTRO } from '../../../../utils';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import { useLocation } from 'react-router-dom';

const Menu = () => {
	const { openModalAuth } = AbrirModalAuth(STATE_MODAL_REGISTRO);
	const { autenticado, usuario } = useAuthContext();
	const { pathname } = useLocation();
	return (
		<Box
			sx={{
				display: {
					xs: 'none',
					md: 'none',
					lg: 'flex',
				},
			}}
		>
			{DataMenu.map(menu => (
				<ButtonNav key={menu.url} {...menu} />
			))}

			{autenticado ? (
				<ButtonNav url={'/dashboard'}>COMPRAR BIDS</ButtonNav>
			) : null}

			{usuario.bids ? (
				<ButtonNav url={'/dashboard'}>
					{usuario.bids}{' '}
					<img
						alt="Imagen de Bids"
						src={require('../../../../../assets/images/bid.png')}
						style={{ marginLeft: '5px' }}
						width={20}
					/>
				</ButtonNav>
			) : null}

			{autenticado ? (
				pathname !== '/dashboard' ? (
					<CustomButtonOutlineLink
						nooutlinehover={'true'}
						to={'/dashboard'}
					>
						IR AL DASHBOARD
					</CustomButtonOutlineLink>
				) : null
			) : (
				<CustomButtonOutlineButton
					nooutlinehover={'true'}
					onClick={openModalAuth}
				>
					EMPIEZA GRATIS
				</CustomButtonOutlineButton>
			)}
		</Box>
	);
};

export default Menu;
