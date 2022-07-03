import { UserType } from '../../../entities';

export interface UserLoginType {
	username?: string;
	password?: string;
}

export interface UserRegistroType extends UserType {
	passwordConfirm?: string;
}
export interface ChangePasswordType {
	password?: string;
	passwordConfirm?: string;
}
