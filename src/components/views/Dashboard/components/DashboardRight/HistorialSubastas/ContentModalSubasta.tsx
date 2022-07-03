import { Grid } from '@mui/material';
import * as React from 'react';
import { SubastaType } from '../../../../../../entities';
import DetailModalSubastaLeft from './DetailModalSubastaLeft';
import DetailModalSubastaRight from './DetailModalSubastaRight';

interface IContentModalSubastaProps {
	subasta: SubastaType;
}

const ContentModalSubasta: React.FunctionComponent<IContentModalSubastaProps> = props => (
	<Grid spacing={4} container>
		<DetailModalSubastaLeft subasta={props.subasta} />

		<DetailModalSubastaRight subasta={props.subasta} />
	</Grid>
);

export default ContentModalSubasta;
