import { ContactoType } from '../../../../entities';

const validarMensaje = (values: ContactoType) => {
	let errores: ContactoType = {};

	if (values.nombre.trim() === '') {
		errores.nombre = 'El campo nombre no puede ir vacío';
	}

	if (values.telefono.trim() === '') {
		errores.telefono = 'El campo teléfono no puede ir vacío';
	}

	if (values.email.trim() === '') {
		errores.email = 'El campo nombre no puede ir vacío';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())) {
		errores.email = 'Email no válido';
	}

	if (values.mensaje.trim() === '') {
		errores.mensaje = 'Debe escribir un mensaje';
	}

	return errores;
};

export default validarMensaje;
