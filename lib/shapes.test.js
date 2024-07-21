const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("Should render a blue triangle with red text", () => {});
  const shape = new Triangle("ABC", "red", "blue");
  expect(shape.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue" />
      <text x="150" y="135" font-size="40" text-anchor="middle" fill="red">ABC</text>
    </svg>`
  );
});

describe("Circle", () => {
  it("Should render a blue circle with red text", () => {});
  const shape = new Circle("DEF", "red", "blue");
  expect(shape.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="blue" />
      <text x="150" y="110" font-size="40" text-anchor="middle" fill="red">DEF</text>
    </svg>`
  );
});

describe("Square", () => {
  it("Should render a blue square with red text", () => {});
  const shape = new Square("GHI", "red", "blue");
  expect(shape.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="150" height="150" fill="blue" />
      <text x="125" y="135" font-size="40" text-anchor="middle" fill="red">GHI</text>
    </svg>`
  );
});
