import {flatArray} from "./array";
import {type} from "./type";

/**
 * 链式判断
 * @param {any} obj
 * @param  {...string} attrs
 */
export function chainingCheck(obj: object | any, ...attrs: (string | number)[]): any | null {
	if (type(obj) !== "Object") return obj;
	const attrbutes = flatArray(attrs.map(attr => typeof attr === "string" && attr.indexOf('.') !== -1 ? attr.split('.') : attr), attrs.length);
	let attr;
	for (let idx = 0; idx < attrs.length; idx++) {
		if (type(obj) !== "Object") return null;
		attr = attrbutes[idx];
		if (!obj || !(attr in obj)) return null;
		obj = obj[attr]
	}
	return obj;
}

// export function diffObject(obj1: object, obj2: object, options): false | object {
//
// }
