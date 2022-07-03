import { useContext, useState } from 'react';
import LoaderPageContext, { loaderInterface } from './LoaderPageContext';
import Loader from './Loader';

export type SetLoaderType = (show: boolean, texto?: string) => void;

interface ILoarderPageStateProps {
	children: React.ReactNode;
}

const LoaderPageState: React.FunctionComponent<ILoarderPageStateProps> = props => {
	const [showLoader, setShowLoader] = useState(false);
	// Retorna el usuario autenticado
	const setLoader = (show: boolean) => {
		setShowLoader(show);
	};

	const valuesProvider: loaderInterface = { setLoader, loadingLoader: showLoader };

	return (
		<LoaderPageContext.Provider value={valuesProvider}>
			<Loader show={showLoader} />
			{props.children}
		</LoaderPageContext.Provider>
	);
};
export default LoaderPageState;

export const useLoader = () => useContext(LoaderPageContext);
