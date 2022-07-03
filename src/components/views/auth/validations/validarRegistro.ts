import { UserRegistroType } from '../types';

const validarRegistro = (values: UserRegistroType) => {
	let errores: UserRegistroType = {};

	if (values.username.trim() === '') {
		errores.username = 'Nombre de usuario no puede ir vacío';
	}

	if (values.nombres.trim() === '') {
		errores.nombres = 'El campo nombre no puede ir vacío';
	}

	if (values.apellidos.trim() === '') {
		errores.apellidos = 'El campo apellido no puede ir vacío';
	}

	if (values.email_user.trim() === '') {
		errores.email_user = 'El campo correo no puede ir vacío';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email_user.trim())) {
		errores.email_user = 'Correo no válido';
	}

	if (values.password.trim() === '') {
		errores.password = 'Tiene que escribir una contraseña';
	} else {
		if (values.password.trim() !== values.passwordConfirm.trim()) {
			errores.password = 'Las contraseñas no coinciden';
		}

		if (values.password.trim().length < 6) {
			errores.password = 'La contraseña debe ser mayor a 6 caractéres';
		}
	}

	return errores;
};

export default validarRegistro;
