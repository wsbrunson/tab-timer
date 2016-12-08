import { compose } from 'ramda';

const SECONDS = 1000;
const MINUTES = 60000;
const HOURS = 3600000;

function formatTimeForClock(time: number): string {
	if (time < 1 || time > 59) {
		return '00';
	} else if (time < 10) {
		return `0${time}`;
	} else {
		return `${time}`;
	}
}

function floorNumber(number: number): number {
	return Math.floor(number);
}

const floorAndStringTime = compose(formatTimeForClock, floorNumber);

export function formatTimeString(time: number): string {
	const hours = time / HOURS;
	const minutes = (time % HOURS) / MINUTES;
	const seconds = ((time % HOURS) % MINUTES) / SECONDS;

	const hoursFormatted = floorAndStringTime(hours);
	const minutesFormatted = floorAndStringTime(minutes);
	const secondsFormatted = floorAndStringTime(seconds);

	return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}
