interface ITileProps {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const Tile: React.FunctionComponent<ITileProps> = props => (
	<div style={props.style} className={`tile ${props.className}`}>
		{props.children}
	</div>
);

export default Tile;
