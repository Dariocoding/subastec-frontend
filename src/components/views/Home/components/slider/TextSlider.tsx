import { Typography } from '@mui/material';
import styled from 'styled-components';
import { CustomButtonOutlineButton } from '../../../../layout/common/CustomsButtonsOutline';
const Container = styled.div`
	color: #fff;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TextSlider = () => (
	<Container>
		<div>
			<Typography variant="h4" style={{ fontSize: '2.5rem' }} fontWeight={800}>
				Consigue productos de última generación a precios increibles
			</Typography>

			<Typography>
				Con subastec podrás pujar por productos de lujo y ahorrar hasta un
				97% de su precio original
			</Typography>

			<CustomButtonOutlineButton
				onClick={() => {
					document.querySelector('#subastas-en-vivo').scrollIntoView({
						behavior: 'smooth',
					});
				}}
				style={{
					marginTop: '25px',
					padding: '10px 50px',
					borderRadius: '10px',
					boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
					fontSize: '12pt',
				}}
				nooutlinehover={'true'}
			>
				Empiece a Pujar
			</CustomButtonOutlineButton>
		</div>
	</Container>
);

export default TextSlider;
