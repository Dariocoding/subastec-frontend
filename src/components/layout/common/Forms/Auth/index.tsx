import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';
import styled from 'styled-components';
const Container = styled.div`
	margin-bottom: 20px;
`;

interface IAuthButtonFGProps {
	textGoogle: string;
	textFacebook: string;
	cerrarModal?(): void;
}

const AuthButtonFacebookGoogle: React.FunctionComponent<IAuthButtonFGProps> = ({
	textGoogle,
	textFacebook,
	cerrarModal,
}) => (
	<Container>
		<GoogleButton text={textGoogle} closeModal={cerrarModal} />
		<FacebookButton text={textFacebook} closeModal={cerrarModal} />
	</Container>
);

export default AuthButtonFacebookGoogle;
