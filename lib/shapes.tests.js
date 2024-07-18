const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("Should render a blue triangle", () => {});
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

describe("Circle", () => {
  it("Should render a blue circle", () => {});
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    // TODO: Update polygon points to correct shape
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

describe("Square", () => {
  it("Should render a blue square", () => {});
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    // TODO: Update polygon points to correct shape
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});
