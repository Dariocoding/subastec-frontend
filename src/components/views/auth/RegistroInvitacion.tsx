import { Card, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../config/axios';
import Loader from '../../../context/loaderpage/Loader';
import { UserType } from '../../../entities';
import ContainerSection1 from '../../layout/common/ContainerSection1';
import { Decrypt } from '../../utils';
import FormRegistroInvitacion from './FormRegistroInvitacion';

interface IRegistroInvitacionProps {}

const RegistroInvitacion: React.FunctionComponent<IRegistroInvitacionProps> = props => {
	const { idencrypteduser } = useParams();
	const [isLoading, setIsLoading] = React.useState(true);
	const [user, setUser] = React.useState<UserType>(null);

	React.useEffect(() => {
		async function askForUser() {
			const iduser = parseInt(Decrypt(idencrypteduser));
			if (!iduser) return setIsLoading(false);
			try {
				const req = await clienteAxios(`usuarios/${iduser}`);
				setUser(req.data);
			} catch (error) {
			} finally {
				setIsLoading(false);
			}
		}

		askForUser();
	}, []);

	if (isLoading) return <Loader show={true} />;

	return (
		<ContainerSection1>
			<Container maxWidth={'md'}>
				<Card
					variant={'outlined'}
					style={{
						borderRadius: '20px',
						padding: '5px',
						marginTop: '75px',
					}}
				>
					<CardContent>
						{user ? (
							<FormRegistroInvitacion user={user} />
						) : (
							<React.Fragment></React.Fragment>
						)}
					</CardContent>
				</Card>
			</Container>
		</ContainerSection1>
	);
};

export default RegistroInvitacion;
