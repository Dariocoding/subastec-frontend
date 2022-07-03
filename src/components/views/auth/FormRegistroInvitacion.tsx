import { Formik, Form } from 'formik';
import { validarFotoPerfil } from '../../utils/validarFotoPerfil';
import { Stack, Avatar, Typography, Grid, Box } from '@mui/material';
import { CgLogIn } from 'react-icons/cg';
import { Input, Button as ButtonSubmit } from '../../layout/common/Forms';
import * as React from 'react';
import { UserType } from '../../../entities';
import validarRegistro from './validations/validarRegistro';
import clienteAxios from '../../../config/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { handleError, RECAPTCHAKEY } from '../../utils';
import { useAuthContext } from '../../../context/autenticacion/authState';
import ReCaptcha, { ReCAPTCHA } from 'react-google-recaptcha';

interface IFormRegistroInvitacionProps {
	user: UserType;
}

const FormRegistroInvitacion: React.FunctionComponent<IFormRegistroInvitacionProps> = props => {
	const navigate = useNavigate();
	const { usuarioAutenticado } = useAuthContext();
	const captcha = React.useRef<ReCAPTCHA>(null);
	const [captchaValido, setCaptchaValido] = React.useState(false);
	const [captchaTouched, setCaptchaTouched] = React.useState(false);
	const { user } = props;
	const handleSubmit = async (values: any) => {
		try {
			setCaptchaTouched(true);
			if (!captchaValido) return;
			const url = 'auth/local/singup/invitado';
			const { data } = await clienteAxios.post(url, values);
			localStorage.setItem('at', data.access_token);
			localStorage.setItem('rt', data.refresh_token);
			toast.success('Registro exitoso');
			await usuarioAutenticado();
			navigate('/');
		} catch (e) {
			handleError(e);
		}
	};

	const onChangeCaptcha = () => {
		if (captcha.current.getValue()) {
			setCaptchaValido(true);
		}
	};
	return (
		<Formik
			initialValues={{
				useridReferenced: user.iduser,
				username: '',
				nombres: '',
				apellidos: '',
				email_user: '',
				telefono: '',
				password: '',
			}}
			onSubmit={handleSubmit}
			validate={validarRegistro}
		>
			<Form>
				<Typography variant={'h4'} align={'center'} marginBottom={2}>
					Bienvenido a Subastec
				</Typography>
				<Stack
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
				>
					<Avatar
						src={validarFotoPerfil(user)}
						alt={
							'Foto de perfil de: ' +
							user.nombres +
							' ' +
							user.apellidos
						}
						sx={{
							display: 'block',
							margin: 'auto',
							width: '60px',
							height: '60px',
						}}
					/>

					<Typography variant={'h6'} align={'center'} marginTop={1}>
						Usted ha sido invitado por el siguiente usuario:{' '}
						{user.nombres} {user.apellidos}
					</Typography>
					{user.username ? (
						<Typography
							variant={'h6'}
							align={'center'}
							marginBottom={1}
							color={'#9b9b9b'}
						>
							{user.username}
						</Typography>
					) : null}
				</Stack>
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
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Apellidos'}
							name={'apellidos'}
							placeholder={'Ingrese sus apellidos'}
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Correo'}
							name={'email_user'}
							placeholder={'Ingrese su correo'}
						/>
					</Grid>

					<Grid xs={12} item lg={6}>
						<Input
							label={'Teléfono'}
							name={'telefono'}
							placeholder={'Ingrese su telefono'}
						/>
					</Grid>

					<Grid xs={12} item>
						<Input
							label={'Contraseña'}
							type={'password'}
							name={'password'}
						/>
					</Grid>

					<Grid xs={12} item>
						<Input
							label={'Confirmar Contraseña'}
							type={'password'}
							name={'passwordConfirm'}
						/>
					</Grid>

					<Grid xs={12} item>
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
									Por favor, verifique si no
									es un robot
								</Typography>
							)}
							<ReCaptcha
								ref={captcha}
								sitekey={RECAPTCHAKEY}
								onChange={onChangeCaptcha}
								onClick={() =>
									setCaptchaTouched(true)
								}
								style={{ margin: 'auto' }}
							/>
						</Box>
					</Grid>

					<Grid xs={12} item>
						<ButtonSubmit>
							Registrarse <CgLogIn />
						</ButtonSubmit>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default FormRegistroInvitacion;
