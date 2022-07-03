import { FaStar } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import {
	Card,
	CardDetails,
	ProductNameDetails,
	ProductSize,
	Star,
	TextSoon,
	ButtonGroup,
} from './StylesCard';
import * as React from 'react';
import { Grid, Button, LinearProgress, Box } from '@mui/material';
import { FavoritosType, SubastaType } from '../../../../../entities';
import { AbrirModalAuth, formatter, SocketTypes, STATE_MODAL_LOGIN } from '../../../../utils';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import clienteAxios from '../../../../../config/axios';
import { toast } from 'react-toastify';
import moment from 'moment-timezone';
import CardTemporizador from './CardTemporizador';
import CardImg from './CardImg';
import { useNavigate } from 'react-router-dom';
import { crearURLAmigable } from '../../../../utils/urlAmigable';
import { useSocket } from '../../../../../context/socket/SocketContext';
import { ReqPujaType } from '../../../Subastas/components/SubastaInfoRight';

interface ICardTabProps {
	subasta: SubastaType;
	favoritos: FavoritosType[];
	setSubasta(subasta: SubastaType): void;
	setFavoritos(favoritos: FavoritosType[]): void;
}
const CardTab: React.FunctionComponent<ICardTabProps> = props => {
	const { subasta, favoritos, setFavoritos, setSubasta } = props;
	const fechaInicio = moment(subasta.fechaInicio).toDate();
	const timeActual = moment().toDate();
	const { Socket } = useSocket();
	const { autenticado } = useAuthContext();
	const [secondsTimer, setSecondsTimer] = React.useState(10);
	const [soon, setSoon] = React.useState(fechaInicio.greaterThan(timeActual));
	const [hanPujado, setHanPujado] = React.useState(false);

	const isFavorito = favoritos.find(f => f.subastaid === subasta.idsubasta) ? true : false;
	const { openModalAuth } = AbrirModalAuth(STATE_MODAL_LOGIN);
	const navigate = useNavigate();

	React.useEffect(() => {
		Socket.on(SocketTypes.GETPUJASUBASTA(subasta.idsubasta), (body: ReqPujaType) => {
			setSubasta({
				preciosubasta: body.preciosubasta,
				idsubasta: subasta.idsubasta,
			});
			setSecondsTimer(10);
			setHanPujado(true);
			setTimeout(() => setHanPujado(false), 500);
		});
	}, [subasta, secondsTimer, Socket]);

	const valorProducto = formatter.format(
		subasta.producto?.precio ? subasta.producto.precio : 0
	);

	const handleClickFavorito = async () => {
		if (isFavorito) {
			const id = toast.loading('Eliminado de Favoritos...');
			const url = `favoritos/${subasta.idsubasta}`;
			const req = await clienteAxios.delete(url);

			toast.update(id, {
				render: req.data.msg,
				type: 'success',
				isLoading: false,
				autoClose: 5000,
			});
			setFavoritos(favoritos.filter(f => f.subastaid !== subasta.idsubasta));
		} else {
			const id = toast.loading('Agregando de Favoritos...');
			const data = { subastaid: subasta.idsubasta };
			const req = await clienteAxios.post('favoritos', data);
			toast.update(id, {
				render: req.data.msg,
				type: 'success',
				isLoading: false,
				autoClose: 5000,
			});
			setFavoritos([...favoritos, { subastaid: subasta.idsubasta }]);
		}
	};

	const handleClickPujar = async () => {
		if (!autenticado) return openModalAuth();
		navigate(`/subastas/${subasta.idsubasta}/${crearURLAmigable(subasta.titulo)}`);
	};

	return (
		<Grid item lg={4} md={6} xs={12} sm={6}>
			<Card hanPujado={hanPujado}>
				<Box position={'relative'}>
					<CardImg subasta={subasta} />

					{soon && (
						<ProductSize position={'top'}>
							<p>{subasta.producto.marca}</p>
						</ProductSize>
					)}

					{soon && (
						<ProductSize
							soon={soon}
							position={soon ? false : 'top'}
						>
							<p>
								<AiOutlineClockCircle size={20} />
							</p>
						</ProductSize>
					)}

					{!soon && subasta.producto?.marca && (
						<ProductSize
							soon={soon}
							position={soon ? false : 'top'}
						>
							<p>{subasta.producto.marca}</p>
						</ProductSize>
					)}

					{autenticado ? (
						<Star
							isFavorito={isFavorito}
							onClick={handleClickFavorito}
						>
							<FaStar />
						</Star>
					) : null}
				</Box>

				<CardDetails hanPujado={hanPujado}>
					<ProductNameDetails>
						<h4>{subasta.titulo}</h4>
						<span>Valor: {valorProducto}</span>
					</ProductNameDetails>

					<CardTemporizador
						secondsTimer={secondsTimer}
						setSecondsTimer={setSecondsTimer}
						subasta={subasta}
						soon={soon}
						setSoon={setSoon}
						fechaInicio={fechaInicio}
					/>

					{soon ? (
						<TextSoon>Comienza Pronto</TextSoon>
					) : (
						<>
							<p style={{ marginBottom: '5px' }}>Dario</p>
							<LinearProgress
								style={{
									marginBottom: '5px',
								}}
							/>
							<div className="product_para">
								<p>
									Cada pujada restablece la
									cuenta regresiva a 10
									segundos
								</p>
							</div>
						</>
					)}
					<ButtonGroup>
						<Button disabled={soon} onClick={handleClickPujar}>
							Autopujador
						</Button>
						<Button disabled={soon} onClick={handleClickPujar}>
							Pujar
						</Button>
					</ButtonGroup>
				</CardDetails>
			</Card>
		</Grid>
	);
};
export default React.memo(CardTab);
