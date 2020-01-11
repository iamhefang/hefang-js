import { isFunction, isPlainObject } from "./type";
import { guid } from "./hash/guid";

declare const global, wx;

export const root = global || wx || self || window;

export function Symbol(desc?: string) {
	if ("Symbol" in window) {
		return execute(window['Symbol'], desc)
	} else {
		return `Symbol${desc}${guid()}`
	}
}

/**
 * 空函数
 */
export function noop() {

}

export function bindThis(obj: object) {
	for (const method in obj) {
		if (obj.hasOwnProperty(method))
			obj[method] = obj[method].bind(obj)
	}
}

export function execute(func: any, ...params: any[]): any {
	return isFunction(func) ? func(...params) : undefined;
}


export function extend(copy: object): any;
export function extend(target: object, copy: object, ...objs: object[]): any;
export function extend(deep: boolean, target: object, copy: object, ...objs: object[]): any;
export function extend(a, b?, c?) {
	let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1;
	const length = arguments.length;
	let deep = false;
	// Handle a deep copy situation
	if (typeof target === "boolean") {
		deep = target;
		// Skip the boolean and the target
		target = arguments[i] || {};
		i++;
	}
	// Handle case when target is a string or something (possible in deep copy)
	if (typeof target !== "object" && !isFunction(target)) {
		target = {};
	}
	// Extend jQuery itself if only one argument is passed
	if (i === length) {
		target = root["HeFang"];
		i--;
	}
	for (; i < length; i++) {
		// Only deal with non-null/undefined values
		if ((options = arguments[i]) != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];
				// Prevent never-ending loop
				if (target === copy) {
					continue;
				}
				// Recurse if we're merging plain objects or arrays
				if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];
					} else {
						clone = src && isPlainObject(src) ? src : {};
					}
					// Never move original objects, clone them
					target[name] = extend(deep, clone, copy);
					// Don't bring in undefined values
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}
	// Return the modified object
	return target;
}
