import {timestampToDays} from '../../../utils';

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}
export const isDateValid = (value) => {
	const date = new Date(value);
	const toDay = new Date();
	return date.getTime()-toDay.getTime() > 0 &&  Math.round(timestampToDays(date.getTime()-toDay.getTime()) ) >= 30
}