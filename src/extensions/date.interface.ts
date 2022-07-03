import moment from 'moment-timezone';
// eslint-disable-next-line no-extend-native
/* eslint-disable @typescript-eslint/no-unused-vars */

// eslint-disable-line no-unused-vars
Date.prototype.sameDay = function (date: Date | string) {
	return moment(this).isSame(date);
};

// eslint-disable-line no-unused-vars
Date.prototype.greaterThan = function (date: Date | string) {
	return moment(this).isAfter(date);
};

// eslint-disable-line no-unused-vars
Date.prototype.lessThan = function (date: Date | string) {
	return moment(this).isBefore(date);
};
