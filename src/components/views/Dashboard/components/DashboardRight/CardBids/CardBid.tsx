import styled from 'styled-components';
import { PaqueteBidType } from '../../../../../../entities';

const Container = styled.div<{ background: string }>`
	background: #ffffff;
	border-radius: 15px;
	margin: 25px 0px;
	padding: 10px;

	.bg {
		text-align: center;
		background: red;
		padding: 20px 0px;
		border-radius: 35px;
		background: ${props => props.background};
		color: #fff;
		font-weight: 700;
	}

	.containerDescription {
		padding: 25px 0px;
		display: flex;
		justify-content: center;
		align-items: center;

		h6,
		span.bonus {
			font-weight: 500;
			font-size: 18px;
		}
		h6 {
			color: #5f5f5f;
		}

		span.bonus {
			color: #3584b9;
			margin-left: 5px;
		}
	}

	.price {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #3584b9;
		padding: 7px 15px;
		border-radius: 35px;
		cursor: pointer;
		transition: all 300ms ease;

		&:hover {
			background: #004b7e;
		}

		p,
		span {
			color: #fff;
			user-select: pointer !important;
		}

		span {
			display: inline-block;
			background: #21699a;
			border-radius: 35px;
			padding: 4px 10px;
			user-select: none;
		}
	}
`;

interface ICardBidProp {
	paqueteBid: PaqueteBidType;
	handleClick?(detail: PaqueteBidType): void;
}

const CardBid: React.FunctionComponent<ICardBidProp> = props => {
	const { paqueteBid, handleClick } = props;

	const { bonus, cantidadBids, price, background } = paqueteBid;

	const onClick = () => handleClick(paqueteBid);

	return (
		<Container background={background}>
			<div className="bg">
				<h1>{cantidadBids}</h1>
				<p>BIDS</p>
			</div>
			<div className="containerDescription">
				<h6>{cantidadBids} BIDS</h6>{' '}
				{bonus && <span className="bonus">+{bonus} Bids</span>}
			</div>
			{handleClick ? (
				<div className="price" onClick={onClick}>
					<p style={{ cursor: 'pointer' }}>Comprar</p>
					<span>{price}</span>
				</div>
			) : null}
		</Container>
	);
};
export default CardBid;
