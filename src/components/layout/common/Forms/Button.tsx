import { useFormikContext } from 'formik';
import { Button as ButtonMu } from '@mui/material';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

interface IButtonProps {
	children?: React.ReactNode;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
	const { isSubmitting } = useFormikContext();
	return (
		<ButtonMu
			fullWidth
			type="submit"
			color="primary"
			variant="contained"
			style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
		>
			{isSubmitting ? <CgSpinnerTwoAlt className="spin" size={20} /> : children}
		</ButtonMu>
	);
};

export default Button;
