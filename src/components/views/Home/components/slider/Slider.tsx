import * as React from 'react';
import SliderComponent from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardSlider from './CardSlider';
import styled from 'styled-components';
import DotsSlider from './DotsSlider';
import { Grid, Typography } from '@mui/material';
import { CustomButtonOutlineButton } from '../../../../layout/common/CustomsButtonsOutline';
import { Box } from '@mui/system';
import { SubastaType } from '../../../../../entities';
import useRequestData from '../../../../../hooks/useRequestData';
import BodyPlaceholder from '../../../../layout/common/placeholders/BodyPlaceHolder';
import { useNavigate } from 'react-router-dom';
import { crearURLAmigable } from '../../../../utils/urlAmigable';
const Container = styled.div`
	text-align: center;
	border: 1px solid #fff;
	padding: 25px 0px;
	border-radius: 15px;
	z-index: 500;
	position: relative;
	width: 95%;
	margin: auto;

	.effect {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background: #fff;
		opacity: 0.1;
		z-index: -1;
	}

	@media (max-width: 1200px) {
		width: 60%;
	}

	@media (max-width: 700px) {
		width: 90%;
	}

	.slick-slide {
		height: auto;
	}
`;

const Slider = () => {
	const [subastas, loading] = useRequestData<SubastaType[]>([], {
		url: 'subastas/getLastFourSubastas',
	});
	const [sliderActual, setSliderActual] = React.useState(0);
	const [sliderActivo, setSliderActivo] = React.useState(false);
	const navigate = useNavigate();
	const slider = React.useRef<SliderComponent>();

	if (loading) return <BodyPlaceholder />;

	function goTo(i: number, callback: () => void) {
		if (i !== sliderActual) {
			slider.current.slickPrev();
			callback();
		}
	}

	function scrollToSubastasEnVivo() {
		document.querySelector('#subastas-en-vivo').scrollIntoView({
			behavior: 'smooth',
		});
	}

	function GoToPujar() {
		const subasta = subastas.at(sliderActual);
		navigate(`/subastas/${subasta.idsubasta}/${crearURLAmigable(subasta.titulo)}`);
	}

	return (
		<Grid container paddingTop={5}>
			<Grid item lg={10} md={10} xs={12}>
				<Typography
					variant="h6"
					color={'#fff'}
					marginBottom={1}
					textAlign={'center'}
				>
					Ultimos productos subastados
				</Typography>
			</Grid>
			<Grid item lg={10} md={10} xs={12} order={{ xs: 1, md: 0 }}>
				<Container>
					<SliderComponent
						ref={s => {
							slider.current = s;
							setSliderActivo(true);
						}}
						draggable={true}
						dots={false}
						infinite
						slidesToShow={1}
						slidesToScroll={1}
						lazyLoad={'progressive'}
						arrows={false}
						adaptiveHeight={true}
						centerMode={false}
						waitForAnimate
						autoplay
						autoplaySpeed={1500}
						afterChange={position => {
							setSliderActual(position);
						}}
					>
						{subastas.map((s, index) => (
							<CardSlider
								key={index}
								titulo={s.titulo}
								img={s.fotoSubasta}
							/>
						))}
					</SliderComponent>
					<div className="effect"></div>
					<Box mt={3}>
						<CustomButtonOutlineButton
							style={{
								marginRight: '30px',
								boxShadow: 'none',
								padding: '5px 30px',
								borderRadius: '8px',
							}}
							onClick={scrollToSubastasEnVivo}
						>
							Ver Más
						</CustomButtonOutlineButton>
						<CustomButtonOutlineButton
							style={{
								boxShadow: 'none',
								padding: '5px 30px',
								borderRadius: '8px',
							}}
							nooutlinehover={'true'}
							onClick={GoToPujar}
						>
							Pujar
						</CustomButtonOutlineButton>
					</Box>
				</Container>
			</Grid>

			<Grid
				item
				lg={2}
				md={2}
				xs={12}
				order={{ xs: 0, md: 1 }}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				{sliderActivo && (
					<DotsSlider
						goTo={goTo}
						posicionActual={sliderActual}
						setPosicionActual={setSliderActual}
						// @ts-ignore
						totalSlider={slider.current.props.children}
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default Slider;
