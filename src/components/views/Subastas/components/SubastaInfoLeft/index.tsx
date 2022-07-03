import DescripcionSubasta from './DescripcionSubasta';
import SliderProducto from './SliderProducto';
import * as React from 'react';
import { SubastaType } from '../../../../../entities';

interface ISubastaInfoLeftProps {
	subasta: SubastaType;
}

const SubastaInfoLeft: React.FunctionComponent<ISubastaInfoLeftProps> = props => (
	<React.Fragment>
		<SliderProducto subasta={props.subasta} />
		<DescripcionSubasta subasta={props.subasta} />
	</React.Fragment>
);

export default SubastaInfoLeft;
