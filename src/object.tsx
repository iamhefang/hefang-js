import { flatArray } from "./array";

/**
 * 链式判断
 * @param {any} obj
 * @param  {...string} attrs
 */
export function chainingCheck(obj: object | any, ...attrs: string[]): any {
    attrs = flatArray(attrs.map(attr => attr.indexOf('.') === -1 ? attr : attr.split('.')), attrs.length);
    let attr;
    for (let idx = 0; idx < attrs.length; idx++) {
        attr = attrs[idx];
        if (!obj || !(attr in obj)) return null;
        obj = obj[attr]
    }
    return obj;
}

// export function diffObject(obj1: object, obj2: object, options): false | object {
//
// }