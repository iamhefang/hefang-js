import { DIGIT, LOWER, UPPER } from "../consts";

const base64map = `${UPPER}${LOWER}${DIGIT}+/`;

export interface Md5Sha1Options {
	encoding: string
	asString: boolean
	asBytes: boolean
}

export function rotl(n, b) {
	return (n << b) | (n >>> (32 - b));
}

export function rotr(n, b) {
	return (n << (32 - b)) | (n >>> b);
}

export function endian(n) {
	// If number given, swap endian
	if (n.constructor == Number) {
		return rotl(n, 8) & 0x00FF00FF | rotl(n, 24) & 0xFF00FF00;
	}

	// Else, assume array and swap all items
	for (let i = 0; i < n.length; i++)
		n[i] = endian(n[i]);
	return n;
}

export function bytesToWords(bytes) {
	let words = [], i = 0, b = 0;
	for (; i < bytes.length; i++, b += 8)
		words[b >>> 5] |= bytes[i] << (24 - b % 32);
	return words;
}

export function wordsToBytes(words) {
	let bytes = [], b = 0;
	for (; b < words.length * 32; b += 8)
		bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	return bytes;
}


// Convert a byte array to a hex string
export function bytesToHex(bytes) {
	let hex = [], i = 0;
	for (; i < bytes.length; i++) {
		hex.push((bytes[i] >>> 4).toString(16));
		hex.push((bytes[i] & 0xF).toString(16));
	}
	return hex.join('');
}

// Convert a hex string to a byte array
export function hexToBytes(hex) {
	let bytes = [], c = 0;
	for (; c < hex.length; c += 2)
		bytes.push(parseInt(hex.substr(c, 2), 16));
	return bytes;
}

// Convert a byte array to a base-64 string
export function bytesToBase64(bytes) {
	let base64 = [], i = 0;
	for (; i < bytes.length; i += 3) {
		const triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
		for (let j = 0; j < 4; j++)
			if (i * 8 + j * 6 <= bytes.length * 8)
				base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
			else
				base64.push('=');
	}
	return base64.join('');
}

// Convert a base-64 string to a byte array
export function base64ToBytes(base64) {
	// Remove non-base-64 characters
	base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
	let bytes = [], i = 0, imod4 = 0;
	for (; i < base64.length; imod4 = ++i % 4) {
		if (imod4 == 0) continue;
		bytes.push(((base64map.indexOf(base64.charAt(i - 1))
			& (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
			| (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	}
	return bytes;
}
