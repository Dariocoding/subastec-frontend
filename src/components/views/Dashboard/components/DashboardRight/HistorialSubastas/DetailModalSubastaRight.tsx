import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import HTMLReactParser from 'html-react-parser';
import { SubastaType } from '../../../../../../entities';

interface IDetailModalSubastaRightProps {
	subasta: SubastaType;
}

const DetailModalSubastaRight: React.FC<IDetailModalSubastaRightProps> = ({ subasta }) => {
	if (subasta.paqueteBid) return null;
	return (
		<Grid item lg={6}>
			{HTMLReactParser(subasta.producto.descripcion)}
		</Grid>
	);
};

export default DetailModalSubastaRight;
