import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/material';
//@ts-ignore
import { toast } from 'react-toastify';
import { useLoader } from '../../context/loaderpage/LoaderPageState';

interface IPayPhoneButtonsProps {
	monto: number;
	onAprooved(details: any): void;
}

export const PayPhoneButtons: React.FunctionComponent<IPayPhoneButtonsProps> = props => {
	const { monto, onAprooved } = props;
	const { setLoader } = useLoader();
	//@ts-ignore
	const payphone = window.payphone;

	React.useEffect(() => {
		const clientTransactionId = uuidv4();
		setLoader(true);
		//@ts-ignore
		document.getElementById('payphone-div').innerHTML = '';
		payphone.Button({
			//token obtenido desde la consola de developer
			token: `_1Z4Zdt8iIZyAweQvvsZo0d9ERp3Wu0dgu4TX2g05wgi4ocNpy4M5YLRlhDVHeZgK4eGi79SYHLF1J1Xz0JpLZFt6KjSl_k-DiwUwa_J_8gyiPJVFhQqonfnlcP77NnBpoK-cjreyYKA2ezAJJD3sJEzCF9m9RcB-7Ks_LgCrUmzABRaQjJbC3k2n6fluMQ-Gtwui0DnHjeLPHSkq-ecjkgcYFjXDk_wMM3bLdZBoQzj8KjvVZqbf_3TFhzp-g27oXwaFk4Dsq64owA0lmxd8ivJ-gKv-sD98VJGpflGDbyVs2xcHtGr7VIYTCqXVAP5-lTyyw`,

			//PARÁMETROS DE CONFIGURACIÓN
			btnHorizontal: true,
			btnCard: true,

			createOrder: function(actions) {
				return actions.prepare({
					amount: (monto * 100).toString(),
					amountWithoutTax: (monto * 100).toString(),
					currency: 'USD',
					clientTransactionId,
					reference: 'Pago de paquete bids en subastec',
				});
			},
			onComplete: function(model, actions) {
				//Se confirma el pago realizado
				actions.confirm({
					id: model.id,
					clientTxId: model.clientTxId,
				})
					.then(onAprooved)
					.catch(function(err) {
						console.log(err);
						toast.error('Ha ocurrido un error', {
							position: 'top-center',
						});
					});
			},
		}).render('#payphone-div');
		const spinner = document.getElementById('spinner');
		const config = { attributes: true, childList: true, subtree: true };

		const observer = new MutationObserver(function(event) {
			const target = event[0].target;
			if (
				//@ts-ignore
				target.classList.contains('d-none') &&
				document.getElementById('btn-mastercard')
			) {
				setTimeout(() => {
					//@ts-ignore
					document.getElementById('btn-mastercard').click();
					setLoader(false);
				}, 500);
			}
		});
		//@ts-ignore
		observer.observe(spinner, config);
	}, [monto]);

	return (
		<>
			<Box
				id="payphone-div"
				display={'none'}
				justifyContent={'center'}
				width={'100%'}
			></Box>
		</>
	);
};
