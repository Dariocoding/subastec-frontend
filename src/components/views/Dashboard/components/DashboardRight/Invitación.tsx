import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useAuthContext } from '../../../../../context/autenticacion/authState';
import CopyToClipBoardButton from '../../../../layout/common/CopyToClipboardButton';
import Tile from '../../../../layout/common/Tile';
import { Decrypt, Encrypt, LINKPAGE } from '../../../../utils';

interface IInvitacionProps {}

const Invitacion: React.FunctionComponent<IInvitacionProps> = props => {
	const { usuario } = useAuthContext();

	if (!Object.keys(usuario).length) return;

	const idEncryptado = Encrypt(usuario.iduser.toString());
	const LinkRegistro = LINKPAGE + '/registro-invitacion/' + idEncryptado;

	return (
		<Tile>
			<Typography align={'center'} variant={'h4'} color={'#44718f'}>
				¡Para ganar bids de manera gratuita también puedes invitar personas!
			</Typography>

			<Typography align={'center'} variant={'h6'} color={'#44718f'}>
				Para poder recibir los bids primero la persona invitada tiene que
				comprar un paquete de bids
			</Typography>

			<Box
				marginTop={4}
				display={'flex'}
				justifyContent={'center'}
				flexDirection={'column'}
			>
				<Typography align={'center'} variant={'subtitle2'} color={'#000'}>
					{LinkRegistro}
				</Typography>

				<CopyToClipBoardButton
					textToCopy={LinkRegistro}
					style={{ margin: 'auto', marginTop: '10px' }}
				/>
			</Box>
		</Tile>
	);
};

export default Invitacion;
