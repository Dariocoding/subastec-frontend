import { Button, Snackbar, Tooltip } from '@mui/material';
import * as React from 'react';
import { FaCopy } from 'react-icons/fa';

interface ICopyToClipBoardButtonProps {
	style?: React.CSSProperties;
	textToCopy: string;
}

const CopyToClipBoardButton: React.FunctionComponent<ICopyToClipBoardButtonProps> = props => {
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(true);
		navigator.clipboard.writeText(props.textToCopy);
	};
	return (
		<React.Fragment>
			<Tooltip title={'Copiar Texto'}>
				<Button
					color={'primary'}
					variant={'contained'}
					style={props.style}
					onClick={handleClick}
				>
					<FaCopy />
				</Button>
			</Tooltip>
			<Snackbar
				open={open}
				onClose={() => setOpen(false)}
				autoHideDuration={2000}
				message="Texto copiado"
			/>
		</React.Fragment>
	);
};

export default CopyToClipBoardButton;
