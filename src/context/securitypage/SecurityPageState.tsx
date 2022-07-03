import SecurityPage from './SecurityPage';
import * as React from 'react';
interface SecurityPageProvideValues {
	isOpenSecurityPage?: boolean;
	setIsOpenSecurityPage?(value: boolean): void;
}
const SECURITYITEMS = 'SECURITYITEMS';
const SecurityPageContext = React.createContext<SecurityPageProvideValues>({});
interface ISecurityPageStateProps {
	children: React.ReactNode;
}

const SecurityPageState: React.FunctionComponent<ISecurityPageStateProps> = props => {
	const [isOpenSecurityPage, setIsOpenSecurityPage] = React.useState(
		process.env.NODE_ENV === 'production' ? true : false
	);

	const [securityTimes, setSecurityTimes] = React.useState(
		parseInt(localStorage.getItem(SECURITYITEMS))
	);

	const valuesProvider: SecurityPageProvideValues = {
		isOpenSecurityPage,
		setIsOpenSecurityPage,
	};

	React.useEffect(() => {
		if (process.env.NODE_ENV === 'production') return;
		if (!isOpenSecurityPage && securityTimes <= 1) {
			const quinceMinutos = 900000;
			setTimeout(() => {
				setIsOpenSecurityPage(true);
			}, quinceMinutos);
			localStorage.setItem(SECURITYITEMS, '5');
		} else {
			const itemSecurity = parseInt(localStorage.getItem(SECURITYITEMS));
			localStorage.setItem(SECURITYITEMS, (itemSecurity - 1).toString());
		}
	}, [isOpenSecurityPage]);

	return (
		<SecurityPageContext.Provider value={valuesProvider}>
			<SecurityPage
				isOpen={isOpenSecurityPage}
				setIsOpen={setIsOpenSecurityPage}
			/>
			{isOpenSecurityPage ? null : props.children}
		</SecurityPageContext.Provider>
	);
};
export default SecurityPageState;

export const useSecurityPage = () => React.useContext(SecurityPageContext);
