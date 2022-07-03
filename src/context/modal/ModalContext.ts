import { createContext } from 'react';
import { ModalInterface } from '../../components/layout/common/Modal/interfaces/modal.interface';
interface contextModalInterface {
	setModal?(props: ModalInterface): void;
	setTitulo?(titulo: string): void;
	cerrarModal?(): void;
	openModal?(): void;
	setShowModal?(value: boolean): void;
}

const initialValues: contextModalInterface = {};

const ModalContext = createContext(initialValues);

export default ModalContext;
