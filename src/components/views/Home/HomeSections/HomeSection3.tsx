import styled from 'styled-components';
import CardsVistas from '../components/CardsVistas';
import { Box } from '@mui/material';
import { CustomButtonOutlineButton } from '../../../layout/common/CustomsButtonsOutline';
import { STATE_MODAL_REGISTRO, AbrirModalAuth } from '../../../utils';

import { useAuthContext } from '../../../../context/autenticacion/authState';
const Container = styled.div`
	padding: 40px;
	background-color: #1950a1;
	.btn-primary {
		border: none;
		background: none;
		font-size: 20px;
		font-weight: 700;
		line-height: 45px;
		padding: 5px 15px;
		border-radius: 35px;
		background-color: #3584b9;
		color: #fff;
		margin: auto;

		:hover {
			background-color: #097fff;
		}
	}
`;

const HomeSection3 = () => {
	const { openModalAuth } = AbrirModalAuth(STATE_MODAL_REGISTRO);
	const { autenticado } = useAuthContext();
	return (
		<Container>
			<CardsVistas />
			<Box textAlign={'center'}>
				{!autenticado && (
					<CustomButtonOutlineButton
						size={'large'}
						style={{
							borderRadius: '30px',
							padding: '10px 50px',
							fontSize: '25px',
						}}
						nooutlinehover="true"
						onClick={openModalAuth}
					>
						Participa gratis
					</CustomButtonOutlineButton>
				)}
			</Box>
		</Container>
	);
};

export default HomeSection3;
