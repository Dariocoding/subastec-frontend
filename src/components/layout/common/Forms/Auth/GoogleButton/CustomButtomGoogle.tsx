import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';

const ContainerButton = styled.button`
	width: 100%;
	color: #000;
	background-color: #ebebeb;
	padding: 10px 5px;
	transition: all 300ms ease;
	border: #59b3e8;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 400;
	&:hover {
		background-color: #d6d6d6;
	}
`;

interface ICustomButtonGooleProps {
	renderProps: {
		onClick(e: any): void;
		disabled?: boolean;
	};
	text?: string;
}

const CustomButtonGoogle: React.FunctionComponent<ICustomButtonGooleProps> = props => {
	const { renderProps, text } = props;
	return (
		<ContainerButton
			type="button"
			onClick={renderProps.onClick}
			disabled={renderProps.disabled}
		>
			<FcGoogle size={20} style={{ marginRight: '10px' }} /> {text}
		</ContainerButton>
	);
};

export default CustomButtonGoogle;
