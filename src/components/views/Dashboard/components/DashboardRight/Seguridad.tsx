import { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import clienteAxios from '../../../../../config/axios';
import validarPasswordPerfil from '../../validations/validarPassword';
import { handleError } from '../../../../utils';
// COMPONENTS
import CustomButtonGoogle from '../../../../layout/common/Forms/Auth/GoogleButton/CustomButtomGoogle';
import CustomButtonFacebok from '../../../../layout/common/Forms/Auth/FacebookButton/CustomButtonFacebok';
import GoogleButton from '../../../../layout/common/Forms/Auth/GoogleButton';
import FacebookButton from '../../../../layout/common/Forms/Auth/FacebookButton';
import { Input, Button } from '../../../../layout/common/Forms';
import { Typography } from '@mui/material';
import Tile from '../../../../layout/common/Tile';
// HOOKS
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import { ChangePasswordType } from '../../../auth/types';
import { GoogleLoginResponse } from 'react-google-login';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

const Seguridad = () => {
	const [loading, setLoading] = useState(false);
	const { usuario, usuarioAutenticado } = useAuthContext();
	const INITIAL_VALUES = {
		password: '',
		passworConfig: '',
	};
	async function handleSubmit(values: ChangePasswordType, actions: FormikHelpers<any>) {
		try {
			const url = '/perfil/changePasswordPerfil';
			const { data } = await clienteAxios.put(url, values);
			toast.success(data.msg);
			actions.resetForm();
		} catch (e) {
			handleError(e);
		}
	}

	const desvincularGoogleFnt = {
		async onClick() {
			try {
				setLoading(true);
				const { data } = await clienteAxios.delete(
					'auth/google/desvincular'
				);
				toast.success(data.msg);
				usuarioAutenticado();
			} catch (error) {
				handleError(error);
			} finally {
				setLoading(false);
			}
		},
		disabled: loading,
	};

	const desvincularFacebookFnt = {
		async onClick() {
			try {
				setLoading(true);
				const { data } = await clienteAxios.delete(
					'auth/facebook/desvincular'
				);
				toast.success(data.msg);
				usuarioAutenticado();
			} catch (error) {
				handleError(error);
			} finally {
				setLoading(false);
			}
		},
		disabled: loading,
	};

	async function vincularGoogleFnt(googleResponse: GoogleLoginResponse) {
		try {
			const { data } = await clienteAxios.put(
				'auth/google/vincular',
				googleResponse.profileObj
			);
			toast.success(data.msg);
			usuarioAutenticado();
		} catch (error) {
			handleError(error);
		}
	}

	async function vincularFacebookFnt(res: ReactFacebookLoginInfo) {
		try {
			const { data } = await clienteAxios.put('auth/facebook/vincular', res);
			toast.success(data.msg);
			usuarioAutenticado();
		} catch (error) {
			handleError(error);
		}
	}

	return (
		<Tile>
			{usuario.googleID ? (
				<CustomButtonGoogle
					text={'Desvincular Google'}
					renderProps={desvincularGoogleFnt}
				/>
			) : (
				<GoogleButton
					text={'Vincular Google'}
					handleResponse={vincularGoogleFnt}
				/>
			)}

			{usuario.facebookID ? (
				<CustomButtonFacebok
					text={'Desvincular Facebook'}
					renderProps={desvincularFacebookFnt}
				/>
			) : (
				<FacebookButton
					text={'Vincular Google'}
					handleResponse={vincularFacebookFnt}
				/>
			)}

			<Formik
				initialValues={INITIAL_VALUES}
				onSubmit={handleSubmit}
				validate={validarPasswordPerfil}
			>
				<Form>
					<Typography marginY={4} variant="h5" textAlign={'center'}>
						Confirmar Contraseña <FaLock />
					</Typography>
					<Input
						type={'password'}
						label={'Contraseña'}
						name={'password'}
					/>
					<Input
						label={'Confirmar Contraseña'}
						type={'password'}
						name={'passwordConfirm'}
					/>

					<Button>
						Actualizar Contraseña{' '}
						<FaLock style={{ marginLeft: '5px' }} />
					</Button>
				</Form>
			</Formik>
		</Tile>
	);
};

export default Seguridad;
