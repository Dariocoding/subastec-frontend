import styled from 'styled-components';
import { createPortal } from 'react-dom';
const Container = styled.div`
	width: 8vmax;
	height: 8vmax;
	border-right: 4px solid #ffffff;
	border-radius: 100%;
	animation: spinRight 800ms linear infinite;

	&:before,
	&:after {
		content: '';
		width: 6vmax;
		height: 6vmax;
		display: block;
		position: absolute;
		top: calc(50% - 3vmax);
		left: calc(50% - 3vmax);
		border-left: 3px solid #ffffff;
		border-radius: 100%;
		animation: spinLeft 800ms linear infinite;
	}

	&:after {
		width: 4vmax;
		height: 4vmax;
		top: calc(50% - 2vmax);
		left: calc(50% - 2vmax);
		border: 0;
		border-right: 2px solid #ffffff;
		animation: none;
	}

	@keyframes spinLeft {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(720deg);
		}
	}

	@keyframes spinRight {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: linear-gradient(to right top, #1c489e, #075cac, #006fb7, #2e94c8, #9edae5);
	position: fixed;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1300;
`;

const Loader = ({ show }: { show: boolean }) => {
	if (!show) return;
	return createPortal(
		<Background>
			<Container />
		</Background>,
		document.getElementById('loader-root')
	);
};

export default Loader;
