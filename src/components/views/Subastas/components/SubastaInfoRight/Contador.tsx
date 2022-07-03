import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { CustomButtonOutlineButton } from '../../../../layout/common/CustomsButtonsOutline';
import { PujaType, SubastaType } from '../../../../../entities';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatter } from '../../../../utils';
import { HandlePujarProps } from '.';
const Container = styled.div<{ hanPujado: boolean }>`
	transition: 0.3s ease;
	background: ${props => (props.hanPujado ? '#ffff' : 'transparent')};
	padding: 20px 54px;

	.info-contador {
		margin-left: 20px;
	}

	.CircularProgressbar-text {
		font-size: 16px !important;
		user-select: none;
	}
`;

interface IContandorProps {
	setContador(value: number): void;
	contador: number;
	subasta: SubastaType;
	pujas: PujaType[];
	handlePujar(value: HandlePujarProps): void;
	isPujando: boolean;
	hanPujado: boolean;
}

const Contandor: React.FC<IContandorProps> = props => {
	const { subasta, handlePujar, isPujando, pujas, contador, setContador } = props;

	React.useEffect(() => {
		const timer = window.setTimeout(() => {
			const resultado = contador - 1;
			resultado < 0 ? setContador(10) : setContador(resultado);
		}, 1000);
		return () => window.clearTimeout(timer);
	}, [contador]);
	const timer = `00:00:${contador < 10 ? '0' + contador : contador} `;
	const price = formatter.format(subasta.preciosubasta ? subasta.preciosubasta : 0.01);
	return (
		<Container hanPujado={props.hanPujado}>
			<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
				<div style={{ width: 150, height: 150, fontWeight: 600 }}>
					<CircularProgressbar
						value={contador * 10}
						text={timer}
						styles={{
							text: {
								fill: props.hanPujado
									? '#1f439a'
									: '#fff',
							},
							trail: {
								stroke: props.hanPujado
									? '#1f439a'
									: '#fff',
							},
							background: { stroke: '#6b9bc7' },
						}}
					/>
				</div>
				<div className="info-contador">
					<Typography
						color={props.hanPujado ? '#1f439a' : '#fff'}
						fontWeight={600}
						variant={'h5'}
					>
						{price.replace('$', '')} USD
					</Typography>
					{pujas.length ? (
						<Typography
							color={props.hanPujado ? '#1f439a' : '#fff'}
							fontWeight={600}
							variant={'h5'}
						>
							{pujas[0].user.nombres +
								(pujas[0].user.apellidos
									? ` ${pujas[0].user.apellidos}`
									: '')}
						</Typography>
					) : null}
				</div>
			</Box>

			<Box display={'flex'} justifyContent={'center'} marginTop={3} marginX={4}>
				<CustomButtonOutlineButton
					size={'large'}
					style={{
						borderRadius: '10px',
						padding: '10px 50px',
						fontSize: '25px',
						boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
					}}
					nooutlinehover="true"
					fullWidth
					onClick={() => handlePujar('pujamanual')}
					disabled={isPujando}
				>
					Pujar
				</CustomButtonOutlineButton>
			</Box>
		</Container>
	);
};

export default Contandor;
