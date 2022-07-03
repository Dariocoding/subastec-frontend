import { useModal } from '../../context/modal/ModalState';
import ContentModalAuth from '../layout/common/ContentModalAuth';

export const AbrirModalAuth = (initialState: 0 | 1) => {
	const { setModal } = useModal();

	const openModalAuth = () => {
		setModal({
			titulo: '',
			size: 'md',
			content: <ContentModalAuth initialState={initialState} />,
		});
	};

	return { openModalAuth };
};
