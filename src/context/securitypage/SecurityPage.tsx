import * as React from 'react';
import ReCaptcha from 'react-google-recaptcha';
import styled from 'styled-components';

import { createPortal } from 'react-dom';
import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import { RECAPTCHAKEY } from '../../components/utils';

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: #fff;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: start;
	z-index: 1300;
`;

interface ISecurityPageProps {
	isOpen: boolean;
	setIsOpen(value: boolean): void;
}

const SecurityPage: React.FunctionComponent<ISecurityPageProps> = props => {
	const captcha = React.useRef<ReCaptcha>(null);
	if (!props.isOpen) return;

	const onChangeCaptcha = () => {
		if (captcha.current.getValue()) {
			captcha.current.reset();
			props.setIsOpen(false);
		}
	};
	return createPortal(
		<Background>
			<Container maxWidth={'md'}>
				<Box textAlign={'center'}>
					<Box
						sx={{
							background: 'linear-gradient(to right top, #1c489e, #075cac, #006fb7, #2e94c8, #9edae5)',
							borderRadius: '20px',
							borderTopRightRadius: '0px',
							borderTopLeftRadius: '0px',
						}}
					>
						<img
							src="/tienda.png"
							width={'150px'}
							style={{
								marginTop: '20px',
								marginBottom: '20px',
							}}
							alt="Tienda Subastec png"
						/>
					</Box>
					<Box>
						<img
							src="/protect.png"
							width={'150px'}
							style={{ marginBottom: '20px' }}
							alt="Shield Security"
						/>
					</Box>
					<Typography
						color={'#dc3545'}
						variant={'h3'}
						fontWeight={700}
					>
						Control de seguridad
					</Typography>
					<Typography marginTop={1} marginBottom={5} color={'#111'}>
						Complete el control de seguridad para tener acceso
						temporal al sitio.
					</Typography>

					<Typography
						color={'#dc3545'}
						variant={'h3'}
						fontWeight={700}
					>
						Security Check
					</Typography>
					<Typography marginTop={1} marginBottom={5} color={'#111'}>
						Complete security check to hold temporary to site.
					</Typography>

					<Box display={'flex'} justifyContent={'center'}>
						<ReCaptcha
							ref={captcha}
							sitekey={RECAPTCHAKEY}
							onChange={onChangeCaptcha}
						/>
					</Box>
				</Box>
			</Container>
		</Background>,
		document.getElementById('securitypage-root')
	);
};

export default SecurityPage;
