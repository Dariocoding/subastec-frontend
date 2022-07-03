import styled from 'styled-components';

const ContainerSectionBackground = styled.div<{ noBackground?: boolean }>`
	position: relative;
	padding: 0px 0px 50px 0px;
	width: 100%;
	min-height: 80vh;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	background-image: linear-gradient(
		to right top,
		${props =>
			props.noBackground
				? '#ccc'
				: `
		#1c489e,#075cac,#006fb7,#2e94c8,#9edae5
	`}
	);

	@media (max-width: 900px) {
		padding: 90px 0px 50px 0px;
	}
`;
interface IContainerSection1Props {
	className?: string;
	noBackground?: boolean;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

const ContainerSection1: React.FunctionComponent<IContainerSection1Props> = props => (
	<ContainerSectionBackground
		noBackground={props.noBackground}
		className={props.className ? props.className : ''}
		style={props.style ? props.style : {}}
	>
		{props.children}
	</ContainerSectionBackground>
);

export default ContainerSection1;
