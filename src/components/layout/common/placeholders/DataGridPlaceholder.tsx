import * as React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const DataGridPlaceholder: React.FC<IContentLoaderProps> = props => {
	const rows = 2;
	const columns = 5;
	const coverHeight = 200;
	const coverWidth = 300;
	const padding = 5;
	const speed = 1;

	const coverHeightWithPadding = coverHeight + padding;
	const coverWidthWithPadding = coverWidth + padding;
	const initial = 35;
	const covers = Array(columns * rows).fill(1);

	return (
		<div style={{ overflow: 'hidden' }}>
			<ContentLoader
				speed={speed}
				width={columns * coverWidthWithPadding}
				height={rows * coverHeightWithPadding}
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				{...props}
			>
				{covers.map((g, i) => {
					let vy =
						Math.floor(i / columns) * coverHeightWithPadding +
						initial;
					let vx =
						(i * coverWidthWithPadding) %
						(columns * coverWidthWithPadding);
					return (
						<rect
							key={i}
							x={vx}
							y={vy}
							rx="0"
							ry="0"
							width={coverWidth}
							height={coverHeight}
						/>
					);
				})}
			</ContentLoader>
		</div>
	);
};

export default DataGridPlaceholder;
