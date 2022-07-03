import { Suspense, lazy, Fragment, useEffect } from 'react';
import GlobalStyle from './components/layout/GlobalStyles';
import Header from './components/layout/app/Header/Header';
import Footer from './components/layout/app/Footer/Footer';
import Loader from './context/loaderpage/Loader';
import { ToastContainer } from 'react-toastify';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useAuthContext } from './context/autenticacion/authState';
import PrivRoute from './routes/PrivRoute';
import SubastasGanadas from './components/views/SubastasGanadas';

const Home = lazy(() => import('./components/views/Home/Home'));
const Contacto = lazy(() => import('./components/views/Contacto/Contacto'));
const Ayuda = lazy(() => import('./components/views/Ayuda/Ayuda'));
const Dashboard = lazy(() => import('./components/views/Dashboard/Dashboard'));
const NotFound = lazy(() => import('./components/views/NotFound'));
const Subastas = lazy(() => import('./components/views/Subastas'));
const RegistroInvitacion = lazy(() => import('./components/views/auth/RegistroInvitacion'));

function App() {
	const { usuarioAutenticado } = useAuthContext();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [location.pathname]);

	useEffect(() => {
		if (window.location.hash) {
			const el = document.querySelector(window.location.hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [window.location.hash]);

	useEffect(() => {
		usuarioAutenticado();
	}, []);

	return (
		<Fragment>
			<Header />
			<GlobalStyle />
			<ToastContainer position="bottom-left" theme="colored" />
			<Suspense fallback={<Loader show={true} />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacto" element={<Contacto />} />

					<Route path="/ayuda" element={<Ayuda />} />

					<Route
						path="/dashboard"
						element={<PrivRoute component={Dashboard} />}
					/>

					<Route
						path="/registro-invitacion/:idencrypteduser"
						element={<RegistroInvitacion />}
					/>

					<Route
						path="/subastas-ganadas"
						element={<SubastasGanadas />}
					/>

					<Route
						path="/subastas/:idsubasta/:rutasubasta"
						element={<Subastas />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>

			<Footer />
		</Fragment>
	);
}

export default App;
