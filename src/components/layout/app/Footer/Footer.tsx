import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Container as ContainerMu, Button } from '@mui/material';
import { STATE_MODAL_REGISTRO, AbrirModalAuth } from '../../../utils';
import { useAuthContext } from '../../../../context/autenticacion/authState';

const payment_img = require('../../../../assets/images/payment_img.png');

const Container = styled.footer`
	background-image: linear-gradient(
		to right top,
		#1c489e,
		#1252a5,
		#075cac,
		#0065b2,
		#2e94c8
	);

	padding: 30px 0px;

	h2 {
		color: #fff;
		font-weight: 300;
	}

	.footer_area {
		border-bottom: 2px solid #fff;
		.up_border {
			border-top: 2px solid #fff;
		}

		h2 {
			margin-top: 10px;
		}
	}

	ul li {
		padding-bottom: 7px;
		margin: 10px 0px;

		a {
			margin-left: 8px;
		}

		button {
			color: #fff !important;
			font-weight: 300;
			font-size: 18px;
		}
	}

	.footer_img {
		margin-top: 20px;
		background: #fff;
		width: 200px;
		padding: 15px;
		border-radius: 15px;
		img {
			width: 100%;
		}
	}
`;

const datosPrincipal = [
	{ url: '/', titulo: 'Home' },
	{ url: '/#subastas-en-vivo', titulo: 'Subastas en Vivo' },
	{ url: '/subastas-ganadas', titulo: 'Subastas Finalizadas' },
	{ url: '/contacto', titulo: 'Contacto' },
];

const datosAyuda = [
	'¿Cómo empezar?',
	<>
		Tarjetas que aceptamos <br /> y de pago seguro
	</>,
	'Términos y condiciones',
	'Pregúntas frecuentes',
];

const Footer = () => {
	const { openModalAuth } = AbrirModalAuth(STATE_MODAL_REGISTRO);
	const { autenticado } = useAuthContext();

	const onSelectSubastasEnVivo = (url: string) => {
		if (url === '/#subastas-en-vivo') {
			const el = document.querySelector('#subastas-en-vivo');

			if (el) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			}
		}
	};

	return (
		<Container>
			<ContainerMu maxWidth={'lg'}>
				<Grid container className="footer_area">
					<Grid
						xs={12}
						sm={6}
						lg={3}
						md={3}
						item
						className={'up_border'}
					>
						<h2>Principal</h2>
						<ul>
							{datosPrincipal.map(({ url, titulo }) => (
								<li key={titulo}>
									<Link
										to={url}
										onClick={() => {
											onSelectSubastasEnVivo(
												url
											);
										}}
									>
										{titulo}
									</Link>
								</li>
							))}

							{autenticado && (
								<li>
									<Link to={'/dashboard'}>
										Comprar Bids
									</Link>
								</li>
							)}
						</ul>
					</Grid>
					<Grid xs={12} item sm={6} lg={3} md={3}>
						<h2>Ayuda</h2>
						<ul>
							{datosAyuda.map((titulo, index) => (
								<li key={index}>
									<Link to={'/ayuda'}>
										{titulo}
									</Link>
								</li>
							))}
						</ul>
					</Grid>
					<Grid xs={12} item sm={6} lg={3} md={3}>
						<h2>Cuenta</h2>
						<ul>
							{!autenticado ? (
								<li>
									<Button
										onClick={
											openModalAuth
										}
									>
										Registrarse
									</Button>
								</li>
							) : (
								<li>
									<Link to={'/dashboard'}>
										Mi Cuenta
									</Link>
								</li>
							)}
						</ul>
					</Grid>

					<Grid xs={12} item sm={6} lg={3} md={3} paddingBottom={3}>
						<h2>Métodos de Pago</h2>
						<div className="footer_img">
							<Link to={'/'}>
								<img src={payment_img} alt="" />
							</Link>
						</div>
					</Grid>
				</Grid>
			</ContainerMu>
		</Container>
	);
};

export default Footer;
