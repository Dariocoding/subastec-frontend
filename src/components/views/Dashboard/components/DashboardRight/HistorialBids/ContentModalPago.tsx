import { ListItemText, List, ListItem, Divider } from '@mui/material';
import { SMONEY } from '../../../../../utils';
import { PagoType } from '../../../../../../entities/pagos.entity';
import moment from 'moment-timezone';
import * as React from 'react';
interface IContentModalPagoProps {
	pago: PagoType;
}

const ContentModalPago: React.FC<IContentModalPagoProps> = ({ pago }) => (
	<List>
		<ListItem>
			<ListItemText>
				<b>ID:</b> {pago.idpago}
			</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemText>
				<b>ID Transacción:</b> {pago.transactionId}
			</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemText>
				<b>Referencia:</b> {pago.reference}
			</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemText>
				<b>Aporte:</b> {pago.amount / 100} {SMONEY}
			</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemText>
				<b>Fecha de pago:</b>{' '}
				{moment(pago.date_created).format('DD/MM/YYYY')}
			</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemText>
				<b>Estado:</b> {pago.transactionStatus}
			</ListItemText>
		</ListItem>
		<Divider variant="inset" component="li" />

		<ListItem>
			<ListItemText>
				<b>Paquete bid:</b>
			</ListItemText>
			<List>
				<ListItem>
					{pago.cantidadBidsTotal}
					Bids
				</ListItem>
			</List>
		</ListItem>
	</List>
);
export default ContentModalPago;
