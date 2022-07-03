import { AiTwotoneMail } from 'react-icons/ai';
import { Formik, Form, FormikHelpers } from 'formik';
import { Input, Button as ButtonSubmit } from '../../layout/common/Forms';
import { handleError } from '../../utils';
import { toast } from 'react-toastify';
import clienteAxios from '../../../config/axios';
import { Box, Button } from '@mui/material';
import { UserRegistroType } from './types';

interface IFormOlvidarPassword {
	toggleForgetForm(): void;
}

const FormOlvidarPassword: React.FunctionComponent<IFormOlvidarPassword> = props => {
	const INITIAL_VALUES: UserRegistroType = {
		username: '',
	};

	const handleSubmit = async (
		values: UserRegistroType,
		{ resetForm, setSubmitting }: FormikHelpers<UserRegistroType>
	) => {
		if (values.username.trim() === '') {
			return toast.error('El campo no puede ir vacio');
		}

		try {
			const url = '/usuarios/forgetPass';
			const response = await clienteAxios.put(url, { username: values.username });
			toast.success(response.data.msg);
			resetForm();
		} catch (error) {
			handleError(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
			<Form>
				<Input label={'Nombre de Usuario o Correo'} name={'username'} />

				<ButtonSubmit>
					Recuperar Contraseña{' '}
					<AiTwotoneMail style={{ marginLeft: '5px' }} />
				</ButtonSubmit>

				<Box display={'flex'} justifyContent={'center'} marginTop={1}>
					<Button onClick={props.toggleForgetForm}>
						Iniciar Sesión
					</Button>
				</Box>
			</Form>
		</Formik>
	);
};

export default FormOlvidarPassword;
