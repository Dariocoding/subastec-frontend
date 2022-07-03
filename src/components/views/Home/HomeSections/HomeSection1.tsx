import ContainerSection1 from '../../../layout/common/ContainerSection1';
import { Container, Grid } from '@mui/material';
// COMPONENTS
import Slider from '../components/slider/Slider';
import TextSlider from '../components/slider/TextSlider';

const HomeSection1 = () => (
	<ContainerSection1>
		<Container maxWidth="lg">
			<Grid container spacing={6}>
				<Grid item xs={12} md={6}>
					<TextSlider />
				</Grid>
				<Grid item xs={12} md={6}>
					<Slider />
				</Grid>
			</Grid>
		</Container>
	</ContainerSection1>
);

export default HomeSection1;
