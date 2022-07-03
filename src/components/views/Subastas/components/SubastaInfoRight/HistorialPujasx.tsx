import styled from 'styled-components';
import * as React from 'react';
import { PujaType } from '../../../../../entities';
import { formatter } from '../../../../utils';

const Container = styled.div`
	padding-top: 25px;
	padding-bottom: 50px;
	margin-left: 54px;
	margin-right: 54px;

	.nubmer_de_details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #fff;
		padding-top: 7px;

		p {
			font-size: 18px;
			line-height: 26px;
			font-weight: 400;
			color: #fff;
			padding: 5px 0px;
			display: inline-block;
		}
	}
`;

interface IHistorialPujasProps {
	pujas: PujaType[];
}

const HistorialPujas: React.FC<IHistorialPujasProps> = props => {
	const { pujas } = props;
	if (!pujas.length) return null;
	return (
		<Container>
			{pujas.map(p => (
				<PujaContainer puja={p} key={p.idpuja} />
			))}
		</Container>
	);
};

export default HistorialPujas;

interface IPujaContainerProps {
	puja: PujaType;
}

const PujaContainer: React.FC<IPujaContainerProps> = ({ puja }) => {
	const formula = (puja.costopuja / 100) * puja.cantidadBids;
	const price = formatter.format(formula ? formula : 0);
	return (
		<div className="nubmer_de_details">
			<p>
				{puja.user.nombres} {puja.user.apellidos ? puja.user.apellidos : ''}
			</p>
			<p>{price.replace('$', '')} USD</p>
		</div>
	);
};
