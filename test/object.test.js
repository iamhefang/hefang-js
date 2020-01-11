const H = require("../index");

test("测试object.tsx", function () {
	expect(H.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
	expect(H.range(1, 5, 2)).toEqual([1, 3, 5]);

	const obj = {
		a: {
			aa: {
				aaa: 2
			}
		},
		b: {
			bb: 111
		},
		c: {},
		500: "error"
	};

	expect(H.chainingCheck(obj, "a.aa.aaa")).toEqual(2);
	expect(H.chainingCheck(obj, "a", "aa", "aaa")).toEqual(2);
	expect(H.chainingCheck(obj, "c.cc.ccc")).toBeNull();
	expect(H.chainingCheck(obj, "c")).toEqual({});
	expect(H.chainingCheck(obj, "d")).toBeNull();
	expect(H.chainingCheck(obj, 500)).toEqual("error")
});
