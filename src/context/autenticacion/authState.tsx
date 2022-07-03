import AuthContext from './authContext';
import AuthReducer from './authReducer';
import * as React from 'react';

import clienteAxios from '../../config/axios';
import axios from 'axios';
import tokenAuth from '../../config/token';

import { OBTENER_USUARIO, LOGIN_ERROR, CERRAR_SESION, SET_USUARIO } from '../types';
import { AuthInterface, initialValueStateAuth } from './interfaces';
import { UserType } from '../../entities';

interface IAuthStateProps {
	children: React.ReactNode;
}

const AuthState: React.FC<IAuthStateProps> = props => {
	const [askingIsAuthenticated, setAskingIsAuthenticated] = React.useState(false);
	const { REACT_APP_BACKEND_URL } = process.env;

	const [state, dispatch] = React.useReducer(AuthReducer, initialValueStateAuth);

	function handleErrorAuth(mensaje?: string) {
		dispatch({
			type: LOGIN_ERROR,
			payload: mensaje,
		});
	}

	// Retorna el usuario autenticado
	const usuarioAutenticado = async () => {
		if (askingIsAuthenticated) return;

		// auth Token
		const at = localStorage.getItem('at');
		const rt = localStorage.getItem('rt');
		if (at) tokenAuth(at);
		// Refresh token

		try {
			if (!rt) return handleErrorAuth();

			setAskingIsAuthenticated(true);
			const urlRefresh = REACT_APP_BACKEND_URL + '/auth/refresh';
			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${rt}`,
			};

			const { data } = await axios.get(urlRefresh, {
				headers,
			});

			if (data.user.status !== 1)
				return handleErrorAuth(
					'Tu cuenta ha sido inactiva temporalmente, comunícate con el soporte'
				);

			const { user, access_token, refresh_token } = data;
			const payload = { usuario: user, at: access_token, rt: refresh_token };
			dispatch({ type: OBTENER_USUARIO, payload });
			localStorage.setItem('at', data.access_token);
			localStorage.setItem('rt', data.refresh_token);
			tokenAuth(data.access_token);
		} catch (error) {
			handleErrorAuth();
		} finally {
			setAskingIsAuthenticated(false);
		}
	};

	// Cierra la sesión del usuario
	const cerrarSesion = async () => {
		localStorage.removeItem('at');
		localStorage.removeItem('rt');
		await clienteAxios.post('/auth/logout');
		dispatch({
			type: CERRAR_SESION,
			payload: 'Se ha cerrado la sesión',
		});
		tokenAuth(null);
	};

	const setUsuario = (usuario: UserType) => {
		dispatch({
			type: SET_USUARIO,
			payload: usuario,
		});
	};

	const valuesProvider: AuthInterface = {
		at: state.at,
		rt: state.rt,
		autenticado: state.autenticado,
		usuario: state.usuario,
		mensaje: state.mensaje,
		cargando: state.cargando,
		usuarioAutenticado,
		cerrarSesion,
		setUsuario,
	};

	return <AuthContext.Provider value={valuesProvider}>{props.children}</AuthContext.Provider>;
};

export default AuthState;

export const useAuthContext = (): AuthInterface => React.useContext(AuthContext);
