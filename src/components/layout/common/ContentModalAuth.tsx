import { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import FormLogin from '../../views/auth/FormLogin';
import FormRegistro from '../../views/auth/FormRegistro';

interface ITabPanelProps {
	children?: React.ReactNode;
	value: string;
	index?: number;
}

const TabPanel: React.FunctionComponent<ITabPanelProps> = ({ children, value, index }) => (
	<div role="tabpanel" id={`auth-tabpanel-${index}`} aria-labelledby={`auth-tab-${index}`}>
		{value === index.toString() && <Box sx={{ p: 3 }}>{children}</Box>}
	</div>
);

interface IContentModalAuthProps {
	initialState: 0 | 1;
}

const ContentModalAuth: React.FunctionComponent<IContentModalAuthProps> = props => {
	const { initialState } = props;
	const tabs = ['Iniciar Sesión', 'Registro'];
	const [stateTab, setStateTab] = useState(initialState);
	//@ts-ignore
	const numberTab: 0 | 1 = [0, 1].indexOf(stateTab);
	const handleChange = (e: any, newValue: 0 | 1) => setStateTab(newValue);

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={stateTab.toString()}
					onChange={handleChange}
					aria-label="Tabs Auth"
				>
					{tabs.map(tab => (
						<Tab label={tab} key={tab} />
					))}
				</Tabs>
			</Box>

			<TabPanel value={numberTab.toString()} index={0}>
				<FormLogin />
			</TabPanel>

			<TabPanel value={numberTab.toString()} index={1}>
				<FormRegistro />
			</TabPanel>
		</Box>
	);
};

export default ContentModalAuth;
