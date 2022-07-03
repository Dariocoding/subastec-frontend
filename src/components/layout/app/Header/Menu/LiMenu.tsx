import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IRedireccionadorProps {
	active?: 1 | 0;
}

const Redireccionador = styled(Link)<IRedireccionadorProps>(({ active }) => ({
	display: 'inline-block',
	fontSize: '18px',
	fontWeight: 600,
	margin: '0px 3px',
	padding: active ? '#111' : '#fff',
	zIndex: 1,
	transition: '0.25s',
	textDecoration: 'none',
	color: active ? '#111' : '#fff',
	background: active ? '#fff' : 'transparent',
	borderRadius: '3px',
	'&:hover': {
		background: active ? '#dbdbdb' : '#fff',
		color: '#000',
		padding: '10px',
	},
}));

export interface ILiMenuProps {
	titulo?: string;
	url?: string;
	active?: boolean;
}

const LiMenu: React.FunctionComponent<ILiMenuProps> = ({ titulo, url, active }) => (
	<li key={titulo}>
		<Redireccionador active={active ? 1 : 0} to={url}>
			{titulo}
		</Redireccionador>
	</li>
);

export default LiMenu;
