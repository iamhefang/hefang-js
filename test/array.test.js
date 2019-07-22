const {range} = require("../src/array")


test("测试array.tsx", function () {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(1, 5, 2)).toEqual([1, 3, 5])
});