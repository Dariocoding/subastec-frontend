import * as React from 'react';
import { SubastaType } from '../../../../../entities';
import { PF } from '../../../../utils';
import styled from 'styled-components';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';
import { Typography } from '@mui/material';

interface ICardImageProps {
	subasta: SubastaType;
}

const ContainerImg = styled.div`
	img {
		width: 100%;
		height: auto;
		min-height: 150px;
	}
`;

const ContainerPaqueteBid = styled.div<{ background: string }>`
	width: 100%;
	height: 150px;
	background: ${props => props.background};
	display: flex;
	justify-content: center;
	align-items: center;
	h3,
	p {
		color: #fff;
	}
`;

const CardImg: React.FC<ICardImageProps> = props => {
	const { subasta } = props;

	if (subasta.producto)
		return (
			<ContainerImg>
				<Img
					effect="blur"
					src={PF + subasta.fotoSubasta}
					alt={'Foto de: ' + subasta.titulo}
				/>
			</ContainerImg>
		);

	if (subasta.paqueteBid)
		return (
			<ContainerPaqueteBid background={subasta.paqueteBid.background}>
				<div>
					<Typography variant={'h3'} fontWeight={600}>
						{subasta.paqueteBid.cantidadBids} Bids
					</Typography>
					{subasta.paqueteBid.bonus ? (
						<p>Bonus: {subasta.paqueteBid.bonus} </p>
					) : null}
				</div>
			</ContainerPaqueteBid>
		);
};

export default CardImg;
