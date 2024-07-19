const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes.js");

const questions = [
  {
    type: "input",
    name: "userText",
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

function generateShape(userText, textColor, shape, shapeColor) {
  let shapeInput;
  switch (shape) {
    case "Triangle":
      shapeInput = new Triangle(userText, textColor, shapeColor);
      break;
    case "Circle":
      shapeInput = new Circle(userText, textColor, shapeColor);
      break;
    case "Square":
      shapeInput = new Square(userText, textColor, shapeColor);
      break;
  }
  return shapeInput.render();
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log("Generated logo.svg");
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const svgData = generateShape(
      answers.userText,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
    writeToFile("logo.svg", svgData);
  });
}

init();
