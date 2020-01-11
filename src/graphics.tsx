export interface Point {
	x: number
	y: number
}

export type Path = Point[];

/**
 * 判断点在不在圆内
 * @param {Point} point 要判断的点
 * @param {Point} center 圆心
 * @param {number} radius 半径
 * @returns {boolean}
 */
export function isPointInCircle(point: Point, center: Point, radius: number) {
	return Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2) <= Math.pow(radius, 2);
}

/**
 * 判断点在不在路径内
 * @param {Point} point 要判断的点
 * @param {Point[]} path 要断送的路径点
 * @returns {boolean}
 */
export function isPointInPath(point: Point, path: Path) {
	if (!point || !path || path.length < 1)
		return false;
	const xs = []
		, ys = [];
	for (let i = 0; i < path.length; i++) {
		xs.push(path[i].x);
		ys.push(path[i].y);
	}
	if (point.x < Math.min.apply(Math, xs) || point.x > Math.max.apply(Math, xs) || point.y < Math.min.apply(Math, ys) || point.y > Math.max.apply(Math, ys)) {
		return false;
	}
	let c = false;
	for (let i = 0, j = path.length - 1; i < path.length; j = i++) {
		if (((ys[i] > point.y) != (ys[j] > point.y)) && (point.x < (xs[j] - xs[i]) * (point.y - ys[i]) / (ys[j] - ys[i]) + xs[i]))
			c = !c;
	}
	return c;
}