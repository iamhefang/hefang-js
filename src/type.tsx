import { _toString, fnToString, getProto, hasOwn, ObjectFunctionString } from "./consts";

/**
 * 判断一个对象是否为基础类型
 * @param obj
 */
export function isBasicType(obj: any): boolean {
	return ["Number", "String", "Boolean"].indexOf(type(obj)) !== -1
}

export function type(obj: any): string {
	const type = /^\[object (.*?)]$/.exec(_toString.call(obj))[1];
	return type === "Number" && isNaN(obj) ? "NaN" : type;
}

export function isNumberic(obj: any): boolean {
	return obj ? (+obj === +obj) : type(obj) === "Number";
}

export function isFunction(func: any): boolean {
	return typeof func === "function";
}

export function isEmptyObject(obj: object) {
	// noinspection LoopStatementThatDoesntLoopJS
	for (const _ in obj) {
		return false;
	}
	return true;
}

export function isPlainObject(obj: object) {
	let proto, Ctor;
	// Detect obvious negatives
	// Use toString instead of jQuery.type to catch host objects
	if (!obj || type(obj) != "Object") {
		return false;
	}
	proto = getProto(obj);
	// Objects with no prototype (e.g., `Object.create( null )`) are plain
	if (!proto) {
		return true;
	}
	// Objects with prototype are plain iff they were constructed by a global Object function
	Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
	return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
}
