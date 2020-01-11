const H = require("../index");
test("测试随机函数", function () {
	[20, 30, 40, 32, 12, 54, 23].forEach(length => {
		expect(H.randString(length).length).toEqual(length);
	});
	[[-100, 100], [2, 6], [90, 100], [0, 10]].forEach(items => {
		const res = H.randNumber(items[0], items[1]);
		expect(items[0] <= res && res < items[1]).toEqual(true)
	})
});
