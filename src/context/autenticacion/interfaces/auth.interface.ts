import { UserType } from '../../../entities/user.entity';

export interface AuthInterface {
	at: string | null;
	rt: string | null;
	autenticado: boolean;
	usuario: UserType;
	mensaje: string;
	cargando: boolean;
	usuarioAutenticado?(): Promise<void>;
	cerrarSesion?(): Promise<void>;
	setUsuario?(user: UserType): void;
}
