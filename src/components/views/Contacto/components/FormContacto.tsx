import { AiTwotoneMail } from 'react-icons/ai';
import { Formik, Form, FormikHelpers } from 'formik';
import { Card, CardContent, Typography } from '@mui/material';
import { handleError } from '../../../utils';
import { Input, Textarea, Button } from '../../../layout/common/Forms';
import clienteAxios from '../../../../config/axios';
import { toast } from 'react-toastify';
import { ContactoType } from '../../../../entities';
import validarMensaje from '../validations/validarMensaje';

const FormContacto = () => {
	const INITIAL_VALUES: ContactoType = {
		nombre: '',
		telefono: '',
		email: '',
		mensaje: '',
	};

	const sendMensaje = async (values: ContactoType, actions: FormikHelpers<any>) => {
		try {
			const request = await clienteAxios.post('/contactos', values);
			toast.success(request.data.msg);
			actions.resetForm();
		} catch (e) {
			handleError(e);
		}
	};

	return (
		<Card variant="outlined" style={{ borderRadius: '20px', padding: '5px' }}>
			<CardContent>
				<Formik
					onSubmit={sendMensaje}
					validate={validarMensaje}
					initialValues={INITIAL_VALUES}
				>
					<Form>
						<Typography
							variant="h6"
							textAlign={'center'}
							mb={2}
						>
							Llena el siguiente formulario para
							contactarnos
						</Typography>

						<Input
							label={'Nombre'}
							name="nombre"
							placeholder={'Ingrese su nombre'}
						/>

						<Input
							label={'Teléfono'}
							name="telefono"
							placeholder={
								'Ingrese su Número de teléfono'
							}
						/>

						<Input
							label={'Correo'}
							name="email"
							placeholder={'Ingrese su Correo'}
						/>

						<Textarea
							label={'Mensaje'}
							placeholder={'Ingrese su mensaje'}
							name={'mensaje'}
						/>

						<Button>
							Enviar Mensaje{' '}
							<AiTwotoneMail
								style={{ marginLeft: '5px' }}
							/>
						</Button>
					</Form>
				</Formik>
			</CardContent>
		</Card>
	);
};

export default FormContacto;
