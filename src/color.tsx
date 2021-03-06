import { padStart } from "./string";

export type ColorMap = { [key: string]: string };

export interface RGBAColor {
	red: number
	green: number
	blue: number
	alpha: number
}

export interface HSLColor {
	hue: number
	saturation: number
	lightness: number
}

/**
 * CSS 颜色 Level 3 名称对应的16进制颜色值
 * @type ColorMap
 */
export const colorMap: ColorMap = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	gold: "#ffd700",
	goldenrod: "#daa520",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavender: "#e6e6fa",
	lavenderblush: "#fff0f5",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32",
};

/**
 * 把rgb16进制颜色, rgb, rgba或颜色名字符串解析为rgba的具体值
 * @param {string} colorString
 * @returns {RGBAColor}
 */
export function parseColor(colorString: string): RGBAColor {
	const color: RGBAColor = {
		red: 0, blue: 0, green: 0, alpha: 1
	};
	if (colorString == null || colorString.length < 3) {
		throw Error("颜色无效")
	}
	colorString = colorString.toLowerCase();
	let res: RegExpExecArray;
	if (res = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(colorString)) {
		color.red = +`0x${res[1]}`;
		color.green = +`0x${res[2]}`;
		color.blue = +`0x${res[3]}`;
	} else if (res = /^(rgba)?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})(,(0|(0?\.[0-9]{1,2})|1))\)$/i.exec(colorString)) {
		color.red = +`0x${res[2]}`;
		color.green = +`0x${res[3]}`;
		color.blue = +`0x${res[4]}`;
		if (res[1] === "rgba" && res.length == 7) {
			color.alpha = +res[6];
		}
	} else if (colorString in colorMap) {
		return parseColor(colorMap[colorString])
	}
	return color;
}

function p(rgb: number): string {
	return padStart(rgb.toString(16), 2, 0)
}

export function rgba2string(red: number, green: number, blue: number, alpha: number = 1) {
	return alpha === 1 ? `#${p(red)}${p(green)}${p(blue)}` : `rgba(${red},${green},${blue},${alpha})`;
}

export function color2string(color: RGBAColor) {
	return rgba2string(color.red, color.green, color.blue, color.alpha)
}

/**
 *
 * @param {number} h [0,360)
 * @param {number} s [0,1]
 * @param {number} l [0,1]
 * @returns {RGBAColor}
 */
export function hsl2rgb(h: number, s: number, l: number): RGBAColor {
	const rgb: RGBAColor = {
		red: 0, green: 0, blue: 0, alpha: 1
	};
	if (s === 0) {
		rgb.red = rgb.green = rgb.blue = l
	} else {
		h = h / 360;
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		rgb.red = hue2rgb(p, q, h + 1 / 3);
		rgb.green = hue2rgb(p, q, h);
		rgb.blue = hue2rgb(p, q, h - 1 / 3);
	}
	["red", "green", "blue"].forEach(c => rgb[c] = Math.round(rgb[c] * 255));
	return rgb
}

export function hslColor2Rgb(hsl: HSLColor): RGBAColor {
	return hsl2rgb(hsl.hue, hsl.saturation, hsl.lightness)
}

export function rgbColor2Hsl(color: RGBAColor): HSLColor {
	return rgb2hsl(color.red, color.green, color.blue)
}

/**
 *
 * @param {number} r [0,255]
 * @param {number} g [0,255]
 * @param {number} b [0,255]
 * @returns {HSLColor}
 */
export function rgb2hsl(r: number, g: number, b: number): HSLColor {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b), min = Math.min(r, g, b);
	let h, s, l = (max + min) / 2;
	if (max == min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	return { hue: Math.round(h * 360), saturation: +s.toFixed(2), lightness: +l.toFixed(2) };
}

function hue2rgb(p: number, q: number, t: number) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
