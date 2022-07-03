import styled from 'styled-components';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Container = styled.div`
	margin-top: 10px;
	display: flex;
	img {
		width: 150px;
	}
`;

const Logo = () => (
	<Container>
		<Link to={'/'}>
			<Img
				effect="blur"
				src={require('../../../../../assets/images/logo.png')}
				alt="Logo Subatec"
			/>
		</Link>
	</Container>
);

export default Logo;
