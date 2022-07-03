import { getIn, useFormikContext } from 'formik';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { IconType } from 'react-icons';

interface IInputProps {
	label: string;
	name: string;
	placeholder?: string;
	type?: string;
	disabled?: boolean;
	Icon?: IconType;
}
const Input: React.FunctionComponent<IInputProps> = props => {
	const { label, name, placeholder = '', type = 'text', disabled, Icon } = props;
	const { values, errors, touched, setFieldValue, setTouched } = useFormikContext();
	const value = getIn(values, name);
	const error = getIn(errors, name);
	const touchedInput = getIn(touched, name);

	return (
		<FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
			<TextField
				size="small"
				variant="outlined"
				label={label}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={e => setFieldValue(name, e.target.value)}
				onClick={() => setTouched({ ...touched, [name]: true })}
				onTouchStart={() => setTouched({ ...touched, [name]: true })}
				disabled={disabled}
				InputProps={{
					endAdornment: Icon ? (
						<InputAdornment position="end">
							<Icon />
						</InputAdornment>
					) : null,
				}}
			/>
			{error && touchedInput && <span className="required">{error}</span>}
		</FormControl>
	);
};

export default Input;
