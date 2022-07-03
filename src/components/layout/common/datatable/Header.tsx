import { FaSearch } from 'react-icons/fa';
import { Input } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface IHeaderProps {
	buttonHeader?: ReactNode;
	setQ(value: string): void;
	q: string;
	canSearch?: boolean;
}

const Header: FunctionComponent<IHeaderProps> = ({ buttonHeader, setQ, q, canSearch = true }) => (
	<div className="d-flex justify-content-md-between justify-content-center flex-column flex-md-row text-center">
		<div className="mb-3">{buttonHeader}</div>

		{canSearch ? (
			<div>
				<span className="icon">
					<FaSearch />
				</span>
				<Input
					type="text"
					value={q}
					placeholder="Buscar..."
					onChange={e => setQ(e.target.value)}
				/>
				<div className="line" style={{ bottom: 'auto' }}></div>
			</div>
		) : null}
	</div>
);

export default Header;
