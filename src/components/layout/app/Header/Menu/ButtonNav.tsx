import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface IButtonNavContainerProps {
	active?: number;
}

const ButtonNavContainer = styled(Button)<IButtonNavContainerProps>`
	background: ${props => (props.active ? '#fff !important' : 'transparent !important')};
	color: ${props => (props.active ? '#000 !important' : '#fff !important')};
	transition: 0.6;
	&:hover {
		color: #000 !important;
		background: ${props => (props.active ? '#ebebeb !important' : '#fff !important')};
	}
`;

interface IButtonNavProps {
	url?: string;
	active?: boolean;
	children?: React.ReactNode;
}

const ButtonNav: React.FunctionComponent<IButtonNavProps> = props => (
	<Link
		to={props.url}
		onClick={e => {
			if (window.location.hash) {
				if (document.querySelector(window.location.hash)) {
					document.querySelector(window.location.hash).scrollIntoView(
						{ behavior: 'smooth' }
					);
				}
			}
		}}
	>
		<ButtonNavContainer color="inherit" active={props.active ? 1 : 0}>
			{props.children}
		</ButtonNavContainer>
	</Link>
);

export default ButtonNav;
