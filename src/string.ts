export function endsWith(string: string, ...search: string[]) {
    for (let i = 0; i < search.length; i++) {
        if (string.endsWith(search[i])) return true;
    }
    return false;
}

export function startsWith(string: string, ...search: string[]) {
    for (let i = 0; i < search.length; i++) {
        if (string.startsWith(search[i])) return true;
    }
    return false;
}

export function repeat(string: string, count: number): string {
    let str = "";
    for (let i = 0; i < count; i++) {
        str += string;
    }
    return str;
}

export function padStart(string: string | number, targetLength: number, padChar: string | number) {
    if (padChar === void 0) {
        padChar = ' ';
    }
    const s = string + "", pc = padChar + '', padLen = targetLength - s.length;
    if (s.length >= targetLength)
        return s;
    const rt = repeat(pc, Math.ceil((targetLength - s.length) / pc.length)).substr(0, padLen);
    return rt + s;
}

/**
 * 填充字符串结尾
 * @param {string | number} str 要填充的字符串
 * @param {number} targetLength 目标长度
 * @param {string | number} padChar 要填充的字符
 * @returns {string}
 */
export function padEnd(str: string | number, targetLength: number, padChar: string | number = ' ') {
    const s = str + ""
        , pc = padChar + ''
        , padLen = targetLength - s.length;
    if (s.length >= targetLength)
        return s;
    if (s.length >= targetLength)
        return s;
    return s + (repeat(pc, Math.ceil((targetLength - s.length) / pc.length))).substr(0, padLen);
}

export function trimLeft(str: string) {
    if (!str) return str;
    if ('trimLeft' in String.prototype) {
        return String.prototype.trimLeft.call(str)
    }
    return str.replace(/^\s+/, '')
}

export function trimRight(str: string) {
    if (!str) return str;
    if ('trimRight' in String.prototype) {
        return String.prototype.trimRight.call(str)
    }
    return str.replace(/\s+$/, '')
}


export function trim(str: string) {
    if (!str) return str;
    if ('trim' in String.prototype) {
        return String.prototype.trim.call(str)
    }
    return str.replace(/(^\s+)|(\s+$)/, '')
}

