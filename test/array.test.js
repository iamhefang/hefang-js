const H = require("../index");

test("测试array.tsx", function () {
    expect(H.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(H.range(1, 5, 2)).toEqual([1, 3, 5])
});

test("测试数组扁平化", function () {
    expect(H.flatArray([1, 2, 3, [4, 5, [6]]])).toEqual([1, 2, 3, 4, 5, [6]]);
    expect(H.flatArray([1, 2, 3, [4, 5, [6]]], 2)).toEqual([1, 2, 3, 4, 5, 6])
});