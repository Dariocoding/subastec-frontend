import * as React from 'react';
import { handleError, RECAPTCHAKEY } from '../../utils';
import { CgLogIn } from 'react-icons/cg';
import { Formik, Form, FormikHelpers } from 'formik';
import { Input, Button as ButtonSubmit } from '../../layout/common/Forms';
import { Grid, Typography } from '@mui/material';
import validarRegistro from './validations/validarRegistro';
import clienteAxios from '../../../config/axios';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../context/autenticacion/authState';
import AuthButtonFacebookGoogle from '../../layout/common/Forms/Auth';
import { UserType } from '../../../entities';
import { useModal } from '../../../context/modal/ModalState';
import { Box } from '@mui/system';
import ReCaptcha, { ReCAPTCHA } from 'react-google-recaptcha';
import { FaMailBulk, FaUserCircle, FaLock } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';

const FormRegistro = () => {
	const { usuarioAutenticado } = useAuthContext();
	const { cerrarModal } = useModal();
	const [captchaValido, setCaptchaValido] = React.useState(false);
	const [captchaTouched, setCaptchaTouched] = React.useState(false);
	const captcha = React.useRef<ReCAPTCHA>(null);
	const INITIAL_VALUES: UserType = {
		username: '',
		nombres: '',
		apellidos: '',
		email_user: '',
		password: '',
	};

	async function handleSubmit(values: UserType, actions: FormikHelpers<any>) {
		try {
			setCaptchaTouched(true);
			if (!captchaValido) return;
			const { data } = await clienteAxios.post('/auth/local/signup', values);
			localStorage.setItem('at', data.access_token);
			localStorage.setItem('rt', data.refresh_token);
			toast.success('Registro exitoso');
			actions.resetForm();
			await usuarioAutenticado();
			cerrarModal();
		} catch (error) {
			handleError(error);
		}
	}

	const onChangeCaptcha = () => {
		if (captcha.current.getValue()) {
			setCaptchaValido(true);
		}
	};

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			validate={validarRegistro}
			onSubmit={handleSubmit}
		>
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
				<Grid container columnSpacing={2}>
					<Grid xs={12} item lg={8}>
						<Input
							label={'Nombre de usuario'}
							name={'username'}
							placeholder={'Ingrese el nombre de usuario'}
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Nombres'}
							name={'nombres'}
							placeholder={'Ingrese su nombre'}
							Icon={FaUserCircle}
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Apellidos'}
							name={'apellidos'}
							placeholder={'Ingrese sus apellidos'}
							Icon={FaUserCircle}
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Correo'}
							name={'email_user'}
							placeholder={'Ingrese su correo'}
							Icon={FaMailBulk}
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Teléfono'}
							name={'telefono'}
							placeholder={'Ingrese su teléfono'}
							Icon={BsFillPhoneFill}
						/>
					</Grid>

					<Grid xs={12} item>
						<Input
							label={'Contraseña'}
							type={'password'}
							name={'password'}
							Icon={FaLock}
						/>
					</Grid>

					<Grid xs={12} item>
						<Input
							label={'Confirmar Contraseña'}
							type={'password'}
							name={'passwordConfirm'}
							Icon={FaLock}
						/>
					</Grid>
				</Grid>

				<AuthButtonFacebookGoogle
					textGoogle={'Regístrate con Google'}
					textFacebook={'Regístrate con Facebook'}
					cerrarModal={cerrarModal}
				/>

				<Box
					display={'flex'}
					justifyContent={'center'}
					marginBottom={2}
					flexDirection={'column'}
				>
					{captchaTouched && !captchaValido && (
						<Typography
							color={'#dc3545'}
							align={'center'}
							marginBottom={1}
							fontWeight={600}
						>
							Por favor, verifique si no es un robot
						</Typography>
					)}
					<ReCaptcha
						ref={captcha}
						sitekey={RECAPTCHAKEY}
						onChange={onChangeCaptcha}
						onClick={() => setCaptchaTouched(true)}
						style={{ margin: 'auto' }}
					/>
				</Box>

				<ButtonSubmit>
					Registrarse <CgLogIn />
				</ButtonSubmit>
			</Form>
		</Formik>
	);
};

export default FormRegistro;
