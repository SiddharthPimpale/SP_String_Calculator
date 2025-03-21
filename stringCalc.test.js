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

test("handles new lines as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiter", () => {
    expect(add("//-\n1-2-3")).toBe(6);
});

test("throws an exception when negative numbers are used", () => {
    expect(() => add("-1,-2")).toThrow(
        "negative numbers are not allowed: -1,-2"
    );
});

test("Ignore number greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
});
