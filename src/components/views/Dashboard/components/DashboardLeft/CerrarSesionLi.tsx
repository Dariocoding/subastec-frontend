import { useAuthContext } from '../../../../../context/autenticacion/authState';
import Swal from 'sweetalert2';
const CerrarSesionLi = () => {
	const { cerrarSesion } = useAuthContext();

	function handleCerrarSesion() {
		Swal.fire({
			title: '¿Quieres cerrar la sesión?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#111',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, claro',
			reverseButtons: true,
		}).then(result => {
			if (result.isConfirmed) cerrarSesion();
		});
	}

	return <li onClick={handleCerrarSesion}>Cerrar Sesión</li>;
};

export default CerrarSesionLi;
