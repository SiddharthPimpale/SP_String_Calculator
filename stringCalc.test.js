const add = require("./stringCalc");

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the same number if a single number is passed", () => {
    expect(add("1")).toBe(1);
});

test("returns sum of two numbers separated by comma", () => {
    expect(add("1,2")).toBe(3);
});

test("returns sum of multiple numbers separated by comma", () => {
    expect(add("2,3,5,7,11")).toBe(28);
});
