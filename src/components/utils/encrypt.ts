import CryptoJS from 'crypto-js';

export function Encrypt(value: string) {
	return CryptoJS.AES.encrypt(value, 'darkmax1')
		.toString()
		.replaceAll('+', 'xMl3Jk')
		.replaceAll('/', 'Por21Ld')
		.replaceAll('=', 'Ml32');
}

export function Decrypt(ciphertext: string) {
	ciphertext = ciphertext
		.replaceAll('xMl3Jk', '+')
		.replaceAll('Por21Ld', '/')
		.replaceAll('Ml32', '=');
	return CryptoJS.AES.decrypt(ciphertext, 'darkmax1').toString(CryptoJS.enc.Utf8);
}
