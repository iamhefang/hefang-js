import {DIGIT, LOWER, UPPER} from "./consts";

export function randomBytes(length: number) {
    let bytes = [];
    for (; length > 0; length--)
        bytes.push(Math.floor(Math.random() * 256));
    return bytes;
}

/**
 * 生成长度为length的随机字符串
 * @param length
 * @param src
 * @returns {string}
 */
export function randString(length: number, src?: string): string {
    src = src || `${LOWER}${UPPER}${DIGIT}\`~!@#$%^&*()-=_+[]\\{}|;':",./<>?`;
    let i = 0, len = src.length - 1, buffer = '';
    for (; i < length; i++) {
        buffer += src.charAt(randNumber(0, len));
    }
    return buffer;
}

export function randUpper(length: number): string {
    return randString(length, UPPER)
}


export function randLower(length: number): string {
    return randString(length, LOWER)
}

export function randLetter(length: number, containDigit: boolean = false): string {
    return randString(length, `${UPPER}${LOWER}${containDigit ? DIGIT : ""}`)
}

/**
 * 生成在min和max之间的随机数
 * @param min
 * @param max
 * @returns {Number}
 */
export function randNumber(min: number, max: number): number {
    return ~~(Math.random() * (max - min + 1) + min);
}