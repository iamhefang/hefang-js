// UTF-8 encoding
export const utf8 = {
	// Convert a string to a byte array
	stringToBytes: function (str: string): any[] {
		return bin.stringToBytes(unescape(encodeURIComponent(str)));
	}
	,

	// Convert a byte array to a string
	bytesToString: function (bytes: any[]): string {
		return decodeURIComponent(escape(bin.bytesToString(bytes)));
	}
};

export const bin = {
	// Convert a string to a byte array
	stringToBytes: function (str: string): any[] {
		let bytes = [], i = 0;
		for (; i < str.length; i++)
			bytes.push(str.charCodeAt(i) & 0xFF);
		return bytes;
	},

	// Convert a byte array to a string
	bytesToString: function (bytes: any[]): string {
		let str = [], i = 0;
		for (; i < bytes.length; i++)
			str.push(String.fromCharCode(bytes[i]));
		return str.join('');
	}
};
