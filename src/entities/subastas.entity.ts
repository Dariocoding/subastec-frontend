import { ProductoType } from './articulos.entity';
import { FavoritosType } from './favoritos.entity';
import { PaqueteBidType } from './paquete.bids.entity';
import { SubastasReclamoType } from './subastas-reclamo';
import { UserType } from './user.entity';

export interface SubastaType {
	idsubasta?: number;
	titulo?: string;
	fotoSubasta?: string;
	producto?: ProductoType;
	productoid?: number;
	paqueteBid?: PaqueteBidType;
	paqueteBidId?: number;
	fechaInicio?: Date;
	fechaFinalizacion?: Date;
	costopuja?: number;
	preciominimo?: number;
	preciosubasta?: number;
	date_created?: Date;
	status?: number;
	winnerUser?: UserType;
	winnerUserId?: number;
	favoritos?: FavoritosType[];
	reclamo?: SubastasReclamoType;
}
