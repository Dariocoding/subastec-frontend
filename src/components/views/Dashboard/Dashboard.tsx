import { useState } from 'react';
import styled from 'styled-components';
import ContainerSection1 from '../../layout/common/ContainerSection1';
import { Grid, Container as ContainerMu } from '@mui/material';
import DashboardLeft from './components/DashboardLeft';
import DashboardRight from './components/DashboardRight';
import dataOptions from './components/DashboardLeft/dataOptions';

const Container = styled(ContainerMu)`
	margin-top: 90px;

	@media (max-width: 700px) {
		margin-top: 60px;
	}
`;
const Dashboard = () => {
	const [optionActual, setOptionActual] = useState(dataOptions[0].name);

	return (
		<ContainerSection1 noBackground={true}>
			<Container maxWidth={'xl'}>
				<Grid container spacing={8}>
					<Grid item xs={12} md={4}>
						<DashboardLeft setOptionActual={setOptionActual} />
					</Grid>
					<Grid item xs={12} md={8}>
						<DashboardRight optionActual={optionActual} />
					</Grid>
				</Grid>
			</Container>
		</ContainerSection1>
	);
};

export default Dashboard;
