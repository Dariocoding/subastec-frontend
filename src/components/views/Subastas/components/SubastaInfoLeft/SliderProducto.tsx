import * as React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SubastaType } from '../../../../../entities';
import { PF } from '../../../../utils';
import { Typography } from '@mui/material';

const CustomSlider = styled(Slider)`
	.slick-slide {
		position: relative;
		display: flex;
		justify-content: center;
		text-align: center;
	}
	.slick-slide:focus {
		outline: none;
	}
	.slick-slide-image {
		margin: auto;
		max-width: 100%;
		height: auto;
		border-radius: 20px;
		box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
			0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
		background-repeat: no-repeat;
	}
	.slick-prev:before,
	.slick-next:before {
		color: #777777;
	}
`;

const ThumbnailWrapper = styled.div`
	margin-top: 15px;

	& .slick-track .slick-slide {
		text-align: center;
	}
	& .slick-track .slick-slide img {
		width: 50%;
		max-width: 150px;
	}

	& .slick-slide-image {
		border-radius: 10px;
		margin: auto;
	}

	.slick-slider {
		margin: 0px 15px;
	}
`;

const PaqueteBidSlide = styled.div<{ background: string }>`
	background: ${props => props.background};
	border-radius: 10px;
	color: #fff;
	padding: 75px 0px;
`;

interface ISliderProductoProps {
	subasta: SubastaType;
}

const SliderProducto: React.FC<ISliderProductoProps> = ({ subasta }) => {
	const [nav1, setNav1] = React.useState<Slider>(null);
	const [nav2, setNav2] = React.useState<Slider>(null);
	const slider1 = React.useRef<Slider>();
	const slider2 = React.useRef<Slider>();

	React.useEffect(() => {
		if (slider1.current) setNav1(slider1.current);
		if (slider2.current) setNav2(slider2.current);
	}, [slider1, slider2]);

	const settingsMain = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: false,
		asNavFor: '.slider-nav',
		adaptiveHeight: true,
		autoplaySpeed: 1000,
	};

	return (
		<div>
			<CustomSlider {...settingsMain} asNavFor={nav2} ref={slider1}>
				{subasta?.producto?.imagenes ? (
					subasta.producto.imagenes.map(img => (
						<div className="slick-slide" key={img.id}>
							<img
								className="slick-slide-image"
								src={PF + img.filename}
								alt={''}
							/>
						</div>
					))
				) : (
					<PaqueteBidSlide
						className="slick-slide"
						background={subasta.paqueteBid.background}
					>
						<Typography variant={'h4'} fontWeight={600}>
							{subasta.paqueteBid.cantidadBids} Bids
						</Typography>
						{subasta.paqueteBid.bonus ? (
							<p>Bonus: {subasta.paqueteBid.bonus} </p>
						) : null}
					</PaqueteBidSlide>
				)}
			</CustomSlider>
			{subasta.producto && subasta.producto.imagenes.length > 1 && (
				<ThumbnailWrapper>
					<Slider
						asNavFor={nav1}
						ref={slider2}
						slidesToShow={
							subasta.producto.imagenes.length < 3
								? subasta.producto.imagenes.length
								: 3
						}
						slidesToScroll={1}
						dots={false}
						centerMode={true}
						swipeToSlide={true}
						focusOnSelect={true}
						autoplay
						centerPadding={'10px'}
						arrows
					>
						{subasta.producto.imagenes.map(img => (
							<div className="slick-slide" key={img.id}>
								<img
									className="slick-slide-image"
									src={PF + img.filename}
									alt={''}
								/>
							</div>
						))}
					</Slider>
				</ThumbnailWrapper>
			)}
		</div>
	);
};

export default SliderProducto;
