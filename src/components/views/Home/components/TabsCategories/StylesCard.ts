import styled from 'styled-components';
import { Box } from '@mui/system';

export const Card = styled(Box)<{ hanPujado: boolean }>`
	transition: 0.5s ease;
	background-color: ${props => (props.hanPujado ? '#fdca20' : 'transparent')};
	padding: 20px 0px 0px 0px;
	overflow: hidden;
	text-align: center;
	position: relative;
	border-radius: 35px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	margin: 10px 0xp;

	h4,
	span,
	p,
	button {
		color: #4a4a4a;
	}

	h4,
	span {
		font-size: 18px;
	}

	.product_para p {
		font-size: 13px;
		line-height: 14px;
		font-weight: 400;
	}
`;

export const ProductSize = styled.div<{ soon?: boolean; position?: string | boolean }>`
	position: absolute;
	bottom: ${props => (props.soon ? '-5%' : 'initial')};
	right: ${props => (props.soon ? '20px' : 'initial')};
	top: ${props => (props.position === 'top' ? '5%' : 'initial')};
	left: ${props => (props.position === 'top' ? '0px' : 'initial')};
	background-color: ${props => (props.soon ? '#478BBF' : '#fff')};
	border-radius: 5px;
	box-shadow: ${props =>
		props.position === 'top' || !props.soon
			? 'box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
			: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`};
	p {
		font-size: 16px;
		color: ${props => (props.soon ? '#fff' : '#478BBF')};
		font-weight: 700;
		padding: 5px 15px;
		display: inline-block;
		user-select: none;
		border-radius: 0px 10px 10px 0px;
	}
`;

export const Star = styled.div<{ isFavorito: boolean }>`
	position: absolute;
	top: 10px;
	right: 20px;
	cursor: pointer;
	svg {
		color: ${props => (props.isFavorito ? '#ffb300' : '#ccc')};
		border-color: #ffb300;
		font-size: 20px;
	}
`;

export const CardDetails = styled.div<{ hanPujado: boolean }>`
	transition: 0.5s ease;
	border-radius: 35px;
	background-color: ${props => (props.hanPujado ? '#fdca20' : '#f9f9f9')};
`;

export const ProductNameDetails = styled.div`
	text-align: left;
	padding: 20px 40px;

	h4 {
		padding-bottom: 7px;
	}
	span {
		font-size: 15px;
		font-weight: 200;
	}
`;

export const ProductPrize = styled.div`
	display: flex;
	justify-content: center;
	gap: 25px;
	margin-bottom: 10px;
	h4 {
		font-weight: 400;
		font-size: 14px;
	}
	span {
		font-weight: 600;
		font-size: 16px;
	}
	.prize_right span {
		color: #4c8ac6;
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	width: 100%;

	button {
		transition: all 0.25s ease;
		width: 100%;
		font-size: 14px;
		:hover {
			color: #fff;
			background-color: #3584b9;
		}
	}
`;

export const TextSoon = styled.h5`
	color: #111 !important;
	padding: 10px;
	background-color: #ebebeb;
	font-weight: 600;
	text-transform: uppercase;
	font-size: 16px;
`;
