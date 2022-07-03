import { Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';
import * as React from 'react';
import { PujaType, SubastaType } from '../../../../../entities';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import { toast } from 'react-toastify';
import { AbrirModalAuth, STATE_MODAL_LOGIN } from '../../../../utils';
import { HandlePujarProps } from '.';
import { useAutoPujasContext } from '../../../../../context/autopujas/AutoPujasContext';

interface IPujadorProps {
	subasta: SubastaType;
	puja: number;
	setPuja(value: number): void;
	handlePujar(value: HandlePujarProps): void;
	isPujando: boolean;
}

const Pujador: React.FC<IPujadorProps> = props => {
	const { autopujas, detenerAutoPuja } = useAutoPujasContext();
	const { usuario, autenticado } = useAuthContext();
	const { openModalAuth } = AbrirModalAuth(STATE_MODAL_LOGIN);
	const { subasta, puja, setPuja, handlePujar, isPujando } = props;

	const AddToPuja = (value: number) => {
		if (!autenticado) return openModalAuth();

		if (!usuario.bids) {
			return toast.error('Debes tener bids primero antes de pujar');
		}

		const resultado = puja + value;
		if (!usuario.bids || usuario.bids < resultado) {
			const resta = usuario.bids - puja;
			const resultado = puja + resta;
			if (resultado === usuario.bids) setPuja(resultado);
			return;
		}
		setPuja(resultado);
	};

	const onChangeField = (value: number) => {
		if (!autenticado) return openModalAuth();

		if (!usuario.bids) {
			return toast.error('Debes tener bids primero antes de pujar', {
				position: 'bottom-right',
			});
		}
		if (usuario.bids < value) {
			return toast.error(
				'Los bids puestos no alcanzan, prueba comprando un paquete de bids!',
				{ position: 'bottom-right' }
			);
		}
		setPuja(value);
	};

	const handleDetenerPuja = () => detenerAutoPuja(subasta.idsubasta);

	const isAutoPujando = autopujas.includes(subasta.idsubasta);

	return (
		<Container>
			<Typography paddingBottom={1}>Autopujador</Typography>
			<div className="autopujador_box">
				<div className="autopujador_select">
					{!isAutoPujando ? (
						<React.Fragment>
							<TextField
								size="small"
								fullWidth
								value={puja}
								onChange={e =>
									onChangeField(
										+e.target.value
									)
								}
							/>
							<Button
								style={{ background: '#fff' }}
								onClick={() =>
									handlePujar('autopujar')
								}
							>
								Insertar
							</Button>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Typography display={'inline'}>
								Ya estás autopujando esta subasta
							</Typography>
							<Button
								style={{
									background: '#fff',
									marginBottom: '10px',
								}}
								onClick={handleDetenerPuja}
							>
								Detener Puja
							</Button>
						</React.Fragment>
					)}
				</div>
			</div>
			<div className="autopujador_number">
				<ul>
					<li onClick={() => AddToPuja(10)}>+10</li>
					<li onClick={() => AddToPuja(20)}>+20</li>
					<li onClick={() => AddToPuja(50)}>+50</li>
					<li onClick={() => AddToPuja(100)}>+100</li>
				</ul>
			</div>
		</Container>
	);
};

export default Pujador;

const Container = styled.div`
	padding: 25px 0px;
	color: #fff;
	margin-left: 54px;
	margin-right: 54px;
	.autopujador_box {
		border: 2px solid #fff;
		border-radius: 10px;
		padding: 30px 10px;

		.autopujador_select {
			position: relative;
			input {
				background: #6d87bf;
				color: #fff;
				border-radius: 10px;
			}
			button {
				position: absolute;
				right: 0px;
				font-size: 15px;
				line-height: 18px;
				font-weight: 700;
				color: #2d3f82;
				display: inline-block;
				background: #fff;
				border-radius: 10px;
				padding: 10px 20px;
			}
		}
	}

	.autopujador_number {
		padding: 10px 40px 20px;
		margin-top: 15px;
		ul {
			display: flex;
			justify-content: space-between;
			align-items: center;
			li {
				font-size: 12px;
				font-weight: 500;
				color: #fff;
				border: 1px solid #fff;
				border-radius: 50%;
				cursor: pointer;
				height: 40px;
				width: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: 0.3s ease;
				&:hover {
					color: #000;
					background-color: #fff;
				}
			}
		}
	}
`;
