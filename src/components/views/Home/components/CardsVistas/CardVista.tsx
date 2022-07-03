import styled from 'styled-components';
import { SubastaType } from '../../../../../entities';
import { formatter, PF, SMONEY } from '../../../../utils';
const Card = styled.div`
	display: inline-block;
	border: 1px solid #fff;
	text-align: center;
	position: relative;
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	margin-top: 10px;
	margin-bottom: 30px;

	.participa_img {
		height: 100%;
		max-width: 500px;
		position: relative;
		img {
			width: 100%;
			height: auto;
		}

		.parti_parsen {
			z-index: 10;
			background: #322a3b;
			padding: 5px 15px;
			display: inline-block;
			border-radius: 10px;
			position: absolute;
			left: 3%;
			bottom: 20px;

			span {
				font-size: 14px;
				color: #fff;
			}
		}

		/* .parti_descuento {
			z-index: 10;
			background: rgba(245, 245, 245, 0.5);
			padding: 5px 15px;
			display: inline-block;
			position: absolute;
			border-radius: 5px;
			top: 40%;
			left: 35%;
			font-size: 14px;
			h4 {
				font-weight: 200;
			}
			span {
				color: #1b4397;
			}
		} */
	}

	.participa_details {
		background: #2263a9;
		border-radius: 0px 0px 15px 15px;
		padding: 10px 20px;
		.part_prize {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			.parti_left {
				font-size: 24px;
				@media (max-width: 1000px) {
					font-size: 16px;
				}
			}
		}
	}
`;

interface ICardVistaProps {
	subasta: SubastaType;
}

const CardVista: React.FC<ICardVistaProps> = props => {
	const { subasta } = props;
	return (
		<Card>
			<div className="participa_img">
				<img
					loading="lazy"
					src={PF + subasta.fotoSubasta}
					alt="Producto vendido subatec"
				/>
				<div className="parti_parsen">
					<span>{subasta.titulo}</span>
				</div>
				{/* <div className="parti_descuento">
					<span>{descuento}</span>
					<h4>Vendido</h4>
				</div> */}
			</div>
			<div className="participa_details">
				<div className="part_prize">
					<div className="parti_left">
						<p>
							{formatter
								.format(subasta.preciosubasta)
								.replace('$', '') + SMONEY}
						</p>
					</div>
					<div className="parti_right">
						<h5>{subasta.winnerUser.nombres}</h5>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CardVista;
