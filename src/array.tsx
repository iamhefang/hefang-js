/**
 * 生成[1,5]的序列数组
 * @param {number} min 开始值
 * @param {number} max 结束值
 * @param {number} step 步长
 */
export function range(min: number, max: number, step: number = 1) {
	const arr = [];
	step = step || 1;
	for (let i = min; i <= max; i += step) {
		arr.push(i);
	}
	return arr;
}

/**
 * 数组扁平化
 * @param {any[]} array 数组
 * @param {number} deep 深度
 */
export function flatArray<T>(array: (T[] | T)[], deep: number = 1): T[] {
	return "flat" in Array.prototype ? array["flat"](deep) :
		deep > 0 ? array.reduce((acc, val) => acc['concat'](Array.isArray(val) ? flatArray(val, deep - 1) : val), [])
			: array.slice();
}