import { PF } from './conts';
import { UserType } from '../../entities';
const fotoPerfil = require('../../assets/images/perfil.png');

const rgxp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
export const validarFotoPerfil = (usuario: UserType) => {
	if (!usuario || !usuario.image_profile) return fotoPerfil;
	if (rgxp.test(usuario.image_profile)) return usuario.image_profile;
	return PF + usuario.image_profile;
};
