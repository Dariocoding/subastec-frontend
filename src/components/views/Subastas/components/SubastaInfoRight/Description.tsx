import styled from 'styled-components';
import { Typography } from '@mui/material';
import * as React from 'react';
import { SubastaType } from '../../../../../entities';
import { formatter } from '../../../../utils';
const Container = styled.div`
	color: #fff;
	padding: 50px;
	font-size: 20px;
	line-height: 43px;

	.device_name h5 {
		font-weight: 400;
	}

	.device_prize {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		p {
			display: inline-block;
			font-size: 20px;
			line-height: 43px;
			font-weight: 400;
			color: #fff;
			margin-right: 30px;
		}
	}
`;

interface IDescriptionProps {
	subasta: SubastaType;
}

const Description: React.FC<IDescriptionProps> = ({ subasta }) => (
	<Container>
		<div className="device_name">
			<Typography variant={'h5'}>{subasta.titulo}</Typography>
		</div>
		{subasta.producto ? (
			<div className="device_prize">
				{subasta.producto.marca ? (
					<Typography variant={'body1'}>
						Marca: {subasta.producto.marca}
					</Typography>
				) : null}
				<Typography variant={'body1'} marginLeft={2}>
					Valor: {formatter.format(subasta.producto.precio)} USD
				</Typography>
			</div>
		) : null}
	</Container>
);

export default Description;
