import { FaCircle } from 'react-icons/fa';
import { BiCircle } from 'react-icons/bi';
import styled from 'styled-components';

const ContainerUl = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	flex-direction: column;
	li {
		cursor: pointer;
		padding: 0px 5px;
		box-sizing: content-box;
	}

	@media all and (max-width: 900px) {
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20px;
	}
`;

interface IDotsSliderProps {
	goTo(sliderPosicion: number, callback: () => void): void;
	posicionActual: number;
	setPosicionActual(value: number): void;
	totalSlider: React.ReactNode[];
}

const DotsSlider: React.FunctionComponent<IDotsSliderProps> = props => {
	const { goTo, posicionActual, setPosicionActual, totalSlider } = props;
	return (
		<ContainerUl>
			{totalSlider.map((e, posicionDot) => (
				<li
					key={posicionDot}
					onClick={() => {
						goTo(posicionDot, () => {
							setPosicionActual(posicionDot);
						});
					}}
				>
					{posicionDot === posicionActual ? (
						<FaCircle color={'#fff'} />
					) : (
						<BiCircle color={'#fff'} />
					)}
				</li>
			))}
		</ContainerUl>
	);
};

export default DotsSlider;
