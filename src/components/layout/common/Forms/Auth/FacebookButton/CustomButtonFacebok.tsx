import { FaSpinner } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

const ContainerButton = styled.button`
	margin-top: 10px;
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

interface ICustomButtonFacebookProps {
	renderProps: { disabled?: boolean; onClick(e: any): void };
	text: string;
}
/* renderProps, text */
const CustomButtonFacebok: React.FunctionComponent<ICustomButtonFacebookProps> = props => {
	const { renderProps, text } = props;
	return (
		<ContainerButton
			type="button"
			onClick={renderProps.onClick}
			disabled={renderProps.disabled}
		>
			{renderProps.disabled ? (
				<FaSpinner className="spin" />
			) : (
				<>
					<FaFacebook
						size={20}
						color={'#3b5998'}
						style={{ marginRight: '10px' }}
					/>{' '}
					{text}
				</>
			)}
		</ContainerButton>
	);
};
export default CustomButtonFacebok;
