import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './extensions';

import reportWebVitals from './reportWebVitals';
import ConfigState from './context/configuracion/ConfigState';
import LoaderState from './context/loaderpage/LoaderPageState';
import AuthState from './context/autenticacion/authState';
import ModalState from './context/modal/ModalState';
import tokenAuth from './config/token';
import SocketState from './context/socket/SocketContext';
import SecurityPageState from './context/securitypage/SecurityPageState';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './assets/css/normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import AutoPujasState from './context/autopujas/AutoPujasContext';
import moment from 'moment-timezone';

const token = localStorage.getItem('at');

if (token) tokenAuth(token);

const root = ReactDOM.createRoot(document.getElementById('root'));
moment.tz.setDefault('America/guayaquil');

root.render(
	<BrowserRouter>
		<AuthState>
			<ModalState>
				<LoaderState>
					<ConfigState>
						<SecurityPageState>
							<SocketState>
								<AutoPujasState>
									<App />
								</AutoPujasState>
							</SocketState>
						</SecurityPageState>
					</ConfigState>
				</LoaderState>
			</ModalState>
		</AuthState>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
