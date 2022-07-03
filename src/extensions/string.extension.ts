// eslint-disable-next-line no-extend-native
/* eslint-disable @typescript-eslint/no-unused-vars */
interface String {
	prefix(): string;
}

interface Date {
	sameDay(date: Date | string): boolean;
	greaterThan(date: Date | string): boolean;
	lessThan(date: Date | string): boolean;
}

// eslint-disable-line no-unused-vars
String.prototype.prefix = function () {
	return this.trim().split(' ')[0];
};
