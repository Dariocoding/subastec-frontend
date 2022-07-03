import styled from 'styled-components';
import * as React from 'react';
import { PF } from '../../../../utils';
import ImagePlaceholder from '../../../../layout/common/placeholders/ImagePlaceholder';

const Card = styled.div`
	justify-content: center;
	display: flex;
	margin-top: 5px;
	.container-img {
		position: relative;
		img {
			width: 300px;
			min-height: 100px;
			border-radius: 15px;
			margin: auto;
			box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
				rgba(0, 0, 0, 0.23) 0px 6px 6px;
		}

		@media (max-width: 1200px) {
			img {
				width: 200px;
			}
		}
		.overflow-titulo {
			position: absolute;
			background: #5a5a5a;
			bottom: 10px;
			border-radius: 5px;
			padding: 10px;
			left: 10px;
			p {
				color: #fff;
				font-size: 13px;
			}
		}
	}
`;

interface ICardSlider {
	img: string;
	titulo: string;
}
const CardSlider: React.FunctionComponent<ICardSlider> = props => {
	const [isLoading, setIsLoading] = React.useState(true);

	const imageStyle = isLoading ? { display: 'none' } : {};

	return (
		<Card>
			<div className="container-img">
				{isLoading && <ImagePlaceholder />}

				<img
					src={PF + props.img}
					alt="Producto Subatec"
					style={imageStyle}
					onLoad={() => setIsLoading(false)}
				/>

				{!isLoading && (
					<div className="overflow-titulo">
						<p>{props.titulo}</p>
					</div>
				)}
			</div>
		</Card>
	);
};

export default CardSlider;
