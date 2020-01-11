import { padStart } from "./string";

const smallMonth = [4, 6, 9, 11];

export function now(): Date {
	return new Date;
}

export interface DateSpan {
	start: Date
	end: Date
}

export function firstWeek(month: number, year: number) {
	const date = new Date(year, month - 1, 1);
	return date.getDay();
}

export function formatDate(date: Date): string

export function formatDate(format: string): string

export function formatDate(format: string, date: Date): string

export function formatDate(format?, date?): string {
	if (format instanceof Date) {
		date = format;
		format = null
	}
	format = format || "yyyy-MM-dd HH:mm:ss";
	date = date || now();
	const cfg = {
		yyyy: date.getFullYear(),
		yy: (date.getFullYear() + '').substring(2),
		M: date.getMonth() + 1,
		MM: padStart(date.getMonth() + 1, 2, 0),
		d: date.getDate(),
		dd: padStart(date.getDate(), 2, 0),
		h: date.getHours(),
		HH: padStart(date.getHours(), 2, 0),
		m: date.getMinutes(),
		mm: padStart(date.getMinutes(), 2, 0),
		s: date.getSeconds(),
		ss: padStart(date.getSeconds(), 2, 0)
	};
	return format.replace(/([a-z])(\1)*/ig, function (m) {
		return cfg[m] || m;
	});

}

export function daysOfMonth(month: number, year?: number) {
	return month === 2 ? (isLeapYear(year || now().getFullYear()) ? 29 : 28) :
		(smallMonth.indexOf(month) > -1 ? 30 : 31)
}

export function isLeapYear(year: number): boolean {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}


export function currentMonth(): DateSpan {
	const n = now();
	return {
		start: new Date(n.getFullYear(), n.getMonth(), 1, 0, 0, 0, 0),
		end: new Date(n.getFullYear(), n.getMonth(), daysOfMonth(n.getMonth() + 1), 23, 59, 59, 999)
	}
}

export function lastMonth(): DateSpan {
	const n = now();
	return {
		start: new Date(n.getFullYear(), n.getMonth() - 1, 1, 0, 0, 0, 0),
		end: new Date(n.getFullYear(), n.getMonth() - 1, daysOfMonth(n.getMonth()), 23, 59, 59, 999)
	}
}


export function today(): DateSpan {
	const n = now();
	return {
		start: new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0),
		end: new Date(n.getFullYear(), n.getMonth(), n.getDate(), 23, 59, 59, 999)
	}
}


export function yesterday(): DateSpan {
	const n = now();
	return {
		start: new Date(n.getFullYear(), n.getMonth(), n.getDate() - 1, 0, 0, 0, 0),
		end: new Date(n.getFullYear(), n.getMonth(), n.getDate() - 1, 23, 59, 59, 999)
	}
}
