import {flatArray, range} from "../src/array";

test("测试array.tsx", function () {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(1, 5, 2)).toEqual([1, 3, 5])
});

test("测试数组扁平化", function () {
    expect(flatArray([1, 2, 3, [4, 5, [6]]])).toEqual([1, 2, 3, 4, 5, 6])
});