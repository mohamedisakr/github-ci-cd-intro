const sum = require("../calculator");
it("should sum 2 numbers", () => {
  const actual = sum(2, 3);
  expect(actual).toBe(5);
});
