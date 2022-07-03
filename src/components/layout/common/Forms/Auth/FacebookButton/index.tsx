import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import CustomButtonFacebok from './CustomButtonFacebok';
import clienteAxios from '../../../../../../config/axios';
import { handleError, FACEBOOK_KEY_AUTH } from '../../../../../utils';
import { useAuthContext } from '../../../../../../context/autenticacion/authState';
import { toast } from 'react-toastify';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

interface IFacebookButton {
	text?: string;
	closeModal?(): void;
	handleResponse?(res: ReactFacebookLoginInfo): void;
}

const FacebookButton: React.FunctionComponent<IFacebookButton> = props => {
	const { text, closeModal, handleResponse } = props;
	const { usuarioAutenticado } = useAuthContext();

	const responseFacebook = async (response: ReactFacebookLoginInfo) => {
		if (handleResponse) return handleResponse(response);
		try {
			const { data } = await clienteAxios.post('auth/facebook/signin', response);
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
		<FacebookLogin
			appId={FACEBOOK_KEY_AUTH}
			autoLoad={false}
			callback={responseFacebook}
			render={renderProps => (
				<CustomButtonFacebok renderProps={renderProps} text={text} />
			)}
		/>
	);
};

export default FacebookButton;
