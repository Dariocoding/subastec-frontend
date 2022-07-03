import CardVista from './CardVista';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useRequestData from '../../../../../hooks/useRequestData';
import { SubastaType } from '../../../../../entities';

const ContainerSlider = styled(Slider)`
	.slick-track {
		display: flex !important;
	}

	.slick-slide {
		height: inherit !important;
		text-align: center;
		margin-right: 15px;
		margin-left: 15px;
	}

	@media (max-width: 600px) {
		.slick-slide {
			margin-right: 0px;
			margin-left: 0px;
		}
	}
`;

const CardsVistas: React.FC = () => {
	const [subastas, loading] = useRequestData<SubastaType[]>([], {
		url: 'subastas-destacadas/getTenSubastasDestacadas',
	});

	const settings: Settings = {
		lazyLoad: 'progressive',
		speed: 500,
		slidesToShow: subastas.length > 4 ? 4 : subastas.length,
		slidesToScroll: 1,
		initialSlide: 0,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	if (loading || !subastas.length) return null;

	return (
		<ContainerSlider {...settings}>
			{subastas.map(s => (
				<CardVista subasta={s} key={s.idsubasta} />
			))}
		</ContainerSlider>
	);
};

export default CardsVistas;
