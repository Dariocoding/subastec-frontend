import { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { CgLogIn } from 'react-icons/cg';
import { handleError } from '../../utils';
import { Input, Button as ButtonSubmit } from '../../layout/common/Forms';
import { Button, Box, Typography } from '@mui/material';
import FormOlvidarPassword from './FormOlvidarPassword';
import { toast } from 'react-toastify';
import clienteAxios from '../../../config/axios';
import AuthButtonFacebookGoogle from '../../layout/common/Forms/Auth';
import { useAuthContext } from '../../../context/autenticacion/authState';
import { useModal } from '../../../context/modal/ModalState';
import { UserRegistroType } from './types';
import { FaLock, FaUser } from 'react-icons/fa';

const FormLogin = () => {
	const { cerrarModal } = useModal();
	const { usuarioAutenticado } = useAuthContext();
	const [forgetForm, setForgetForm] = useState(false);
	const toggleForgetForm = () => setForgetForm(!forgetForm);

	if (forgetForm) return <FormOlvidarPassword toggleForgetForm={toggleForgetForm} />;

	const INITIAL_VALUES: UserRegistroType = {
		username: '',
		password: '',
	};

	const handleSubmit = async (
		values: UserRegistroType,
		{ setSubmitting }: FormikHelpers<any>
	) => {
		if (values.username.trim() === '') {
			setSubmitting(false);
			return toast.error('Debe escribir su correo o nombre de usuario');
		}

		if (values.password.trim() === '') {
			setSubmitting(false);
			return toast.error('Debe escribir su contraseña');
		}

		try {
			const { data } = await clienteAxios.post('auth/local/signin', values);
			localStorage.setItem('at', data.access_token);
			localStorage.setItem('rt', data.refresh_token);
			toast.success('Inicio de sesión exitoso');
			await usuarioAutenticado();

			if (cerrarModal) cerrarModal();
		} catch (error) {
			handleError(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
			<Form>
				<Box
					sx={{
						background: 'linear-gradient(to right top, #1c489e, #075cac, #006fb7, #2e94c8, #9edae5)',
						borderRadius: '10px',
						textAlign: 'center',
						marginBottom: '10px',
					}}
				>
					<img
						src="/tienda.png"
						width={'125px'}
						style={{
							marginTop: '5px',
							marginBottom: '5px',
						}}
						alt="Tienda Subastec png"
					/>
				</Box>

				<Typography
					variant={'h6'}
					align={'center'}
					marginBottom={2}
					color={'#1976d2'}
					fontWeight={600}
				>
					INICIAR SESIÓN
				</Typography>
				<Input
					label={'Nombre de Usuario o Correo'}
					name={'username'}
					Icon={FaUser}
				/>

				<Input label={'Contraseña'} name={'password'} Icon={FaLock} />

				<AuthButtonFacebookGoogle
					textGoogle={'Inicia Sesión con Google'}
					textFacebook={'Inicia Sesión con Facebook'}
					cerrarModal={cerrarModal}
				/>

				<ButtonSubmit>
					Iniciar Sesión <CgLogIn />
				</ButtonSubmit>

				<Box display={'flex'} justifyContent={'center'} marginTop={1}>
					<Button onClick={toggleForgetForm}>
						¿Has olvidado la contraseña?
					</Button>
				</Box>
			</Form>
		</Formik>
	);
};

export default FormLogin;
