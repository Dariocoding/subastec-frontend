import styled from 'styled-components';
import TabsCategories from '../components/TabsCategories';
import { Container as ContainerMu } from '@mui/material';
const Container = styled(ContainerMu)`
	margin-bottom: 40px;
`;

const HomeSection2 = () => (
	<Container>
		<TabsCategories />
	</Container>
);

export default HomeSection2;
