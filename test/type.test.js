const H = require("../index")

test("测试type.tsx", function () {
    const map = {
        "Number": 1,
        "Boolean": false,
        "String": "this is a string",
        "NaN": +"hello",
        "RegExp": /test/,
        "Date": new Date(),
        "Array": [1, 2, 3],
        "Object": {},
        "Function": function () {

        }
    };
    for (let mapKey in map) {
        expect(H.type(map[mapKey])).toEqual(mapKey)
    }
});