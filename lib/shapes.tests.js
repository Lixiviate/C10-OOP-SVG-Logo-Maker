const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("Should render a blue triangle", () => {});
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
  );
});

describe("Circle", () => {
  it("Should render a blue circle", () => {});
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r="90" cx="100" cy="100" fill="blue" />
    </svg>`
  );
});

describe("Square", () => {
  it("Should render a blue square", () => {});
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" x="10" y="10" fill="blue" />
    </svg>`
  );
});
