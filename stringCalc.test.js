const add = require("./stringCalc");

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});
