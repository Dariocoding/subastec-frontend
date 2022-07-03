import { useFormikContext, getIn } from 'formik';
import { FormControl, TextField } from '@mui/material';

interface ITextareaProps {
	label: string;
	name: string;
	placeholder?: string;
	rows?: number;
}
const Textarea: React.FunctionComponent<ITextareaProps> = ({
	label,
	name,
	placeholder = '',
	rows = 5,
}) => {
	const { values, errors, touched, setFieldValue, setTouched } = useFormikContext();
	const value = getIn(values, name);
	const error = getIn(errors, name);
	const touchedInput = getIn(touched, name);
	return (
		<FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
			<TextField
				variant="outlined"
				label={label}
				name={name}
				placeholder={placeholder}
				multiline
				rows={rows}
				value={value}
				onChange={e => setFieldValue(name, e.target.value)}
				onClick={() => setTouched({ ...touched, [name]: true })}
				onTouchStart={() => setTouched({ ...touched, [name]: true })}
			/>

			{error && touchedInput && <span className="required">{error}</span>}
		</FormControl>
	);
};

export default Textarea;
