import styled from 'styled-components';
import DataMenu from './DataMenu';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface IResponsiveMenuProps {
	menuAbierto: boolean;
	toggleSidebar(): void;
}

const ResponsiveMenu: React.FunctionComponent<IResponsiveMenuProps> = props => {
	const { menuAbierto, toggleSidebar } = props;
	return (
		<ResponsiveMenuContainer menuAbierto={menuAbierto}>
			<div className="overlay">
				<span className="closebtn" onClick={toggleSidebar}>
					<FaTimes color="#fff" size={20} />
				</span>
				<OverlayContentMenu>
					{DataMenu.map(({ children, url }) => (
						<Link
							key={children}
							to={url}
							onClick={toggleSidebar}
						>
							{children}
						</Link>
					))}
				</OverlayContentMenu>
			</div>
		</ResponsiveMenuContainer>
	);
};

export default ResponsiveMenu;

const ResponsiveMenuContainer = styled.div<{ menuAbierto: boolean }>`
	display: none;
	background: #fff;
	transition: all 0.3s ease;

	.overlay {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 1;
		top: 0;
		left: ${props => (props.menuAbierto ? '0%' : '-100%')};
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.9);
		overflow-x: hidden;
		-webkit-transition: 0.5s;
		-o-transition: 0.5s;
		transition: 0.5s;
		z-index: 1300;
		overflow: hidden;
	}

	.closebtn {
		margin-top: 10px;
		position: absolute;
		top: 0;
		right: 20px;
		cursor: pointer;
	}

	@media (max-width: 1200px) {
		display: block;
	}

	.closebtn {
		position: absolute;
	}
`;

const OverlayContentMenu = styled.div`
	position: relative;
	top: 25%;
	width: 100%;
	text-align: center;
	margin-top: 30px;

	a {
		font-family: Roboto, 'sans-serif';
		padding: 8px;
		text-decoration: none;
		font-size: 30px;
		color: #818181;
		display: block;
		-webkit-transition: 0.3s;
		-o-transition: 0.3s;
		transition: 0.3s;
	}

	a:hover,
	a:focus {
		color: #f1f1f1;
	}
`;
