import {extend} from "./core";
import {isEmptyObject, type} from "./type";


export function deepClone<T>(obj: T): T {
    return extend(true, {}, obj as any as object);
}

/**
 * 深度比较对象是否相等
 * @param obj1
 * @param obj2
 */
export function deepEquals(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (obj2 == obj1 && obj2 !== obj1) return false;
    if (isEmptyObject(obj1) && isEmptyObject(obj2)) return true;
    if (type(obj1) === "Date" && type(obj2) === "Date") {
        return (obj1 as Date).getDate() === (obj2 as Date).getDate();
    }
    if (type(obj1) === "RegExp" && type(obj2) === "RegExp") {
        return obj1 + "" === obj2 + "";
    }
    if (type(obj1) === "Array" && type(obj2) === "Array") {
        return (obj2 as Array<any>).length === (obj1 as Array<any>).length ? (function (arr1, arr2) {
            for (let i = 0; i < arr1.length; i++) {
                if (!deepEquals(arr1[i], arr2[i])) return false;
            }
            return true;
        })(obj1 as Array<any>, obj2 as Array<any>) : false;
    }
    for (const key in obj1) {
        if (key in obj2) {
            if (!deepEquals(obj1[key], obj2[key])) return false;
        } else {
            return false
        }
    }
    return true;
}