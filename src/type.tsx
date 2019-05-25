import {_toString, class2type, fnToString, getProto, hasOwn, ObjectFunctionString} from "./consts";

export enum Types {
    Function = "function",
    String = "string",
    Number = "number",
    Date = "date",
    RegExp = "regexp",
    Error = "error",
    Symbol = "symbol",
    Object = "object",
    Array = "array"
}

for (const type in Types) {
    class2type["[object " + type + "]"] = Types[type];
}

/**
 * 判断一个对象是否为基础类型
 * @param obj
 */
export function isBasicType(obj: any): boolean {
    return [Types.Number, Types.String].indexOf(type(obj)) !== -1
}

export function type(obj: any): Types {
    return class2type[_toString.call(obj)];
}

export function isNumberic(obj: any): boolean {
    return obj ? (+obj === +obj) : type(obj) === Types.Number;
}

export function isFunction(func: any): boolean {
    return typeof func === Types.Function;
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
    if (!obj || toString.call(obj) !== "[object Object]") {
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