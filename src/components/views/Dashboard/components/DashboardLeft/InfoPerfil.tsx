import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import { validarFotoPerfil } from '../../../../utils/validarFotoPerfil';

const Container = styled.div`
	background-image: linear-gradient(
		to right,
		#78b0d2,
		#6fa5ca,
		#679bc4,
		#6092c2,
		#5988bd,
		#5280b9,
		#4e7ab6,
		#4974b3,
		#426bae
	);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 25px 50px;
	border-radius: 15px;
	position: relative;

	.MuiAvatar-root {
		width: 70px;
		height: 70px;
	}

	span {
		color: #fff;
		margin-left: 16px;
		b {
			letter-spacing: 1px;
			font-weight: 500;
		}
	}
`;

const InfoPerfil = () => {
	const { usuario } = useAuthContext();
	return (
		<Container>
			<Avatar src={validarFotoPerfil(usuario)} style={{ maxWidth: '200px' }} />

			<span>
				<b>
					{!usuario.username
						? `${usuario.nombres ? usuario.nombres : ''} 
						${usuario.apellidos ? usuario.apellidos : ''}`
						: usuario.username}
				</b>
				<br />
				{usuario.email_user}
			</span>
		</Container>
	);
};

export default InfoPerfil;
