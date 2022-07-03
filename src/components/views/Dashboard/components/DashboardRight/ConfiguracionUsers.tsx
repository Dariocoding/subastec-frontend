import { Formik, Form } from 'formik';
import { FaUserCircle, FaCheckCircle } from 'react-icons/fa';
import { Input, Button } from '../../../../layout/common/Forms';
import { Typography } from '@mui/material';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import validarPerfil from '../../validations/validarPerfil';
import Tile from '../../../../layout/common/Tile';
import { handleError, PF } from '../../../../utils';
import { UserType } from '../../../../../entities/user.entity';
import clienteAxios from '../../../../../config/axios';
import { toast } from 'react-toastify';
import useDropzone from '../../../../../hooks/useDropzone';
import Compressor from 'compressorjs';
import * as React from 'react';
import { useLoader } from '../../../../../context/loaderpage/LoaderPageState';
import { File } from '../../../../../extensions';

const ConfiguracionUser: React.FunctionComponent = () => {
	const { usuario, usuarioAutenticado } = useAuthContext();
	const { setLoader } = useLoader();
	const { DropzoneContenedor, setFiles } = useDropzone({
		action: 'single',
		labelText: '¡Arrastra y suelta para actualizar su foto de perfil automáticamente!',
		onUpload(file) {
			if (Array.isArray(file)) return;
			new Compressor(file, {
				quality: 0.8,
				maxWidth: 500,
				async success(file: File) {
					try {
						setLoader(true, 'Subiendo foto de Perfil');
						let formData = new FormData();
						formData.append('file', file, file.name);
						const url = '/perfil/changeFotoPerfil';
						const response = await clienteAxios.put(
							url,
							formData,
							{
								headers: {
									'content-type':
										'multipart/form-data', // do not forget this
								},
							}
						);
						file.id = 1;
						file.preview = PF + response.data.image_profile;

						setFiles([file]);
						toast.success(response.data.msg);
						await usuarioAutenticado();
					} catch (error) {
						handleError(error);
					} finally {
						setLoader(false);
					}
				},
				error(error) {
					console.log(error);
				},
			});
		},
	});

	if (!Object.keys(usuario).length) return null;

	const INITIAL_VALUES = {
		username: usuario.username,
		email_user: usuario.email_user,
		nombres: usuario.nombres,
		apellidos: usuario.apellidos,
		telefono: usuario.telefono,
	};

	const handleSubmit = async (values: UserType) => {
		try {
			if (usuario.username !== '') {
				values = {
					email_user: values.email_user,
					nombres: values.nombres,
					apellidos: values.apellidos,
					telefono: values.telefono,
				};
			}
			const { data } = await clienteAxios.put('perfil/putPerfil', values);
			toast.success(data.msg);
			usuarioAutenticado();
		} catch (error) {
			handleError(error);
		}
	};

	return (
		<React.Fragment>
			<Tile>
				<Formik
					initialValues={INITIAL_VALUES}
					onSubmit={handleSubmit}
					validate={validarPerfil}
				>
					<Form>
						<Typography
							marginY={4}
							variant="h5"
							textAlign={'center'}
						>
							Datos Personales <FaUserCircle />
						</Typography>
						<Input
							disabled={usuario.username !== ''}
							label={'Nombre de Usuario'}
							name={'username'}
						/>
						<Input label={'Correo'} name={'email_user'} />
						<Input label={'Nombres'} name={'nombres'} />
						<Input label={'Apellidos'} name={'apellidos'} />
						<Input label={'Teléfono'} name={'telefono'} />

						<Button>
							Actualizar Perfil{' '}
							<FaCheckCircle
								style={{ marginLeft: '5px' }}
							/>
						</Button>
					</Form>
				</Formik>
			</Tile>

			<Tile>{DropzoneContenedor}</Tile>
		</React.Fragment>
	);
};

export default ConfiguracionUser;
