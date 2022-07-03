import GoogleLogin, { GoogleLoginProps, GoogleLoginResponse } from 'react-google-login';
import CustomButtonGoogle from './CustomButtomGoogle';
import { GOOGLE_KEY_AUTH, handleError } from '../../../../../utils';
import clienteAxios from '../../../../../../config/axios';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../../../../context/autenticacion/authState';

interface IGoogleButton {
	text: string;
	closeModal?(): void;
	handleResponse?(e: GoogleLoginProps | GoogleLoginResponse): void;
}

const GoogleButton: React.FunctionComponent<IGoogleButton> = props => {
	const { text, closeModal, handleResponse } = props;
	const { usuarioAutenticado } = useAuthContext();

	const responseGoogle = async (googleResponse: GoogleLoginResponse) => {
		if (handleResponse) return handleResponse(googleResponse);
		try {
			const { data } = await clienteAxios.post(
				'auth/google/signin',
				googleResponse.profileObj
			);
			localStorage.setItem('at', data.access_token);
			localStorage.setItem('rt', data.refresh_token);
			toast.success('Has iniciado Sesión correctamente.');
			usuarioAutenticado();
			if (closeModal) closeModal();
		} catch (error) {
			handleError(error);
		}
	};

	return (
		<GoogleLogin
			clientId={GOOGLE_KEY_AUTH}
			autoLoad={false}
			cookiePolicy={'single_host_origin'}
			onSuccess={responseGoogle}
			render={renderProps => (
				<CustomButtonGoogle text={text} renderProps={renderProps} />
			)}
		/>
	);
};

export default GoogleButton;
