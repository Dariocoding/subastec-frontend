import { Button } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IButtonLinkProps {
	to?: string;
	children?: React.ReactNode;
}

const ButtonLink: React.FunctionComponent<IButtonLinkProps> = props => (
	<Link to={props.to ? props.to : '#!'}>
		<Button {...props}>{props.children}</Button>
	</Link>
);

type CustomButtonOutlineButtonProps = { nooutlinehover?: 'true' | 'false' };

const CustomButtonOutlineButton = styled(Button)<CustomButtonOutlineButtonProps>`
	border: 1px solid #f8f9fa !important;
	color: ${props =>
		props.nooutlinehover === 'true' ? '#1f439a !important' : '#f8f9fa !important'};
	background-color: ${props =>
		props.nooutlinehover === 'true' ? '#fff !important' : 'transparent !important'};
	&:hover {
		color: #000 !important;
		background-color: #f8f9fa !important;
	}
`;

interface ICustomButtonOutlineLinkProps {
	to?: string;
	children?: React.ReactNode;
	nooutlinehover?: 'true' | 'false';
	style?: React.CSSProperties;
}

const CustomButtonOutlineLink: React.FunctionComponent<ICustomButtonOutlineLinkProps> = props => (
	<Link to={props.to ? props.to : '#!'}>
		<CustomButtonOutlineButton
			style={props.style}
			nooutlinehover={props.nooutlinehover}
		>
			{props.children}
		</CustomButtonOutlineButton>
	</Link>
);

export { CustomButtonOutlineLink, CustomButtonOutlineButton, ButtonLink };
