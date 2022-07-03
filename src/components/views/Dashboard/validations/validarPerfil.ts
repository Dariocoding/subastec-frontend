import { UserType } from '../../../../entities';

const validarPerfil = (values: UserType) => {
	let errores: UserType = {};

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

	return errores;
};

export default validarPerfil;
