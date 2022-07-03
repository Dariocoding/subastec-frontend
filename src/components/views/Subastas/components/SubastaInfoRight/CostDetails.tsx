import styled from 'styled-components';
import * as React from 'react';
import { SubastaType } from '../../../../../entities';
import moment from 'moment-timezone';
import { formatter } from '../../../../utils';

const Container = styled.div`
	padding: 20px 0px;
	margin-left: 54px;
	margin-right: 54px;

	.cost_item {
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3px 0px;
		span {
			margin-left: 5px;
		}
	}
`;

interface ICostDetailsProps {
	subasta: SubastaType;
}

const CostDetails: React.FunctionComponent<ICostDetailsProps> = props => {
	const { subasta } = props;

	const costoPuja = subasta.costopuja / 100;
	const costoUSDPuja = formatter.format(costoPuja);
	return (
		<Container>
			<div className="cost_item">
				<p>Costo de puja:</p>
				<span>{costoUSDPuja.replace('$', '')} USD</span>
			</div>
			<div className="cost_item">
				<p>Empiezo de puja:</p>
				<span>
					{moment(subasta.fechaInicio).format('D MMMM, YYYY H:m:s')}
				</span>
			</div>
			<div className="cost_item">
				<p>Final de puja:</p>
				<span>
					{moment(subasta.fechaFinalizacion).format(
						'D MMMM, YYYY H:m:s'
					)}
				</span>
			</div>
		</Container>
	);
};

export default CostDetails;
