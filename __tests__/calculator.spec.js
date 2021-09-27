import sum from "../src/calculator";

it("should sum 2 numbers", () => {
  const actual = sum(2, 3);
  expect(actual).toBe(5);
});

it.todo("this is pending test");
