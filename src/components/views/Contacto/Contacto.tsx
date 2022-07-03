import ContainerSection1 from '../../layout/common/ContainerSection1';
import { Grid, Container, Typography } from '@mui/material';
import FormContacto from './components/FormContacto';
const Contacto = () => (
	<ContainerSection1 style={{ paddingTop: '100px' }}>
		<Container maxWidth="lg">
			<Grid container>
				<Grid item sm={12} md={6}>
					<Typography
						textAlign={'center'}
						color={'white'}
						variant="h2"
						display={'flex'}
						height={'100%'}
						alignItems={'center'}
						justifyContent={'start'}
						marginBottom={3}
						fontWeight={600}
					>
						Contacto
					</Typography>
				</Grid>
				<Grid item sm={12} md={6}>
					<FormContacto />
				</Grid>
			</Grid>
		</Container>
	</ContainerSection1>
);

export default Contacto;
