import { useState } from 'react';
import styled from 'styled-components';
import { AppBar, Box, Toolbar, Typography, IconButton, Container } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import ResponsiveMenu from './Menu/ResponsiveMenu';
import Menu from './Menu/Menu';
import Logo from './Menu/Logo';
import { useLocation } from 'react-router-dom';

const MenuEffect = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0%;
	background: rgb(204, 204, 204);
	opacity: 0.2;
	margin: 0px auto;
	z-index: -1;
`;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation().pathname;

	const toggleOpen = () => setIsOpen(!isOpen);

	const color = location === '/dashboard' || '/subastas-ganadas' ? 'primary' : 'transparent';

	return (
		<Box sx={{ flexGrow: 1, position: 'fixed', zIndex: 550 }}>
			<ResponsiveMenu toggleSidebar={toggleOpen} menuAbierto={isOpen} />
			<AppBar color={color} sx={{ boxShadow: 0 }} component={'nav'}>
				<Container maxWidth="xl">
					<Toolbar>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							<Logo />
						</Typography>

						<Menu />

						<Box
							sx={{
								display: {
									md: 'flex',
									lg: 'none',
								},
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={toggleOpen}
								color="inherit"
							>
								<FaBars color="#fff" />
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
				<MenuEffect />
			</AppBar>
		</Box>
	);
};

export default Header;
