import styled from 'styled-components';
import dataOptions from './dataOptions';
import InfoPerfil from './InfoPerfil';

const Container = styled.div`
	background: #fff;
	border-radius: 15px;
`;

const Ul = styled.ul`
	padding-top: 50px;
	margin-top: -30px;
	display: inline-block;
	li {
		&:hover {
			background-color: #ebebeb;
		}
		font-size: 20px;
		font-weight: 500;
		color: #4b4b4b;
		padding: 20px 10px;
		width: 100%;
		display: inline-block;
		cursor: pointer;
		user-select: none;
	}
`;

interface IDashboardLeftProps {
	setOptionActual(value: string): void;
}
const DashboardLeft: React.FunctionComponent<IDashboardLeftProps> = ({ setOptionActual }) => {
	function setOption(option: string) {
		if (!option) return;
		setOptionActual(option);
	}

	return (
		<Container>
			<InfoPerfil />
			<Ul>
				{dataOptions.map(({ component: Component, name }, index) => (
					<Component
						onClick={() => setOption(name)}
						key={index.toString()}
					/>
				))}
			</Ul>
		</Container>
	);
};

export default DashboardLeft;
