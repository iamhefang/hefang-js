import { execute } from "./core";

export function debounce<T>(func: Function, wait: number = 200): Function {
	let lastCallTimer;
	return function (args) {
		lastCallTimer && clearTimeout(lastCallTimer);
		lastCallTimer = setTimeout(() => {
			execute(func, ...args)
		}, wait)
	}
}
