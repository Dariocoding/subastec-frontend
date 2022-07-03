import styled from 'styled-components';
import { backgroundInterface } from './interfaces';

const Background = styled.div<backgroundInterface>`
	width: 100%;
	height: 100%;
	background: rgba(32, 39, 49, 0.6);
	position: fixed;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: ${props => props.position};
	z-index: ${props => (props.zIndex ? props.zIndex : 1500)};
`;

export default Background;
