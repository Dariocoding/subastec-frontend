import * as React from 'react';
import { SubastaType } from '../../../../../entities';
import moment from 'moment-timezone';
import { ProductPrize } from './StylesCard';
import { formatter } from '../../../../utils';
interface ICardTemporizadorProps {
	secondsTimer: number;
	setSecondsTimer(value: number): void;
	soon: boolean;
	setSoon: React.Dispatch<React.SetStateAction<boolean>>;
	subasta: SubastaType;
	fechaInicio: Date;
}

const CardTemporizador: React.FC<ICardTemporizadorProps> = props => {
	const { soon, subasta, fechaInicio, setSoon, secondsTimer, setSecondsTimer } = props;

	const [seconds, setSeconds] = React.useState(0);
	const [hours, setHours] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);
	const [days, setDays] = React.useState(0);

	React.useEffect(() => {
		if (soon) {
			const timeOutId = setInterval(() => {
				const now = moment().toDate().getTime();
				const distance = fechaInicio.getTime() - now;

				if (distance > 0) {
					const days = Math.floor(distance / (1000 * 60 * 60 * 24));
					const hours = Math.floor(
						(distance % (1000 * 60 * 60 * 24)) /
							(1000 * 60 * 60)
					);
					const minutes = Math.floor(
						(distance % (1000 * 60 * 60)) / (1000 * 60)
					);
					const seconds = Math.floor((distance % (1000 * 60)) / 1000);

					setHours(hours);
					setSeconds(seconds);
					setDays(days);
					setMinutes(minutes);
				} else {
					setHours(0);
					setSeconds(0);
					setDays(0);
					setMinutes(0);
					setSoon(false);
					clearInterval(timeOutId);
				}
			}, 1000);
		} else {
			const timer = window.setTimeout(() => {
				const resultado = secondsTimer - 1;
				resultado < 0 ? setSecondsTimer(10) : setSecondsTimer(resultado);
			}, 1000);

			return () => window.clearTimeout(timer);
		}
	}, [soon, secondsTimer]);

	const timer = soon
		? `${days ? days + 'd:' : ''} ${hours ? hours + 'h:' : ''} ${
				minutes ? minutes + 'm:' : ''
		  } ${seconds + 's'}`
		: `00:${secondsTimer < 10 ? '0' + secondsTimer : secondsTimer}`;

	const preciosubasta = formatter.format(
		subasta.preciosubasta ? subasta.preciosubasta : 0.01
	);

	return (
		<ProductPrize>
			{!soon && (
				<div className="prize_left">
					<h4>
						Precio: <br /> <span>{preciosubasta}</span>
					</h4>
				</div>
			)}

			<div className="prize_right">
				<h4>
					{soon ? 'La subasta Inicia' : 'Tiempo'}
					: <br /> <span>{timer}</span>
				</h4>
			</div>
		</ProductPrize>
	);
};

export default CardTemporizador;
