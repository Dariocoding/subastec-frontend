import ContainerSection1 from '../../layout/common/ContainerSection1';
import styled from 'styled-components';
import CardsVistas from '../Home/components/CardsVistas';
import { Container, Grid } from '@mui/material';
import SubastaInfoLeft from './components/SubastaInfoLeft';
import SubastaInfoRight from './components/SubastaInfoRight';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import { PujaType, SubastaType } from '../../../entities';
import Loader from '../../../context/loaderpage/Loader';
import clienteAxios from '../../../config/axios';
import NotFound from '../NotFound';

const ContainerMu = styled(Container)`
	margin-top: 75px;
	@media (max-width: 900px) {
		margin-top: 30px;
	}
`;

const Subastas: React.FunctionComponent = () => {
	const { idsubasta } = useParams();
	const [subasta, setSubasta] = React.useState<SubastaType>();
	const [pujas, setPujas] = React.useState<PujaType[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const urlPujas = `puja?subastaid=${idsubasta}&take=10`;
				const urlSubastas = `subastas/${idsubasta}`;

				const [reqPujas, reqSubasta] = await Promise.all([
					clienteAxios.get(urlPujas),
					clienteAxios.get(urlSubastas),
				]);

				setPujas(reqPujas.data);
				setSubasta(reqSubasta.data);
				setIsLoading(false);
			} catch (error) {
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, []);

	if (isLoading) return <Loader show={true} />;

	if (!subasta) return <NotFound />;

	return (
		<ContainerSection1>
			<ContainerMu maxWidth="xl">
				<Grid marginBottom={8} container spacing={8}>
					<Grid item marginTop={4} xs={12} md={6}>
						<SubastaInfoLeft subasta={subasta} />
					</Grid>
					<Grid item marginTop={4} xs={12} md={6}>
						<SubastaInfoRight
							subasta={subasta}
							pujas={pujas}
							setSubasta={setSubasta}
							setPujas={setPujas}
						/>
					</Grid>
				</Grid>
				<CardsVistas />
			</ContainerMu>
		</ContainerSection1>
	);
};

export default Subastas;
