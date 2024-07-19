const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "What 3 letters would you like inside your SVG?",
    validate: (input) =>
      input.length <= 3 || "Text must be 3 characters or less",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What color would you like your text to be? (enter a color keyword OR hexadecimal)",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your SVG file:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What color would you like your shape/logo to be? (enter a color keyword OR hexadecimal)",
  },
];

function generateShape(text, textColor, shape, shapeColor) {
  let shapeInput;
  switch (shape) {
    case "Triangle":
      shapeInput = new Triangle();
      break;
    case "Circle":
      shapeInput = new Circle();
      break;
    case "Square":
      shapeInput = new Square();
      break;
  }
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log("Generated logo.svg");
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const svgData = generateShape(answers);
    writeToFile("logo.svg", svgData);
  });
}

init();
