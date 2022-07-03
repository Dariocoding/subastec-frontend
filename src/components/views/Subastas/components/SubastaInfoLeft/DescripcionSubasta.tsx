import styled from 'styled-components';
import * as React from 'react';
import { SubastaType } from '../../../../../entities';
import { Typography } from '@mui/material';
const Container = styled.div`
	margin-top: 40px;
	color: #fff;
	p {
		font-size: 17px;
		line-height: 20px;
		font-weight: 400;
		padding-top: 20px;
		word-spacing: 2px;
	}
	ul {
		list-style: circle;
	}
`;

interface IDescripcionSubastaProps {
	subasta: SubastaType;
}

const DescripcionSubasta: React.FC<IDescripcionSubastaProps> = ({ subasta }) => {
	const div = React.useRef<HTMLDivElement>();

	React.useEffect(() => {
		if (div.current) {
			div.current.innerHTML = subasta.producto.descripcion;
		}
	}, [div.current]);

	if (subasta.paqueteBid)
		return (
			<Container>
				<Typography fontWeight={400} marginTop={1} letterSpacing={2}>
					Empieza a pujar por este paquete de bids de:{' '}
					{subasta.paqueteBid.cantidadBids}.{' '}
					{subasta.paqueteBid.bonus ? (
						<>
							Aprovecha también para llevarte un bonus de:{' '}
							{subasta.paqueteBid.bonus} Bids
						</>
					) : null}
				</Typography>
			</Container>
		);

	if (!subasta?.producto?.descripcion) return null;
	return <Container ref={div}>{subasta.producto.descripcion}</Container>;
};

export default DescripcionSubasta;
