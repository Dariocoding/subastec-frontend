import ContentLoader from 'react-content-loader';

const CardBidPlaceholder = () => (
	<ContentLoader
		speed={1}
		style={{ width: '100%', height: '100%' }}
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="60" rx="150" ry="10" width="100%" height="400" />
	</ContentLoader>
);

export default CardBidPlaceholder;
